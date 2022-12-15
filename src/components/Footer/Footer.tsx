import React from 'react';
import styled from './Footer.module.scss'
import { BsHouseDoor } from 'react-icons/bs';
import { AiOutlineFileText, AiOutlineShoppingCart, AiOutlineBell } from 'react-icons/ai';

import { Link } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil';
import { cartCount, paramStore, tableNumTypes } from '../../store/store';

const Footer = () => {

  const totalCartCount = useRecoilValue(cartCount)
  const [params] = useRecoilState<tableNumTypes>(paramStore)

  const urlChanger = () => {
    let url = ''
    if (params.id === '' || params.storeName === '') {
      url = `/NotFoundPage`
    } else if (isNaN(params.tableNum)) {
      url = `/menu/${params.id}/${params.storeName}`
    } else {
      url = `/menu/${params.id}/${params.storeName}/${params.tableNum}`
    }

    return url
  }

  return (
    <>
      <footer className={styled.footerContainer}>
        <Link to='/'>
          <BsHouseDoor />
        </Link>
        <Link to={urlChanger()}>
          <AiOutlineFileText />
        </Link>
        <Link to='/cart'>
          <AiOutlineShoppingCart />
          {totalCartCount !== 0 && <div className={styled.totalCart}>{totalCartCount}</div>}
        </Link>
        <Link to='/order'>
          <AiOutlineBell />
        </Link>
      </footer>
    </>
  );
};

export default Footer;