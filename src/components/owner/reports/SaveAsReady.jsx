import React from "react";

const SaveAsReady = () => {
  const rows = [
    {
      id: 0,
      reportName: "Report 1",
      submittedDate: "05-05-2024",
      status: "Verified",
    },
    {
      id: 1,
      reportName: "Report 2",
      submittedDate: "10-05-2024",
      status: "Not Verified",
    },
  ];

  const headings = ["Report Name", "Report Generated On", "Status", "Actions"];

  return (
    <div className="reports-table-container">
      <div className="reports-table">
        <div className="reports-table-row reports-table-header">
          {headings.map((item) => (
            <div key={item} className="reports-table-cell">
              {item}
            </div>
          ))}
        </div>
        {rows.map((item) => (
          <div key={item.id} className="reports-table-row">
            <div className="reports-table-cell">{item.reportName}</div>
            <div className="reports-table-cell">{item.submittedDate}</div>
            <div
              className={`reports-table-cell ${
                item.status !== "Verified"
                  ? "report-unverified"
                  : "report-verified"
              }`}
            >
              {item.status}
            </div>
            <div className="reports-table-cell">
              <button className="report-actions-btn">Preview</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SaveAsReady;
