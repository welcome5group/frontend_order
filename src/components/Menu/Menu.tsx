import React, { useState, useEffect } from 'react';
import styled from './Menu.module.scss'
import MenuList from './MenuList';
import { AiOutlineRight } from 'react-icons/ai';
import { reviewData } from '../../mock/reviewData';
import { Link, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { menuListTypes, tableNumTypes } from '../../types/types';
import { paramStore } from '../../store/store';
import { testMode } from '../../utils/testMode';
import { menu } from '../../mock/testData';
import { getStore } from '../../apis/storeApi';

const Menu = () => {

  const param = useParams()
  const [params, setParams] = useRecoilState<tableNumTypes>(paramStore)
  const [menuList, setMenuList] = useState<menuListTypes[]>([])

  useEffect(() => {
    const params: tableNumTypes =
      { id: param.id, storeName: param.storeName, tableNum: Number(param.tableNum) }
    setParams(params)
  }, [])


  //테스트모드
  useEffect(() => {
    if (testMode) {
      setMenuList(menu)
    } else {
      const data = async () => {
        if (!testMode) {
          try {
            const result = await getStore(Number(params.id))
            if (result.status === 200) {
              setMenuList(result.data.data)
            }
          } catch (e: any) {
            console.log(e)
          }
        }
      }
      data()
    }
  }, [])

  return (
    <div className={styled.menuContainer}>
      <h1 className={styled.mainTitle}>
        {params.storeName}
      </h1>
      <div className={styled.menuReview}>
        <Link to={`/review/${params.id}`}>
          <p>리뷰 {reviewData.length}개</p>
          <AiOutlineRight />
        </Link>
      </div>
      <MenuList menuList={menuList} />
    </div>
  );
};

export default Menu;