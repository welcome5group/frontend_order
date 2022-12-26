import React, { useState, useEffect } from 'react';
import styled from './MyReview.module.scss'
import { myReviewData } from '../../mock/reviewData';
import MyReviewList from './MyReviewList';
import { myReviewType } from '../../types/types';
import { getReview } from '../../apis/reviewApi';
import { useRecoilState } from 'recoil';
import { tokenStore, userStore } from '../../store/store';
import { testMode } from '../../utils/testMode';

const MyReview = () => {

  const [data, setData] = useState<myReviewType[]>(myReviewData)
  const [tokenInfo] = useRecoilState(tokenStore)
  const [userInfo] = useRecoilState(userStore)

  useEffect(() => {
    if (!testMode) {
      const data = async () => {
        if (tokenInfo.login) {
          if (!testMode) {
            try {
              const result = await getReview(userInfo.id, tokenInfo.token)
              if (result.status === 200) {
                console.log(result)
              }
            } catch (e: any) {
              console.log(e)
            }
          }
        }
      }
      data()
    }
  }, [])

  return (
    <div className={styled.myReviewContainer}>
      <div className={styled.myReviewMainTitle}>
        <h2>내가 쓴 리뷰 {data.length}개</h2>
      </div>
      <MyReviewList data={data} />
    </div>
  );
};

export default MyReview;