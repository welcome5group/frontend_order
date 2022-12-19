import React from 'react';
import styled from './Menu.module.scss'
import MenuList from './MenuList';
import { AiOutlineRight } from 'react-icons/ai';

const Menu = () => {
  return (
    <div className={styled.menuContainer}>
      <h1 className={styled.mainTitle}>
        커피 참 잘하는 집
      </h1>
      <div className={styled.menuReview}>
        <p>리뷰 5개</p>
        <AiOutlineRight />
      </div>
      <MenuList />
    </div>
  );
};

export default Menu;