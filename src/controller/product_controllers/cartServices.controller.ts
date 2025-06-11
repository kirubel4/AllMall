import * as cartServices from "../../services/customer/cart/cart_oprations";
import { Request, Response } from "express";
import { convertBigIntsOnly } from "../../utilites/helper";
export const addToCartController = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log("cart info", req.body);
  const { user_id, product_id, quantity } = req.body;
  try {
    const result = await cartServices.addToCart(
      BigInt(product_id),
      Number(quantity),
      BigInt(user_id)
    );
    if (result) {
      res.status(200).json({ message: "Item added to cart successfully" });
    } else {
      res.status(400).json({ error: "Failed to add item to cart" });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Internal server error" });
  }
};
export const getCartitemController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const user_id = req.params.user_id ? BigInt(req.params.user_id) : null;
  if (!user_id) {
    return res.status(400).json({ error: "Invalid user ID" });
  }
  try {
    const cartItems = await cartServices.getCartItems(user_id);
    if (!cartItems || cartItems.length === 0) {
      return res.status(404).json({ error: "Cart is empty" });
    }
    res.status(200).json(convertBigIntsOnly(cartItems));
  } catch (error: any) {
    console.error("Error fetching cart items:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
};

export const deleteCartItemController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { cart_item_id } = req.body;
  try {
    const result = await cartServices.removeCartItem(BigInt(cart_item_id));
    if (result) {
      res.status(200).json({ message: "Item removed from cart successfully" });
    } else {
      res.status(400).json({ error: "Failed to remove item from cart" });
    }
  } catch (error: any) {
    console.error("Error removing item from cart:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
};

export const clearCartController = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { user_id } = req.body;
    if (!user_id) {
      return res.status(400).json({ error: "User ID is required" });
    }
    const result = await cartServices.clearCart(BigInt(user_id));
    if (result) {
      res.status(200).json({ message: "Cart cleared successfully" });
      return;
    }
    res.status(400).json({ error: "Failed to clear cart" });
    return;
  } catch (error: any) {
    console.error("Error clearing cart:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
    return;
  }
};
