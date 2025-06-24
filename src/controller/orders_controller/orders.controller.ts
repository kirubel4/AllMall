import { Request, Response } from "express";
import * as orderFunctions from "../../services/customer/order/order_oprations";
import { FullProduct } from "../../types/type";
import { convertBigIntsOnly } from "../../utilites/helper";
import { sendGift } from "../../services/customer/order/order_gift/send_gift";
export const orderProductController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { orderInfo } = req.body;
  try {
    const result = await orderFunctions.orderProduct(orderInfo);
    if (!result) {
      res.status(404).json({ error: "order could not be placed try again" });
      return;
    }
    console.log("order placed succesfully", result);
    res.status(201).json({ message: "order placed succsesfully" });
  } catch (error: any) {
    console.error("error", error);
    res.status(500).json({ error: "internal server error" });
    throw error;
  }
};
export const updateOrderStatusController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { order_id, status } = req.body;
  try {
    if (!order_id || !status) {
      res.status(400).json({ error: "order_id and status are required" });
      return;
    }
    // Assuming you have a function to update the order status
    const updatedOrder = await orderFunctions.updateOrderstatus(
      order_id,
      status
    );
    if (!updatedOrder) {
      res
        .status(404)
        .json({ error: "Order not found or could not be updated" });
      return;
    }
    console.log("Order status updated successfully:", updatedOrder);
    res
      .status(200)
      .json({ message: "Order status updated successfully", updatedOrder });
  } catch (error: any) {
    console.error("Error updating order status:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getOrderByUserController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { user_id, order_type } = req.body;
  try {
    if (!user_id) {
      res.status(400).json({ error: "User ID is required" });
      return;
    }
    const orders = await orderFunctions.getOrderByUser(user_id, order_type);
    if (!orders || orders.length === 0) {
      res.status(404).json({ message: "No orders found for this user" });
      return;
    }
    console.log("Orders fetched successfully for user:", orders);
    const val = convertBigIntsOnly(orders);
    res.status(200).json({ val });
  } catch (error: any) {
    console.error("Error fetching orders by user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const sendGiftController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { orderInfo, receiver_info } = req.body;
  try {
    if (!orderInfo || !receiver_info) {
      res
        .status(400)
        .json({ error: "Order info and receiver info are required" });
      return;
    }
    await sendGift(orderInfo, receiver_info);
    res.status(201).json({ message: "Gift sent successfully" });
  } catch (error: any) {
    console.error("Error sending gift:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
