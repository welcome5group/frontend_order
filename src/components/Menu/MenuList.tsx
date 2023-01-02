import React, { useEffect, useState, useRef } from 'react';
import styled from './Menu.module.scss'
import { useRecoilState } from 'recoil';
import { tokenStore } from '../../store/store';
import { menuListTypes, tokenType } from '../../types/types';
import MenuCategory from './MenuCategory';
import MenuSearch from './MenuSearch';

interface types {
  menuList: menuListTypes[]
}

const MenuList = ({ menuList }: types) => {

  const [inputValue, setInputValue] = useState<string>('')
  const [tokenInfo] = useRecoilState<tokenType>(tokenStore)
  const [openSearch, setOpenSearch] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  //카테고리 선택 시 해당 div로 이동
  let categoryRef = useRef<HTMLDivElement[]>([])
  const handleMove = (idx: number) => {
    window.scrollTo({ top: categoryRef.current[idx].offsetTop, behavior: 'smooth' });
  }

  return (
    <>
      <div className={styled.menuList}>
        <div className={styled.categoryList}>
          <MenuSearch openSearch={openSearch} setOpenSearch={setOpenSearch} inputValue={inputValue} handleChange={handleChange} />
          {
            menuList.map((item, idx) => (
              <span key={item.categoryName} onClick={() => { handleMove(idx); setOpenSearch(false) }}>{item.categoryName}</span>
            ))
          }
        </div>
        {
          menuList.map((item, idx) => (
            <MenuCategory key={item.categoryName} tokenInfo={tokenInfo} item={item} categoryRef={categoryRef} idx={idx} inputValue={inputValue} />
          ))
        }
      </div>
    </>
  );
};

export default MenuList;