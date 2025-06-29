import { Briefcase, Building2, Award, Upload, Wrench } from "lucide-react";
import { uploadSignedImage } from "../utils/cloudinary.js";

export default function ExperienceInfoStep({ data, onChange, errors }) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Briefcase className="h-8 w-8 text-purple-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Experience Details</h2>
        <p className="text-gray-600 mt-2">Tell us about your Experience</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Experience  */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Experience <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Briefcase className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <select
              value={data.experience || ""}
              onChange={(e) => onChange("experience", e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                errors.experience
                  ? "border-red-300 bg-red-50"
                  : "border-gray-300"
              }`}
            >
              <option value="" disabled>
                Select Your Experience
              </option>
              <option value="Job">Job</option>
              <option value="Internship">Internship</option>
              <option value="Fresher">Fresher</option>
            </select>
          </div>
          {errors.experience && (
            <p className="text-sm text-red-600">{errors.experience}</p>
          )}
        </div>

        {/* Company */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Company/Organization <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Building2 className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={data.company || ""}
              onChange={(e) => onChange("company", e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                errors.company ? "border-red-300 bg-red-50" : "border-gray-300"
              }`}
              placeholder="Enter your company name"
            />
          </div>
          {errors.company && (
            <p className="text-sm text-red-600">{errors.company}</p>
          )}
        </div>

        {/* Years of Experience */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Years of Experience
            <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Award className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <select
              value={data.experienceYears || ""}
              onChange={(e) => onChange("experienceYears", e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                errors.experienceYears
                  ? "border-red-300 bg-red-50"
                  : "border-gray-300"
              }`}
            >
              <option value="">Select experience</option>
              <option value="0-1">0-1 years</option>
              <option value="2-5">2-5 years</option>
              <option value="6-10">6-10 years</option>
              <option value="11-15">11-15 years</option>
              <option value="16+">16+ years</option>
            </select>
          </div>
          {errors.experienceYears && (
            <p className="text-sm text-red-600">{errors.experienceYears}</p>
          )}
        </div>

        {/* Skills */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Skills <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Wrench className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={data.skills || ""}
              onChange={(e) => onChange("skills", e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
                errors.skills ? "border-red-300 bg-red-50" : "border-gray-300"
              }`}
              placeholder="Enter your skills"
            />
          </div>{" "}
          {errors.skills && (
            <p className="text-sm text-red-600">{errors.skills}</p>
          )}
        </div>
        {/* Job Interest */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            In which job role are you interested, or for which job role do you
            want to apply? <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Wrench className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={data.jobInterest || ""}
              onChange={(e) => onChange("jobInterest", e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
                errors.jobInterest
                  ? "border-red-300 bg-red-50"
                  : "border-gray-300"
              }`}
              placeholder="Enter your interested job role"
            />
          </div>{" "}
          {errors.jobInterest && (
            <p className="text-sm text-red-600">{errors.jobInterest}</p>
          )}
        </div>

        {/* Aadhaar Upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Upload Aadhaar Card <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Upload className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="file"
              accept=".jpg,.png"
              onChange={async (e) => {
                const file = e.target.files[0];
                if (file) {
                  const url = await uploadSignedImage(file);
                  onChange("aadhaar", url);
                }
              }}
              className={`w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
                errors.aadhaar ? "border-red-300 bg-red-50" : "border-gray-300"
              }`}
            />
          </div>
          {errors.aadhaar && (
            <p className="text-sm text-red-600">{errors.aadhaar}</p>
          )}
        </div>

        {/* Photo Upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Upload Photo <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Upload className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="file"
              accept=".jpg,.png"
              onChange={async (e) => {
                const file = e.target.files[0];
                if (file) {
                  const url = await uploadSignedImage(file);
                  onChange("photo", url);
                }
              }}
              className={`w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
                errors.photo ? "border-red-300 bg-red-50" : "border-gray-300"
              }`}
            />
          </div>
          {errors.photo && (
            <p className="text-sm text-red-600">{errors.photo}</p>
          )}
        </div>
        {/* Resume Upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Upload Resume <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Upload className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="file"
              accept=".jpg,.png"
              onChange={async (e) => {
                const file = e.target.files[0];
                if (file) {
                  const url = await uploadSignedImage(file);
                  onChange("resume", url);
                }
              }}
              className={`w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
                errors.resume ? "border-red-300 bg-red-50" : "border-gray-300"
              }`}
            />
          </div>
          {errors.resume && (
            <p className="text-sm text-red-600">{errors.resume}</p>
          )}
        </div>
        {/* Pancard Upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Upload Pancard <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Upload className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="file"
              accept=".jpg,.png"
              onChange={async (e) => {
                const file = e.target.files[0];
                if (file) {
                  const url = await uploadSignedImage(file);
                  onChange("pancard", url);
                }
              }}
              className={`w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
                errors.pancard ? "border-red-300 bg-red-50" : "border-gray-300"
              }`}
            />
          </div>
          {errors.pancard && (
            <p className="text-sm text-red-600">{errors.pancard}</p>
          )}
        </div>
      </div>
    </div>
  );
}
