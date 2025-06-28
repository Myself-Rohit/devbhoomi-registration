import { useState } from "react";
import Header from "./components/Header";
import RegistrationForm from "./components/RegistrationForm";
import AdminPanel from "./components/AdminPanel";
import SuccessPage from "./components/SuccessPage";
import axios from "axios";
import { Route, Routes } from "react-router";
import UserDetails from "./components/userDetailPage";
import { useAuthContext } from "./context/AuthContext";
import Auth from "./components/Auth";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

function App() {
  const [currentView, setCurrentView] = useState("registration");
  const [completedRegistration, setCompletedRegistration] = useState(null);
  const { loggedInUser } = useAuthContext();
  const handleRegistrationComplete = async (userData) => {
    setCompletedRegistration(userData);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/user/register",
        userData
      );
    } catch (err) {
      alert("Error: " + err.response?.data?.error || err.message);
    }
    setCurrentView("success");
  };

  const handleBackToHome = () => {
    setCurrentView("registration");
    setCompletedRegistration(null);
  };
  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/admin" || path.startsWith("/admin/")) {
      setCurrentView("admin");
    }
  }, []);
  const renderCurrentView = () => {
    switch (currentView) {
      case "registration":
        return (
          <Routes>
            <Route
              path="/"
              element={
                <RegistrationForm
                  onRegistrationComplete={handleRegistrationComplete}
                />
              }
            />
          </Routes>
        );
      case "admin":
        return (
          <>
            <Routes>
              <Route
                path="/admin"
                element={loggedInUser ? <AdminPanel /> : <Auth />}
              />
              <Route path="/admin/:userId" element={<UserDetails />} />
            </Routes>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </>
        );

      case "success":
        return completedRegistration ? (
          <SuccessPage
            userData={completedRegistration}
            onBackToHome={handleBackToHome}
          />
        ) : null;
      default:
        return (
          <RegistrationForm
            onRegistrationComplete={handleRegistrationComplete}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentView !== "success" && (
        <Header currentView={currentView} onViewChange={setCurrentView} />
      )}
      {renderCurrentView()}
    </div>
  );
}

export default App;
