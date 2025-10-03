
import React, { useState, useRef, useEffect } from "react";
import { useUser } from "../UserContext.jsx";
import Navbar from "../components/Navbar.jsx";

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
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      {/* Stellar background */}
      <div className="stellar-bg absolute inset-0"></div>

      {/* Nebula background effects */}
      <div className="nebula-bg absolute inset-0"></div>

      {/* Floating cosmic elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full twinkle-animation"></div>
        <div
          className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full twinkle-animation"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-blue-300 rounded-full twinkle-animation"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-40 left-1/3 w-1 h-1 bg-white rounded-full twinkle-animation"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/4 w-2 h-2 bg-blue-500 rounded-full twinkle-animation"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-start py-8 px-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 space-font">
            <span className="text-white cosmic-text">SpaceBio </span>
            <span className="space-gradient-text">AI Chat</span>
          </h1>
          <p className="text-xl text-gray-300">Your cosmic research companion</p>
        </div>

        <div className="w-full max-w-4xl space-card rounded-2xl p-0 flex flex-col cosmic-glow" style={{ minHeight: "70vh" }}>
          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto mb-4 px-6 py-6" style={{ maxHeight: "55vh" }}>
            {sessionId === "demo-session" && (
              <div className="mb-4 text-center text-sm text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg p-3">Backend not available. Chat is in demo mode.</div>
            )}
            {messages.length === 0 && (
              <div className="text-center text-gray-400 mt-20">
                <span className="text-5xl mb-4 block">🚀</span>
                <p className="text-xl space-font">Start your cosmic conversation...</p>
              </div>
            )}
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex mb-4 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`px-5 py-4 rounded-2xl max-w-md break-words text-base transition-all duration-200 ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white cosmic-glow"
                      : "bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-gray-100 border border-blue-500/30"
                  }`}
                >
                  {msg.message}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          
          {/* Input Area */}
          <form className="flex gap-3 px-6 pb-6" onSubmit={handleSend}>
            <input
              type="text"
              className="flex-1 px-5 py-4 rounded-xl bg-gray-800/50 border border-blue-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-lg"
              placeholder="Ask about space biology, microgravity effects..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
              disabled={false}
            />
            <button
              type="submit"
              className="space-button bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 cosmic-glow"
              disabled={!input.trim()}
            >
              🚀 Send
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default OpenPage;
