import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ProfileInfoCard, MessageCard } from "@/widgets/cards";
import { platformSettingsData, conversationsData, projectsData } from "@/data";

export function UserManagement() {
  return (
    <>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-cover	bg-center bg-gray-500">
        <h1 className="w-full text-center text-3xl text-white pt-5">User Management</h1>
      </div>
     
    </>
  );
}

export default UserManagement;
