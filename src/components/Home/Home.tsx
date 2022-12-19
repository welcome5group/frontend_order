import React, { useState } from 'react';
import styled from './Home.module.scss';
import Snow from './Snow';
import { useRecoilState } from 'recoil';
import { loginStore } from '../../store/store';
import { Link } from 'react-router-dom';
import { myReviewType } from '../../types/types';
import { myReviewData } from '../../mock/reviewData';
import HomeReview from './HomeReview';

const Home = () => {

  const [loginCheck] = useRecoilState(loginStore)
  const [data] = useState<myReviewType[]>(myReviewData)

  return (
    <div className={styled.homeContainer}>
      <Snow />
      {loginCheck ?
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
          loginCheck ?
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
    </div>
  );
};

export default Home;