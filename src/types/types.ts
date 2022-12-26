export interface cartType {
  // id: number,
  product: menuTypes;
  count: number;
}

export interface userType {
  createdAt: string;
  email: string;
  id: number;
  memberType: string;
  nickName: string;
  profile: number | null;
  status: string;
  updatedAt: string;
}

export interface reviewType {
  id: number;
  orderMenu: string[];
  userInfo: userType;
  time: string;
  content: string;
  presidentContent: {
    time: string;
    content: string;
  };
}

export interface myReviewType {
  id: number;
  storeName: string;
  orderMenu: string[];
  userInfo: userType;
  time: string;
  content: string;
  presidentContent: {
    time: string;
    content: string;
  };
}

export interface orderType {
  orderProduct: cartType[];
  totalPrice: number;
  orderStatus: boolean;
}

export interface menuTypes {
  id: number;
  name: string;
  desc: string;
  price: number;
  scope: number;
  category: string;
}

export interface tableNumTypes {
  id: string;
  storeName: string;
  tableNum: number;
}

export interface orderNumTypes {
  id: string;
  storeName: string;
}

export interface paymentType {
  id: number;
  createdAt: string;
  store: {
    storeId: number;
    name: string;
    location: string;
  };
  orderMenus: {
    count: number;
    id: number;
    menu: {
      categoryName: string;
      description: string;
      imageUrl: string;
      menuId: number;
      name: string;
      price: number;
      storeId: number;
    };
    totalPrice: number;
  }[];
  totalPrice: number;
}

export interface loginType {
  token: string;
  email: string;
  login: boolean;
}

export interface urlType {
  url: string;
}
