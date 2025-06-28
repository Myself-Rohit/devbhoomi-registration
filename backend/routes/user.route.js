import express from "express";
import { createOrder, registerUser } from "../controllers/user.controller.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/create-order", createOrder);
export default router;
