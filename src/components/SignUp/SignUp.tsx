import React, { useState } from 'react';
import styled from './SignUp.module.scss'
import logo from '../../assets/logo.svg'
import { emailRegExpCheck, onlyTextRegExpCheck, passwordRegExpCheck } from '../../utils/regExp';
import { Link, useNavigate } from 'react-router-dom'
import { toastError, toastSuccess } from '../toast';
import { AiOutlineLeft } from '@react-icons/all-files/ai/AiOutlineLeft';
import { signUp } from '../../apis/memberApi';
import { testMode } from '../../utils/testMode';

interface inputType {
  email: string;
  password: string;
  passwordCinfirm: string;
  nickName: string;
  type: string;
}

const SignUp = () => {

  const nav = useNavigate();
  const [inputValue, setInputValue] = useState<inputType>({
    email: '',
    password: '',
    passwordCinfirm: '',
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
      toastError('비밀번호 조건이 맞지 않습니다.')
      return
    }
    else if (onlyTextRegExpCheck(inputValue.nickName) === false) {
      toastError('닉네임을 확인해주세요.')
      return
    } else if (inputValue.password !== inputValue.passwordCinfirm) {
      toastError('비밀번호가 다릅니다.')
    } else {
      if (!testMode) {
        try {
          const result = await signUp(inputValue)

          if (result.status === 200) {
            toastSuccess('이메일 인증 후 로그인 해주세요')
            nav('/')
          }
        } catch (e: any) {
          toastError(e.response.data.message)
        }
      } else {
        nav('/')
      }
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
            <label id='password' className={styled.noMargin}>비밀번호</label>
            <span className={styled.passwordDesc}>8~16자 영문 대 소문자, 숫자, 특수문자를 사용해주세요. </span>
            <input type="password" name='password' placeholder='PASSWORD' onChange={handleChange} />
          </div>
          <div className={styled.signUpInput}>
            <label id='passwordCinfirm'>비밀번호 확인</label>
            <input type="password" name='passwordCinfirm' placeholder='PASSWORD' onChange={handleChange} />
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