import { Prisma, UserType } from "@prisma/client";

export type FullProduct = Prisma.productsGetPayload<{
  include: { product_images: true };
}>;
export type FullProductSerilizer = Prisma.productsGetPayload<{
  include: { reviews: true; product_images: true };
}>;
export type userDetail = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone_number: string;
  address: string;
  user_type?: UserType;
};

export type User = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone_number: string;
  address: string;
  user_type?: UserType;
};

export type OrderItem = {
  product_id: bigint;
  quantity: Number;
};
export const productType = {};
export type OrderType = {
  user_id: bigint;
  merchant_id: bigint;
  shipping_address: string;
  order_items: OrderItem[];
};

export type giftInfo = {
  receiver_id: bigint;
  message: string;
  receiver_phone: string;
};
export type loginUserType = {
  email: string;
  password: string;
};
