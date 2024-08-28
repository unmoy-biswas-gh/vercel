import React, { useState } from "react";
import "./teamMemberDataPoints.css";
import back from "../../../assets/ArrowLeft.svg";
import BaseSector from "./BaseSector";
import ai from "../../../assets/AI.svg";
import EnvironmentalKpi from "./EnvironmentalKpi";
import SocialKpi from "./SocialKpi";
import GovernanceKpi from "./GovernanceKpi";
import { useNavigate } from "react-router-dom";

const Tab = ({ name, onClick, isActive }) => {
  return (
    <div
      className={`team-members_add-data-points_tab ${
        isActive ? "activeTab" : ""
      }`}
      onClick={onClick}
    >
      <h3
        className={`team-members_add-data-points_tabName ${
          isActive ? "active" : ""
        }`}
      >
        {name}
      </h3>
    </div>
  );
};

const TeamMemberDataPoints = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const navigate = useNavigate();
  const tabs = [
    {
      id: 0,
      name: "Base: Sector Specific KPI",
      component: <BaseSector />,
    },
    {
      id: 1,
      name: "Environmental KPI",
      component: <EnvironmentalKpi />,
    },
    { id: 2, name: "Social KPI", component: <SocialKpi /> },
    { id: 3, name: "Governance KPI", component: <GovernanceKpi /> },
  ];

  return (
    <>
      <div className="team-members_add-data-points_container">
        {/* HEADING DIV */}
        <div className="team-members_add-data-points_heading">
          <img
            style={{ cursor: "pointer" }}
            src={back}
            alt="Back"
            height={16}
            width={16}
            onClick={() => navigate("/")}
          />
          <h2>Add essential Data points</h2>
        </div>

        {/* ALL TABS DIV  */}
        <div className="team-members_add-data-points_tabs_container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            {tabs.map((item) => (
              <Tab
                key={item.id}
                name={item.name}
                onClick={() => setCurrentTab(item.id)}
                isActive={item.id === currentTab} // Ensure this comparison is correct
              />
            ))}
          </div>

          {/* <button style={{ cursor: "pointer" }}>
            <img src={ai} alt="AI" /> <span>Upload data with AI</span>
          </button> */}
        </div>

        <div className="team-members_add-data-points_divider"></div>

        {/* RENDER ACTIVE TAB COMPONENT */}
        <div className="team-members_add-data-points_content">
          <div className="team-members_add-data-points_table_container">
            {tabs.find((tab) => tab.id === currentTab)?.component}
          </div>
        </div>
      </div>
      <div className="kpi-table-btns_div">
        {currentTab !== 0 && (
          <button
            className="kpi-table-prev-btn"
            onClick={() => setCurrentTab((prev) => prev - 1)}
          >
            Previous
          </button>
        )}

        {currentTab !== tabs.length - 1 && (
          <button
            className="kpi-table-next-btn"
            onClick={() => setCurrentTab((prev) => prev + 1)}
          >
            Next
          </button>
        )}
      </div>
    </>
  );
};

export default TeamMemberDataPoints;
