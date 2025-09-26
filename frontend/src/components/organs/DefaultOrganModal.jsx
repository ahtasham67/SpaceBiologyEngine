export default function DefaultOrganModal({ selectedPart, onClose }) {
  const organInfo = {
    "Stomach": "Digestive issues and altered nutrient absorption in microgravity.",
    "Left Arm": "Muscle atrophy and bone density loss due to lack of gravity resistance.",
    "Right Arm": "Muscle atrophy and bone density loss due to lack of gravity resistance.",
    "Reproductive System": "Hormonal changes and potential fertility effects from radiation exposure.",
    "Left Leg": "Significant muscle and bone mass loss, especially in weight-bearing bones.",
    "Right Leg": "Significant muscle and bone mass loss, especially in weight-bearing bones.",
    "Eyes": "Vision changes and increased intracranial pressure affecting eyesight in space.",
    "DNA": "Genetic mutations and chromosomal damage from cosmic radiation exposure during long-duration spaceflight.",
    "Immune System": "Weakened immune response and increased susceptibility to infections in microgravity environment.",
    "Skin": "Increased sensitivity, delayed wound healing, and potential radiation dermatitis from space exposure.",
    "Intestines": "Altered gut microbiome and digestive function due to microgravity and stress.",
    "Pelvis": "Bone density loss and muscle atrophy affecting pelvic stability and function."
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8 rounded-2xl w-96 max-w-md mx-4 shadow-2xl border border-slate-600">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-cyan-400">{selectedPart}</h2>
        <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
      </div>
      
      <div className="bg-slate-700/50 p-4 rounded-lg mb-6 flex items-center justify-center">
        <img 
          src="/elbow_joint.jpg" 
          alt={selectedPart}
          className="w-48 h-48 object-cover rounded-lg shadow-lg"
        />
      </div>

      <div className="bg-cyan-900/20 p-3 rounded-lg mb-4">
        <p className="text-gray-100 text-sm leading-relaxed">
          {organInfo[selectedPart] || "Space biology effects for this organ are being studied."}
        </p>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onClose}
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
  );
}