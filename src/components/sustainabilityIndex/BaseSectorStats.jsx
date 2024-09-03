import { Box, Grid, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import LineAreaGraph from "./LineAreaGraph";
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import base from "../../assets/sustainabilityReport/baseSector.svg";
import envGrade from "../../assets/sustainabilityReport/envGrade.svg";
import govGrade from "../../assets/sustainabilityReport/governanceGrade.svg";
import socialGrade from "../../assets/sustainabilityReport/socialGrade.svg";
import SelectFilter from "./SelectFilter";
import PieChart from "./PieChart";
import BreakDownPieChart from "./BreakDownPieChart";

const BaseSectorCard = ({ textColor, icon, title, grade }) => {
  return (
    <Box
      sx={{
        height: "142px",
        width: "100%",
        bgcolor: "#fff",
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
      <Typography variant="h5" sx={{ color: textColor, fontSize: "20px" }}>
        {grade}
      </Typography>
    </Box>
  );
};

const BaseSectorStats = () => {
  const [intensityFilter, setIntensityFilter] = useState({
    trend: "",
    denominator: "",
  });

  const pieData = [
    { label: "SCOPE 1", value: 50 },
    { label: "SCOPE 2", value: 30 },
    { label: "SCOPE 3", value: 30 },
  ];

  const data = [
    {
      id: 0,
      icon: base,
      title: "Base Sector",
      textColor: "#FFA351",
      grade: "BC",
    },
    {
      id: 1,
      icon: envGrade,
      title: "Environmental Grade",
      textColor: "#81DE76",
      grade: "AB",
    },
    {
      id: 2,
      icon: socialGrade,
      title: "Social Grade",
      textColor: "#ED4A3C",
      grade: "CC",
    },
    {
      id: 3,
      icon: govGrade,
      title: "Governance Grade",
      textColor: "#FFA351",
      grade: "BB",
    },
  ];

  const intensitiesTableHeading = [
    "X",
    "Total waste generated (tonnes)",
    "GHG emissions: Scope 1 and Scope 2 (tCO2e)",
    "Water consumption (m3)",
  ];

  const intensitiesTableData = [
    {
      x: "per employee",
      totalWaste: "0.21",
      ghg: "0.45",
      waterConsumption: "0.45",
    },
    {
      x: "per million USD of revenue generated",
      totalWaste: "3.15",
      ghg: "67.5",
      waterConsumption: "67.5",
    },
    {
      x: "per m2 of GFA",
      totalWaste: "4.2",
      ghg: "9",
      waterConsumption: "90",
    },
    {
      x: "per unit production",
      totalWaste: "0.105",
      ghg: "0.225",
      waterConsumption: "2.25",
    },
  ];

  const actionableHeading = ["KPI", "", "Actionable Insights", ""];
  const colors = ["#02B880", "#E1F4F3", "#B1E9D8"];

  const actionableData = [
    {
      kpi: "GHG Emissions Intensity",
      actionable1:
        "1. Implement high-efficiency motors (IE3 & IE4), pumps, fans and other equipment to reduce energy consumption and emissions.",
      actionable2:
        "2. Optimize boiler operations with smart control systems to minimize unnecessary energy use and associated emissions",
      actionable3: "3. Involve specialists in Equipment-sizing",
    },
    {
      kpi: "Water Intensity",
      actionable1:
        "1. Involve specialist in equipment selection to reduce water consumption intensity",
      actionable2:
        "2. Use smart metering and IoT sensors for real-time water use monitoring and leak detection.",
      actionable3:
        "3. Upgrade to water-efficient appliances and fixtures in all facilities",
    },
  ];

  const gradeData = [
    { grade: "AA", score: "> 75" },
    { grade: "AB", score: "> 75" },
    { grade: "BB", score: "> 75" },
    { grade: "BC", score: "> 75" },
    { grade: "CC", score: "> 75" },
    { grade: "CD", score: "> 75" },
    { grade: "DD", score: "> 75" },
    { grade: "FF", score: "> 75" },
  ];

  return (
    <>
      {/* WHITE DIVS */}
      <Grid container spacing={2.5} sx={{ mb: "20px" }}>
        {data.map((item) => (
          <Grid key={item.id} item xs={3}>
            <BaseSectorCard {...item} />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2.5} sx={{ mb: "20px" }}>
        <Grid
          item
          xs={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2.5,
          }}
        >
          <Box
            sx={{
              height: "142px",
              width: "100%",
              p: "20px 16px",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: "16px",
            }}
          >
            <div>
              <h2>Overall Grade</h2>
              <h3
                style={{
                  fontWeight: 500,
                  fontSize: "20px",
                  color: "#FFA351",
                  marginTop: "24px",
                }}
              >
                BC
              </h3>
            </div>
          </Box>

          <Box
            sx={{
              // height: "142px",
              height: "24rem",
              width: "100%",
              p: 2,
              // display: "flex",
              backgroundColor: "#fff",
              borderRadius: "16px",
              border: "1px solid black",
            }}
          >
            <h2>Score Break down</h2>
            <Typography sx={{ fontSize: "11px", marginBottom: 5 }}>
              *Total number of KPIs reported: 39/45
            </Typography>
            <div style={{ height: "220px" }}>
              <ParentSize>
                {({ width, height }) => (
                  // <PieChart
                  //   colors={colors}
                  //   data={pieData}
                  //   width={width}
                  //   height={height}
                  // />
                  <BreakDownPieChart height={height} width={width} />
                )}
              </ParentSize>
            </div>
          </Box>

          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: "16px",
              p: 2,
              border: "1px solid black",
              flexGrow: 1,
            }}
          ></Box>
        </Grid>
        <Grid item xs={9} sx={{ display: "flex", flexDirection: "column" }}>
          <Grid container spacing={2.5}>
            <Grid item xs={6} sx={{ display: "flex", flexDirection: "column" }}>
              <Box
                sx={{
                  p: 2,
                  height: "22rem",
                  bgcolor: "white",
                  borderRadius: "16px",
                }}
              >
                <h2>Intensities Table</h2>

                {/* INTENSITIES TABLE */}

                <Grid container>
                  {intensitiesTableHeading.map((item) => (
                    <Grid
                      key={item}
                      item
                      xs={3}
                      sx={{
                        mt: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "10px",
                        textAlign: "center",
                        fontWeight: 500,
                        p: "5px",
                      }}
                    >
                      {item}
                    </Grid>
                  ))}
                </Grid>

                <Grid container>
                  {intensitiesTableData.map((item, itemIndex) =>
                    Object.entries(item).map(
                      ([key, value], entryIndex, entries) => {
                        // Determine if the item is in one of the corners
                        const isTopLeft = itemIndex === 0 && entryIndex === 0;
                        const isTopRight =
                          itemIndex === 0 && entryIndex === entries.length - 1;
                        const isBottomLeft =
                          itemIndex === intensitiesTableData.length - 1 &&
                          entryIndex === 0;
                        const isBottomRight =
                          itemIndex === intensitiesTableData.length - 1 &&
                          entryIndex === entries.length - 1;

                        return (
                          <Grid
                            item
                            key={key}
                            xs={3}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "10px",
                              textAlign: "center",
                              fontWeight: 500,
                              p: "20px 8px",
                              border: "1px solid #E8E8E8",
                              borderTopLeftRadius: isTopLeft ? "8px" : 0,
                              borderTopRightRadius: isTopRight ? "8px" : 0,
                              borderBottomLeftRadius: isBottomLeft ? "8px" : 0,
                              borderBottomRightRadius: isBottomRight
                                ? "8px"
                                : 0,
                            }}
                          >
                            {value}
                          </Grid>
                        );
                      }
                    )
                  )}
                </Grid>
                {/* INTENSITIES TABLE END*/}
              </Box>
            </Grid>
            <Grid item xs={6} sx={{ display: "flex", flexDirection: "column" }}>
              <Box
                sx={{
                  p: 2,
                  height: "22rem",
                  bgcolor: "white",
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
                  <h2>Intensities Trend</h2>

                  <div style={{ display: "flex", gap: "10px" }}>
                    <SelectFilter
                      onChange={(e) => console.log(e.target.value)}
                      options={[
                        { name: "option1", value: "option1" },
                        { name: "option2", value: "option2" },
                      ]}
                      value={intensityFilter.trend}
                      placeholder={"Select Trend"}
                    />
                    <SelectFilter
                      onChange={(e) => console.log(e.target.value)}
                      options={[
                        { name: "option1", value: "option1" },
                        { name: "option2", value: "option2" },
                      ]}
                      value={intensityFilter.denominator}
                      placeholder={"Select Denominator"}
                    />
                  </div>
                </div>
                <div style={{ height: "267px" }}>
                  <ParentSize>
                    {({ width, height }) => (
                      <LineAreaGraph
                        // colors={colors}
                        // data={data}
                        gradientFrom={"#8debff"}
                        gradientTo={"#fff"}
                        lineColor={"#059BFF"}
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
                  height: "22rem",
                  bgcolor: "white",
                  borderRadius: "16px",
                }}
              >
                <h2>SI Score Trend</h2>
                <div style={{ height: "267px" }}>
                  <ParentSize>
                    {({ width, height }) => (
                      <LineAreaGraph
                        // colors={colors}
                        // data={data}
                        gradientFrom={"#8debff"}
                        gradientTo={"#fff"}
                        lineColor={"#059BFF"}
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
                  height: "22rem",
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: "white",
                  borderRadius: "16px",
                }}
              >
                <h2>Actionable Insights</h2>

                {/* ACTIONALBE TABLE */}

                <Grid container>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      padding: "10px 0px",
                      fontWeight: 500,
                      fontSize: "12px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      // whiteSpace: "nowrap",
                    }}
                  >
                    KPI
                  </Grid>
                  <Grid
                    item
                    xs={9}
                    sx={{
                      padding: "10px 0px",
                      fontWeight: 500,
                      fontSize: "12px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      // whiteSpace: "nowrap",
                    }}
                  >
                    Actionable Insights
                  </Grid>
                </Grid>

                <Grid sx={{ flexGrow: 1, overflow: "auto" }} container>
                  {actionableData.map((item, itemIndex) =>
                    Object.entries(item).map(
                      ([key, value], entryIndex, entries) => {
                        // Determine if the item is in one of the corners
                        const isTopLeft = itemIndex === 0 && entryIndex === 0;
                        const isTopRight =
                          itemIndex === 0 && entryIndex === entries.length - 1;
                        const isBottomLeft =
                          itemIndex === intensitiesTableData.length - 1 &&
                          entryIndex === 0;
                        const isBottomRight =
                          itemIndex === intensitiesTableData.length - 1 &&
                          entryIndex === entries.length - 1;

                        return (
                          <Grid
                            item
                            key={key}
                            xs={3}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "10px",
                              textAlign: key === "kpi" ? "center" : "left",
                              fontWeight: key === "kpi" ? 500 : 400,
                              p: "4px",
                              border: "1px solid #E8E8E8",
                              borderTopLeftRadius: isTopLeft ? "8px" : 0,
                              borderTopRightRadius: isTopRight ? "8px" : 0,
                              borderBottomLeftRadius: isBottomLeft ? "8px" : 0,
                              borderBottomRightRadius: isBottomRight
                                ? "8px"
                                : 0,
                              lineHeight: "14px",
                            }}
                          >
                            {value}
                          </Grid>
                        );
                      }
                    )
                  )}
                </Grid>

                {/* ACTIONALBE TABLE ENDS */}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <div className="grading-section">
        <Grid container spacing={2.5}>
          <Grid item xs={9}>
            <Box sx={{ p: "8px", bgcolor: "white", borderRadius: "16px" }}>
              <Grid container>
                <Grid
                  item
                  xs={1.33}
                  sx={{
                    fontSize: "11px",
                    textAlign: "center",
                    p: "20px",
                    fontWeight: 500,
                  }}
                >
                  Grade
                </Grid>
                {gradeData.map((item) => {
                  const color =
                    item.grade[0] === "A"
                      ? "#ED4A3C"
                      : item.grade[0] === "B"
                      ? "#FFA351"
                      : "#81DE76";
                  return (
                    <Grid
                      key={item.grade}
                      item
                      xs={1.33}
                      sx={{
                        color: color,
                        fontSize: "12px",
                        textAlign: "center",
                        p: "20px",
                        fontWeight: 400,
                        border: "1px solid #F2F2F2",
                      }}
                    >
                      {item.grade}
                    </Grid>
                  );
                })}
              </Grid>
              <Grid container>
                <Grid
                  item
                  xs={1.33}
                  sx={{
                    fontSize: "11px",
                    textAlign: "center",
                    p: "20px 0",
                    fontWeight: 500,
                  }}
                >
                  Score Range (Sectional/Overall)
                </Grid>
                {gradeData.map((item) => {
                  return (
                    <Grid
                      key={item.grade}
                      item
                      xs={1.33}
                      sx={{
                        fontSize: "11px",
                        textAlign: "center",
                        p: "20px",
                        fontWeight: 400,
                        border: "1px solid #F2F2F2",
                      }}
                    >
                      {item.score}
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box sx={{ bgcolor: "white", borderRadius: "16px" }}>
              <Grid container sx={{ height: "140px" }}>
                <Grid
                  item
                  xs={4}
                  sx={{
                    bgcolor: "#ED4A3C",
                    heigh: "100%",
                    borderRadius: "16px 0 0 16px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "white",
                  }}
                >
                  Laggard
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{
                    bgcolor: "#FFA351",
                    heigh: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "white",
                  }}
                >
                  Average
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{
                    bgcolor: "#81DE76",
                    heigh: "100%",
                    borderRadius: "0 16px 16px 0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "white",
                  }}
                >
                  Leader
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default BaseSectorStats;
