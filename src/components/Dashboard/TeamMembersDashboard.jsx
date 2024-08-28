import { Box, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import DashboardNav from "../owner/DashboardNav";
import "./DashBoard.css";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import TeamMembersSideBar from "./SideBar/TeamMembersSideBar";

function TeamMembersDashboard() {
  const dashBoardOption = useRef(null);
  const [createReport, setCreateReport] = useState(false);

  return (
    <div>
      <TeamMembersSideBar />
      <div className="dashboard_outlet">
        <div className="content_wrapper">
          {/* <DashboardNav setSearchText={setSearchText} /> */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default TeamMembersDashboard;
