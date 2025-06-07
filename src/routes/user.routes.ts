import { Router } from "express";
import { getUsers } from "../controller/user.controller";
import { login, signup } from "../services/auth/auth";

const router = Router();

router.get("/", getUsers);
router.post("/signup", signup);
router.post("/log", login);

export default router;
