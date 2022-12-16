import React from 'react';
import styled from './Snow.module.scss'

const Snow = () => {

  const snowCreate = () => {
    let snowArray = []
    for (let i = 0; i < 50; i++) {
      const randomNum = Math.floor(Math.random() * window.innerWidth);
      snowArray.push(randomNum)
    }

    return snowArray
  }

  const snow = snowCreate()

  return (
    <div className={styled.snowArea}>
      {
        snow.map((snow, idx) => (
          <div className={styled.snow} style={{ marginLeft: snow }} key={idx}></div>
        ))
      }
    </div>
  );
};

export default Snow;