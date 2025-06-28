// import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";
import Admin from "../models/admin.model.js";
export const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields required!" });
    }

    const isUser = await Admin.findOne({ email });
    if (isUser) {
      return res.status(400).json({ message: "email already exist" });
    }

    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);

    const newAdmin = new Admin({
      email,
      password,
    });
    await newAdmin.save();
    const token = generateToken(res, newAdmin._id);
    res
      .cookie("access_token", token, { secure: true, httpOnly: true })
      .status(201)
      .json({ data: newAdmin, message: "Signup Successful!" });
  } catch (error) {
    res.status(400).json({ message: error?.message });
  }
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields required!" });
    }
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // const validPassword = await bcrypt.compare(password, Adminpassword || "");
    // if (!validPassword) {
    //   return res.status(400).json({ message: "Invalid credentials" });
    // }
    const token = generateToken(admin._id);
    res
      .cookie("access_token", token, { secure: true, httpOnly: true })
      .status(200)
      .json({ data: admin, message: "Signin Successful!" });
  } catch (error) {
    res.status(400).json({ message: error?.message });
  }
};

export const logout = async (req, res) => {
  try {
    res
      .cookie("access_token", null, { expiresIn: Date.now() })
      .status(200)
      .json({ message: "Logout successful!" });
  } catch (error) {
    res.status(400).json({ message: error?.message });
  }
};
