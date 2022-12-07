import React, { useMemo } from 'react';
import { menuTypes } from '../../store/store';
import MenuItem from './MenuItem';
import styled from './Menu.module.scss'

interface types {
  category: string
  data: menuTypes[]
  handleOrderClick: (id: number) => void;
}

const MenuCategory = ({ category, data, handleOrderClick }: types) => {

  // props로 받은 카테고리에 해당하는 아이템 분류
  const categoryItmes = useMemo(() => data.filter(item => item.category === category), [category, data])
  return (
    <div className={styled.menuCategory}>
      <p>
        {category}
      </p>
      {categoryItmes.map((item) => (
        <MenuItem item={item} key={item.id} handleOrderClick={handleOrderClick} />
      ))}
    </div>
  );
};

export default MenuCategory;