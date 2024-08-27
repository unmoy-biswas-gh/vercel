import "./SideBar.css";
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

function SideBar() {
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
          <img src={logo} alt="logo" />

          <div className="subscription_side">
            <h6>Star Bucks</h6>
          </div>
        </div>

        <div className={"mt-1"}>
          <NavLink
            to="monitor"
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
              }}
            >
              <svg width="25" height="25" viewBox="0 0 32 32" fill="none">
                <path
                  d="M4.40012 29.0034H13.0545C13.2617 29.0035 13.4662 28.9569 13.6532 28.867C13.839 28.7766 14.0029 28.6463 14.1334 28.4853C14.3372 28.2344 14.4492 27.9205 14.4507 27.5962V18.91C14.4506 18.7208 14.4125 18.5337 14.3386 18.3599C14.1942 18.0184 13.9221 17.748 13.5812 17.6072C13.4138 17.5396 13.2349 17.5056 13.0545 17.507H4.40012C4.22385 17.5076 4.04932 17.5423 3.88606 17.6094C3.72019 17.6743 3.56855 17.7714 3.4397 17.8951C3.30312 18.0266 3.19445 18.1847 3.12027 18.3599C3.0434 18.5329 3.00375 18.7204 3.00392 18.91V27.5962C3.00423 27.7653 3.03505 27.9329 3.09488 28.0909C3.15419 28.2468 3.2401 28.3912 3.34874 28.5173L3.40374 28.5749C3.52616 28.6982 3.66944 28.7986 3.82683 28.8712C4.00829 28.9543 4.20507 28.9978 4.40435 28.9992L4.40012 29.0034ZM15.5486 9.07234L21.1969 3.38597C21.3299 3.25147 21.4901 3.14748 21.6665 3.08108C21.846 3.0164 22.0373 2.99167 22.2271 3.00858C22.5224 3.03656 22.7985 3.16781 23.0078 3.37957L28.6243 9.04036C28.7457 9.16193 28.8414 9.30698 28.9057 9.46678C28.9992 9.70287 29.0224 9.96133 28.9725 10.2105C28.9225 10.4597 28.8015 10.6888 28.6243 10.8697L22.9845 16.5646C22.869 16.68 22.7325 16.7719 22.5825 16.8354C22.433 16.9017 22.272 16.938 22.1087 16.942C21.9343 16.9464 21.7609 16.9152 21.5989 16.8503C21.4356 16.7876 21.2877 16.6902 21.1652 16.5646L15.5486 10.8974C15.3297 10.6759 15.1975 10.3821 15.1763 10.0702V10.0019C15.175 9.82979 15.2074 9.65907 15.2717 9.49955C15.3359 9.34004 15.4307 9.19486 15.5507 9.07234H15.5486ZM4.40012 15.7246H13.0545C13.2613 15.7247 13.4654 15.6782 13.6521 15.5886C13.8388 15.4989 14.0032 15.3684 14.1334 15.2065C14.2362 15.0795 14.3157 14.9351 14.3682 14.78C14.4222 14.6289 14.4501 14.4695 14.4507 14.3088V5.63323C14.4503 5.44414 14.4122 5.25706 14.3386 5.08314C14.1946 4.74084 13.9225 4.46961 13.5812 4.32837C13.4166 4.26113 13.2406 4.22639 13.063 4.22603H4.40012C4.22385 4.22661 4.04932 4.26136 3.88606 4.32837C3.72019 4.39331 3.56855 4.49037 3.4397 4.61407C3.30312 4.74563 3.19445 4.90375 3.12027 5.07887C3.04288 5.25324 3.00321 5.44221 3.00392 5.63323V14.3195C3.0042 14.4879 3.03503 14.6548 3.09488 14.812C3.15371 14.9682 3.23967 15.1126 3.34874 15.2384L3.40374 15.296C3.52616 15.4194 3.66944 15.5197 3.82683 15.5924C4.00829 15.6754 4.20507 15.719 4.40435 15.7203L4.40012 15.7246ZM13.0566 14.3238H4.40012V5.62683C5.14265 5.62683 13.0587 5.62683 13.0735 5.62683C13.0735 6.36028 13.0735 14.3152 13.0735 14.3195L13.0566 14.3238ZM17.7593 29.0034H26.4137C26.6208 29.0035 26.8254 28.9569 27.0123 28.867C27.1981 28.7766 27.362 28.6463 27.4925 28.4853C27.6964 28.2344 27.8084 27.9205 27.8099 27.5962V18.91C27.8095 18.7216 27.7713 18.5352 27.6977 18.362C27.5518 18.0181 27.2764 17.7466 26.9319 17.6072C26.7673 17.54 26.5913 17.5052 26.4137 17.5049H17.7593C17.4023 17.5087 17.0596 17.6471 16.7989 17.8929C16.662 18.0251 16.5534 18.184 16.4794 18.3599C16.4023 18.5336 16.3626 18.7218 16.3631 18.9121V27.5983C16.3634 27.7674 16.3942 27.935 16.454 28.093C16.5134 28.249 16.5993 28.3933 16.7079 28.5194L16.7629 28.577C16.8853 28.7004 17.0286 28.8007 17.186 28.8734C17.3675 28.9564 17.5642 29 17.7635 29.0013L17.7593 29.0034ZM26.4158 27.6026H17.7593V18.91C18.5018 18.91 26.4179 18.91 26.4327 18.91C26.4327 19.6434 26.4327 27.5983 26.4327 27.6026H26.4158ZM13.0566 27.6026H4.40012V18.9057C5.14265 18.9057 13.0587 18.9057 13.0735 18.9057C13.0735 19.6391 13.0735 27.5941 13.0735 27.5983L13.0566 27.6026Z"
                  fill="#B7B7B7"
                />
                <path
                  d="M4.40012 29.0034H13.0545C13.2617 29.0035 13.4662 28.9569 13.6532 28.867C13.839 28.7766 14.0029 28.6463 14.1334 28.4853C14.3372 28.2344 14.4492 27.9205 14.4507 27.5962V18.91C14.4506 18.7208 14.4125 18.5337 14.3386 18.3599C14.1942 18.0184 13.9221 17.748 13.5812 17.6072C13.4138 17.5396 13.2349 17.5056 13.0545 17.507H4.40012C4.22385 17.5076 4.04932 17.5423 3.88606 17.6094C3.72019 17.6743 3.56855 17.7714 3.4397 17.8951C3.30312 18.0266 3.19445 18.1847 3.12027 18.3599C3.0434 18.5329 3.00375 18.7204 3.00392 18.91V27.5962C3.00423 27.7653 3.03505 27.9329 3.09488 28.0909C3.15419 28.2468 3.2401 28.3912 3.34874 28.5173L3.40374 28.5749C3.52616 28.6982 3.66944 28.7986 3.82683 28.8712C4.00829 28.9543 4.20507 28.9978 4.40435 28.9992L4.40012 29.0034ZM15.5486 9.07234L21.1969 3.38597C21.3299 3.25147 21.4901 3.14748 21.6665 3.08108C21.846 3.0164 22.0373 2.99167 22.2271 3.00858C22.5224 3.03656 22.7985 3.16781 23.0078 3.37957L28.6243 9.04036C28.7457 9.16193 28.8414 9.30698 28.9057 9.46678C28.9992 9.70287 29.0224 9.96133 28.9725 10.2105C28.9225 10.4597 28.8015 10.6888 28.6243 10.8697L22.9845 16.5646C22.869 16.68 22.7325 16.7719 22.5825 16.8354C22.433 16.9017 22.272 16.938 22.1087 16.942C21.9343 16.9464 21.7609 16.9152 21.5989 16.8503C21.4356 16.7876 21.2877 16.6902 21.1652 16.5646L15.5486 10.8974C15.3297 10.6759 15.1975 10.3821 15.1763 10.0702V10.0019C15.175 9.82979 15.2074 9.65907 15.2717 9.49955C15.3359 9.34004 15.4307 9.19486 15.5507 9.07234H15.5486ZM4.40012 15.7246H13.0545C13.2613 15.7247 13.4654 15.6782 13.6521 15.5886C13.8388 15.4989 14.0032 15.3684 14.1334 15.2065C14.2362 15.0795 14.3157 14.9351 14.3682 14.78C14.4222 14.6289 14.4501 14.4695 14.4507 14.3088V5.63323C14.4503 5.44414 14.4122 5.25706 14.3386 5.08314C14.1946 4.74084 13.9225 4.46961 13.5812 4.32837C13.4166 4.26113 13.2406 4.22639 13.063 4.22603H4.40012C4.22385 4.22661 4.04932 4.26136 3.88606 4.32837C3.72019 4.39331 3.56855 4.49037 3.4397 4.61407C3.30312 4.74563 3.19445 4.90375 3.12027 5.07887C3.04288 5.25324 3.00321 5.44221 3.00392 5.63323V14.3195C3.0042 14.4879 3.03503 14.6548 3.09488 14.812C3.15371 14.9682 3.23967 15.1126 3.34874 15.2384L3.40374 15.296C3.52616 15.4194 3.66944 15.5197 3.82683 15.5924C4.00829 15.6754 4.20507 15.719 4.40435 15.7203L4.40012 15.7246ZM13.0566 14.3238H4.40012V5.62683C5.14265 5.62683 13.0587 5.62683 13.0735 5.62683C13.0735 6.36028 13.0735 14.3152 13.0735 14.3195L13.0566 14.3238ZM17.7593 29.0034H26.4137C26.6208 29.0035 26.8254 28.9569 27.0123 28.867C27.1981 28.7766 27.362 28.6463 27.4925 28.4853C27.6964 28.2344 27.8084 27.9205 27.8099 27.5962V18.91C27.8095 18.7216 27.7713 18.5352 27.6977 18.362C27.5518 18.0181 27.2764 17.7466 26.9319 17.6072C26.7673 17.54 26.5913 17.5052 26.4137 17.5049H17.7593C17.4023 17.5087 17.0596 17.6471 16.7989 17.8929C16.662 18.0251 16.5534 18.184 16.4794 18.3599C16.4023 18.5336 16.3626 18.7218 16.3631 18.9121V27.5983C16.3634 27.7674 16.3942 27.935 16.454 28.093C16.5134 28.249 16.5993 28.3933 16.7079 28.5194L16.7629 28.577C16.8853 28.7004 17.0286 28.8007 17.186 28.8734C17.3675 28.9564 17.5642 29 17.7635 29.0013L17.7593 29.0034ZM26.4158 27.6026H17.7593V18.91C18.5018 18.91 26.4179 18.91 26.4327 18.91C26.4327 19.6434 26.4327 27.5983 26.4327 27.6026H26.4158ZM13.0566 27.6026H4.40012V18.9057C5.14265 18.9057 13.0587 18.9057 13.0735 18.9057C13.0735 19.6391 13.0735 27.5941 13.0735 27.5983L13.0566 27.6026Z"
                  fill="#B7B7B7"
                />
              </svg>
              <span className="menu--text">Dashboard</span>
            </div>
          </NavLink>

          <NavLink
            to="team-members"
            className={(navLink) =>
              navLink.isActive
                ? "sidebar_menu_item checked"
                : "sidebar_menu_item"
            }
          >
            <div
              style={{ display: "flex", gap: "0.8rem", alignItems: "center" }}
            >
              <svg width="25" height="25" viewBox="0 0 32 32" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.4503 16.9844C24.6322 16.9839 25.7878 17.3361 26.7708 17.9963C27.7537 18.6566 28.52 19.5952 28.9726 20.6935C29.4252 21.7919 29.5439 23.0005 29.3135 24.1667C29.0832 25.3329 28.5143 26.4041 27.6786 27.245C26.843 28.0859 25.7783 28.6586 24.619 28.8907C23.4598 29.1228 22.2582 29.0039 21.1662 28.549C20.0741 28.0941 19.1407 27.3237 18.484 26.3351C17.8273 25.3466 17.4768 24.1843 17.4768 22.9954C17.4768 21.4015 18.1061 19.8729 19.2263 18.7457C20.3464 17.6185 21.8658 16.985 23.4503 16.9844ZM18.2197 3.88547C18.2197 3.39536 18.7025 3.00635 19.299 3.00635C19.8955 3.00635 20.3783 3.40635 20.3783 3.89646V8.02833C20.3783 8.52063 19.8955 8.91844 19.299 8.91844C18.7025 8.91844 18.2197 8.52063 18.2197 8.02833V3.88547ZM8.5494 3.88547C8.5494 3.39536 9.03226 3.00635 9.62873 3.00635C10.2252 3.00635 10.7102 3.40635 10.7102 3.89646V8.02833C10.7102 8.52063 10.2252 8.92942 9.62873 8.92942C9.03226 8.92942 8.5494 8.53162 8.5494 8.03931V3.88547ZM16.5417 27.5932H4.81544C4.22278 27.5908 3.65504 27.353 3.23596 26.9314C2.81688 26.5099 2.58043 25.9388 2.57813 25.3426L2.57812 7.50964C2.581 6.91365 2.81764 6.34289 3.23659 5.92146C3.65555 5.50002 4.22295 5.26198 4.81544 5.25909H6.87797V8.02833C6.87994 8.39854 6.9646 8.76358 7.12571 9.09645C7.28682 9.42932 7.52024 9.7215 7.80872 9.9514C8.32405 10.3709 8.9669 10.5998 9.62982 10.5998C10.2927 10.5998 10.9356 10.3709 11.4509 9.9514C11.7394 9.7215 11.9728 9.42932 12.1339 9.09645C12.295 8.76358 12.3797 8.39854 12.3817 8.02833V5.25909H16.5482V8.02833C16.5498 8.39839 16.634 8.76337 16.7948 9.09625C16.9555 9.42913 17.1886 9.72139 17.4768 9.9514C17.9925 10.3711 18.6357 10.6 19.299 10.6C19.9623 10.6 20.6055 10.3711 21.1212 9.9514C21.409 9.72107 21.6419 9.42874 21.8026 9.09593C21.9633 8.76313 22.0477 8.39831 22.0498 8.02833V5.25909H24.2084C24.8011 5.26141 25.3688 5.49926 25.7879 5.92082C26.207 6.34238 26.4434 6.91347 26.4457 7.50964V15.2217C26.1339 15.1001 25.815 14.9973 25.4909 14.914V11.7734H3.53292V24.8635C3.53751 25.3303 3.72463 25.7765 4.05379 26.1055C4.38296 26.4346 4.82768 26.62 5.29174 26.6217H15.9976C16.1595 26.9531 16.342 27.2738 16.5439 27.5822L16.5417 27.5932ZM6.87797 15.3558L7.63393 16.0701L9.18301 14.4855C9.34251 14.3206 9.4452 14.1888 9.64402 14.3954L10.2995 15.0547C10.518 15.2745 10.4983 15.3888 10.2995 15.5866L8.00099 17.8481C7.5815 18.2635 7.6536 18.2877 7.22536 17.8635L5.79208 16.4283C5.77122 16.4095 5.75485 16.3863 5.7442 16.3602C5.73355 16.3342 5.72889 16.306 5.73057 16.2779C5.73225 16.2498 5.74023 16.2224 5.75391 16.1979C5.76759 16.1733 5.78661 16.1522 5.80956 16.136L6.55897 15.3558C6.6704 15.2371 6.76217 15.2437 6.87797 15.3558ZM13.0655 14.3602H16.2729C16.3809 14.3602 16.4845 14.4032 16.5611 14.4798C16.6376 14.5564 16.6809 14.6604 16.6815 14.769V17.4525C16.6804 17.5611 16.637 17.665 16.5606 17.7418C16.4842 17.8187 16.3809 17.8623 16.2729 17.8635H13.0655C12.9574 17.8629 12.8538 17.8194 12.7773 17.7425C12.7008 17.6655 12.6575 17.5613 12.657 17.4525V14.769C12.6581 14.6605 12.7016 14.5569 12.778 14.4804C12.8545 14.4039 12.9577 14.3608 13.0655 14.3602ZM19.5306 14.3602H22.738C22.8283 14.3609 22.9159 14.3914 22.9873 14.447C23.0587 14.5026 23.1101 14.5802 23.1335 14.6679C21.715 14.7211 20.3342 15.1412 19.1242 15.8877V14.769C19.1248 14.6604 19.1681 14.5564 19.2446 14.4798C19.3212 14.4032 19.4248 14.3602 19.5328 14.3602H19.5306ZM13.0655 20.0635H15.6874C15.34 21.0013 15.1638 21.9945 15.1674 22.9954C15.1674 23.1866 15.1674 23.3778 15.1871 23.5668H13.0655C12.9574 23.5662 12.8538 23.5227 12.7773 23.4458C12.7008 23.3688 12.6575 23.2646 12.657 23.1558V20.4745C12.6575 20.3657 12.7008 20.2615 12.7773 20.1845C12.8538 20.1076 12.9574 20.0641 13.0655 20.0635ZM6.60267 20.0635H9.81007C9.86428 20.0626 9.91811 20.0726 9.96844 20.0929C10.0188 20.1131 10.0646 20.1433 10.1032 20.1815C10.1419 20.2198 10.1725 20.2654 10.1935 20.3157C10.2144 20.366 10.2252 20.4199 10.2252 20.4745V23.1558C10.224 23.2656 10.1797 23.3704 10.1019 23.4475C10.0242 23.5245 9.91922 23.5674 9.81007 23.5668H6.60486C6.4965 23.5668 6.39257 23.5235 6.31595 23.4464C6.23933 23.3693 6.19628 23.2648 6.19628 23.1558V20.4745C6.19628 20.3655 6.23933 20.2609 6.31595 20.1839C6.39257 20.1068 6.4965 20.0635 6.60486 20.0635H6.60267ZM22.62 19.969H23.3498C23.4147 19.969 23.4769 19.9949 23.5228 20.0411C23.5687 20.0872 23.5945 20.1499 23.5945 20.2151V23.0459H26.1748C26.2393 23.0459 26.3012 23.0715 26.3471 23.1172C26.3929 23.1629 26.4189 23.225 26.4195 23.2899V24.0261C26.4189 24.091 26.3929 24.1531 26.3471 24.1988C26.3012 24.2445 26.2393 24.2701 26.1748 24.2701H22.3797V20.2151C22.3797 20.1502 22.4052 20.088 22.4506 20.0419C22.496 19.9958 22.5577 19.9696 22.6222 19.969H22.62ZM23.4481 18.3492C24.3618 18.3483 25.2552 18.6201 26.0154 19.1301C26.7755 19.6401 27.3682 20.3654 27.7184 21.2143C28.0687 22.0632 28.1608 22.9975 27.9831 23.8991C27.8053 24.8006 27.3658 25.6289 26.72 26.2791C26.0742 26.9293 25.2512 27.3723 24.3552 27.5519C23.4591 27.7315 22.5301 27.6398 21.6859 27.2883C20.8417 26.9367 20.1201 26.3412 19.6123 25.5771C19.1046 24.8129 18.8336 23.9145 18.8336 22.9954C18.8333 22.3853 18.9525 21.7812 19.1844 21.2175C19.4163 20.6538 19.7563 20.1416 20.185 19.7102C20.6138 19.2787 21.1228 18.9364 21.683 18.7029C22.2433 18.4694 22.8438 18.3492 23.4503 18.3492H23.4481Z"
                  fill="#B7B7B7"
                />
              </svg>
              <span className="menu--text">Team Members</span>
            </div>
          </NavLink>

          <NavLink
            to="reports"
            className={(navLink) =>
              navLink.isActive
                ? "sidebar_menu_item checked"
                : "sidebar_menu_item"
            }
          >
            <div
              style={{ display: "flex", gap: "0.8rem", alignItems: "center" }}
            >
              <svg width="25" height="25" viewBox="0 0 32 32" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.725 17.3394C22.2595 18.4185 22.5607 19.633 22.5607 20.9194C22.5607 22.9189 21.8332 24.7513 20.6263 26.1626L18.7938 24.3345C19.5383 23.395 19.9816 22.208 19.9816 20.9173C19.9816 17.8704 17.5064 15.4012 14.4522 15.4012C13.1584 15.4012 11.9686 15.8434 11.0268 16.5861L9.19645 14.7601C10.3248 13.7995 11.7225 13.1436 13.2602 12.9172L13.2327 12.9045L16.8765 8.92871L14.6537 7.55973L12.081 10.0036C11.4744 10.5791 10.5157 10.5558 9.93879 9.95068C9.36189 9.34554 9.38522 8.38916 9.99181 7.81364L13.4066 4.56999L13.4044 4.56787C13.9474 4.0516 14.7788 4.01563 15.36 4.44938L20.1597 7.40316C20.2234 7.44336 20.2849 7.48568 20.3421 7.53434L21.6783 8.24316C23.1248 9.01123 23.2457 10.359 22.1534 11.5757L19.5998 14.4194L25.0422 14.0809V14.0788C25.8779 14.0259 26.599 14.6628 26.652 15.4964C26.6541 15.5282 26.6562 15.562 26.6562 15.5938C26.6562 15.6572 26.652 15.7186 26.6435 15.7821L26.0751 23.814C26.0157 24.6476 25.2903 25.2739 24.4547 25.2168C23.619 25.1576 22.9891 24.4339 23.0485 23.6003L23.5003 17.2082L21.725 17.3394ZM23.2054 3.00635C24.6222 3.00635 25.7718 4.15104 25.7718 5.56657C25.7718 6.97998 24.6222 8.12679 23.2054 8.12679C21.7886 8.12679 20.6391 6.97998 20.6391 5.56657C20.6391 4.15104 21.7886 3.00635 23.2054 3.00635ZM18.919 27.6691C17.6379 28.5133 16.1023 29.0063 14.4522 29.0063C9.97272 29.0063 6.34375 25.3861 6.34375 20.9173C6.34375 19.2712 6.83794 17.7393 7.6842 16.4613L9.56338 18.3359C9.15403 19.1061 8.92072 19.9842 8.92072 20.9173C8.92072 23.9642 11.3959 26.4334 14.4501 26.4334C15.3854 26.4334 16.2656 26.2007 17.0377 25.7923L18.919 27.6691Z"
                  fill="#B7B7B7"
                />
              </svg>
              <span className="menu--text">Reports</span>
            </div>
          </NavLink>

          <NavLink
            to="subcriptions"
            className={(navLink) =>
              navLink.isActive
                ? "sidebar_menu_item checked"
                : "sidebar_menu_item"
            }
          >
            <div
              style={{ display: "flex", gap: "0.8rem", alignItems: "center" }}
            >
              <svg width="25" height="25" viewBox="0 0 32 32" fill="none">
                <path
                  d="M31.1612 27.605L30.8149 27.2087L29.1664 28.8481L29.1638 28.8455C28.9789 29.0294 28.6795 29.032 28.4946 28.8507L26.8149 27.2269L25.1691 28.7989C24.9894 28.9828 24.6925 28.9932 24.5024 28.8171L22.7576 27.2139L21.1743 28.8352C21.1638 28.8455 21.156 28.8559 21.1456 28.8663C20.9581 29.0527 20.656 29.0527 20.4685 28.8663L18.8071 27.2139L17.0935 28.8378C16.906 29.0139 16.6092 29.0113 16.4269 28.8274L14.7967 27.1906L14.4581 27.5791C14.3722 27.6956 14.2316 27.7707 14.0727 27.7707C13.8071 27.7707 13.5935 27.5558 13.5935 27.2942V20.9438C13.7029 20.9619 13.8149 20.9722 13.9269 20.9722C14.1378 20.9748 14.3487 20.9489 14.5545 20.892V26.0718C14.7237 25.9837 14.9347 26.0018 15.0883 26.1339C15.0987 26.1417 15.1066 26.1495 15.1144 26.1598L16.7758 27.8303L18.4868 26.209C18.6769 26.0303 18.9711 26.0355 19.1534 26.2168L19.156 26.2142L20.8045 27.8536L22.4008 26.2194C22.5831 26.0355 22.8774 26.0277 23.0675 26.2013L24.8253 27.8148L26.492 26.2246C26.6795 26.0459 26.9763 26.0485 27.1586 26.2297L28.8253 27.8433L30.5024 26.1754C30.6456 26.0303 30.867 25.9992 31.0441 26.0821V13.1585H22.2055C22.2368 13.0057 22.2498 12.8503 22.2498 12.6949C22.2472 12.5318 22.2263 12.366 22.1899 12.2054H31.5232C31.7888 12.2054 32.0024 12.4178 32.0024 12.682V27.2942H31.9998C31.9998 27.4263 31.9451 27.5584 31.8331 27.6542C31.6352 27.8251 31.3331 27.8044 31.1612 27.605ZM18.2628 23.4171C18.0493 23.4171 17.8748 23.2436 17.8748 23.0312C17.8748 22.8188 18.0493 22.6453 18.2628 22.6453H21.7394C21.9529 22.6453 22.1274 22.8188 22.1274 23.0312C22.1274 23.2436 21.9529 23.4171 21.7394 23.4171H18.2628ZM18.2628 18.7449C18.0493 18.7449 17.8748 18.5714 17.8748 18.359C17.8748 18.1467 18.0493 17.9731 18.2628 17.9731H28.5727C28.7862 17.9731 28.9607 18.1467 28.9607 18.359C28.9607 18.5714 28.7862 18.7449 28.5727 18.7449H18.2628ZM18.2628 21.094C18.0493 21.094 17.8748 20.9205 17.8748 20.7081C17.8748 20.4957 18.0493 20.3222 18.2628 20.3222H27.0779C27.2914 20.3222 27.4659 20.4957 27.4659 20.7081C27.4659 20.9205 27.2914 21.094 27.0779 21.094H18.2628ZM16.3279 7.43744C16.8461 7.95283 16.8566 8.78418 16.3513 9.28662L16.0779 9.55856L18.2732 11.703L12.7237 17.0227L10.5857 14.8212L2.25499 23.1063C1.74978 23.6088 0.913842 23.5984 0.395613 23.083C-0.122616 22.5676 -0.133033 21.7363 0.372175 21.2338L8.73416 12.9177L7.05968 11.1876L12.3045 5.86796L14.1821 7.69902L14.4711 7.41154C14.9737 6.91428 15.8097 6.92464 16.3279 7.43744ZM12.0779 3.3195C12.4894 3.7287 12.4972 4.39171 12.0961 4.79056L5.97634 10.8768C5.5753 11.2757 4.90863 11.2679 4.49718 10.8587C4.08572 10.4495 4.07791 9.78647 4.47895 9.38763L10.5987 3.30137C10.9998 2.89993 11.6664 2.91029 12.0779 3.3195ZM20.7758 11.9698C21.1873 12.379 21.1951 13.042 20.7941 13.4408L14.6743 19.5271C14.2732 19.9259 13.6066 19.9182 13.1951 19.509C12.7836 19.0998 12.7758 18.4367 13.1769 18.0379L19.2967 11.9516C19.7003 11.5528 20.3644 11.5606 20.7758 11.9698Z"
                  fill="#B7B7B7"
                />
              </svg>
              <span className="menu--text">Subscription</span>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="sidebar_powered_by">
        <span className="text">Powered by</span>
        <div className="brand_wrapper">
          {/* <img src={brandIcon} alt="Logo" className="" /> */}
          <span>DRCFO</span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
