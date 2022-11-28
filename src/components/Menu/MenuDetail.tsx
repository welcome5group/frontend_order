import React from 'react';
import { menuTypes } from '../../store/testStore';
import styled from './Menu.module.scss'

interface types {
  selectData: menuTypes,
}

const MenuDetail = ({ selectData }: types) => {
  console.log(selectData)
  return (
    <div className={styled.menuDetail}>
      <div className={styled.imgArea}>
        <img src={require('../../assets/americano.jpg')} alt="이미지" />
      </div>
    </div>
  );
};

export default MenuDetail;