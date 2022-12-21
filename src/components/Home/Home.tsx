import React, { useState, useEffect } from 'react';
import styled from './Home.module.scss';
import Snow from './Snow';
import maskImg from '../../assets/maskImg.png'
import smartOrderImg from '../../assets/smartOrder.png'
import { useRecoilState } from 'recoil';
import { loginStore } from '../../store/store';
import { Link } from 'react-router-dom';
import { loginType, myReviewType } from '../../types/types';
import { myReviewData } from '../../mock/reviewData';
import HomeReview from './HomeReview';
import { testMode } from '../../utils/testMode';
import { getUser } from '../../apis/memberApi';
import { order } from '../../apis/orderApi';

const Home = () => {

  const [loginInfo] = useRecoilState<loginType>(loginStore)
  const [data] = useState<myReviewType[]>(myReviewData)

  const [userInfo, setUserInfo] = useState()

  const handleBtnClick = async () => {
    try {
      const result = await order(loginInfo.token)
      console.log(result)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (!testMode) {
      const data = async () => {
        if (loginInfo.token !== '') {
          if (!testMode) {
            try {
              const result = await getUser(loginInfo.token, loginInfo.email)

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
  }, [loginInfo.email, loginInfo.token])


  return (
    <div className={styled.homeContainer}>
      <Snow />
      {loginInfo ?
        <div className={styled.mainDesc}>
          <p>JYS9049 님 안녕하세요?</p>
          <p>이용해주셔서 감사합니다.</p>
        </div> :
        <div className={styled.mainDesc}>
          <p>불편하게 서서 주문하지 말고!</p>
          <p>편하게 앉아서 주문하세요!</p>
        </div>
      }
      <div className={styled.reviewCinfirmArea}>
        <p>리뷰는 작성 하셨나요?</p>
        {
          loginInfo.token !== '' ?
            <div className={styled.reviewCinfirmList}>
              {data.map(item => (
                <HomeReview item={item} />
              ))}
            </div>
            :
            <div className={styled.loginplz}>
              <Link to="/login">로그인</Link> 후 확인이 가능합니다.
            </div>
        }
      </div>
      <div className={styled.banner}>
        <img src={maskImg} alt={"img"} className={styled.bannerImg} />
      </div>
      <button onClick={handleBtnClick}>주문테스트</button>
    </div>
  );
};

export default Home;