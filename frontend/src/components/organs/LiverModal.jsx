export default function LiverModal({ onClose }) {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8 rounded-2xl w-96 max-w-md mx-4 shadow-2xl border border-slate-600">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-amber-400">Liver</h2>
        <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
      </div>
      
      <div className="bg-slate-700/50 p-4 rounded-lg mb-6 flex items-center justify-center">
        <img 
          src="/human-liver.jpg" 
          alt="Liver"
          className="w-48 h-48 object-cover rounded-lg shadow-lg"
        />
      </div>

      <div className="bg-amber-900/20 p-3 rounded-lg mb-4">
        <p className="text-gray-100 text-sm leading-relaxed">
          Metabolic changes and altered drug processing in microgravity conditions.
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
          className="flex-1 px-4 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-all duration-200 hover:scale-105"
          onClick={() => console.log('Research more about Liver')}
        >
          Research More
        </button>
      </div>
    </div>
  );
}