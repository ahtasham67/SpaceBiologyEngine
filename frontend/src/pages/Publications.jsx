import { useEffect, useState } from "react";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import PublicationsAnalytics from "../components/PublicationsAnalytics.jsx";

function Publications() {
  const [publications, setPublications] = useState([]);
  const [filteredPublications, setFilteredPublications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPublication, setSelectedPublication] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [publicationsPerPage] = useState(9);

  // Fetch publications data from backend
  useEffect(() => {
    fetchPublications();
  }, []);

  // Filter publications based on search term
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredPublications(publications);
    } else {
      const filtered = publications.filter((pub) =>
        pub.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPublications(filtered);
    }
    setCurrentPage(1); // Reset to first page when searching
  }, [searchTerm, publications]);

  const fetchPublications = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8000/api/publications");
      if (!response.ok) {
        throw new Error("Failed to fetch publications");
      }
      const data = await response.json();
      setPublications(data);
      setFilteredPublications(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Pagination logic
  const indexOfLastPublication = currentPage * publicationsPerPage;
  const indexOfFirstPublication = indexOfLastPublication - publicationsPerPage;
  const currentPublications = filteredPublications.slice(
    indexOfFirstPublication,
    indexOfLastPublication
  );
  const totalPages = Math.ceil(
    filteredPublications.length / publicationsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePreview = (publication) => {
    setSelectedPublication(publication);
  };

  const closePreview = () => {
    setSelectedPublication(null);
  };

  const openInNewWindow = (url) => {
    // Open in a new window/tab with optimal dimensions for reading
    const previewWindow = window.open(
      url,
      "_blank",
      "width=1200,height=800,scrollbars=yes,resizable=yes,toolbar=yes,menubar=yes"
    );
    if (previewWindow) {
      previewWindow.focus();
    } else {
      // Fallback if popup is blocked - open in new tab
      window.open(url, "_blank");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 text-white">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-xl text-gray-300">Loading publications...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-900 text-white">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <p className="text-xl text-red-400 mb-4">Error: {error}</p>
            <button
              onClick={fetchPublications}
              className="space-button bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

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
      </div>

      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 space-font">
            <span className="text-white cosmic-text">Space Biology </span>
            <span className="space-gradient-text">Publications</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive database of space biology research
            publications.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Left Column - Analytics & Filters */}
          <div className="lg:col-span-1 space-y-6">
            {/* Fixed Search Section */}
            <div className="space-card rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 space-font cosmic-text flex items-center gap-2">
                🔍 <span>Search Research</span>
              </h3>

              {/* Search Bar */}
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search publications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* External Search */}
              <button
                onClick={() => {
                  if (searchTerm.trim()) {
                    const sciXplorerUrl = `https://scixplorer.org/search?q=${encodeURIComponent(
                      searchTerm
                    )}&sort=score+desc%2Cdate+desc&p=1`;
                    window.open(sciXplorerUrl, "_blank");
                  }
                }}
                disabled={!searchTerm.trim()}
                className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white text-sm rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 mb-4"
                title="Search external databases via SciXplorer"
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Search SciXplorer
              </button>

              {/* Quick Suggestions */}
              <div className="space-y-2">
                <p className="text-xs text-gray-400 mb-2">Quick searches:</p>
                <div className="flex flex-wrap gap-1">
                  {[
                    "microgravity bones",
                    "stem cells space",
                    "radiation effects",
                    "ISS experiments",
                  ].map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => setSearchTerm(suggestion)}
                      className="px-2 py-1 bg-slate-700/50 hover:bg-slate-600 text-gray-300 text-xs rounded-md transition-all duration-300"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>

              {/* Results Counter */}
              <div className="mt-4 pt-4 border-t border-gray-700/50">
                <p className="text-sm text-gray-400">
                  {filteredPublications.length} publication
                  {filteredPublications.length !== 1 ? "s" : ""} found
                </p>
              </div>
            </div>

            {/* Scrollable Analytics Section */}
            <div className="lg:sticky lg:top-6 lg:max-h-[calc(100vh-20rem)] lg:overflow-y-auto custom-scrollbar">
              <PublicationsAnalytics publications={publications} />
            </div>
          </div>

          {/* Right Column - Publications Grid */}
          <div className="lg:col-span-3">
            {currentPublications.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                  {currentPublications.map((publication, index) => (
                    <div
                      key={index}
                      className="space-card rounded-xl p-6 hover:scale-[1.02] transition-all duration-300 cosmic-glow cursor-pointer h-full flex flex-col"
                      onClick={() => handlePreview(publication)}
                    >
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-3 leading-relaxed line-clamp-3">
                          {publication.title}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
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
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          <span>PubMed Central</span>
                        </div>
                        {publication.pmc_id && (
                          <div className="inline-block bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
                            {publication.pmc_id}
                          </div>
                        )}
                      </div>
                      <div className="mt-auto pt-4 border-t border-gray-700/50">
                        <div className="flex items-center justify-center gap-2 text-purple-400 font-medium">
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
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                          Click to Preview
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 mb-8">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="space-button bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-medium transition-all duration-300"
                    >
                      Previous
                    </button>

                    {[...Array(totalPages)].map((_, index) => {
                      const pageNumber = index + 1;
                      if (
                        pageNumber === 1 ||
                        pageNumber === totalPages ||
                        (pageNumber >= currentPage - 2 &&
                          pageNumber <= currentPage + 2)
                      ) {
                        return (
                          <button
                            key={pageNumber}
                            onClick={() => handlePageChange(pageNumber)}
                            className={`space-button px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                              currentPage === pageNumber
                                ? "bg-blue-600 text-white cosmic-glow"
                                : "bg-slate-700 hover:bg-slate-600 text-white"
                            }`}
                          >
                            {pageNumber}
                          </button>
                        );
                      } else if (
                        pageNumber === currentPage - 3 ||
                        pageNumber === currentPage + 3
                      ) {
                        return (
                          <span key={pageNumber} className="text-gray-500">
                            ...
                          </span>
                        );
                      }
                      return null;
                    })}

                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="space-button bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-medium transition-all duration-300"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-4xl">🔍</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-400 mb-4">
                  No Publications Found
                </h3>
                <p className="text-gray-500">
                  {searchTerm
                    ? `No publications match "${searchTerm}"`
                    : "No publications available"}
                </p>
                <div className="mt-6">
                  <p className="text-blue-400 mb-3">
                    Try searching external databases:
                  </p>
                  <button
                    onClick={() => {
                      const sciXplorerUrl = `https://scixplorer.org/search?q=${encodeURIComponent(
                        searchTerm || "space biology"
                      )}&sort=score+desc%2Cdate+desc&p=1`;
                      window.open(sciXplorerUrl, "_blank");
                    }}
                    className="space-button bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 mx-auto"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    Search SciXplorer
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Preview Modal */}
      {selectedPublication && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <h3 className="text-xl font-bold text-white space-font">
                Publication Preview
              </h3>
              <button
                onClick={closePreview}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
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

            <div className="p-6">
              {/* Publication Title */}
              <h2 className="text-2xl font-bold text-white mb-4 leading-relaxed">
                {selectedPublication.title}
              </h2>

              {/* Metadata */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="space-card p-4 rounded-lg">
                  <h4 className="text-blue-400 font-semibold mb-2">Source</h4>
                  <p className="text-gray-300">
                    {selectedPublication.source || "PubMed Central"}
                  </p>
                </div>

                {selectedPublication.pmc_id && (
                  <div className="space-card p-4 rounded-lg">
                    <h4 className="text-blue-400 font-semibold mb-2">PMC ID</h4>
                    <p className="text-gray-300">
                      {selectedPublication.pmc_id}
                    </p>
                  </div>
                )}
              </div>

              {/* Publication Info */}
              <div className="space-card p-4 rounded-lg mb-6">
                <h4 className="text-blue-400 font-semibold mb-2">
                  About This Publication
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  This is a peer-reviewed research publication from PubMed
                  Central (PMC), a free full-text archive of biomedical and life
                  sciences journal literature. PMC contains research articles
                  covering space biology, microgravity effects, astrobiology,
                  and space medicine.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => openInNewWindow(selectedPublication.link)}
                  className="space-button bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 cosmic-glow"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Open Full Article
                </button>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(selectedPublication.link);
                    // You could add a toast notification here
                  }}
                  className="space-button bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  Copy Link
                </button>

                <button
                  onClick={closePreview}
                  className="space-button border border-gray-500 hover:bg-gray-700 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Publications;
