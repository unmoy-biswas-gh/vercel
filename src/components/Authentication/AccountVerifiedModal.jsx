import React from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    height: "auto",
    width: "30vw",
    transform: "translate(-50%, -50%)",
    position: "relative",
    background: "#fff",
    borderRadius: "8px",
    textAlign: "center",
  },
  overlay: {
    backgroundColor: "rgba(30, 30, 30, 0.50)",
  },
};

const modalH1 = {
  fontWeight: "500",
  fontSize: "16px",
  marginTop: "20px",
  marginBottom: "20px",
  textAlign: "center",
};
const AccountVerifiedModal = ({ open, email }) => {
  const navigate = useNavigate();
  return (
    <Modal isOpen={open} style={customStyles}>
      <div className="d-flex justify-content-center flex-column align-items-center">
        <div>
          <svg width="90" height="90" viewBox="0 0 113 113" fill="none">
            <circle
              cx="56.5"
              cy="56.5"
              r="56"
              fill="url(#paint0_linear_1717_14857)"
            />
            <path
              d="M34.0957 56.3002L49.0854 71.29L78.9071 41.4683"
              stroke="white"
              stroke-width="8.83606"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1717_14857"
                x1="0.5"
                y1="0.5"
                x2="130.171"
                y2="27.4392"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#51ADAC" />
                <stop offset="1" stop-color="#4FA874" />
              </linearGradient>
            </defs>
          </svg>
          <h1 style={modalH1}>Your account has been created successfully</h1>
        </div>
        <button
          className="ge3s_green_button"
          onClick={() => navigate("/register", { state: email })}
        >
          Continue
        </button>
      </div>
    </Modal>
  );
};

export default AccountVerifiedModal;
