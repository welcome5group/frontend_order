import React from 'react';
import OrderItem from './OrderItem';
import styled from './Order.module.scss'
import { orderType } from '../../types/types';

interface types {
  orderList: orderType[],
}

const OrderList = ({ orderList }: types) => {
  return (
    <div className={styled.orderListContainer}>
      {orderList.map((order, idx) => (
        <OrderItem order={order} key={idx} />
      ))}
    </div>
  );
};

export default OrderList;