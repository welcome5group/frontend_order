import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { testApi, writeReview } from '../../apis/reviewApi';
import { paramStore, tokenStore, userStore } from '../../store/store';
import { reviewType } from '../../types/types';
import { testMode } from '../../utils/testMode';
import { toastError, toastSuccess } from '../toast';
import styled from './Review.module.scss'

interface types {
  reviewList: reviewType[],
  setReviewList: React.Dispatch<React.SetStateAction<reviewType[]>>,
}

const ReviewWrite = ({ reviewList, setReviewList }: types) => {

  const nav = useNavigate()

  const [textValue, setTextValue] = useState('')
  const [tokenInfo] = useRecoilState(tokenStore)
  const [userInfo] = useRecoilState(userStore)
  const [paramsInfo] = useRecoilState(paramStore)

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

  const handleSubmit = async () => {
    if (tokenInfo.login === true) {
      if (!testMode) {
        try {
          const value = {
            memberId: userInfo.id,
            storeId: Number(paramsInfo.id),
            ordersId: 1,
            content: textValue,
          }
          const result = await writeReview(value, tokenInfo.token)
          // const result = await testApi(tokenInfo.token)

          if (result.status === 200) {
            toastSuccess('리뷰 작성이 완료되었습니다.')
          }
        } catch (e: any) {
          toastError(e.response.data.message)
        }
      } else {
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