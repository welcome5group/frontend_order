import React, { useEffect, useState, useCallback, memo, useRef } from 'react';
import { menu } from '../../mock/testData';
import styled from './Menu.module.scss'
import { useRecoilState } from 'recoil';
import { cartStore, tokenStore } from '../../store/store';
import MenuCategory from './MenuCategory';
import { useNavigate } from 'react-router-dom';
import { cartType, menuListTypes } from '../../types/types';
import { toastError } from '../toast';
import { AiOutlineSearch } from 'react-icons/ai';

interface types {
  menuList: menuListTypes[]
}

const MenuList = ({ menuList }: types) => {
  const nav = useNavigate()
  const [tokenInfo] = useRecoilState(tokenStore)
  const [cartList, setCartList] = useRecoilState<cartType[]>(cartStore)
  const [openSearch, setOpenSearch] = useState(false)
  console.log(cartList)

  const handleOrderClick = useCallback((category: string, id: number) => {
    if (tokenInfo.login === true) {
      const idList = cartList.map(item => item.product.menuId)

      const categoryIdx = menuList.map(item => item.categoryName).indexOf(category)
      const itemIdx = menuList[categoryIdx].menus.map(item => item.menuId).indexOf(id)

      //idList에 선택한 값과 맞는 값이 없다면 배열에 선택한 값 추가
      if (idList.indexOf(id) === -1) {
        const item = { product: menuList[categoryIdx].menus[itemIdx], count: 1 };
        setCartList([...cartList, item]);
      }
      //idList에 선택한 값이 있다면 카운트만 + 1
      else {
        setCartList(prevState => {
          return prevState.map(obj => {
            if (obj.product.menuId === id) {
              return { ...obj, 'count': obj.count + 1 }
            } else {
              return { ...obj };
            }
          })
        })
      }
    } else {
      toastError('로그인이 필요한 기능입니다.')
      nav('/login')
    }
  }, [cartList, menuList, setCartList])

  //카테고리 선택 시 해당 div로 이동
  let categoryRef = useRef<HTMLDivElement[]>([])
  const handleMove = (idx: number) => {
    window.scrollTo({ top: categoryRef.current[idx].offsetTop, behavior: 'smooth' });
  }

  return (
    <>
      <div className={styled.menuList}>
        <div className={styled.categoryList}>
          {openSearch ?
            <div className={styled.searchBar}>
              <input />
              <AiOutlineSearch className={styled.searchBtn} />
            </div> :
            <AiOutlineSearch className={styled.searchOpenBtn} onClick={() => setOpenSearch(!openSearch)} />
          }
          {
            menuList.map((item, idx) => (
              <span onClick={() => { handleMove(idx); setOpenSearch(false) }}>{item.categoryName}</span>
            ))
          }
        </div>
        {
          menuList.map((item, idx) => (
            <MenuCategory key={item.categoryName} category={item.categoryName} handleOrderClick={handleOrderClick} item={item} categoryRef={categoryRef} idx={idx} />
          ))
        }
      </div>
    </>
  );
};

export default memo(MenuList);