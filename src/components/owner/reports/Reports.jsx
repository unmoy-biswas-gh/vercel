import React, { useState } from "react";
import back from "../../../assets/ArrowLeft.svg";
import search from "../../../assets/search.svg";
import "./reports.css";
import {
  Box,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Paper,
  Tab,
  Tabs,
} from "@mui/material";
import Vetted from "./Vetted";
import SentForVerification from "./SentForVerification";
import SaveAsReady from "./SaveAsReady";
import DraftsTable from "./DraftsTable";
import PageHeading from "../../common/PageHeading/PageHeading";
import { useNavigate } from "react-router-dom";

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
      {value === index && (
        <div className="tab-panel_child reports-tab">{children}</div>
      )}
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
      name: "Vetted",
      component: <Vetted />,
    },
    {
      id: 1,
      name: "Sent For Verification ",
      component: <SentForVerification />,
    },
    {
      id: 2,
      name: "Saved as ready",
      component: <SaveAsReady />,
    },
    {
      id: 3,
      name: "Drafts",
      component: <DraftsTable />,
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      <div className="reports-table_container">
        <div className="reports-table_heading-parent">
          <div>
            {/* <div className="reports-table_heading_container">
              <button type="button" className="back-button">
                <img src={back} alt="Go Back" />
              </button>
              <h1>Report Status</h1>
            </div> */}
            <PageHeading onClick={() => navigate("/")} text={"Report Status"} />

            <div className="reports-table-input_container">
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
            </div>
          </div>

          <Paper
            sx={{
              padding: { lg: "16px 18px" },
              maxWidth: "350px",
              width: "100%",
              borderRadius: { lg: "10px" },
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div className="booking-heading">
                <h2>Go ahead and book a call</h2>
                <p>We are here to help you in improve sustainability report.</p>
              </div>
              <div>
                <button className="booking-btn">Book a call</button>
              </div>
            </div>
          </Paper>
        </div>

        <Box
          sx={{
            width: "100%",
            // display: "flex",
            // flexDirection: "column",
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
            {reportTabs.map((item) => (
              <Tab key={item.id} label={item.name} {...a11yProps(item.id)} />
            ))}
          </Tabs>

          <TabPanel value={value} index={value}>
            {reportTabs[value].component}
          </TabPanel>
        </Box>
      </div>
    </>
  );
};

export default Reports;
