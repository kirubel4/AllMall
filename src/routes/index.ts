import { Router } from "express";
import userRoutes from "./auth/user.routes";
import productRoutes from "./product/productRoutes/product.routes";
import cartRoutes from "./product/cartRoutes/cart.routes";
import orderRoutes from "./order/order.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/product", productRoutes);
router.use("/cart", cartRoutes);
router.use("/order", orderRoutes);

export default router;
