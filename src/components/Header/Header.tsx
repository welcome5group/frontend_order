import React, { useState } from 'react';
import styled from './Header.module.scss'
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = () => {

  const [loginCheck, setLoginCheck] = useState(false);

  return (
    <>
      <header className={styled.headerContainer}>
        <h1 className={styled.title}>
          Finger Order
        </h1>
        {loginCheck ?
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