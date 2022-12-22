import React from 'react';
import { paymentType } from '../../types/types';
import styled from './MyPayment.module.scss'

interface types {
  paymentFilterList: paymentType[],
  month: string,
  day: string,
}

const MyPaymentItem = ({ paymentFilterList, month, day }: types) => {

  // props로 받은 월에 해당하는 데이터 저장
  const monthFilteredData = paymentFilterList.filter(item => item.createdAt.split('-')[1] === month)
  // 월별 데이터에서 일별로 데이터 분류
  const dayFilteredData = monthFilteredData.filter(item => item.createdAt.split('-')[2] === day)

  return (
    <div className={styled.paymentItemContainer}>
      {dayFilteredData.map(item => (
        <div key={item.id} className={styled.paymentItemWrap}>
          <span>{item.storeName}</span>
          <span>{item.menu[0].menuName} 외 {item.menu.length}개</span>
          <span>{item.totalPrice}</span>
        </div>
      ))}
    </div>
  );
};

export default MyPaymentItem;