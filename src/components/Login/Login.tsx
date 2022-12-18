import React, { useState } from 'react';
import logo from '../../assets/logo.svg'
import styled from './Login.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import BackArrow from '../Common/BackArrow';
import { useRecoilState } from 'recoil';
import { loginStore, paramStore } from '../../store/store';
import { toastError } from '../toast';
import { emailRegExpCheck, passwordRegExpCheck } from '../../utils/regExp';
import { tableNumTypes } from '../../types/types';

const Login = () => {
  const nav = useNavigate()
  const [params] = useRecoilState<tableNumTypes>(paramStore)
  const [loginCheck, setLoginCheck] = useRecoilState(loginStore)
  const [inputValue, setInputValue] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {

    if (emailRegExpCheck(inputValue.email) === false) {
      toastError('이메일 형식을 확인해주세요.')
    } else if (passwordRegExpCheck(inputValue.password) === false) {
      toastError('비밀번호를 확인해주세요.')
    } else {
      setLoginCheck(!loginCheck)
      nav('/')
    }

  }

  return (
    <>
      <BackArrow link={"/"} />
      <div className={styled.loginContainer}>
        <img src={logo} alt="로고" className={styled.img} />
        <div className={styled.loginInputWrap}>
          <input type="text" name='email' value={inputValue.email} placeholder='EMAIL' onChange={handleChange} />
          <input type="password" name='password' value={inputValue.password} placeholder='PASSWORD' onChange={handleChange} />
        </div>
        <button className={styled.loginBtn} type='button' onClick={handleSubmit}>로그인</button>
        <div className={styled.subLink}>
          <Link to="/findPassword">비밀번호 찾기</Link>
          <span className={styled.bar}>|</span>
          <Link to="/signup">회원가입</Link>
        </div>
      </div>
    </>
  );
};

export default Login;