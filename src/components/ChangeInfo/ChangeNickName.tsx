import React, { useState } from 'react';
import styled from './ChangeInfo.module.scss'
import { toastError, toastSuccess } from '../toast';
import { onlyTextRegExpCheck } from '../../utils/regExp';

interface types {
  showChangeNickName: boolean,
  setShowChangeNickName: React.Dispatch<React.SetStateAction<boolean>>
}

const ChangeNickName = ({ showChangeNickName, setShowChangeNickName }: types) => {

  const [inputValue, setInputValue] = useState('')
  const [doubleCheck, setDoubleCheck] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleDoubleCheck = () => {
    if (onlyTextRegExpCheck(inputValue) === false) {
      toastError("닉네임을 확인해주세요.")
    } else {
      toastSuccess("중복확인 완료")
      setDoubleCheck(true)
    }
  }

  const handleSubmit = () => {
    if (doubleCheck !== false) {
      toastSuccess("변경 완료")
    } else {
      toastError("중복확인 후 변경이 가능합니다.")
    }
  }

  return (
    <div className={styled.changeContainer}>
      <h2>닉네임 변경</h2>
      <span className={styled.subDesc}>변경하실 닉네임을 입력해주세요</span>
      <div className={styled.inputGroup}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button onClick={handleDoubleCheck}>중복확인</button>
      </div>
      <div className={styled.btnGroup}>
        <button className={styled.changeBtn} onClick={handleSubmit}>변경</button>
        <button className={styled.cancelBtn} onClick={() => setShowChangeNickName(!showChangeNickName)}>취소</button>
      </div>
    </div>
  );
};

export default ChangeNickName;