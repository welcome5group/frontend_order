import React, { useState } from 'react';
import { reviewData } from '../../mock/reviewData';
import styled from './Review.module.scss'
import { orderStore, reviewType } from '../../store/store';
import { useRecoilState } from 'recoil';
import { useParams } from 'react-router-dom';
import { AiOutlineUser, AiOutlineDown, AiFillStar } from 'react-icons/ai';

const Review = () => {

  const param = useParams()
  const idx = Number(param.orderId) - 1

  const [reviewList, setReviewList] = useState<reviewType[]>(reviewData)
  const [textValue, setTextValue] = useState('')
  const [orderList, setOrderList] = useRecoilState(orderStore)
  const [showMore, setShowMore] = useState(false)

  const time = () => {
    const today = new Date()

    const year = today.getFullYear()
    const month = today.getMonth() - 1
    const day = today.getDay()

    const hour = today.getHours()
    const min = today.getMinutes()
    const sec = today.getSeconds()

    return `${year}-${month}-${day} ${hour}:${min}:${sec}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value)
  }

  const handleSubmit = () => {
    const item = { id: reviewList.length + 1, time: time(), content: textValue }
    setReviewList([...reviewList, item])
  }

  //별점
  const [clicked, setClicked] = useState(Array(5).fill(false))
  const starArray = [0, 1, 2, 3, 4]

  const handleStarClick = (index: number) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  return (
    <div className={styled.reviewContainer}>
      <div className={styled.titleArea}>
        <h1 className={styled.reviewTitle}>
          리뷰
        </h1>
      </div>
      <div className={styled.alignRight}>
        <span className={styled.starTitle} onClick={() => setShowMore(!showMore)}>
          내가 주문한 메뉴 별점주기
          <AiOutlineDown className={showMore ? styled.open : styled.close} />
        </span>
        {showMore ?
          <div className={styled.starContainer}>
            {orderList[idx].orderProduct.map(item => (
              <div className={styled.starWrap}>
                <span key={item.product.id}>{item.product.name}</span>
                <span className={styled.star}>
                  {starArray.map(item => (<AiFillStar key={item} onClick={() => handleStarClick(item)} className={clicked[item] && styled.clicked} />))}
                </span>
              </div>
            ))}
          </div> : null
        }
      </div>
      <div className={styled.reviewWriteArea}>
        <textarea className={styled.reviewTextArea} onChange={handleChange} />
        <button className={styled.reivewWriteBtn} onClick={handleSubmit}>작성하기</button>
      </div>
      <div className={styled.reviewList}>
        {reviewList.map(item => (
          <div className={styled.reviewItem} key={item.id}>
            <div className={styled.userInfo}>
              <span className={styled.userImg}><AiOutlineUser /></span>
              <div className={styled.textWrap}>
                <span className={styled.userNickname}>jys9049</span>
                <span className={styled.writeTime}>{item.time}</span>
              </div>
            </div>
            <div>
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;