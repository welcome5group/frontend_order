import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { getOrderList, getPayment } from '../../apis/orderApi';
import { orderStore, tokenStore, userStore } from '../../store/store';
import { orderType } from '../../types/types';
import { testMode } from '../../utils/testMode';
import styled from './Order.module.scss'
import OrderList from './OrderList';

const Order = () => {

  const [orderList, setOrderList] = useState<orderType[]>([])
  const [userInfo] = useRecoilState(userStore)
  const [tokenInfo] = useRecoilState(tokenStore)

  console.log(orderList)

  useEffect(() => {
    if (!testMode) {
      const data = async () => {
        if (tokenInfo.login) {
          if (!testMode) {
            try {
              const result = await getOrderList(userInfo.id, tokenInfo.token)
              if (result.status === 200) {
                console.log(result)
                setOrderList(result.data)
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