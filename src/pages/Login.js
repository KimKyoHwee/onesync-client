import React, { useState } from "react";
import "./Login.css";
import cjonelogo from "../images/cjonelogo.JPG"; // 이미지 경로를 import

const Login = () => {
  // 상태값 관리
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 로그인 요청 처리
  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        credentials: "include",
        body: new URLSearchParams({
          username: username,
          password: password,
        }),
      });
  
      if (response.ok) {
        // 인증 성공 후 Authorization Code 요청
        const authUrl = "http://localhost:8080/oauth2/authorize";
        const params = new URLSearchParams({
          response_type: "code",
          client_id: "example1",
          redirect_uri: "http://localhost:3000",
          scope: "openid",
        });
        window.location.href = `${authUrl}?${params.toString()}`;
      } else {
        const errorMessage = await response.text();
        setError(`로그인 실패: ${errorMessage || "알 수 없는 오류"}`);
      }
    } catch (err) {
      console.error("Login failed:", err);
      setError("서버와의 통신 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };
  
  return (
    <div
      id="webcrumbs"
      className="flex items-center justify-center h-screen bg-gray-100"
    >
      <div className="w-[360px] bg-white shadow rounded-lg p-6 space-y-5">
        {/* 브랜드 로고 */}
        <div className="w-full flex items-center justify-center">
          <img src={cjonelogo} alt="CJ ONE 로고" className="h-12 w-auto" />
        </div>

        {/* 오류 메시지 표시 */}
        {error && (
          <div className="text-red-500 text-sm text-center">{error}</div>
        )}

        {/* 로그인 폼 */}
        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="CJ ONE 아이디"
            className="w-full border border-neutral-300 rounded px-4 py-2 text-neutral-950 focus:outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // 상태 업데이트
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="w-full border border-neutral-300 rounded px-4 py-2 text-neutral-950 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // 상태 업데이트
          />
          <div className="flex items-center space-x-2 text-neutral-600 text-sm">
            <input type="checkbox" id="keepLogin" className="rounded" />
            <label htmlFor="keepLogin" className="text-neutral-600">
              로그인 상태 유지
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white rounded py-2 font-medium"
          >
            로그인
          </button>
          <div className="text-center text-neutral-500 text-sm">또는</div>
          <button
            type="button"
            className="w-full border border-neutral-300 text-neutral-950 rounded py-2 font-medium"
          >
            QR코드 로그인
          </button>
        </form>

        {/* 추가 링크 */}
        <div className="flex justify-between text-neutral-500 text-sm">
          <a href="#" className="hover:underline">
            회원가입
          </a>
          <a href="#" className="hover:underline">
            계정 찾기
          </a>
          <a href="#" className="hover:underline">
            비밀번호 찾기
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
