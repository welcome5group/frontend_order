import React from 'react';
import { orderType } from '../../store/store';
import OrderItem from './OrderItem';
import styled from './Order.module.scss'

interface types {
  orderList: orderType[],
}

const OrderList = ({ orderList }: types) => {

  console.log(orderList)

  return (
    <div className={styled.orderListContainer}>
      {orderList.map((order, idx) => (
        <OrderItem order={order} key={idx} />
      ))}
    </div>
  );
};

export default OrderList;