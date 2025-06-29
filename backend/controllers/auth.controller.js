import generateToken from "../utils/generateToken.js";
import Admin from "../models/admin.model.js";

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields required!" });
    }
    if (
      email !== "devbhoomiglobalservices@gmail.com" ||
      password !== "Devbhoomi@18112023"
    ) {
      return res.status(400).json({ message: "Invalid Admin Credential" });
    }
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: "Admin not found" });
    }
    const token = generateToken(admin._id);
    const { password: pass, ...rest } = admin._doc;
    res
      .cookie("access_token", token, { secure: true, httpOnly: true })
      .status(200)
      .json({ data: rest, message: "Signin Successful!" });
  } catch (error) {
    res.status(400).json({ message: error?.message });
  }
};
