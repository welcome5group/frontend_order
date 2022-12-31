import React, { useState } from 'react';
import styled from './Menu.module.scss'
import { AiOutlineDown } from '@react-icons/all-files/ai/AiOutlineDown';
import { menuItemTypes } from '../../types/types';


interface types {
  item: menuItemTypes;
  category: string;
  handleOrderClick: (category: string, id: number) => void;
  inputValue: string;
}

const MenuItem = ({ item, category, handleOrderClick, inputValue }: types) => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <>
      {
        item.menuName.replace(" ", "").toLocaleLowerCase().includes(inputValue.toLocaleLowerCase().replace(" ", "")) &&
        <div className={styled.menuItem}>
          <div className={styled.menuImg}>
            <img src={require(`../../assets/coffee/${item.imageUrl}.jpg`)} width="48px" height="80px" alt="이미지" />
          </div>
          <div className={styled.iteminfoWrap}>
            <span className={styled.itemName}>{item.menuName}</span>
            <span className={showDetail ? `${styled.itemDesc} ${styled.showDetail}` : styled.itemDesc}>{item.description}</span>
            <span className={styled.itemPrice}>{item.price.toLocaleString()}원</span>
            {showDetail &&
              <button className={styled.orderBtn} onClick={() => handleOrderClick(category, item.menuId)}>주문하기</button>
            }
          </div>
          <div onClick={() => setShowDetail(!showDetail)}><AiOutlineDown className={showDetail ? styled.open : styled.close} /></div>
        </div>
      }
    </>
  );
};

export default MenuItem;