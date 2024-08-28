import "./SideBar.css";
import "./teamMembersSidebar.css";
// import brandIcon from "../../../assets/images/brand-icon.svg";
// import userimage from "../../../assets/images/user.webp";
import logo from "../../../assets/images/logo.png";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
// import { isReception } from "../../../util/reception";
// import ClinicMenu from "./ClinicMenu";
import { useEffect, useState } from "react";
// import SubscriptionModal from "../SubscriptionModal/SubscriptionModal";
// import { getDoctor } from "../../../api/doctor";
import { Skeleton } from "@mui/material";
import premium from "../../../assets/premium.svg";
import ge3sLogo from "../../../assets/ge3s-logo.png";

function TeamMembersSideBar() {
  // const {
  //   reloadUser,
  //   isSubscribed,
  //   subScriptionModalOpen,
  //   setSubscriptionModalOpen,
  //   setReloadUser,
  // } = useAuth();

  const location = useLocation();
  const [showNotification, setShowNotification] = useState(false);
  const [daysLeft, setDaysleft] = useState(0);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);

  return (
    <div className="sidemenu">
      <div className="sidemanu_content">
        <div className="sidemenu_brand">
          <img src={logo} alt="logo" height={80} width={80} />

          <div className="subscription_side">
            <h6>Star Bucks</h6>
          </div>

          {/* <button className="premium_button">
            <img src={premium} alt="Premium" />
            <span>Premium Plan</span>
          </button> */}
        </div>

        <div className={"mt-1"}>
          <NavLink
            to="/team/data-points"
            className={(navLink) =>
              navLink.isActive || location.pathname === "/"
                ? "sidebar_menu_item checked"
                : "sidebar_menu_item"
            }
          >
            <div
              id="Dashboard"
              style={{
                display: "flex",
                gap: "0.8rem",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "0.8rem",
                  alignItems: "center",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1682_32937)">
                    <path
                      d="M13.125 17.5H4.375C4.20924 17.5 4.05027 17.4342 3.93306 17.3169C3.81585 17.1997 3.75 17.0408 3.75 16.875V5.625C3.75 5.45924 3.81585 5.30027 3.93306 5.18306C4.05027 5.06585 4.20924 5 4.375 5H10.625L13.75 8.125V16.875C13.75 17.0408 13.6842 17.1997 13.5669 17.3169C13.4497 17.4342 13.2908 17.5 13.125 17.5Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.25 5V3.125C6.25 2.95924 6.31585 2.80027 6.43306 2.68306C6.55027 2.56585 6.70924 2.5 6.875 2.5H13.125L16.25 5.625V14.375C16.25 14.5408 16.1842 14.6997 16.0669 14.8169C15.9497 14.9342 15.7908 15 15.625 15H13.75"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.875 11.875H10.625"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.875 14.375H10.625"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1682_32937">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="menu--text">SI Report 2020</span>
              </div>

              <div className="team-members_notification_num">10</div>
            </div>
          </NavLink>
        </div>
      </div>
      {/* <div className="sidebar_powered_by">
        <img src={ge3sLogo} className="sidebar_logo" alt="Logo" />
        <span className="text">Need help with data?</span>
        <div className="brand_wrapper">
          <span>Book a call with a Senior Consultant.</span>
        </div>

        <button className="sidebar_connect_btn">Connect With an Expert</button>
      </div> */}
    </div>
  );
}

export default TeamMembersSideBar;
