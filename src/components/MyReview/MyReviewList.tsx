import React from 'react';
import styled from './MyReview.module.scss'
import { myReviewType } from '../../store/store';
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