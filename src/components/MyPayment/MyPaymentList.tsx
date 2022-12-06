import React from 'react';
import { useDateFilter } from '../../Hooks/useDateFilter';
import { paymentType } from '../../store/store';
import styled from './MyPayment.module.scss'
import MyPaymentItem from './MyPaymentItem';

interface types {
  paymentList: paymentType[],
  month: string,
}

const MyPaymentList = ({ paymentList, month }: types) => {

  const day = paymentList.filter(item => item.date.split('-')[1] === month)
  // const filteredDay = day.map(item => item.date.split('-')[2])
  const filteredDay = useDateFilter(day, 2)

  return (
    <>
      {filteredDay.map(item => (
        <>
          <div className={styled.paymentList} key={item}>
            <div className={styled.paymentItem}>
              <span className={styled.day}>{item}일</span>
              <MyPaymentItem paymentList={paymentList} month={month} day={item} />
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default MyPaymentList;