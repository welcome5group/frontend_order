import React, { useEffect, useState } from 'react';
import { menu } from '../../mock/testData';
import styled from './Menu.module.scss'
import { useRecoilState } from 'recoil';
import { menuTypes, cartStore, cartType, paramStore, tableNumTypes, orderNumTypes } from '../../store/store';
import MenuCategory from './MenuCategory';
import { useParams } from 'react-router-dom';

const MenuList = () => {
  const param = useParams()

  console.log(param)

  const [params, setParams] = useRecoilState<tableNumTypes>(paramStore)

  //처음 렌더링 시 param 값 저장
  useEffect(() => {
    const params: tableNumTypes | orderNumTypes =
      { id: param.id, storeName: param.storeName, tableNum: Number(param.tableNum) }
    setParams(params)
  }, [])

  const [cartList, setCartList] = useRecoilState<cartType[]>(cartStore)
  const [category, setCategory] = useState<string[]>([]);
  const [data, setData] = useState<menuTypes[]>(menu)

  const handleOrderClick = (id: number) => {
    const idList = cartList.map(item => item.product.id)
    const item = { product: data[id - 1], count: 1 };
    // const item = { id: id, price: data[id - 1].price, count: 1 };
    if (idList.indexOf(id) === -1) {
      setCartList([...cartList, item]);
    } else {
      setCartList(item => {
        return item.map(obj => {
          if (obj.product.id === id) {
            return { ...obj, 'count': obj.count + 1 }
          } else {
            return { ...obj };
          }
        })
      })
    }
  }

  useEffect(() => {
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

export default MenuList;