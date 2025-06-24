import prisma from "../config/prisma";
import {
  FullProduct,
  FullProductSerilizer,
  OrderItem,
  User,
} from "../types/type";

export const CreateUser = async (data: User) => {
  try {
    const newUser = await prisma.users.create({
      data,
    });
    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const GetUserByEmail = async (email: string) => {
  try {
    const user = await prisma.users.findUnique({
      where: { email },
    });
    return user;
  } catch (error) {
    console.error("Error fetching user by email:", error);
    throw error;
  }
};

export const chekcCartexisting = async (id: number) => {
  const existingCart = await prisma.cart.findFirst({
    where: { user_id: id },
  });
  if (existingCart) return existingCart;
  return null;
};
export const chekcexistingCart = async (id: bigint) => {
  const existingCart = await prisma.cart.findFirst({
    where: { user_id: id },
  });
  if (existingCart) return existingCart;
  return null;
};

export const getCartItemById = async (user_id: bigint) => {
  try {
    const cart = await chekcexistingCart(user_id);
    if (!cart) {
      return [];
    }
    const cartItems = await prisma.cartItem.findMany({
      where: { cart_id: cart.cart_id },
      include: { product: true },
    });
    return cartItems;
  } catch (error) {
    console.error("Error fetching cart items:", error);
    throw error;
  }
};
export function convertBigIntsOnly(obj: any): any {
  if (Array.isArray(obj)) return obj.map(convertBigIntsOnly);
  if (obj && typeof obj === "object") {
    return Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [k, convertBigIntsOnly(v)])
    );
  }
  return typeof obj === "bigint" ? obj.toString() : obj;
}
export const serilizeProduct = (products: FullProductSerilizer[]) => {
  return products.map((product) =>
    convertBigIntsOnly({
      ...product,
      product_id: product.product_id?.toString(),
      merchant_id: product.merchant_id?.toString(),
      category_id: product.category_id?.toString(),
      reviews: product.reviews.map((review) => ({
        ...review,
        review_id: review.review_id?.toString(),
        user_id: review.customer_id?.toString(),
      })),
      product_images: product.product_images
        ? [
            {
              ...product.product_images,
              image_id: product.product_images.image_id?.toString(),
            },
          ]
        : [],
    })
  );
};
export const checkQuntity = async (product_id: bigint, quantity: number) => {
  return await prisma.products
    .findUnique({
      where: { product_id: product_id },
      select: { stock_quantity: true },
    })
    .then((product) => {
      if (!product) {
        return false;
      }
      if (product.stock_quantity < quantity) {
        return false;
      }
      return true;
    });
};
export const orderItem = async (orderItems: OrderItem[]) => {
  try {
    const resolvedItems = await Promise.all(
      orderItems.map(async (item) => {
        const product = await prisma.products.findUnique({
          where: { product_id: item.product_id },
        });
        if (!product) {
          throw new Error(`Product with ID ${item.product_id} not found`);
        }
        const unit_price = product.price;
        const subtotal = Number(unit_price) * Number(item.quantity);
        return {
          product_id: item.product_id,
          quantity: item.quantity,
          unit_price,
          subtotal,
        };
      })
    );
    return resolvedItems;
  } catch (error: any) {
    console.error("Error in orderItem function:", error);
    throw error;
  }
};
