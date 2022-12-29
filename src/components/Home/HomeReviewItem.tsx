import React from 'react';
import { Link } from 'react-router-dom';
import { orderType } from '../../types/types';
import styled from './Home.module.scss';

interface types {
  item: orderType
}

const HomeReviewItem = ({ item }: types) => {
  const orderTime = item?.orderDate.split('T')[0] + " " + item?.orderDate.split('T')[1].slice(0, 8)
  return (
    <div className={styled.reviewCinfirmItem}>
      <div className={styled.storeName}>{item.storeName}</div>
      <p className={styled.buyDate}>{orderTime}</p>
      <div className={styled.itemList}>
        {item.menuList.map((item, idx) => (
          <span key={idx}>{item.name}</span>
        ))}
      </div>
      <Link className={styled.linkBtn} to={`/review/${item.storeId}/${item.orderId}`}>리뷰 작성</Link>
    </div>
  );
};

export default HomeReviewItem;