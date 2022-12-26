import React from 'react';
import styled from './Home.module.scss';
import { myReviewType } from '../../types/types';
import { Link } from 'react-router-dom';

interface types {
  item: myReviewType
}

const HomeReview = ({ item }: types) => {
  return (
    <div className={styled.reviewCinfirmItem}>
      <div className={styled.storeName}>{item.storeName}</div>
      <p className={styled.buyDate}>{item.createdAt}</p>
      <div className={styled.itemList}>
        {item.menuNames.map((item, idx) => (
          <span key={idx}>{item}</span>
        ))}
      </div>
      <Link className={styled.linkBtn} to={`/review/${item.id}`}>리뷰 작성</Link>
    </div>
  );
};

export default HomeReview;