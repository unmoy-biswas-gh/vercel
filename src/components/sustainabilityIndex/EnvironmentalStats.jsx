import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import StackedBarChart from "./StackedBarChart";
import PieChart from "./PieChart";
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import BarChart from "./BarChart";
import HalfDoughnutChart from "./HalfDoughnutChart";
import MultipleLineAreaChart from "./MultipleLineAreaChart";
import DoughnutChart from "./DoughnutChart";
import CurvedLineChart from "./CurvedLineChart";
import HorizontalBarChart from "./HorizontalBarChart";
import totalElectricity from "../../assets/sustainabilityReport/totalElectricity.svg";
import totalSox from "../../assets/sustainabilityReport/totalSOX.svg";
import totalNOX from "../../assets/sustainabilityReport/totalNOX.svg";
import totalGHG from "../../assets/sustainabilityReport/totalGHG.svg";

const EnvStatsCard = ({ icon, title, amount }) => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#E6F8F2",
        p: "20px 16px",
        borderRadius: "16px",
      }}
    >
      <img
        src={icon}
        alt={title}
        height={32}
        width={32}
        style={{ marginBottom: "6px" }}
      />
      <h4 className="base-sector-card_title">{title}</h4>
      <Typography variant="h5" sx={{ fontSize: "18px", fontWeight: 500 }}>
        {amount}
      </Typography>
    </Box>
  );
};

const EnvironmentalStats = () => {
  const cardData = [
    {
      id: 0,
      icon: totalGHG,
      title: "Total GHG emissions (Million tCO2e)",

      amount: "96.1",
    },
    {
      id: 1,
      icon: totalSox,
      title: "Total SOx emissions (Million tonnes)",
      amount: "1.3",
    },
    {
      id: 2,
      icon: totalNOX,
      title: "Total NOx emissions (million tonnes)",
      amount: "2.2",
    },
    {
      id: 3,
      icon: totalElectricity,
      title: "Total Electricity Consumption (MWh)",
      amount: "29",
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
    { quarter: "Q1 2023", sox: 0, nox: 10 },
    { quarter: "Q2 2023", sox: 20, nox: 30 },
    { quarter: "Q3 2023", sox: 25, nox: 35 },
    { quarter: "Q4 2023", sox: 10, nox: 40 },
    { quarter: "Q1 2024", sox: 30, nox: 50 },
    { quarter: "Q2 2024", sox: 15, nox: 40 },
    { quarter: "Q3 2024", sox: 20, nox: 45 },
    { quarter: "Q4 2024", sox: 25, nox: 60 },
  ];

  const colors = ["#02B880", "#E1F4F3", "#B1E9D8"];
  return (
    <>
      {/* GREEN DIVS */}

      <h1 className="sustainability-section_heading">Environmental Index </h1>

      <Grid container spacing={2.5} sx={{ mb: "20px" }}>
        {cardData.map((item) => (
          <Grid key={item.id} item xs={3}>
            <EnvStatsCard {...item} />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2.5} sx={{ mb: "20px" }}>
        <Grid item xs={3}>
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
            <h2>
              Emissions Breakdown{" "}
              <span className="sustain-subheading-h2">(In Million tCO2e)</span>
            </h2>
            <div style={{ height: "220px" }}>
              <ParentSize>
                {({ width, height }) => (
                  <PieChart
                    colors={colors}
                    data={data}
                    width={width}
                    height={height}
                  />
                )}
              </ParentSize>
            </div>
          </Box>
        </Grid>
        <Grid item xs={4.5}>
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
            <h2>GHG Emission Tracker</h2>
            <div style={{ height: "267px" }}>
              <ParentSize>
                {({ width, height }) => (
                  <StackedBarChart
                    colors={colors}
                    data={barData}
                    width={width}
                    height={height}
                  />
                )}
              </ParentSize>
            </div>
          </Box>
        </Grid>
        <Grid item xs={4.5}>
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
                  <BarChart
                    colors={colors}
                    data={barData}
                    width={width}
                    height={height}
                  />
                )}
              </ParentSize>
            </div>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2.5} sx={{ mb: "20px" }}>
        <Grid item xs={3}>
          <Box
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: "22rem",
              backgroundColor: "#FFF",
              borderRadius: "16px",
            }}
          >
            <h2>Electricity Consumption Breakdown</h2>
            <div style={{ height: "220px" }}>
              <ParentSize>
                {({ width, height }) => (
                  <HalfDoughnutChart
                    colors={colors}
                    data={data}
                    width={width}
                    height={height}
                  />
                )}
              </ParentSize>
            </div>
          </Box>
        </Grid>
        <Grid item xs={6}>
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
            <h2>Clean Electricity Consumption Trend</h2>
            <div style={{ height: "264px" }}>
              <ParentSize>
                {({ width, height }) => (
                  <MultipleLineAreaChart
                    // colors={colors}
                    // data={data}
                    width={width}
                    height={height}
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
            <h2>Waste Treatment</h2>
            <div style={{ height: "220px" }}>
              <ParentSize>
                {({ width, height }) => (
                  <PieChart
                    colors={colors}
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

      <Grid container spacing={2.5} sx={{ mb: "20px" }}>
        <Grid item xs={3} sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              p: 2,
              height: "22rem",
              backgroundColor: "#FFF",
              borderRadius: "16px",
            }}
          >
            <h2>Water Consumption</h2>
            <div style={{ height: "227px" }}>
              <ParentSize>
                {({ width, height }) => (
                  <DoughnutChart
                    data={data}
                    colors={colors}
                    width={width}
                    height={height}
                    centerText="68%"
                  />
                )}
              </ParentSize>
            </div>
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              p: 2,
              height: "100%",
              backgroundColor: "#FFF",
              borderRadius: "16px",
            }}
          >
            <h2>Water consumption trend</h2>
            <div style={{ height: "267px" }}>
              <ParentSize>
                {({ width, height }) => (
                  <CurvedLineChart
                    width={width}
                    height={height}
                    color="#02B880"
                  />
                )}
              </ParentSize>
            </div>
          </Box>
        </Grid>
        <Grid item xs={3} sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              p: 2,
              height: "22rem",
              backgroundColor: "#FFF",
              borderRadius: "16px",
            }}
          >
            <h2>Waste Water Generated and Treated</h2>
            <div style={{ height: "267px" }}>
              <ParentSize>
                {({ width, height }) => (
                  <HorizontalBarChart
                    colors={["#E6F8F2", "#02B880"]}
                    data={horizontalData}
                    width={width}
                    height={height}
                    showLegend
                  />
                )}
              </ParentSize>
            </div>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2.5} sx={{ mb: "60px" }}>
        <Grid item xs={3} sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              p: 2,
              flexGrow: 1,
              backgroundColor: "#FFF",
              borderRadius: "16px",
            }}
          >
            <h2>Water Generation</h2>
            <div style={{ height: "220px" }}>
              <ParentSize>
                {({ width, height }) => (
                  <PieChart
                    colors={colors}
                    data={data}
                    width={width}
                    height={height}
                  />
                )}
              </ParentSize>
            </div>
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              p: 2,
              flexGrow: 1,
              backgroundColor: "#FFF",
              borderRadius: "16px",
            }}
          >
            <h2>Waste Generation (Hazardous and Non-Hazardous)</h2>
            <div style={{ height: "267px" }}>
              <ParentSize>
                {({ width, height }) => (
                  <StackedBarChart
                    colors={colors}
                    data={barData}
                    width={width}
                    height={height}
                  />
                )}
              </ParentSize>
            </div>
          </Box>
        </Grid>
        <Grid item xs={3} sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              p: 2,
              height: "22rem",
              backgroundColor: "#FFF",
              borderRadius: "16px",
            }}
          >
            <h2>Waste Water Generated and Treated</h2>
            <div style={{ height: "227px" }}>
              <ParentSize>
                {({ width, height }) => (
                  <DoughnutChart
                    colors={colors}
                    data={data}
                    width={width}
                    height={height}
                    centerText="68%"
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

export default EnvironmentalStats;
