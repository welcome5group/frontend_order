import React, { useState } from 'react';
import styled from './Mypage.module.scss'
import { AiOutlineAudit } from '@react-icons/all-files/ai/AiOutlineAudit';
import { AiOutlineCreditCard } from '@react-icons/all-files/ai/AiOutlineCreditCard';
import { AiOutlineFileSearch } from '@react-icons/all-files/ai/AiOutlineFileSearch';
import { AiOutlineLock } from '@react-icons/all-files/ai/AiOutlineLock';
import { Link, useNavigate } from 'react-router-dom';
import ChangeNickName from '../Modal/ChangeNickName';
import ChangePasswordCinfirm from '../Modal/ChangePasswordCinfirm';
import WithDraw from '../Modal/WithDraw';
import { useRecoilState } from 'recoil';
import { tokenStore, userStore } from '../../store/store';
import MypageProfileChange from './MypageProfileChange';
import { tokenType, userType } from '../../types/types';

const Mypage = () => {

  const nav = useNavigate()

  const [showChangeNickName, setShowChangeNickName] = useState<boolean>(false)
  const [showChangePassword, setShowChangePassword] = useState<boolean>(false)
  const [showWithDraw, setShowWithDraw] = useState<boolean>(false)
  const [changeProfile, setChangeProfile] = useState<boolean>(false)
  const [userInfo] = useRecoilState<userType>(userStore)
  const [tokenInfo] = useRecoilState<tokenType>(tokenStore)

  const handleLogOutClick = () => {
    localStorage.removeItem('recoil-persist')
    nav('/')
  }

  return (
    <div className={styled.mypageContainer}>
      <div className={styled.mainTitle}>
        <div className={styled.profileContainer}>
          <img src={require(`../../assets/profile/profile${userInfo.profile === null || undefined ? 1 : userInfo.profile}.png`)} alt={"프로필"} className={styled.profile} onClick={() => setChangeProfile(!changeProfile)} />
          {changeProfile &&
            <MypageProfileChange email={userInfo.email} token={tokenInfo.token} setChangeProfile={setChangeProfile} />
          }
        </div>
        <span><h3>{userInfo.nickName}</h3>님 환영합니다!</span>
      </div>
      <div className={styled.mypageMenuListGroup}>
        <Link to='/mypayment'>
          <div className={styled.mypageMenu}>
            <AiOutlineCreditCard /><span>결제 내역</span>
          </div>
        </Link>
        <Link to='/myreview'>
          <div className={styled.mypageMenu}>
            <AiOutlineFileSearch /><span>내가 쓴 리뷰</span>
          </div>
        </Link>
        <div className={styled.mypageMenu} onClick={() => setShowChangeNickName(!showChangeNickName)}>
          <AiOutlineAudit /><span>닉네임 변경</span>
        </div>
        <div className={styled.mypageMenu} onClick={() => setShowChangePassword(!showChangePassword)}>
          <AiOutlineLock /><span>비밀번호 변경</span>
        </div>
      </div>
      <div className={styled.myapgeLinkGroup}>
        <button onClick={() => setShowWithDraw(!showWithDraw)}>
          회원탈퇴
        </button>
        <span className={styled.bar}>|</span>
        <span>
          <button onClick={handleLogOutClick}>
            로그아웃
          </button>
        </span>
      </div>
      {
        showChangeNickName &&
        <ChangeNickName showChangeNickName={showChangeNickName} setShowChangeNickName={setShowChangeNickName} />
      }
      {
        showChangePassword &&
        <ChangePasswordCinfirm email={userInfo.email} showChangePassword={showChangePassword} setShowChangePassword={setShowChangePassword} />
      }
      {
        showWithDraw &&
        <WithDraw showWithDraw={showWithDraw} setShowWithDraw={setShowWithDraw} />
      }
    </div >
  );
};

export default Mypage;