import React from 'react';
import styled from './Review.module.scss'
import { AiOutlineUser } from 'react-icons/ai';
import { reviewType } from '../../types/types';

const ReviewItem = (props: { reviewList: reviewType[] }) => {
  return (
    <div className={styled.reviewList}>
      {props.reviewList.map(item => (
        <div className={styled.reviewItem} key={item.id}>
          <div className={styled.userInfo}>
            <span className={styled.userImg}><AiOutlineUser /></span>
            <div className={styled.textWrap}>
              <span className={styled.userNickname}>{item.userInfo.nickName}</span>
              <span className={styled.writeTime}>{item.time}</span>
            </div>
          </div>
          <div>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewItem;