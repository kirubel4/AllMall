import { z } from "zod";

export const OrderItemSchema = z.object({
  product_id: z.string(),
  quantity: z.string(),
});
export const ReceiverInfo = z.object({
  receiver_id: z.string(),
  message: z.string(),
  receiver_phone: z.string(),
});
export const OrderSchema = z.object({
  orderInfo: z.object({
    user_id: z.string().transform((val) => BigInt(val)),
    merchant_id: z.string().transform((val) => BigInt(val)),
    shipping_address: z.string(),
    order_items: z.array(OrderItemSchema),
  }),
});

export const sendGiftSchema = z.object({
  OrderSchema,
  ReceiverInfo,
});
