import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import DigitalTwinViewer from "./pages/DigitalTwin";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import OpenPage from "./pages/OpenPage";
import SignupPage from "./pages/SignupPage";
import AboutPage from "./pages/AboutPage";
import { UserProvider } from "./UserContext.jsx";
import Chatbot from "./pages/Chatbot.jsx";


function App() {
  return (

    <UserProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/digital-twin" element={<DigitalTwinViewer />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
