import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { paymentData } from '../../mock/paymentData';
import { paymentType } from '../../store/store';
import styled from './MyPayment.module.scss'

const MyPayment = () => {

  const [paymentList, setPaymentList] = useState<paymentType[]>([])

  console.log(paymentList)

  useEffect(() => {
    setPaymentList(paymentData)
  }, [])

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