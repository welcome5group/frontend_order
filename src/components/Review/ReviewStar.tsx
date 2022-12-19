import React, { useState } from 'react';
import styled from './Review.module.scss'
import { AiOutlineDown } from 'react-icons/ai';
import { useRecoilState } from 'recoil';
import { orderStore } from '../../store/store';
import { useParams } from 'react-router-dom';
import ReviewStarItem from './ReviewStarItem';
import { starType } from '../../types/types';

interface types {
  starData: starType[],
  setStarData: React.Dispatch<React.SetStateAction<starType[]>>
}

const ReviewStar = ({ starData, setStarData }: types) => {
  const param = useParams()
  const idx = Number(param.orderId) - 1

  const [orderList] = useRecoilState(orderStore)
  const [showMore, setShowMore] = useState(false)

  return (
    <div className={styled.alignRight}>
      <span className={styled.starTitle} onClick={() => setShowMore(!showMore)}>
        내가 주문한 메뉴 별점주기
        <AiOutlineDown className={showMore ? styled.open : styled.close} />
      </span>
      {showMore ?
        <>
          <div className={styled.starContainer}>
            {orderList[idx].orderProduct.map((item, idx) => (
              <ReviewStarItem item={item} starData={starData} setStarData={setStarData} key={idx} />
            ))}
          </div>
        </> : null
      }
    </div>
  );
};

export default ReviewStar;