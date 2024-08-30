/* eslint-disable no-use-before-define */
import React from "react";
import { BarStack } from "@visx/shape";
import { Group } from "@visx/group";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { scaleBand, scaleLinear, scaleOrdinal } from "@visx/scale";
import { animated, useTransition, to } from "@react-spring/web";

const defaultMargin = { top: 30, right: 0, bottom: 30, left: 30 };

export default function StackedBarChart({
  data,
  colors,
  width,
  height,
  margin = defaultMargin,
  animate = true,
}) {
  if (width < 10) return null;

  const keys = ["sox", "nox"];
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  // Scales
  const xScale = scaleBand({
    domain: data.map((d) => d.quarter),
    padding: 0.2, // Padding between bars
    range: [0, xMax],
  });

  const yScale = scaleLinear({
    domain: [0, 100], // Adjust according to your maximum stacked value
    nice: true,
    range: [yMax, 0],
  });

  const colorScale = scaleOrdinal({
    domain: keys,
    range: colors,
  });

  return (
    <svg width={width} height={height}>
      <Group top={margin.top} left={margin.left}>
        <BarStack
          data={data}
          keys={keys}
          x={(d) => d.quarter}
          xScale={xScale}
          yScale={yScale}
          color={colorScale}
        >
          {(barStacks) =>
            barStacks.map((barStack) =>
              barStack.bars.map((bar) => (
                <AnimatedBar
                  key={`bar-stack-${barStack.index}-${bar.index}`}
                  bar={bar}
                  animate={animate}
                />
              ))
            )
          }
        </BarStack>
        <AxisLeft
          hideAxisLine
          tickLineProps={{ display: "none" }}
          scale={yScale}
          tickValues={[0, 20, 40, 60, 80, 100]}
          stroke="#333"
          tickStroke="#333"
          tickLabelProps={() => ({
            fill: "#333",
            fontSize: 12,
            textAnchor: "end",
            dy: "0.33em",
          })}
        />
        <AxisBottom
          tickLineProps={{ display: "none" }}
          hideAxisLine
          top={yMax}
          scale={xScale}
          stroke="#333"
          tickStroke="#333"
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

// AnimatedBar Component for Stacked Bars
function AnimatedBar({ bar, animate }) {
  const transitions = useTransition(bar.height, {
    from: { height: 0, y: bar.y + bar.height },
    enter: { height: bar.height, y: bar.y },
    update: { height: bar.height, y: bar.y },
    leave: { height: 0, y: bar.y + bar.height },
  });

  return transitions((props, item, state, key) => (
    <animated.rect
      key={key}
      x={bar.x}
      y={props.y}
      width={bar.width}
      height={props.height}
      fill={bar.color}
    />
  ));
}
