import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CallbackScreen.css";

const CallbackScreen = () => {
  const [authCode, setAuthCode] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    if (code) {
      setAuthCode(code);
    } else {
      alert("Authorization code not found in the URL.");
    }
  }, []);

  const handleGetToken = async () => {
    if (!authCode) {
      alert("Authorization code is missing.");
      return;
    }
    console.log("Token Endpoint:", process.env.REACT_APP_ONESYNC_TOKEN_ENDPOINT);
console.log("Redirect URI:", process.env.REACT_APP_ONESYNC_REDIRECT_URI);
console.log("Client ID:", process.env.REACT_APP_ONESYNC_CLIENT_ID);
console.log("Client Secret:", process.env.REACT_APP_ONESYNC_CLIENT_SECRET);

    try {
      const response = await axios.post(
        process.env.REACT_APP_ONESYNC_TOKEN_ENDPOINT,
        new URLSearchParams({
          grant_type: "authorization_code",
          code: authCode,
          redirect_uri: process.env.REACT_APP_ONESYNC_REDIRECT_URI, // Callback URI
          client_id: process.env.REACT_APP_ONESYNC_CLIENT_ID,
          client_secret: process.env.REACT_APP_ONESYNC_CLIENT_SECRET,
          scope: "openid profile email", // Include necessary scopes
        }),
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );

      // Token 정보를 가지고 TokenScreen으로 리다이렉트
      const params = new URLSearchParams({
        accessToken: response.data.access_token,
        idToken: response.data.id_token,
      });
      window.location.href = `/token?${params.toString()}`;
    } catch (error) {
      console.error("Error fetching token:", error);
      setError("Failed to fetch token. Please check the console for more details.");
    }
  };

  return (
    <div className="callback-container">
      <div className="card">
        <div className="card-header">
          <h1 className="title">Authorization Code Received</h1>
        </div>
        <div className="card-content">
          {authCode ? (
            <>
              <p className="description">Your Authorization Code:</p>
              <div className="code-display">{authCode}</div>
              <button className="primary-button" onClick={handleGetToken}>
                Fetch Access Token
              </button>
            </>
          ) : (
            <p className="description">No authorization code found.</p>
          )}
        </div>
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

export default CallbackScreen;
