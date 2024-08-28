import { Box, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import "./DashBoard.css";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import TeamMembersSideBar from "./SideBar/TeamMembersSideBar";
import TopBar from "./TopBar";

function TeamMembersDashboard() {
  const dashBoardOption = useRef(null);
  const [createReport, setCreateReport] = useState(false);

  return (
    <div className="ge3s_dashboard_border">
      <TeamMembersSideBar />
      <div className="dashboard_outlet">
        <TopBar />
        <Outlet />
      </div>
    </div>
  );
}

export default TeamMembersDashboard;
