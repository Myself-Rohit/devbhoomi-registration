import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import axios from "axios";

const UserDetails = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  const getImageAsBase64 = async (url) => {
    const res = await fetch(url);
    const blob = await res.blob();

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const fetchUser = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/admin/user/${userId}`
      );
      setUser(res.data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [userId]);

  const downloadPDF = async () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("User Registration Details", 14, 15);

    const personal = user.personalInfo || {};
    const education = user.educationInfo || {};
    const experience = user.experienceInfo || {};
    const payment = user.paymentInfo || {};

    autoTable(doc, {
      startY: 25,
      head: [["Section", "Field", "Value"]],
      body: [
        ["Personal Info", "Full Name", personal.fullName || "N/A"],
        ["Personal Info", "Husband/Father", personal.relativeName || "N/A"],
        ["Personal Info", "Email", personal.email || "N/A"],
        ["Personal Info", "Phone", personal.phone || "N/A"],
        ["Personal Info", "Alternate Phone", personal.alternatePhone || "N/A"],
        ["Personal Info", "DOB", personal.dateOfBirth || "N/A"],
        ["Personal Info", "Gender", personal.gender || "N/A"],
        ["Personal Info", "Current Address", personal.currentAddress || "N/A"],
        [
          "Personal Info",
          "Permanent Address",
          personal.permanentAddress || "N/A",
        ],
        ["Personal Info", "State", personal.state || "N/A"],
        ["Personal Info", "City", personal.city || "N/A"],

        ["", "", ""],

        [
          "Education Info",
          "Highest Qualification",
          education.highestQualification || "N/A",
        ],
        ["Education Info", "Course", education.course || "N/A"],
        ["Education Info", "Percentage", education.percentage || "N/A"],
        ["Education Info", "Passout Year", education.passYear || "N/A"],

        ["", "", ""],
        ["Experience Info", "Experience", experience.experience || "N/A"],
        ["Experience Info", "Company", experience.company || "N/A"],
        [
          "Experience Info",
          "Experience Year",
          experience.experienceYears || "N/A",
        ],
        ["Experience Info", "Skills", experience.skills || "N/A"],
        [
          "Experience Info",
          "Interested Job role",
          experience.jobInterest || "N/A",
        ],

        ["", "", ""],
        ["Payment Info", "Amount", `Rs.${payment.amount || "N/A"}`],
        ["Payment Info", "Status", payment.status || "N/A"],
      ],
    });

    let y = doc.lastAutoTable.finalY + 10;

    const imageEntries = [
      { label: "Aadhaar", url: experience.aadhaar },
      { label: "Photo", url: experience.photo },
      { label: "Resume", url: experience.resume },
      { label: "Pancard", url: experience.pancard },
    ];

    for (const img of imageEntries) {
      if (img.url) {
        try {
          const base64Img = await getImageAsBase64(img.url);

          if (y + 75 > doc.internal.pageSize.getHeight()) {
            doc.addPage();
            y = 20;
          }

          doc.text(img.label, 14, y);
          doc.addImage(base64Img, "JPEG", 14, y + 5, 60, 60);
          y += 70;

          doc.setTextColor(0, 0, 255);
          doc.textWithLink(`[Click to view ${img.label}]`, 14, y, {
            url: img.url,
          });
          doc.setTextColor(0, 0, 0);
          y += 10;
        } catch (error) {
          console.warn(`Failed to load ${img.label} image`, error);

          if (y + 10 > doc.internal.pageSize.getHeight()) {
            doc.addPage();
            y = 20;
          }

          doc.text(`${img.label}: Image failed to load`, 14, y);
          y += 10;
        }
      }
    }

    doc.save(`${personal.fullName}_${user._id}_details.pdf`);
  };

  if (!user) return <div>Loading...</div>;
  return (
    <div className="p-6  mx-auto bg-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-center">User Details</h2>
      <div className="flex justify-around flex-wrap gap-20 ">
        <div className="">
          <p>
            <strong>Name : </strong> {user.personalInfo.fullName}
          </p>
          <p>
            <strong>Email : </strong> {user.personalInfo.email}
          </p>
          <p>
            <strong>Phone : </strong> {user.personalInfo.phone}
          </p>
          <p>
            <strong>Alternate Phone : </strong>{" "}
            {user.personalInfo.alternatePhone}
          </p>
          <p>
            <strong>DOB : </strong> {user.personalInfo.dateOfBirth}
          </p>
          <p>
            <strong>Gender : </strong> {user.personalInfo.gender}
          </p>
          <p>
            <strong>State : </strong> {user.personalInfo.state}
          </p>
          <p>
            <strong>City : </strong> {user.personalInfo.city}
          </p>
        </div>

        <div className="">
          <p>
            <strong>Highest Qualification: </strong>
            {user.educationInfo.highestQualification}
          </p>
          <p>
            <strong>
              {user.educationInfo.highestQualification === "12th" ||
              user.educationInfo.highestQualification === "10th"
                ? "Stream : "
                : "Course : "}
            </strong>
            {user.educationInfo.course}
          </p>
          <p>
            <strong>Percentage : </strong>
            {user.educationInfo.percentage}%
          </p>
          <p>
            <strong>Pass Year : </strong>
            {user.educationInfo.passYear}
          </p>
        </div>
      </div>
      <div className="mt-10 space-y-3">
        <p>
          <strong>Experience : </strong> {user.experienceInfo?.experience}
        </p>
        <p>
          <strong>Skills : </strong> {user.experienceInfo?.skills}
        </p>
        <p>
          <strong>Interested Job Role : </strong>{" "}
          {user.experienceInfo?.jobInterest}
        </p>
        <div className="flex justify-between gap-4 flex-wrap">
          <p>
            <strong>Aadhaar : </strong>
            <a href={`${user.experienceInfo?.aadhaar}`} target="_blank">
              <img
                className="w-full md:w-1/2"
                src={`${user.experienceInfo?.aadhaar}`}
              />
            </a>
          </p>
          <p>
            <strong>Profile Photo : </strong>{" "}
            <a href={`${user.experienceInfo?.photo}`} target="_blank">
              <img
                className="w-full md:w-1/2"
                src={`${user.experienceInfo?.photo}`}
              />
            </a>
          </p>
          <p>
            <strong>Resume : </strong>{" "}
            <a href={`${user.experienceInfo?.resume}`} target="_blank">
              <img
                className="w-full md:w-1/2"
                src={`${user.experienceInfo?.resume}`}
              />
            </a>
          </p>
          <p>
            <strong>Pancard : </strong>{" "}
            <a href={`${user.experienceInfo?.pancard}`} target="_blank">
              <img
                className="w-full md:w-1/2"
                src={`${user.experienceInfo?.pancard}`}
              />
            </a>
          </p>
        </div>
      </div>
      <button
        onClick={downloadPDF}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Download as PDF
      </button>
    </div>
  );
};

export default UserDetails;
