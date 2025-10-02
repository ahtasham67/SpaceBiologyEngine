
import { Link } from 'react-router-dom';

function Navbar() {
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
            Publications
          </li>
          <li className="hover:text-blue-400 cursor-pointer transition-all duration-300 hover:scale-105">
            About
          </li>
        </ul>
      </nav>
    );
}

export default Navbar;
