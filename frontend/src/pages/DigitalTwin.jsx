import { useState } from "react";

export default function DigitalTwinViewer() {
  const [selectedPart, setSelectedPart] = useState(null);

  return (
    <div className="relative w-full h-screen bg-gray-900 flex flex-col items-center justify-center">
      <div className="relative w-64">
        <img
          src="/anatomy.jpg" // put your JPG in public folder
          alt="Human Body"
          className="w-full"
        />

        {/* Example hotspots */}
        {/* Head */}
        <button
          onClick={() => setSelectedPart("Head")}
          className="absolute top-[2%] left-[40%] w-12 h-12 rounded-full bg-red-500/50 hover:bg-red-500"
        ></button>

        {/* Chest */}
        <button
          onClick={() => setSelectedPart("Chest")}
          className="absolute top-[20%] left-[35%] w-32 h-24 rounded-md bg-blue-500/40 hover:bg-blue-500"
        ></button>

        {/* Left Arm */}
        <button
          onClick={() => setSelectedPart("Left Arm")}
          className="absolute top-[20%] left-[10%] w-12 h-24 rounded-md bg-green-500/40 hover:bg-green-500"
        ></button>

        {/* Right Arm */}
        <button
          onClick={() => setSelectedPart("Right Arm")}
          className="absolute top-[20%] left-[70%] w-12 h-24 rounded-md bg-green-500/40 hover:bg-green-500"
        ></button>

        {/* Legs */}
        <button
          onClick={() => setSelectedPart("Left Leg")}
          className="absolute top-[60%] left-[35%] w-12 h-36 rounded-md bg-purple-500/40 hover:bg-purple-500"
        ></button>
        <button
          onClick={() => setSelectedPart("Right Leg")}
          className="absolute top-[60%] left-[50%] w-12 h-36 rounded-md bg-purple-500/40 hover:bg-purple-500"
        ></button>
      </div>

      {/* Modal */}
      {selectedPart && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/70">
          <div className="bg-white text-black p-6 rounded-xl w-80">
            <h2 className="text-xl font-bold mb-2">{selectedPart}</h2>
            <p>
              Biological changes of <strong>{selectedPart}</strong> in space
              environment go here.
            </p>
            <button
              onClick={() => setSelectedPart(null)}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
