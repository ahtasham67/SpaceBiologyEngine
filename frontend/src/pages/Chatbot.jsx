import React, { useState } from "react";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");

    // Call your backend API
    try {
      const res = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      const botMessage = { sender: "bot", text: data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-80 bg-gray-100 p-4 rounded-lg shadow-lg">
      <div className="h-64 overflow-y-auto mb-4 flex flex-col gap-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded ${
              msg.sender === "user" ? "self-end bg-blue-500 text-white" : "self-start bg-green-200"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 rounded border border-gray-300"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
