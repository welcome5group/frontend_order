import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { writeReview } from '../../apis/reviewApi';
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
  const param = useParams()

  const [textValue, setTextValue] = useState('')
  const [tokenInfo] = useRecoilState(tokenStore)
  const [userInfo] = useRecoilState(userStore)
  const [paramsInfo] = useRecoilState(paramStore)

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
            orderId: Number(param.orderId),
            content: textValue,
          }
          const result = await writeReview(value, tokenInfo.token)
          // const result = await testApi(tokenInfo.token)

          if (result.status === 200) {
            toastSuccess('리뷰 작성이 완료되었습니다.')
            window.location.replace(`/review/${param.storeId}`)
          }
        } catch (e: any) {
          toastError(e.response.data.message)
        }
      } else {
        const item = {
          reviewId: 2,
          nickName: "jys9049",
          menuNames: ["떡볶이", "튀김", "어묵"],
          createdAt: "2022-12-08 14:22:01",
          content: "여기 정말 맛있어요!!",
          comment: {
            content: "네 감사합니다 !!",
            nickName: "사장님",
            parentId: 3,
            reviewId: 4,
            updatedAt: "2022-12-26 17:05:52.20",
          },
        }
        setReviewList([...reviewList, item])
        setTextValue('')
      }
    } else {
      toastError('로그인이 필요한 기능입니다.')
      nav('/login')
    }
  }

  console.log(param.orderId)

  return (
    <div className={styled.reviewWriteArea}>
      <textarea className={styled.reviewTextArea} value={textValue} onChange={handleChange} />
      <button className={param.orderId !== null ? styled.canNotWrite : styled.reivewWriteBtn} onClick={handleSubmit} disabled={param.orderId === null}>작성하기</button>
    </div>
  );
};

export default ReviewWrite;