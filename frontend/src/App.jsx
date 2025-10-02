import { Route, Routes } from "react-router-dom";
import "./App.css";

import DigitalTwinViewer from "./pages/DigitalTwin";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import OpenPage from "./pages/OpenPage";
import Publications from "./pages/Publications";
import SignupPage from "./pages/SignupPage";
import { UserProvider } from "./UserContext.jsx";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/digital-twin" element={<DigitalTwinViewer />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/open" element={<OpenPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
