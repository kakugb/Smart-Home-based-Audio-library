import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import LandingPage from "@/pages/LandingPage/LandingPage"; 
import { UpdateUser } from "./pages/dashboard/UserTabel/UpdateUser";
import { AddUser } from "./pages/dashboard/UserTabel/AddUser";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} /> 
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
      <Route path="/UpdateUser/:id" element={<UpdateUser/>}/>
      <Route path="/AddUser" element={<AddUser/>}/>
    </Routes>
  );
}

export default App;