import { Router } from "express";
import { getUsers } from "../controller/user.controller";

const router = Router();

router.get("/", getUsers);

export default router;
