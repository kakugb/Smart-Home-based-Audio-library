import { useLocation, useNavigate } from "react-router-dom";
import { Navbar, Typography,Button,IconButton,Breadcrumbs} from "@material-tailwind/react";

import {Cog6ToothIcon} from "@heroicons/react/24/solid";
import {  useMaterialTailwindController,  setOpenConfigurator,setOpenSidenav} from "@/context";
import { useState } from "react";

export function DashboardNavbar() {
  const navigate = useNavigate()
  const [controller, dispatch] = useMaterialTailwindController();
  const { fixedNavbar, openSidenav } = controller;
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };



  const HandleLogout =()=>{
 
      sessionStorage.removeItem("token");
     navigate("/")
    
  }
  return (
    <Navbar
      color={fixedNavbar ? "white" : "transparent"}
      className={`rounded-xl transition-all ${
        fixedNavbar
          ? "sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5"
          : "px-0 py-1"
      }`}
      fullWidth
      blurred={fixedNavbar}
    >
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize">
          <Breadcrumbs
            className={`bg-transparent p-0 transition-all ${
              fixedNavbar ? "mt-1" : ""
            }`}
          >
            
            
          </Breadcrumbs>
          <Typography variant="h6" color="blue-gray">
            {page}
          </Typography>
        </div>
        <div className="flex items-center">
          
        <IconButton
            variant="text"
            color="blue-gray"
            onClick={() => setOpenConfigurator(dispatch, true)}
          >
            <Cog6ToothIcon className="h-5 w-5 text-blue-gray-500" />
          </IconButton>

          <IconButton
            variant="text"
            color="blue-gray"
            onClick={toggleDropdown}
          >
            <Cog6ToothIcon className="h-5 w-5 text-blue-gray-500" />
          </IconButton>
          {isDropdownOpen && (
        <div className="absolute right-6 mt-20   origin-top-right  divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Button
              color="blue-gray"
              buttonType="link"
              ripple="dark"
              onClick={HandleLogout}
              className="text-left w-full  px-4 py-2 text-sm text-gray-900"
            >
              Logout
            </Button>
          </div>
        </div>
      )}
    
          
          
          
         
        </div>
      </div>
    </Navbar>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;
