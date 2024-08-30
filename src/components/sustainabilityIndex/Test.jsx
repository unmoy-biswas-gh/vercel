/* eslint-disable no-use-before-define */
import React, { useState } from "react";
import Pie from "@visx/shape/lib/shapes/Pie";
import { scaleOrdinal } from "@visx/scale";
import { Group } from "@visx/group";
import { animated, useTransition, interpolate } from "@react-spring/web";

// Data and Colors
const data = [
  { label: "SCOPE 1", value: 40 },
  { label: "SCOPE 2", value: 30 },
  { label: "SCOPE 3", value: 30 },
];

const colors = ["#02B880", "#E1F4F3", "#B1E9D8"];

// Accessor functions
const value = (d) => d.value;

// Color scale
const colorScale = scaleOrdinal({
  domain: data.map((d) => d.label),
  range: colors,
});

const defaultMargin = { top: 20, right: 20, bottom: 20, left: 20 };

export default function CustomPieChart({
  width,
  height,
  margin = defaultMargin,
  animate = true,
}) {
  const [selectedSlice, setSelectedSlice] = useState(null);

  if (width < 10) return null;

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const radius = Math.min(innerWidth, innerHeight) / 2;
  const centerY = innerHeight / 2;
  const centerX = innerWidth / 2;

  return (
    <svg width={width} height={height}>
      <Group top={centerY + margin.top} left={centerX + margin.left}>
        <Pie
          data={
            selectedSlice
              ? data.filter(({ label }) => label === selectedSlice)
              : data
          }
          pieValue={value}
          outerRadius={radius} // Use the full radius to fill the chart
          innerRadius={0} // Set inner radius to 0 for a full pie chart
          cornerRadius={3}
          padAngle={0.005}
        >
          {(pie) => (
            <AnimatedPie
              {...pie}
              animate={animate}
              getKey={(arc) => arc.data.label}
              onClickDatum={({ data: { label } }) =>
                animate &&
                setSelectedSlice(
                  selectedSlice && selectedSlice === label ? null : label
                )
              }
              getColor={(arc) => colorScale(arc.data.label)}
            />
          )}
        </Pie>
      </Group>
    </svg>
  );
}

// react-spring transition definitions
const fromLeaveTransition = ({ endAngle }) => ({
  startAngle: endAngle > Math.PI ? 2 * Math.PI : 0,
  endAngle: endAngle > Math.PI ? 2 * Math.PI : 0,
  opacity: 0,
});

const enterUpdateTransition = ({ startAngle, endAngle }) => ({
  startAngle,
  endAngle,
  opacity: 1,
});

function AnimatedPie({ animate, arcs, path, getKey, getColor, onClickDatum }) {
  const transitions = useTransition(arcs, {
    from: animate ? fromLeaveTransition : enterUpdateTransition,
    enter: enterUpdateTransition,
    update: enterUpdateTransition,
    leave: animate ? fromLeaveTransition : enterUpdateTransition,
    keys: getKey,
  });

  return transitions((props, arc, { key }) => {
    const [centroidX, centroidY] = path.centroid(arc);
    const hasSpaceForLabel = arc.endAngle - arc.startAngle >= 0.1;

    return (
      <g key={key}>
        <animated.path
          d={interpolate(
            [props.startAngle, props.endAngle],
            (startAngle, endAngle) =>
              path({
                ...arc,
                startAngle,
                endAngle,
              })
          )}
          fill={getColor(arc)}
          onClick={() => onClickDatum(arc)}
          onTouchStart={() => onClickDatum(arc)}
        />
      </g>
    );
  });
}
