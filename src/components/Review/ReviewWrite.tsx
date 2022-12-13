import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { reviewType, userStore } from '../../store/store';
import styled from './Review.module.scss'

interface types {
  reviewList: reviewType[],
  setReviewList: React.Dispatch<React.SetStateAction<reviewType[]>>
}

const ReviewWrite = ({ reviewList, setReviewList }: types) => {

  const [textValue, setTextValue] = useState('')
  const [userInfo] = useRecoilState(userStore)

  const time = () => {
    const today = new Date()

    const year = today.getFullYear()
    const month = today.getMonth() - 1
    const day = today.getDay()

    const hour = today.getHours()
    const min = today.getMinutes()
    const sec = today.getSeconds()

    return `${year}-${month}-${day} ${hour}:${min}:${sec}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value)
  }

  const handleSubmit = () => {
    const item = { id: reviewList.length + 1, userInfo: userInfo, time: time(), content: textValue }
    console.log(item)
    setReviewList([...reviewList, item])
    setTextValue('')
  }

  return (
    <div className={styled.reviewWriteArea}>
      <textarea className={styled.reviewTextArea} value={textValue} onChange={handleChange} />
      <button className={styled.reivewWriteBtn} onClick={handleSubmit}>작성하기</button>
    </div>
  );
};

export default ReviewWrite;