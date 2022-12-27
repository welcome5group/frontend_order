import React from 'react';
import { cartType } from '../../types/types';
import styled from './Cart.module.scss'

interface types {
  cartItem: cartType,
  handleIncreaseHanlder: (id: number, operations: string) => void,
  handleDeleteItem: (id: number) => void
}

const CartItem = ({ cartItem, handleIncreaseHanlder, handleDeleteItem }: types) => {
  const totalPrice = (cartItem.product.price * cartItem.count);
  return (
    <>
      <div className={styled.cartItem}>
        <div className={styled.cartImg}>
          <img src={require('../../assets/americano.jpg')} alt="이미지" />
        </div>
        <div className={styled.iteminfoWrap}>
          <span className={styled.itemName}>{cartItem.product.menuName}</span>
          <span className={styled.itemPrice}>{totalPrice.toLocaleString()}원</span>
        </div>
        <div className={styled.functionBtnGroup}>
          <div>
            <button className={styled.deleteBtn} onClick={() => handleDeleteItem(cartItem.product.menuId)} > X </button>
          </div>
          <div className={styled.countGroup}>
            <button className={cartItem.count === 1 ? `${styled.countBtn} ${styled.disabled}` : styled.countBtn} onClick={() => handleIncreaseHanlder(cartItem.product.menuId, 'minus')} disabled={cartItem.count === 1}>-</button>
            <p>{cartItem.count}</p>
            <button className={styled.countBtn} onClick={() => handleIncreaseHanlder(cartItem.product.menuId, 'plus')}>+</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;