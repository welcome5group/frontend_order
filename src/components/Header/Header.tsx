import React, { useState } from 'react';
import styled from './Header.module.scss'
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loginStore } from '../../store/store';

const Header = () => {

  const [loginCheck] = useRecoilState(loginStore);

  console.log(loginCheck)

  return (
    <>
      <header className={styled.headerContainer}>
        <h1 className={styled.title}>
          Finger Order
        </h1>
        {loginCheck.token.length !== 0 ?
          <Link to='/mypage'>
            <AiOutlineUser />
          </Link>
          :
          <Link to='/login'>
            <p>로그인</p>
          </Link>
        }
      </header>
    </>
  );
};

export default Header;