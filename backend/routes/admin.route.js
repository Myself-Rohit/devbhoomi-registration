import express from "express";
import {
  getAllUser,
  getUserById,
  removeUserById,
} from "../controllers/admin.controller.js";
const router = express.Router();
router.get("/allUser", getAllUser);
router.get("/user/:userId", getUserById);
router.get("/user/remove/:userId", removeUserById);
export default router;
