import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { findPassword } from '../../apis/memberApi';
import { tokenStore } from '../../store/store';
import { tokenType } from '../../types/types';
import { testMode } from '../../utils/testMode';
import { toastError, toastSuccess } from '../toast';
import styled from './Modal.module.scss'

interface types {
  showChangePassword: boolean;
  email: string;
  setShowChangePassword: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChangePasswordCinfirm = ({ showChangePassword, email, setShowChangePassword }: types) => {
  const nav = useNavigate()
  const [tokenInfo] = useRecoilState<tokenType>(tokenStore)
  const handleSubmit = async () => {
    if (!testMode) {
      const value = {
        email: email,
        type: 'MEMBER'
      }
      try {
        const result = await findPassword(value, tokenInfo.token)
        if (result.status === 200) {
          console.log(result.data.result)
          if (result.data.result === true) {
            toastSuccess('메일을 통해 비밀번호를 변경해주세요')
            localStorage.removeItem('recoil-persist')
            nav('/login')
          }
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
      <h2>비밀번호 변경</h2>
      <div className={styled.desc}>
        <p>변경 버튼 클릭 시 <strong>로그아웃</strong>되며</p>
        <p>비밀번호 변경 메일이 전송됩니다.</p>
      </div>
      <div className={styled.btnGroup}>
        <button className={styled.changeBtn} onClick={handleSubmit}>변경</button>
        <button className={styled.cancelBtn} onClick={() => setShowChangePassword(!showChangePassword)}>취소</button>
      </div>
    </div>
  );
};

export default ChangePasswordCinfirm;