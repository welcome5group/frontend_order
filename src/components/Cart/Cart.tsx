import React from 'react';
import { useRecoilState } from 'recoil';
import { testStore, testType } from '../../store/testStore';
import styled from './Cart.module.scss'
import CartList from './CartList';

const Cart = () => {

  const [cartList, setCartList] = useRecoilState<testType[]>(testStore)



  console.log(cartList)

  return (
    <div className={styled.cartContainer}>
      <div className={styled.orderCinfirmArea}>
        <div className={styled.titleArea}>
          <h1 className={styled.cartTitle}>
            주문 확인
          </h1>
        </div>
        <div className={styled.cartListArea}>
          <CartList cartList={cartList} setCartList={setCartList} />
        </div>
        <div>
          <button>결제하기</button>
        </div>
      </div>
      {/* <MenuList /> */}
    </div>
  );
};

export default Cart;