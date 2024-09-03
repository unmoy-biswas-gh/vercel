import { Box, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
// import chat from "../../assets/images/ChatsCircle.png";
// import bell from "../../assets/images/Bell.png";
import topUser from "../../assets/images/topUser.png";
import logout from "../../assets/logout.svg";
import { useNavigate } from "react-router-dom";
import chat from "../../assets/chats.svg";
import bell from "../../assets/bell.svg";

const TopBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    console.log("close");
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "50px",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "1.5rem",
        borderBottom: "1px solid #EFEFEF",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <img
          src={chat}
          alt="logo"
          height={28}
          width={28}
          style={{ cursor: "pointer" }}
        />
        <div
          style={{
            position: "absolute",
            height: "13px",
            width: "13px",
            backgroundColor: "#FF3A3A",
            borderRadius: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            top: "-5px",
            right: "-2px",
            color: "#fff",
            fontSize: "8px",
          }}
        >
          1
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <img
          src={bell}
          alt="logo"
          height={28}
          width={28}
          style={{ cursor: "pointer" }}
        />
        <div
          style={{
            position: "absolute",
            height: "13px",
            width: "13px",
            backgroundColor: "#FF3A3A",
            borderRadius: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            top: "-5px",
            right: "-2px",
            color: "#fff",
            fontSize: "8px",
          }}
        >
          1
        </div>
      </div>
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
        <img src={topUser} alt="logo" height={40} width={40} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            cursor: "pointer", // Make the box look clickable
          }}
          onClick={handleClick}
        >
          <Typography
            sx={{
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
              color: "black",
              fontWeight: "500",
              fontFamily: "Inter",
              fontSize: "14px",
            }}
          >
            Abhinav.M
            <svg width="18" height="18" viewBox="0 0 20 21" fill="none">
              <g clipPath="url(#clip0_989_10189)">
                <path
                  d="M16.25 8L10 14.25L3.75 8"
                  stroke="#A8A8A8"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
              fontSize: 12,
              fontFamily: "Inter",
            }}
          >
            Admin
          </Typography>
        </Box>
      </Box>
      <Menu
        sx={{ borderRadius: "10px" }}
        id="account-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        slotProps={{
          paper: {
            sx: {
              borderRadius: "10px",
              p: 0,
            },
          },
        }}
      >
        <MenuItem
          onClick={() => {
            navigate("/manage-account");
            handleClose();
          }}
          sx={{ padding: "10px 12px" }}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img src={topUser} alt="logo" height={25} width={25} />
            <Typography variant="subtitle1" sx={{ fontSize: "14px" }}>
              Manage Account
            </Typography>
          </Box>
        </MenuItem>
        <MenuItem
          onClick={() => {
            // handle logout
            handleClose();
          }}
          sx={{ padding: "10px 12px" }}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img src={logout} alt="logo" height={24} width={24} />
            <Typography
              variant="subtitle1"
              sx={{ color: "#F27878", fontSize: "14px" }}
            >
              Logout
            </Typography>
          </Box>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default TopBar;
