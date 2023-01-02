import React, { useState, useEffect } from 'react';
import styled from './MyReview.module.scss'
import { myReviewData } from '../../mock/reviewData';
import MyReviewList from './MyReviewList';
import { myReviewType, tokenType, userType } from '../../types/types';
import { useRecoilState } from 'recoil';
import { tokenStore, userStore } from '../../store/store';
import { testMode } from '../../utils/testMode';
import { getMyReview } from '../../apis/memberApi';

const MyReview = () => {

  const [reviewList, setReviewList] = useState<myReviewType[]>([])
  const [tokenInfo] = useRecoilState<tokenType>(tokenStore)
  const [userInfo] = useRecoilState<userType>(userStore)

  useEffect(() => {
    if (!testMode) {
      const data = async () => {
        if (tokenInfo.login) {
          if (!testMode) {
            try {
              const result = await getMyReview(userInfo.id, tokenInfo.token)
              if (result.status === 200) {
                setReviewList(result.data)
              }
            } catch (e: any) {
              console.log(e)
            }
          }
        }
      }
      data()
    } else {
      setReviewList(myReviewData)
    }
  }, [])

  return (
    <div className={styled.myReviewContainer}>
      <div className={styled.myReviewMainTitle}>
        <h2>내가 쓴 리뷰 {reviewList.length}개</h2>
      </div>
      <MyReviewList reviewList={reviewList} />
    </div>
  );
};

export default MyReview;