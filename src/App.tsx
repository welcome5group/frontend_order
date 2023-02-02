import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import "./App.css";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/Login/LoginPage";
import SignUpPage from "./pages/Login/SignUpPage";
import FindPasswordPage from "./pages/Login/FindPasswordPage";
import MenuPage from "./pages/Order/MenuPage";
import CartPage from "./pages/Order/CartPage";
import OrderPage from "./pages/Order/OrderPage";
import MypagePage from "./pages/MyPage/MypagePage";
import MyPaymentPage from "./pages/MyPage/MyPaymentPage";
import ReviewPage from "./pages/Order/ReviewPage";
import NotFoundPage from "./pages/NotFoundPage";
import MyReviewPage from "./pages/MyPage/MyReviewPage";
import HomePage from "./pages/Home/HomePage";
import SignUpCheckPage from "./pages/Login/SignUpCheckPage";
import ChangePasswordPage from "./pages/Login/ChangePasswordPage";
import KakaoPage from "./pages/Login/KakaoPage";

function App() {

  useEffect(() => {
    alert(
      '\n테스트 모드입니다.' +
      '\n몇 몇 기능은 이용할 수 없습니다.' +
      '\n\n로그인 : 형식만 맞으면 로그인이 가능 합니다.\n           (이메일 형식, 비밀번호(특수문자 + 8자 이상))' +
      '\n리뷰 작성 : 주문 상태가 완료 상태 시 작성이 가능하도록 되어있습니다.' +
      '\n닉네임 변경 및 비밀번호 변경 기능을 사용할 수 없습니다.'
    )
  }, [])

  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu/:id/:storeName/:tableNum" element={<MenuPage />} />
        <Route path="/menu/:id/:storeName/" element={<MenuPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/mypage" element={<MypagePage />} />
        <Route path="/mypayment" element={<MyPaymentPage />} />
        <Route path="/review/:storeId/:orderId" element={<ReviewPage />} />
        <Route path="/review/:storeId" element={<ReviewPage />} />
        <Route path="/myreview" element={<MyReviewPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/kakao" element={<KakaoPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/findPassword" element={<FindPasswordPage />} />
      <Route path="/changePassword" element={<ChangePasswordPage />} />
      <Route path="/signupCheck" element={<SignUpCheckPage />} />
    </Routes>
  );
}

export default App;
