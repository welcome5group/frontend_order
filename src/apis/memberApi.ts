import axios from "axios";
import { PROXY } from "./proxy";
interface signupType {
  email: string;
  password: string;
  nickName: string;
  type: string;
}

interface signInType {
  email: string;
  password: string;
  type: string;
}

interface withDrawType {
  email: string;
  password: string;
}

interface findPasswordType {
  email: string;
  type: string;
}

interface changeNickNameType {
  email: string;
  nickName: string;
  type: string;
}

interface changeProfileType {
  email: string;
  profile: string;
}

//회원가입 API
const signUp = async (inputValue: signupType) => {
  const res = await axios.post(`${PROXY}/api/auth/sign-up`, inputValue);

  return res;
};

//회원가입 인증 API
const signCheck = async (uuid: string) => {
  const res = await axios.put(`${PROXY}/api/auth/sign-up?uuid=${uuid}`);

  return res;
};

//로그인 API
const signIn = async (inputValue: signInType) => {
  const res = await axios.post(`${PROXY}/api/auth/sign-in`, inputValue);

  return res;
};

const withDraw = async (data: withDrawType, token: string) => {
  const res = await axios.post(`${PROXY}/api/users/delete`, data, {
    headers: {
      Authorization: token,
    },
  });

  return res;
};

const kakaoSignIn = async () => {
  const res = await axios.get(`${PROXY}/api/auth/kakao/sign-in?type=MEMBER`);

  return res;
};

//비밀번호 찾기 API
const findPassword = async (inputValue: findPasswordType, token: string) => {
  const res = await axios.post(`${PROXY}/api/auth/password`, inputValue, {
    headers: {
      Authorization: token,
    },
  });

  return res;
};

//비밀번호 변경 API
const changePassword = async (uuid: string, password: string) => {
  const newPassword = { password: password };
  const res = await axios.put(
    `${PROXY}/api/auth/resetPassword?uuid=${uuid}`,
    newPassword
  );

  return res;
};

//유저 정보 조회 API
const getUser = async (token: string, email: string) => {
  const res = await axios.get(`${PROXY}/api/users?email=${email}`, {
    headers: {
      Authorization: token,
    },
  });

  return res;
};

//닉네임 변경 API
const changeNickName = async (token: string, data: changeNickNameType) => {
  const res = await axios.put(`${PROXY}/api/users/edit/nickname`, data, {
    headers: {
      Authorization: token,
    },
  });

  return res;
};

const getMyReview = async (memberId: number, token: string) => {
  const res = await axios.get(`${PROXY}/api/user/review/${memberId}`, {
    headers: {
      Authorization: token,
    },
  });

  return res;
};

const changeProfileImg = async (value: changeProfileType, token: string) => {
  const res = await axios.put(`${PROXY}/api/users/edit/profile`, value, {
    headers: {
      Authorization: token,
    },
  });

  return res;
};

export {
  signUp,
  signCheck,
  signIn,
  withDraw,
  findPassword,
  getUser,
  changeNickName,
  changePassword,
  kakaoSignIn,
  getMyReview,
  changeProfileImg,
};
