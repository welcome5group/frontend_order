import React from 'react';
import styled from './MyReview.module.scss'
import { AiOutlineUser } from 'react-icons/ai';
import { myReviewType } from '../../types/types';

interface types {
  item: myReviewType
}

const MyReviewItem = ({ item }: types) => {
  return (
    <div className={styled.myReviewItem}>
      <div className={styled.infoGroup}>
        <div className={styled.reviewInfoGroup}>
          <span className={styled.storeName}>{item.storeName}</span>
          <span className={styled.writeDate}>{item.createdAt}</span>
        </div>
      </div>
      <div className={styled.orderMenuList}>
        {item.menuNames.map((item, idx) => (
          <span className={styled.orderMenuItem} key={idx}>{item}</span>
        ))}
      </div>
      <div className={styled.userReview}>
        <span>{item.content}</span>
      </div>
      {Object.keys(item.comment).length !== 0 &&
        <div className={styled.presidentReview}>
          <AiOutlineUser />
          <div className={styled.presidentReviewInfo}>
            <div className={styled.presidentInfo}>
              <span className={styled.presidnetName}>사장님</span>
              <span className={styled.writeDate}>{item.comment.createdAt}</span>
            </div>
            <div className={styled.presidentReviewContent}>{item.comment.content}</div>
          </div>
        </div>
      }
    </div>
  );
};

export default MyReviewItem;