import React from 'react';
import { useParams } from 'react-router-dom';
import styled from './Menu.module.scss'
import MenuList from './MenuList';

const Menu = () => {
  return (
    <div className={styled.MenuContainer}>
      <h1 className={styled.mainTitle}>
        주문하기
      </h1>
      <MenuList />
    </div>
  );
};

export default Menu;