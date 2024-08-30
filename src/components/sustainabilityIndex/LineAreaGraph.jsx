import React from "react";
import {
  XYChart,
  AnimatedAreaSeries,
  AnimatedLineSeries,
  AnimatedGlyphSeries,
  Tooltip,
} from "@visx/xychart";
import { LinearGradient } from "@visx/gradient";
import { curveNatural } from "@visx/curve";
import { Axis } from "@visx/xychart";

export default function LineAreaGraph({ width, height }) {
  // Updated data
  const newData = [
    { quarter: "Q1 2023", value: 0.1 },
    { quarter: "Q2 2023", value: 0.25 },
    { quarter: "Q3 2023", value: 0.4 },
    { quarter: "Q4 2023", value: 0.5 },
    { quarter: "Q1 2024", value: 0.6 },
    { quarter: "Q2 2024", value: 0.8 },
  ];

  return (
    <XYChart
      xScale={{ type: "band", padding: 0.1 }} // Reduced padding for better fit
      yScale={{ type: "linear" }}
      height={height}
      width={width}
      margin={{ top: 40, right: 0, bottom: 30, left: 30 }} // Reduced left margin
    >
      {/* Define the gradient */}
      <LinearGradient
        id="lightblue-gradient"
        from="#8debff" // Start with the same blue color
        to="#fff" // Light blue towards the bottom
      />

      {/* AnimatedAreaSeries for the filled area */}
      <AnimatedAreaSeries
        dataKey="Area"
        data={newData}
        xAccessor={(d) => d.quarter}
        yAccessor={(d) => d.value}
        fillOpacity={0.4} // Controls the opacity of the area below the line
        fill="url(#lightblue-gradient)" // Apply the gradient
        curve={curveNatural} // Apply the natural curve
      />

      {/* AnimatedLineSeries for the line with animation */}
      <AnimatedLineSeries
        dataKey="Line"
        data={newData}
        xAccessor={(d) => d.quarter}
        yAccessor={(d) => d.value}
        stroke="#059bf0" // Updated line color
        strokeWidth={1} // Line thickness
        curve={curveNatural} // Apply the natural curve
        strokeOpacity={1} // Ensure full opacity
      />

      {/* AnimatedGlyphSeries for the data points */}
      <AnimatedGlyphSeries
        dataKey="Points"
        data={newData}
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
              fill="#059bff" // Dot color matching the line
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
                backgroundColor: "#059bff",
                height: 12,
                width: 12,
              }}
            ></div>
            <div>SI Score {tooltipData?.nearestDatum?.datum.value}</div>
          </div>
        )}
      />
    </XYChart>
  );
}
