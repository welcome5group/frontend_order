import React from 'react';
import styled from './MyReview.module.scss'
import { AiOutlineUser } from 'react-icons/ai';
import { myReviewType } from '../../types/types';

interface types {
  item: myReviewType
}

const MyReviewItem = ({ item }: types) => {

  console.log(item)

  return (
    <div className={styled.myReviewItem}>
      <div className={styled.infoGroup}>
        <div className={styled.reviewInfoGroup}>
          <span className={styled.storeName}>{item.storeName}</span>
          <span className={styled.writeDate}>{item.time}</span>
        </div>
        <div className={styled.deleteBtn}>
          <button>삭제</button>
        </div>
      </div>
      <div className={styled.userReview}>
        <span>{item.content}</span>
      </div>
      {item.presidentContent.content !== "" &&
        <div className={styled.presidentReview}>
          <AiOutlineUser />
          <div className={styled.presidentReviewInfo}>
            <div className={styled.presidentInfo}>
              <span className={styled.presidnetName}>사장님</span>
              <span className={styled.writeDate}>{item.presidentContent.time}</span>
            </div>
            <div className={styled.presidentReviewContent}>{item.presidentContent.content}</div>
          </div>
        </div>
      }
    </div>
  );
};

export default MyReviewItem;