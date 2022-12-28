import axios from "axios";
import { PROXY } from "./proxy";
interface writeType {
  memberId: number;
  storeId: number;
  content: string;
}

const getReview = async (storeId: number) => {
  const res = await axios.get(`${PROXY}/api/store/${storeId}/review`);

  return res;
};

const writeReview = async (value: writeType, token: string) => {
  const res = await axios.post(`${PROXY}/api/user/review`, value, {
    headers: {
      Authorization: token,
    },
  });

  return res;
};

const deleteReview = async (id: number) => {
  const res = await axios.delete(`${PROXY}/api/user/review/${id}`);

  return res;
};

export { writeReview, getReview, deleteReview };
