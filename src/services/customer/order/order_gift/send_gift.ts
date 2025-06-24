import prisma from "../../../../config/prisma";
import { giftInfo, OrderType } from "../../../../types/type";
import { orderItem } from "../../../../utilites/helper";

export const sendGift = async (
  orderInfo: OrderType,
  receiver_info: giftInfo
) => {
  try {
    if (
      !orderInfo?.user_id ||
      !receiver_info?.receiver_id ||
      !orderInfo?.order_items?.length
    ) {
      throw new Error("Sender ID, receiver ID, and product IDs are required");
    }

    const reslovedItem = await orderItem(orderInfo.order_items);

    const totalAmount = reslovedItem.reduce(
      (acc, item) => acc + item.subtotal,
      0
    );
    const result = await prisma.$transaction(async (tx) => {
      const order = await tx.orders.create({
        data: {
          customer_id: orderInfo.user_id,
          merchant_id: orderInfo.merchant_id,
          shipping_address: orderInfo.shipping_address,
          total_amount: totalAmount,
          order_type: "gift",
          order_items: {
            create: reslovedItem.map((item) => ({
              product_id: item.product_id,
              quantity: Number(item.quantity),
              unit_price: item.unit_price,
              subtotal: item.subtotal,
            })),
          },
        },
      });
      await Promise.all(
        reslovedItem.map((item) =>
          tx.products.update({
            where: { product_id: item.product_id },
            data: {
              stock_quantity: { decrement: Number(item.quantity) },
            },
          })
        )
      );
      await tx.gifts.create({
        data: {
          order_id: order.order_id,
          gift_sender_id: orderInfo.user_id,
          gift_receiver_id: receiver_info.receiver_id,
          receiver_address: orderInfo.shipping_address,
          message: receiver_info.message || "",
          receiver_phone: receiver_info.receiver_phone,
        },
      });
      return { order };
    });
    console.log("send gift succesffuly order:", result.order);
  } catch (error: any) {
    console.error("Error sending gift:", error);
    throw error;
  }
};
