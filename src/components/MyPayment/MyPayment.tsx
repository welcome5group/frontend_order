import React, { ChangeEvent, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useDateFilter } from '../../Hooks/useDateFilter';
import { paymentData } from '../../mock/paymentData';
import { paymentType } from '../../store/store';
import styled from './MyPayment.module.scss'
import MyPaymentList from './MyPaymentList';

const MyPayment = () => {

  const currentYear = new Date().getFullYear()

  const [paymentList, setPaymentList] = useState<paymentType[]>([])
  const [year, setYear] = useState(String(currentYear))

  const month = useDateFilter(paymentList, 1)

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setYear(e.target.value)
  }

  const yearOptions = () => {
    const date = new Date();
    const year = date.getFullYear()
    const yearOption = [];
    for (let i = year; i > year - 10; i--) {
      yearOption.push(String(i))
    }
    return yearOption
  }
  const yearOption = yearOptions();

  useEffect(() => {
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