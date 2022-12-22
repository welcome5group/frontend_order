import React, { ChangeEvent, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { getPayment } from '../../apis/orderApi';
import { useDateFilter } from '../../Hooks/useDateFilter';
import { paymentData } from '../../mock/paymentData';
import { loginStore, userStore } from '../../store/store';
import { paymentType } from '../../types/types';
import { testMode } from '../../utils/testMode';
import { toastError, toastSuccess } from '../toast';
import styled from './MyPayment.module.scss'
import MyPaymentList from './MyPaymentList';

const MyPayment = () => {

  const [paymentList, setPaymentList] = useState<paymentType[]>([])
  const [userInfo] = useRecoilState(loginStore)
  const [paymentFilterList, setPaymentFilterList] = useState<paymentType[]>([])

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
  const month = useDateFilter(paymentFilterList, 1)

  useEffect(() => {
    const getPaymentList = async () => {
      if (!testMode) {
        try {
          const result = await getPayment(userInfo.token)

          if (result.status === 200) {
            console.log(result.data)
            setPaymentList(result.data)
          }
        } catch (e: any) {
          toastError(e.response.data.message)
        }
      } else {
        // setPaymentList(paymentData)
      }
    }

    getPaymentList()

  }, [])

  useEffect(() => {
    //데이터 중 현재 년도에 해당하는 데이터만 저장
    if (paymentList.length !== 0) {
      const yearFilteredData = paymentList?.filter(item => item.createdAt.split('-')[0] === year)
      setPaymentFilterList(yearFilteredData)
    }
  }, [paymentList, year])

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
            <MyPaymentList paymentFilterList={paymentFilterList} month={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPayment;