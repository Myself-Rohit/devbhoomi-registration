import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    personalInfo: {
      fullName: {
        type: String,
        required: true,
      },
      relativeName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: Number,
        required: true,
      },

      alternatePhone: {
        type: String,
        required: true,
      },
      dateOfBirth: {
        type: String,
        required: true,
      },
      gender: {
        type: String,
        enum: ["male", "female", "other"],
        required: true,
      },
      currentAddress: {
        type: String,
        required: true,
      },
      permanentAddress: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
    },
    educationInfo: {
      highestQualification: {
        type: String,
        required: true,
      },
      course: {
        type: String,
        required: true,
      },
      percentage: {
        type: String,
        required: true,
      },
      passYear: {
        type: String,
        required: true,
      },
    },
    experienceInfo: {
      experience: {
        type: String,
        required: true,
      },
      company: {
        type: String,
      },
      experienceYears: {
        type: String,
        required: true,
      },
      skills: {
        type: String,
        required: true,
      },
      aadhaar: {
        type: String,
        required: true,
      },
      photo: {
        type: String,
        required: true,
      },
      resume: {
        type: String,
        required: true,
      },
      pancard: {
        type: String,
        required: true,
      },
    },
    paymentInfo: {
      amount: {
        type: String,
        required: true,
        default: 1,
      },
      status: {
        type: String,
        enum: ["pending", "completed"],
      },
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;
