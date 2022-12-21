import axios from "axios";

const order = async (token: string) => {
  const test = {
    memberId: 2,
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

  const res = await axios.post(`api/guest/store/order`, test, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};

export { order };
