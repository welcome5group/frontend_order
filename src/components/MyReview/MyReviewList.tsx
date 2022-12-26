import React from 'react';
import { myReviewType } from '../../types/types';
import styled from './MyReview.module.scss'
import MyReviewItem from './MyReviewItem';

interface types {
  reviewList: myReviewType[]
}

const MyReviewList = ({ reviewList }: types) => {
  return (
    <div className={styled.myReviewList}>
      {reviewList.map(item => (
        <MyReviewItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default MyReviewList;