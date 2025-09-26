export default function HeartModal({ onClose }) {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8 rounded-2xl w-96 max-w-md mx-4 shadow-2xl border border-slate-600">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-red-400">Heart</h2>
        <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
      </div>
      
      <div className="bg-slate-700/50 p-4 rounded-lg mb-6 flex items-center justify-center">
        <img 
          src="/human-heart.jpg" 
          alt="Heart"
          className="w-48 h-48 object-cover rounded-lg shadow-lg"
        />
      </div>

      <div className="bg-red-900/20 p-3 rounded-lg mb-4">
        <p className="text-gray-100 text-sm leading-relaxed">
          Cardiovascular deconditioning and reduced blood volume in space environment.
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
          className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-all duration-200 hover:scale-105"
          onClick={() => console.log('Research more about Heart')}
        >
          Research More
        </button>
      </div>
    </div>
  );
}