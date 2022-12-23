import React, { useState } from 'react';
import { paymentType } from '../../types/types';
import styled from './MyPayment.module.scss'
import MypaymentMenuItem from './MypaymentMenuItem';

interface types {
  paymentFilterList: paymentType[],
  month: string,
  day: string,
}

const MyPaymentItem = ({ paymentFilterList, month, day }: types) => {
  // props로 받은 월에 해당하는 데이터 저장
  const monthFilteredData = paymentFilterList.filter(item => item.createdAt.split('-')[1] === month)
  // 월별 데이터에서 일별로 데이터 분류
  const dayFilteredData = monthFilteredData.filter(item => item.createdAt.split('T')[0].split('-')[2] === day)

  return (
    <div className={styled.paymentItemContainer}>
      {dayFilteredData.map(item => (
        <>
          <MypaymentMenuItem item={item} />
        </>
      ))}
    </div>
  );
};

export default MyPaymentItem;