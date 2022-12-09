import axios from "axios";

interface signupType {
  email: string;
  password: string;
  nickname: string;
  type: string;
}

const data = {
  email: "jys9049@naver.com",
  password: "jys9049",
  nickName: "jys9049",
  type: "member",
};

const signup = async (inputValue: signupType) => {
  const res = await axios.post(`/api/auth/sign-up`, inputValue);

  return res;
};

export { signup };
