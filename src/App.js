import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ConcentScreen from "./pages/ConcentScreen";
import CallbackScreen from "./pages/CallbackScreen";
import First from "./pages/first";
import TokenScreen from "./pages/TokenScreen";




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} /> {/* localhost:3000/login */}
        <Route path="/concent" element={<ConcentScreen />} /> {/* localhost:3000/concent */}
        <Route path="/callback" element={<CallbackScreen />} /> {/* 리디렉트 처리 */}
        <Route path="/first" element={<First />} />
        <Route path="/token" element={<TokenScreen />} />


      </Routes>
    </Router>
  );
};

export default App;
