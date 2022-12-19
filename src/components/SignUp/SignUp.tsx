import React, { useState } from 'react';
import logo from '../../assets/logo.svg'
import { emailRegExpCheck, onlyTextRegExpCheck, passwordRegExpCheck } from '../../utils/regExp';
// import BackArrow from '../Common/BackArrow';
import { toastError } from '../toast';
import styled from './SignUp.module.scss'

const SignUp = () => {

  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
    nickname: '',
    type: 'member'
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    if (emailRegExpCheck(inputValue.email) === false) {
      toastError("이메일을 확인해주세요.")
      return
    }
    else if (passwordRegExpCheck(inputValue.password) === false) {
      console.log('비밀번호 조건이 맞지 않습니다.')
      return
    }
    else if (onlyTextRegExpCheck(inputValue.nickname) === false) {
      toastError('닉네임을 확인해주세요.')
      return
    }

    console.log('성공!')

    // try {
    //   const result = await signup(inputValue)

    // } catch (e) {
    //   console.log(1)
    // }
  }

  return (
    <div>
      {/* <BackArrow link={"/login"} /> */}
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
            <input type="text" name='nickname' placeholder='NICKNAME' onChange={handleChange} />
          </div>
        </div>
        <button className={styled.signUpBtn} type='button' onClick={handleSubmit}>회원가입</button>
      </div>
    </div>
  );
};

export default SignUp;