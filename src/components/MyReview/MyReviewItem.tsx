import React from 'react';
import styled from './MyReview.module.scss'
import { AiOutlineUser } from 'react-icons/ai';
import { myReviewType } from '../../types/types';
import { testMode } from '../../utils/testMode';
import { deleteReview } from '../../apis/reviewApi';
import { toastError, toastSuccess } from '../toast';
import { useNavigate } from 'react-router-dom';

interface types {
  item: myReviewType
}

const MyReviewItem = ({ item }: types) => {

  const nav = useNavigate()

  const handleDelteClick = async () => {
    if (!testMode) {
      try {
        const result = await deleteReview(item.id)

        if (result.status === 200) {
          toastSuccess('리뷰가 삭제되었습니다.')
          window.location.replace(`/myReview`)
        }
      } catch (e: any) {
        toastError(e.response.data.message)
      }
    } else {
      nav('/')
    }
  }

  return (
    <div className={styled.myReviewItem}>
      <div className={styled.infoGroup}>
        <div className={styled.reviewInfoGroup}>
          <span className={styled.storeName}>{item.storeName}</span>
          <span className={styled.writeDate}>{item.createdAt}</span>
        </div>
        <div className={styled.deleteBtn}>
          <button onClick={handleDelteClick}>삭제</button>
        </div>
      </div>
      <div className={styled.orderMenuList}>
        {item.menuNames.map((item, idx) => (
          <span className={styled.orderMenuItem} key={idx}>{item}</span>
        ))}
      </div>
      <div className={styled.userReview}>
        <span>{item.content}</span>
      </div>
      {Object.keys(item.comment).length !== 0 &&
        <div className={styled.presidentReview}>
          <AiOutlineUser />
          <div className={styled.presidentReviewInfo}>
            <div className={styled.presidentInfo}>
              <span className={styled.presidnetName}>사장님</span>
              <span className={styled.writeDate}>{item.comment.createdAt}</span>
            </div>
            <div className={styled.presidentReviewContent}>{item.comment.content}</div>
          </div>
        </div>
      }
    </div>
  );
};

export default MyReviewItem;