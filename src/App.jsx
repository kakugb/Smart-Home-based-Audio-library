import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import LandingPage from "@/pages/LandingPage/LandingPage"; // Import your LandingPage component

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} /> {/* Add this route */}
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
    </Routes>
  );
}

export default App;