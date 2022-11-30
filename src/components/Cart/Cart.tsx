import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { testStore, testType } from '../../store/testStore';
import styled from './Cart.module.scss'
import CartList from './CartList';

const Cart = () => {

  const [cartList, setCartList] = useRecoilState<testType[]>(testStore)
  const [totalPrice, setTotalPrice] = useState(0)


  const handleClick = () => {
    console.log(1);
  }

  useEffect(() => {
    if (cartList.length !== 0) {
      let price = cartList.map(item => (item.price * item.count))
      setTotalPrice(price.reduce((acc, cur) => acc + cur))
    } else {
      setTotalPrice(0)
    }
  }, [cartList])

  return (
    <div className={styled.cartContainer}>
      <div className={styled.orderCinfirmArea}>
        <div className={styled.titleArea}>
          <h1 className={styled.cartTitle}>
            주문 확인
          </h1>
        </div>
        <div className={styled.cartListArea}>
          {cartList.length === 0 ? <div className={styled.noCart}>주문 내역이 없습니다.</div> :
            <CartList cartList={cartList} setCartList={setCartList} />
          }
        </div>
        <div className={styled.totalPriceArea}>
          <p>총 금액 : {totalPrice.toLocaleString()}</p>
        </div>
        <div>
          <button className={cartList.length === 0 ? styled.emptyList : styled.paymentBtn} disabled={cartList.length === 0} onClick={handleClick}>결제하기</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;