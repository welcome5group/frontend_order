import React, { useState } from 'react';
import styled from './Mypage.module.scss'
import { AiOutlineAudit, AiOutlineCreditCard, AiOutlineFileSearch, AiOutlineLock } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import ChangeNickName from '../ChangeInfo/ChangeNickName';
import ChangePasswordCinfirm from '../ChangeInfo/ChangePasswordCinfirm';

const Mypage = () => {

  const [showChangeNickName, setShowChangeNickName] = useState(false)
  const [showChangePassword, setShowChangePassword] = useState(false)

  return (
    <div className={styled.mypageContainer}>
      <div className={styled.mainTitle}>
        <span><h3>JYS9049</h3>님</span>
        <span>환영합니다!</span>
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
        <span>
          <Link to={'/'}>
            회원탈퇴
          </Link>
        </span>
        <span className={styled.bar}>|</span>
        <span>
          <Link to={'/'}>
            로그아웃
          </Link>
        </span>
      </div>
      {
        showChangeNickName &&
        <ChangeNickName showChangeNickName={showChangeNickName} setShowChangeNickName={setShowChangeNickName} />
      }
      {
        showChangePassword &&
        <ChangePasswordCinfirm showChangePassword={showChangePassword} setShowChangePassword={setShowChangePassword} />
      }
    </div >
  );
};

export default Mypage;