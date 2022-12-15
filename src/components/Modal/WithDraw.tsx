import React, { useState } from 'react';
import styled from './Modal.module.scss'

interface types {
  showWithDraw: boolean,
  setShowWithDraw: React.Dispatch<React.SetStateAction<boolean>>
}

const WithDraw = ({ showWithDraw, setShowWithDraw }: types) => {

  const [inputValue, setInputValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = () => {
    if (inputValue === '네 동의합니다') {
      console.log('탈퇴 성공!')
    } else {
      console.log('탈퇴 실패!')
    }
  }

  return (
    <div className={styled.changeContainer}>
      <h2>회원탈퇴</h2>
      <span className={styled.subDesc}>정말 탈퇴 하시겠습니까?</span>
      <div className={styled.inputGroup}>
        <input type="text" placeholder='"네 동의합니다"를 입력해주세요' onChange={handleChange} />
      </div>
      <div className={styled.btnGroup}>
        <button className={styled.withDrawBtn} onClick={handleSubmit}>탈퇴</button>
        <button className={styled.cancelBtn} onClick={() => setShowWithDraw(!showWithDraw)}>취소</button>
      </div>
    </div>
  );
};

export default WithDraw;