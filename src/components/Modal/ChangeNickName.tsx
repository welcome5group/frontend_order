import React, { useState } from 'react';
import styled from './Modal.module.scss'
import { toastError, toastSuccess } from '../toast';
import { onlyTextRegExpCheck } from '../../utils/regExp';
import { useRecoilState } from 'recoil';
import { tokenStore, userStore } from '../../store/store';
import { testMode } from '../../utils/testMode';
import { changeNickName } from '../../apis/memberApi';
import { useNavigate } from 'react-router-dom';

interface types {
  showChangeNickName: boolean,
  setShowChangeNickName: React.Dispatch<React.SetStateAction<boolean>>
}

const ChangeNickName = ({ showChangeNickName, setShowChangeNickName }: types) => {

  const nav = useNavigate()
  const [inputValue, setInputValue] = useState('')
  const [tokenInfo] = useRecoilState(tokenStore)
  const [userInfo] = useRecoilState(userStore)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = async () => {
    if (onlyTextRegExpCheck(inputValue) === false) {
      toastError('닉네임을 확인해주세요.')
      return
    } else {
      if (!testMode) {
        const data = {
          email: userInfo.email,
          nickName: inputValue,
          type: 'MEMBER'
        }
        try {
          const result = await changeNickName(tokenInfo.token, data)

          if (result.status === 200) {
            toastSuccess('닉네임이 변경되었습니다.')
            setShowChangeNickName(!showChangeNickName)
            nav('/')
          }
        } catch (e: any) {
          toastError(e.response.data.message)
        }
      } else {
        toastSuccess('닉네임이 변경되었습니다.')
        setShowChangeNickName(!showChangeNickName)
      }
    }
  }

  return (
    <div className={styled.changeContainer}>
      <h2>닉네임 변경</h2>
      <span className={styled.subDesc}>변경하실 닉네임을 입력해주세요</span>
      <div className={styled.inputGroup}>
        <input type="text" value={inputValue} onChange={handleChange} />
      </div>
      <div className={styled.btnGroup}>
        <button className={styled.changeBtn} onClick={handleSubmit}>변경</button>
        <button className={styled.cancelBtn} onClick={() => setShowChangeNickName(!showChangeNickName)}>취소</button>
      </div>
    </div>
  );
};

export default ChangeNickName;