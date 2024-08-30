import React from "react";
import {
  XYChart,
  AnimatedAreaSeries,
  AnimatedLineSeries,
  AnimatedGlyphSeries,
  Tooltip,
} from "@visx/xychart";
import { LinearGradient } from "@visx/gradient";
import { Axis } from "@visx/xychart";

export default function MultipleLineAreaChart({ width, height }) {
  // Updated data for two lines
  const data2 = [
    { quarter: "Q1 2023", value: 60 },
    { quarter: "Q2 2023", value: 50 },
    { quarter: "Q3 2023", value: 45 },
    { quarter: "Q4 2023", value: 50 },
    { quarter: "Q1 2024", value: 55 },
    { quarter: "Q2 2024", value: 40 },
  ];

  const data1 = [
    { quarter: "Q1 2023", value: 10 },
    { quarter: "Q2 2023", value: 20 },
    { quarter: "Q3 2023", value: 18 },
    { quarter: "Q4 2023", value: 12 },
    { quarter: "Q1 2024", value: 8 },
    { quarter: "Q2 2024", value: 5 },
  ];

  // Find the minimum value across both datasets
  const minValue = Math.min(
    Math.min(...data1.map((d) => d.value)),
    Math.min(...data2.map((d) => d.value))
  );

  return (
    <XYChart
      xScale={{ type: "band" }} // Reduced padding for better fit
      yScale={{ type: "linear", domain: [minValue, 60] }} // Adjust domain to start from minValue
      height={height}
      width={width}
      margin={{ top: 40, right: 0, bottom: 30, left: 30 }} // Adjust margins as needed
    >
      {/* Define the gradients */}
      <LinearGradient id="green-gradient" from="#92dec7" to="#fff" />
      <LinearGradient id="light-green-gradient" from="#e2f4ef" to="#f8f9f9" />

      {/* AnimatedAreaSeries for the filled areas */}
      <AnimatedAreaSeries
        dataKey="Area 1"
        data={data1}
        xAccessor={(d) => d.quarter}
        yAccessor={(d) => d.value}
        fillOpacity={0.6} // Slightly reduce opacity to prevent interference
        fill="url(#green-gradient)" // Apply the gradient
      />

      <AnimatedAreaSeries
        dataKey="Area 2"
        data={data2}
        xAccessor={(d) => d.quarter}
        yAccessor={(d) => d.value}
        fillOpacity={0.6} // Slightly reduce opacity to prevent interference
        fill="url(#light-green-gradient)" // Apply the gradient
      />

      {/* AnimatedLineSeries for the lines */}
      <AnimatedLineSeries
        dataKey="Line 1"
        data={data1}
        xAccessor={(d) => d.quarter}
        yAccessor={(d) => d.value}
        stroke="#02B880" // Line color for the first line
        strokeWidth={1.5} // Slightly increase line thickness for better visibility
        strokeOpacity={1} // Ensure full opacity
      />

      <AnimatedLineSeries
        dataKey="Line 2"
        data={data2}
        xAccessor={(d) => d.quarter}
        yAccessor={(d) => d.value}
        stroke="#B1E9D8" // Line color for the second line
        strokeWidth={1.5} // Slightly increase line thickness for better visibility
        strokeOpacity={1} // Ensure full opacity
      />

      {/* AnimatedGlyphSeries for the data points */}
      <AnimatedGlyphSeries
        dataKey="Points 1"
        data={data1}
        xAccessor={(d) => d.quarter}
        yAccessor={(d) => d.value}
        size={75} // Size of the glyph (adjust as needed)
        renderGlyph={(glyphProps) => {
          const { x, y } = glyphProps;
          return (
            <circle
              cx={x}
              cy={y}
              r={4} // Radius of the dot
              fill="#02B880" // Dot color matching the first line
              stroke="#fff"
              strokeWidth={1}
            />
          );
        }}
      />

      <AnimatedGlyphSeries
        dataKey="Points 2"
        data={data2}
        xAccessor={(d) => d.quarter}
        yAccessor={(d) => d.value}
        size={75} // Size of the glyph (adjust as needed)
        renderGlyph={(glyphProps) => {
          const { x, y } = glyphProps;
          return (
            <circle
              cx={x}
              cy={y}
              r={4} // Radius of the dot
              fill="#B1E9D8" // Dot color matching the second line
              stroke="#fff"
              strokeWidth={1}
            />
          );
        }}
      />

      <Axis
        orientation="bottom"
        hideAxisLine
        hideTicks
        tickLabelProps={{
          fontSize: 9,
        }}
      />
      <Axis
        orientation="left"
        hideAxisLine
        hideTicks
        numTicks={4} // Reduce the number of labels on the left axis
        label="Electricity Consumption (in MWh)" // Add a label to the left axis
        labelOffset={8} // Adjust space between graph and label
        labelProps={{
          fontSize: 10,
          textAnchor: "middle",
          fill: "#333",
          transform: "rotate(-90)", // Rotate the label to align with the y-axis
        }}
        tickLabelProps={{
          dx: "1.8em", // Move the tick labels closer to the graph
        }}
      />
      <Tooltip
        offsetLeft={-120}
        offsetTop={-40}
        renderTooltip={({ tooltipData }) => (
          <div
            style={{
              padding: "8px",
              fontWeight: 400,
              fontSize: 11,
              display: "flex",
              gap: 8,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                backgroundColor:
                  tooltipData?.nearestDatum?.key === "Line 1"
                    ? "#02B880"
                    : "#B1E9D8",
                height: 12,
                width: 12,
              }}
            ></div>
            <div>
              {tooltipData?.nearestDatum?.key === "Line 1"
                ? `Line 1: ${tooltipData?.nearestDatum?.datum.value}`
                : `Line 2: ${tooltipData?.nearestDatum?.datum.value}`}
            </div>
          </div>
        )}
      />
    </XYChart>
  );
}
