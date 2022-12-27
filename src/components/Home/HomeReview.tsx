import React, { useState, useEffect } from 'react';
import styled from './Home.module.scss';
import { myReviewType, reviewType, tokenType } from '../../types/types';
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
  const [reviewList, setReviewList] = useState<reviewType[]>([])

  console.log(reviewList)

  useEffect(() => {
    if (!testMode) {
      const data = async () => {
        if (tokenInfo.login) {
          if (!testMode) {
            try {
              const result = await getOrderList(userInfo.id, tokenInfo.token)
              if (result.status === 200) {
                setReviewList(result.data)
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
    <div className={styled.reviewCinfirmList}>
      {/* {reviewList.map(item => (
        <HomeReviewItem item={item} />
      ))} */}
    </div>
  );
};

export default HomeReview;