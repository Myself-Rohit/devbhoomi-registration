import { User, Mail, Phone, Calendar, Users } from "lucide-react";

export default function PersonalInfoStep({ data, onChange, errors }) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="h-8 w-8 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Personal Details</h2>
        <p className="text-gray-600 mt-2">Tell us about yourself</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* name */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={data.fullName || ""}
              onChange={(e) => onChange("fullName", e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                errors.fullName ? "border-red-300 bg-red-50" : "border-gray-300"
              }`}
              placeholder="Enter your full name"
            />
          </div>
          {errors.fullName && (
            <p className="text-sm text-red-600">{errors.fullName}</p>
          )}
        </div>
        {/* Father/Husband Name  */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Father/Husband Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={data.relativeName || ""}
              onChange={(e) => onChange("relativeName", e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                errors.relativeName
                  ? "border-red-300 bg-red-50"
                  : "border-gray-300"
              }`}
              placeholder="Enter your last name"
            />
          </div>
          {errors.relativeName && (
            <p className="text-sm text-red-600">{errors.relativeName}</p>
          )}
        </div>
        {/* email */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Email Address <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="email"
              value={data.email || ""}
              onChange={(e) => onChange("email", e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                errors.email ? "border-red-300 bg-red-50" : "border-gray-300"
              }`}
              placeholder="Enter your email address"
            />
          </div>
          {errors.email && (
            <p className="text-sm text-red-600">{errors.email}</p>
          )}
        </div>
        {/* Phone Number */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="tel"
              value={data.phone || ""}
              onChange={(e) => onChange("phone", e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                errors.phone ? "border-red-300 bg-red-50" : "border-gray-300"
              }`}
              placeholder="Enter your phone number"
            />
          </div>
          {errors.phone && (
            <p className="text-sm text-red-600">{errors.phone}</p>
          )}
        </div>
        {/* Alternate Phone Number */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Alternate Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="tel"
              value={data.alternatePhone || ""}
              onChange={(e) => onChange("alternatePhone", e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                errors.alternatePhone
                  ? "border-red-300 bg-red-50"
                  : "border-gray-300"
              }`}
              placeholder="Enter alternate phone number"
            />
          </div>
          {errors.alternatePhone && (
            <p className="text-sm text-red-600">{errors.alternatePhone}</p>
          )}
        </div>
        {/* Date of Birth */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="date"
              value={data.dateOfBirth || ""}
              onChange={(e) => onChange("dateOfBirth", e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                errors.dateOfBirth
                  ? "border-red-300 bg-red-50"
                  : "border-gray-300"
              }`}
            />
          </div>
          {errors.dateOfBirth && (
            <p className="text-sm text-red-600">{errors.dateOfBirth}</p>
          )}
        </div>
        {/* Gender */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Gender <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <select
              value={data.gender || ""}
              onChange={(e) => onChange("gender", e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                errors.gender ? "border-red-300 bg-red-50" : "border-gray-300"
              }`}
            >
              <option value="" disabled>
                Select gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          {errors.gender && (
            <p className="text-sm text-red-600">{errors.gender}</p>
          )}
        </div>
        {/* Current Address */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Current Address <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={data.currentAddress || ""}
              onChange={(e) => onChange("currentAddress", e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                errors.currentAddress
                  ? "border-red-300 bg-red-50"
                  : "border-gray-300"
              }`}
              placeholder="Enter your current address"
            />
          </div>
          {errors.currentAddress && (
            <p className="text-sm text-red-600">{errors.currentAddress}</p>
          )}
        </div>
        {/* Permanent Address */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Permanent Address <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={data.permanentAddress || ""}
              onChange={(e) => onChange("permanentAddress", e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                errors.permanentAddress
                  ? "border-red-300 bg-red-50"
                  : "border-gray-300"
              }`}
              placeholder="Enter your permanent address"
            />
          </div>
          {errors.permanentAddress && (
            <p className="text-sm text-red-600">{errors.permanentAddress}</p>
          )}
        </div>
        {/* State */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            State <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={data.state || ""}
              onChange={(e) => onChange("state", e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                errors.state ? "border-red-300 bg-red-50" : "border-gray-300"
              }`}
              placeholder="Enter your state name"
            />
          </div>
          {errors.state && (
            <p className="text-sm text-red-600">{errors.state}</p>
          )}
        </div>
        {/* City */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            City <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={data.city || ""}
              onChange={(e) => onChange("city", e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                errors.city ? "border-red-300 bg-red-50" : "border-gray-300"
              }`}
              placeholder="Enter your City Name"
            />
          </div>
          {errors.city && <p className="text-sm text-red-600">{errors.city}</p>}
        </div>
      </div>
    </div>
  );
}
