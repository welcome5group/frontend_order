import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDateFilter } from '../../Hooks/useDateFilter';
import { paymentData } from '../../mock/paymentData';
import { paymentType } from '../../types/types';
import styled from './MyPayment.module.scss'
import MyPaymentList from './MyPaymentList';

const MyPayment = () => {

  const [paymentList, setPaymentList] = useState<paymentType[]>([])

  const currentYear = new Date().getFullYear()
  const [year, setYear] = useState(String(currentYear))

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setYear(e.target.value)
  }

  //배열에 현재 년도 -10 까지 추가해주는 기능
  const yearOptions = () => {
    const year = new Date().getFullYear();
    const yearOption = [];
    for (let i = year; i > year - 10; i--) {
      yearOption.push(String(i))
    }
    return yearOption
  }
  const yearOption = yearOptions();

  const month = useDateFilter(paymentList, 1)

  useEffect(() => {
    //데이터 중 현재 년도에 해당하는 데이터만 저장
    const yearFilteredData = paymentData.filter(item => item.date.split('-')[0] === year)
    setPaymentList(yearFilteredData)
  }, [year])

  return (
    <div className={styled.mypaymentContainer}>
      <select className={styled.year} onChange={handleSelect} value={year}>
        {yearOption.map(item => (
          <option className={styled.yearOpstion} value={item} key={item}>{item}</option>
        ))}
      </select>
      <div className={styled.mypaymentContent}>
        {month.map(item => (
          <div key={item}>
            <div className={styled.date}>{item}</div>
            <MyPaymentList paymentList={paymentList} month={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPayment;