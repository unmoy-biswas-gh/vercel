import React from "react";
import { LinePath, AreaClosed } from "@visx/shape";
import { curveMonotoneX } from "@visx/curve";
import { Group } from "@visx/group";
import { AxisLeft, AxisBottom } from "@visx/axis";
import { scaleTime, scaleLinear } from "@visx/scale";
import { Tooltip, withTooltip } from "@visx/tooltip";
import { localPoint } from "@visx/event";
import { bisector } from "d3-array";
import { LinearGradient } from "@visx/gradient";

const data = [
  { date: new Date("2023-01-01"), score: 0.1 },
  { date: new Date("2023-03-01"), score: 0.2 },
  { date: new Date("2023-06-01"), score: 0.3 },
  { date: new Date("2023-09-01"), score: 0.4 },
  { date: new Date("2024-01-01"), score: 0.5 },
  { date: new Date("2024-03-01"), score: 0.6 },
];

const bisectDate = bisector((d) => d.date).left;

const TrendChart = ({
  width = 500,
  height = 300,
  margin = { top: 40, right: 30, bottom: 50, left: 40 },
  showTooltip,
  hideTooltip,
  tooltipData,
  tooltipTop = 0,
  tooltipLeft = 0,
}) => {
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  // Scales
  const xScale = scaleTime({
    domain: [data[0].date, data[data.length - 1].date],
    range: [0, xMax],
  });

  const yScale = scaleLinear({
    domain: [0, 1],
    range: [yMax, 0],
    nice: true,
  });

  const handleTooltip = (event) => {
    const { x } = localPoint(event) || { x: 0 };
    const x0 = xScale.invert(x - margin.left);
    const index = bisectDate(data, x0, 1);
    const d0 = data[index - 1];
    const d1 = data[index];
    let d = d0;
    if (d1 && x0 - d0.date > d1.date - x0) {
      d = d1;
    }
    showTooltip({
      tooltipData: d,
      tooltipLeft: xScale(d.date) + margin.left,
      tooltipTop: yScale(d.score) + margin.top,
    });
  };

  return (
    <svg
      width={"100%"}
      height={"100%"}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <rect width={width} height={height} fill="#f8f9fa" rx={14} />

      <LinearGradient
        id="area-gradient"
        from="#059BFF"
        to="#3b82f6"
        toOpacity={0.2}
      />

      <Group left={margin.left} top={margin.top}>
        <AreaClosed
          data={data}
          x={(d) => xScale(d.date)}
          y={(d) => yScale(d.score)}
          yScale={yScale}
          fill="url(#area-gradient)"
          curve={curveMonotoneX}
        />
        <LinePath
          data={data}
          x={(d) => xScale(d.date)}
          y={(d) => yScale(d.score)}
          stroke="#3b82f6"
          strokeWidth={2}
          curve={curveMonotoneX}
        />
        {data.map((d, i) => (
          <circle
            key={`point-${i}`}
            cx={xScale(d.date)}
            cy={yScale(d.score)}
            r={4}
            fill="#3b82f6"
          />
        ))}
        <AxisLeft
          scale={yScale}
          numTicks={5}
          tickStroke="#333"
          tickFormat={(value) => value.toString().replace("-", "")}
          hideAxisLine
          tickLineProps={{
            display: "none",
          }}
          tickLabelProps={() => ({
            fill: "#333",
            fontSize: 11,
            textAnchor: "end",
            dy: "0.33em",
          })}
        />
        <AxisBottom
          top={yMax}
          scale={xScale}
          numTicks={data.length}
          tickStroke="#333"
          hideAxisLine
          tickLineProps={{
            display: "none",
          }}
          tickLabelProps={() => ({
            fill: "#333",
            fontSize: 11,
            textAnchor: "middle",
          })}
          tickFormat={(value) => value.toDateString().slice(4, 10)}
        />
      </Group>

      {tooltipData && (
        <g>
          <circle
            cx={tooltipLeft}
            cy={tooltipTop}
            r={6}
            fill="#3b82f6"
            fillOpacity={0.7}
            stroke="#fff"
            strokeWidth={2}
            pointerEvents="none"
          />
          <Tooltip top={tooltipTop - 12} left={tooltipLeft + 12}>
            <div>
              <strong>{`SI Score ${tooltipData.score}`}</strong>
            </div>
          </Tooltip>
        </g>
      )}
      <rect
        x={margin.left}
        y={margin.top}
        width={xMax}
        height={yMax}
        fill="transparent"
        onMouseMove={handleTooltip}
        onMouseLeave={hideTooltip}
      />
    </svg>
  );
};

export default withTooltip(TrendChart);
