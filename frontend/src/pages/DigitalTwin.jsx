import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";


import EnhancedOrganModal from "../components/EnhancedOrganModal";
import Footer from "../components/Footer";

export default function DigitalTwinViewer() {
  const [selectedPart, setSelectedPart] = useState(null);

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
    <Navbar />
      {/* Navigation */}
    <div className="relative w-full min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center pt-24 pb-8 px-4">
      <div className="stellar-bg absolute inset-0"></div>

      {/* Nebula background effects */}
      <div className="nebula-bg absolute inset-0"></div>

      {/* Animated Headline Section */}
      <div className="text-center mb-12 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
          Human Digital Twin
        </h1>
        <div className="relative overflow-hidden">
          <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in-up">
            Explore the profound effects of space on the human body
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay">
            Our interactive Digital Twin reveals how microgravity, radiation, and the space environment 
            impact human physiology at every level - from molecular changes to psychological adaptations. 
            Click on any organ or select space effects to discover the fascinating science of space medicine.
          </p>
        </div>
      </div>

      <div className="flex items-start justify-center gap-8">
        {/* Anatomy Image - Center */}
        <div className="relative w-80 max-w-sm">
          <img
            src="/anatomy.jpg"
            alt="Human Body Anatomy"
            className="w-full h-auto rounded-lg shadow-2xl"
          />

          {/* All the existing anatomy buttons stay here... */}
          {/* Brain */}
          <button
            onClick={() => setSelectedPart("Brain")}
            className="absolute top-[2%] left-[41%] w-16 h-10 bg-transparent hover:bg-pink-400/30 transition-all duration-300 hover:scale-110"
            style={{ borderRadius: "1000px" }}
            title="Brain"
          ></button>        {/* Ear Button */}
        <button
          onClick={() => setSelectedPart("Ears")}
          className="absolute top-[7.5%] left-[58.5%] w-3 h-7 bg-transparent hover:bg-orange-500/30 transition-all duration-300 hover:scale-110 flex items-center justify-center"
          style={{ borderRadius: "50%", transform: "rotate(14deg)" }}
          title="Ear & Hearing"
        >
        </button>
        <button
          onClick={() => setSelectedPart("Ears")}
          className="absolute top-[7.5%] left-[37.3%] w-3 h-7 bg-transparent hover:bg-orange-500/30 transition-all duration-300 hover:scale-110 flex items-center justify-center"
          style={{ borderRadius: "50%", transform: "rotate(-14deg)" }}
          title="Ear & Hearing"
        >
        </button>

        {/* Thymus Button */}
        <button
          onClick={() => setSelectedPart("Thymus")}
          className="absolute top-[20%] left-[47.5%] w-4 h-6 bg-transparent hover:bg-indigo-500/30 transition-all duration-300 hover:scale-110"
          style={{ borderRadius: "12px" }}
          title="Thymus Gland"
        >
        </button>

        <button
          onClick={() => setSelectedPart("Eyes")}
          className="absolute top-[6.8%] left-[41%] w-5 h-4 rounded-full bg-transparent hover:bg-pink-400/30 transition-all duration-300 hover:scale-110"
          style={{ borderRadius: "1000px" }}
          title="Eyes"
        ></button>

        <button
          onClick={() => setSelectedPart("Eyes")}
          className="absolute top-[6.8%] left-[52%] w-5 h-4 rounded-full bg-transparent hover:bg-pink-400/30 transition-all duration-300 hover:scale-110"
          style={{ borderRadius: "1000px" }}
          title="Eyes"
        ></button>

        {/* Lungs */}
        <button
          onClick={() => setSelectedPart("Lungs")}
          style={{
            height: "78px",
            borderRadius: "50px",
            transform: "rotate(7deg)",
          }}
          className="absolute top-[21.5%] left-[34%] w-9 rounded-lg bg-transparent hover:bg-cyan-400/30 transition-all duration-300 hover:scale-105"
          title="Lungs"
        ></button>
        <button
          onClick={() => setSelectedPart("Lungs")}
          style={{
            height: "78px",
            borderRadius: "50px",
            transform: "rotate(-13deg)",
          }}
          className="absolute top-[21.5%] left-[56%] w-9 rounded-lg bg-transparent hover:bg-cyan-400/30 transition-all duration-300 hover:scale-105"
          title="Lungs"
        ></button>

        {/* Heart */}
        <button
          onClick={() => setSelectedPart("Heart")}
          style={{ borderRadius: "50px", transform: "rotate(-8deg)" }}
          className="absolute top-[26%] left-[47%] w-8 h-11 rounded-full bg-transparent hover:bg-red-500/30 transition-all duration-300 hover:scale-110"
          title="Heart"
        ></button>

        {/* Liver */}
        <button
          onClick={() => setSelectedPart("Liver")}
          style={{ transform: "rotate(-19deg)", width: "70px" }}
          className="absolute top-[31.5%] left-[32%] h-9 rounded-lg bg-transparent hover:bg-amber-600/30 transition-all duration-300 hover:scale-105"
          title="Liver"
        ></button>

        {/* Stomach */}
        <button
          onClick={() => setSelectedPart("Spleen")}
          className="absolute top-[31.3%] left-[61.6%] w-5 h-11 rounded-full bg-transparent hover:bg-orange-500/30 transition-all duration-300 hover:scale-110"
          style={{ transform: "rotate(-10deg)"}}
          title="Spleen"
        ></button>
        <button
          onClick={() => setSelectedPart("Stomach")}
          className="absolute top-[31.5%] left-[55%] w-8 h-9 rounded-full bg-transparent hover:bg-orange-500/30 transition-all duration-300 hover:scale-110"
          title="Stomach"
        ></button>
        <button
          onClick={() => setSelectedPart("Stomach")}
          style={{ transform: "rotate(70deg)", height: "62px" }}
          className="absolute top-[32.5%] left-[50%] w-6 rounded-full bg-transparent hover:bg-orange-500/30 transition-all duration-300 hover:scale-110"
          title="Stomach"
        ></button>


        <button
          onClick={() => setSelectedPart("Pelvis")}
          style={{ transform: "rotate(0deg)", width: "125px", height: "96px" }}
          className="absolute top-[40%] left-[30.5%] rounded-full bg-transparent hover:bg-yellow-600/30 transition-all duration-300 hover:scale-110"
          title="Pelvis"
        ></button>

        {/* Kidneys */}
        <button
          onClick={() => setSelectedPart("Kidneys")}
          style={{ transform: "rotate(10deg)" }}
          className="absolute top-[37%] left-[38%] w-4 h-9 rounded-full bg-transparent hover:bg-yellow-600/30 transition-all duration-300 hover:scale-110"
          title="Left Kidney"
        ></button>
        <button
          onClick={() => setSelectedPart("Kidneys")}
          style={{ transform: "rotate(-10deg)" }}
          className="absolute top-[37%] left-[58%] w-4 h-9 rounded-full bg-transparent hover:bg-yellow-600/30 transition-all duration-300 hover:scale-110"
          title="Right Kidney"
        ></button>

        <button
          onClick={() => setSelectedPart("Intestines")}
          style={{ transform: "rotate(0deg)", width: "98px", height: "75px" }}
          className="absolute top-[40.5%] left-[33%] rounded-3xl bg-transparent hover:bg-yellow-600/30 transition-all duration-300 hover:scale-110"
          title="Intestines"
        ></button>

        {/* Reproductive System */}
        <button
          onClick={() => setSelectedPart("Reproductive System")}
          className="absolute top-[51%] left-[44%] w-10 h-7 rounded-full bg-transparent hover:bg-purple-500/30 transition-all duration-300 hover:scale-110"
          title="Reproductive System"
        ></button>

        {/* Arms */}
        <button
          onClick={() => setSelectedPart("Muscles")}
          style={{ transform: "rotate(3deg)", height: "100px" }}
          className="absolute top-[22%] left-[19%] w-7 rounded-full bg-transparent hover:bg-green-400/30 transition-all duration-300 hover:scale-105"
          title="Left Arm Muscles"
        ></button>

        <button
          onClick={() => setSelectedPart("Muscles")}
          style={{ transform: "rotate(10deg)", height: "150px" }}
          className="absolute top-[35%] left-[14%] w-6 rounded-full bg-transparent hover:bg-green-400/30 transition-all duration-300 hover:scale-105"
          title="Left Arm Muscles"
        ></button>
        <button
          onClick={() => setSelectedPart("Bones")}
          style={{ transform: "rotate(-3deg)", height: "100px" }}
          className="absolute top-[22%] left-[75%] w-5 rounded-full bg-transparent hover:bg-green-400/30 transition-all duration-300 hover:scale-105"
          title="Right Arm Bones"
        ></button>
        <button
          onClick={() => setSelectedPart("Bones")}
          style={{ transform: "rotate(-9deg)", height: "150px" }}
          className="absolute top-[35%] left-[80%] w-5 rounded-full bg-transparent hover:bg-green-400/30 transition-all duration-300 hover:scale-105"
          title="Right Arm Bones"
        ></button>

        {/* Legs */}
        <button
          onClick={() => setSelectedPart("Legs")}
          style={{ transform: "rotate(-9deg)", height: "180px" }}
          className="absolute top-[50%] left-[30%] w-6 rounded-full bg-transparent hover:bg-blue-400/30 transition-all duration-300 hover:scale-105"
          title="Left Leg"
        ></button>
        <button
          onClick={() => setSelectedPart("Legs")}
          style={{ transform: "rotate(9deg)", height: "180px" }}
          className="absolute top-[50%] left-[62%] w-6 rounded-full bg-transparent hover:bg-blue-400/30 transition-all duration-300 hover:scale-105"
          title="Right Leg"
        ></button>

        <button
          onClick={() => setSelectedPart("Legs")}
          style={{ transform: "rotate(2deg)", height: "180px" }}
          className="absolute top-[72%] left-[57%] w-6 rounded-full bg-transparent hover:bg-blue-400/30 transition-all duration-300 hover:scale-105"
          title="Right Leg"
        ></button>

        <button
          onClick={() => setSelectedPart("Legs")}
          style={{ transform: "rotate(-2deg)", height: "180px" }}
          className="absolute top-[72%] left-[35%] w-6 rounded-full bg-transparent hover:bg-blue-400/30 transition-all duration-300 hover:scale-105"
          title="Left Leg"
        ></button>

      </div>

        {/* Space Effects Panel - Right Side */}
        <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md rounded-xl border border-slate-600/50 shadow-2xl p-6 w-64 hover:shadow-blue-500/10 transition-all duration-300">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Other Space Effects
            </h3>
            <p className="text-xs text-gray-400">More impacts of space on humans</p>
          </div>
          
          <div className="space-y-3">
            {/* Psychological Effects */}
            <button
              onClick={() => setSelectedPart("Psychological")}
              className="group w-full flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-violet-600/25 to-violet-500/25 hover:from-violet-600/40 hover:to-violet-500/40 border border-violet-500/40 hover:border-violet-400/60 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/20"
            >
              <span className="text-lg group-hover:scale-110 transition-transform duration-300">🧠</span>
              <span className="text-white font-medium text-sm">Psychological</span>
            </button>

            {/* Blood Effects */}
            <button
              onClick={() => setSelectedPart("Blood")}
              className="group w-full flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-red-600/25 to-red-500/25 hover:from-red-600/40 hover:to-red-500/40 border border-red-500/40 hover:border-red-400/60 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20"
            >
              <span className="text-lg group-hover:scale-110 transition-transform duration-300">🩸</span>
              <span className="text-white font-medium text-sm">Blood Changes</span>
            </button>

            {/* Molecular Effects */}
            <button
              onClick={() => setSelectedPart("Molecular")}
              className="group w-full flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-teal-600/25 to-teal-500/25 hover:from-teal-600/40 hover:to-teal-500/40 border border-teal-500/40 hover:border-teal-400/60 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/20"
            >
              <span className="text-lg group-hover:scale-110 transition-transform duration-300">⚛️</span>
              <span className="text-white font-medium text-sm">Molecular</span>
            </button>

            {/* Immune Effects */}
            <button
              onClick={() => setSelectedPart("Immune System")}
              className="group w-full flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-indigo-600/25 to-indigo-500/25 hover:from-indigo-600/40 hover:to-indigo-500/40 border border-indigo-500/40 hover:border-indigo-400/60 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20"
            >
              <span className="text-lg group-hover:scale-110 transition-transform duration-300">🛡️</span>
              <span className="text-white font-medium text-sm">Immune</span>
            </button>

            {/* Skin Effects */}
            <button
              onClick={() => setSelectedPart("Skin")}
              className="group w-full flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-rose-600/25 to-rose-500/25 hover:from-rose-600/40 hover:to-rose-500/40 border border-rose-500/40 hover:border-rose-400/60 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-rose-500/20"
            >
              <span className="text-lg group-hover:scale-110 transition-transform duration-300">🫧</span>
              <span className="text-white font-medium text-sm">Skin</span>
            </button>
          </div>
        </div>

      </div>

      <EnhancedOrganModal
        selectedPart={selectedPart}
        onClose={() => setSelectedPart(null)}
      />
    </div>
    <Footer/>
  </div>
  );
}
