import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { Home, UserManagement, AudioLibrary, UploadAudio } from "@/pages/dashboard";
//import { SignIn, SignUp } from "@/pages/auth";

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
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Audio Library",
        path: "/AudioLibrary",
        element: <AudioLibrary />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "Upload Audio",
        path: "/UploadAudio",        //Notification
        element: <UploadAudio />,
      },
    ],
  },
  // {
  //   title: "auth pages",
  //   layout: "auth",
  //   pages: [
  //     {
  //       icon: <ServerStackIcon {...icon} />,
  //       name: "sign in",
  //       path: "/sign-in",
  //       element: <SignIn />,
  //     },
  //     {
  //       icon: <RectangleStackIcon {...icon} />,
  //       name: "sign up",
  //       path: "/sign-up",
  //       element: <SignUp />,
  //     },
  //   ],
  // },
];

export default routes;
