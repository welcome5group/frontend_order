import React from 'react';
import { menuTypes } from '../../store/testStore';
import styled from './Menu.module.scss'
import MenuDetail from './MenuDetail';


interface types {
  item: menuTypes
  handleOrderClick: (id: number) => void;
}

const MenuItem = ({ item, handleOrderClick }: types) => {

  return (
    <>
      <div className={styled.menuItem} onClick={() => handleOrderClick(item.id)}>
        <div className={styled.menuImg}>
          <img src={require('../../assets/americano.jpg')} alt="이미지" />
        </div>
        <div className={styled.iteminfoWrap}>
          <span className={styled.itemName}>{item.name}</span>
          <span className={styled.itemDesc}>{item.desc}</span>
          <span className={styled.itemPrice}>{item.price}원</span>
        </div>
      </div>
    </>
  );
};

export default MenuItem;