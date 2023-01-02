import React, { useState } from 'react';
import styled from './Menu.module.scss'
import { AiOutlineDown } from '@react-icons/all-files/ai/AiOutlineDown';
import { cartType, menuItemTypes, tokenType } from '../../types/types';
import { useRecoilState } from 'recoil';
import { cartStore } from '../../store/store';
import { toastError } from '../toast';
import { useNavigate } from 'react-router-dom';

interface types {
  item: menuItemTypes;
  inputValue: string;
  tokenInfo: tokenType;
}

const MenuItem = ({ item, tokenInfo, inputValue }: types) => {

  const nav = useNavigate()
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [cartList, setCartList] = useRecoilState<cartType[]>(cartStore)

  //메뉴 클릭 시 장바구니로 데이터 넣는 기능
  const handleOrderClick = (id: number) => {
    if (tokenInfo.login === true) {
      const idList = cartList.map(item => item.product.menuId)
      //idList에 선택한 값과 맞는 값이 없다면 배열에 선택한 값 추가
      if (idList.indexOf(id) === -1) {
        const data = { product: item, count: 1 };
        setCartList([...cartList, data]);
      }
      //idList에 선택한 값이 있다면 카운트만 + 1
      else {
        setCartList(prevState => {
          return prevState.map(obj => {
            if (obj.product.menuId === id) {
              return { ...obj, 'count': obj.count + 1 }
            } else {
              return { ...obj };
            }
          })
        })
      }
    } else {
      toastError('로그인이 필요한 기능입니다.')
      nav('/login')
    }
  }

  return (
    <>
      {
        item.menuName.replace(" ", "").toLocaleLowerCase().includes(inputValue.toLocaleLowerCase().replace(" ", "")) &&
        <div className={styled.menuItem}>
          <div className={styled.menuImg}>
            <img src={require(`../../assets/coffee/${item.imageUrl}.jpg`)} alt="이미지" />
          </div>
          <div className={styled.iteminfoWrap}>
            <span className={styled.itemName}>{item.menuName}</span>
            <span className={showDetail ? `${styled.itemDesc} ${styled.showDetail}` : styled.itemDesc}>{item.description}</span>
            <span className={styled.itemPrice}>{item.price.toLocaleString()}원</span>
            {showDetail &&
              <button className={styled.orderBtn} onClick={() => handleOrderClick(item.menuId)}>주문하기</button>
            }
          </div>
          <div onClick={() => setShowDetail(!showDetail)}><AiOutlineDown className={showDetail ? styled.open : styled.close} /></div>
        </div>
      }
    </>
  );
};

export default MenuItem;