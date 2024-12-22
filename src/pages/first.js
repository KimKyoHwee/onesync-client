import React from "react";
import { useNavigate } from "react-router-dom";
import "./first.css";
import cjonelogo from "../images/cjone.jpg"; // 이미지 경로를 import
import mega from "../images/mega.jpg"; // 이미지 경로를 import

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/concent");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* 상단 투명 배경 추가 */}
        <div className="card-header transparent-header">
          <img src={mega} alt="CJ ONE Logo" className="logo" />
          <h1 className="card-title">CJ ONE 포인트</h1>
          <p className="card-description">
            메가커피에서도 손쉽게, CJ ONE
          </p>
        </div>
        <div className="card-content">
          <p className="text-muted">
            CJ ONESYNC 계정으로 로그인하여 포인트 적립, 사용, 조회 서비스를 이용해보세요.
          </p>
          {/* 소셜 로그인 스타일 버튼 */}
          <button className="social-login-button" onClick={handleLogin}>
            <img src={cjonelogo} alt="Kakao Logo" className="social-logo" />
            CJ ONE 로그인
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
