import React, { useState } from "react";
import DoughnutChart from "./DoughnutChart";
import { Box, Grid, Typography } from "@mui/material";
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import LineAreaGraph from "./LineAreaGraph";
import HorizontalBarChart from "./HorizontalBarChart";
import gross from "../../assets/sustainabilityReport/gross.svg";
import newSuppliers from "../../assets/sustainabilityReport/newSuppliers.svg";
import newTech from "../../assets/sustainabilityReport/newTech.svg";
import CSR from "../../assets/sustainabilityReport/CSR.svg";
import SelectFilter from "./SelectFilter";

const GovStatsCard = ({ icon, title, amount }) => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#FFF5E5",
        p: "20px 16px",
        borderRadius: "16px",
        height: "100%",
      }}
    >
      <img
        src={icon}
        alt={title}
        height={28}
        width={28}
        style={{ marginBottom: "6px" }}
      />
      <h4 className="base-sector-card_title">{title}</h4>
      <Typography variant="h5" sx={{ fontSize: "18px" }}>
        {amount}
      </Typography>
    </Box>
  );
};

const GovernanceStats = () => {
  const [trendFilter, setTrendFilter] = useState("");

  const cardData = [
    {
      id: 0,
      icon: gross,
      title: "Gross Revenue (in USD)",
      amount: "354 billion",
    },
    {
      id: 1,
      icon: gross,
      title: "% of Revenue spent on local suppliers",
      amount: "1.9",
    },
    {
      id: 2,
      icon: newSuppliers,
      title: "% of Revenue spent on new suppliers",
      amount: "2.3",
    },
    {
      id: 3,
      icon: newTech,
      title: "% of Revenue spent on new/innovative technologies",
      amount: "5.1",
    },
    {
      id: 4,
      icon: CSR,
      title: "% of Revenue spent on CSR activities",
      amount: "1",
    },
  ];

  const data = [
    { label: "SCOPE 1", value: 50 },
    { label: "SCOPE 2", value: 30 },
    { label: "SCOPE 3", value: 30 },
  ];

  const horizontalData = [
    { label: "SCOPE 1", value: 40 },
    { label: "SCOPE 2", value: 30 },
    { label: "SCOPE 3", value: 30 },
    { label: "SCOPE 4", value: 50 },
    { label: "SCOPE 5", value: 70 },
    { label: "SCOPE 6", value: 75 },
    { label: "SCOPE 7", value: 20 },
  ];

  const barData = [
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

  const colors = ["#02B880", "#E1F4F3", "#B1E9D8"];
  return (
    <>
      <h1 className="sustainability-section_heading">Governance Index</h1>
      <Grid container spacing={2.5} sx={{ mb: "20px" }}>
        {cardData.map((item) => (
          <Grid key={item.id} item xs={2.4}>
            <GovStatsCard {...item} />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2.5} sx={{ mb: "20px" }}>
        <Grid item xs={5}>
          <Box
            sx={{
              p: "16px 16px 32px 16px",
              display: "flex",
              flexDirection: "column",
              height: "22rem",
              backgroundColor: "#FFF",
              borderRadius: "16px",
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
                    name: "Percentage of Revenue spent on local suppliers (%)",
                    value: "option1",
                  },
                  { name: "option2", value: "option2" },
                ]}
                value={trendFilter}
                placeholder={"Select Trend"}
                fontSize="13px"
              />
            </div>
            <div style={{ height: "260px" }}>
              <ParentSize>
                {({ width, height }) => (
                  <LineAreaGraph
                    lineColor={"#FFCB77"}
                    height={height}
                    width={width}
                    gradientFrom={"#FFCB77"}
                    gradientTo={"#FFFFFF"}
                  />
                )}
              </ParentSize>
            </div>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: "100%",
              backgroundColor: "#FFF",
              borderRadius: "16px",
            }}
          >
            <h2>Percentage of complains resolved (%)</h2>
            <div style={{ height: "267px", marginTop: "20px" }}>
              <ParentSize>
                {({ width, height }) => (
                  <HorizontalBarChart
                    height={height}
                    width={width}
                    colors={["#fff6e7", "#FFCB77"]}
                    data={horizontalData}
                    // showLegend
                  />
                )}
              </ParentSize>
            </div>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: "100%",
              backgroundColor: "#FFF",
              borderRadius: "16px",
            }}
          >
            <h2>SOx and NOx emissions</h2>
            <div style={{ height: "267px" }}>
              <ParentSize>
                {({ width, height }) => (
                  <DoughnutChart
                    data={data}
                    height={height}
                    width={width}
                    colors={["#FFCB77", "#FFF6E7"]}
                    centerText="3"
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

export default GovernanceStats;
