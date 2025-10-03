import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import DigitalTwinViewer from "./pages/DigitalTwin";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import OpenPage from "./pages/OpenPage";
import SignupPage from "./pages/SignupPage";
import AboutPage from "./pages/AboutPage";
import { UserProvider, useUser } from "./UserContext.jsx";
import Chatbot from "./pages/Chatbot.jsx";

function AppContent() {
  const { loading } = useUser();

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">🚀</div>
          <div className="text-xl">Loading SpaceBio Engine...</div>
        </div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/digital-twin" element={<DigitalTwinViewer />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}

export default App;
