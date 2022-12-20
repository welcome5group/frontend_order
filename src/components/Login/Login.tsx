import React, { useState } from 'react';
import logo from '../../assets/logo.svg'
import styled from './Login.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useRecoilState, useSetRecoilState } from 'recoil';
import { loginStore, paramStore } from '../../store/store';
import { toastError } from '../toast';
import { emailRegExpCheck, passwordRegExpCheck } from '../../utils/regExp';
import { tableNumTypes } from '../../types/types';
import { AiOutlineLeft } from 'react-icons/ai';
import { testMode } from '../../utils/testMode';
import { signIn } from '../../apis/memberApi';

const Login = () => {
  const nav = useNavigate()
  const [params] = useRecoilState<tableNumTypes>(paramStore)
  const setLogin = useSetRecoilState(loginStore)
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
    type: 'MEMBER'
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {

    if (emailRegExpCheck(inputValue.email) === false) {
      toastError('이메일 형식을 확인해주세요.')
    } else if (passwordRegExpCheck(inputValue.password) === false) {
      toastError('비밀번호를 확인해주세요.')
    } else {
      if (!testMode) {
        try {
          const result = await signIn(inputValue)

          if (result.status === 200) {
            console.log(result)
            setLogin({ token: result.data.accessToken })
            nav('/')
          }
        } catch (e: any) {
          toastError(e.response.data.message)
        }
      } else {
        setLogin({ token: '1' })
        nav('/')
      }
    }
  }

  return (
    <>
      <Link to={"/"}>
        <AiOutlineLeft className={styled.backArrow} />
      </Link>
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