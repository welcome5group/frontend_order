import React from 'react';
import { menuTypes } from '../../store/store';
import MenuItem from './MenuItem';
import styled from './Menu.module.scss'

interface types {
  category: string
  data: menuTypes[]
  handleOrderClick: (id: number) => void;
}

const MenuCategory = ({ category, data, handleOrderClick }: types) => {

  const categoryTitle = data.filter(item => item.category === category)

  return (
    <div className={styled.menuCategory}>
      <p>
        {category}
      </p>
      {categoryTitle.map((item) => (
        <MenuItem item={item} key={item.id} handleOrderClick={handleOrderClick} />
      ))}
    </div>
  );
};

export default MenuCategory;