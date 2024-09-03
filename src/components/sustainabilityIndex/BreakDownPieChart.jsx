import React from "react";
import { Group } from "@visx/group";
import { Pie } from "@visx/shape";
import { scaleOrdinal } from "@visx/scale";
import { Text } from "@visx/text";

const colors = scaleOrdinal({
  domain: ["Governance", "Social", "Environmental", "Base"],
  range: ["#FFCC80", "#FFAB91", "#A5D6A7", "#90CAF9"],
});

const pieData = [
  { label: "Governance", value: 24 },
  { label: "Social", value: 24 },
  { label: "Environmental", value: 24 },
  { label: "Base", value: 28 },
];

function BreakDownPieChart({ width, height }) {
  const innerRadius = 60;
  const outerRadius = Math.min(width, height) / 2;

  return (
    <svg width={width} height={height}>
      <Group top={height / 2} left={width / 2}>
        <Pie
          data={pieData}
          pieValue={(d) => d.value}
          outerRadius={outerRadius}
          innerRadius={innerRadius}
          padAngle={0.01}
        >
          {(pie) =>
            pie.arcs.map((arc, index) => {
              const [centroidX, centroidY] = pie.path.centroid(arc);
              const sliceFill = colors(pieData[index].label);
              return (
                <g key={`arc-${arc.data.label}-${index}`}>
                  <path d={pie.path(arc)} fill={sliceFill} />
                  <Text
                    x={centroidX}
                    y={centroidY}
                    dy=".33em"
                    fontSize={10}
                    textAnchor="middle"
                    fill="#fff"
                  >
                    {arc.data.label}
                  </Text>
                </g>
              );
            })
          }
        </Pie>
        <Text textAnchor="middle" dy=".33em" fontSize={28} fill="#333">
          62.3
        </Text>
      </Group>
    </svg>
  );
}

export default BreakDownPieChart;
