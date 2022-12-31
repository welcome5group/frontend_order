import React, { useState } from 'react';
import styled from './Header.module.scss'
import { AiOutlineUser } from '@react-icons/all-files/ai/AiOutlineUser';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { tokenStore } from '../../store/store';

const Header = () => {

  const [tokenInfo] = useRecoilState(tokenStore);

  return (
    <>
      <header className={styled.headerContainer}>
        <h1 className={styled.title}>
          Finger Order
        </h1>
        {tokenInfo.token.length !== 0 ?
          <Link to='/mypage' aria-label='move mypage'>
            <AiOutlineUser />
          </Link>
          :
          <Link to='/login' aria-label='move login'>
            <p>로그인</p>
          </Link>
        }
      </header>
    </>
  );
};

export default Header;