import React from 'react';
import styled from './Common.module.scss'
import { AiOutlineLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

interface types {
  link: string
}

export const BackArrow = ({ link }: types) => {
  return (
    <div className={styled.backContainer}>
      <Link to={link}>
        <AiOutlineLeft className={styled.backArrow} />
      </Link>
    </div>
  );
};

export default BackArrow;