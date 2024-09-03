import React, { useState } from "react";
import PieChart from "./PieChart";
import { Box, Grid, Typography } from "@mui/material";
import SimpleLineChart from "./SimpleLineChart";
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import gender from "../../assets/sustainabilityReport/gender.svg";
import trip from "../../assets/sustainabilityReport/TRIP.svg";
import indirectEmp from "../../assets/sustainabilityReport/indirectEmp.svg";
import foreignEmp from "../../assets/sustainabilityReport/foreignEmp.svg";
import LineAreaGraph from "./LineAreaGraph";
import SelectFilter from "./SelectFilter";

const SocialStatsCard = ({ icon, title, amount }) => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#FAE6EA",
        p: "20px 16px",
        borderRadius: "16px",
        height: "100%",
      }}
    >
      <img
        src={icon}
        alt={title}
        height={24}
        width={24}
        style={{ marginBottom: "6px" }}
      />
      <h4 className="base-sector-card_title">{title}</h4>
      <Typography variant="h5" sx={{ fontSize: "18px" }}>
        {amount}
      </Typography>
    </Box>
  );
};

const SocialStats = () => {
  const [trendFilter, setTrendFilter] = useState("");

  const cardData = [
    {
      id: 0,
      icon: gender,
      title: "Gender Ratio in Workforce",

      amount: "1.9",
    },
    {
      id: 1,
      icon: trip,
      title: "TRIR (Incidents per 200,000 person hours)",
      amount: "1.3",
    },
    {
      id: 2,
      icon: indirectEmp,
      title: "Proportion of Indirect employees (%)",
      amount: "69",
    },
    {
      id: 3,
      icon: foreignEmp,
      title: "Proportion of foreign employees (%)",
      amount: "1.3",
    },
  ];

  const data = [
    { label: "SCOPE 1", value: 50 },
    { label: "SCOPE 2", value: 30 },
    { label: "SCOPE 3", value: 30 },
  ];

  const trendData = [
    { quarter: "Q1 2023", value: 10 },
    { quarter: "Q2 2023", value: 20 },
    { quarter: "Q3 2023", value: 15 },
    { quarter: "Q4 2023", value: 25 },
    { quarter: "Q1 2024", value: 30 },
    { quarter: "Q2 2024", value: 25 },
    { quarter: "Q3 2024", value: 35 },
    { quarter: "Q4 2024", value: 45 },
    { quarter: "Q1 2025", value: 50 },
    { quarter: "Q2 2025", value: 40 },
    { quarter: "Q3 2025", value: 45 },
  ];

  return (
    <>
      <h1 className="sustainability-section_heading">Social Index</h1>

      {/* PINK DIVS */}
      <Grid container spacing={2.5} sx={{ mb: "20px" }}>
        {cardData.map((item) => (
          <Grid key={item.id} item xs={3}>
            <SocialStatsCard {...item} />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2.5} sx={{ mb: "60px" }}>
        <Grid item xs={8.4}>
          <Box
            sx={{
              width: "100%",
              height: "20rem",
              borderRadius: "16px",
              p: 2,
              backgroundColor: "#FFF",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
              }}
            >
              <h2>Social KPIs trends</h2>
              <SelectFilter
                onChange={(e) => console.log(e.target.value)}
                options={[
                  {
                    name: "Proportion of indirect employees",
                    value: "option1",
                  },
                  { name: "option2", value: "option2" },
                ]}
                value={trendFilter}
                placeholder={"Select Trend"}
              />
            </div>
            <div style={{ height: "260px" }}>
              <ParentSize>
                {({ width, height }) => (
                  // <SimpleLineChart
                  //   color={"#FF8FA5"}
                  //   // data={data}
                  //   width={width}
                  //   height={height}
                  // />
                  <LineAreaGraph
                    data={trendData}
                    height={height}
                    width={width}
                    gradientFrom="#fff5f7"
                    gradientTo="#fff"
                    lineColor={"#FF8FA5"}
                  />
                )}
              </ParentSize>
            </div>
          </Box>
        </Grid>
        <Grid item xs={3.6}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "16px",
              p: 2,
              backgroundColor: "#FFF",
            }}
          >
            <h2>Gender Diversity</h2>
            <div style={{ height: "220px" }}>
              <ParentSize>
                {({ width, height }) => (
                  <PieChart
                    colors={["#FF8FA5", "#FAE6EA", "#FFF5F7"]}
                    data={data}
                    width={width}
                    height={height}
                  />
                )}
              </ParentSize>
            </div>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default SocialStats;
