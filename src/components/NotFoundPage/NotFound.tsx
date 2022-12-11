import React from 'react';
import styled from './NotFound.module.scss'

const NotFound = () => {
  return (
    <div className={styled.notFoundPageContainer}>
      접근할 수 없는 경로 입니다.
    </div>
  );
};

export default NotFound;