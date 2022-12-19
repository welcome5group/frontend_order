import React, { useState } from 'react';
import styled from './Review.module.scss'
import { AiFillStar } from 'react-icons/ai';
import { cartType, starType } from '../../types/types';

interface types {
  item: cartType,
  starData: starType[],
  setStarData: React.Dispatch<React.SetStateAction<starType[]>>,
  // handleStarClick: (index: number) => void
}

const ReviewStarItem = ({ item, starData, setStarData }: types) => {
  const starArray = [0, 1, 2, 3, 4]
  //별점
  const [clicked, setClicked] = useState(Array(5).fill(false))

  const handleStarClick = (index: number) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);

    const idList = starData.map(item => item.id)
    //idList에 선택한 값과 맞는 값이 없다면 배열에 선택한 값 추가
    if (idList.indexOf(item.product.id) === -1) {
      const starItem = { id: item.product.id, scope: clickStates.lastIndexOf(true) + 1 }
      setStarData([...starData, starItem]);
    }
    //idList에 선택한 값이 있다면 scope 변경
    else {
      setStarData(prevState => {
        return prevState.map(obj => {
          if (obj.id === item.product.id) {
            return { ...obj, 'scope': clickStates.lastIndexOf(true) + 1 }
          } else {
            return { ...obj };
          }
        })
      })
    }
  };

  return (
    <div className={styled.starWrap}>
      <span key={item.product.id}>{item.product.name}</span>
      <span className={styled.star}>
        {starArray.map(item => (<AiFillStar key={item} onClick={() => handleStarClick(item)} className={clicked[item] && styled.clicked} />))}
      </span>
    </div>
  );
};

export default ReviewStarItem;