import React, { useState } from 'react';
import styled from './FindPassword.module.scss'
import logo from '../../assets/logo.svg'
import { toastError, toastSuccess } from '../toast';
import { Link, useNavigate } from 'react-router-dom'
import { passwordRegExpCheck } from '../../utils/regExp';
import { AiOutlineLeft } from 'react-icons/ai';
import { testMode } from '../../utils/testMode';
import { changePassword } from '../../apis/memberApi';

const ChangePassword = () => {

  const nav = useNavigate()
  const uuid = window.location.search.slice(6)

  const [inputValue, setInputValue] = useState({
    password: '',
    passwordCinfirm: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    if (passwordRegExpCheck(inputValue.password) === false) {
      toastError("비밀번호 조건이 맞지 않습니다.")
    } else if (inputValue.password !== inputValue.passwordCinfirm) {
      toastError("비밀번호가 맞지 않습니다.")
    }
    else {
      if (!testMode) {
        try {
          const result = await changePassword(uuid, inputValue.password)

          if (result.status === 200) {
            toastSuccess('비밀번호가 변경되었습니다. 다시 로그인해주세요')
            nav('/login')
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
      <Link to={"/"}>
        <AiOutlineLeft className={styled.backArrow} />
      </Link>
      <div className={styled.findPasswordContainer}>
        <img src={logo} alt="로고" className={styled.img} />
        <div className={styled.findPasswordInputWrap}>
          <div className={styled.findPasswordInput}>
            <label id='password'>비밀번호</label>
            <input type="password" name='password' onChange={handleChange} />
            <label id='passwordCinfirm'>비밀번호 확인</label>
            <input type="password" name='passwordCinfirm' onChange={handleChange} />
          </div>
        </div>
        <button className={styled.findPasswordBtn} type='button' onClick={handleSubmit}>비밀번호 변경</button>
      </div>
    </div>
  );
};

export default ChangePassword;