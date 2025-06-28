import User from "../models/user.model.js";

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const users = await User.findById(userId);
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const removeUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    await User.findByIdAndDelete(userId);
    res.status(200).json({ message: "user deleted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
