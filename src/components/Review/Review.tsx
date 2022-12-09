import React, { useState } from 'react';
import { reviewData } from '../../mock/reviewData';
import styled from './Review.module.scss'
import { reviewType } from '../../store/store';

import ReviewStar from './ReviewStar';
import ReviewWrite from './ReviewWrite';
import ReviewItem from './ReviewItem';

const Review = () => {

  const [reviewList, setReviewList] = useState<reviewType[]>(reviewData)

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