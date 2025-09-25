import { useState } from "react";

export default function DigitalTwinViewer() {
  const [selectedPart, setSelectedPart] = useState(null);

  // Anatomical data with space-related effects
  const bodyParts = {
    "Brain": "Experiences fluid shifts, radiation exposure, and altered sleep cycles in microgravity.",
    "Lungs": "Reduced lung capacity and altered breathing patterns due to fluid redistribution.",
    "Heart": "Cardiovascular deconditioning and reduced blood volume in space environment.",
    "Liver": "Metabolic changes and altered drug processing in microgravity conditions.",
    "Kidneys": "Increased risk of kidney stones and altered fluid regulation in space.",
    "Stomach": "Digestive issues and altered nutrient absorption in microgravity.",
    "Left Arm": "Muscle atrophy and bone density loss due to lack of gravity resistance.",
    "Right Arm": "Muscle atrophy and bone density loss due to lack of gravity resistance.",
    "Reproductive System": "Hormonal changes and potential fertility effects from radiation exposure.",
    "Left Leg": "Significant muscle and bone mass loss, especially in weight-bearing bones.",
    "Right Leg": "Significant muscle and bone mass loss, especially in weight-bearing bones.",
    "Eyes": "Vision changes and increased intracranial pressure affecting eyesight in space."
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-white mb-6">Human Body in Space - Digital Twin</h1>
      
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
          style={{ borderRadius: '1000px' }}
          title="Brain"
        ></button>

        <button
          onClick={() => setSelectedPart("Eyes")}
          className="absolute top-[6.8%] left-[41%] w-5 h-4 rounded-full bg-pink-400/60 hover:bg-pink-400 transition-all duration-300 hover:scale-110 border-2 border-pink-300/50 hover:border-pink-300"
          style={{ borderRadius: '1000px' }}
          title="Eyes"
        ></button>

        <button
          onClick={() => setSelectedPart("Eyes")}
          className="absolute top-[6.8%] left-[52%] w-5 h-4 rounded-full bg-pink-400/60 hover:bg-pink-400 transition-all duration-300 hover:scale-110 border-2 border-pink-300/50 hover:border-pink-300"
          style={{ borderRadius: '1000px' }}
          title="Eyes"
        ></button>

        {/* Lungs */}
        <button
          onClick={() => setSelectedPart("Lungs")}
          className="absolute top-[25%] left-[38%] w-16 h-12 rounded-lg bg-cyan-400/60 hover:bg-cyan-400 transition-all duration-300 hover:scale-105 border-2 border-cyan-300/50 hover:border-cyan-300"
          title="Lungs"
        ></button>

        {/* Heart */}
        <button
          onClick={() => setSelectedPart("Heart")}
          className="absolute top-[28%] left-[45%] w-6 h-8 rounded-full bg-red-500/60 hover:bg-red-500 transition-all duration-300 hover:scale-110 border-2 border-red-400/50 hover:border-red-400"
          title="Heart"
        ></button>

        {/* Liver */}
        <button
          onClick={() => setSelectedPart("Liver")}
          className="absolute top-[35%] left-[48%] w-12 h-10 rounded-lg bg-amber-600/60 hover:bg-amber-600 transition-all duration-300 hover:scale-105 border-2 border-amber-500/50 hover:border-amber-500"
          title="Liver"
        ></button>

        {/* Stomach */}
        <button
          onClick={() => setSelectedPart("Stomach")}
          className="absolute top-[40%] left-[42%] w-8 h-8 rounded-lg bg-orange-500/60 hover:bg-orange-500 transition-all duration-300 hover:scale-110 border-2 border-orange-400/50 hover:border-orange-400"
          title="Stomach"
        ></button>

        {/* Kidneys */}
        <button
          onClick={() => setSelectedPart("Kidneys")}
          className="absolute top-[42%] left-[38%] w-4 h-6 rounded-full bg-yellow-600/60 hover:bg-yellow-600 transition-all duration-300 hover:scale-110 border-2 border-yellow-500/50 hover:border-yellow-500"
          title="Left Kidney"
        ></button>
        <button
          onClick={() => setSelectedPart("Kidneys")}
          className="absolute top-[42%] left-[54%] w-4 h-6 rounded-full bg-yellow-600/60 hover:bg-yellow-600 transition-all duration-300 hover:scale-110 border-2 border-yellow-500/50 hover:border-yellow-500"
          title="Right Kidney"
        ></button>

        {/* Reproductive System */}
        <button
          onClick={() => setSelectedPart("Reproductive System")}
          className="absolute top-[52%] left-[44%] w-8 h-6 rounded-lg bg-purple-500/60 hover:bg-purple-500 transition-all duration-300 hover:scale-110 border-2 border-purple-400/50 hover:border-purple-400"
          title="Reproductive System"
        ></button>

        {/* Arms */}
        <button
          onClick={() => setSelectedPart("Left Arm")}
          className="absolute top-[22%] left-[15%] w-8 h-20 rounded-full bg-green-400/60 hover:bg-green-400 transition-all duration-300 hover:scale-105 border-2 border-green-300/50 hover:border-green-300"
          title="Left Arm"
        ></button>
        <button
          onClick={() => setSelectedPart("Right Arm")}
          className="absolute top-[22%] left-[73%] w-8 h-20 rounded-full bg-green-400/60 hover:bg-green-400 transition-all duration-300 hover:scale-105 border-2 border-green-300/50 hover:border-green-300"
          title="Right Arm"
        ></button>

        {/* Legs */}
        <button
          onClick={() => setSelectedPart("Left Leg")}
          className="absolute top-[58%] left-[38%] w-8 h-32 rounded-full bg-blue-400/60 hover:bg-blue-400 transition-all duration-300 hover:scale-105 border-2 border-blue-300/50 hover:border-blue-300"
          title="Left Leg"
        ></button>
        <button
          onClick={() => setSelectedPart("Right Leg")}
          className="absolute top-[58%] left-[50%] w-8 h-32 rounded-full bg-blue-400/60 hover:bg-blue-400 transition-all duration-300 hover:scale-105 border-2 border-blue-300/50 hover:border-blue-300"
          title="Right Leg"
        ></button>
      </div>

      {/* Enhanced Modal */}
      {selectedPart && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8 rounded-2xl w-96 max-w-md mx-4 shadow-2xl border border-slate-600">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-cyan-400">{selectedPart}</h2>
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
            
            <div className="bg-slate-700/50 p-4 rounded-lg mb-6">
              <h3 className="text-sm font-semibold text-gray-300 mb-2">SPACE BIOLOGY EFFECTS:</h3>
              <p className="text-gray-100 leading-relaxed">
                {bodyParts[selectedPart]}
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setSelectedPart(null)}
                className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-all duration-200 hover:scale-105"
              >
                Close
              </button>
              <button
                className="flex-1 px-4 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-semibold transition-all duration-200 hover:scale-105"
                onClick={() => console.log(`Research more about ${selectedPart}`)}
              >
                Research More
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
