import React, { useState, useEffect } from 'react';
import styled from './Menu.module.scss'
import MenuList from './MenuList';
import { AiOutlineRight } from '@react-icons/all-files/ai/AiOutlineRight';
import { reviewData } from '../../mock/reviewData';
import { Link, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { menuListTypes, paramType } from '../../types/types';
import { paramStore } from '../../store/store';
import { testMode } from '../../utils/testMode';
import { menu } from '../../mock/testData';
import { getStore } from '../../apis/storeApi';
import { getReview } from '../../apis/reviewApi';
import { Helmet } from 'react-helmet-async';
import imgUrl from '../../assets/coffee/coffee1.jpg';

const Menu = () => {

  const param = useParams()
  const [params, setParams] = useRecoilState<paramType>(paramStore)
  const [menuList, setMenuList] = useState<menuListTypes[]>([])
  const [reviewLength, setReviewLength] = useState<number>(0)

  useEffect(() => {
    const params: paramType =
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
      <>
        <Helmet>
          <title>{`핑거오더-${params.storeName}`}</title>
          <meta name="description" content={`${params.storeName} 매장의 메뉴입니다.`} />
          <meta property="og:type" content="website" />
          <link href={imgUrl} />
          <meta property="og:url" content={`https://fingeroreder-order.netlify.app/menu/${params.id}/${params.storeName}`} />
          <meta name="og:title" content={`핑거오더-${params.storeName}`} />
          <meta name="og:description" content={`${params.storeName} 매장의 메뉴입니다.`} />
          <meta property="og:image" content={imgUrl} />
          <meta property="og:image:width" content={'150px'} />
          <meta property="og:image:height" content={'150px'} />
        </Helmet>
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
      </>
    );
  };
}

export default Menu;