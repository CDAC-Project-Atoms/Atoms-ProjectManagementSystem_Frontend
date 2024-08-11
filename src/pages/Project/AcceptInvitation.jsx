import { Button } from "@/components/ui/button";
import { acceptInvitation } from "@/redux/Project/Project.Action";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const AcceptInvitation = () => {
  const dipatch = useDispatch();
  const location = useLocation();
  const navigate=useNavigate();

  const handleAcceptInvitation = () => {
    const urlParams = new URLSearchParams(location.search);
    const token = urlParams.get("token");
    console.log("token ", token);
    dipatch(acceptInvitation({invitationToken:token,navigate}));
  };
  return <div className="h-[85vh] flex flex-col justify-center items-center">
    <div className="flex flex-col items-center">
      <h1 className="py-5 font-semibold text-xl">you are invited to join the project</h1>
      <Button onClick={handleAcceptInvitation}>Accept Invitation</Button>
    </div>
    
  </div>;
};

export default AcceptInvitation;
