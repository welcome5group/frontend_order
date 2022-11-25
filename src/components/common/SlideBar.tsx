import React from 'react';
import styled from './Common.module.scss'

interface types {
  slideShow: boolean
}

const SlideBar = ({ slideShow }: types) => {
  return (
    <div className={slideShow ? `${styled.slideBarContainer} ${styled.on}` : styled.slideBarContainer}>
      <ul className={styled.slideBarMenuWrap}>
        <li>메뉴 1</li>
        <li>메뉴 2</li>
      </ul>
    </div>
  );
};

export default SlideBar;