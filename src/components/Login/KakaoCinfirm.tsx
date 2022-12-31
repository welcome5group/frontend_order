import logo from '../../assets/logo.svg'
import { AiOutlineLeft } from '@react-icons/all-files/ai/AiOutlineLeft';
import { Link } from 'react-router-dom'
import styled from './Login.module.scss'

const KakaoCinfirm = () => {
  const close = () => {
    window.open('', '_self').close();
  }

  return (
    <div>
      <Link to={"/login"}>
        <AiOutlineLeft className={styled.backArrow} />
      </Link>
      <div className={styled.loginContainer}>
        <img src={logo} alt="로고" className={styled.img} />
        <div className={styled.kakaoCinfirmContainer}>
          <div className={styled.text}>어서오세요 핑거오더입니다.</div>
          <div className={styled.text}>카카오 인증이 완료되었습니다.</div>
          <button className={styled.loginBtn} onClick={() => close()}>창 닫기</button>
        </div>
      </div>
    </div >
  );
};

export default KakaoCinfirm;