
import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext.jsx';

function Navbar() {
    const { user, setUser } = useUser();
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleLogout = () => {
        setUser(null);
        navigate("/");
        setDropdownOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="relative z-10 flex justify-between items-center p-6 border-b border-gray-800/50 backdrop-blur-sm"
            // style={{ background: 'rgba(0, 0, 0, 0.6)' }}
        >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center cosmic-glow">
            <span className="text-white font-bold text-lg">🧬</span>
          </div>
          <h1 className="text-2xl font-bold space-font cosmic-text">
            SpaceBio Engine
          </h1>
        </div>
        
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-8 text-gray-300 space-font">
            <li className="hover:text-blue-400 cursor-pointer transition-all duration-300 hover:scale-105">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-blue-400 cursor-pointer transition-all duration-300 hover:scale-105">
              <Link to="/digital-twin">Digital Twin</Link>
            </li>
            <li className="hover:text-blue-400 cursor-pointer transition-all duration-300 hover:scale-105">
              Research
            </li>
            <li className="hover:text-blue-400 cursor-pointer transition-all duration-300 hover:scale-105">
              <Link to="/chatbot">Chat</Link>
            </li>
            <li className="hover:text-blue-400 cursor-pointer transition-all duration-300 hover:scale-105">
              <Link to="/about">About</Link>
            </li>
          </ul>

          {/* User Authentication Section */}
          <div className="flex items-center gap-4">
            {user ? (
              <>
                {/* User Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200"
                  >
                    <span>{user.username}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg border border-gray-700 z-50">
                      <div className="py-1">
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 text-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-200"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200">
                    Create Account
                  </button>
                </Link>
               
              </>
            )}
          </div>
        </div>
      </nav>
    );
}

export default Navbar;
