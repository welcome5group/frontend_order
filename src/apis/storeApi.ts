import axios from "axios";
import { PROXY } from "./proxy";
const getStore = async (storeId: number) => {
  const res = await axios.get(`${PROXY}/api/store/${storeId}/menu`);

  return res;
};

export { getStore };
