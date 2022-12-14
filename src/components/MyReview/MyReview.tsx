import React, { useState } from 'react';
import styled from './MyReview.module.scss'
import { myReviewData } from '../../mock/reviewData';
import { myReviewType } from '../../store/store';
import MyReviewList from './MyReviewList';

const MyReview = () => {

  const [data, setData] = useState<myReviewType[]>(myReviewData)

  console.log(data)

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