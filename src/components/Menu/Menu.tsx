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
import { getReview } from '../../apis/reviewApi';

const Menu = () => {

  const param = useParams()
  const [params, setParams] = useRecoilState<tableNumTypes>(paramStore)
  const [menuList, setMenuList] = useState<menuListTypes[]>([])
  const [reviewLength, setReviewLength] = useState(0)

  useEffect(() => {
    const params: tableNumTypes =
      { id: param.id, storeName: param.storeName, tableNum: Number(param.tableNum) }
    setParams(params)
  }, [])

  useEffect(() => {
    if (testMode) {
      setMenuList(menu)
    } else {
      const data = async () => {
        if (!testMode) {
          try {
            const result = await getStore(Number(params.id))
            const reviewResult = await getReview(Number(params.id))
            if (result.status === 200) {
              setMenuList(result.data.data)
            }
            if (reviewResult.status === 200) {
              setReviewLength(reviewResult.data.length)
            }
          } catch (e: any) {
            console.log(e)
          }
        }
      }
      data()
    }
  }, [])

  if (menuList) {
    return (
      <div className={styled.menuContainer}>
        <h1 className={styled.mainTitle}>
          {params.storeName}
        </h1>
        <div className={styled.menuReview}>
          <Link to={`/review/${params.id}`}>
            <p>리뷰 {reviewLength}개</p>
            <AiOutlineRight />
          </Link>
        </div>
        <MenuList menuList={menuList} />
      </div>
    );
  };
}

export default Menu;