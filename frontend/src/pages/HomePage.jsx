import React from "react";
import Chatbot from "./Chatbot";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../UserContext.jsx";

function HomePage() {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Tailwind Test */}
      <div className="bg-red-500 text-white p-4 text-center font-bold">
        🎉 Tailwind CSS is Working! 🎉
      </div>

      {/* Login / Chat Buttons with Conditional Rendering */}
      <div className="flex justify-center md:justify-start gap-4 mt-6 px-6 md:px-24">
        {user ? (
          <>
            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold cursor-default">
              {user.username}
            </button>
            <button
              onClick={handleLogout}
              className="bg-gray-700 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Logout
            </button>
            <Link to="/open">
              <button className="border border-gray-400 hover:border-white px-6 py-3 rounded-lg font-semibold">
                Chat with Bot
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold">
                Create Account
              </button>
            </Link>
            <Link to="/open">
              <button className="border border-gray-400 hover:border-white px-6 py-3 rounded-lg font-semibold">
                Chat with Bot
              </button>
            </Link>
          </>
        )}
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-gray-900 bg-opacity-50 mt-6 px-6 md:px-24">
        <h1 className="text-2xl font-bold tracking-wide">SpaceBio Engine</h1>
        <ul className="flex gap-6 text-gray-300">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">Research</li>
          <li className="hover:text-white cursor-pointer">Publications</li>
          <li className="hover:text-white cursor-pointer">About</li>
        </ul>
      </nav>

      {/* ... rest of your content ... */}

      
      <footer className="bg-gray-900 py-8 text-center text-gray-400">
        © 2025 SpaceBio Engine. All rights reserved.
      </footer>
    </div>
  );
}

export default HomePage;
