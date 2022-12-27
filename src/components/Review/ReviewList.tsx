import React from 'react';
import styled from './Review.module.scss'
import { reviewType } from '../../types/types';
import ReviewItem from './ReviewItem';

interface types {
  reviewList: reviewType[]
}

const ReviewList = ({ reviewList }: types) => {
  console.log(reviewList)
  return (
    <div className={styled.reviewList}>
      {reviewList.map(item => (
        <ReviewItem item={item} key={item.reviewId} />
      ))}
    </div>
  );
};

export default ReviewList;