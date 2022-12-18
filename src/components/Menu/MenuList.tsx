import React, { useEffect, useState, useCallback, memo } from 'react';
import { menu } from '../../mock/testData';
import styled from './Menu.module.scss'
import { useRecoilState } from 'recoil';
import { cartStore, paramStore } from '../../store/store';
import MenuCategory from './MenuCategory';
import { useParams } from 'react-router-dom';
import { cartType, menuTypes, tableNumTypes } from '../../types/types';

const MenuList = () => {
  const param = useParams()
  const [, setParams] = useRecoilState<tableNumTypes>(paramStore)

  const [cartList, setCartList] = useRecoilState<cartType[]>(cartStore)
  const [category, setCategory] = useState<string[]>([]);
  const [data] = useState<menuTypes[]>(menu)

  const handleOrderClick = useCallback((id: number) => {
    const idList = cartList.map(item => item.product.id)
    //idList에 선택한 값과 맞는 값이 없다면 배열에 선택한 값 추가
    if (idList.indexOf(id) === -1) {
      const item = { product: data[id - 1], count: 1 };
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
  }, [cartList, data, setCartList])

  //처음 렌더링 시 param 값 저장
  useEffect(() => {
    const params: tableNumTypes =
      { id: param.id, storeName: param.storeName, tableNum: Number(param.tableNum) }
    setParams(params)
  }, [])


  useEffect(() => {
    //데이터 중 카테고리 값만 따로 빼서 중복 제거 후 저장
    const categoryFilter = data.map(item => item.category)
    const categoryArray = categoryFilter.filter((cateogry: string, idx: number) => categoryFilter.indexOf(cateogry) === idx)
    setCategory(categoryArray)
  }, [cartList, data])

  return (
    <>
      <div className={styled.menuList}>
        {category.length !== 0 && category.map((category) => (
          <MenuCategory category={category} key={category} data={data} handleOrderClick={handleOrderClick} />
        ))}
      </div>
    </>
  );
};

export default memo(MenuList);