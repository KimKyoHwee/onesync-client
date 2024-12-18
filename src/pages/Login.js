import React, { useState } from "react";
import "./Login.css";
import cjonelogo from "../images/cjonelogo.JPG"; // 이미지 경로를 import
import { redirect } from "react-router-dom";

const Login = () => {
  // 상태값 관리
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 로그인 요청 처리
  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        credentials: "include", // 세션 쿠키 포함
        body: new URLSearchParams({
          username: username,
          password: password,
        }),
      });
  
      if (response.redirected) {
        // 리다이렉트된 URL로 브라우저 이동
        window.location.href = response.url;
      } else {
        setError("로그인에 실패했습니다.");
      }
    } catch (err) {
      console.error("Login failed:", err);
      setError("서버와의 통신 중 오류가 발생했습니다.");
    }
  };
  

  return (
    <div
      id="webcrumbs"
      className="flex items-center justify-center h-screen bg-gray-100"
    >
      <div className="w-[360px] bg-white shadow rounded-lg p-6 space-y-5">
        {/* 브랜드 로고 */}
        <div className="w-full h-[6px] flex items-center justify-center">
          <img src={cjonelogo} alt="CJ ONE 로고" className="h-12 w-auto" />
        </div>

        {/* 오류 메시지 */}
        {error && (
          <div className="text-red-500 text-sm text-center">{error}</div>
        )}

        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="CJ ONE 아이디"
            className="w-full border border-neutral-300 rounded-full px-4 py-2 text-neutral-950 focus:outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // 입력값 상태 업데이트
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="w-full border border-neutral-300 rounded-full px-4 py-2 text-neutral-950 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // 입력값 상태 업데이트
          />
          <div className="flex items-center space-x-2 text-neutral-600 text-sm">
            <input type="checkbox" id="keepLogin" className="rounded" />
            <label htmlFor="keepLogin" className="text-neutral-600">
              로그인 상태 유지
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-neutral-50 rounded-full py-2 font-medium"
          >
            로그인
          </button>
          <div className="text-center text-neutral-500 text-sm">또는</div>
          <button
            type="button"
            className="w-full border border-neutral-300 text-neutral-950 rounded-full py-2 font-medium"
          >
            QR코드 로그인
          </button>
        </form>
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
