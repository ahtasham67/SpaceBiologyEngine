function HomePage() {
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
      <nav className="relative z-10 flex justify-between items-center p-6 border-b border-gray-800/50 backdrop-blur-sm">
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
            Home
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

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight space-font">
            <span className="text-white cosmic-text">Advancing </span>
            <span className="space-gradient-text">Space Biology</span>
            <span className="block text-white cosmic-text mt-4">Research</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore the fascinating cosmos of life beyond Earth. From
            microgravity's molecular mysteries to the physiological frontiers of
            interplanetary exploration.
          </p>
          <div className="flex justify-center mt-8">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          </div>
        </div>

        {/* Research Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="space-card rounded-xl p-8 float-animation">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-6 cosmic-glow mx-auto">
              <span className="text-4xl">🔗</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white text-center space-font cosmic-text">
              Digital Twinning
            </h3>
            <p className="text-gray-300 leading-relaxed text-center">
              Explore the cutting-edge realm of digital twinning in space
              biology, where virtual models mirror biological systems to unlock
              cosmic mysteries.
            </p>
          </div>

          <div
            className="space-card rounded-xl p-8 float-animation"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mb-6 cosmic-glow mx-auto">
              <span className="text-4xl">📚</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white text-center space-font cosmic-text">
              Space Biology Publications
            </h3>
            <p className="text-gray-300 leading-relaxed text-center">
              Access comprehensive research publications covering microgravity
              biology, astrobiology, and life sciences from space missions
              worldwide.
            </p>
          </div>

          <div
            className="space-card rounded-xl p-8 float-animation"
            style={{ animationDelay: "1s" }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center mb-6 cosmic-glow mx-auto">
              <span className="text-4xl">🫀</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white text-center space-font cosmic-text">
              Human Physiology
            </h3>
            <p className="text-gray-300 leading-relaxed text-center">
              Mapping the human body's extraordinary adaptations during extended
              voyages through the infinite cosmic frontier.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-card p-12 rounded-2xl cosmic-glow">
          <h2 className="text-5xl font-bold mb-6 space-font cosmic-text">
            Launch Your Cosmic Research
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Access the universe of space biology knowledge. Discover
            groundbreaking research from the International Space Station to Mars
            mission preparations.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="space-button bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 cosmic-glow space-font">
              🚀 Explore Research
            </button>
            <button className="space-button border-2 border-blue-500 hover:bg-blue-500/10 text-blue-400 hover:text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 space-font">
              🌌 Learn More
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800/50 py-8 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400 space-font">
            &copy; 2025 SpaceBio Engine. Advancing life among the stars.
          </p>
          <div className="flex justify-center mt-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
