import React from 'react';
import styled from './Modal.module.scss'

interface types {
  showChangePassword: boolean,
  setShowChangePassword: React.Dispatch<React.SetStateAction<boolean>>
}

const ChangePasswordCinfirm = ({ showChangePassword, setShowChangePassword }: types) => {
  return (
    <div className={styled.changeContainer}>
      <h2>비밀번호 변경</h2>
      <div className={styled.desc}>
        <p>변경 버튼 클릭 시 <strong>로그아웃</strong>되며</p>
        <p>비밀번호 변경 페이지로 이동 됩니다.</p>
      </div>
      <div className={styled.btnGroup}>
        <button className={styled.changeBtn}>변경</button>
        <button className={styled.cancelBtn} onClick={() => setShowChangePassword(!showChangePassword)}>취소</button>
      </div>
    </div>
  );
};

export default ChangePasswordCinfirm;