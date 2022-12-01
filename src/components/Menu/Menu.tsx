import React from 'react';
import styled from './Menu.module.scss'
import MenuList from './MenuList';

const Menu = () => {
  return (
    <div className={styled.menuContainer}>
      <h1 className={styled.mainTitle}>
        주문하기
      </h1>
      <MenuList />
    </div>
  );
};

export default Menu;