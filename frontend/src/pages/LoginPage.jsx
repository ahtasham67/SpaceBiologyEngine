import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../UserContext.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { login } = useUser();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const res = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (data.success && data.authenticated && data.user) {
        setSuccess("Login successful!");
        setUsername("");
        setPassword("");
        login(data.user); // Save user info globally
        setTimeout(() => navigate("/"), 1000); // Redirect to homepage
      } else {
        setError("Invalid username or password.");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
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
      <main className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="w-full max-w-md space-card rounded-2xl p-8 cosmic-glow">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-6 cosmic-glow mx-auto">
              <span className="text-4xl">🚀</span>
            </div>
            <h2 className="text-3xl font-bold space-font cosmic-text mb-2">Welcome Back</h2>
            <p className="text-gray-300">Enter the cosmic realm</p>
          </div>
          
          {error && <div className="mb-4 text-red-400 text-center bg-red-500/10 border border-red-500/30 rounded-lg p-3">{error}</div>}
          {success && <div className="mb-4 text-green-400 text-center bg-green-500/10 border border-green-500/30 rounded-lg p-3">{success}</div>}
          
          <form className="flex flex-col gap-6" onSubmit={handleLogin}>
            <input
              type="text"
              className="px-4 py-3 rounded-xl bg-gray-800/50 border border-blue-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="🧑‍🚀 Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              className="px-4 py-3 rounded-xl bg-gray-800/50 border border-blue-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="🔐 Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="space-button bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 cosmic-glow space-font"
            >
              🚀 Launch Login
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <span className="text-gray-400">New to the cosmos? </span>
            <Link to="/signup" className="text-blue-400 hover:text-blue-300 font-semibold space-font transition-colors duration-200">Create account</Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default LoginPage;
