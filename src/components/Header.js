import React from "react";
import '../App.css';

export default function Header() {
    return(
    <>
    <nav header_icon>
        <div class="left_icon">
          <div class="menu_icon"><a href="#"><i class="fa-solid fa-bars fa-2xl" style={{color: "#19191a",}}></i></a></div>
          <div class="pay_icon"><a href="#"><i class="fa-brands fa-apple-pay fa-2xl" style={{color: "#19191a",}}></i></a></div>
        </div>
        <div class="right_icon">
          <div class="message_icon"><a href="#"><i class="fa-regular fa-message fa-2xl" style={{color: "#19191a",}}></i></a></div>
          <div class="bell_icon"><a href="#"><i class="fa-regular fa-bell fa-2xl" style={{color: "#19191a",}}></i></a></div>
        </div>
      </nav>
      <div class="searchbar_div">
        <input class="searchbar" type="text" placeholder="검색어를 입력해주세요"></input>
      </div>
      <div class="icon_container">
        <div><a href="#"><i class="fa-solid fa-envelope fa-xl" style={{color: "#19CE60",}}></i>메일</a></div>
        <div><a href="#"><i class="fa-solid fa-mug-saucer fa-xl" style={{color: "#19CE60",}}></i>카페</a></div>
        <div><a href="#"><i class="fa-solid fa-blog fa-xl" style={{color: "#19CE60",}}></i>블로그</a></div>
        <div><a href="#"><i class="fa-solid fa-cart-shopping fa-xl" style={{color: "#19CE60",}}></i>쇼핑</a></div>
        <div><a href="#"><i class="fa-regular fa-newspaper fa-xl" style={{color: "#19CE60",}}></i>뉴스</a></div>
        <div><a href="#"><i class="fa-solid fa-arrow-trend-up fa-xl" style={{color: "#19CE60",}}></i>증권</a></div>
        <div><a href="#"><i class="fa-solid fa-sign-hanging fa-xl" style={{color: "#19CE60",}}></i>부동산</a></div>
        <div><a href="#"><i class="fa-solid fa-map-location-dot fa-xl" style={{color: "#19CE60",}}></i>지도</a></div>
        <div><a href="#"><i class="fa-solid fa-book fa-xl" style={{color: "#19CE60",}}></i>웹툰</a></div>
        <div><a href="#"><i class="fa-solid fa-ellipsis fa-xl" style={{color: "#19CE60",}}></i></a></div>
      </div>
      </>
    );
}