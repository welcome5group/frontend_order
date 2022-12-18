import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom"
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
import { useRecoilState } from "recoil";
import { paramStore } from "./store/store";
import MyReviewPage from "./pages/MyPage/MyReviewPage";
import HomePage from "./pages/Home/HomePage";
import { tableNumTypes } from "./types/types";

function App() {

  const [, setParams] = useRecoilState<tableNumTypes>(paramStore)

  const closeEvent = (e: BeforeUnloadEvent) => {
    e.returnValue = "";
    localStorage.removeItem("recoil-persist");
    setParams({
      id: '',
      storeName: '',
      tableNum: 0,
    })
  };

  useEffect(() => {
    (() => {
      window.addEventListener("beforeunload", closeEvent);
    })();
  })

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
        <Route path="/review/:orderId" element={<ReviewPage />} />
        <Route path="/myreview" element={<MyReviewPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/findPassword" element={<FindPasswordPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
