import React from "react";
import messages from "../../../assets/messages.svg";
import dummyUser from "../../../assets/dummyUser.png";

const EnvironmentalKpi = () => {
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
      symbol: "E1",
      dataPoints: [
        {
          id: "E1-0",
          point: "Scope 1 emissions",
          unit: "tCO2e",
          value: 5,
        },
        {
          id: "E1-1",
          point: "Scope 2 emissions",
          unit: "tCO2e",
          value: 10,
        },
        {
          id: "E1-2",
          point: "Gross Revenue",
          unit: "million USD",
          value: "",
        },
      ],
      messages: "unread",
    },

    {
      id: 1,
      symbol: "E2",
      dataPoints: [
        {
          id: "E2-0",
          point: "Scope 1 emissions",
          unit: "tCO2e",
          value: 5,
        },
        {
          id: "E2-1",
          point: "Scope 2 emissions",
          unit: "tCO2e",
          value: 10,
        },
        {
          id: "E2-2",
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
      {/* <div className="kpi-table_heading">
        {headings.map((item) => (
          <div className="heading_cell" key={item}>
            {item}
          </div>
        ))}
      </div>
      <div className="kpi-table_body">
        {dummyData.map((item) => (
          <div key={item.id} className="kpi-table_row">
            <div className="symbol-cell kpi-table-cell">{item.symbol}</div>
            <div className="data-points-cell kpi-table-cell">
              {item.dataPoints.map((pt) => (
                <div key={pt.id} className="data-points-cell_point">
                  {pt.point}
                </div>
              ))}
            </div>
            <div className="kpi-table-cell">
              {item.dataPoints.map((pt) => (
                <div key={pt.id} className="data-points-unit_cell">
                  {pt.unit}
                </div>
              ))}
            </div>
            <div className="kpi-table-cell">
              {item.dataPoints.map((pt) => (
                <div key={pt.id} className="data-points-value_cell">
          
                  <input
                    type="text"
                    value={pt.value}
                    className="data-points-value_input"
                    placeholder="Enter Value"
                  />
                
                </div>
              ))}
            </div>
            <div className="data-points-assignee_cell kpi-table-cell">
              <div className="chat">
       
              </div>
            </div>
          </div>
        ))}
      </div> */}

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

export default EnvironmentalKpi;
