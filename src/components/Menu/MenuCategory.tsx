import React, { useMemo, useRef } from 'react';
import MenuItem from './MenuItem';
import styled from './Menu.module.scss'
import { menuTypes } from '../../types/types';

interface types {
  category: string
  menuList: menuTypes[]
  categoryRef: React.MutableRefObject<HTMLDivElement[]>
  idx: number
  handleOrderClick: (id: number) => void;
}

const MenuCategory = ({ category, categoryRef, idx, menuList, handleOrderClick }: types) => {

  // props로 받은 카테고리에 해당하는 아이템 분류
  const categoryItmes = menuList.filter(item => item.category === category)
  return (
    <div className={styled.menuCategory} ref={el => (categoryRef.current[idx] = el)}>
      <div className={styled.categoryTitle}>
        {category}
      </div>
      {categoryItmes.map((item) => (
        <MenuItem item={item} key={item.id} handleOrderClick={handleOrderClick} />
      ))}
    </div>
  );
};

export default MenuCategory;