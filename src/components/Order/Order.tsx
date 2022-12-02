import React from 'react';
import { useRecoilState } from 'recoil';
import { orderStore, orderType } from '../../store/store';
import styled from './Order.module.scss'
import OrderList from './OrderList';

const Order = () => {

  const [orderList, setOrderList] = useRecoilState<orderType[]>(orderStore)

  console.log(orderList)

  return (
    <div className={styled.orderContainer}>
      <div className={styled.titleArea}>
        <h1 className={styled.orderTitle}>
          주문 내역
        </h1>
      </div>
      <OrderList orderList={orderList} />
    </div>
  );
};

export default Order;