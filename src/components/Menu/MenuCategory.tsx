import React, { useMemo, useRef } from 'react';
import MenuItem from './MenuItem';
import styled from './Menu.module.scss'
import { menuListTypes, tokenType } from '../../types/types';

interface types {
  item: menuListTypes;
  categoryRef: React.MutableRefObject<HTMLDivElement[]>;
  idx: number;
  inputValue: string;
  tokenInfo: tokenType;
}

const MenuCategory = ({ categoryRef, idx, item, tokenInfo, inputValue }: types) => {
  return (
    <div className={styled.menuCategory} ref={el => (categoryRef.current[idx] = el)}>
      <div className={styled.categoryTitle}>
        {item.categoryName}
      </div>
      {item.menus.map((item) => (
        <MenuItem item={item} key={item.menuId} tokenInfo={tokenInfo} inputValue={inputValue} />
      ))}
    </div>
  );
};

export default MenuCategory;