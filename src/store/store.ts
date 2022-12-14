import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import {
  cartType,
  tokenType,
  orderType,
  paramType,
  userType,
} from "../types/types";
const { persistAtom } = recoilPersist();

//토큰 정보 아톰
export const tokenStore = atom<tokenType>({
  key: "tokenStore",
  default: { token: "", email: "", login: false },
  effects_UNSTABLE: [persistAtom],
});

//param값 저장
export const paramStore = atom<paramType>({
  key: "paramStroe",
  default: { id: "-1", storeName: "-1", tableNum: -1 },
  effects_UNSTABLE: [persistAtom],
});

//유저 정보 저장 아톰
export const userStore = atom<userType>({
  key: "userStore",
  default: {
    createdAt: "",
    email: "",
    id: null,
    memberType: "MEMBER",
    nickName: "",
    profile: null,
    status: "ACTIVATE",
    updatedAt: "",
  },
  effects_UNSTABLE: [persistAtom],
});

//장바구니 아톰
export const cartStore = atom<cartType[]>({
  key: "cartStore",
  default: [],
});

//주문내역 아톰
export const orderStore = atom<orderType[]>({
  key: "orderStore",
  default: [],
});

//주문 개수 셀렉터
export const cartCount = selector({
  key: "cartCount",
  get: ({ get }) => {
    const cartList = get(cartStore);
    let allCount = 0;
    if (cartList.length !== 0) {
      const count = cartList.map((item) => item.count);
      allCount = count.reduce((acc, cur) => acc + cur);
    }
    return allCount;
  },
});
