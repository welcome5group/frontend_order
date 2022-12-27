import axios from "axios";

interface orderType {
  memberId: number;
  storeId: number;
  orderMenus: {
    id: number;
    count: number;
  }[];
}

const order = async (value: orderType, token: string) => {
  const res = await axios.post(`/api/guest/store/order`, value, {
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
