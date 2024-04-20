import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import { Sidenav, DashboardNavbar, Configurator } from "@/widgets/layout";
import routes from "@/routes";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Dashboard() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/");
    } else {
      const justLoggedIn = localStorage.getItem("justLoggedIn");
      if (justLoggedIn) {
        setShowToast(true);
        localStorage.removeItem("justLoggedIn");
      }
    }
  }, []);

  const token = sessionStorage.getItem("token");

  const extractRoleFromToken = (token) => {
    if (!token) {
      return null;
    }

    const parts = token.split("|");
    const roleId = parts.length > 1 ? parts[1] : null;
   
    return roleId;
  };

  const role = extractRoleFromToken(token);

  const filteredRoutes = routes.map((route) => {
    return {
      ...route,
      pages: route.pages.filter((page) => {
        if ((role === "2" && page.role === 1) || (role === "1" && page.name === "Upload_Audio")) {
          return false;
        }
        return true;
      }),
    };
  });

  useEffect(() => {
    if (showToast) {
      toast.success("Wellcome to Dashboard", {
        onClose: () => setShowToast(false),
      });
    }
  }, [showToast]);

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav
        routes={filteredRoutes}
        brandImg={
          sidenavType === "dark"
            ? "/img/logo-ct.png"
            : "/img/logo-ct-dark.png"
        }
      />
      <div className="p-4 xl:ml-80">
        <DashboardNavbar />
        <Configurator />
        <IconButton
          size="lg"
          color="white"
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
          ripple={false}
          onClick={() => setOpenConfigurator(dispatch, true)}
        >
          <Cog6ToothIcon className="h-5 w-5" />
        </IconButton>
        <Routes>
          {filteredRoutes.map(({ layout, pages }) =>
            pages.map(({ path, element }) => (
              <Route key={path} exact path={path} element={element} 
              
              />
            ))
          )}
        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Dashboard;
