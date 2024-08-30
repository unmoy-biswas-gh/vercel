import React from "react";
import "./sustainabilityIndex.css";
import LineAreaGraph from "./LineAreaGraph";
import BarChart from "./BarChart";
import TrendChart from "./TrendChart";
import PieChart from "./PieChart";
import StackedBarChart from "./StackedBarChart";
import { Box, Grid } from "@mui/material";
import HalfDoughnutChart from "./HalfDoughnutChart";
import DoughnutChart from "./DoughnutChart";
import HorizontalBarChart from "./HorizontalBarChart";
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import MultipleLineAreaChart from "./MultipleLineAreaChart";

const SustainabilityIndex = () => {
  const data = [
    { label: "SCOPE 1", value: 40 },
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
    <div className="charts-container">
      <Grid container spacing={2.5}>
        <Grid item xs={3} sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{ height: "100%", width: "100%", border: "1px solid black" }}
          ></Box>
        </Grid>
        <Grid item xs={9} sx={{ display: "flex", flexDirection: "column" }}>
          <Grid container spacing={2.5}>
            <Grid item xs={6} sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ border: "1px solid black", p: 2, height: "22rem" }}>
                <h2>Water Consumption</h2>
                <div style={{ height: "227px" }}>
                  {/* <ParentSize>
                {({ width, height }) => (
                  <DoughnutChart
                    colors={colors}
                    data={data}
                    width={width}
                    height={height}
                  />
                )}
              </ParentSize> */}
                </div>
              </Box>
            </Grid>
            <Grid item xs={6} sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ border: "1px solid black", p: 2, height: "22rem" }}>
                <h2>Intensities Trend</h2>
                <div style={{ height: "267px" }}>
                  <ParentSize>
                    {({ width, height }) => (
                      <LineAreaGraph
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
            <Grid item xs={6} sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ border: "1px solid black", p: 2, height: "22rem" }}>
                <h2>SI Score Trend</h2>
                <div style={{ height: "267px" }}>
                  <ParentSize>
                    {({ width, height }) => (
                      <LineAreaGraph
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
            <Grid item xs={6} sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ border: "1px solid black", p: 2, height: "22rem" }}>
                <h2>Water Consumption</h2>
                <div style={{ height: "267px" }}>
                  {/* <ParentSize>
                    {({ width, height }) => (
                      <LineAreaGraph
                        // colors={colors}
                        // data={data}
                        width={width}
                        height={height}
                      />
                    )}
                  </ParentSize> */}
                </div>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2.5}>
        <Grid item xs={3}>
          <Box
            sx={{
              border: "1px solid black",
              p: "16px 16px 32px 16px",
              display: "flex",
              flexDirection: "column",
              height: "22rem",
            }}
          >
            <h2>
              Emissions Breakdown{" "}
              <span className="sustain-subheading-h2">(In Million tCO2e)</span>
            </h2>
            <div style={{ height: "227px" }}>
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
              border: "1px solid black",
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: "100%",
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
              border: "1px solid black",
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: "100%",
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

      <Grid container spacing={2.5}>
        <Grid item xs={3}>
          <Box
            sx={{
              border: "1px solid black",
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: "22rem",
            }}
          >
            <h2>Electricity Consumption Breakdown</h2>
            <div style={{ height: "227px" }}>
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
              border: "1px solid black",
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: "100%",
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
              border: "1px solid black",
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <h2>Waste Treatment</h2>
            <div style={{ height: "227px" }}>
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

      <Grid container spacing={2.5}>
        <Grid item xs={3} sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ border: "1px solid black", p: 2, height: "22rem" }}>
            <h2>Water Consumption</h2>
            <div style={{ height: "227px" }}>
              <ParentSize>
                {({ width, height }) => (
                  <DoughnutChart
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
          <Box sx={{ border: "1px solid black", p: 2 }}>Equal Div 1</Box>
        </Grid>
        <Grid item xs={3} sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ border: "1px solid black", p: 2, height: "22rem" }}>
            <h2>Waste Water Generated and Treated</h2>
            <div style={{ height: "267px" }}>
              <ParentSize>
                {({ width, height }) => (
                  <HorizontalBarChart
                    colors={colors}
                    data={horizontalData}
                    width={width}
                    height={height}
                  />
                )}
              </ParentSize>
            </div>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2.5}>
        <Grid item xs={3} sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ border: "1px solid black", p: 2, flexGrow: 1 }}>
            <h2>Water Generation</h2>
            <div style={{ height: "227px" }}>
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
          <Box sx={{ border: "1px solid black", p: 2, flexGrow: 1 }}>
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
          <Box sx={{ border: "1px solid black", p: 2, height: "22rem" }}>
            <h2>Waste Water Generated and Treated</h2>
            <div style={{ height: "227px" }}>
              <ParentSize>
                {({ width, height }) => (
                  <DoughnutChart
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
    </div>
  );
};

export default SustainabilityIndex;
