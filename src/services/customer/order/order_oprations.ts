import prisma from "../../../config/prisma";
import { OrderItem, OrderType } from "../../../types/type";
import { orderItem } from "../../../utilites/helper";
import { status, orderType } from "@prisma/client";
export const orderProduct = async (orderInfo: OrderType) => {
  try {
    if (
      !orderInfo.user_id ||
      !orderInfo.merchant_id ||
      !orderInfo.order_items ||
      !orderInfo.shipping_address
    ) {
      throw new Error("All fields are required");
    }
    const resolvedItems = await orderItem(orderInfo.order_items);
    const total_amount = resolvedItems.reduce(
      (acc, item) => acc + item.subtotal,
      0
    );
    if (total_amount <= 0) {
      throw new Error("Total amount must be greater than zero");
    }
    const result = await prisma.$transaction(async (tx) => {
      const ordering = await tx.orders.create({
        data: {
          customer_id: orderInfo.user_id,
          merchant_id: orderInfo.merchant_id,
          shipping_address: orderInfo.shipping_address,
          total_amount,
          order_items: {
            create: resolvedItems.map((item) => ({
              product_id: item.product_id,
              quantity: Number(item.quantity),
              unit_price: item.unit_price,
              subtotal: item.subtotal,
            })),
          },
        },
      });
      await Promise.all(
        resolvedItems.map((item) =>
          tx.products.update({
            where: { product_id: item.product_id },
            data: {
              stock_quantity: { decrement: Number(item.quantity) },
            },
          })
        )
      );

      return { ordering };
    });

    console.log("Order product created successfully:", result.ordering);
    return result.ordering;
  } catch (error: any | string) {
    console.error("Error creating order product:", error);
    throw error;
  }
};
export const getOrderByUser = async (
  user_id: bigint,
  order_type: orderType
) => {
  try {
    if (!user_id) {
      throw new Error("User ID is required");
    }
    const orders = await prisma.orders.findMany({
      where: { customer_id: user_id, order_type: order_type },
      include: {
        order_items: true,
        merchants: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    if (!orders || orders.length === 0) {
      console.log("No orders found for user:", user_id);
      return [];
    }
    console.log("Orders fetched successfully for user-id:", user_id);
    return orders;
  } catch (error: any | string) {
    console.error("Error fetching orders by user:", error);
    throw error;
  }
};

export const updateOrderstatus = async (order_id: bigint, status: status) => {
  try {
    if (!order_id) {
      throw new Error("id not found");
    }

    const result = await prisma.$transaction(async (tx) => {
      const updateOrder = await tx.orders.update({
        where: { order_id: order_id },
        data: {
          order_status: status,
        },
      });
      if (status === "cancelled") {
        const orderItems = await tx.orders.findUnique({
          where: { order_id: order_id },
          select: {
            order_items: {
              select: {
                product_id: true,
                quantity: true,
              },
            },
          },
        });
        if (orderItems?.order_items?.length) {
          await Promise.all(
            orderItems.order_items.map((item) =>
              tx.products.update({
                where: { product_id: item.product_id },
                data: {
                  stock_quantity: {
                    increment: item.quantity,
                  },
                },
              })
            )
          );
        }
      }
      return updateOrder;
    });

    if (result) console.log("order set to", status, "sucssesfully");
    return true;
  } catch (error: any | string) {
    console.error("Error completing order:", error);
    return false;
  }
};
