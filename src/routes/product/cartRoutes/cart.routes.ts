import { Router } from "express";
import * as cartFunctionalties from "../../../controller/product_controllers/cartServices.controller";

const router = Router();
router.post("/addtocart", cartFunctionalties.addToCartController);
router.delete("/delete", cartFunctionalties.deleteCartItemController);
router.get("/:user_id", cartFunctionalties.getCartitemController);
router.get("/clear", cartFunctionalties.clearCartController);

export default router;
