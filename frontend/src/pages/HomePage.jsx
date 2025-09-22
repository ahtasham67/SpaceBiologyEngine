import React from "react";

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Tailwind Test - This should be red background with white text */}
      <div className="bg-red-500 text-white p-4 text-center font-bold">
        🎉 Tailwind CSS is Working! 🎉
      </div>
      
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-gray-900 bg-opacity-50">
        <h1 className="text-2xl font-bold tracking-wide">SpaceBio Engine</h1>
        <ul className="flex gap-6 text-gray-300">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">Research</li>
          <li className="hover:text-white cursor-pointer">Publications</li>
          <li className="hover:text-white cursor-pointer">About</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-24 py-20 md:py-32">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Explore the Frontiers of Space Biology
          </h2>
          <p className="text-gray-300 mb-8">
            SpaceBio Engine makes space biology research accessible, interactive, 
            and engaging. Explore human health in space, plant growth in microgravity, 
            and long-term survival on Mars.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
              Get Started
            </button>
            <button className="border border-gray-400 hover:border-white px-6 py-3 rounded-lg font-semibold">
              Learn More
            </button>
          </div>
        </div>

        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src="https://images.unsplash.com/photo-1616772611332-1b2f7ed4d1f1?auto=format&fit=crop&w=800&q=80"
            alt="Space Research"
            className="rounded-xl shadow-2xl"
          />
        </div>
      </header>

      {/* Features Section */}
      <section className="px-6 md:px-24 py-20 bg-gray-800">
        <h3 className="text-3xl font-bold mb-12 text-center">What You Can Do</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="bg-gray-700 p-6 rounded-xl hover:scale-105 transform transition">
            <h4 className="text-xl font-semibold mb-4">Research Space Biology</h4>
            <p className="text-gray-300">
              Instantly explore publications on microgravity, human health, and plant growth in space.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-xl hover:scale-105 transform transition">
            <h4 className="text-xl font-semibold mb-4">Interactive Summaries</h4>
            <p className="text-gray-300">
              Get 5-minute summaries of key research, designed to save time and highlight trends.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-xl hover:scale-105 transform transition">
            <h4 className="text-xl font-semibold mb-4">Discover Trends</h4>
            <p className="text-gray-300">
              See trending studies in space biology and track how research evolves over time.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="px-6 md:px-24 py-20 text-center">
        <h3 className="text-3xl font-bold mb-6">Start Exploring Space Biology Today</h3>
        <p className="text-gray-300 mb-8">
          Join a growing community of space biology enthusiasts, researchers, and students.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 text-center text-gray-400">
        © 2025 SpaceBio Engine. All rights reserved.
      </footer>
    </div>
  );
}

export default HomePage;
