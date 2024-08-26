import { Box, Button, Dialog, DialogContent, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import uploadIcons from "../../assets/images/upload.png";

import UploadingPopup from "./UploadingPopup";

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
  xls: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <g clip-path="url(#clip0_1094_13228)">
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
        <path
          d="M18.5 26H15V19"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6 19L11 26"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11 19L6 26"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.4874 19.2002C25.4874 19.2002 21.8087 18.2277 21.5124 20.5752C21.2162 22.9227 26.3162 21.8402 25.9849 24.4152C25.6762 26.8102 22.0124 25.7902 22.0124 25.7902"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1094_13228">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  csv: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <g clip-path="url(#clip0_1094_13216)">
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
        <path
          d="M10 25.1087C9.74488 25.3856 9.43589 25.6075 9.09198 25.7608C8.74807 25.914 8.37648 25.9954 8 26C6.3425 26 5 24.4325 5 22.5C5 20.5675 6.3425 19 8 19C8.37648 19.0046 8.74807 19.086 9.09198 19.2392C9.43589 19.3925 9.74488 19.6144 10 19.8913"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.4874 19.2002C17.4874 19.2002 13.8087 18.2277 13.5124 20.5752C13.2162 22.9227 18.3162 21.8402 17.9849 24.4152C17.6762 26.8102 14.0124 25.7902 14.0124 25.7902"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21 19L23.5 26L26 19"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1094_13216">
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
  const [processingScreen, setProcessingScreen] = useState(false);

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
  // const handleFileChange = (event) => {
  //   const selectedFiles = Array.from(event.target.files);
  //   // setUploadedFiles(selectedFiles);
  //   setUploadedFiles((prev) => [...prev, ...selectedFiles]);
  // };
  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);

    // Filter out files that are already uploaded
    const newFiles = selectedFiles.filter(
      (file) =>
        !uploadedFiles.some(
          (uploadedFile) =>
            uploadedFile.name === file.name && uploadedFile.size === file.size
        )
    );

    // Add new files to the uploadedFiles state
    setUploadedFiles((prev) => [...prev, ...newFiles]);
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

  const handleRemoveFile = (fileName) => {
    setUploadedFiles((prevFiles) =>
      prevFiles.filter((file) => file.name !== fileName)
    );
  };

  const submitDocuments = async () => {
    setProcessingScreen(true); // Start the loading animation

    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 4500)); // Adjust the duration as necessary
    } catch (error) {
      // Handle error
      console.error("API Error:", error);
    } finally {
      setTimeout(() => {
        setProcessingScreen(false); // Stop the loading animation after a brief delay
      }, 500); // Ensure progress bar finishes before hiding the popup
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={() => {
          onClose();
          setUploadedFiles([]);
          setShowUploadedFile(false);
        }}
        sx={{
          ".MuiPaper-root": {
            borderRadius: "20px",
            maxHeight: "700px",
            padding: 0,
            maxWidth: "600px",
            width: "100%",
          },
        }}
      >
        <DialogContent style={{ width: "100%" }}>
          <Box sx={{ padding: 4, position: "relative" }}>
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

            {!showUploadedFile || uploadedFiles.length <= 0 ? (
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
                    Environmental Monitoring and Performance Report,
                    Environmental Assessment Report, Annual Report, Carbon
                    Footprint Report, Log(fuel electricity water)
                  </b>
                </Typography>
                <Box
                  sx={{
                    padding: "1px",
                    borderRadius: "8px",
                    backgroundImage: ` url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23C5D2CBFF' stroke-width='4' stroke-dasharray='1%2c 10' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
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
                      width={128}
                      height={48}
                      style={{ margin: "auto" }}
                    />
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{
                        fontSize: "16px",
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
                        fontSize: "16px",
                        fontWeight: "500",
                        padding: 1,
                        maxWidth: "238px",
                        width: "100%",
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
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      maxHeight: "400px",
                      minHeight: "150px",
                      overflowY: "auto",
                      paddingRight: "1rem",
                    }}
                  >
                    {uploadedFiles.map((file) => {
                      return (
                        // <Box
                        //   key={file.name}
                        //   sx={{
                        //     display: "flex",
                        //     flexDirection: "row",
                        //     width: "100%",
                        //     height: "60px",
                        //     backgroundColor: "#E6F5EE",
                        //     alignItems: "center",
                        //     justifyContent: "space-between",
                        //     gap: "1rem",
                        //     padding: ".5rem",
                        //     borderRadius: "8px",
                        //     border: "1px solid #DBDBDB",
                        //     mb: ".5rem",
                        //   }}
                        // >
                        //   <Box
                        //     sx={{
                        //       display: "flex",
                        //       alignItems: "center",
                        //       gap: "1rem",
                        //     }}
                        //   >
                        //     {file.type === "text/csv" && fileIcons.csv}
                        //     {file.type === "application/pdf" && fileIcons.pdf}
                        //     {file.type === "application/vnd.ms-excel" ||
                        //       (file.type ===
                        //         "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" &&
                        //         fileIcons.xls)}
                        //     <Typography
                        //       variant="h6"
                        //       align="center"
                        //       sx={{
                        //         fontSize: "12px",
                        //         fontWeight: "400",
                        //         fontFamily: "Inter",
                        //         color: "#000",
                        //         whiteSpace: "nowrap", // Prevents text from wrapping to the next line
                        //         overflow: "hidden", // Hides the overflow
                        //         textOverflow: "ellipsis", // Adds ellipsis (...) at the end
                        //         maxWidth: "100%",
                        //       }}
                        //     >
                        //       {file.name}
                        //     </Typography>
                        //   </Box>
                        //   <svg
                        //     onClick={() => handleRemoveFile(file.name)}
                        //     style={{ cursor: "pointer" }}
                        //     xmlns="http://www.w3.org/2000/svg"
                        //     width="22"
                        //     height="22"
                        //     viewBox="0 0 30 30"
                        //     fill="none"
                        //   >
                        //     <path
                        //       d="M10.8828 20.422L15.2943 16.0105L19.7058 20.422L20.5734 19.5544L16.1619 15.1429L20.5734 10.7315L19.7058 9.86388L15.2943 14.2754L10.8828 9.86388L10.0152 10.7315L14.4267 15.1429L10.0152 19.5544L10.8828 20.422ZM15.298 26.1716C13.7736 26.1716 12.3399 25.8824 10.9968 25.304C9.65457 24.7248 8.48675 23.9389 7.49335 22.9464C6.49996 21.9538 5.71365 20.7872 5.13444 19.4466C4.55523 18.106 4.26563 16.6727 4.26562 15.1466C4.26562 13.6206 4.55482 12.1869 5.13322 10.8454C5.71161 9.50402 6.4975 8.3362 7.4909 7.34199C8.4843 6.34777 9.65089 5.56147 10.9907 4.98308C12.3305 4.40468 13.7638 4.11508 15.2906 4.11426C16.8175 4.11344 18.2512 4.40264 19.5918 4.98185C20.9324 5.56106 22.1002 6.34696 23.0953 7.33954C24.0903 8.33212 24.8766 9.49871 25.4542 10.8393C26.0318 12.1799 26.3214 13.6132 26.323 15.1393C26.3246 16.6653 26.0354 18.099 25.4554 19.4405C24.8754 20.7819 24.0895 21.9497 23.0977 22.9439C22.106 23.9381 20.9394 24.7244 19.598 25.3028C18.2565 25.8812 16.8232 26.1708 15.298 26.1716ZM15.2943 24.9462C18.0311 24.9462 20.3491 23.9965 22.2485 22.0971C24.1479 20.1978 25.0976 17.8797 25.0976 15.1429C25.0976 12.4062 24.1479 10.0881 22.2485 8.18875C20.3491 6.28936 18.0311 5.33967 15.2943 5.33967C12.5576 5.33967 10.2395 6.28936 8.34011 8.18875C6.44073 10.0881 5.49103 12.4062 5.49103 15.1429C5.49103 17.8797 6.44073 20.1978 8.34011 22.0971C10.2395 23.9965 12.5576 24.9462 15.2943 24.9462Z"
                        //       fill="#FF3A3A"
                        //     />
                        //   </svg>
                        // </Box>

                        <Box
                          key={file.name}
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            height: "60px",
                            backgroundColor: "#E6F5EE",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "1rem",
                            padding: ".5rem",
                            borderRadius: "8px",
                            border: "1px solid #DBDBDB",
                            mb: ".5rem",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: "1rem",
                              flexGrow: 1, // Allows the inner Box to take available space
                            }}
                          >
                            {file.type === "text/csv" && fileIcons.csv}
                            {file.type === "application/pdf" && fileIcons.pdf}
                            {(file.type === "application/vnd.ms-excel" ||
                              file.type ===
                                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") &&
                              fileIcons.xls}
                            <Typography
                              variant="h6"
                              align="center"
                              sx={{
                                fontSize: "12px",
                                fontWeight: "400",
                                fontFamily: "Inter",
                                color: "#000",
                                whiteSpace: "nowrap", // Prevents text from wrapping to the next line
                                overflow: "hidden", // Hides the overflow
                                textOverflow: "ellipsis", // Adds ellipsis (...) at the end
                                maxWidth: "300px", // Limits the width of the text
                              }}
                            >
                              {file.name}
                            </Typography>
                          </Box>
                          <svg
                            onClick={() => handleRemoveFile(file.name)}
                            style={{ cursor: "pointer" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 30 30"
                            fill="none"
                          >
                            <path
                              d="M10.8828 20.422L15.2943 16.0105L19.7058 20.422L20.5734 19.5544L16.1619 15.1429L20.5734 10.7315L19.7058 9.86388L15.2943 14.2754L10.8828 9.86388L10.0152 10.7315L14.4267 15.1429L10.0152 19.5544L10.8828 20.422ZM15.298 26.1716C13.7736 26.1716 12.3399 25.8824 10.9968 25.304C9.65457 24.7248 8.48675 23.9389 7.49335 22.9464C6.49996 21.9538 5.71365 20.7872 5.13444 19.4466C4.55523 18.106 4.26563 16.6727 4.26562 15.1466C4.26562 13.6206 4.55482 12.1869 5.13322 10.8454C5.71161 9.50402 6.4975 8.3362 7.4909 7.34199C8.4843 6.34777 9.65089 5.56147 10.9907 4.98308C12.3305 4.40468 13.7638 4.11508 15.2906 4.11426C16.8175 4.11344 18.2512 4.40264 19.5918 4.98185C20.9324 5.56106 22.1002 6.34696 23.0953 7.33954C24.0903 8.33212 24.8766 9.49871 25.4542 10.8393C26.0318 12.1799 26.3214 13.6132 26.323 15.1393C26.3246 16.6653 26.0354 18.099 25.4554 19.4405C24.8754 20.7819 24.0895 21.9497 23.0977 22.9439C22.106 23.9381 20.9394 24.7244 19.598 25.3028C18.2565 25.8812 16.8232 26.1708 15.298 26.1716ZM15.2943 24.9462C18.0311 24.9462 20.3491 23.9965 22.2485 22.0971C24.1479 20.1978 25.0976 17.8797 25.0976 15.1429C25.0976 12.4062 24.1479 10.0881 22.2485 8.18875C20.3491 6.28936 18.0311 5.33967 15.2943 5.33967C12.5576 5.33967 10.2395 6.28936 8.34011 8.18875C6.44073 10.0881 5.49103 12.4062 5.49103 15.1429C5.49103 17.8797 6.44073 20.1978 8.34011 22.0971C10.2395 23.9965 12.5576 24.9462 15.2943 24.9462Z"
                              fill="#FF3A3A"
                            />
                          </svg>
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
                    onClick={() => setShowUploadedFile(false)}
                    // onClick={() => console.log("hi")}
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
                    onClick={() => {
                      // setProcessingScreen(true);
                      submitDocuments(); // SUBMITTING DOCUMENTS
                      onClose();
                    }}
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
      <UploadingPopup
        open={processingScreen}
        onClose={() => {
          setProcessingScreen(false);
          setUploadedFiles([]);
          setShowUploadedFile(false);
          onClose();
        }}
      />
    </>
  );
}

export default UploadFilesModal;
