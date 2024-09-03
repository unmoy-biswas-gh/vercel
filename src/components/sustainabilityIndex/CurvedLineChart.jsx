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

export default function CurvedLineChart({ width, height, color }) {
  // Updated data
  const newData = [
    { quarter: "Q1 2023", value: 2 },
    { quarter: "Q2 2023", value: 4 },
    { quarter: "Q3 2023", value: 2 },
    { quarter: "Q4 2023", value: 4 },
    { quarter: "Q1 2024", value: 8 },
    { quarter: "Q2 2024", value: 7 },
  ];

  return (
    <XYChart
      xScale={{ type: "band", padding: 0.1 }} // Reduced padding for better fit
      yScale={{ type: "linear" }}
      height={height}
      width={width}
      margin={{ top: 40, right: 0, bottom: 30, left: 45 }} // Reduced left margin
    >
      {/* Define the gradient */}
      <LinearGradient id="curved-green-gradient" from="#92dec7" to="#fff" />

      {/* AnimatedAreaSeries for the filled area */}
      <AnimatedAreaSeries
        dataKey="Area"
        data={newData}
        xAccessor={(d) => d.quarter}
        yAccessor={(d) => d.value}
        fillOpacity={0.4} // Controls the opacity of the area below the line
        fill="url(#curved-green-gradient)" // Apply the gradient
        curve={curveNatural} // Apply the natural curve
      />

      {/* AnimatedLineSeries for the line with animation */}
      <AnimatedLineSeries
        dataKey="Line"
        data={newData}
        xAccessor={(d) => d.quarter}
        yAccessor={(d) => d.value}
        stroke={color} // Updated line color
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
              fill={color} // Dot color matching the line
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
        label="In Million m3"
        labelOffset={0}
        tickLabelProps={{
          dx: "01em",
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
                backgroundColor: color,
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
