import { useEffect, useState } from "react";

function PublicationsAnalytics({ publications }) {
  const [analytics, setAnalytics] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:8000/api/publications/analytics"
      );
      const data = await response.json();
      setAnalytics(data);
    } catch (error) {
      console.error("Failed to fetch analytics:", error);
    } finally {
      setLoading(false);
    }
  };

  const categoryInfo = {
    cellular_biology: {
      name: "Cellular Biology",
      icon: "🧬",
      color: "from-green-500 to-green-700",
      description: "Stem cells, gene expression, molecular studies",
    },
    musculoskeletal: {
      name: "Musculoskeletal",
      icon: "🦴",
      color: "from-orange-500 to-orange-700",
      description: "Bone, muscle, skeletal system research",
    },
    plant_biology: {
      name: "Plant Biology",
      icon: "🌱",
      color: "from-emerald-500 to-emerald-700",
      description: "Plant growth, root systems, cellular transport",
    },
    cardiovascular: {
      name: "Cardiovascular",
      icon: "❤️",
      color: "from-red-500 to-red-700",
      description: "Heart, circulation, cardiovascular adaptation",
    },
    radiation_studies: {
      name: "Radiation Studies",
      icon: "☢️",
      color: "from-yellow-500 to-yellow-700",
      description: "Radiation effects, oxidative stress",
    },
    microgravity_effects: {
      name: "Microgravity Effects",
      icon: "🌌",
      color: "from-purple-500 to-purple-700",
      description: "Gravity effects, spaceflight adaptation",
    },
    space_missions: {
      name: "Space Missions",
      icon: "🚀",
      color: "from-blue-500 to-blue-700",
      description: "ISS studies, mission research, exploration",
    },
    animal_models: {
      name: "Animal Models",
      icon: "🐭",
      color: "from-pink-500 to-pink-700",
      description: "Mouse, fruit fly, animal experiments",
    },
    general: {
      name: "General Research",
      icon: "🔬",
      color: "from-gray-500 to-gray-700",
      description: "Miscellaneous space biology research",
    },
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <span className="ml-3 text-gray-300">Loading analytics...</span>
      </div>
    );
  }

  if (!analytics) {
    return (
      <div className="text-center p-8 text-gray-400">
        Failed to load analytics data
      </div>
    );
  }

  const filteredPublications =
    selectedCategory === "all"
      ? publications
      : publications.filter(
          (pub) => pub.categories && pub.categories.includes(selectedCategory)
        );

  return (
    <div className="space-y-4">
      {/* Sidebar Header */}
      <div className="space-card rounded-xl p-4">
        <h3 className="text-lg font-bold text-white mb-2 space-font cosmic-text flex items-center gap-2">
          📊 <span>Research Analytics</span>
        </h3>
        <p className="text-gray-400 text-xs">
          {analytics.total_publications} publications in{" "}
          {Object.keys(analytics.category_distribution).length} categories
        </p>
      </div>

      {/* Category Filters */}
      <div className="space-card rounded-xl p-4">
        <h4 className="text-sm font-semibold text-white mb-3">
          Filter by Category
        </h4>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`w-full px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 text-left ${
              selectedCategory === "all"
                ? "bg-blue-600 text-white cosmic-glow"
                : "bg-slate-700 text-gray-300 hover:bg-slate-600"
            }`}
          >
            All Publications ({publications.length})
          </button>
          {Object.entries(analytics.category_distribution).map(
            ([category, count]) => {
              const info = categoryInfo[category];
              if (!info) return null;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-between ${
                    selectedCategory === category
                      ? `bg-gradient-to-r ${info.color} text-white cosmic-glow`
                      : "bg-slate-700 text-gray-300 hover:bg-slate-600"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{info.icon}</span>
                    <span>{info.name}</span>
                  </span>
                  <span className="text-xs">{count}</span>
                </button>
              );
            }
          )}
        </div>
      </div>

      {/* Category Distribution */}
      <div className="space-card rounded-xl p-4">
        <h4 className="text-sm font-semibold text-white mb-3">
          Research Distribution
        </h4>
        <div className="space-y-3">
          {Object.entries(analytics.category_distribution)
            .slice(0, 6)
            .map(([category, count]) => {
              const info = categoryInfo[category];
              if (!info) return null;

              const percentage = (
                (count / analytics.total_publications) *
                100
              ).toFixed(1);

              return (
                <div
                  key={category}
                  className="cursor-pointer hover:bg-slate-700/30 p-2 rounded-lg transition-all duration-300"
                  onClick={() => setSelectedCategory(category)}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{info.icon}</span>
                      <span className="text-white text-xs font-medium">
                        {info.name}
                      </span>
                    </div>
                    <span className="text-gray-400 text-xs">{count}</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-1">
                    <div
                      className={`bg-gradient-to-r ${info.color} h-1 rounded-full transition-all duration-500`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* Keywords */}
      <div className="space-card rounded-xl p-4">
        <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
          🏷️ <span>Top Keywords</span>
        </h4>
        <div className="flex flex-wrap gap-1">
          {analytics.top_keywords.slice(0, 15).map(({ word, count }) => {
            return (
              <span
                key={word}
                className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-md hover:bg-blue-500/30 transition-all duration-300 cursor-pointer text-xs"
                title={`${word}: ${count} occurrences - Click to search SciXplorer`}
                onClick={() => {
                  const sciXplorerUrl = `https://scixplorer.org/search?q=${encodeURIComponent(
                    word
                  )}&sort=score+desc%2Cdate+desc&p=1`;
                  window.open(sciXplorerUrl, "_blank");
                }}
              >
                {word}
              </span>
            );
          })}
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Click keywords to explore via SciXplorer
        </p>
      </div>

      {/* Active Filter */}
      {selectedCategory !== "all" && (
        <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-400 text-sm font-medium">Active Filter</p>
              <p className="text-white text-xs">
                {categoryInfo[selectedCategory]?.name}
              </p>
              <p className="text-gray-400 text-xs">
                {filteredPublications.length} results
              </p>
            </div>
            <button
              onClick={() => setSelectedCategory("all")}
              className="text-gray-400 hover:text-white transition-colors duration-200 p-1"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PublicationsAnalytics;
