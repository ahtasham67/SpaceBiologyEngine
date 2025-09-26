import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import DigitalTwinViewer from "./pages/DigitalTwin";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/digital-twin" element={<DigitalTwinViewer />} />
      </Routes>
    </Router>
  );
}

export default App;
