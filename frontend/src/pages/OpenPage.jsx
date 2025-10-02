
import React, { useState, useRef, useEffect } from "react";
import { useUser } from "../UserContext.jsx";

const API_URL = "http://localhost:8000"; // Change if backend runs elsewhere

function OpenPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [sessionId, setSessionId] = useState(null);
  const chatEndRef = useRef(null);
  const { user } = useUser();

  // Start a chat session on mount, using logged-in user's ID
  useEffect(() => {
    async function startSession() {
      const userId = user?.id;
      if (!userId) {
        setSessionId("demo-session");
        return;
      }
      try {
        const res = await fetch(`${API_URL}/start_session`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user_id: userId })
        });
        if (!res.ok) throw new Error("Backend error");
        const data = await res.json();
        if (data.success && data.data && data.data[0]?.id) {
          setSessionId(data.data[0].id);
        } else {
          setSessionId("demo-session"); // fallback
        }
      } catch (err) {
        setSessionId("demo-session"); // fallback
      }
    }
    startSession();
  }, [user]);

  // Fetch messages when sessionId changes or after sending
  useEffect(() => {
    if (!sessionId || sessionId === "demo-session") return;
    async function fetchMessages() {
      try {
        const res = await fetch(`${API_URL}/get_messages/${sessionId}`);
        if (!res.ok) throw new Error("Backend error");
        const data = await res.json();
        if (data.success) {
          setMessages(data.messages || []);
        }
      } catch (err) {
        // fallback: do nothing
      }
    }
    fetchMessages();
  }, [sessionId]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || !sessionId) return;

    if (sessionId === "demo-session") {
      // Fallback: just update local state
      setMessages((msgs) => [
        ...msgs,
        { sender: "user", message: input },
        { sender: "ai", message: `You asked: \"${input}\". (AI response here)` }
      ]);
      setInput("");
      return;
    }

    // Send user message to backend
    try {
      await fetch(`${API_URL}/send_message`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          session_id: sessionId,
          sender: "user",
          message: input
        })
      });
      setInput("");

      // Optionally, send to AI and store response (simulate for now)
      setTimeout(async () => {
        await fetch(`${API_URL}/send_message`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            session_id: sessionId,
            sender: "ai",
            message: `You asked: \"${input}\". (AI response here)`
          })
        });
        // Refresh messages
        const res = await fetch(`${API_URL}/get_messages/${sessionId}`);
        const data = await res.json();
        if (data.success) {
          setMessages(data.messages || []);
        }
      }, 1000);

      // Refresh messages immediately for user message
      const res = await fetch(`${API_URL}/get_messages/${sessionId}`);
      const data = await res.json();
      if (data.success) {
        setMessages(data.messages || []);
      }
    } catch (err) {
      // fallback: just update local state
      setMessages((msgs) => [
        ...msgs,
        { sender: "user", message: input },
        { sender: "ai", message: `You asked: \"${input}\". (AI response here)` }
      ]);
      setInput("");
    }
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 flex flex-col items-center justify-start py-8">
  <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-0 flex flex-col" style={{ minHeight: "75vh" }}>
        {/* Header */}
        <div className="flex justify-between items-center px-8 py-6 border-b border-blue-100 bg-blue-100 rounded-t-3xl">
          <span className="text-2xl font-extrabold text-blue-700 drop-shadow">SpaceBio Chat</span>
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-blue-700 bg-blue-200 px-4 py-1 rounded-full shadow">{user?.username || "Guest"}</span>
          </div>
        </div>
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto mb-4 px-6 py-6" style={{ maxHeight: "55vh" }}>
          {sessionId === "demo-session" && (
            <div className="mb-2 text-center text-sm text-red-500">Backend not available. Chat is in demo mode.</div>
          )}
          {messages.length === 0 && (
            <div className="text-center text-blue-400 mt-10">Start the conversation...</div>
          )}
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex mb-4 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`px-5 py-3 rounded-2xl max-w-md break-words shadow-lg text-base transition-all duration-200 ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white border border-blue-300"
                    : "bg-white text-blue-700 border border-blue-200"
                }`}
              >
                {msg.message}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        {/* Input Area */}
        <form className="flex gap-2 px-8 pb-8" onSubmit={handleSend}>
          <input
            type="text"
            className="flex-1 px-5 py-3 rounded-2xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-blue-50 text-lg shadow"
            placeholder="Type your question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
            disabled={false}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-2xl shadow-lg transition-all duration-200"
            disabled={!input.trim()}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default OpenPage;
