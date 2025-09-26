import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import OpenPage from "./pages/OpenPage";
import SignupPage from "./pages/SignupPage";
import "./App.css";
import { UserProvider } from "./UserContext.jsx";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
  <Route path="/open" element={<OpenPage />} />
  <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
