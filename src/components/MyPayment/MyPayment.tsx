import React from 'react';
import styled from './MyPayment.module.scss'

const MyPayment = () => {
  return (
    <div className={styled.mypaymentContainer}>
      <div className={styled.date}>12월</div>
      <div className={styled.paymentList}>
        <div className={styled.paymentItem}>
          <span className={styled.day}>31일</span>
        </div>
      </div>
    </div>
  );
};

export default MyPayment;