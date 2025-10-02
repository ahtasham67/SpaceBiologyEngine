import { useState, useEffect } from 'react';
import { effects } from '../utils/bodyInfo';

export default function EnhancedOrganModal({ selectedPart, onClose }) {
  const [currentEffectIndex, setCurrentEffectIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [explanation, setExplanation] = useState('');
  const [isExplaining, setIsExplaining] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const organData = effects[selectedPart];

  useEffect(() => {
    if (selectedPart) {
      setIsVisible(true);
      setCurrentEffectIndex(0);
    }
  }, [selectedPart]);

  if (!selectedPart || !organData) return null;

  const handleClose = () => {
    setIsVisible(false);
    setShowExplanation(false);
    setExplanation('');
    setTimeout(onClose, 300); // Wait for animation to complete
  };

  const nextEffect = () => {
    setShowExplanation(false);
    setExplanation('');
    setCurrentEffectIndex((prev) => 
      prev < organData.data.length - 1 ? prev + 1 : 0
    );
  };

  const prevEffect = () => {
    setShowExplanation(false);
    setExplanation('');
    setCurrentEffectIndex((prev) => 
      prev > 0 ? prev - 1 : organData.data.length - 1
    );
  };

  const currentEffect = organData.data[currentEffectIndex];

  const handleExplain = async () => {
    setIsExplaining(true);
    try {
      console.log('Requesting explanation for:', currentEffect);
      console.log('Current organ:', organData.part);
      
      const response = await fetch('http://localhost:8000/api/explain', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ concept: `explain the effect : ${currentEffect.effect} on ${organData.part}` }),
      });
      
      if (response.ok) {
        const data = await response.json();
        setExplanation(data.explanation);
        setShowExplanation(true);
      } else {
        setExplanation('Failed to get explanation. Please try again.');
        setShowExplanation(true);
      }
    } catch (error) {
      setExplanation('Error connecting to server. Please check if the backend is running.');
      setShowExplanation(true);
    } finally {
      setIsExplaining(false);
    }
  };

  return (
    <div 
      className={`fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50 transition-all duration-300 p-4 overflow-y-auto ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClose}
    >
      <div 
        className={`bg-gradient-to-br from-slate-800 via-slate-900 to-black text-white p-8 rounded-3xl w-[600px] max-w-[90vw] mx-auto my-8 shadow-2xl border border-slate-600/50 backdrop-blur-md transform transition-all duration-500 max-h-[90vh] overflow-y-auto ${
          isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {organData.part}
            </h2>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-red-500/20 hover:bg-red-500/40 flex items-center justify-center transition-all duration-200 hover:scale-110"
          >
            ✕
          </button>
        </div>

        {/* Main Content Area */}
        <div className="relative">
          {/* Effects Counter */}
          <div className="flex items-center justify-center mb-4">
            <div className="flex gap-2">
              {organData.data.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentEffectIndex 
                      ? 'bg-cyan-400 scale-125' 
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                  onClick={() => setCurrentEffectIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Effect Card */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-slate-600/30 p-6 mb-6">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"></div>
            
            {/* Effect Number */}
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-400 font-bold text-sm">
              {currentEffectIndex + 1}
            </div>

            {/* Effect Content */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold">
                🧬 SPACE BIOLOGY EFFECT
              </div>
              
              <p className="text-gray-100 leading-relaxed text-lg animate-fadeIn">
                {currentEffect.effect}
              </p>
              
              {/* Source Link */}
              <div className="border-t border-slate-600/30 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                  📚 Research Source:
                </div>
                <a
                  href={currentEffect.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm underline decoration-blue-400/30 hover:decoration-blue-300 transition-colors duration-200 break-all"
                >
                  {currentEffect.source}
                </a>
              </div>
            </div>
          </div>

          {/* AI Explanation Section */}
          {showExplanation && (
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700/30 to-indigo-800/30 border border-purple-600/30 p-6 mb-6 animate-fadeIn">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400"></div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold">
                  🤖 AI EXPLANATION
                </div>
                
                <p className="text-gray-100 leading-relaxed text-base">
                  {explanation}
                </p>
                
                <button
                  onClick={() => setShowExplanation(false)}
                  className="text-purple-400 hover:text-purple-300 text-sm underline"
                >
                  Hide Explanation
                </button>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={prevEffect}
              className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-full transition-all duration-200 hover:scale-105 border border-slate-600/30"
              disabled={organData.data.length <= 1}
            >
              ← Previous
            </button>

            <div className="text-center">
              <div className="text-sm text-gray-400">
                Effect {currentEffectIndex + 1} of {organData.data.length}
              </div>
            </div>

            <button
              onClick={nextEffect}
              className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-full transition-all duration-200 hover:scale-105 border border-slate-600/30"
              disabled={organData.data.length <= 1}
            >
              Next →
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={handleClose}
            className="flex-1 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Close
          </button>
          <button
            onClick={handleExplain}
            disabled={isExplaining}
            className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
          >
            {isExplaining ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Explaining...
              </>
            ) : (
              <>
                🤖 AI Explain
              </>
            )}
          </button>
          <button
            className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
            onClick={() => window.open(`https://scholar.google.com/scholar?q=${encodeURIComponent('space effects on ' + selectedPart)}`, '_blank')}
          >
            Research More
          </button>
        </div>
      </div>
    </div>
  );
}