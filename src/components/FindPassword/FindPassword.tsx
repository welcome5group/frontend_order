import React, { useState } from 'react';
import styled from './FindPassword.module.scss'
import logo from '../../assets/logo.svg'
import { toastError, toastSuccess } from '../toast';
import { Link, useNavigate } from 'react-router-dom'
import { emailRegExpCheck, onlyTextRegExpCheck } from '../../utils/regExp';
import { AiOutlineLeft } from '@react-icons/all-files/ai/AiOutlineLeft';
import { testMode } from '../../utils/testMode';
import { findPassword } from '../../apis/memberApi';
import { useRecoilState } from 'recoil';
import { tokenStore } from '../../store/store';

const FindPassword = () => {

  const nav = useNavigate()
  const [inputValue, setInputValue] = useState({
    email: '',
    type: 'MEMBER'
  })
  const [tokenInfo] = useRecoilState(tokenStore)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    if (emailRegExpCheck(inputValue.email) === false) {
      toastError("이메일 형식을 확인해주세요.")
    }
    else {
      if (!testMode) {
        try {
          const result = await findPassword(inputValue, tokenInfo.token)

          if (result.status === 200) {
            console.log(result.data.result)
            if (result.data.result === true) {
              toastSuccess('메일을 통해 비밀번호를 변경해주세요')
              nav('/')
            }
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
            <label id='email'>이메일</label>
            <input type="text" name='email' placeholder='이메일' onChange={handleChange} />
          </div>
        </div>
        <button className={styled.findPasswordBtn} type='button' onClick={handleSubmit}>비밀번호 찾기</button>
      </div>
    </div>
  );
};

export default FindPassword;