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

  // props로 받은 월에 해당하는 일별 데이터 분류
  const day = paymentList.filter(item => item.date.split('-')[1] === month)

  // 일별 데이터 배열(중복 제거)
  // ex) [11, 11, 12, 12, 21] => [11, 12, 21]
  const filteredDay = useDateFilter(day, 2)

  return (
    <>
      {filteredDay.map((item) => (
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