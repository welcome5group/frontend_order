import React, { useState, useEffect } from 'react';
import styled from './Home.module.scss';
import { myReviewType, orderType, reviewType, tokenType } from '../../types/types';
import { Link } from 'react-router-dom';
import { testMode } from '../../utils/testMode';
import { useRecoilState } from 'recoil';
import { userStore } from '../../store/store';
import { getOrderList } from '../../apis/orderApi';
import HomeReviewItem from './HomeReviewItem';

interface types {
  tokenInfo: tokenType
}

const HomeReview = ({ tokenInfo }: types) => {

  const [userInfo] = useRecoilState(userStore)
  const [reviewList, setReviewList] = useState<orderType[]>([])

  console.log(reviewList)

  useEffect(() => {
    if (!testMode) {
      const data = async () => {
        if (tokenInfo.login) {
          if (!testMode) {
            try {
              const result = await getOrderList(userInfo.id, tokenInfo.token)
              if (result.status === 200) {
                setReviewList(result.data.filter((item: { reviewStatus: string; }) => item.reviewStatus !== "COMP"))
              }
            } catch (e: any) {
              console.log(e)
            }
          }
        }
      }
      data()
    }
  }, [tokenInfo.login, tokenInfo.token, userInfo.id])

  return (
    <>
      {
        reviewList.length !== 0 ?
          <div className={styled.reviewCinfirmList}>
            {
              reviewList.map(item => (
                <HomeReviewItem item={item} />
              ))
            }
          </div> : <div className={styled.canNotWriteReview}>작성 가능한 리뷰가 없습니다.</div>
      }
    </>
  );
};

export default HomeReview;