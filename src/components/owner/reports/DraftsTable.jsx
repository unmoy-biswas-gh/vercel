import React from "react";

const DraftsTable = () => {
  const rows = [
    {
      id: 0,
      reportName: "Report 1",
      lastEdited: "05-05-2024",
      progress: "60%",
    },
    {
      id: 1,
      reportName: "Report 2",
      lastEdited: "10-05-2024",
      status: "Not Verified",
      progress: "90%",
    },
  ];

  const headings = ["Report Name", "Last edited", "Progress", "Actions"];

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
            <div className="reports-table-cell">{item.lastEdited}</div>
            <div className="reports-table-cell ">{item.progress}</div>
            <div className="reports-table-cell ">
              <button className="report-actions-btn">Preview</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DraftsTable;
