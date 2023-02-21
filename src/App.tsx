import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import "./App.css";
import loadable from "@loadable/component";

const MainPage = loadable(() => import('./pages/MainPage'))
const LoginPage = loadable(() => import('./pages/Login/LoginPage'))
const SignUpPage = loadable(() => import('./pages/Login/SignUpPage'))
const FindPasswordPage = loadable(() => import('./pages/Login/FindPasswordPage'))
const MenuPage = loadable(() => import('./pages/Order/MenuPage'))
const CartPage = loadable(() => import('./pages/Order/CartPage'))
const OrderPage = loadable(() => import('./pages/Order/OrderPage'))
const MypagePage = loadable(() => import('./pages/MyPage/MypagePage'))
const MyPaymentPage = loadable(() => import('./pages/MyPage/MyPaymentPage'))
const ReviewPage = loadable(() => import('./pages/Order/ReviewPage'))
const NotFoundPage = loadable(() => import('./pages/NotFoundPage'))
const MyReviewPage = loadable(() => import('./pages/MyPage/MyReviewPage'))
const HomePage = loadable(() => import('./pages/Home/HomePage'))
const SignUpCheckPage = loadable(() => import('./pages/Login/SignUpCheckPage'))
const ChangePasswordPage = loadable(() => import('./pages/Login/ChangePasswordPage'))
const KakaoPage = loadable(() => import('./pages/Login/KakaoPage'))


function App() {

  useEffect(() => {
    alert(
      '\n테스트 모드입니다.' +
      '\nF12 -> Ctrl + Shift + M -> Dimensions: iPhone 설정 부탁드립니다' +
      '\n몇 몇 기능은 이용할 수 없습니다.' +
      '\n로그인 : 형식만 맞으면 로그인이 가능 합니다.\n           (이메일 형식, 비밀번호(특수문자 + 8자 이상))' +
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
