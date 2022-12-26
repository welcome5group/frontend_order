import React, { useState } from 'react';
import logo from '../../assets/logo.svg'
import kakao from '../../assets/kakao.png'
import styled from './Login.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil';
import { tokenStore } from '../../store/store';
import { toastError } from '../toast';
import { emailRegExpCheck, passwordRegExpCheck } from '../../utils/regExp';
import { AiOutlineLeft } from 'react-icons/ai';
import { testMode } from '../../utils/testMode';
import { kakaoSignIn, signIn } from '../../apis/memberApi';
import { tokenType } from '../../types/types';

const Login = () => {
  const nav = useNavigate()
  const setLogin = useSetRecoilState<tokenType>(tokenStore)
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
    type: 'MEMBER'
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value })
  }

  const handleKakoLogin = async () => {
    if (!testMode) {
      try {
        const result = await kakaoSignIn()

        console.log(result)
        if (result.status === 200) {
          const link = result.data.slice(9)
          // window.location.href = link;a
          window.open(link, 'kakaoLogin', 'width=500, height=600')
          console.log(result.data.slice(9))
        }
      } catch (e: any) {
        toastError(e.response.data.message)
      }
    } else {
      nav('/')
    }
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
            setLogin({ token: result.data.accessToken, login: true })
            nav('/')
          }
        } catch (e: any) {
          toastError(e.response.data.message)
        }
      } else {
        setLogin({ token: '1', login: true })
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
        <div>
          <img src={kakao} alt="로고" className={styled.kakao} onClick={handleKakoLogin} />
          {/* <button className={styled.loginBtn} type='button' onClick={handleSubmit}>카카오 로그인</button> */}
        </div>
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