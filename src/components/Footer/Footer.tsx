import React from 'react';
import styled from './Footer.module.scss'
import { BsHouseDoor } from 'react-icons/bs';
import { AiOutlineFileText, AiOutlineBell, AiOutlineShoppingCart } from 'react-icons/ai';

import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil';
import { cartCount } from '../../store/store';

const Footer = () => {

  const totalCartCount = useRecoilValue(cartCount)

  return (
    <>
      <footer className={styled.footerContainer}>
        <Link to='/'>
          <BsHouseDoor />
        </Link>
        <Link to='/menu'>
          <AiOutlineBell />
        </Link>
        <Link to='/cart'>
          <AiOutlineShoppingCart />
          {totalCartCount !== 0 && <div className={styled.totalCart}>{totalCartCount}</div>}
        </Link>
        <Link to='/order'>
          <AiOutlineFileText />
        </Link>
      </footer>
    </>
  );
};

export default Footer;