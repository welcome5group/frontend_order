import React, { useState } from 'react';
import styled from './Review.module.scss'
import { AiOutlineUser } from '@react-icons/all-files/ai/AiOutlineUser';
import { BsThreeDots } from '@react-icons/all-files/bs/BsThreeDots';
import { reviewType, userType } from '../../types/types';
import { testMode } from '../../utils/testMode';
import { deleteReview } from '../../apis/reviewApi';
import { useRecoilState } from 'recoil';
import { tokenStore, userStore } from '../../store/store';
import { toastError, toastSuccess } from '../toast';
import { useNavigate, useParams } from 'react-router-dom';

interface types {
  item: reviewType
}

const ReviewItem = ({ item }: types) => {

  const param = useParams()
  const nav = useNavigate()

  const [showOption, setShowOption] = useState<Boolean>(false)
  const [userInfo] = useRecoilState<userType>(userStore)
  const userWriteTime = item?.createdAt.split('T')[0] + " " + item?.createdAt.split('T')[1].slice(0, 8)
  const storeWriteTime = item.comment !== null ? item?.comment?.updatedAt.split('T')[0] + " " + item?.comment?.updatedAt.split('T')[1].slice(0, 8) : null

  console.log(item)

  const handleDelteClick = async () => {
    if (!testMode) {
      try {
        const result = await deleteReview(item.reviewId)

        if (result.status === 200) {
          toastSuccess('리뷰가 삭제되었습니다.')
          window.location.replace(`/review/${param.storeId}`)
        }
      } catch (e: any) {
        toastError(e.response.data.message)
      }
    } else {
      nav('/')
    }
  }

  return (
    <div className={styled.reviewItem} key={item.reviewId}>
      <div className={styled.userWrap}>
        <div className={styled.userInfo}>
          <span className={styled.userImg}>
            <img src={require(`../../assets/profile/profile${userInfo.profile === null || undefined ? 1 : userInfo.profile}.png`)} alt={"프로필"} className={styled.profile} />
          </span>
          <div className={styled.textWrap}>
            <span className={styled.userNickname}>{item.nickName}</span>
            <span className={styled.writeTime}>{userWriteTime}</span>
          </div>
        </div>
        {item.nickName === userInfo.nickName &&
          <div className={styled.option}>
            <BsThreeDots onClick={() => setShowOption(!showOption)} />
            {showOption &&
              <div className={styled.deleteBtn} onClick={handleDelteClick}>삭제</div>
            }
          </div>
        }
      </div>
      <div className={styled.orderMenuList}>
        {item.menuNames.map((item, idx) => (
          <span className={styled.orderMenuItem} key={idx}>{item}</span>
        ))}
      </div>
      <div className={styled.reviewContent}>
        {item.content}
      </div>
      {item.comment !== null &&
        <div className={styled.presidentReview}>
          <AiOutlineUser />
          <div className={styled.presidentReviewInfo}>
            <div className={styled.presidentInfo}>
              <span className={styled.presidnetName}>사장님</span>
              <span className={styled.writeDate}>{storeWriteTime}</span>
            </div>
            <div className={styled.presidentReviewContent}>{item.comment.content}</div>
          </div>
        </div>
      }
    </div>
  );
};

export default ReviewItem;