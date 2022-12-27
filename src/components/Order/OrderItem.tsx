import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { orderStore, paramStore } from '../../store/store';
import { orderType } from '../../types/types';
import styled from './Order.module.scss'

interface types {
  order: orderType,
}

const OrderItem = ({ order }: types) => {

  const [params] = useRecoilState(paramStore)

  const orderTime = order?.orderDate.split('T')[0] + " " + order?.orderDate.split('T')[1].slice(0, 8)
  return (
    <div className={styled.orderProductContainer}>
      <div className={styled.orderNumberArea}>
        <p>주문번호 : {order.orderId}</p>
        <p>주문일시 : {orderTime}</p>
        <p>주문상태 :
          {
            order.orderStatus !== "INCOMP" ?
              <span className={styled.complet}>완료</span> :
              <span className={styled.ready}>준비중</span>
          }
        </p>
      </div>
      {
        order.menuList.map((item) => (
          <div key={item.name} className={styled.orderProductWrap}>
            <div className={styled.orderInfo}>
              <p>{item.name}</p>
              <p>{item.count} 개 </p>
            </div>
          </div>
        ))
      }
      <div className={styled.totalPrice}>결제금액 : {order.totalPrice.toLocaleString()} 원</div>
      {
        order.orderStatus === "INCOMP" ?
          <Link to={`/review/${params.id}/${order.orderId}`} className={styled.reviewBtn}>리뷰작성</Link> : null
      }
    </div >
  );
};

export default OrderItem;