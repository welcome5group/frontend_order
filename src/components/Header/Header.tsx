import React, { useState } from 'react';
import styled from './Header.module.scss'
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = () => {

  const [loginCheck, setLoginCheck] = useState(false);

  return (
    <>
      <div className={styled.headerContainer}>
        <h1 className={styled.title}>
          Finger Order
        </h1>
        {loginCheck ?
          <div>로그인</div>
          :
          <Link to='/login'>
            <AiOutlineUser />
          </Link>
        }
      </div>
    </>
  );
};

export default Header;