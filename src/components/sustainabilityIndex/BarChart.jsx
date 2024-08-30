/* eslint-disable no-use-before-define */
import React from "react";
import { BarGroup } from "@visx/shape";
import { Group } from "@visx/group";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { scaleBand, scaleLinear, scaleOrdinal } from "@visx/scale";
import { animated, useTransition, to } from "@react-spring/web";

const defaultMargin = { top: 30, right: 0, bottom: 30, left: 30 };

export default function BarChart({
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
  const x0Scale = scaleBand({
    domain: data.map((d) => d.quarter),
    padding: 0.3, // Increase padding between groups
    range: [0, xMax],
  });

  const x1Scale = scaleBand({
    domain: keys,
    padding: 0.1, // Add padding between bars within the same group
    range: [0, x0Scale.bandwidth()],
  });

  const yScale = scaleLinear({
    domain: [0, 80],
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
        <BarGroup
          data={data}
          keys={keys}
          height={yMax}
          x0={(d) => d.quarter}
          x0Scale={x0Scale}
          x1Scale={x1Scale}
          yScale={yScale}
          color={colorScale}
        >
          {(barGroups) =>
            barGroups.map((barGroup) => (
              <Group
                key={`bar-group-${barGroup.index}-${barGroup.x0}`}
                left={barGroup.x0}
              >
                {barGroup.bars.map((bar) => (
                  <AnimatedBar
                    key={`bar-group-bar-${barGroup.index}-${bar.index}`}
                    bar={bar}
                    animate={animate}
                  />
                ))}
              </Group>
            ))
          }
        </BarGroup>
        <AxisLeft
          hideAxisLine
          tickLineProps={{ display: "none" }}
          scale={yScale}
          tickValues={[0, 20, 40, 60, 80]}
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
          scale={x0Scale}
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

// AnimatedBar Component
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
