import React, { useState, useEffect } from 'react';
import styled from './Menu.module.scss'
import MenuList from './MenuList';
import { AiOutlineRight } from 'react-icons/ai';
import { reviewData } from '../../mock/reviewData';
import { Link, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { tableNumTypes } from '../../types/types';
import { paramStore } from '../../store/store';

const Menu = () => {
  const param = useParams()
  const [params, setParams] = useRecoilState<tableNumTypes>(paramStore)

  useEffect(() => {
    const params: tableNumTypes =
      { id: param.id, storeName: param.storeName, tableNum: Number(param.tableNum) }
    setParams(params)
  }, [])

  return (
    <div className={styled.menuContainer}>
      <h1 className={styled.mainTitle}>
        커피 참 잘하는 집
      </h1>
      <div className={styled.menuReview}>
        <Link to={`/review/${params.id}`}>
          <p>리뷰 {reviewData.length}개</p>
          <AiOutlineRight />
        </Link>
      </div>
      <MenuList />
    </div>
  );
};

export default Menu;