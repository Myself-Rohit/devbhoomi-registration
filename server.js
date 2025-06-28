import express from "express";
import mongoose from "mongoose";
import path from "path";
import cors from "cors";
import userRouter from "./backend/routes/user.route.js";
import authRouter from "./backend/routes/auth.route.js";
import adminRouter from "./backend/routes/admin.route.js";
import cloudinaryRoute from "./backend/routes/cloudinary.route.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5001;
const __dirname = path.resolve();

app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/auth", authRouter);
app.use("/api/cloudinary", cloudinaryRoute);

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(port, () => console.log(`Server running on ${process.env.PORT}`))
  )
  .catch((err) => console.error(err));
