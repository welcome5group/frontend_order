import React, { useState } from 'react';
import styled from './Review.module.scss'
import { AiFillStar } from 'react-icons/ai';
import { cartType } from '../../store/store';

interface types {
  item: cartType,
  // handleStarClick: (index: number) => void
}

const ReviewStarItem = ({ item }: types) => {
  const starArray = [0, 1, 2, 3, 4]

  //별점
  const [clicked, setClicked] = useState(Array(5).fill(false))

  const handleStarClick = (index: number) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
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