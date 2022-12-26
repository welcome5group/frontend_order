import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { tokenStore, userStore } from '../../store/store';
import { reviewType } from '../../types/types';
import { testMode } from '../../utils/testMode';
import { toastError } from '../toast';
import styled from './Review.module.scss'

interface types {
  reviewList: reviewType[],
  setReviewList: React.Dispatch<React.SetStateAction<reviewType[]>>,
}

const ReviewWrite = ({ reviewList, setReviewList }: types) => {

  const nav = useNavigate()

  const [textValue, setTextValue] = useState('')
  const [userInfo] = useRecoilState(userStore)
  const [tokenInfo] = useRecoilState(tokenStore)

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
    if (tokenInfo.login === true) {
      if (!testMode) {
        const item = {
          id: reviewList.length + 1,
          orderMenu: ['김밥', '떡볶이', '콜라'],
          userInfo: userInfo,
          time: time(),
          content: textValue,
          presidentContent: {
            time: "",
            content: "",
          }
        }
        setReviewList([...reviewList, item])
        setTextValue('')

      } else {

      }
    } else {
      toastError('로그인이 필요한 기능입니다.')
      nav('/login')
    }
  }

  return (
    <div className={styled.reviewWriteArea}>
      <textarea className={styled.reviewTextArea} value={textValue} onChange={handleChange} />
      <button className={styled.reivewWriteBtn} onClick={handleSubmit}>작성하기</button>
    </div>
  );
};

export default ReviewWrite;