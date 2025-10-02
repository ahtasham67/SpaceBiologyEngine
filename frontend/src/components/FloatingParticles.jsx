const FloatingParticles = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${10 + Math.random() * 20}s`,
          }}
        >
          <div className="w-full h-full animate-pulse"></div>
        </div>
      ))}

      {/* Larger floating elements */}
      {[...Array(5)].map((_, i) => (
        <div
          key={`large-${i}`}
          className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-10 float-animation"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
