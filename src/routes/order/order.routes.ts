import { Router } from "express";
import * as orderController from "../../controller/orders_controller/orders.controller";
import { validateData } from "../../validation/zod.validation";
import { OrderSchema } from "../../validation/zod.schema";
const router = Router();

router.post(
  "/placeorder",
  validateData(OrderSchema),
  orderController.orderProductController
);
router.post("/updateorderstatus", orderController.updateOrderStatusController);
router.get("/getorder", orderController.getOrderByUserController);
router.post("/sendgift", orderController.sendGiftController);
export default router;
