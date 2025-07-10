import { Percent, Layers, GraduationCap } from "lucide-react";
import { useEffect } from "react";

export default function EducationInfoStep({ data, onChange, errors }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <GraduationCap className="h-8 w-8 text-emerald-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">
          Education Information
        </h2>
        <p className="text-gray-600 mt-2">
          Tell us about your educational background.
        </p>
      </div>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Highest Qualification */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Highest Qualification <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <GraduationCap className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select
                value={data.highestQualification || ""}
                onChange={(e) => {
                  onChange("highestQualification", e.target.value);
                }}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all ${
                  errors.highestQualification
                    ? "border-red-300 bg-red-50"
                    : "border-gray-300"
                }`}
              >
                <option value="" disabled>
                  Select qualification
                </option>
                <option value="Post Graduation">Post Graduation</option>
                <option value="Graduation">Graduation</option>
                <option value="Diploma">Diploma</option>
                <option value="12th">12th</option>
                <option value="10th">10th</option>
              </select>
            </div>
            {errors.highestQualification && (
              <p className="text-sm text-red-600">
                {errors.highestQualification}
              </p>
            )}
          </div>

          {/* Course*/}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              {data?.highestQualification || ""}
              {data?.highestQualification === "12th" ||
              data?.highestQualification === "10th"
                ? " Stream"
                : " Course"}
              <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Layers className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={data.course || ""}
                onChange={(e) => onChange("course", e.target.value)}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all ${
                  errors.course ? "border-red-300 bg-red-50" : "border-gray-300"
                }`}
                placeholder={`Enter ${
                  data?.highestQualification === "12th" ||
                  data?.highestQualification === "10th"
                    ? "Stream"
                    : "Course Name"
                } `}
              />
            </div>
            {errors.course && (
              <p className="text-sm text-red-600">{errors.course}</p>
            )}
          </div>
          {/* Percentage */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              {data?.highestQualification || ""} Percentage{" "}
              <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Percent className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={data.percentage || ""}
                onChange={(e) => onChange("percentage", e.target.value)}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all ${
                  errors.percentage
                    ? "border-red-300 bg-red-50"
                    : "border-gray-300"
                }`}
                placeholder="e.g. 65"
              />
            </div>
            {errors.percentage && (
              <p className="text-sm text-red-600">{errors.percentage}</p>
            )}
          </div>
          {/* Pass Year */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              {data?.highestQualification || ""} Passout Year{" "}
              <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <GraduationCap className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={data.passYear || ""}
                onChange={(e) => onChange("passYear", e.target.value)}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all ${
                  errors.passYear
                    ? "border-red-300 bg-red-50"
                    : "border-gray-300"
                }`}
                placeholder="Enter passout year"
              />
            </div>
            {errors.passYear && (
              <p className="text-sm text-red-600">{errors.pgPassYear}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
