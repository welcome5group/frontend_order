import React from 'react';
import styled from './MyPayment.module.scss'
import { paymentType } from '../../types/types';

interface types {
  item: paymentType
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const MyPaymentModal = ({ item, setShowModal }: types) => {
  return (
    <div className={styled.paymentModal}>
      <button className={styled.closeBtn} onClick={() => setShowModal(false)}>닫기</button>
      <div className={styled.paymentInfo}>결제 정보</div>
      <div className={styled.storeName}>매장 명 : {item.store.name}</div>
      <div className={styled.infoTitle}>
        <span>
          상품명
        </span>
        <span>
          수량
        </span>
        <span>
          가격
        </span>
      </div>
      {item.orderMenus.map(item => (
        <div className={styled.menuInfo} key={item.id}>
          <span>{item.menu.name}</span>
          <span>{item.count}</span>
          <span>{(item.count * item.menu.price).toLocaleString()}원</span>
        </div>
      ))}
      <div className={styled.totalPrice}>총 금액 : {item.totalPrice.toLocaleString()}</div>
    </div>
  );
};

export default MyPaymentModal;