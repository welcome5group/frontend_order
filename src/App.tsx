import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom"
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import FindPasswordPage from "./pages/FindPasswordPage";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import MypagePage from "./pages/MypagePage";
import MyPaymentPage from "./pages/MyPaymentPage";
import ReviewPage from "./pages/ReviewPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useRecoilState } from "recoil";
import { paramStore, tableNumTypes } from "./store/store";

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
        <Route path="/:id/:storeName/:tableNum" element={<MenuPage />} />
        <Route path="/:id/:storeName/" element={<MenuPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/mypage" element={<MypagePage />} />
        <Route path="/mypayment" element={<MyPaymentPage />} />
        <Route path="/review/:orderId" element={<ReviewPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/findPassword" element={<FindPasswordPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
