import { Box, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import CreateReport from "../owner/CreateReport";
// import DashboardNav from "./DashboardNav";

const Monitor = () => {
  const dashBoardOption = useRef(null);
  const [createReport, setCreateReport] = useState(false);
  return (
    <Box
      // sx={{ width: "100%", height: "100%" }}
      sx={{ flexGrow: 1 }}
    >
      {createReport ? (
        <CreateReport closeView={() => setCreateReport(false)} />
      ) : (
        <Box sx={{ margin: "2rem", marginTop: "4rem" }} ref={dashBoardOption}>
          <Box
            sx={{
              borderRadius: "10px",
              border: "1px dashed #369D9C",
              background: "#FFF",
              width: "200px",
              height: "150px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: ".5rem",
              cursor: "pointer",
            }}
            onClick={() => setCreateReport(true)}
          >
            <svg width={26} height={36} viewBox="0 0 31 40" fill="none">
              <path
                id="Vector"
                d="M9.28571 30.2778H17.5714M9.28571 22.0556H17.5714M9.28571 13.8333H11.3571M17.5714 1.5H7.62857C5.30836 1.5 4.14824 1.5 3.26204 1.94809C2.4825 2.34222 1.84873 2.97114 1.45155 3.74471C1 4.62412 1 5.77535 1 8.07778V31.9222C1 34.2247 1 35.376 1.45155 36.2553C1.84873 37.0288 2.4825 37.6578 3.26204 38.0519C4.14824 38.5 5.30836 38.5 7.62857 38.5H17.5714M17.5714 1.5L30 13.8333M17.5714 1.5V10.5444C17.5714 11.6957 17.5714 12.2713 17.7972 12.711C17.9959 13.0978 18.3126 13.4122 18.7024 13.6093C19.1455 13.8333 19.7255 13.8333 20.8857 13.8333H30M30 13.8333V18.9722"
                stroke="url(#paint0_linear_932_9820)"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_932_9820"
                  x1={1}
                  y1="1.5"
                  x2="35.1201"
                  y2="7.0558"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#369D9C" />
                  <stop offset={1} stopColor="#28814D" />
                </linearGradient>
              </defs>
            </svg>
            <Typography
              sx={{
                fontSize: "11px",
                fontFamily: "Inter",
                fontWeight: 500,
                background: "linear-gradient(102deg, #369D9C 0%, #28814D 100%)",
                backgroundClip: "text",
                "-webkitBackgroundClip": "text",
                "-webkitTextFillColor": "transparent",
              }}
            >
              Initiate Report Generation
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Monitor;
