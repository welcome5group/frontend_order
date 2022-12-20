import axios from "axios";

interface signupType {
  email: string;
  password: string;
  nickname: string;
  type: string;
}

const signUp = async (inputValue: signupType) => {
  const res = await axios.post(`api/auth/sign-up`, inputValue);

  return res;
};

const signIn = async (inputValue: signupType) => {
  const res = await axios.post(`api/auth/sign-in`, inputValue);

  return res;
};

export { signUp, signIn };
