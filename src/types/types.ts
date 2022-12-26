export interface cartType {
  // id: number;
  product: menuItemTypes;
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
  reviewId: number;
  nickName: string;
  menuNames: string[];
  createdAt: string;
  content: string;
  comment: {
    content: string;
    nickName: string;
    parentId: number;
    reviewId: number;
    updatedAt: string;
  };
}

export interface myReviewType {
  id: number;
  storeName: string;
  menuNames: string[];
  createdAt: string;
  content: string;
  comment: {
    profile: string;
    createdAt: string;
    content: string;
  };
}

export interface orderType {
  orderProduct: cartType[];
  totalPrice: number;
  orderStatus: boolean;
}

export interface menuListTypes {
  categoryName: string;
  menus: {
    description: string;
    imageUrl: string;
    menuId: number;
    menuName: string;
    menuStatus: string;
    price: number;
  }[];
}

export interface menuItemTypes {
  description: string;
  imageUrl: string;
  menuId: number;
  menuName: string;
  menuStatus: string;
  price: number;
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

export interface tokenType {
  token: string;
  email: string;
  login: boolean;
}

export interface urlType {
  url: string;
}
