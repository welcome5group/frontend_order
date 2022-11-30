import React from 'react';
import CartItem from './CartItem';
import styled from './Cart.module.scss'
import { testType } from '../../store/testStore';
import { SetterOrUpdater } from 'recoil';

interface types {
  cartList: testType[],
  setCartList: SetterOrUpdater<testType[]>
}

const CartList = ({ cartList, setCartList }: types) => {

  const handleIncreaseHanlder = (id: number, operations: string) => {
    setCartList(item => {
      return item.map(obj => {
        if (obj.id === id) {
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
  }

  const handleDeleteItem = (id: number) => {
    setCartList(cartList.filter(item => item.id !== id))
  }

  return (
    <div className={styled.cartList}>
      {cartList.map(cartItem => (
        <CartItem cartItem={cartItem} key={cartItem.id} handleIncreaseHanlder={handleIncreaseHanlder} handleDeleteItem={handleDeleteItem} />
      ))}
    </div>
  );
};

export default CartList;