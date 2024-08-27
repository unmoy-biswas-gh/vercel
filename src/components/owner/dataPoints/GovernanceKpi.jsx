import React from "react";
import messages from "../../../assets/messages.svg";
import dummyUser from "../../../assets/dummyUser.png";

const GovernanceKpi = () => {
  const headings = [
    "Symbol",
    "Data Point",
    "Data Point Unit",
    "Value",
    "Assignee",
  ];

  const dummyData = [
    {
      id: 0,
      symbol: "B1",
      dataPoints: [
        {
          id: "B1-0",
          point: "Scope 1 emissions",
          unit: "tCO2e",
          value: 5,
        },
        {
          id: "B1-1",
          point: "Scope 2 emissions",
          unit: "tCO2e",
          value: 10,
        },
        {
          id: "B1-2",
          point: "Gross Revenue",
          unit: "million USD",
          value: "",
        },
      ],
      messages: "unread",
    },

    {
      id: 1,
      symbol: "B1",
      dataPoints: [
        {
          id: "B1-0",
          point: "Scope 1 emissions",
          unit: "tCO2e",
          value: 5,
        },
        {
          id: "B1-1",
          point: "Scope 2 emissions",
          unit: "tCO2e",
          value: 10,
        },
        {
          id: "B1-2",
          point: "Gross Revenue",
          unit: "million USD",
          value: "",
        },
      ],
      messages: "read",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        overflow: "auto",
      }}
    >
      <div className="kpi-table">
        <div className="kpi-table-row kpi-table-heading">
          {headings.map((item, index) => (
            <div
              key={item}
              className={`kpi-table-cell kpi-table-heading-cell ${
                index === 0 || index === 3 || index === 4
                  ? "center-content"
                  : ""
              } `}
            >
              {item}
            </div>
          ))}
        </div>

        {dummyData.map((item, index) => (
          <div
            key={item.id}
            className={`kpi-table-row ${index === 1 ? "no-gap" : ""}`}
          >
            <div className="kpi-table-cell center-content kpi-table-symbol_div">
              {item.symbol}
            </div>
            <div className="kpi-table-cell">
              {item.dataPoints.map((pt) => (
                <div className="kpi-table-data_point_div" key={pt.id}>
                  {pt.point}
                </div>
              ))}
            </div>
            {/* kpi-table-data_unit_div */}
            <div className="kpi-table-cell ">
              {item.dataPoints.map((pt) => (
                <div className="kpi-table-data_unit_div " key={pt.id}>
                  {pt.unit}
                </div>
              ))}
            </div>
            <div className="kpi-table-cell ">
              {item.dataPoints.map((pt) => (
                <div key={pt.value} className="kpi-table-data_value_div ">
                  <input
                    type="text"
                    placeholder="Enter Value"
                    value={pt.value}
                  />
                </div>
              ))}
            </div>
            <div className="kpi-table-cell center-content assignee-cell">
              <div className="assignments-div">
                {item.messages === "unread" ? (
                  <div className="messages-wrapper">
                    <div className="profile-images-container">
                      {[1, 2, 3, 4, 5].slice(0, 3).map((img) => (
                        <img
                          key={img}
                          src={dummyUser}
                          alt="Messaged"
                          height={28}
                          width={28}
                        />
                      ))}
                      {[1, 2, 3, 4, 5].length > 4 && (
                        <div className="extra-images">
                          +{[1, 2, 3, 4, 5].length - 3}
                        </div>
                      )}
                    </div>
                    <div className="notifications-div">
                      <img
                        src={messages}
                        alt="Messaged"
                        height={24}
                        width={24}
                      />
                      <span className="unread">2 Unread</span>
                    </div>
                  </div>
                ) : item.messages === "read" ? (
                  <div className="messages-wrapper">
                    <div className="profile-images-container">
                      {[1, 2, 3, 4].map((img) => (
                        <img
                          key={img}
                          src={dummyUser}
                          alt="Messaged"
                          height={28}
                          width={28}
                        />
                      ))}
                    </div>
                    <div className="notifications-div">
                      <img
                        src={messages}
                        alt="Messaged"
                        height={24}
                        width={24}
                      />
                      <span className="read">0 Unread</span>
                    </div>
                  </div>
                ) : item.messages === "not assigned" ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <button className="assign-btn">Assign</button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GovernanceKpi;
