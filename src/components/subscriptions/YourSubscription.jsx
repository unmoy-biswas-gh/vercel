import React from "react";
import cross from "../../assets/cross.svg";
import checkMark from "../../assets/checkmark.svg";

const YourSubscription = () => {
  const data = [
    { id: 0, name: "Basic", price: "X", currentlyUsing: true, benefits: [] },
  ];

  return (
    <div className="your-subscriptions-container">
      <div className="your-subscriptions-heading">
        <h1>You've exhausted your credits!</h1>
        <h2>Check out our amazing plans.</h2>
      </div>

      <div className="your-subscriptions-card_container">
        {/* FIRST CARD */}
        <div className="your-subscriptions-card">
          <div className="your-subscriptions-card_heading">
            <h2>Basic</h2>
            <h3>$ X</h3>
            <h4>Currently using</h4>
          </div>

          <div className="your-subscription-benefits_container">
            <h3>Benefits</h3>
            <div className="your-subscription_benefit">
              <img src={checkMark} alt="Cross" height={20} width={20} />

              <p>Team Collaboration</p>
            </div>

            <div className="your-subscription_benefit">
              <img src={cross} alt="Cross" height={20} width={20} />

              <p>Generate Report 4 Times</p>
            </div>

            <div className="your-subscription_benefit">
              <img src={cross} alt="Cross" height={20} width={20} />

              <p>Generate Report 4 Times</p>
            </div>
          </div>

          <div>
            <button className="your-subscription-get_started_outlined">
              Get Started
            </button>
          </div>
        </div>
        {/* FIRST CARD END */}

        {/* SECOND CARD */}
        <div className="your-subscriptions-card">
          <div className="your-subscriptions-card_heading">
            <h2>Premium</h2>
            <h3>$ Y</h3>
            <h4>Upgrade Now!</h4>
          </div>

          <div className="your-subscription-benefits_container">
            <h3>Benefits</h3>
            <div className="your-subscription_benefit">
              <img src={checkMark} alt="Cross" height={20} width={20} />

              <p>Generate Unlimited Reports</p>
            </div>

            <div className="your-subscription_benefit">
              <img src={checkMark} alt="Cross" height={20} width={20} />

              <p>Add Team Members (10 Members)</p>
            </div>

            <div className="your-subscription_benefit">
              <img src={checkMark} alt="Cross" height={20} width={20} />

              <p>4 Verified Reports Annually</p>
            </div>
          </div>

          <div>
            <button className="your-subscription-get_started_filled">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourSubscription;
