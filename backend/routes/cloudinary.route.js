import express from "express";
const router = express.Router();
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

router.post("/signature", (req, res) => {
  const timestamp = Math.round(new Date().getTime() / 1000);

  const signature = cloudinary.utils.api_sign_request(
    { timestamp, folder: "user_uploads" },
    process.env.CLOUD_API_SECRET
  );

  res.json({
    timestamp,
    signature,
    apiKey: process.env.CLOUD_API_KEY,
    cloudName: process.env.CLOUD_NAME,
    folder: "user_uploads",
  });
});

export default router;
