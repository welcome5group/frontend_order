import React from 'react';
import styled from './Home.module.scss'
import Snow from './Snow';
import { useRecoilState } from 'recoil';
import { loginStore } from '../../store/store';
import { Link } from 'react-router-dom';

const Home = () => {

  const [loginCheck] = useRecoilState(loginStore)
  console.log(loginCheck)

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
              <div className={styled.reviewCinfirmItem}>
                <p className={styled.storeName}>정말 맛있는 피자 집</p>
                <p className={styled.buyDate}>2022-12-16 15:02:21</p>
                <div className={styled.itemList}>
                  <span>불고기 피자</span>
                  <span>콤비네이션 피자</span>
                </div>
                <button>리뷰 작성</button>
              </div>
              <div className={styled.reviewCinfirmItem}>
                <p className={styled.storeName}>정말 맛있는 피자 집</p>
                <p className={styled.buyDate}>2022-12-16 15:02:21</p>
                <div className={styled.itemList}>
                  <span>피자</span>
                </div>
                <button>리뷰 작성</button>
              </div>
              <div className={styled.reviewCinfirmItem}>
                <p className={styled.storeName}>정말 맛있는 피자 집</p>
                <p className={styled.buyDate}>2022-12-16 15:02:21</p>
                <div className={styled.itemList}>
                  <span>피자</span>
                </div>
                <button>리뷰 작성</button>
              </div>
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