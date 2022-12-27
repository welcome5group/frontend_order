import axios from "axios";

interface writeType {
  memberId: number;
  storeId: number;
  content: string;
}

const getReview = async (storeId: number, token: string) => {
  const res = await axios.get(`/api/store/${storeId}/review`);

  return res;
};

const writeReview = async (value: writeType, token: string) => {
  const res = await axios.post(`/api/user/review`, value, {
    headers: {
      Authorization: token,
    },
  });

  return res;
};

const deleteReview = async (id: number) => {
  const res = await axios.delete(`/api/user/review?reviewId=${id}`);

  return res;
};

export { writeReview, getReview, deleteReview };
