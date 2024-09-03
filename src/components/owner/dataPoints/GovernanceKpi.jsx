import React from "react";
import messages from "../../../assets/messages.svg";
import dummyUser from "../../../assets/dummyUser.png";
import { useLocation } from "react-router-dom";

const GovernanceKpi = () => {
  const headings = [
    "Symbol",
    "Data Point",
    "Data Point Unit",
    "Value",
    "Comments",
  ];

  const location = useLocation();
  console.log(location.state.generationMethod);

  const isAiGenerated = location.state.generationMethod === "ai";

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
      {/* <div className="kpi-table">
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

        {dummyData.map((item) => {
          return (
            <div key={item.id} className={`kpi-table-row `}>
              <div
                className={`kpi-table-cell center-content kpi-table-symbol_div`}
                style={{
                  backgroundColor: isAiGenerated ? "#F2F2F2" : "white",
                }}
              >
                {item.symbol}
              </div>
              <div className="kpi-table-cell">
                {item.dataPoints.map((pt) => (
                  <div
                    className="kpi-table-data_point_div"
                    key={pt.id}
                    style={{
                      backgroundColor:
                        isAiGenerated && pt.value !== "" ? "#F2F2F2" : "white",
                    }}
                  >
                    {pt.point}
                  </div>
                ))}
              </div>
              <div className="kpi-table-cell">
                {item.dataPoints.map((pt) => (
                  <div
                    className="kpi-table-data_unit_div"
                    key={pt.id}
                    style={{
                      backgroundColor:
                        isAiGenerated && pt.value !== "" ? "#F2F2F2" : "white",
                    }}
                  >
                    {pt.unit}
                  </div>
                ))}
              </div>
              <div className="kpi-table-cell">
                {item.dataPoints.map((pt) => (
                  <div
                    key={pt.value}
                    className="kpi-table-data_value_div"
                    style={{
                      backgroundColor:
                        isAiGenerated && !pt.value ? "#FFEDED" : "",
                    }}
                  >
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
          );
        })}
      </div> */}
      <div className="new-kpi-table-container">
        <div className="new-kpi-table">
          <div className="new-kpi-table-header">
            <div className="new-kpi-table-row new-kpi-table-head-row">
              <div className="new-kpi-table-cell header-cell centered">
                <div className="new-kpi-table-header-content">Symbol</div>
              </div>
              <div className="new-kpi-table-cell header-cell">
                <div className="new-kpi-table-header-content">Data Point</div>
              </div>
              <div className="new-kpi-table-cell header-cell">
                <div className="new-kpi-table-header-content">
                  Data Point Unit
                </div>
              </div>
              <div className="new-kpi-table-cell header-cell centered">
                <div className="new-kpi-table-header-content">Value</div>
              </div>
              <div className="new-kpi-table-cell header-cell centered">
                <div className="new-kpi-table-header-content">Comments</div>
              </div>
            </div>
          </div>

          <div className="new-kpi-table-body">
            {dummyData.map((item) => {
              const missingValues = item.dataPoints.some(
                (pt) => pt.value === "" || !pt.value
              );
              return (
                <div
                  key={item.id}
                  className="new-kpi-table-row new-kpi-table-body-row"
                >
                  <div
                    style={{
                      backgroundColor:
                        isAiGenerated && missingValues ? "#ffeded" : "white",
                    }}
                    className="new-kpi-table-cell centered"
                  >
                    <div className="new-kpi-table-cell-content">
                      {item.symbol}
                    </div>
                  </div>
                  <div className="new-kpi-table-cell">
                    {item.dataPoints.map((pt) => (
                      <div
                        style={{
                          backgroundColor:
                            isAiGenerated && pt.value !== ""
                              ? "#F2F2F2"
                              : "white",
                        }}
                        key={pt.point}
                        className="new-kpi-table-cell-content data"
                      >
                        {pt.point}
                      </div>
                    ))}
                  </div>
                  <div className="new-kpi-table-cell">
                    {item.dataPoints.map((pt) => (
                      <div
                        key={pt.unit}
                        className="new-kpi-table-cell-content data"
                        style={{
                          backgroundColor:
                            isAiGenerated && pt.value !== ""
                              ? "#F2F2F2"
                              : "white",
                        }}
                      >
                        {pt.unit}
                      </div>
                    ))}
                  </div>
                  <div className="new-kpi-table-cell centered">
                    {item.dataPoints.map((pt) => (
                      <div
                        style={{
                          backgroundColor:
                            isAiGenerated && !pt.value ? "#FFEDED" : "",
                        }}
                        key={pt.value}
                        className="new-kpi-table-cell-content input-wrapper"
                      >
                        <input
                          value={pt.value}
                          type="text"
                          className="input-field"
                          placeholder="Enter value"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="new-kpi-table-cell centered">
                    <div className="new-kpi-table-cell-content">
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
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernanceKpi;
