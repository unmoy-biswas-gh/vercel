import {
  Box,
  Button,
  Dialog,
  DialogContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CustomField from "../common/CustomField";
import CustomSelect from "../common/CustomSelect";
import bannerImg from "../../assets/images/banner.png";
import UploadFilesModal from "../common/UploadModal";
import BookCall from "./BookCall";
import { useNavigate } from "react-router-dom";

const yearOptions = [
  { value: 2022, name: "2022" },
  { value: 2021, name: "2021" },
  { value: 2020, name: "2020" },
  { value: 2019, name: "2019" },
];
const reportOptions = [
  { value: "Q1", name: "Q1" },
  { value: "Q2", name: "Q2" },
  { value: "Q3", name: "Q3" },
  { value: "Q4", name: "Q4" },
];
const unitOptions = [
  { value: "Liter", name: "Liter" },
  { value: "Meter", name: "Meter" },
  { value: "Kilogram", name: "Kilogram" },
];
// const matarialOptions = [
//   { value: "Liter", name: "Liter" },
//   { value: "Meter", name: "Meter" },
//   { value: "Kilogram", name: "Kilogram" },
// ];

const mdInputStyle = {
  marginRight: "24px",
  width: "15rem",
};

const styles = {
  fontSize: "13px",
  // borderColor: "#E0E0E0",
  "& .MuiOutlinedInput-root": {
    borderRadius: "5px",
    borderColor: "#E0E0E0",
    "& .MuiOutlinedInput-root.Mui-focused fieldset": {
      borderColor: "#C5D2CB", // Conditional border color
    },
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "rgba(0, 0, 0, 0.60)",
    fontFamily: "Inter",
  },
  "& .MuiFormHelperText-root": {
    color: "red", // Custom helper text color
  },
  "& .MuiInputBase-input": {
    fontFamily: "Inter",
    borderColor: "#EEEEEE",
    maxHeight: "40px",
    fontSize: "14px",
    padding: "11.5px 12px", // Adjust the padding to reduce the size
  },
  "& .MuiInputLabel-root": {
    fontFamily: "Inter",
    fontSize: "13px",
    transform: "translate(12px, 12px) scale(1)", // Adjust the label position
    color: "#787878",
  },
  "& .MuiInputLabel-shrink": {
    transform: "translate(15px, -7px) scale(0.8)", // Adjust the label position when it shrinks
  },
};

const selectStyles = {
  "& .MuiInputBase-input": {
    fontFamily: "Inter",
    borderColor: "#EEEEEE",
    maxHeight: "40px",
    padding: "10px 12px", // Adjust the padding to reduce the size
    fontSize: "14px",
  },

  "& .MuiInputLabel-root": {
    fontSize: "13px",
    color: "#787878",
  },
};

function CreateReport({ closeView }) {
  const [showUpload, setShowUpload] = useState(false);
  const [showUploadDoc, setShowUploadDoc] = useState(false);
  const [reportName, setReportName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [licenseNumb, setLicenseNumb] = useState("");
  const [siteArea, setSiteArea] = useState("");
  const [unitProd, setUnitProd] = useState("");
  const [rawMatarial, setRawMatarial] = useState("");
  const [bookCall, setBookCall] = useState(false);
  const [formData, setFormData] = useState({
    reportName: "",
    reportSegment: "",
    year: "",
    companyName: "",
    licenseNumber: "",
    area: "",
    unitsProduced: "",
    unit: "",
    rawMaterial: "",
    rawMaterialUnit: "",
  });

  const navigate = useNavigate();

  const handleNavigateToAddDataPoints = () => {
    navigate("/add-data-points", {
      state: {
        generationMethod: "manual",
      },
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const areAllFieldsFilled = () => {
    return Object.values(formData).every((field) => {
      if (typeof field === "string") {
        return field.trim() !== "";
      }
      return field !== ""; // For non-string values, just check if they are not empty
    });
  };

  return (
    // <Box
    //   sx={{
    //     backgroundColor: "#FAFAFA",
    //   }}
    // >
    //   <Typography
    //     variant="h6"
    //     sx={{
    //       cursor: "pointer",
    //       fontSize: "18px",
    //       fontWeight: "500",
    //       fontFamily: "Inter",
    //       padding: "12px 40px",
    //     }}
    //     onClick={closeView}
    //   >
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="15"
    //       height="14"
    //       viewBox="0 0 17 16"
    //       fill="none"
    //       style={{ marginRight: "0.5rem" }}
    //     >
    //       <path
    //         d="M14.6572 7.32115H4.04378L10.3962 1.89258C10.4978 1.80508 10.4361 1.64258 10.3019 1.64258H8.69655C8.62581 1.64258 8.55869 1.66758 8.50609 1.71222L1.65118 7.56758C1.5884 7.62115 1.53805 7.68739 1.50354 7.76179C1.46903 7.8362 1.45117 7.91704 1.45117 7.99883C1.45117 8.08062 1.46903 8.16146 1.50354 8.23587C1.53805 8.31027 1.5884 8.3765 1.65118 8.43008L8.54599 14.3211C8.5732 14.3444 8.60585 14.3569 8.64032 14.3569H10.3001C10.4343 14.3569 10.496 14.1926 10.3944 14.1069L4.04378 8.67829H14.6572C14.737 8.67829 14.8023 8.61401 14.8023 8.53544V7.46401C14.8023 7.38544 14.737 7.32115 14.6572 7.32115Z"
    //         fill="black"
    //         fill-opacity="0.85"
    //       />
    //     </svg>{" "}
    //     Create Report
    //   </Typography>
    //   <Paper
    //     sx={{
    //       boxShadow: "none",
    //       padding: "1rem",
    //       borderRadius: "10px",
    //       backgroundColor: "#fafafa",
    //       paddingInline: "25px",
    //       // position: "relative",
    //       // mt: "16px",
    //     }}
    //   >
    //     <Box
    //       sx={{
    //         paddingInline: "20px",
    //         backgroundColor: "white",
    //       }}
    //     >
    //       <Typography
    //         sx={{
    //           fontSize: { lg: "16px" },
    //           fontWeight: "500",
    //           fontFamily: "Inter",
    //           lineHeight: { lg: 3 },
    //         }}
    //       >
    //         Add name and select year
    //       </Typography>
    //       <Box sx={{ mt: "10px" }}>
    //         <CustomField
    //           label={"Report Name"}
    //           value={reportName}
    //           onChange={(e) => setReportName(e.target.value)}
    //           sx={{ marginRight: 3, maxWidth: "400px", width: "100%" }}
    //         />
    //         <CustomSelect
    //           options={reportOptions}
    //           label={"Select reporting Segment"}
    //           value={""}
    //           // onChange={() => {}}
    //           sx={{ marginRight: 3, width: "15rem", marginBottom: "15px" }}
    //         />
    //         <CustomSelect
    //           options={yearOptions}
    //           label={"Year"}
    //           value={""}
    //           // onChange={() => {}}
    //           sx={{ marginRight: 3, width: "6rem", marginBottom: "15px" }}
    //         />
    //       </Box>
    //       <Typography
    //         sx={{
    //           fontSize: { lg: "16px" },
    //           fontWeight: "500",
    //           fontFamily: "Inter",
    //           lineHeight: { lg: 3 },
    //         }}
    //       >
    //         Please enter your company's details
    //       </Typography>
    //       <Box sx={{ display: "flex", mt: "10px" }}>
    //         <Box
    //           sx={{
    //             maxWidth: "80%",
    //           }}
    //         >
    //           <CustomField
    //             label={"Company Name"}
    //             value={companyName}
    //             onChange={(e) => setCompanyName(e.target.value)}
    //             sx={mdInputStyle}
    //           />
    //           <CustomField
    //             label={"License Number"}
    //             value={licenseNumb}
    //             onChange={(e) => setLicenseNumb(e.target.value)}
    //             sx={mdInputStyle}
    //           />
    //           <CustomField
    //             label={"Total site area in m2"}
    //             value={siteArea}
    //             onChange={(e) => setSiteArea(e.target.value)}
    //             sx={mdInputStyle}
    //           />
    //           <CustomField
    //             label={"Units Produced in Reporting"}
    //             value={unitProd}
    //             onChange={(e) => setUnitProd(e.target.value)}
    //             sx={mdInputStyle}
    //           />
    //           <CustomSelect
    //             options={unitOptions}
    //             label={"Unit"}
    //             value={""}
    //             // onChange={() => {}}
    //             sx={{ ...mdInputStyle, marginBottom: "15px" }}
    //           />
    //           <br />
    //           <CustomField
    //             label={"Raw material Consumption"}
    //             value={rawMatarial}
    //             onChange={(e) => setRawMatarial(e.target.value)}
    //             sx={mdInputStyle}
    //           />
    //           <CustomSelect
    //             options={unitOptions}
    //             label={"Unit"}
    //             value={""}
    //             // onChange={() => {}}
    //             sx={{ ...mdInputStyle, marginBottom: "15px" }}
    //           />
    //         </Box>

    //         <div
    //           style={{
    //             flex: 1,
    //             display: "flex",
    //             justifyContent: "flex-end",
    //             alignItems: "end",
    //           }}
    //         >
    //           <Button
    //             style={{
    //               width: "max-content",
    //               padding: "6px 28px",
    //               borderRadius: 6,
    //               backgroundImage:
    //                 "linear-gradient(102deg, #369D9C 0%, #28814D 100%)",
    //               fontWeight: 400,
    //               fontSize: "13px",
    //               fontFamily: "Inter",
    //               color: "#FFF",
    //               border: "1px solid #DDD",
    //               letterSpacing: "0.5px",
    //               cursor: "pointer",
    //               textTransform: "none",
    //               float: "right",
    //             }}
    //             onClick={() => setShowUpload(true)}
    //           >
    //             Next
    //           </Button>
    //         </div>
    //       </Box>
    //     </Box>
    //   </Paper>
    //   <Box
    //     sx={{
    //       width: "100%",
    //       mt: "3rem",
    //       paddingInline: "25px",
    //       height: "170px",
    //       borderRadius: "8px",
    //       background: "linear-gradient(271deg, #FAFAFA -1.18%, #F4FFFF 52.58%)",
    //       display: "flex",
    //       justifyContent: "flex-start",
    //       alignItems: "center",
    //     }}
    //   >
    //     <Box
    //       sx={{
    //         height: "100%",
    //         background: `url(${bannerImg})`,
    //         backgroundSize: "100% 100%",
    //         backgroundRepeat: "no-repeat",
    //         width: "270px",
    //       }}
    //     ></Box>
    //     <Box
    //       sx={{
    //         marginLeft: "20%",
    //       }}
    //     >
    //       <Typography sx={{ fontSize: "13px", fontFamily: "Inter" }}>
    //         Need Help with Your Sustainability Report?
    //       </Typography>
    //       <Typography
    //         sx={{ fontSize: "13px", fontWeight: "600", fontFamily: "Inter" }}
    //       >
    //         Book a call with a Senior Consultant.
    //       </Typography>
    //       <Button
    //         onClick={() => setBookCall(true)}
    //         variant="outlined"
    //         sx={{
    //           // color: " #005468",
    //           fontSize: "11px",
    //           fontWeight: "500",
    //           fontFamily: "Inter",
    //           borderRadius: "6px",
    //           border: "1px solid var(--G2, #369D9C)",
    //           textTransform: "none",
    //           marginTop: "1rem",
    //           background: "linear-gradient(102deg, #369D9C 0%, #28814D 100%)",
    //           backgroundClip: "text",
    //           "-webkitBackgroundClip": "text",
    //           "-webkitTextFillColor": "transparent",
    //           "&:hover": {
    //             border: "1px solid var(--G2, #369D9C)",
    //             color: " #005468",
    //             backgroundColor: "green",
    //           },
    //         }}
    //       >
    //         {" "}
    //         Connect With an Expert
    //       </Button>
    //     </Box>
    //   </Box>
    //   <Dialog
    //     open={showUpload}
    //     onClose={() => setShowUpload(false)}
    //     sx={{
    //       ".MuiBackdrop-root": {
    //         background: "rgba(0, 0, 0, 0.80)",
    //         backdropFilter: "blur(6px)",
    //       },
    //       ".MuiPaper-root": {
    //         borderRadius: "15px",
    //       },
    //     }}
    //   >
    //     <DialogContent
    //       style={{ width: "550px" }}
    //       sx={{
    //         padding: 0,
    //       }}
    //     >
    //       <Box
    //         style={{
    //           // textAlign: "center",
    //           // padding: "1rem",
    //           borderRadius: "10px",
    //           backgroundColor: "#FFF",
    //           cursor: "pointer",
    //           padding: "56px",
    //         }}
    //       >
    //         <Typography
    //           variant="h6"
    //           sx={{ fontWeight: "400", fontFamily: "Inter", mb: "32px" }}
    //         >
    //           Choose how you want to generate the report?
    //         </Typography>
    //         <Box
    //           onClick={() => {
    //             setShowUploadDoc(true);
    //             setShowUpload(false);
    //           }}
    //           sx={{
    //             borderRadius: "10.979px",
    //             border: "1.372px solid #DBDBDB",
    //             backgroundColor: "#FDFDFD",
    //             height: "90px",
    //             padding: "1rem",
    //             display: "flex",
    //             flexDirection: "row",
    //             gap: "2rem",
    //             // mt: ".5rem",
    //             cursor: "pointer",
    //             ":hover": {
    //               backgroundColor: "#F6FFF7",
    //             },
    //           }}
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="55"
    //             height="55"
    //             viewBox="0 0 80 81"
    //             fill="none"
    //           >
    //             <rect
    //               y="0.938477"
    //               width="80"
    //               height="80"
    //               rx="40"
    //               fill="url(#paint0_linear_932_9567)"
    //             />
    //             <path
    //               d="M52.2286 36.2336C52.2616 36.2411 52.2946 36.2486 52.3275 36.2561C52.2946 36.2636 52.2616 36.2711 52.2286 36.2786C48.7367 37.0783 44.4217 38.5143 41.833 41.103C39.2442 43.6917 37.8082 48.0067 37.0086 51.4986C37.0011 51.5317 36.9935 51.5646 36.9861 51.5975C36.9786 51.5646 36.9711 51.5317 36.9636 51.4986C36.1639 48.0067 34.7279 43.6917 32.1392 41.103C29.5505 38.5143 25.2354 37.0783 21.7436 36.2786C21.7105 36.2711 21.6776 36.2636 21.6447 36.2561C21.6776 36.2486 21.7105 36.2411 21.7436 36.2336C25.2354 35.4339 29.5505 33.998 32.1392 31.4092C34.7279 28.8205 36.1639 24.5055 36.9636 21.0136C36.9711 20.9806 36.9786 20.9476 36.9861 20.9147C36.9935 20.9476 37.0011 20.9806 37.0086 21.0136C37.8082 24.5055 39.2442 28.8205 41.833 31.4092C44.4217 33.998 48.7367 35.4339 52.2286 36.2336Z"
    //               stroke="white"
    //               stroke-width="2"
    //             />
    //             <path
    //               d="M53.7878 48.5468C54.8612 49.6202 56.426 50.3295 57.9184 50.8019C56.426 51.2742 54.8612 51.9835 53.7878 53.0569C52.7145 54.1302 52.0051 55.6951 51.5328 57.1875C51.0605 55.6951 50.3511 54.1302 49.2778 53.0569C48.2045 51.9835 46.6396 51.2742 45.1472 50.8019C46.6396 50.3295 48.2045 49.6202 49.2778 48.5468C50.3511 47.4735 51.0605 45.9087 51.5328 44.4162C52.0051 45.9087 52.7145 47.4735 53.7878 48.5468Z"
    //               stroke="white"
    //               stroke-width="2"
    //             />
    //             <defs>
    //               <linearGradient
    //                 id="paint0_linear_932_9567"
    //                 x1="0"
    //                 y1="0.938477"
    //                 x2="92.6224"
    //                 y2="20.1808"
    //                 gradientUnits="userSpaceOnUse"
    //               >
    //                 <stop stop-color="#369D9C" />
    //                 <stop offset="1" stop-color="#28814D" />
    //               </linearGradient>
    //             </defs>
    //           </svg>
    //           <Box>
    //             <Typography
    //               variant="h6"
    //               sx={{
    //                 fontWeight: "500",
    //                 fontFamily: "Inter",
    //                 display: "flex",
    //                 alignItems: "center",
    //                 gap: "5px",
    //                 fontSize: "18px",
    //               }}
    //             >
    //               Enter data using
    //               <Typography
    //                 variant="h6"
    //                 sx={{
    //                   fontWeight: "500",
    //                   fontFamily: "Inter",
    //                   fontSize: "18px",
    //                   background:
    //                     "linear-gradient(102deg, #369D9C 0%, #28814D 100%)",
    //                   backgroundClip: "text",
    //                   "-webkitBackgroundClip": "text",
    //                   "-webkitTextFillColor": "transparent",
    //                 }}
    //               >
    //                 GE3S AI
    //               </Typography>
    //             </Typography>
    //             <Typography
    //               variant="h6"
    //               sx={{
    //                 fontSize: "13px",
    //                 fontWeight: "400",
    //                 fontFamily: "Inter",
    //                 color: "#9B9B9B",
    //               }}
    //             >
    //               Let our AI assist you in generating report
    //             </Typography>
    //           </Box>
    //         </Box>
    //         <Box
    //           onClick={handleNavigateToAddDataPoints}
    //           sx={{
    //             borderRadius: "10.979px",
    //             border: "1.372px solid #DBDBDB",
    //             backgroundColor: "#FDFDFD",
    //             height: "90px",
    //             padding: "1rem",
    //             display: "flex",
    //             flexDirection: "row",
    //             gap: "2rem",
    //             mt: "21px",
    //             cursor: "pointer",

    //             ":hover": {
    //               backgroundColor: "#F6FFF7",
    //             },
    //           }}
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="55"
    //             height="55"
    //             viewBox="0 0 80 81"
    //             fill="none"
    //           >
    //             <rect
    //               y="0.897461"
    //               width="80"
    //               height="80"
    //               rx="40"
    //               fill="url(#paint0_linear_932_9574)"
    //             />
    //             <path
    //               d="M40 33.397C40 31.8057 40.6321 30.2795 41.7574 29.1543C42.8826 28.0291 44.4087 27.397 46 27.397H59.5V54.397H46C44.4087 54.397 42.8826 55.0291 41.7574 56.1543C40.6321 57.2796 40 58.8057 40 60.397"
    //               stroke="white"
    //               stroke-width="2"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //             />
    //             <path
    //               d="M20.5 54.397H34C35.5913 54.397 37.1174 55.0291 38.2426 56.1543C39.3679 57.2796 40 58.8057 40 60.397V33.397C40 31.8057 39.3679 30.2795 38.2426 29.1543C37.1174 28.0291 35.5913 27.397 34 27.397H20.5V54.397Z"
    //               stroke="white"
    //               stroke-width="2"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //             />
    //             <path
    //               d="M46.002 34.8975H53.502"
    //               stroke="white"
    //               stroke-width="2"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //             />
    //             <path
    //               d="M46.002 40.8975H53.502"
    //               stroke="white"
    //               stroke-width="2"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //             />
    //             <path
    //               d="M46.002 46.8979H53.502"
    //               stroke="white"
    //               stroke-width="2"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //             />
    //             <defs>
    //               <linearGradient
    //                 id="paint0_linear_932_9574"
    //                 x1="0"
    //                 y1="40.0641"
    //                 x2="80"
    //                 y2="40.0641"
    //                 gradientUnits="userSpaceOnUse"
    //               >
    //                 <stop stop-color="#0DC06D" />
    //                 <stop offset="1" stop-color="#7AFCC0" />
    //               </linearGradient>
    //             </defs>
    //           </svg>
    //           <Box>
    //             <Typography
    //               variant="h6"
    //               sx={{
    //                 fontWeight: "500",
    //                 fontFamily: "Inter",
    //                 display: "flex",
    //                 alignItems: "center",
    //                 fontSize: "18px",
    //                 gap: "5px",
    //               }}
    //             >
    //               Enter Data Manually
    //             </Typography>
    //             <Typography
    //               variant="h6"
    //               sx={{
    //                 fontSize: "13px",
    //                 fontWeight: "400",
    //                 fontFamily: "Inter",
    //                 color: "#9B9B9B",
    //               }}
    //             >
    //               Enter your data directly using our manual upload form
    //             </Typography>
    //           </Box>
    //         </Box>
    //       </Box>
    //     </DialogContent>
    //   </Dialog>
    //   <UploadFilesModal
    //     open={showUploadDoc}
    //     onClose={() => {
    //       setShowUpload(false);
    //       setShowUploadDoc(false);
    //     }}
    //   />
    //   <BookCall open={bookCall} onClose={() => setBookCall(false)} />
    // </Box>

    <Box sx={{ padding: "0px 24px", backgroundColor: "#fafafa" }}>
      <Typography
        variant="h6"
        sx={{
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "500",
          fontFamily: "Inter",
          // marginBottom: "1rem",
          padding: "8px 0px 5px 0px",
        }}
        onClick={closeView}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 17 16"
          fill="none"
          style={{ marginRight: "0.5rem" }}
        >
          <path
            d="M14.6572 7.32115H4.04378L10.3962 1.89258C10.4978 1.80508 10.4361 1.64258 10.3019 1.64258H8.69655C8.62581 1.64258 8.55869 1.66758 8.50609 1.71222L1.65118 7.56758C1.5884 7.62115 1.53805 7.68739 1.50354 7.76179C1.46903 7.8362 1.45117 7.91704 1.45117 7.99883C1.45117 8.08062 1.46903 8.16146 1.50354 8.23587C1.53805 8.31027 1.5884 8.3765 1.65118 8.43008L8.54599 14.3211C8.5732 14.3444 8.60585 14.3569 8.64032 14.3569H10.3001C10.4343 14.3569 10.496 14.1926 10.3944 14.1069L4.04378 8.67829H14.6572C14.737 8.67829 14.8023 8.61401 14.8023 8.53544V7.46401C14.8023 7.38544 14.737 7.32115 14.6572 7.32115Z"
            fill="black"
            fill-opacity="0.85"
          />
        </svg>{" "}
        Create Report
      </Typography>
      <Box
        sx={{
          padding: "16px",
          backgroundColor: "white",
          // border: "1px solid black",
          marginBottom: "15px",
          borderRadius: "1rem",
        }}
      >
        <Typography
          sx={{
            fontSize: { lg: "14px" },
            fontWeight: "500",
            fontFamily: "Inter",
            marginBottom: "12px",
            // lineHeight: { lg: 3 },
          }}
        >
          Add name and select year
        </Typography>

        <form>
          <Grid container spacing={2.5} sx={{ marginBottom: "16px" }}>
            <Grid item xs={3.5}>
              <FormControl fullWidth>
                <TextField
                  fullWidth
                  sx={styles}
                  name="reportName"
                  label="Report Name"
                  value={formData.reportName}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>

            <Grid item xs={2}>
              <FormControl fullWidth size="small">
                <InputLabel
                  sx={{ fontSize: "13px", marginTop: "2px" }}
                  id="reportSegment"
                >
                  Report Segment
                </InputLabel>
                <Select
                  fullWidth
                  labelId="reportSegment"
                  id="reportSegment"
                  value={formData.reportSegment}
                  label="Report Segment"
                  name="reportSegment"
                  onChange={handleChange}
                  sx={selectStyles}
                >
                  <MenuItem value={"2024 Quarter 1"}>2024 Quarter 1</MenuItem>
                  <MenuItem value={"2024 Quarter 2"}>2024 Quarter 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={1.3}>
              <FormControl fullWidth size="small">
                <InputLabel
                  sx={{ fontSize: "13px", marginTop: "2px" }}
                  id="year"
                >
                  Year
                </InputLabel>
                <Select
                  fullWidth
                  labelId="year"
                  id="year"
                  value={formData.year}
                  label="Year"
                  name="year"
                  onChange={handleChange}
                  sx={selectStyles}
                >
                  <MenuItem value={2024}>2024</MenuItem>
                  <MenuItem value={2024}>2023</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Typography
            sx={{
              fontSize: { lg: "14px" },
              fontWeight: "500",
              fontFamily: "Inter",
              marginBottom: "12px",
              // lineHeight: { lg: 3 },
            }}
          >
            Please enter your company's details
          </Typography>

          <Grid container spacing={2.5} sx={{ mb: "12px" }}>
            <Grid item xs={2.26}>
              <FormControl fullWidth>
                <TextField
                  fullWidth
                  sx={styles}
                  name="companyName"
                  label="Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={2.26}>
              <FormControl fullWidth>
                <TextField
                  fullWidth
                  sx={styles}
                  name="licenseNumber"
                  label="License Number"
                  value={formData.licenseNumber}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={2.26}>
              <FormControl fullWidth>
                <TextField
                  fullWidth
                  sx={styles}
                  name="area"
                  label="Total site are in m2"
                  value={formData.area}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={2.5} sx={{ mb: "12px" }}>
            <Grid item xs={2.26}>
              <FormControl fullWidth>
                <TextField
                  fullWidth
                  sx={styles}
                  name="unitsProduced"
                  label="Units Produced in Reporting"
                  value={formData.unitsProduced}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={2.26}>
              <FormControl fullWidth size="small">
                <InputLabel
                  sx={{ fontSize: "13px", marginTop: "2px" }}
                  id="unit"
                >
                  Unit
                </InputLabel>
                <Select
                  fullWidth
                  labelId="unit"
                  id="unit"
                  value={formData.unit}
                  label="Unit"
                  name="unit"
                  onChange={handleChange}
                  sx={selectStyles}
                >
                  <MenuItem value={"Litre"}>Litre</MenuItem>
                  <MenuItem value={"Kilo"}>Kilogram</MenuItem>
                  {/* <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={2.5}>
            <Grid item xs={2.26}>
              <FormControl fullWidth>
                <TextField
                  fullWidth
                  sx={styles}
                  name="rawMaterial"
                  label="Raw material consumption"
                  value={formData.rawMaterial}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={2.26}>
              <FormControl fullWidth size="small">
                <InputLabel
                  sx={{ fontSize: "13px", marginTop: "2px" }}
                  id="rawMaterialUnit"
                >
                  Unit
                </InputLabel>
                <Select
                  fullWidth
                  labelId="rawMaterialUnit"
                  id="rawMaterialUnit"
                  value={formData.rawMaterialUnit}
                  label="Unit"
                  name="rawMaterialUnit"
                  onChange={handleChange}
                  sx={selectStyles}
                >
                  <MenuItem value={"Litre"}>Litre</MenuItem>
                  <MenuItem value={"Kilo"}>Kilogram</MenuItem>
                  {/* <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6.48}></Grid>
            <Grid item xs={1}></Grid>
          </Grid>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Button
              style={{
                width: "max-content",
                padding: "6px 28px",
                borderRadius: 6,
                backgroundImage: areAllFieldsFilled()
                  ? "linear-gradient(102deg, #369D9C 0%, #28814D 100%)"
                  : "none",
                backgroundColor: areAllFieldsFilled()
                  ? "transparent"
                  : "#E8E8E8",
                fontWeight: 400,
                fontSize: "13px",
                fontFamily: "Inter",
                color: areAllFieldsFilled() ? "#FFF" : "#B0B0B0",
                border: "1px solid #DDD",
                letterSpacing: "0.5px",
                cursor: areAllFieldsFilled() ? "pointer" : "not-allowed",
                textTransform: "none",
                // float: "right",
                marginTop: "1rem",
              }}
              onClick={() => areAllFieldsFilled() && setShowUpload(true)}
              disabled={!areAllFieldsFilled()} // Disable button if not all fields are filled
            >
              Next
            </Button>
          </div>
        </form>
      </Box>

      <Box
        sx={{
          padding: "0px 16px",
          backgroundColor: "white",
          // border: "1px solid black",
          // marginBottom: "25px",
          display: "flex",
        }}
      >
        <Box
          sx={{
            height: "170px",
            background: `url(${bannerImg})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            width: "270px",
          }}
        ></Box>
        <Box
          sx={{
            marginLeft: "20%",
            display: "flex",
            // flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <Typography sx={{ fontSize: "13px", fontFamily: "Inter" }}>
              Need Help with Your Sustainability Report?
            </Typography>
            <Typography
              sx={{ fontSize: "13px", fontWeight: "600", fontFamily: "Inter" }}
            >
              Book a call with a Senior Consultant.
            </Typography>
            <Button
              onClick={() => setBookCall(true)}
              variant="outlined"
              sx={{
                padding: "0.35rem 0.6rem 0.35rem 0.6rem",
                lineHeight: "1.5rem",
                fontSize: "0.7rem",
                fontWeight: 500,
                fontFamily: "Inter",
                borderRadius: "6px",
                border: "1px solid var(--G2, #369D9C)",
                textTransform: "none",
                marginTop: "1rem",
                background: "linear-gradient(102deg, #369D9C 0%, #28814D 100%)",
                color: "transparent",
                backgroundClip: "text",
                "-webkitBackgroundClip": "text",
                "-webkitTextFillColor": "transparent",
                "&:hover": {
                  border: "1px solid var(--G2, #369D9C)",
                  color: "#FFF", // Ensure text color is white
                  backgroundColor: "#32CD32", // Green background color
                  backgroundClip: "border-box", // Ensures the background color covers the whole button
                  "-webkitBackgroundClip": "border-box", // Webkit-specific background clip
                  "-webkitTextFillColor": "#FFF", // Ensure text color fills on hover
                },
              }}
            >
              Connect With an Expert
            </Button>
          </div>
        </Box>
      </Box>
      <Dialog
        open={showUpload}
        onClose={() => setShowUpload(false)}
        sx={{
          ".MuiBackdrop-root": {
            background: "rgba(0, 0, 0, 0.80)",
            backdropFilter: "blur(6px)",
          },
          ".MuiPaper-root": {
            borderRadius: "15px",
          },
        }}
      >
        <DialogContent
          style={{ width: "550px" }}
          sx={{
            padding: 0,
          }}
        >
          <Box
            style={{
              // textAlign: "center",
              // padding: "1rem",
              borderRadius: "10px",
              backgroundColor: "#FFF",
              cursor: "pointer",
              padding: "56px",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "400", fontFamily: "Inter", mb: "32px" }}
            >
              Choose how you want to generate the report?
            </Typography>
            <Box
              onClick={() => {
                setShowUploadDoc(true);
                setShowUpload(false);
              }}
              sx={{
                borderRadius: "10.979px",
                border: "1.372px solid #DBDBDB",
                backgroundColor: "#FDFDFD",
                height: "90px",
                padding: "1rem",
                display: "flex",
                flexDirection: "row",
                gap: "2rem",
                // mt: ".5rem",
                cursor: "pointer",
                ":hover": {
                  backgroundColor: "#F6FFF7",
                },
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="55"
                viewBox="0 0 80 81"
                fill="none"
              >
                <rect
                  y="0.938477"
                  width="80"
                  height="80"
                  rx="40"
                  fill="url(#paint0_linear_932_9567)"
                />
                <path
                  d="M52.2286 36.2336C52.2616 36.2411 52.2946 36.2486 52.3275 36.2561C52.2946 36.2636 52.2616 36.2711 52.2286 36.2786C48.7367 37.0783 44.4217 38.5143 41.833 41.103C39.2442 43.6917 37.8082 48.0067 37.0086 51.4986C37.0011 51.5317 36.9935 51.5646 36.9861 51.5975C36.9786 51.5646 36.9711 51.5317 36.9636 51.4986C36.1639 48.0067 34.7279 43.6917 32.1392 41.103C29.5505 38.5143 25.2354 37.0783 21.7436 36.2786C21.7105 36.2711 21.6776 36.2636 21.6447 36.2561C21.6776 36.2486 21.7105 36.2411 21.7436 36.2336C25.2354 35.4339 29.5505 33.998 32.1392 31.4092C34.7279 28.8205 36.1639 24.5055 36.9636 21.0136C36.9711 20.9806 36.9786 20.9476 36.9861 20.9147C36.9935 20.9476 37.0011 20.9806 37.0086 21.0136C37.8082 24.5055 39.2442 28.8205 41.833 31.4092C44.4217 33.998 48.7367 35.4339 52.2286 36.2336Z"
                  stroke="white"
                  stroke-width="2"
                />
                <path
                  d="M53.7878 48.5468C54.8612 49.6202 56.426 50.3295 57.9184 50.8019C56.426 51.2742 54.8612 51.9835 53.7878 53.0569C52.7145 54.1302 52.0051 55.6951 51.5328 57.1875C51.0605 55.6951 50.3511 54.1302 49.2778 53.0569C48.2045 51.9835 46.6396 51.2742 45.1472 50.8019C46.6396 50.3295 48.2045 49.6202 49.2778 48.5468C50.3511 47.4735 51.0605 45.9087 51.5328 44.4162C52.0051 45.9087 52.7145 47.4735 53.7878 48.5468Z"
                  stroke="white"
                  stroke-width="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_932_9567"
                    x1="0"
                    y1="0.938477"
                    x2="92.6224"
                    y2="20.1808"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#369D9C" />
                    <stop offset="1" stop-color="#28814D" />
                  </linearGradient>
                </defs>
              </svg>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "500",
                    fontFamily: "Inter",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "18px",
                  }}
                >
                  Enter data using
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "500",
                      fontFamily: "Inter",
                      fontSize: "18px",
                      background:
                        "linear-gradient(102deg, #369D9C 0%, #28814D 100%)",
                      backgroundClip: "text",
                      "-webkitBackgroundClip": "text",
                      "-webkitTextFillColor": "transparent",
                    }}
                  >
                    GE3S AI
                  </Typography>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "13px",
                    fontWeight: "400",
                    fontFamily: "Inter",
                    color: "#9B9B9B",
                  }}
                >
                  Let our AI assist you in generating report
                </Typography>
              </Box>
            </Box>
            <Box
              onClick={handleNavigateToAddDataPoints}
              sx={{
                borderRadius: "10.979px",
                border: "1.372px solid #DBDBDB",
                backgroundColor: "#FDFDFD",
                height: "90px",
                padding: "1rem",
                display: "flex",
                flexDirection: "row",
                gap: "2rem",
                mt: "21px",
                cursor: "pointer",

                ":hover": {
                  backgroundColor: "#F6FFF7",
                },
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="55"
                viewBox="0 0 80 81"
                fill="none"
              >
                <rect
                  y="0.897461"
                  width="80"
                  height="80"
                  rx="40"
                  fill="url(#paint0_linear_932_9574)"
                />
                <path
                  d="M40 33.397C40 31.8057 40.6321 30.2795 41.7574 29.1543C42.8826 28.0291 44.4087 27.397 46 27.397H59.5V54.397H46C44.4087 54.397 42.8826 55.0291 41.7574 56.1543C40.6321 57.2796 40 58.8057 40 60.397"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.5 54.397H34C35.5913 54.397 37.1174 55.0291 38.2426 56.1543C39.3679 57.2796 40 58.8057 40 60.397V33.397C40 31.8057 39.3679 30.2795 38.2426 29.1543C37.1174 28.0291 35.5913 27.397 34 27.397H20.5V54.397Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M46.002 34.8975H53.502"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M46.002 40.8975H53.502"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M46.002 46.8979H53.502"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_932_9574"
                    x1="0"
                    y1="40.0641"
                    x2="80"
                    y2="40.0641"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0DC06D" />
                    <stop offset="1" stop-color="#7AFCC0" />
                  </linearGradient>
                </defs>
              </svg>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "500",
                    fontFamily: "Inter",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "18px",
                    gap: "5px",
                  }}
                >
                  Enter Data Manually
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "13px",
                    fontWeight: "400",
                    fontFamily: "Inter",
                    color: "#9B9B9B",
                  }}
                >
                  Enter your data directly using our manual upload form
                </Typography>
              </Box>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
      <UploadFilesModal
        open={showUploadDoc}
        onClose={() => {
          setShowUpload(false);
          setShowUploadDoc(false);
        }}
      />
      <BookCall open={bookCall} onClose={() => setBookCall(false)} />
    </Box>
  );
}

export default CreateReport;
