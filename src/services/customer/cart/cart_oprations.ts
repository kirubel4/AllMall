import prisma from "../../../config/prisma";
import {
  checkQuntity,
  chekcexistingCart,
  getCartItemById,
} from "../../../utilites/helper";

export const addToCart = async (
  product_id: bigint,
  quantity: number,
  user_id: bigint
) => {
  try {
    if (!product_id || !quantity || !user_id) {
      throw new Error("Product ID, quantity, and user ID are required");
    }
    const fact = await checkQuntity(product_id, quantity);
    if (!fact) {
      throw new Error("Insufficient stock for the product");
    }
    var cart = await chekcexistingCart(user_id);
    if (!cart) {
      cart = await prisma.cart.create({
        data: {
          user_id: user_id,
        },
      });
    }
    const existingItem = await prisma.cartItem.findFirst({
      where: {
        cart_id: cart.cart_id,
        product_id: product_id,
      },
    });
    if (existingItem) {
      await prisma.cartItem.update({
        where: { cart_item_id: existingItem.cart_item_id },
        data: {
          quantity: { increment: quantity },
        },
      });
    } else {
      await prisma.cartItem.create({
        data: {
          cart_id: cart.cart_id,
          product_id: product_id,
          quantity: quantity,
        },
      });
    }
    console.log("added succesfully");
    return true;
  } catch (error: any | string) {
    console.error("Error adding to cart:", error);
    return false;
  }
};

export const getCartItems = async (user_id: bigint) => {
  try {
    const cartItems = await getCartItemById(user_id);
    if (!cartItems || cartItems.length === 0) {
      throw new Error("Cart is empty");
    }
    console.log("Cart items fetched successfully");
    return cartItems;
  } catch (error: any | string) {
    console.error("Error fetching cart items:", error);
    throw error;
  }
};
export const removeCartItem = async (cart_item_id: bigint) => {
  try {
    const item = await prisma.cartItem.findUnique({
      where: { cart_item_id: cart_item_id },
    });
    if (!item) {
      throw new Error("Cart item not found");
    }
    await prisma.cartItem.delete({
      where: { cart_item_id: cart_item_id },
    });
    console.log("Cart item removed successfully");
    return true;
  } catch (error: any | string) {
    console.error("Error removing cart item:", error);
    throw error;
  }
};
export const clearCart = async (user_id: bigint) => {
  try {
    const cart = await chekcexistingCart(user_id);
    if (!cart) {
      throw new Error("Cart not found");
    }
    await prisma.cartItem.deleteMany({
      where: { cart_id: cart.cart_id },
    });
    console.log("Cart cleared successfully");
    return true;
  } catch (error: any | string) {
    console.error("Error clearing cart:", error);
    throw error;
  }
};
export const updateCartItemQuantity = async (
  cart_item_id: bigint,
  quantity: number
) => {
  try {
    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero");
    }
    const item = await prisma.cartItem.findUnique({
      where: { cart_item_id: cart_item_id },
    });
    if (!item) {
      throw new Error("Cart item not found");
    }
    await prisma.cartItem.update({
      where: { cart_item_id: cart_item_id },
      data: { quantity: quantity },
    });
    console.log("Cart item quantity updated successfully");
  } catch (error: any | string) {
    console.error("Error updating cart item quantity:", error);
    throw error;
  }
};
export const getCartTotalItem = async (user_id: bigint) => {
  try {
    const cart = await chekcexistingCart(user_id);
    if (!cart) {
      return 0;
    }
    const total = await prisma.cartItem.aggregate({
      _sum: {
        quantity: true,
      },
      where: { cart_id: cart.cart_id },
    });
    return total._sum.quantity || 0;
  } catch (error: any | string) {
    console.error("Error calculating cart total:", error);
    throw error;
  }
};
export const selectedItemPrice = async (
  user_id: bigint,
  selecteditem: number[]
) => {
  try {
    if (!selecteditem || selecteditem.length === 0) {
      throw new Error("No items selected");
    }
    const cartItems = await getCartItemById(user_id);
    if (!cartItems || cartItems.length === 0) {
      throw new Error("Cart is empty");
    }
    const totalprice = cartItems.reduce((sum, item) => {
      return sum + Number(item.product.price) * item.quantity;
    }, 0);
    return totalprice;
  } catch (error: any | string) {
    console.error("Error calculating total cart price:", error);
    throw error;
  }
};

export const checkoutCart = async (user_id: bigint) => {
  try {
    const cartItems = await getCartItemById(user_id);
    if (cartItems.length === 0) {
      throw new Error("Cart is empty");
    }
    // Here you would typically process the payment and create an order
    // For simplicity, we will just clear the cart
    await clearCart(user_id);
    console.log("Checkout successful, cart cleared");
  } catch (error: any | string) {
    console.error("Error during checkout:", error);
    throw error;
  }
};
