import React from 'react';
import styled from './NotFound.module.scss'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className={styled.notFoundPageContainer}>
      <p>접근할 수 없는 경로입니다.</p>
      <p>QR코드를 스캔하여 접속해 주세요.</p>
      <Link to={"/"}>HOME</Link>
    </div>
  );
};

export default NotFound;