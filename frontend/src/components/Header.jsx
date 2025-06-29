import { UserPlus, Users } from "lucide-react";
import { Link } from "react-router";

export default function Header({ currentView, onViewChange }) {
  return (
    <header className="bg-gray-600 bg-opacity-25 shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img
              src="https://devbhoomiglobalservices.com/wp-content/uploads/2024/11/logo2.png"
              className="h-8 w-8 text-white shrink-0"
            />
            <h2 className="text-sm md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Devbhoomi Global Services
            </h2>
          </div>
          <div className="flex flex-col justify-evenly items-center sm:flex-row text-xs sm:text-base">
            <Link to={"/"} className="flex space-x-1">
              <button
                onClick={() => onViewChange("registration")}
                className={`flex items-center px-2 py-1 sm:px-4 sm:py-2 rounded-lg transition-all duration-200 ${
                  currentView === "registration"
                    ? "bg-blue-50 text-blue-700 border border-blue-200"
                    : "text-gray-600 hover:text-blue-700 hover:bg-blue-50"
                }`}
              >
                <UserPlus className="h-4 w-4 mr-1" />
                <span className="font-medium">Registration</span>
              </button>
            </Link>
            <Link to={"/admin"} className="">
              <button
                onClick={() => onViewChange("admin")}
                className={`flex items-center px-2 py-1 sm:px-4 sm:py-2 rounded-lg transition-all duration-200 ${
                  currentView === "admin"
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "text-gray-600 hover:text-emerald-700 hover:bg-emerald-50"
                }`}
              >
                <Users className="h-4 w-4 mr-1" />
                <span className="font-medium">Admin Panel</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
