import React, { useEffect } from 'react';
import styled from './Home.module.scss';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { tokenStore, userStore } from '../../store/store';
import { Link } from 'react-router-dom';
import { tokenType, userType } from '../../types/types';
import { testMode } from '../../utils/testMode';
import { getUser } from '../../apis/memberApi';
import Snow from './Snow';
import maskImg from '../../assets/maskImg.png'
import HomeReview from './HomeReview';

const Home = () => {

  const [tokenInfo] = useRecoilState<tokenType>(tokenStore)
  const setUserInfo = useSetRecoilState<userType>(userStore)
  const [userInfo] = useRecoilState<userType>(userStore)

  useEffect(() => {
    if (!testMode) {
      const data = async () => {
        if (tokenInfo.login) {
          if (!testMode) {
            try {
              const result = await getUser(tokenInfo.token, tokenInfo.email)
              if (result.status === 200) {
                setUserInfo(result.data)
              }
            } catch (e: any) {
              console.log(e)
            }
          }
        }
      }
      data()
    }
  }, [tokenInfo.token, tokenInfo.login, setUserInfo, tokenInfo.email])


  return (
    <>
      <div className={styled.homeContainer}>
        <Snow />
        {tokenInfo.login ?
          <div className={styled.mainDesc}>
            <p>{userInfo.nickName} 님 안녕하세요?</p>
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
            tokenInfo.login ?
              <HomeReview tokenInfo={tokenInfo} />
              :
              <div className={styled.loginplz}>
                <Link to="/login">로그인</Link> 후 확인이 가능합니다.
              </div>
          }
        </div>
        <div className={styled.banner}>
          <img src={maskImg} alt={"img"} className={styled.bannerImg} />
        </div>
      </div>
    </>
  );
};

export default Home;