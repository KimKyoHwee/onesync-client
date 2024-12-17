import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ConcentScreen from "./pages/ConcentScreen";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} /> {/* localhost:3000/login */}
        <Route path="/concent" element={<ConcentScreen />} /> {/* localhost:3000/concent */}
      </Routes>
    </Router>
  );
};

export default App;
