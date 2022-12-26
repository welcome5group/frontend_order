import axios from "axios";

interface writeType {
  memberId: number;
  storeId: number;
  content: string;
}

const writeReview = async (value: writeType, token: string) => {
  const res = await axios.post(`api/user/review`, value, {
    headers: {
      Authorization: token,
    },
  });

  return res;
};

export { writeReview };
