import React from 'react';
import { useDateFilter } from '../../Hooks/useDateFilter';
import { paymentType } from '../../types/types';
import styled from './MyPayment.module.scss'
import MyPaymentItem from './MyPaymentItem';

interface types {
  paymentFilterList: paymentType[],
  month: string,
}

const MyPaymentList = ({ paymentFilterList, month }: types) => {
  // props로 받은 월에 해당하는 일별 데이터 분류
  const day = paymentFilterList.filter(item => item.createdAt.split('-')[1] === month)
  // 일별 데이터 배열(중복 제거)
  // ex) [11, 11, 12, 12, 21] => [11, 12, 21]
  const filteredDay = useDateFilter(day, 2)
  return (
    <>
      {filteredDay.map((item, idx) => (
        <>
          <div className={styled.paymentFilterList} key={idx}>
            <div className={styled.paymentItem}>
              <span className={styled.day}>{item}일</span>
              <MyPaymentItem paymentFilterList={paymentFilterList} month={month} day={item} />
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default MyPaymentList;