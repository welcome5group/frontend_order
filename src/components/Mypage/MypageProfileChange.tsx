import React, { useState, useEffect } from 'react';
import styled from './Mypage.module.scss'
import { urlType } from '../../types/types';

interface types {
  setChangeProfile: React.Dispatch<React.SetStateAction<boolean>>
}

const MypageProfileChange = ({ setChangeProfile }: types) => {

  const [urlList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])

  const [select, setSelect] = useState<number>(1)

  const handleClick = (id: number) => {
    setSelect(id)
    setChangeProfile(false)
  }

  return (
    <div className={styled.changeProfileContainer}>
      {urlList.map((item) => (
        <img src={require(`../../assets/profile/profile${item}.png`)} className={styled.img} alt="프로필" onClick={() => handleClick(item)} />
      ))}
    </div>
  );
};

export default MypageProfileChange;