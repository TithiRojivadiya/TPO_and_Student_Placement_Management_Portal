import { useState } from "react";
import { Routes, Route } from "react-router";

import StudentNavbar from "./components/StudentNavbar";
import TpoNavbar from "./components/TpoNavbar";
import RoleSelect from "./pages/RoleSelect";

// Student Pages
import Dashboard from "./pages/student/Dashboard";
import Profile from "./pages/student/Profile";
import Notifications from "./pages/student/Notifications";
import JobApplications from "./pages/student/JobApplications";
import PlacementStatus from "./pages/student/PlacementStatus";
import AboutTPO from "./pages/student/AboutTPO";

// TPO Pages
import TpoDashboard from "./pages/tpo/Dashboard";
import StudentManagement from "./pages/tpo/StudentManagement";
import ResumeInsights from "./pages/tpo/ResumeInsights";
import ApplicationTracker from "./pages/tpo/ApplicationTracker";
import ResultPortal from "./pages/tpo/ResultPortal";
import PlacementSummary from "./pages/tpo/PlacementSummary";
import TpoNotifications from "./pages/tpo/Notifications";

function App() {
  const [role, setRole] = useState(localStorage.getItem("role"));

  // 🟡 No role → show role select page
  if (!role) {
    return <RoleSelect setRole={setRole} />;
  }

  return (
    <>
      {role === "student" ? <StudentNavbar /> : <TpoNavbar />}

      <main className="mt-[60px] h-[calc(100vh-60px)] overflow-y-auto px-10 py-6 bg-blue-50">
        <div className="bg-white rounded-xl shadow-sm p-6 min-h-full">

          <Routes>
            {/* STUDENT ROUTES */}
            {role === "student" && (
              <>
                <Route path="/" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/jobs" element={<JobApplications />} />
                <Route path="/status" element={<PlacementStatus />} />
                <Route path="/about" element={<AboutTPO />} />
              </>
            )}

            {/* TPO ROUTES */}
            {role === "tpo" && (
              <>
                <Route path="/" element={<TpoDashboard />} />
                <Route path="/studentmanagement" element={<StudentManagement />} />
                <Route path="/resumeinsights" element={<ResumeInsights />} />
                <Route path="/applicationtracker" element={<ApplicationTracker />} />
                <Route path="/resultportal" element={<ResultPortal />} />
                <Route path="/placementsummary" element={<PlacementSummary />} />
                <Route path="/notifications" element={<TpoNotifications />} />
              </>
            )}
          </Routes>

        </div>
      </main>
    </>
  );
}

export default App;
