import React, { useEffect } from 'react';
import logo from '../../assets/logo.svg'
import { AiOutlineLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import styled from './SignUp.module.scss'
import { testMode } from '../../utils/testMode';
import { signCheck } from '../../apis/memberApi';
import { toastError, toastSuccess } from '../toast';

const SignUpCheck = () => {

  const uuid = window.location.search.slice(6)

  const close = () => {
    window.open('', '_self').close();
  }

  useEffect(() => {
    const signCheckFunc = async () => {
      if (!testMode) {
        try {
          const result = await signCheck(uuid)

          if (result.status === 200) {
            toastSuccess('인증이 완료되었습니다.')
          }
        } catch (e: any) {
          toastError(e.response.data.message)
        }
      }
    }
    signCheckFunc()
  }, [])

  return (
    <div>
      <Link to={"/login"}>
        <AiOutlineLeft className={styled.backArrow} />
      </Link>
      <div className={styled.signUpContainer}>
        <img src={logo} alt="로고" className={styled.img} />
        <div className={styled.signupCheckContainer}>
          <div className={styled.text}>어서오세요 핑거오더입니다.</div>
          <div className={styled.text}>이메일 인증이 완료되었습니다.</div>
          <button className={styled.signUpBtn} onClick={() => close()}>창 닫기</button>
        </div>
      </div>
    </div >
  );
};

export default SignUpCheck;