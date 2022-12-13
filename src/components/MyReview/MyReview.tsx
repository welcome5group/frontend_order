import React from 'react';
import styled from './MyReview.module.scss'
import { AiOutlineUser } from 'react-icons/ai';

const MyReview = () => {


  return (
    <div className={styled.myReviewContainer}>
      <div className={styled.myReviewMainTitle}>
        <h2>내가 쓴 리뷰 5개</h2>
      </div>
      <div className={styled.myReviewList}>
        <div className={styled.myReviewItem}>
          <div className={styled.infoGroup}>
            <div className={styled.reviewInfoGroup}>
              <span className={styled.storeName}>엄청 맛있는 떡볶이집</span>
              <span className={styled.writeDate}>2022-12-11</span>
            </div>
            <div className={styled.deleteBtn}>
              <button>삭제</button>
            </div>
          </div>
          <div className={styled.userReview}>
            <span>정말 맛있게 먹었습니다 !</span>
          </div>
        </div>
        <div className={styled.myReviewItem}>
          <div className={styled.infoGroup}>
            <div className={styled.reviewInfoGroup}>
              <span className={styled.storeName}>엄청 맛있는 떡볶이집</span>
              <span className={styled.writeDate}>2022-12-11</span>
            </div>
            <div className={styled.deleteBtn}>
              <button>삭제</button>
            </div>
          </div>
          <div className={styled.userReview}>
            <span>정말 맛있게 먹었습니다 !</span>
          </div>
          <div className={styled.presidentReview}>
            <AiOutlineUser />
            <div className={styled.presidentReviewInfo}>
              <span className={styled.presidnetName}>사장님</span>
              <span className={styled.writeDate}>2022-12-11</span>
              <div className={styled.presidentReviewContent}>드셔주셔서 감사합니다! 다음에 또 와주세요~ 감사합니다~정말 감사해요!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReview;