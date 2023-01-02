import React, { useMemo } from 'react';
import { SetterOrUpdater } from 'recoil';
import { cartType } from '../../types/types';
import styled from './Cart.module.scss'

interface types {
  cartItem: cartType,
  setCartList: SetterOrUpdater<cartType[]>;
  handleDeleteItem: (id: number) => void
}

const CartItem = ({ cartItem, setCartList, handleDeleteItem }: types) => {
  // 카트리스트에 있는 아이템 증가, 감소 기능
  const handleIncreaseHanlder = useMemo(() => (id: number, operations: string) => {
    setCartList(item => {
      return item.map(obj => {
        if (obj.product.menuId === id) {
          if (operations === 'plus') {
            return { ...obj, 'count': obj.count + 1 }
          } else {
            return { ...obj, 'count': obj.count - 1 }
          }
        } else {
          return { ...obj };
        }
      })
    })
  }, [setCartList])
  const totalPrice = cartItem.product.price * cartItem.count;
  return (
    <>
      <div className={styled.cartItem}>
        <div className={styled.cartImg}>
          <img src={require(`../../assets/coffee/${cartItem.product.imageUrl}.jpg`)} alt="이미지" />
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