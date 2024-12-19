import React, { useEffect } from "react";

const CallbackScreen = () => {
  useEffect(() => {
    // URL에서 Authorization Code 추출
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      console.log("Authorization Code:", code);
      // Access Token 요청 함수 호출
      exchangeToken(code);
    } else {
      console.error("Authorization Code가 없습니다.");
    }
  }, []);

  const exchangeToken = async (code) => {
    try {
      const response = await fetch("http://localhost:8080/oauth2/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          code: code,
          redirect_uri: "http://localhost:3000/callback",
          client_id: "example1",
          client_secret: "f8262990-3c0f-4b27-84d8-a31c8536dbdd", // 클라이언트 시크릿
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Access Token:", data.access_token);
        // Access Token 저장 또는 후속 작업
      } else {
        console.error("토큰 요청 실패:", response.status);
      }
    } catch (err) {
      console.error("토큰 요청 중 오류 발생:", err);
    }
  };

  return <div>처리 중...</div>;
};

export default CallbackScreen;
