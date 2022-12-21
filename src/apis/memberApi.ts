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

const signUp = async (inputValue: signupType) => {
  const res = await axios.post(`api/auth/sign-up`, inputValue);

  return res;
};

const signIn = async (inputValue: signInType) => {
  const res = await axios.post(`api/auth/sign-in`, inputValue);

  return res;
};

const findPassword = async (inputValue: string) => {
  const res = await axios.post(`api/users/password`, inputValue);

  return res;
};

const getUser = async (token: string, email: string) => {
  console.log(token);
  const res = await axios.get(`api/users?email=${email}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};

export { signUp, signIn, findPassword, getUser };
