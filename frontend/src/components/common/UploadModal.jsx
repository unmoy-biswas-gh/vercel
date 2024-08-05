import { Box, Button, Dialog, DialogContent, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import uploadIcons from "../../assets/images/upload.png";

const fileIcons = {
  pdf: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <g clip-path="url(#clip0_932_9430)">
        <path
          d="M27 19H23V26"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M26 23H23"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6 24H8C8.66304 24 9.29893 23.7366 9.76777 23.2678C10.2366 22.7989 10.5 22.163 10.5 21.5C10.5 20.837 10.2366 20.2011 9.76777 19.7322C9.29893 19.2634 8.66304 19 8 19H6V26"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14 19V26H16C16.9283 26 17.8185 25.6313 18.4749 24.9749C19.1313 24.3185 19.5 23.4283 19.5 22.5C19.5 21.5717 19.1313 20.6815 18.4749 20.0251C17.8185 19.3687 16.9283 19 16 19H14Z"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6 14V5C6 4.73478 6.10536 4.48043 6.29289 4.29289C6.48043 4.10536 6.73478 4 7 4H19L26 11V14"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19 4V11H26"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_932_9430">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
};

function UploadFilesModal({ open, onClose }) {
  const fileDropContainer = useRef(null);
  const fileInput = useRef(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [showUploadedFile, setShowUploadedFile] = useState(false);

  useEffect(() => {
    if (uploadedFiles.length > 0) {
      setShowUploadedFile(true);
    }
  }, [uploadedFiles]);

  const dragOver = (e) => {
    e.preventDefault();
    if (fileDropContainer.current) {
      fileDropContainer.current.style.background = "#F6FFF7";
    }
  };

  const handleUploadClick = () => {
    fileInput.current && fileInput.current.click();
  };

  const dragLeave = (e) => {
    e.preventDefault();
    if (fileDropContainer.current) {
      fileDropContainer.current.style.background = "#F9F9F9";
    }
  };
  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setUploadedFiles(selectedFiles);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 0) {
      //   console.log(droppedFiles);

      for (let index = 0; index < droppedFiles.length; index++) {
        if (
          droppedFiles[index].type === "application/vnd.ms-excel" ||
          droppedFiles[index].type ===
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
          droppedFiles[index].type === "text/csv" ||
          droppedFiles[index].type === "application/pdf"
        ) {
          setUploadedFiles((prev) => [...prev, droppedFiles[index]]);
          console.log(droppedFiles[index].type);
        }
      }
    }
  };

  //   const saveFile = (file) => {
  //     const url = URL.createObjectURL(file);
  //     const a = document.createElement("a");
  //     a.href = url;
  //     a.download = file.name;
  //     a.click();
  //     URL.revokeObjectURL(url);
  //   };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        ".MuiPaper-root": {
          borderRadius: "20px",
        },
      }}
    >
      <DialogContent style={{ width: "550px" }}>
        <Box sx={{ padding: "1rem", position: "relative" }}>
          <Typography
            variant="h6"
            align="center"
            sx={{
              fontWeight: "500",
              fontFamily: "Inter",
              mb: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="26"
              viewBox="0 0 21 26"
              fill="none"
            >
              <path
                d="M6.64286 19.3574H11.7857M6.64286 14.2146H11.7857M6.64286 9.07171H7.92857M11.7857 1.35742H5.61429C4.17416 1.35742 3.45408 1.35742 2.90403 1.63769C2.42017 1.88422 2.0268 2.27759 1.78027 2.76145C1.5 3.3115 1.5 4.03158 1.5 5.47171V20.386C1.5 21.8261 1.5 22.5463 1.78027 23.0963C2.0268 23.5801 2.42017 23.9735 2.90403 24.22C3.45408 24.5003 4.17416 24.5003 5.61429 24.5003H11.7857M11.7857 1.35742L19.5 9.07171M11.7857 1.35742V7.01456C11.7857 7.73463 11.7857 8.09467 11.9259 8.36969C12.0492 8.61161 12.2457 8.8083 12.4877 8.93158C12.7627 9.07171 13.1227 9.07171 13.8429 9.07171H19.5M19.5 9.07171V12.286"
                stroke="#5EB0CA"
                stroke-width="1.02857"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Upload Documents
          </Typography>

          {!showUploadedFile ? (
            <>
              <input
                ref={fileInput}
                type="file"
                accept=".pdf, .csv, .xls, .xlsx"
                hidden
                multiple
                onChange={handleFileChange}
              />
              <Typography
                variant="h6"
                sx={{
                  fontSize: "12px",
                  fontWeight: "300",
                  fontFamily: "Inter",
                  color: "black",
                  mb: "2rem",
                }}
              >
                Suggested reports :{" "}
                <b
                  style={{
                    color: "black",
                    fontFamily: "Inter",
                    fontWeight: "500",
                  }}
                >
                  {" "}
                  Sustainability Reports, HRMS Reports, Financial Reports,
                  Environmental Monitoring and Performance Report, Environmental
                  Assessment Report, Annual Report, Carbon Footprint Report,
                  Log(fuel electricity water)
                </b>
              </Typography>
              <Box
                sx={{
                  padding: "1px",
                  borderRadius: "8px",
                  backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23C5D2CBFF' stroke-width='2' stroke-dasharray='9%2c 9' stroke-dashoffset='18' stroke-linecap='butt'/%3e%3c/svg%3e")`,
                }}
              >
                <Box
                  onDragOver={dragOver}
                  onDragLeave={dragLeave}
                  onDrop={handleDrop}
                  ref={fileDropContainer}
                  sx={{
                    borderRadius: "8px",
                    background: "#F9F9F9",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "4rem",
                  }}
                >
                  <img
                    src={uploadIcons}
                    alt="upload"
                    width={90}
                    style={{ margin: "auto" }}
                  />
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{
                      fontSize: "12px",
                      fontWeight: "400",
                      fontFamily: "Inter",
                      color: "#9B9B9B",
                      mb: "2rem",
                      mt: "1rem",
                    }}
                  >
                    Click to browse or
                    <br /> drag and drop your PDF, CSV/Excel files
                  </Typography>
                  <Button
                    onClick={handleUploadClick}
                    variant="outlined"
                    sx={{
                      fontSize: "11px",
                      fontWeight: "500",
                      padding: ".5rem",
                      width: "10rem",
                      fontFamily: "Inter",
                      borderRadius: "6px",
                      border: "1px solid var(--G2, #369D9C)",
                      textTransform: "none",
                      marginTop: ".5rem",
                      background:
                        "linear-gradient(102deg, #369D9C 0%, #28814D 100%)",
                      backgroundClip: "text",
                      "-webkitBackgroundClip": "text",
                      "-webkitTextFillColor": "transparent",
                      ":hover": {
                        border: "1px solid var(--G2, #369D9C)",
                        color: " #005468",
                      },
                    }}
                  >
                    Upload
                  </Button>
                </Box>
              </Box>
            </>
          ) : (
            <>
              <Box
                sx={{
                  padding: "1px",
                  borderRadius: "8px",
                  backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23C5D2CBFF' stroke-width='2' stroke-dasharray='9%2c 9' stroke-dashoffset='18' stroke-linecap='butt'/%3e%3c/svg%3e")`,
                }}
              >
                <Box
                  sx={{
                    borderRadius: "8px",
                    background: "#F9F9F9",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    flexWrap: "wrap",
                    padding: "1rem",
                  }}
                >
                  {uploadedFiles.map((file) => {
                    return (
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          width: "200px",
                          height: "50px",
                          backgroundColor: "white",
                          alignItems: "center",
                          gap: "1rem",
                          borderRadius: "4px",
                        }}
                      >
                        <Box
                          sx={{
                            width: "50px",
                            height: "50px",
                            backgroundColor: "#E5FFF0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {fileIcons.pdf}
                        </Box>
                        <Typography
                          variant="h6"
                          align="center"
                          sx={{
                            fontSize: "12px",
                            fontWeight: "400",
                            fontFamily: "Inter",
                            color: "#9B9B9B",
                          }}
                        >
                          {file.name}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  marginTop: "2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    padding: "6px 28px",
                    fontWeight: 400,
                    fontSize: "14px",
                    fontFamily: "Inter",
                    borderRadius: "6px",
                    border: "1px solid var(--G2, #369D9C)",
                    textTransform: "none",
                    background:
                      "linear-gradient(102deg, #369D9C 0%, #28814D 100%)",
                    backgroundClip: "text",
                    "-webkitBackgroundClip": "text",
                    "-webkitTextFillColor": "transparent",
                    ":hover": {
                      border: "1px solid var(--G2, #369D9C)",
                      color: " #005468",
                    },
                  }}
                >
                  Upload
                </Button>
                <Button
                  style={{
                    width: "max-content",
                    marginLeft: "1rem",
                    padding: "6px 28px",
                    borderRadius: 6,
                    backgroundImage:
                      "linear-gradient(102deg, #369D9C 0%, #28814D 100%)",
                    fontWeight: 400,
                    fontSize: "14px",
                    fontFamily: "Inter",
                    color: "#FFF",
                    border: "1px solid #DDD",
                    letterSpacing: "0.5px",
                    cursor: "pointer",
                    textTransform: "none",
                  }}
                >
                  Submit
                </Button>
              </Box>
            </>
          )}

          <svg
            style={{
              position: "absolute",
              right: "0",
              top: "0",
              cursor: "pointer",
            }}
            onClick={onClose}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_932_9410)">
              <path
                d="M18.75 5.25L5.25 18.75"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.75 18.75L5.25 5.25"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_932_9410">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default UploadFilesModal;
