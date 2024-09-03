import React, { useState } from "react";
import "./subscriptions.css";
import YourSubscription from "./YourSubscription";
import { Box, Tab, Tabs } from "@mui/material";
import OtherPlans from "./OtherPlans";

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
        <div className="tab-panel_child subscriptions-tab">{children}</div>
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

const Subscription = () => {
  const [value, setValue] = useState(0);
  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const subscriptionTabs = [
    { id: 0, name: "Subscriptions", component: <YourSubscription /> },
    { id: 1, name: "Other Plans", component: <OtherPlans /> },
  ];

  return (
    <div className="subscriptions-container">
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
          {subscriptionTabs.map((item) => (
            <Tab key={item.id} label={item.name} {...a11yProps(item.id)} />
          ))}
        </Tabs>

        <TabPanel value={value} index={value}>
          {subscriptionTabs[value].component}
        </TabPanel>
      </Box>
    </div>
  );
};

export default Subscription;
