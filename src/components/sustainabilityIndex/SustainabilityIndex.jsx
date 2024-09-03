import React from "react";
import "./sustainabilityIndex.css";
import GovernanceStats from "./GovernanceStats";
import BaseSectorStats from "./BaseSectorStats";
import EnvironmentalStats from "./EnvironmentalStats";
import SocialStats from "./SocialStats";
import logo from "../../assets/images/logo.png";
import expert from "../../assets/expert.svg";
import close from "../../assets/close.svg";

const SustainabilityIndex = () => {
  const disclaimer = [
    "The scorecard provides estimates based on methodology and data inputs at the time; accuracy is dependent on input quality. Standards and best practices continually evolve.",
    "Scorecard comparisons and benchmarks should be interpreted within broader organizational contexts along with other due diligence. Unique circumstances apply.The tool provides generalized comparisons to industry average",
    "While aiming for completeness, assessments have inherent constraints. Users assume responsibility for sound interpretation and application of results.",
    "No warranty is given on the fitness of the sustainability scorecard for any particular purpose. The scorecard should not be relied upon to make acquisition, divestment, investment, hiring, or other decisions without supplementary diligence",
    "The proprietary SI index methodology by GE3S takes into account only broad industrial sectors, specific sectors or clients who might have additional parameters that need to be monitored should reach out to ge3s via email/purchasing the “essentials” plan",
  ];

  return (
    <>
      <div className="sustainability-top-heading">
        <h1>Sustainability Index Score Card</h1>
      </div>

      <div className="charts-container">
        <div className="sustainability-heading_container">
          <div className="sustainability-heading">
            <img src={logo} height={55} width={55} alt="Company Logo" />
            <div className="sustainability-heading_title">
              <h1>Star Bucks</h1> <span>|</span>{" "}
              <h2>Sustainability Index For Q3 2024</h2>
            </div>
          </div>
          <span style={{ marginLeft: "90px" }}>License No: 23879076</span>
        </div>

        <BaseSectorStats />

        <EnvironmentalStats />

        <SocialStats />

        <GovernanceStats />

        <div className="disclaimer-div">
          <h3>Disclaimers</h3>
          <ul>
            {disclaimer.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="expert-div">
        <div className="expert-left_div">
          <img src={expert} alt="expert" height={35} width={35} />
          <div className="expert-left_div_text">
            <h2>Expert Consultation to Boost Your Scores!</h2>
            <h3>
              Enhance your performance through personalized insights from
              seasoned professionals
            </h3>
          </div>
        </div>
        <div className="expert-right_div">
          <button className="book-btn">Book a call</button>
          <button className="close-btn">
            <img src={close} alt="Close" height={20} width={20} />
          </button>
        </div>
      </div>

      <div className="sustainability-bottom_div">
        <button className="btn-no_borders">Save as Ready</button>
        <button className="btn-no_borders">Edit Data Points</button>
        <button className="verification-btn">Send for Verification</button>
      </div>
    </>
  );
};

export default SustainabilityIndex;
