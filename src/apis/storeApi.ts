import axios from "axios";

const getStore = async (storeId: number) => {
  const res = await axios.get(`/api/store/${storeId}/menu`);

  return res;
};

export { getStore };
