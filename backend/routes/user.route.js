import express from "express";
import {
  createOrder,
  registerUser,
  updateUser,
} from "../controllers/user.controller.js";
const router = express.Router();

router.post("/register", registerUser);
router.patch("/update", updateUser);
router.post("/create-order", createOrder);
export default router;
