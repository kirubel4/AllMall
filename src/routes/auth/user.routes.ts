import { Router } from "express";

import { login, signup } from "../../services/customer/auth/auth";
import { getUsers } from "../../controller/auth_controllers/user.controller";

const router = Router();

router.get("/", getUsers);
router.post("/signup", signup);
router.post("/log", login);

export default router;
