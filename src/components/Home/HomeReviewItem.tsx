import React from 'react';
import { Link } from 'react-router-dom';
import { myReviewType, reviewType } from '../../types/types';
import styled from './Home.module.scss';

interface types {
  item: reviewType
}

const HomeReviewItem = ({ item }: types) => {
  console.log(item)
  return (
    <div className={styled.reviewCinfirmItem}>
      {/* <div className={styled.storeName}>{item.storeName}</div> */}
      <p className={styled.buyDate}>{item.createdAt}</p>
      <div className={styled.itemList}>
        {item.menuNames.map((item, idx) => (
          <span key={idx}>{item}</span>
        ))}
      </div>
      {/* <Link className={styled.linkBtn} to={`/review/${item.id}`}>리뷰 작성</Link> */}
    </div>
  );
};

export default HomeReviewItem;