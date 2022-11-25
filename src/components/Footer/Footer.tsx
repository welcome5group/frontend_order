import React from 'react';
import styled from './Footer.module.scss'
import { BsHouseDoor } from 'react-icons/bs';
import { AiOutlineFileText, AiOutlineBell } from 'react-icons/ai';

import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <>
      <div className={styled.footerContainer}>
        <Link to='/'>
          <BsHouseDoor />
        </Link>
        <Link to='/'>
          <AiOutlineBell />
        </Link>
        <Link to='/'>
          <AiOutlineFileText />
        </Link>
      </div>
    </>
  );
};

export default Footer;