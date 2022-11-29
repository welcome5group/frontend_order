import React, { useEffect, useState } from 'react';
import { menu } from '../../mock/menuData';
import styled from './Menu.module.scss'
import { useRecoilState } from 'recoil';
import { menuTypes, selectItem, testStore, testType } from '../../store/testStore';
import MenuCategory from './MenuCategory';



const MenuList = () => {

  const [cartList, setCartList] = useRecoilState<testType[]>(testStore)
  const [selectData, setSelectData] = useRecoilState<menuTypes>(selectItem)
  const [category, setCategory] = useState<string[]>([]);
  const [data, setData] = useState<menuTypes[]>(menu)


  const handleOrderClick = (id: number) => {
    const idList = cartList.map(item => item.id)

    if (idList.indexOf(id) === -1) {
      const item = { id: id, count: 1 };

      setCartList([...cartList, item]);
    } else {
      setCartList(item => {
        return item.map(obj => {
          if (obj.id === id) {
            return { ...obj, 'count': obj.count + 1 }
          } else {
            return { ...obj };
          }
        })
      })
    }
  }

  const handleSelectItem = (id: number) => {
    const item: menuTypes = data[id - 1]
    setSelectData(item)
  }

  useEffect(() => {
    const categoryFilter = data.map(item => item.category)
    const categoryArray = categoryFilter.filter((cateogry: string, idx: number) => categoryFilter.indexOf(cateogry) === idx)
    setCategory(categoryArray)

    console.log(cartList)
    console.log(data)

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

export default MenuList;