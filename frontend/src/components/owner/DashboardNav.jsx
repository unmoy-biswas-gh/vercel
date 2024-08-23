import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { AppBar, Avatar, Button, Typography } from "@mui/material";
import logo from "../../assets/images/logo.png";
import globe from "../../assets/images/globe.png";
import chat from "../../assets/images/ChatsCircle.png";
import bell from "../../assets/images/Bell.png";
import topUser from "../../assets/images/topUser.png";
import BookCall from "./BookCall";

const navItems = [
  {
    name: "Dashboard",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M8.33333 10.8333H3.33333C3.11232 10.8333 2.90036 10.9211 2.74408 11.0774C2.5878 11.2337 2.5 11.4457 2.5 11.6667V16.6667C2.5 16.8877 2.5878 17.0996 2.74408 17.2559C2.90036 17.4122 3.11232 17.5 3.33333 17.5H8.33333C8.55435 17.5 8.76631 17.4122 8.92259 17.2559C9.07887 17.0996 9.16667 16.8877 9.16667 16.6667V11.6667C9.16667 11.4457 9.07887 11.2337 8.92259 11.0774C8.76631 10.9211 8.55435 10.8333 8.33333 10.8333ZM7.5 15.8333H4.16667V12.5H7.5V15.8333ZM16.6667 2.5H11.6667C11.4457 2.5 11.2337 2.5878 11.0774 2.74408C10.9211 2.90036 10.8333 3.11232 10.8333 3.33333V8.33333C10.8333 8.55435 10.9211 8.76631 11.0774 8.92259C11.2337 9.07887 11.4457 9.16667 11.6667 9.16667H16.6667C16.8877 9.16667 17.0996 9.07887 17.2559 8.92259C17.4122 8.76631 17.5 8.55435 17.5 8.33333V3.33333C17.5 3.11232 17.4122 2.90036 17.2559 2.74408C17.0996 2.5878 16.8877 2.5 16.6667 2.5ZM15.8333 7.5H12.5V4.16667H15.8333V7.5ZM16.6667 13.3333H15V11.6667C15 11.4457 14.9122 11.2337 14.7559 11.0774C14.5996 10.9211 14.3877 10.8333 14.1667 10.8333C13.9457 10.8333 13.7337 10.9211 13.5774 11.0774C13.4211 11.2337 13.3333 11.4457 13.3333 11.6667V13.3333H11.6667C11.4457 13.3333 11.2337 13.4211 11.0774 13.5774C10.9211 13.7337 10.8333 13.9457 10.8333 14.1667C10.8333 14.3877 10.9211 14.5996 11.0774 14.7559C11.2337 14.9122 11.4457 15 11.6667 15H13.3333V16.6667C13.3333 16.8877 13.4211 17.0996 13.5774 17.2559C13.7337 17.4122 13.9457 17.5 14.1667 17.5C14.3877 17.5 14.5996 17.4122 14.7559 17.2559C14.9122 17.0996 15 16.8877 15 16.6667V15H16.6667C16.8877 15 17.0996 14.9122 17.2559 14.7559C17.4122 14.5996 17.5 14.3877 17.5 14.1667C17.5 13.9457 17.4122 13.7337 17.2559 13.5774C17.0996 13.4211 16.8877 13.3333 16.6667 13.3333ZM8.33333 2.5H3.33333C3.11232 2.5 2.90036 2.5878 2.74408 2.74408C2.5878 2.90036 2.5 3.11232 2.5 3.33333V8.33333C2.5 8.55435 2.5878 8.76631 2.74408 8.92259C2.90036 9.07887 3.11232 9.16667 3.33333 9.16667H8.33333C8.55435 9.16667 8.76631 9.07887 8.92259 8.92259C9.07887 8.76631 9.16667 8.55435 9.16667 8.33333V3.33333C9.16667 3.11232 9.07887 2.90036 8.92259 2.74408C8.76631 2.5878 8.55435 2.5 8.33333 2.5ZM7.5 7.5H4.16667V4.16667H7.5V7.5Z"
          fill="#96CDCC"
        />
      </svg>
    ),
  },
  {
    name: "Team Members",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.72662 10.2271C9.40085 10.2271 10.7569 8.87109 10.7569 7.1968C10.7569 5.52256 9.40085 4.1665 7.72662 4.1665C6.05238 4.1665 4.69632 5.52256 4.69632 7.1968C4.69632 8.87109 6.05238 10.2271 7.72662 10.2271ZM7.72662 5.68165C8.55993 5.68165 9.24177 6.36347 9.24177 7.1968C9.24177 8.03014 8.55993 8.71192 7.72662 8.71192C6.89329 8.71192 6.21147 8.03014 6.21147 7.1968C6.21147 6.36347 6.89329 5.68165 7.72662 5.68165ZM1.66602 14.7726C1.66602 12.7574 5.70389 11.7423 7.72662 11.7423C9.74935 11.7423 13.7873 12.7574 13.7873 14.7726V16.2878H1.66602V14.7726ZM3.18117 14.7726C3.34783 14.2271 5.68874 13.2574 7.72662 13.2574C9.7721 13.2574 12.1206 14.2347 12.2721 14.7726H3.18117ZM16.0599 10.9847V13.2574H14.5448V10.9847H12.2721V9.4695H14.5448V7.1968H16.0599V9.4695H18.3327V10.9847H16.0599Z"
          fill="#96CDCC"
        />
      </svg>
    ),
  },
  {
    name: "Reports",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        viewBox="0 0 20 20"
        fill="none"
      >
        <g clip-path="url(#clip0_951_495)">
          <path
            d="M13.125 17.5H4.375C4.20924 17.5 4.05027 17.4342 3.93306 17.3169C3.81585 17.1997 3.75 17.0408 3.75 16.875V5.625C3.75 5.45924 3.81585 5.30027 3.93306 5.18306C4.05027 5.06585 4.20924 5 4.375 5H10.625L13.75 8.125V16.875C13.75 17.0408 13.6842 17.1997 13.5669 17.3169C13.4497 17.4342 13.2908 17.5 13.125 17.5Z"
            stroke="#96CDCC"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.25 5V3.125C6.25 2.95924 6.31585 2.80027 6.43306 2.68306C6.55027 2.56585 6.70924 2.5 6.875 2.5H13.125L16.25 5.625V14.375C16.25 14.5408 16.1842 14.6997 16.0669 14.8169C15.9497 14.9342 15.7908 15 15.625 15H13.75"
            stroke="#96CDCC"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.875 11.875H10.625"
            stroke="#96CDCC"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.875 14.375H10.625"
            stroke="#96CDCC"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_951_495">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    name: "Subscription",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M16.25 3.125H3.75C3.40482 3.125 3.125 3.40482 3.125 3.75V16.25C3.125 16.5952 3.40482 16.875 3.75 16.875H16.25C16.5952 16.875 16.875 16.5952 16.875 16.25V3.75C16.875 3.40482 16.5952 3.125 16.25 3.125Z"
          stroke="#96CDCC"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.75 1.875V4.375"
          stroke="#96CDCC"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.25 1.875V4.375"
          stroke="#96CDCC"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.125 6.875H16.875"
          stroke="#96CDCC"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 10.9375C10.3452 10.9375 10.625 10.6577 10.625 10.3125C10.625 9.96732 10.3452 9.6875 10 9.6875C9.65482 9.6875 9.375 9.96732 9.375 10.3125C9.375 10.6577 9.65482 10.9375 10 10.9375Z"
          fill="#96CDCC"
        />
        <path
          d="M13.4375 10.9375C13.7827 10.9375 14.0625 10.6577 14.0625 10.3125C14.0625 9.96732 13.7827 9.6875 13.4375 9.6875C13.0923 9.6875 12.8125 9.96732 12.8125 10.3125C12.8125 10.6577 13.0923 10.9375 13.4375 10.9375Z"
          fill="#96CDCC"
        />
        <path
          d="M6.5625 14.0625C6.90768 14.0625 7.1875 13.7827 7.1875 13.4375C7.1875 13.0923 6.90768 12.8125 6.5625 12.8125C6.21732 12.8125 5.9375 13.0923 5.9375 13.4375C5.9375 13.7827 6.21732 14.0625 6.5625 14.0625Z"
          fill="#96CDCC"
        />
        <path
          d="M10 14.0625C10.3452 14.0625 10.625 13.7827 10.625 13.4375C10.625 13.0923 10.3452 12.8125 10 12.8125C9.65482 12.8125 9.375 13.0923 9.375 13.4375C9.375 13.7827 9.65482 14.0625 10 14.0625Z"
          fill="#96CDCC"
        />
        <path
          d="M13.4375 14.0625C13.7827 14.0625 14.0625 13.7827 14.0625 13.4375C14.0625 13.0923 13.7827 12.8125 13.4375 12.8125C13.0923 12.8125 12.8125 13.0923 12.8125 13.4375C12.8125 13.7827 13.0923 14.0625 13.4375 14.0625Z"
          fill="#96CDCC"
        />
      </svg>
    ),
  },
];

function DashboardNav({ children }) {
  const navContainer = useRef(null);
  const drawerWidth = 260;
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [bookCall, setBookCall] = useState(false);

  const DrawerList = (
    <Box
      sx={{
        width: drawerWidth,
        height: "calc(100vh - 1rem)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      role="presentation"
    >
      <List>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: ".7rem",
            margin: "2rem",
          }}
        >
          <Avatar src={logo} sx={{ width: 60, height: 60 }} />
          <Typography fontSize={13} fontWeight={600}>
            Star bucks
          </Typography>
          <Button
            variant="outlined"
            sx={{
              borderRadius: " 5px",
              border: " 2px solid #F6D839",
              color: "black",
              textTransform: "none",
              fontSize: "11px",
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
              ":hover": {
                border: " 2px solid #F6D839",
                color: "black",
              },
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M12.0006 14.5H12.0096M7.00055 22.5H17.0006M3.51855 10.806C3.13055 9.732 2.93655 9.195 3.01855 8.851C3.10955 8.474 3.37755 8.181 3.71955 8.083C4.03255 7.993 4.51955 8.21 5.49255 8.643C6.35255 9.025 6.78255 9.216 7.18755 9.206C7.63355 9.194 8.06155 9.016 8.40255 8.699C8.71255 8.412 8.91955 7.955 9.33455 7.041L10.2495 5.025C11.0135 3.342 11.3956 2.5 12.0006 2.5C12.6056 2.5 12.9876 3.342 13.7516 5.025L14.6666 7.041C15.0816 7.955 15.2895 8.412 15.5985 8.699C15.9395 9.015 16.3686 9.194 16.8135 9.206C17.2176 9.216 17.6485 9.025 18.5085 8.642C19.4825 8.21 19.9685 7.993 20.2815 8.083C20.6235 8.181 20.8916 8.474 20.9816 8.851C21.0646 9.195 20.8706 9.731 20.4816 10.806L18.8145 15.422C18.1005 17.397 17.7445 18.384 16.9976 18.942C16.2506 19.5 15.2856 19.5 13.3566 19.5H10.6445C8.71455 19.5 7.75055 19.5 7.00455 18.942C6.25755 18.384 5.90055 17.397 5.18655 15.422L3.51855 10.806Z"
                stroke="url(#paint0_linear_951_472)"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_951_472"
                  x1="8.00049"
                  y1="9.5"
                  x2="13.5005"
                  y2="20"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F3D227" />
                  <stop offset="0.532222" stop-color="#FAF2C7" />
                  <stop offset="1" stop-color="#FFDD31" />
                </linearGradient>
              </defs>
            </svg>
            Premium Plan
          </Button>
        </Box>
        {navItems.map((obj, index) => (
          <ListItem
            key={obj.name}
            disablePadding
            onClick={() => setActiveTab(obj.name)}
            sx={{
              borderRadius: "4px",
              mb: "0.5rem",
              background: obj.name === activeTab ? "#77BCBB" : "white",
              color: obj.name === activeTab ? "white" : "#324054",
              ".MuiListItemButton-root": {
                paddingTop: "4px",
                paddingBottom: "4px",
                paddingLeft: "8px",
              },
            }}
          >
            <ListItemButton
              sx={{
                ".MuiListItemIcon-root": {
                  minWidth: "0",
                  marginRight: "0.5rem",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  path: {
                    // fill: obj.name === activeTab ? "white" : "#96CDCC",
                    // stroke: obj.name === activeTab ? "#96CDCC" : "white",
                  },
                }}
              >
                {obj.icon}
              </ListItemIcon>
              <ListItemText
                sx={{
                  ".MuiTypography-root": {
                    fontSize: "13px",
                    fontWeight: "300",
                    fontFamily: "Inter",
                  },
                }}
                primary={obj.name}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          position: "relative",
          margin: "1rem",
          width: "90%",
          height: "160px",
          borderRadius: "8px",
          background: "#F9F9F9",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={globe}
          alt="logo"
          width={"60px"}
          style={{
            position: "absolute",
            top: "-40px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        <Typography
          align="center"
          fontSize={10}
          paddingTop={"2rem"}
          fontFamily={"Inter"}
        >
          Need help with data?
        </Typography>
        <Typography
          align="center"
          fontSize={10}
          fontWeight={600}
          sx={{ marginTop: ".25rem", fontFamily: "Inter" }}
        >
          Book a call with a Senior Consultant.
        </Typography>
        <Button
          onClick={() => setBookCall(true)}
          variant="outlined"
          sx={{
            color: " #005468",
            fontSize: "11px",
            fontWeight: "500",
            fontFamily: "Inter",
            borderRadius: "6px",
            border: "1px solid #005468",
            textTransform: "none",
            marginTop: ".5rem",
            ":hover": {
              border: "1px solid #005468",
              color: " #005468",
              backgroundColor: "transparent",
            },
          }}
        >
          {" "}
          Connect With an Expert
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box
      ref={navContainer}
      sx={{
        width: "100vw",
        height: "100vh",
        padding: ".5rem",
        backgroundColor: "#77BCBB",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "10px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            position: "relative",
            boxSizing: "border-box",
            height: "calc(100vh - 1rem)",
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRight: "none",
              boxShadow: "2px 2px 12px 0px #0000000A",
            },
            ".MuiPaper-root": {
              top: ".5rem",
              left: ".5rem",
              height: "calc(100% - 1rem)",
              borderRadius: "10px 0  0 10px  ",
              boxShadow: "none",
              borderRight: "1px solid #EFEFEF",
              overflow: "hidden",
            },
            ".MuiList-root": {
              margin: "0 1rem",
              width: "85%",
            },
          }}
          open
        >
          {DrawerList}
        </Drawer>
        <AppBar
          position="absolute"
          sx={{
            height: "60px",
            backgroundColor: "white",
            boxShadow: "none",
            top: ".5rem",
            right: ".5rem",
            width: "calc(100vw - 1rem)",
            borderRadius: "10px   10px 0  0",
            display: "flex",
            flexDirection: "row",
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
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
        </AppBar>
        <Box
          sx={{
            background: "#F9F9F9",
            marginLeft: "259px",
            marginTop: "59px",
            flex: 1,
          }}
        >
          {children}
        </Box>
      </Box>
      <BookCall open={bookCall} onClose={() => setBookCall(false)} />
    </Box>
  );
}

export default DashboardNav;
