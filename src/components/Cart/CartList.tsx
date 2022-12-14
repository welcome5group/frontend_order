import React from 'react';
import CartItem from './CartItem';
import styled from './Cart.module.scss'
import { SetterOrUpdater } from 'recoil';
import { cartType } from '../../types/types';

interface types {
  cartList: cartType[],
  setCartList: SetterOrUpdater<cartType[]>
}

const CartList = ({ cartList, setCartList }: types) => {

  // 선택한 아이템 리스트에서 삭제
  const handleDeleteItem = (id: number) => {
    setCartList(cartList.filter(item => item.product.menuId !== id))
  }

  return (
    <div className={styled.cartList}>
      {cartList.map(cartItem => (
        <CartItem cartItem={cartItem} key={cartItem.product.menuId} setCartList={setCartList} handleDeleteItem={handleDeleteItem} />
      ))}
    </div>
  );
};

export default CartList;