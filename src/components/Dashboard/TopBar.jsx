import { Box, Typography } from "@mui/material";
import React from "react";
import chat from "../../assets/images/ChatsCircle.png";
import bell from "../../assets/images/Bell.png";
import topUser from "../../assets/images/topUser.png";
const TopBar = () => {
  return (
    <div
      style={{
        height: "60px",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "1.5rem",
        borderBottom: "1px solid #EFEFEF",
      }}
    >
      <img
        src={chat}
        alt="logo"
        style={{ width: "25px", height: "25px", cursor: "pointer" }}
      />
      <img
        src={bell}
        alt="logo"
        style={{ width: "25px", height: "25px", cursor: "pointer" }}
      />
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          mr: "1.5rem",
          gap: "0.5rem",
          cursor: "pointer",
        }}
      >
        <img
          src={topUser}
          alt="logo"
          style={{ width: "30px", height: "30px" }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
              color: "black",
              fontWeight: "400",
              fontFamily: "Inter",
            }}
          >
            Abhinav.M{" "}
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
              <g clip-path="url(#clip0_989_10189)">
                <path
                  d="M16.25 8L10 14.25L3.75 8"
                  stroke="#A8A8A8"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_989_10189">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Typography>
          <Typography
            sx={{
              width: "max-content",
              color: "#B7B7B7",
              fontSize: 14,
              fontFamily: "Inter",
            }}
          >
            Admin
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default TopBar;
