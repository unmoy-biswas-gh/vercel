import React from "react";
import {
  XYChart,
  AnimatedLineSeries,
  GlyphSeries,
  Tooltip,
  Axis,
} from "@visx/xychart";

export default function SimpleLineChart({ width, height, color }) {
  // Sample data
  const data = [
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
    <XYChart
      xScale={{ type: "band", padding: 0.1 }} // Band scale for x-axis
      yScale={{ type: "linear" }} // Linear scale for y-axis
      height={height}
      width={width}
    >
      {/* Animated Line series */}
      <AnimatedLineSeries
        dataKey="Line"
        data={data}
        xAccessor={(d) => d.quarter}
        yAccessor={(d) => d.value}
        stroke={color} // Line color
        strokeWidth={1} // Line thickness
      />

      {/* Glyph series for dots */}
      <GlyphSeries
        dataKey="Points"
        data={data}
        xAccessor={(d) => d.quarter}
        yAccessor={(d) => d.value}
        renderGlyph={(glyphProps) => {
          const { x, y } = glyphProps;
          return (
            <circle
              cx={x}
              cy={y}
              r={4} // Radius of the dot
              fill={color} // Dot color
            />
          );
        }}
      />

      {/* Axes */}
      <Axis
        orientation="bottom"
        hideAxisLine
        hideTicks
        tickLabelProps={{ fontSize: "10px" }}
      />
      <Axis
        orientation="left"
        hideAxisLine
        hideTicks
        numTicks={5}
        tickLabelProps={{ fontSize: "10px" }}
      />

      {/* Tooltip */}
      <Tooltip
        offsetLeft={-120}
        offsetTop={0}
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
