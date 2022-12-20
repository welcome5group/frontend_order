import axios from "axios";

interface signupType {
  email: string;
  password: string;
  nickname: string;
  type: string;
}

interface signInType {
  email: string;
  password: string;
  type: string;
}

interface findPasswordType {
  email: string;
}

const signUp = async (inputValue: signupType) => {
  const res = await axios.post(`api/auth/sign-up`, inputValue);

  return res;
};

const signIn = async (inputValue: signInType) => {
  const res = await axios.post(`api/auth/sign-in`, inputValue);

  return res;
};

const findPassword = async (inputValue: findPasswordType) => {
  const res = await axios.post(`api/users/password`, inputValue);

  return res;
};

export { signUp, signIn, findPassword };
