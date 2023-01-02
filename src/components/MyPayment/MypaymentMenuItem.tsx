import React, { useState } from 'react';
import styled from './MyPayment.module.scss'
import { paymentType } from '../../types/types';
import MyPaymentModal from './MyPaymentModal';

interface types {
  item: paymentType
}

const MypaymentMenuItem = ({ item }: types) => {

  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <>
      <div key={item.id} className={styled.paymentItemWrap} onClick={() => setShowModal(!showModal)}>
        <span>{item.store.name}</span>
        <span>{item.orderMenus[0].menu.name} 외 {item.orderMenus.length} 개 </span>
        <span>{item.totalPrice.toLocaleString()}원</span>
      </div>
      {showModal &&
        <MyPaymentModal item={item} setShowModal={setShowModal} />
      }
    </>
  );
};

export default MypaymentMenuItem;