import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { Home, UserManagement, AudioLibrary, UploadAudio } from "@/pages/dashboard";


const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "User Managment",
        path: "/UserManagement",
        element: <UserManagement />,
        role: 1,
  
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Audio Library",
        path: "/AudioLibrary",
        element: <AudioLibrary />,
        role:1,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "Upload Audio",
        path: "/UploadAudio",        
        element: <UploadAudio />,
       
      },
    ],
  },
 
];

export default routes;
