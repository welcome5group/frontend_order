import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useDateFilter } from '../../Hooks/useDateFilter';
import { paymentData } from '../../mock/paymentData';
import { paymentType } from '../../store/store';
import styled from './MyPayment.module.scss'
import MyPaymentList from './MyPaymentList';

const MyPayment = () => {

  const [paymentList, setPaymentList] = useState<paymentType[]>([])
  const month = useDateFilter(paymentData, 1)

  useEffect(() => {
    setPaymentList(paymentData)
  }, [])

  return (
    <div className={styled.mypaymentContainer}>
      {month.map(item => (
        <div key={item}>
          <div className={styled.date}>{item}</div>
          <MyPaymentList paymentList={paymentList} month={item} />
        </div>
      ))}
    </div>
  );
};

export default MyPayment;