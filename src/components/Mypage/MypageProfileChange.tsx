import React, { useState, useEffect } from 'react';
import styled from './Mypage.module.scss'
import { urlType } from '../../types/types';
import { testMode } from '../../utils/testMode';
import { changeProfileImg } from '../../apis/memberApi';
import { toastError, toastSuccess } from '../toast';
import { useNavigate } from 'react-router-dom';

interface types {
  email: string
  token: string
  setChangeProfile: React.Dispatch<React.SetStateAction<boolean>>
}

const MypageProfileChange = ({ email, token, setChangeProfile }: types) => {
  const nav = useNavigate()
  const [urlList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])

  const handleClick = async (id: number) => {
    if (!testMode) {
      try {
        const value = {
          email: email,
          profile: String(id)
        }
        const result = await changeProfileImg(value, token)

        if (result.status === 200) {
          toastSuccess('프로필 이미지가 변경되었습니다')
          setChangeProfile(false)
          nav('/')
        }
      } catch (e: any) {
        toastError(e.response.data.message)
      }
    } else {
      setChangeProfile(false)
    }
  }


  return (
    <div className={styled.changeProfileContainer}>
      {urlList.map((item) => (
        <img src={require(`../../assets/profile/profile${item}.png`)} key={item} className={styled.img} alt="프로필" onClick={() => handleClick(item)} />
      ))}
    </div>
  );
};

export default MypageProfileChange;