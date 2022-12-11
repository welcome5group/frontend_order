import React, { useState } from 'react';
import { toastError } from '../toast';
import styled from './FindPassword.module.scss'
import logo from '../../assets/logo.svg'
import BackArrow from '../Common/BackArrow';

const FindPassword = () => {
  const [inputValue, setInputValue] = useState({
    id: '',
    nickname: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (inputValue.id === '') {
      toastError("아이디를 입력해주세요.")
    }
    else if (inputValue.nickname === '') {
      toastError('닉네임을 입력해주세요.')
    }
    console.log(inputValue)
  }

  return (
    <div>
      <BackArrow link={"/login"} />
      <div className={styled.findPasswordContainer}>
        <img src={logo} alt="로고" className={styled.img} />
        <div className={styled.findPasswordInputWrap}>
          <div className={styled.findPasswordInput}>
            <label id='email'>아이디</label>
            <input type="text" name='id' placeholder='이메일' onChange={handleChange} />
          </div>
          <div className={styled.findPasswordInput}>
            <label id='nickname'>닉네임</label>
            <input type="password" name='nickname' placeholder='닉네임' onChange={handleChange} />
          </div>
        </div>
        <button className={styled.findPasswordBtn} type='button' onClick={handleSubmit}>비밀번호 찾기</button>
      </div>
    </div>
  );
};

export default FindPassword;