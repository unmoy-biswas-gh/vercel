import React from "react";
import { Group } from "@visx/group";
import { AxisLeft, AxisBottom } from "@visx/axis";
import { scaleBand, scaleLinear, scaleOrdinal } from "@visx/scale";
import { animated, useTransition } from "@react-spring/web";

const defaultMargin = { top: 10, right: 10, bottom: 30, left: 50 };

export default function HorizontalBarChart({
  data,
  colors,
  width,
  height,
  margin = defaultMargin,
  animate = true,
}) {
  if (width < 10) return null;

  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  // Scales
  const xScale = scaleLinear({
    domain: [0, 100], // Always going from 0 to 100%
    range: [0, xMax],
  });

  const yScale = scaleBand({
    domain: data.map((d) => d.label),
    padding: 0.2, // Padding between bars
    range: [0, yMax],
  });

  const colorScale = scaleOrdinal({
    domain: ["background", "fill"],
    range: ["#E1F4F3", colors[0]], // Light color for background, dark color for fill
  });

  return (
    <svg width={width} height={height}>
      <Group top={margin.top} left={margin.left}>
        {data.map((d, i) => {
          const yPosition = yScale(d.label);
          const barHeight = yScale.bandwidth();
          const backgroundBarWidth = xScale(100); // Full background bar width (100%)
          const filledBarWidth = xScale(d.value); // Width based on data value

          return (
            <Group key={`bar-${i}`}>
              {/* Background Bar */}
              <rect
                x={0}
                y={yPosition}
                width={backgroundBarWidth}
                height={barHeight}
                fill={colorScale("background")}
              />
              {/* Filled Bar */}
              <AnimatedBar
                x={0}
                y={yPosition}
                width={filledBarWidth}
                height={barHeight}
                fill={colorScale("fill")}
                animate={animate}
              />
            </Group>
          );
        })}

        {/* Left Axis (y-axis) */}
        <AxisLeft
          scale={yScale}
          stroke="#333"
          tickStroke="#333"
          hideAxisLine
          hideTicks
          tickLabelProps={() => ({
            fill: "#333",
            fontSize: 9,
            textAnchor: "end",
            dx: "-0.25em",
            dy: "0.33em",
          })}
        />

        {/* Bottom Axis (x-axis) */}
        <AxisBottom
          hideTicks
          top={yMax}
          scale={xScale}
          tickValues={[0, 20, 40, 60, 80, 100]} // Explicitly set tick values
          stroke="#333"
          tickStroke="#333"
          hideAxisLine
          tickLabelProps={() => ({
            fill: "#333",
            fontSize: 9,
            textAnchor: "middle",
          })}
        />
      </Group>
    </svg>
  );
}

// AnimatedBar Component for Horizontal Stacked Bars
function AnimatedBar({ x, y, width, height, fill, animate }) {
  const transitions = useTransition(width, {
    from: { width: 0 },
    enter: { width },
    update: { width },
    leave: { width: 0 },
  });

  return transitions((props, item, state, key) => (
    <animated.rect
      key={key}
      x={x}
      y={y}
      width={props.width}
      height={height}
      fill={fill}
    />
  ));
}
