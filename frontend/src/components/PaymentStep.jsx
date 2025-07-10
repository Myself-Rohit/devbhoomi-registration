import { useEffect, useState } from "react";
import { CreditCard, Loader } from "lucide-react";
import axios from "axios";

export default function PaymentStep({
  formData,
  onPaymentSuccess,
  onPaymentError,
}) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [amount] = useState(100);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
  const handlePayment = async () => {
    setIsProcessing(true);
    const scriptLoaded = await loadRazorpayScript();

    if (!scriptLoaded || typeof window.Razorpay === "undefined") {
      onPaymentError("Failed to load Razorpay SDK. Are you online?");
      setIsProcessing(false);
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/user/create-order`,
        { amount }
      );
      const { data } = res;
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: "INR",
        name: "Registration",
        description: "Registration Fee Payment",
        order_id: data.id,
        handler: function (response) {
          onPaymentSuccess(response);
          setIsProcessing(false);
        },
        prefill: {
          name: `${formData.personalInfo.fullName}`,
          email: `${formData.personalInfo.email}`,
          contact: `${formData.personalInfo.phone}`,
        },
        theme: { color: "#0f9d58" },
        method: {
          upi: true,
          card: true,
          netbanking: true,
          wallet: false,
        },
        modal: {
          ondismiss: function () {
            setIsProcessing(false);
          },
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      onPaymentError("Error initializing payment.");
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <CreditCard className="h-8 w-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Payment</h2>
        <p className="text-gray-600 mt-2">Complete your registration</p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-6 border border-blue-100">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Registration Fee
          </h3>
          <div className="text-3xl font-bold text-gray-900 mb-4">
            ₹{(amount / 100).toFixed(2)}
          </div>

          <button
            onClick={handlePayment}
            disabled={isProcessing}
            className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-emerald-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {isProcessing ? (
              <>
                <Loader className="h-5 w-5 animate-spin" />
                <span>Processing Payment...</span>
              </>
            ) : (
              <>
                <CreditCard className="h-5 w-5" />
                <span>Pay ₹{(amount / 100).toFixed(2)}</span>
              </>
            )}
          </button>

          <p className="text-xs text-gray-500 mt-4">
            By proceeding, you agree to our terms and conditions. Payment
            processed securely via Razorpay.
          </p>
        </div>
      </div>
    </div>
  );
}
