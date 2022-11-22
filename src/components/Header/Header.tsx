import React from 'react';
import styled from './Header.module.scss'
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className={styled.headerContainer}>
      <div>
        <AiOutlineMenu className={styled.menu} />
      </div>
      <div>
        <p className={styled.loginBtn}><Link to="/login">로그인</Link></p>
      </div>
    </div>
  );
};

export default Header;