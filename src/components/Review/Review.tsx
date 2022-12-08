import React, { useState, useRef } from 'react';
import { reviewData } from '../../mock/reviewData';
import styled from './Review.module.scss'
import { AiOutlineUser } from 'react-icons/ai';
import { reviewType } from '../../store/store';

const Review = () => {

  const [reviewList, setReviewList] = useState<reviewType[]>(reviewData)
  const [textValue, setTextValue] = useState('')
  const currentId = useRef(4);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value)
  }

  const handleSubmit = () => {
    const item = { id: reviewList.length + 1, content: textValue }
    setReviewList([...reviewList, item])
  }

  return (
    <div className={styled.reviewContainer}>
      <div className={styled.titleArea}>
        <h1 className={styled.reviewTitle}>
          리뷰
        </h1>
      </div>
      <div className={styled.reviewWriteArea}>
        <textarea className={styled.reviewTextArea} onChange={handleChange} />
        <button className={styled.reivewWriteBtn} onClick={handleSubmit}>작성하기</button>
      </div>
      <div className={styled.reviewList}>
        {reviewList.map(item => (
          <div className={styled.reviewItem} key={item.id}>
            <div className={styled.userInfo}>
              <span className={styled.userImg}><AiOutlineUser /></span>
              <span className={styled.userNickname}>jys9049</span>
            </div>
            <div>
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;