import React, { useState } from 'react';
import logo from '../../assets/logo.svg'
import styled from './Login.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { toastError } from '../toast';
import BackArrow from '../common/BackArrow';
import { useRecoilState } from 'recoil';
import { loginStore, paramStore, tableNumTypes } from '../../store/store';

const Login = () => {
  const nav = useNavigate()
  const [params] = useRecoilState<tableNumTypes>(paramStore)
  const [loginCheck, setLoginCheck] = useRecoilState(loginStore)
  const [inputValue, setInputValue] = useState({
    id: '',
    password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    // if (inputValue.id === '') {
    //   toastError("아이디를 입력해주세요.")
    // }
    // else if (inputValue.password === '') {
    //   toastError('비밀번호를 입력해주세요.')
    // }

    setLoginCheck(!loginCheck)

    if (isNaN(params.tableNum)) {
      nav(`/${params.id}/${params.storeName}`)
    } else {
      nav(`/${params.id}/${params.storeName}/${params.tableNum}`)
    }
  }

  return (
    <>
      <BackArrow link={"/"} />
      <div className={styled.loginContainer}>
        <img src={logo} alt="로고" className={styled.img} />
        <div className={styled.loginInputWrap}>
          <input type="text" name='id' value={inputValue.id} placeholder='ID' onChange={handleChange} />
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