import jwt from "jsonwebtoken";

const generateToken = (adminId) => {
  const token = jwt.sign({ _id: adminId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  return token;
};

export default generateToken;
