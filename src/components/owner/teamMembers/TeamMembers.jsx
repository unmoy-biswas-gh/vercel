import React, { useState } from "react";
import DashboardNav from "../../Dashboard/TopBar";
import "./teamMembers.css";
import back from "../../../assets/ArrowLeft.svg";
import search from "../../../assets/search.svg";
import plus from "../../../assets/plus.svg";
import {
  Tabs,
  Tab,
  Box,
  FormControl,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import AllMembers from "./AllMembers";
import PendingMembers from "./PendingMembers";
import AddMembers from "./AddMembers";
import PageHeading from "../../common/PageHeading/PageHeading";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className="tab-panel"
      {...other}
    >
      {value === index && <div className="tab-panel_child">{children}</div>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TeamMembers = () => {
  const [value, setValue] = React.useState(0); // Initialize with 0 for the first tab
  const [isAddMembersOpen, setIsAddMembersOpen] = useState(false);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const memberTabs = [
    {
      id: 0,
      name: "All Members",
      component: <AllMembers />,
    },
    {
      id: 1,
      name: "Pending Invites",
      component: <PendingMembers />,
    },
  ];

  return (
    <>
      {/* <DashboardNav> */}
      <div className="team-members_container">
        {/* <div className="team-members_heading_container">
          <button type="button" className="back-button">
            <img src={back} alt="Go Back" />
          </button>
          <h1>Team Members</h1>
        </div> */}
        <PageHeading onClick={() => {}} text={"Team Members"} />

        <div className="team-members-input_container">
          <FormControl variant="outlined">
            <OutlinedInput
              sx={{
                borderRadius: "8px",
                maxHeight: "40px",
              }}
              type="search"
              className="reports-table-input"
              id="outlined-adornment-weight"
              startAdornment={
                <InputAdornment position="start">
                  <img src={search} alt="Search" height={19} width={19} />
                </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
          </FormControl>

          <button
            className="team-members-add_member"
            onClick={() => setIsAddMembersOpen(true)}
          >
            <img src={plus} alt="Add" height={18} width={18} />
            <span>Add Member</span>
          </button>
        </div>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            height: "100%", // Ensure the container takes up the full height
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
              style: {
                background:
                  "linear-gradient(101.74deg, #369D9C 0%, #28814D 100%)",
              },
            }}
            sx={{
              "& .MuiTab-root": {
                textTransform: "none", // Remove uppercase transformation
                fontSize: "14px",
                fontWeight: 500,
                color: "#666666D9", // Set non-active tab text to gray
              },
              "& .Mui-selected": {
                color: "transparent", // Make the selected tab text transparent to show the gradient
                background:
                  "linear-gradient(101.74deg, #369D9C 0%, #28814D 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              },
            }}
          >
            {memberTabs.map((item) => (
              <Tab key={item.id} label={item.name} {...a11yProps(item.id)} />
            ))}
          </Tabs>

          <TabPanel value={value} index={value}>
            {memberTabs[value].component}
          </TabPanel>
        </Box>
      </div>
      {/* </DashboardNav> */}

      <AddMembers
        handleClose={() => setIsAddMembersOpen(false)}
        isOpen={isAddMembersOpen}
      />
    </>
  );
};

export default TeamMembers;
