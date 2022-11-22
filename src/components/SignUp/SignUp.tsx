import React, { useState } from 'react';
import logo from '../../assets/logo.svg'
import styled from './SignUp.module.scss'

const SignUp = () => {

  const [inputValue, setInputValue] = useState([{
    id: '',
    password: '',
    nickname: '',
  }])

  return (
    <div>
      <div className={styled.signUpContainer}>
        <img src={logo} alt="로고" className={styled.img} />
        <div className={styled.signUpInputWrap}>
          <div className={styled.signUpInput}>
            <label id='email'>아이디</label>
            <input type="text" placeholder='E - MAIL' />
          </div>
          <div className={styled.signUpInput}>
            <label id='email'>비밀번호</label>
            <input type="password" placeholder='PASSWORD' />
          </div>
          <div className={styled.signUpInput}>
            <label id='email'>닉네임</label>
            <input type="text" placeholder='NICKNAME' />
          </div>
        </div>
        <button className={styled.signUpBtn} type='button'>회원가입</button>
      </div>
    </div>
  );
};

export default SignUp;