import React from 'react';
import styled from './Review.module.scss'
import { AiOutlineUser } from 'react-icons/ai';
import { reviewType } from '../../types/types';

interface types {
  item: reviewType
}

const ReviewItem = ({ item }: types) => {
  console.log(item)
  return (
    <div className={styled.reviewItem} key={item.reviewId}>
      <div className={styled.userInfo}>
        <span className={styled.userImg}><AiOutlineUser /></span>
        <div className={styled.textWrap}>
          <span className={styled.userNickname}>{item.nickName}</span>
          <span className={styled.writeTime}>{item.createdAt}</span>
        </div>
      </div>
      <div className={styled.orderMenuList}>
        {item.menuNames.map((item, idx) => (
          <span className={styled.orderMenuItem} key={idx}>{item}</span>
        ))}
      </div>
      <div className={styled.reviewContent}>
        {item.content}
      </div>
      {item.comment !== null &&
        <div className={styled.presidentReview}>
          <AiOutlineUser />
          <div className={styled.presidentReviewInfo}>
            <div className={styled.presidentInfo}>
              <span className={styled.presidnetName}>사장님</span>
              <span className={styled.writeDate}>{item.comment.updatedAt}</span>
            </div>
            <div className={styled.presidentReviewContent}>{item.comment.content}</div>
          </div>
        </div>
      }
    </div>
  );
};

export default ReviewItem;