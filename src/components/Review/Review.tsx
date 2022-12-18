import React, { useEffect, useState } from 'react';
import { reviewData } from '../../mock/reviewData';
import styled from './Review.module.scss'

import ReviewStar from './ReviewStar';
import ReviewWrite from './ReviewWrite';
import ReviewItem from './ReviewItem';
import { reviewType } from '../../types/types';
import { testMode } from '../../utils/testMode';

const Review = () => {

  const [reviewList, setReviewList] = useState<reviewType[]>([])

  useEffect(() => {
    if (testMode) {
      setReviewList(reviewData)
    }
  }, [])

  return (
    <div className={styled.reviewContainer}>
      <div className={styled.titleArea}>
        <h1 className={styled.reviewTitle}>
          리뷰
        </h1>
      </div>
      <ReviewStar />
      <ReviewWrite reviewList={reviewList} setReviewList={setReviewList} />
      <ReviewItem reviewList={reviewList} />
    </div>
  );
};

export default Review;