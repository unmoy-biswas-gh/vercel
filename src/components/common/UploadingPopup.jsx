import { Dialog, DialogContent, Typography, Box } from "@mui/material";
import React, { useState, useEffect } from "react";

function UploadingPopup({ open }) {
  const [filledBars, setFilledBars] = useState(0);
  const [barsCount, setBarsCount] = useState(0);

  const containerWidth = 550 * 0.8 - 24; // 80% of 550px width minus padding (12px on each side)
  const barWidth = 21; // Width of each bar in pixels
  const gap = 4.5; // Gap between bars in pixels

  useEffect(() => {
    // Calculate the number of bars dynamically based on container width, bar width, and gap
    const calculatedBarsCount = Math.floor(containerWidth / (barWidth + gap));
    setBarsCount(calculatedBarsCount);
  }, [containerWidth]);

  useEffect(() => {
    if (open) {
      const interval = setInterval(() => {
        setFilledBars((prev) => {
          if (prev >= barsCount) {
            clearInterval(interval);
            return barsCount;
          }
          return prev + 1; // Increment the number of filled bars
        });
      }, 300); // Speed of filling the bars, adjust as necessary

      return () => clearInterval(interval);
    } else {
      setFilledBars(0); // Reset when the popup closes
    }
  }, [open, barsCount]);

  return (
    <Dialog
      open={open}
      sx={{
        ".MuiPaper-root": {
          borderRadius: "20px",
        },
      }}
    >
      <DialogContent
        style={{
          width: "550px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 0",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "24px",
            fontWeight: "500",
            color: "#319480",
            mb: "20px",
            lineHeight: "75.54px",
          }}
        >
          Processing
        </Typography>
        <Box
          sx={{
            width: "80%",
            border: "1px solid #ccc",
            borderRadius: "5px",
            display: "flex",
            gap: `${gap}px`,
            alignItems: "center",
            padding: "7px 12px",
          }}
        >
          {Array.from({ length: barsCount }).map((_, i) => (
            <Box
              key={i}
              sx={{
                width: `${barWidth}px`,
                height: "27px",
                backgroundColor: i < filledBars ? "#92E3A9" : "#E0F7FA",
                transition: "background-color 0.2s ease-in-out",
              }}
            />
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default UploadingPopup;
