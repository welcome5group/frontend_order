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
  const test = {
    memberId: 1,
    storeId: 1,
    ordersId: 1,
    content: "맛있습니다~",
  };

  const res = await axios.post(`/api/user/review`, test, {
    headers: {
      Authorization: token,
      "Context-Type": "application/json",
    },
  });

  return res;
};

const testApi = async (token: string) => {
  const test = {
    memberId: 1,
    storeId: 1,
    orderMenus: [
      {
        id: 1,
        count: 5,
      },
      {
        id: 1,
        count: 3,
      },
    ],
  };

  const res = await axios.post(`/api/guest/store/order`, test, {
    headers: {
      Authorization: token,
    },
  });

  return res;
};

export { writeReview, getReview, testApi };
