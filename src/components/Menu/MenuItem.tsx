import React, { useState } from 'react';
import { menuTypes } from '../../store/testStore';
import styled from './Menu.module.scss'
import MenuDetail from './MenuDetail';
import { AiOutlineDown } from 'react-icons/ai';


interface types {
  item: menuTypes
  handleOrderClick: (id: number) => void;
}

const MenuItem = ({ item, handleOrderClick }: types) => {

  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <div className={styled.menuItem}>
        <div className={styled.menuImg}>
          <img src={require('../../assets/americano.jpg')} alt="이미지" />
        </div>
        <div className={styled.iteminfoWrap}>
          <span className={styled.itemName}>{item.name}</span>
          <span className={showDetail ? `${styled.itemdesc} ${styled.showDetail}` : styled.itemDesc}>{item.desc}</span>
          <span className={styled.itemPrice}>{item.price.toLocaleString()}원</span>
          {showDetail &&
            <button className={styled.orderBtn} onClick={() => handleOrderClick(item.id)}>주문하기</button>
          }
        </div>
        <div onClick={() => setShowDetail(!showDetail)}><AiOutlineDown className={showDetail ? styled.open : styled.close} /></div>
      </div>
    </>
  );
};

export default MenuItem;