import React from 'react';
import { menu } from '../../mock/menuData';
import { testType } from '../../store/testStore';
import styled from './Cart.module.scss'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

interface types {
  cartItem: testType,
  handleIncreaseHanlder: (id: number, operations: string) => void,
  handleDeleteItem: (id: number) => void
}

const CartItem = ({ cartItem, handleIncreaseHanlder, handleDeleteItem }: types) => {
  const item = menu[cartItem.id - 1]

  console.log(item.price)

  const totalPrice = (Number(item.price) * Number(cartItem.count));
  return (
    <>
      <div className={styled.menuItem}>
        <div className={styled.menuImg}>
          <img src={require('../../assets/americano.jpg')} alt="이미지" />
        </div>
        <div className={styled.iteminfoWrap}>
          <span className={styled.itemName}>{item.name}</span>
          <span className={styled.itemPrice}>{totalPrice.toLocaleString()}원</span>
        </div>
        <div className={styled.functionBtnGroup}>
          <div>
            <button className={styled.deleteBtn} onClick={() => handleDeleteItem(item.id)} > X </button>
          </div>
          <div className={styled.countGroup}>
            <button className={styled.countBtn} onClick={() => handleIncreaseHanlder(item.id, 'minus')} disabled={cartItem.count === 1}><AiOutlineMinus /></button>
            <p>{cartItem.count}</p>
            <button className={styled.countBtn} onClick={() => handleIncreaseHanlder(item.id, 'plus')}><AiOutlinePlus /></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;