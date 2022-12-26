import axios from "axios";

const order = async (token: string) => {
  const test = {
    memberId: 1,
    storeId: 1,
    orderMenus: [
      {
        id: 1,
        count: 5,
      },
      {
        id: 2,
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

const getPayment = async (token: string) => {
  const res = await axios.get(`/api/guest/store/1/pays`, {
    headers: {
      Authorization: token,
    },
  });

  return res;
};

export { order, getPayment };
