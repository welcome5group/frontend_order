import React from 'react';
import { menu } from '../../mock/menuData';
import { cartType } from '../../store/store';
import styled from './Cart.module.scss'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

interface types {
  cartItem: cartType,
  handleIncreaseHanlder: (id: number, operations: string) => void,
  handleDeleteItem: (id: number) => void
}

const CartItem = ({ cartItem, handleIncreaseHanlder, handleDeleteItem }: types) => {
  // const item = menu[cartItem.product.id - 1]
  const totalPrice = (Number(cartItem.product.price) * Number(cartItem.count));
  return (
    <>
      <div className={styled.cartItem}>
        <div className={styled.cartImg}>
          <img src={require('../../assets/americano.jpg')} alt="이미지" />
        </div>
        <div className={styled.iteminfoWrap}>
          <span className={styled.itemName}>{cartItem.product.name}</span>
          <span className={styled.itemPrice}>{totalPrice.toLocaleString()}원</span>
        </div>
        <div className={styled.functionBtnGroup}>
          <div>
            <button className={styled.deleteBtn} onClick={() => handleDeleteItem(cartItem.product.id)} > X </button>
          </div>
          <div className={styled.countGroup}>
            <button className={cartItem.count === 1 ? `${styled.countBtn} ${styled.disabled}` : styled.countBtn} onClick={() => handleIncreaseHanlder(cartItem.product.id, 'minus')} disabled={cartItem.count === 1}>-</button>
            <p>{cartItem.count}</p>
            <button className={styled.countBtn} onClick={() => handleIncreaseHanlder(cartItem.product.id, 'plus')}>+</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;