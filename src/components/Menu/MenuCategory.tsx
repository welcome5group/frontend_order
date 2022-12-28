import React, { useMemo, useRef } from 'react';
import MenuItem from './MenuItem';
import styled from './Menu.module.scss'
import { menuListTypes } from '../../types/types';

interface types {
  item: menuListTypes;
  categoryRef: React.MutableRefObject<HTMLDivElement[]>;
  idx: number;
  category: string;
  handleOrderClick: (category: string, id: number) => void;
  inputValue: string;
}

const MenuCategory = ({ categoryRef, category, idx, item, handleOrderClick, inputValue }: types) => {
  return (
    <div className={styled.menuCategory} ref={el => (categoryRef.current[idx] = el)}>
      <div className={styled.categoryTitle}>
        {item.categoryName}
      </div>
      {item.menus.map((item) => (
        <MenuItem item={item} category={category} key={item.menuId} handleOrderClick={handleOrderClick} inputValue={inputValue} />
      ))}
    </div>
  );
};

export default MenuCategory;