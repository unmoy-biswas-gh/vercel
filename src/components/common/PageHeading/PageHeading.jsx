import React from "react";
import back from "../../../assets/ArrowLeft.svg";
import { useNavigate } from "react-router-dom";
import "./pageHeading.css";

const PageHeading = ({ text, onClick }) => {
  const navigate = useNavigate();

  return (
    <div className="page-heading">
      <img
        style={{ cursor: "pointer" }}
        src={back}
        alt="Back"
        height={16}
        width={16}
        onClick={onClick}
      />
      <h1>{text}</h1>
    </div>
  );
};

export default PageHeading;
