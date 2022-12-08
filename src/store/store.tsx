import { atom, selector } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export interface cartType {
  // id: number,
  product: menuTypes,
  count: number
}

export interface reviewType {
  id: number,
  content: string,
}

export interface orderType {
  orderProduct: cartType[],
  totalPrice: number,
  orderStatus: boolean,
}

export interface menuTypes {
  id: number,
  name: string,
  desc: string,
  price: number;
  scope: number;
  category: string;
}

export interface tableNumTypes {
  id: string,
  storeName: string,
  tableNum: number,
}

export interface orderNumTypes {
  id: string,
  storeName: string,
}

export interface paymentType {
  id: number,
  date: string,
  storeName: string,
  menu: {
    menuName: string,
    count: number,
    price: number,
  }[],
  totalPrice: number,
}

//로그인 체크 아톰
export const loginStore = atom<boolean>({
  key: "loginStore",
  default: false,
  effects_UNSTABLE: [persistAtom],
})

//param값 저장
export const paramStore = atom<tableNumTypes>({
  key: "paramStroe",
  default: { id: '', storeName: '', tableNum: -1 },
  effects_UNSTABLE: [persistAtom],
})

//장바구니 아톰
export const cartStore = atom<cartType[]>({
  key: "cartStore",
  default: []
})

//주문내역 아톰
export const orderStore = atom<orderType[]>({
  key: 'orderStore',
  default: [],
})

//주문 개수 셀렉터
export const cartCount = selector({
  key: 'cartCount',
  get: ({ get }) => {
    const cartList = get(cartStore)
    let allCount = 0
    if (cartList.length !== 0) {
      const count = cartList.map(item => item.count)
      allCount = count.reduce((acc, cur) => acc + cur)
    }
    return allCount
  }
})