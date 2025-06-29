import { useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import PersonalInfoStep from "./PersonalInfoStep";
import PaymentStep from "./PaymentStep";
import EducationInfoStep from "./EducationInfoStep";
import ExperienceInfoStep from "./ExperienceInfoStep";
import TermsAndCondition from "./TermsAndCondition";

export default function RegistrationForm({ onRegistrationComplete }) {
  const [currentStep, setCurrentStep] = useState(3);
  const [isAgree, setIsAgree] = useState(false);
  const [formData, setFormData] = useState({
    personalInfo: {},
    educationInfo: {},
    experienceInfo: {},
  });
  const [errors, setErrors] = useState({});

  const steps = [
    { id: 1, title: "Personal Details" },
    { id: 2, title: "Education Details" },
    { id: 3, title: "Experience Details" },
    { title: "Payment" },
  ];

  const handleInputChange = (step, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [step]: {
        ...prev[step],
        [field]: value,
      },
    }));

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    if (step === 1) {
      const { personalInfo } = formData;
      if (!personalInfo.fullName) newErrors.fullName = "Full name is required";
      if (!personalInfo.relativeName)
        newErrors.relativeName = "Father/Husband name is required";
      if (!personalInfo.email) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(personalInfo.email))
        newErrors.email = "Email is invalid";
      if (!personalInfo.phone) newErrors.phone = "Phone number is required";
      if (!personalInfo.alternatePhone)
        newErrors.alternatePhone = "Alternate phone number is required";
      if (!personalInfo.dateOfBirth)
        newErrors.dateOfBirth = "Date of birth is required";
      if (!personalInfo.gender) newErrors.gender = "Gender is required";
      if (!personalInfo.currentAddress)
        newErrors.currentAddress = "Address is required";
      if (!personalInfo.permanentAddress)
        newErrors.permanentAddress = "Permanent Address is required";
      if (!personalInfo.state) newErrors.state = "State is required";
      if (!personalInfo.city) newErrors.city = "City is required";
    }

    if (step === 2) {
      const { educationInfo } = formData;
      if (!educationInfo.highestQualification)
        newErrors.highestQualification = "Highest Qualification is required";

      if (!educationInfo.course)
        newErrors.course = `${
          educationInfo?.highestQualification || ""
        } course is required`;
      if (!educationInfo.percentage)
        newErrors.percentage = `${
          educationInfo?.highestQualification || ""
        } percentage is required`;
      if (!educationInfo.passYear)
        newErrors.passYear = `${
          educationInfo?.highestQualification || ""
        } passing year is required`;
    }

    if (step === 3) {
      const { experienceInfo } = formData;
      if (!experienceInfo.experience)
        newErrors.experience = "Your experience is required";
      if (!experienceInfo.skills) newErrors.skills = "Skills is required";
      if (!experienceInfo.company) newErrors.company = "Company is required";
      if (!experienceInfo.experienceYears)
        newErrors.experienceYears = "Years of experience is required";
      if (!experienceInfo.jobInterest)
        newErrors.jobInterest = "Interested job role is required";
      if (!experienceInfo.aadhaar) newErrors.aadhaar = "Aadhaar is required";
      if (!experienceInfo.photo) newErrors.photo = "Photo is required";
      if (!experienceInfo.resume) newErrors.resume = "Resume is required";
      if (!experienceInfo.pancard) newErrors.pancard = "Pancard is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handlePaymentSuccess = (paymentData) => {
    const userData = {
      id: `user_${Date.now()}`,
      personalInfo: formData.personalInfo,
      educationInfo: formData.educationInfo,
      paymentInfo: {
        amount: 100,
        paymentId: paymentData.razorpay_payment_id,
        status: "completed",
        timestamp: new Date().toISOString(),
      },
      registrationDate: new Date().toISOString(),
    };

    const existingUsers = JSON.parse(
      localStorage.getItem("registeredUsers") || "[]"
    );
    existingUsers.push(userData);
    localStorage.setItem("registeredUsers", JSON.stringify(existingUsers));
    onRegistrationComplete(userData);
  };

  const handlePaymentError = (error) => {
    alert(`Payment failed: ${error}`);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfoStep
            data={formData.personalInfo}
            onChange={(field, value) =>
              handleInputChange("personalInfo", field, value)
            }
            errors={errors}
          />
        );
      case 2:
        return (
          <EducationInfoStep
            data={formData.educationInfo}
            onChange={(field, value) =>
              handleInputChange("educationInfo", field, value)
            }
            errors={errors}
          />
        );

      case 3:
        return (
          <ExperienceInfoStep
            data={formData.experienceInfo}
            onChange={(field, value) =>
              handleInputChange("experienceInfo", field, value)
            }
            errors={errors}
          />
        );
      case 4:
        return <TermsAndCondition isAgree={isAgree} setIsAgree={setIsAgree} />;

      case 5:
        return (
          <PaymentStep
            formData={formData}
            onPaymentSuccess={handlePaymentSuccess}
            onPaymentError={handlePaymentError}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id || 4} className="flex items-center">
                <div className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                      step.id < currentStep
                        ? "bg-green-500 text-white"
                        : step.id === currentStep
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {step.id < currentStep ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      step.id || "4"
                    )}
                  </div>
                  <div className="ml-3 hidden md:block">
                    <p
                      className={`text-sm font-medium ${
                        step.id <= currentStep
                          ? "text-gray-900"
                          : "text-gray-500"
                      }`}
                    >
                      {step.title}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-4 ${
                      step.id < currentStep ? "bg-green-500" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {renderStepContent()}

          {currentStep < 5 && (
            <div className="flex justify-between mt-8 pt-8 border-t border-gray-200">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="flex items-center space-x-2 px-6 py-3 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Previous</span>
              </button>
              {currentStep !== 4 && (
                <button
                  onClick={handleNext}
                  className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
                >
                  <span>Next</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}

              {currentStep === 4 && isAgree && (
                <button
                  onClick={handleNext}
                  className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
                >
                  <span>Next</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
