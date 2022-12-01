import { atom, selector } from "recoil";

export interface cartType {
  // id: number,
  product: menuTypes,
  count: number
}

export interface orderType {
  orderProduct: cartType[],
  totalPrice: number,
}

export interface menuTypes {
  id: number,
  name: string,
  desc: string,
  price: number;
  scope: number;
  category: string;
}

export const cartStore = atom<cartType[]>({
  key: "cartStore",
  default: []
})

export const orderStore = atom<orderType[]>({
  key: 'orderStore',
  default: [],
})

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