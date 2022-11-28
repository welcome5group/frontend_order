import { atom, selector } from "recoil";

export interface testType {
  id: number,
  count: number
}

export interface menuTypes {
  id: number,
  name: string,
  desc: string,
  price: string;
  scope: number;
  count: number;
  category: string;
}

export const testStore = atom<testType[]>({
  key: "testStore",
  default: []
})

export const selectItem = atom<menuTypes>({
  key: "selectItem",
  default: undefined
})

export const cartCount = selector({
  key: 'cartCount',
  get: ({ get }) => {
    const cartList = get(testStore)
    let allCount = 0
    if (cartList.length !== 0) {
      const count = cartList.map(item => item.count)
      allCount = count.reduce((acc, cur) => acc + cur)
    }
    return allCount
  }
})