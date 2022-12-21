import React, { useState } from 'react';
import styled from './SignUp.module.scss'
import logo from '../../assets/logo.svg'
import { emailRegExpCheck, onlyTextRegExpCheck, passwordRegExpCheck } from '../../utils/regExp';
import { Link, useNavigate } from 'react-router-dom'
import { toastError, toastSuccess } from '../toast';
import { AiOutlineLeft } from 'react-icons/ai';
import { signUp } from '../../apis/memberApi';
import { AxiosError } from 'axios';
import { testMode } from '../../utils/testMode';

const SignUp = () => {

  const nav = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
    nickName: '',
    type: 'MEMBER'
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    if (emailRegExpCheck(inputValue.email) === false) {
      toastError("잘못된 이메일 형식입니다.")
      return
    }
    else if (passwordRegExpCheck(inputValue.password) === false) {
      console.log('비밀번호 조건이 맞지 않습니다.')
      return
    }
    else if (onlyTextRegExpCheck(inputValue.nickName) === false) {
      toastError('닉네임을 확인해주세요.')
      return
    }

    if (!testMode) {
      try {
        const result = await signUp(inputValue)

        if (result.status === 200) {
          toastSuccess('회원가입이 성공적으로 완료되었습니다')
          // nav('/')
        }
      } catch (e: any) {
        toastError(e.response.data.message)
      }
    } else {
      nav('/')
    }
  }

  return (
    <div>
      <Link to={"/login"}>
        <AiOutlineLeft className={styled.backArrow} />
      </Link>
      <div className={styled.signUpContainer}>
        <img src={logo} alt="로고" className={styled.img} />
        <div className={styled.signUpInputWrap}>
          <div className={styled.signUpInput}>
            <label id='email'>이메일</label>
            <input type="text" name='email' placeholder='E - MAIL' onChange={handleChange} />
          </div>
          <div className={styled.signUpInput}>
            <label id='email'>비밀번호</label>
            <input type="password" name='password' placeholder='PASSWORD' onChange={handleChange} />
            <span className={styled.passwordDesc}>8~16자 영문 대 소문자, 숫자, 특수문자를 사용해주세요. </span>
          </div>
          <div className={styled.signUpInput}>
            <label id='email'>닉네임</label>
            <input type="text" name='nickName' placeholder='NICKNAME' onChange={handleChange} />
          </div>
          <button className={styled.signUpBtn} type='button' onClick={handleSubmit}>회원가입</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;