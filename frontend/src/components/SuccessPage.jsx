import { CheckCircle, Home } from "lucide-react";

export default function SuccessPage({ userData, onBackToHome }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Registration Successful!
          </h1>
          <p className="text-gray-600 mb-8">
            Thank you for completing your registration. Your payment has been
            processed successfully.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div>
                <p className="text-sm text-gray-500">Registration ID</p>
                <p className="font-mono text-sm font-medium text-gray-900">
                  {userData.id}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Payment ID</p>
                <p className="font-mono text-sm font-medium text-gray-900">
                  {userData.paymentInfo.paymentId}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Amount Paid</p>
                <p className="font-medium text-gray-900">
                  ₹{(userData.paymentInfo.amount / 100).toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Registration Date</p>
                <p className="font-medium text-gray-900">
                  {new Date(userData.registrationDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <button
              onClick={onBackToHome}
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
            >
              <Home className="h-4 w-4" />
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
