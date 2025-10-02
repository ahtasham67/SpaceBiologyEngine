import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function AboutPage() {
  const teamMembers = [
    {
      role: "Team Lead",
      name: "Arafat Rahman",
      institution: "BUET CSE",
      email: "arafatrahman219@gmail.com",
      icon: "👨‍💻",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      role: "Member 2",
      name: "Dibya Jyoti Sarker",
      institution: "BUET CSE",
      email: "dj2001dhaka@gmail.com",
      icon: "🚀",
      gradient: "from-purple-500 to-purple-700"
    },
    {
      role: "Member 3",
      name: "Ahtasham Haque",
      institution: "BUET CSE",
      email: "ahtashamulhaque20@gmail.com",
      icon: "🌌",
      gradient: "from-green-500 to-green-700"
    },
    {
      role: "Member 4",
      name: "Md. Sabbir Ahmmed Payel",
      institution: "BUET CSE",
      email: "robinson007896@gmail.com",
      icon: "🛸",
      gradient: "from-red-500 to-red-700"
    }
  ];

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
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight space-font">
            <span className="text-white cosmic-text">About </span>
            <span className="space-gradient-text">SpaceBio Engine</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            An intelligent platform combining AI-powered chatbot and interactive digital twin technology to explore space biology effects on the human body
          </p>
          <div className="flex justify-center mt-8">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          </div>
        </div>

        {/* Project Description */}
        <div className="space-card rounded-2xl p-12 mb-20 cosmic-glow">
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-700 rounded-full flex items-center justify-center mb-6 cosmic-glow mx-auto">
              <span className="text-5xl">🧬</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 space-font cosmic-text">Our Mission</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-400 space-font">What is SpaceBio Engine?</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                SpaceBio Engine is an innovative web platform that makes space biology research accessible through two powerful features: an intelligent AI chatbot and an interactive digital twin of the human body.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Our AI chatbot answers "what-if" questions about space biology, explains complex research findings, and provides insights backed by NASA datasets. The interactive digital twin allows users to click on different body parts to discover how space environments affect human physiology, with AI-powered explanations and references to original research papers.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Whether you're a researcher, student, or space enthusiast, SpaceBio Engine transforms complex space biology data into understandable, interactive experiences.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl border border-blue-500/30">
                <span className="text-3xl">🤖</span>
                <div>
                  <h4 className="font-bold text-blue-400">AI Chatbot</h4>
                  <p className="text-gray-300">Ask questions about space-biology research and "what-if" type questions 
                    and get expert answers backed by research papers (Provided by NASA)
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl border border-purple-500/30">
                <span className="text-3xl">👤</span>
                <div>
                  <h4 className="font-bold text-purple-400">Interactive Digital Twin</h4>
                  <p className="text-gray-300">Click body parts to explore space effects on human physiology</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-xl border border-green-500/30">
                <span className="text-3xl">📚</span>
                <div>
                  <h4 className="font-bold text-green-400">NASA Research Integration</h4>
                  <p className="text-gray-300">Access original research papers and scientific references</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-red-600/20 to-purple-600/20 rounded-xl border border-red-500/30">
                <span className="text-3xl">🧬</span>
                <div>
                  <h4 className="font-bold text-red-400">Space Biology Focus</h4>
                  <p className="text-gray-300">Specialized insights on microgravity and space environment effects</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 space-font cosmic-text">Meet Our Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A passionate team of computer science students from Bangladesh University of Engineering and Technology (BUET), 
            building innovative solutions to make space biology research accessible through AI and interactive technology.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="space-card rounded-xl p-8 text-center float-animation cosmic-glow hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center mb-6 cosmic-glow mx-auto`}>
                <span className="text-4xl">{member.icon}</span>
              </div>
              
              <div className="mb-2">
                <span className="text-sm text-blue-400 font-semibold space-font">{member.role}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-white space-font cosmic-text">
                {member.name}
              </h3>
              
              <p className="text-gray-300 mb-3 font-semibold">
                {member.institution}
              </p>
              
              <a
                href={`mailto:${member.email}`}
                className="text-blue-400 hover:text-blue-300 text-sm transition-colors duration-200 break-all"
              >
                {member.email}
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center space-card p-12 rounded-2xl cosmic-glow mt-20">
          <h2 className="text-4xl font-bold mb-6 space-font cosmic-text">
            Explore Space Biology Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover how space affects the human body through our interactive digital twin, or chat with our AI to get answers 
            to your space biology questions backed by NASA research data.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/digital-twin"
              className="space-button bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 cosmic-glow space-font text-center"
            >
              � Explore Digital Twin
            </a>
            <a
              href="/open"
              className="space-button border-2 border-blue-500 hover:bg-blue-500/10 text-blue-400 hover:text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 space-font text-center"
            >
              🤖 Chat with AI
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AboutPage;