import React, { useEffect, useState, useCallback, memo, useRef } from 'react';
import { menu } from '../../mock/testData';
import styled from './Menu.module.scss'
import { useRecoilState } from 'recoil';
import { cartStore, tokenStore } from '../../store/store';
import MenuCategory from './MenuCategory';
import { useNavigate } from 'react-router-dom';
import { cartType, menuTypes } from '../../types/types';
import { testMode } from '../../utils/testMode';
import { toastError } from '../toast';

const MenuList = () => {

  const nav = useNavigate()


  const [tokenInfo] = useRecoilState(tokenStore)
  const [cartList, setCartList] = useRecoilState<cartType[]>(cartStore)
  const [category, setCategory] = useState<string[]>([]);
  const [menuList, setMenuList] = useState<menuTypes[]>([])

  //테스트모드
  useEffect(() => {
    if (testMode) {
      setMenuList(menu)
    }
  }, [])

  const handleOrderClick = useCallback((id: number) => {

    if (tokenInfo.login === true) {
      const idList = cartList.map(item => item.product.id)
      //idList에 선택한 값과 맞는 값이 없다면 배열에 선택한 값 추가
      if (idList.indexOf(id) === -1) {
        const item = { product: menuList[id - 1], count: 1 };
        setCartList([...cartList, item]);
      }
      //idList에 선택한 값이 있다면 카운트만 + 1
      else {
        setCartList(prevState => {
          return prevState.map(obj => {
            if (obj.product.id === id) {
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

  //처음 렌더링 시 param 값 저장



  useEffect(() => {
    //데이터 중 카테고리 값만 따로 빼서 중복 제거 후 저장
    const categoryFilter = menuList.map(item => item.category)
    const categoryArray = categoryFilter.filter((cateogry: string, idx: number) => categoryFilter.indexOf(cateogry) === idx)
    setCategory(categoryArray)
  }, [cartList, menuList])

  return (
    <>
      <div className={styled.menuList}>
        <div className={styled.categoryList}>
          {
            category.map((item, idx) => (
              <span onClick={() => handleMove(idx)}>{item}</span>
            ))
          }
        </div>
        {category.length !== 0 && category.map((category, idx) => (
          <MenuCategory category={category} categoryRef={categoryRef} idx={idx} key={category} menuList={menuList} handleOrderClick={handleOrderClick} />
        ))}
      </div>
    </>
  );
};

export default memo(MenuList);