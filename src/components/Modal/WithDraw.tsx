import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { withDraw } from '../../apis/memberApi';
import { tokenStore, userStore } from '../../store/store';
import { tokenType, userType } from '../../types/types';
import { testMode } from '../../utils/testMode';
import { toastError } from '../toast';
import styled from './Modal.module.scss'

interface types {
  showWithDraw: boolean,
  setShowWithDraw: React.Dispatch<React.SetStateAction<boolean>>
}

const WithDraw = ({ showWithDraw, setShowWithDraw }: types) => {

  const nav = useNavigate()
  const [inputValue, setInputValue] = useState<string>('')
  const [userInfo] = useRecoilState<userType>(userStore)
  const [tokenInfo] = useRecoilState<tokenType>(tokenStore)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = async () => {
    const data = { email: userInfo.email, password: inputValue }
    if (!testMode) {
      try {
        const result = await withDraw(data, tokenInfo.token)

        if (result.status === 200) {
          nav('/')
        }
      } catch (e: any) {
        toastError(e.response.data.message)
      }
    } else {
      nav('/')
    }
  }

  return (
    <div className={styled.changeContainer}>
      <h2>회원탈퇴</h2>
      <span className={styled.subDesc}>정말 탈퇴 하시겠습니까?</span>
      <div className={styled.inputGroup}>
        <input type="password" placeholder='비밀번호를 입력해주세요' onChange={handleChange} />
      </div>
      <div className={styled.btnGroup}>
        <button className={styled.withDrawBtn} onClick={handleSubmit}>탈퇴</button>
        <button className={styled.cancelBtn} onClick={() => setShowWithDraw(!showWithDraw)}>취소</button>
      </div>
    </div>
  );
};

export default WithDraw;