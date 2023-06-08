import {
  UserRole,
  UserStatus,
  ProductStatus,
  OrderStatus,
  ProductDateStatus,
} from "./types";

export interface UserForRegister {
  email: string;
  password: string;
  userName: string;
  fullName: string;
  avatar: string;
  phoneNumber: string;
  address: string;
  role: UserRole;
  status?: UserStatus;
  signature: string;
}

export interface User {
  email: string;
  password: string;
  userName: string;
  fullName: string;
  avatar: string;
  phoneNumber: string;
  address: string;
  role: UserRole;
  status?: UserStatus;
  userId?: string;
  signature: string;
}

export type ProductDate = {
  status: ProductDateStatus;
  time: string;
  actor: Actor;
};

export type Product = {
  productId: string;
  productName: string;
  image: string[];
  dates: ProductDate[];
  expireTime: string;
  price: string;
  amount: string;
  unit: string;
  status: ProductStatus;
  description: string;
  certificateUrl: string;
  supplier: Actor;
  qrCode: string;
};

export type ProductHistory = {
  record: Product;
  txId: string;
  timestamp: Date;
  isDelete: boolean;
};

export type Auth = {
  phoneNumber: string;
  otp: string;
  expired: Date;
};

export type Signature = {
  distributorSignature: string;
  retailerSignature: string;
};

export type ProductItem = {
  product: Product;
  quantity: string;
};

export type Actor = {
  email: string;
  userName: string;
  fullName: string;
  avatar: string;
  phoneNumber: string;
  address: string;
  role: UserRole;
  userId: string;
};

export type DeliveryStatus = {
  deliveryDate: string;
  status: OrderStatus;
  address: string;
  actor: Actor;
};

export type Order = {
  orderId: string;
  productItemList: ProductItem[];
  deliveryStatuses: DeliveryStatus[];
  signature: string[];
  status: OrderStatus;
  manufacturer: Actor;
  distributor: Actor;
  retailer: Actor;
  qrCode: string;
  createDate: string;
  updateDate: string;
  finishDate: string;
};