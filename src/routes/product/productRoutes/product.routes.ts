import { Router } from "express";
import * as productFunctionalities from "../../../controller/product_controllers/getProducts.controller";

const router = Router();
router.get("/all", productFunctionalities.getAllProducts);
router.get("/:id", productFunctionalities.getSingleProduct);
router.get("/category", productFunctionalities.getProductsByCategory);
router.get("/store", productFunctionalities.getProductsByStore);

export default router;

//order/getorder
