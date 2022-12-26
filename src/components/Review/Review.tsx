import React, { useEffect, useState } from 'react';
import { reviewData } from '../../mock/reviewData';
import styled from './Review.module.scss'
import ReviewWrite from './ReviewWrite';
import ReviewList from './ReviewList';
import { reviewType } from '../../types/types';
import { testMode } from '../../utils/testMode';
import { getReview } from '../../apis/reviewApi';
import { toastError } from '../toast';
import { useRecoilState } from 'recoil';
import { paramStore, tokenStore } from '../../store/store';
import { order } from '../../apis/orderApi';
import { useParams } from 'react-router-dom';

const Review = () => {

  const [reviewList, setReviewList] = useState<reviewType[]>([])
  const [paramsInfo] = useRecoilState(paramStore)
  const [tokenInfo] = useRecoilState(tokenStore)

  console.log(reviewList)

  const handleClick = async () => {
    try {
      const result = await order(tokenInfo.token)

      if (result.status === 200) {
        console.log(result.data)
      }
    } catch (e: any) {
      toastError(e.response.data.message)
    }
  }

  useEffect(() => {
    if (testMode) {
      setReviewList(reviewData)
    } else {
      const getReviewList = async () => {
        try {
          const result = await getReview(Number(paramsInfo.id), tokenInfo.token)

          if (result.status === 200) {
            setReviewList(result.data)
          }
        } catch (e: any) {
          toastError(e.response.data.message)
        }
      }

      getReviewList()
    }
  }, [])

  return (
    <div className={styled.reviewContainer}>
      <button onClick={handleClick}>주문</button>
      <div className={styled.titleArea}>
        <h1 className={styled.reviewTitle}>
          리뷰
        </h1>
      </div>
      <ReviewWrite reviewList={reviewList} setReviewList={setReviewList} />
      {/* <ReviewList reviewList={reviewList} /> */}
    </div>
  );
};

export default Review;