import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { getOrderList, getPayment } from '../../apis/orderApi';
import { orderStore, paramStore, tokenStore, userStore } from '../../store/store';
import { orderType, paramType, tokenType, userType } from '../../types/types';
import { testMode } from '../../utils/testMode';
import styled from './Order.module.scss'
import OrderList from './OrderList';

const Order = () => {

  const [paramsInfo] = useRecoilState<paramType>(paramStore)
  const [orderList, setOrderList] = useRecoilState<orderType[]>(orderStore)
  const [userInfo] = useRecoilState<userType>(userStore)
  const [tokenInfo] = useRecoilState<tokenType>(tokenStore)

  useEffect(() => {
    if (!testMode) {
      const data = async () => {
        if (tokenInfo.login) {
          if (!testMode) {
            try {
              const result = await getOrderList(userInfo.id, tokenInfo.token)
              if (result.status === 200) {
                setOrderList(result.data.filter((item: { storeId: number; }) => item.storeId === Number(paramsInfo.id)))
              }
            } catch (e: any) {
              console.log(e)
            }
          }
        }
      }
      data()
    }
  }, [])

  return (
    <div className={styled.orderContainer}>
      <div className={styled.titleArea}>
        <h1 className={styled.orderTitle}>
          주문 내역
        </h1>
      </div>
      <OrderList orderList={orderList} />
    </div>
  );
};

export default Order;