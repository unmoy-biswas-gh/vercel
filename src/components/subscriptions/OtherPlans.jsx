import React from "react";
import cross from "../../assets/cross.svg";
import checkMark from "../../assets/checkmark.svg";

const OtherPlans = () => {
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
            <h2>Add Seat</h2>
            <h3>$ 10</h3>
            <h4>Per seat</h4>
          </div>

          <div className="your-subscription-benefits_container">
            <h3>Benefits</h3>
            <div className="your-subscription_benefit">
              <img src={checkMark} alt="Cross" height={20} width={20} />

              <p>Add more Team Members</p>
            </div>
          </div>

          <div>
            <button className="your-subscription-get_started_filled">
              Pay
            </button>
          </div>
        </div>
        {/* FIRST CARD END */}

        {/* SECOND CARD */}
        <div className="your-subscriptions-card">
          <div className="your-subscriptions-card_heading">
            <h2>Verification credit's</h2>
            <h3>$ 10</h3>
            <h4>Per credit's</h4>
          </div>

          <div className="your-subscription-benefits_container">
            <h3>Benefits</h3>
            <div className="your-subscription_benefit">
              <img src={checkMark} alt="Cross" height={20} width={20} />

              <p>More Verified Reports</p>
            </div>
          </div>

          <div>
            <button className="your-subscription-get_started_filled">
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherPlans;
