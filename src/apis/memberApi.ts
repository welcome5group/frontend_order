import axios from "axios";

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

interface changeNickNameType {
  email: string;
  nickName: string;
  type: string;
}

//회원가입 API
const signUp = async (inputValue: signupType) => {
  const res = await axios.post(`api/auth/sign-up`, inputValue);

  return res;
};

//회원가입 인증 API
const signCheck = async (uuid: string) => {
  const res = await axios.put(`api/auth/sign-up?uuid=${uuid}`);

  return res;
};

//로그인 API
const signIn = async (inputValue: signInType) => {
  const res = await axios.post(`api/auth/sign-in`, inputValue);

  return res;
};

//비밀번호 찾기 API
const findPassword = async (inputValue: string) => {
  const res = await axios.post(`api/users/password`, inputValue);

  return res;
};

//유저 정보 조회 API
const getUser = async (token: string, email: string) => {
  console.log(token);
  const res = await axios.get(`api/users?email=${email}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};

//닉네임 변경 API
const changeNickName = async (token: string, data: changeNickNameType) => {
  const res = await axios.put(`api/users`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};

export { signUp, signCheck, signIn, findPassword, getUser, changeNickName };
