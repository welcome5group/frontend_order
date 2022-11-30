import React, { useState } from 'react';
import logo from '../../assets/logo.svg'
import BackArrow from '../common/BackArrow';
import { toastError } from '../toast';
import styled from './SignUp.module.scss'

const SignUp = () => {

  const [inputValue, setInputValue] = useState({
    id: '',
    password: '',
    nickname: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (inputValue.id === '') {
      toastError("아이디를 입력해주세요.")
    }
    else if (inputValue.password === '') {
      toastError('비밀번호를 입력해주세요.')
    }
    else if (inputValue.nickname === '') {
      toastError('닉네임을 입력해주세요.')
    }
    console.log(inputValue)
  }

  return (
    <div>
      <BackArrow link={"/login"} />
      <div className={styled.signUpContainer}>
        <img src={logo} alt="로고" className={styled.img} />
        <div className={styled.signUpInputWrap}>
          <div className={styled.signUpInput}>
            <label id='email'>아이디</label>
            <input type="text" name='id' placeholder='E - MAIL' onChange={handleChange} />
          </div>
          <div className={styled.signUpInput}>
            <label id='email'>비밀번호</label>
            <input type="password" name='password' placeholder='PASSWORD' onChange={handleChange} />
          </div>
          <div className={styled.signUpInput}>
            <label id='email'>닉네임</label>
            <input type="text" name='nickname' placeholder='NICKNAME' onChange={handleChange} />
          </div>
        </div>
        <button className={styled.signUpBtn} type='button' onClick={handleSubmit}>회원가입</button>
      </div>
    </div>
  );
};

export default SignUp;