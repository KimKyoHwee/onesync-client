import React, { useEffect, useState } from "react";
import "./ConcentScreen.css";
import cjonelogo from "../images/cjonelogo.JPG"; // 이미지 경로를 import
import mega from "../images/mega.jpg"; // 이미지 경로를 import

export const ConcentScreen = () => {
  const [allRequiredChecked, setAllRequiredChecked] = useState(false);
  const [optionalChecked, setOptionalChecked] = useState(false);

  const handleRequiredChange = () => {
    const requiredCheckboxes = document.querySelectorAll(".required-checkbox");
    const allChecked = Array.from(requiredCheckboxes).every(
      (checkbox) => checkbox.checked
    );
    setAllRequiredChecked(allChecked);
  };

  const handleOptionalToggle = (e) => {
    const isChecked = e.target.checked;
    setOptionalChecked(isChecked);

    // 선택항목 체크박스 전체 토글
    const optionalCheckboxes = document.querySelectorAll(".optional-checkbox");
    optionalCheckboxes.forEach((checkbox) => (checkbox.checked = isChecked));
  };

  const handleAgreeAll = (e) => {
    const isChecked = e.target.checked;
    setAllRequiredChecked(isChecked);
    setOptionalChecked(isChecked);

    const allCheckboxes = document.querySelectorAll(
      ".required-checkbox, .optional-checkbox"
    );
    allCheckboxes.forEach((checkbox) => (checkbox.checked = isChecked));
  };

  const handleLogin = () => {
    const authUrl =
      "http://localhost:9090/realms/onesync/protocol/openid-connect/auth?" +
      "client_id=webclient&" +
      "redirect_uri=http://localhost:3000/callback&" +
      "response_type=code&" +
      "scope=openid";
    window.location.href = authUrl; // Keycloak으로 리다이렉트
  };

  return (
    <div
      id="webcrumbs"
      className="flex items-center justify-center h-screen bg-gray-100"
    >
      {/* 동의 화면 전체 상자 */}
      <div className="w-[400px] bg-white shadow-md rounded-lg p-6 ">
        {/* 브랜드 로고 */}
        <div className="flex justify-center mb-5">
          <img
            src={cjonelogo}
            alt="CJ ONE Logo"
            className="logo" // 로고 사이즈 조정
          />
        </div>

        {/* 제휴업체 정보 */}
        <div className="flex items-center gap-3 mb-5">
          <img
            src={mega}
            alt="logo"
            className="w-[50px] h-[50px] object-contain"
          />
          <div>
            <h1 className="font-title text-lg font-semibold text-neutral-950">
              Mega Coffee
            </h1>
            <p className="text-sm text-neutral-600">(메가커피)</p>
          </div>
        </div>

        <div className="border-t border-neutral-200 pt-4">
          {/* 전체 동의 */}
          <div className="flex items-center mb-3">
            <input
              type="checkbox"
              className="w-4 h-4 accent-primary-500"
              id="agreeAll"
              onChange={handleAgreeAll}
            />
            <label
              htmlFor="agreeAll"
              className="ml-2 text-neutral-950 font-medium"
            >
              전체 동의하기
            </label>
          </div>

          {/* 필수 제공 항목 */}
          <details className="border-t border-neutral-200 py-2 mb-2">
            <summary className="flex justify-between items-center cursor-pointer">
              <span className="text-neutral-950 font-medium">
                [필수] 필수 제공 항목
              </span>
              <span className="text-primary-500 text-sm">보기</span>
            </summary>
            <ul className="mt-2 ml-4 text-sm text-neutral-600 list-disc">
              <li>
                <input
                  type="checkbox"
                  className="mr-2 required-checkbox"
                  id="requiredEmail"
                  onChange={handleRequiredChange}
                />
                <label htmlFor="requiredEmail">CJ ONE 계정(이메일)</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="mr-2 required-checkbox"
                  id="requiredPhone"
                  onChange={handleRequiredChange}
                />
                <label htmlFor="requiredPhone">CJ ONE 계정(전화번호)</label>
              </li>
            </ul>
          </details>

          {/* 선택 제공 항목 */}
          <details className="border-t border-neutral-200 py-2 mb-4">
            <summary className="flex justify-between items-center cursor-pointer">
              <span className="text-neutral-950 font-medium">
                [선택] 선택 제공 항목
              </span>
              <span className="text-primary-500 text-sm">보기</span>
            </summary>
            <ul className="mt-2 ml-4 text-sm text-neutral-600 list-disc">
              <li>
                <input
                  type="checkbox"
                  className="mr-2 optional-checkbox"
                  id="optionalNickname"
                />
                <label htmlFor="optionalNickname">
                  프로필 정보(닉네임/프로필 사진)
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="mr-2 optional-checkbox"
                  id="optionalGender"
                />
                <label htmlFor="optionalGender">포인트 정보 제공</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="mr-2 optional-checkbox"
                  id="optionalBirthYear"
                />
                <label htmlFor="optionalBirthYear">포인트 사용</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="mr-2 optional-checkbox"
                  id="optionalBirthday"
                />
                <label htmlFor="optionalBirthday">포인트 적립</label>
              </li>
            </ul>
          </details>

          {/* 선택항목 일괄 체크 */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              className="w-4 h-4 accent-primary-500"
              id="optionalAgreement"
              onChange={handleOptionalToggle}
            />
            <label htmlFor="optionalAgreement" className="text-sm text-neutral-600">
              [선택] 제휴업체 (메가커피)에서 CJ ONE 포인트 사용을 허가합니다.
            </label>
          </div>
        </div>

        {/* 동의하고 계속하기 버튼 */}
        <button
          className={`continue-button ${
            allRequiredChecked ? "enabled" : "disabled"
          }`}
          disabled={!allRequiredChecked}
          onClick={handleLogin}
        >
          동의하고 계속하기
        </button>
      </div>
    </div>
  );
};

export default ConcentScreen;
