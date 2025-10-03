import { Route, Routes } from "react-router-dom";
import "./App.css";

import DigitalTwinViewer from "./pages/DigitalTwin";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import OpenPage from "./pages/OpenPage";
import Publications from "./pages/Publications";
import SignupPage from "./pages/SignupPage";
import AboutPage from "./pages/AboutPage";
import { UserProvider, useUser } from "./UserContext.jsx";
import Chatbot from "./pages/Chatbot.jsx";

function AppContent() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/digital-twin" element={<DigitalTwinViewer />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="/publications" element={<Publications />} />
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
