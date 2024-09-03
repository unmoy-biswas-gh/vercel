/* eslint-disable no-use-before-define */
import React, { useState } from "react";
import Pie from "@visx/shape/lib/shapes/Pie";
import { scaleOrdinal } from "@visx/scale";
import { Group } from "@visx/group";
import { LegendOrdinal } from "@visx/legend";
import { animated, useTransition, to } from "@react-spring/web";

// Accessor functions
const value = (d) => d.value;

const defaultMargin = { top: 20, right: 20, bottom: 10, left: 20 };

export default function DoughnutChart({
  data = [], // Default to an empty array if data is not provided
  colors,
  width,
  height,
  margin = defaultMargin,
  animate = true,
  centerText = "", // New prop for center text
}) {
  const [selectedSlice, setSelectedSlice] = useState(null);

  if (width < 10) return null;

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const radius = Math.min(innerWidth, innerHeight) / 2;
  const centerY = innerHeight / 2;
  const centerX = innerWidth / 2;
  const innerRadius = radius * 0.8;

  // Color scale
  const colorScale = scaleOrdinal({
    domain: data.map((d) => d.label),
    range: colors,
  });

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <svg width={width} height={height}>
        <Group top={centerY + margin.top} left={centerX + margin.left}>
          {/* Text in the middle of the doughnut */}
          <text
            x={0}
            y={0}
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fontSize: "1.5rem", fontWeight: "bold" }}
          >
            {centerText}
          </text>
          <Pie
            data={
              selectedSlice
                ? data.filter(({ label }) => label === selectedSlice)
                : data
            }
            pieValue={value}
            outerRadius={radius} // Use the full radius to fill the chart
            innerRadius={innerRadius} // Set inner radius to create a doughnut chart
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
      {/* <LegendOrdinal
        scale={colorScale}
        direction="row"
        itemDirection="row"
        shapeHeight={10}
        shapeWidth={10}
        shape="circle"
        style={{
          display: "flex",
          gap: "5px",
          justifyContent: "center",
          marginTop: 10,
          fontSize: 10,
        }}
      /> */}
    </div>
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
          d={to([props.startAngle, props.endAngle], (startAngle, endAngle) =>
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
