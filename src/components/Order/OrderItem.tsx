import { type } from 'os';
import React, { useState } from 'react';
import { cartType, orderType } from '../../store/store';
import styled from './Order.module.scss'

interface types {
  order: orderType,
}

const OrderItem = ({ order }: types) => {

  const [showDetail, setShowDetail] = useState(false);

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const today = `${year}-${month}-${day}`

  console.log(order)

  return (
    <div className={styled.orderProductContainer}>
      <div className={styled.orderNumberArea}>
        <p>주문번호 : 122</p>
      </div>
      {order.orderProduct.map((item) => (
        <div key={item.product.id} className={styled.orderProductWrap}>
          <div className={styled.orderInfo}>
            <p>{item.product.name}</p>
            <p>{item.count} 개 </p>
          </div>
        </div>
      ))}
      <div>{order.totalPrice} 원</div>
      {/* <div>{order[0].product.name} 외 {order.length - 1} 개</div> */}
    </div>
  );
};

export default OrderItem;