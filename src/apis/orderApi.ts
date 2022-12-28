import axios from "axios";
import { PROXY } from "./proxy";
interface orderType {
  memberId: number;
  storeId: number;
  orderMenus: {
    id: number;
    count: number;
  }[];
}

const order = async (value: orderType, token: string) => {
  const res = await axios.post(`${PROXY}/api/guest/store/order`, value, {
    headers: {
      Authorization: token,
    },
  });

  return res;
};

const getPayment = async (userId: number, token: string) => {
  const res = await axios.get(`${PROXY}/api/guest/store/${userId}/pays`, {
    headers: {
      Authorization: token,
    },
  });

  return res;
};

const getOrderList = async (memberId: number, token: string) => {
  const res = await axios.get(`${PROXY}/api/user/orders?memberId=${memberId}`, {
    headers: {
      Authorization: token,
    },
  });

  return res;
};

export { order, getPayment, getOrderList };
