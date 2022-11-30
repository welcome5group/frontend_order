import React from 'react';
import { useRecoilState } from 'recoil';
import { testStore, testType } from '../../store/testStore';
import styled from './Cart.module.scss'
import CartList from './CartList';

const Cart = () => {

  const [cartList, setCartList] = useRecoilState<testType[]>(testStore)

  const handleClick = () => {
    console.log(1);
  }

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
        <div>
          <button className={cartList.length === 0 ? styled.emptyList : styled.paymentBtn} disabled={cartList.length === 0} onClick={handleClick}>결제하기</button>
        </div>
      </div>
      {/* <MenuList /> */}
    </div>
  );
};

export default Cart;