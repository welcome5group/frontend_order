import React from 'react';
import { orderType } from '../../store/store';
import styled from './Order.module.scss'

interface types {
  order: orderType,
}

const OrderItem = ({ order }: types) => {
  return (
    <div className={styled.orderProductContainer}>
      <div className={styled.orderNumberArea}>
        <p>주문번호 : 122</p>
        <p>주문일시 : 2022-12-02 13:42:02</p>
      </div>
      {order.orderProduct.map((item) => (
        <div key={item.product.id} className={styled.orderProductWrap}>
          <div className={styled.orderInfo}>
            <p>{item.product.name}</p>
            <p>{item.count} 개 </p>
          </div>
        </div>
      ))}
      <div className={styled.totalPrice}>결제금액 : {order.totalPrice.toLocaleString()} 원</div>
    </div>
  );
};

export default OrderItem;