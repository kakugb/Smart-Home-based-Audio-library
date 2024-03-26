import React from "react";
import {
  Typography,
  Alert,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export function UploadAudio() {
  const [showAlerts, setShowAlerts] = React.useState({
    blue: true,
    green: true,
    orange: true,
    red: true,
  });
  const [showAlertsWithIcon, setShowAlertsWithIcon] = React.useState({
    blue: true,
    green: true,
    orange: true,
    red: true,
  });
  const alerts = ["gray", "green", "orange", "red"];

  return (
    <div className="mx-auto my-20 flex max-w-screen-lg flex-col gap-8">
     <h1 className="w-full text-center text-2xl">Upload Audio</h1>
    </div>
  );
}

export default UploadAudio;
