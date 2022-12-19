import React, { useState } from 'react';
import styled from './MyReview.module.scss'
import { myReviewData } from '../../mock/reviewData';
import MyReviewList from './MyReviewList';
import { myReviewType } from '../../types/types';

const MyReview = () => {

  const [data, setData] = useState<myReviewType[]>(myReviewData)

  return (
    <div className={styled.myReviewContainer}>
      <div className={styled.myReviewMainTitle}>
        <h2>내가 쓴 리뷰 {data.length}개</h2>
      </div>
      <MyReviewList data={data} />
    </div>
  );
};

export default MyReview;