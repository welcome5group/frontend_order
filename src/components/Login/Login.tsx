import React from 'react';
import logo from '../../assets/logo.svg'
import styled from './Login.module.scss'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className={styled.loginContainer}>
      <img src={logo} alt="로고" className={styled.img} />
      <div className={styled.loginInputWrap}>
        <input type="text" placeholder='ID' />
        <input type="password" placeholder='PASSWORD' />
      </div>
      <button className={styled.loginBtn} type='button'>로그인</button>
      <div className={styled.subLink}>
        <Link to="/findPassword">비밀번호 찾기</Link>
        <span className={styled.bar}>|</span>
        <Link to="/signup">회원가입</Link>
      </div>
    </div>
  );
};

export default Login;