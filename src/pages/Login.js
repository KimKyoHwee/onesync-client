import React from "react";


/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "./login.css";

export const MyPlugin = () => {
  return (
    <div id="webcrumbs"> 
                	<div className="w-[360px] bg-white shadow rounded-lg p-6 space-y-5">  <div className="w-full h-[60px] bg-neutral-300 rounded flex items-center justify-center">
    	    <span className="text-neutral-500">브랜드 로고</span>
    	  </div>
    	  <form className="space-y-4">
    	    <input
    	      type="text"
    	      placeholder="카카오메일 아이디, 이메일, 전화번호"
    	      className="w-full border border-neutral-300 rounded-full px-4 py-2 text-neutral-950 focus:outline-none"
    	    />
    	    <input
    	      type="password"
    	      placeholder="비밀번호"
    	      className="w-full border border-neutral-300 rounded-full px-4 py-2 text-neutral-950 focus:outline-none"
    	    />
    	    <div className="flex items-center space-x-2 text-neutral-600 text-sm">
    	      <input type="checkbox" id="keepLogin" className="rounded" />
    	      <label htmlFor="keepLogin" className="text-neutral-600">로그인 상태 유지</label>
    	      <i className="material-symbols-outlined text-neutral-500">info</i>
    	    </div>
    	    <button className="w-full bg-yellow-500 text-neutral-50 rounded-full py-2 font-medium">
    	      로그인
    	    </button>
    	    <div className="text-center text-neutral-500 text-sm">또는</div>
    	    <button className="w-full border border-neutral-300 text-neutral-950 rounded-full py-2 font-medium">
    	      QR코드 로그인
    	    </button>
    	  </form>
    	  <div className="flex justify-between text-neutral-500 text-sm">
    	    <a href="#" className="hover:underline">회원가입</a>
    	    <a href="#" className="hover:underline">계정 찾기</a>
    	    <a href="#" className="hover:underline">비밀번호 찾기</a>
    	  </div>
    	</div> 
                </div>
  )
}
