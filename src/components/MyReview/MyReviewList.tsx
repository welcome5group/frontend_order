import React from 'react';
import { myReviewType } from '../../types/types';
import styled from './MyReview.module.scss'
import MyReviewItem from './MyReviewItem';

interface types {
  data: myReviewType[]
}

const MyReviewList = ({ data }: types) => {
  return (
    <div className={styled.myReviewList}>
      {data.map(item => (
        <MyReviewItem item={item} />
      ))}
    </div>
  );
};

export default MyReviewList;