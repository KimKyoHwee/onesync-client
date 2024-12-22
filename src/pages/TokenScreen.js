import React, { useEffect, useState } from "react";
import "./TokenScreen.css";

const TokenScreen = () => {
  const [accessToken, setAccessToken] = useState("");
  const [idToken, setIdToken] = useState("");

  useEffect(() => {
    // Get tokens from URL query parameters
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get("accessToken");
    const idToken = params.get("idToken");

    if (accessToken) setAccessToken(accessToken);
    if (idToken) setIdToken(idToken);
  }, []);

  const handleGoToMain = () => {
    // Navigate to the main page or dashboard
    window.location.href = "/main";
  };

  const handleGoToSwagger = () => {
    // Swagger 페이지로 이동
    window.location.href = "http://localhost:8080/swagger-ui/index.html";
  };


  return (
    <div className="token-container">
      <div className="token-card">
        <h1 className="title">Tokens Retrieved</h1>
        <div className="token-display">
          <h2>Access Token</h2>
          <textarea
            className="token-textarea"
            value={accessToken || "No Access Token Available"}
            readOnly
          />
        </div>
        <div className="token-display">
          <h2>ID Token</h2>
          <textarea
            className="token-textarea"
            value={idToken || "No ID Token Available"}
            readOnly
          />
        </div>
        <button className="primary-button" onClick={handleGoToSwagger}>
          Go to Main Page
        </button>
      </div>
    </div>
  );
};

export default TokenScreen;
