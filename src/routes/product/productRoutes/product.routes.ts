import { Router } from "express";
import {
  getAllProducts,
  getSingleProduct,
} from "../../../controller/product_controllers/getProducts.controller";

const router = Router();
router.get("/all", getAllProducts);
router.get("/:id", getSingleProduct);

export default router;
