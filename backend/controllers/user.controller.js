import Razorpay from "razorpay";
import User from "../models/user.model.js";

export const createOrder = async (req, res) => {
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
  try {
    const { amount } = req.body;

    const order = await razorpay.orders.create({
      amount: amount,
      currency: "INR",
      receipt: `rcptid_${Date.now()}`,
      payment_capture: 1,
    });
    console.log("order>>", order);
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: "Failed to create order" });
  }
};

export const registerUser = async (req, res) => {
  const { personalInfo, educationInfo, experienceInfo, paymentInfo } = req.body;
  const {
    fullName,
    relativeName,
    email,
    phone,
    alternatePhone,
    gender,
    dateOfBirth,
    currentAddress,
    permanentAddress,
    state,
    city,
  } = personalInfo;
  const { highestQualification, course, percentage, passYear } = educationInfo;
  const {
    experience,
    company,
    experienceYears,
    skills,
    jobInterest,
    aadhaar,
    photo,
    pancard,
    resume,
  } = experienceInfo;

  try {
    const user = new User({
      personalInfo: {
        fullName,
        relativeName,
        email,
        phone,
        alternatePhone,
        gender,
        dateOfBirth,
        currentAddress,
        permanentAddress,
        state,
        city,
      },
      educationInfo: {
        highestQualification,
        course,
        percentage,
        passYear,
      },
      experienceInfo: {
        experience,
        company,
        experienceYears,
        skills,
        jobInterest,
        aadhaar,
        photo,
        pancard,
        resume,
      },
      paymentInfo,
    });
    await user.save();
    res.status(201).send({ message: "User registered and email sent." });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
