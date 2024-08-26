import React, { useState } from "react";
import DashboardNav from "../DashboardNav";
import back from "../../../assets/ArrowLeft.svg";
import search from "../../../assets/search.svg";
import plus from "../../../assets/plus.svg";
import {
  Box,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Tab,
  Tabs,
} from "@mui/material";

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

const Reports = () => {
  const [value, setValue] = useState(0);
  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const reportTabs = [
    {
      id: 0,
      name: "All Members",
      component: <div>Vetted</div>,
    },
  ];

  return (
    <DashboardNav>
      <div className="team-members_container">
        <div className="team-members_heading_container">
          <button type="button" className="back-button">
            <img src={back} alt="Go Back" />
          </button>
          <h1>Team Members</h1>
        </div>

        <div className="team-members-input_container">
          <FormControl variant="outlined">
            <OutlinedInput
              style={{
                borderRadius: "8px",
              }}
              type="search"
              className="team-members-input"
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
                background:
                  "linear-gradient(101.74deg, #369D9C 0%, #28814D 100%)", // Gradient for tab text
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textTransform: "none", // Remove uppercase transformation
                fontSize: "1rem",
                fontWeight: 500,
              },
              "& .Mui-selected": {
                color: "transparent", // Maintain gradient text on selected tab
              },
            }}
          >
            {reportTabs.map((item) => (
              <Tab key={item.id} label={item.name} {...a11yProps(item.id)} />
            ))}
          </Tabs>

          <TabPanel value={value} index={value}>
            {reportTabs[value].component}
          </TabPanel>
        </Box>
      </div>
    </DashboardNav>
  );
};

export default Reports;
