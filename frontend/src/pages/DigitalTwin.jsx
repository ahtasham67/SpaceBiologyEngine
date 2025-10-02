import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";


import EnhancedOrganModal from "../components/EnhancedOrganModal";

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
      <div className="relative w-80 max-w-sm">
        <img
          src="/anatomy.jpg"
          alt="Human Body Anatomy"
          className="w-full h-auto rounded-lg shadow-2xl"
        />

        {/* Brain */}
        <button
          onClick={() => setSelectedPart("Brain")}
          className="absolute top-[2%] left-[41%] w-16 h-10 bg-pink-400/60 hover:bg-pink-400 transition-all duration-300 hover:scale-110 border-2 border-pink-300/50 hover:border-pink-300"
          style={{ borderRadius: "1000px" }}
          title="Brain"
        ></button>

        <button
          onClick={() => setSelectedPart("Eyes")}
          className="absolute top-[6.8%] left-[41%] w-5 h-4 rounded-full bg-pink-400/60 hover:bg-pink-400 transition-all duration-300 hover:scale-110 border-2 border-pink-300/50 hover:border-pink-300"
          style={{ borderRadius: "1000px" }}
          title="Eyes"
        ></button>

        <button
          onClick={() => setSelectedPart("Eyes")}
          className="absolute top-[6.8%] left-[52%] w-5 h-4 rounded-full bg-pink-400/60 hover:bg-pink-400 transition-all duration-300 hover:scale-110 border-2 border-pink-300/50 hover:border-pink-300"
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
          className="absolute top-[21.5%] left-[34%] w-9 rounded-lg bg-cyan-400/60 hover:bg-cyan-400 transition-all duration-300 hover:scale-105 border-2 border-cyan-300/50 hover:border-cyan-300"
          title="Lungs"
        ></button>
        <button
          onClick={() => setSelectedPart("Lungs")}
          style={{
            height: "78px",
            borderRadius: "50px",
            transform: "rotate(-13deg)",
          }}
          className="absolute top-[21.5%] left-[56%] w-9 rounded-lg bg-cyan-400/60 hover:bg-cyan-400 transition-all duration-300 hover:scale-105 border-2 border-cyan-300/50 hover:border-cyan-300"
          title="Lungs"
        ></button>

        {/* Heart */}
        <button
          onClick={() => setSelectedPart("Heart")}
          style={{ borderRadius: "50px", transform: "rotate(-8deg)" }}
          className="absolute top-[26%] left-[47%] w-8 h-11 rounded-full bg-red-500/60 hover:bg-red-500 transition-all duration-300 hover:scale-110 border-2 border-red-400/50 hover:border-red-400"
          title="Heart"
        ></button>

        {/* Liver */}
        <button
          onClick={() => setSelectedPart("Liver")}
          style={{ transform: "rotate(-19deg)", width: "70px" }}
          className="absolute top-[31.5%] left-[32%] h-9 rounded-lg bg-amber-600/60 hover:bg-amber-600 transition-all duration-300 hover:scale-105 border-2 border-amber-500/50 hover:border-amber-500"
          title="Liver"
        ></button>

        {/* Stomach */}
        <button
          onClick={() => setSelectedPart("Stomach")}
          className="absolute top-[31.5%] left-[55%] w-8 h-9 rounded-full bg-orange-500/60 hover:bg-orange-500 transition-all duration-300 hover:scale-110 border-2 border-orange-400/50 hover:border-orange-400"
          title="Stomach"
        ></button>
        <button
          onClick={() => setSelectedPart("Stomach")}
          style={{ transform: "rotate(70deg)", height: "62px" }}
          className="absolute top-[32.5%] left-[50%] w-6 rounded-full bg-orange-500/60 hover:bg-orange-500 transition-all duration-300 hover:scale-110 border-2 border-orange-400/50 hover:border-orange-400"
          title="Stomach"
        ></button>

        <button
          onClick={() => setSelectedPart("Pelvis")}
          style={{ transform: "rotate(0deg)", width: "125px", height: "96px" }}
          className="absolute top-[40%] left-[30.5%] rounded-full bg-yellow-600/60 hover:bg-yellow-600 transition-all duration-300 hover:scale-110 border-2 border-yellow-500/50 hover:border-yellow-500"
          title="Pelvis"
        ></button>

        {/* Kidneys */}
        <button
          onClick={() => setSelectedPart("Kidneys")}
          style={{ transform: "rotate(10deg)" }}
          className="absolute top-[37%] left-[38%] w-4 h-9 rounded-full bg-yellow-600/60 hover:bg-yellow-600 transition-all duration-300 hover:scale-110 border-2 border-yellow-500/50 hover:border-yellow-500"
          title="Left Kidney"
        ></button>
        <button
          onClick={() => setSelectedPart("Kidneys")}
          style={{ transform: "rotate(-10deg)" }}
          className="absolute top-[37%] left-[58%] w-4 h-9 rounded-full bg-yellow-600/60 hover:bg-yellow-600 transition-all duration-300 hover:scale-110 border-2 border-yellow-500/50 hover:border-yellow-500"
          title="Right Kidney"
        ></button>

        <button
          onClick={() => setSelectedPart("Intestines")}
          style={{ transform: "rotate(0deg)", width: "98px", height: "75px" }}
          className="absolute top-[40.5%] left-[33%] rounded-3xl bg-yellow-600/60 hover:bg-yellow-600 transition-all duration-300 hover:scale-110 border-2 border-yellow-500/50 hover:border-yellow-500"
          title="Intestines"
        ></button>

        {/* Reproductive System */}
        <button
          onClick={() => setSelectedPart("Reproductive System")}
          className="absolute top-[51%] left-[44%] w-10 h-7 rounded-full bg-purple-500/60 hover:bg-purple-500 transition-all duration-300 hover:scale-110 border-2 border-purple-400/50 hover:border-purple-400"
          title="Reproductive System"
        ></button>

        {/* Arms */}
        <button
          onClick={() => setSelectedPart("Left Arm")}
          style={{ transform: "rotate(3deg)", height: "100px" }}
          className="absolute top-[22%] left-[21%] w-5 rounded-full bg-green-400/60 hover:bg-green-400 transition-all duration-300 hover:scale-105 border-2 border-green-300/50 hover:border-green-300"
          title="Left Arm"
        ></button>

        <button
          onClick={() => setSelectedPart("Right Arm")}
          style={{ transform: "rotate(10deg)", height: "150px" }}
          className="absolute top-[35%] left-[15%] w-5 rounded-full bg-green-400/60 hover:bg-green-400 transition-all duration-300 hover:scale-105 border-2 border-green-300/50 hover:border-green-300"
          title="Left Arm"
        ></button>
        <button
          onClick={() => setSelectedPart("Right Arm")}
          style={{ transform: "rotate(-3deg)", height: "100px" }}
          className="absolute top-[22%] left-[75%] w-5 rounded-full bg-green-400/60 hover:bg-green-400 transition-all duration-300 hover:scale-105 border-2 border-green-300/50 hover:border-green-300"
          title="Right Arm"
        ></button>
        <button
          onClick={() => setSelectedPart("Right Arm")}
          style={{ transform: "rotate(-9deg)", height: "150px" }}
          className="absolute top-[35%] left-[80%] w-5 rounded-full bg-green-400/60 hover:bg-green-400 transition-all duration-300 hover:scale-105 border-2 border-green-300/50 hover:border-green-300"
          title="Right Arm"
        ></button>

        {/* Legs */}
        <button
          onClick={() => setSelectedPart("Left Leg")}
          style={{ transform: "rotate(-9deg)", height: "180px" }}
          className="absolute top-[50%] left-[30%] w-6 rounded-full bg-blue-400/60 hover:bg-blue-400 transition-all duration-300 hover:scale-105 border-2 border-blue-300/50 hover:border-blue-300"
          title="Left Leg"
        ></button>
        <button
          onClick={() => setSelectedPart("Right Leg")}
          style={{ transform: "rotate(9deg)", height: "180px" }}
          className="absolute top-[50%] left-[62%] w-6 rounded-full bg-blue-400/60 hover:bg-blue-400 transition-all duration-300 hover:scale-105 border-2 border-blue-300/50 hover:border-blue-300"
          title="Right Leg"
        ></button>

        <button
          onClick={() => setSelectedPart("Right Leg")}
          style={{ transform: "rotate(2deg)", height: "180px" }}
          className="absolute top-[72%] left-[57%] w-6 rounded-full bg-blue-400/60 hover:bg-blue-400 transition-all duration-300 hover:scale-105 border-2 border-blue-300/50 hover:border-blue-300"
          title="Right Leg"
        ></button>

        <button
          onClick={() => setSelectedPart("Right Leg")}
          style={{ transform: "rotate(-2deg)", height: "180px" }}
          className="absolute top-[72%] left-[35%] w-6 rounded-full bg-blue-400/60 hover:bg-blue-400 transition-all duration-300 hover:scale-105 border-2 border-blue-300/50 hover:border-blue-300"
          title="Left Leg"
        ></button>

        {/* DNA Icon */}
        <button
          onClick={() => setSelectedPart("DNA")}
          className="absolute top-[10%] left-[10%] w-8 h-8 bg-emerald-500/70 hover:bg-emerald-500 transition-all duration-300 hover:scale-110 border-2 border-emerald-400/50 hover:border-emerald-400 flex items-center justify-center"
          style={{ borderRadius: "50%" }}
          title="DNA & Genetics"
        >
          <span className="text-white text-xs font-bold">🧬</span>
        </button>

        {/* Shield Icon (Immune System) */}
        <button
          onClick={() => setSelectedPart("Immune System")}
          className="absolute top-[15%] left-[10%] w-8 h-8 bg-indigo-500/70 hover:bg-indigo-500 transition-all duration-300 hover:scale-110 border-2 border-indigo-400/50 hover:border-indigo-400 flex items-center justify-center"
          style={{ borderRadius: "50%" }}
          title="Immune System"
        >
          <span className="text-white text-xs font-bold">🛡️</span>
        </button>

        {/* Skin Icon */}
        <button
          onClick={() => setSelectedPart("Skin")}
          className="absolute top-[5%] left-[10%] w-8 h-8 bg-rose-500/70 hover:bg-rose-500 transition-all duration-300 hover:scale-110 border-2 border-rose-400/50 hover:border-rose-400 flex items-center justify-center"
          style={{ borderRadius: "50%" }}
          title="Skin & Tissue"
        >
          <span className="text-white text-xs font-bold">🫧</span>
        </button>
      </div>

      <EnhancedOrganModal
        selectedPart={selectedPart}
        onClose={() => setSelectedPart(null)}
      />
    </div>
  </div>
  );
}
