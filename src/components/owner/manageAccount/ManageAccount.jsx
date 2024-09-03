import React, { useState } from "react";
import "./manageAcc.css";
import back from "../../../assets/ArrowLeft.svg";
import brand1 from "../../../assets/images/logo.png";
import uploadIcon from "../../../assets/uploadIcon.svg";
import { Grid, TextField } from "@mui/material";

const ManageAccount = () => {
  const [companyDetails, setCompanyDetails] = useState({
    companyImage: "",
    companyName: "",
    address: "",
    country: "",
    registrationNum: "",
    sector: "",
    industry: "",
    employeeCount: "",
    avgRevenue: "",
  });

  const [ownerDetails, setOwnerDetails] = useState({
    ownerImage: "",
    name: "",
    email: "",
    mobile: "",
  });

  const styles = {
    fontSize: "14px",
    borderColor: "#EEEEEE",
    "& .MuiOutlinedInput-root": {
      borderRadius: "5px",
      "&.Mui-focused fieldset": {},
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
      padding: "10px 12px", // Adjust the padding to reduce the size
    },
    "& .MuiInputLabel-root": {
      fontFamily: "Inter",
      fontSize: "14px",
      transform: "translate(12px, 12px) scale(1)", // Adjust the label position
    },
    "& .MuiInputLabel-shrink": {
      transform: "translate(12px, -6px) scale(0.75)", // Adjust the label position when it shrinks
    },
  };

  // Function to check if all required fields are filled
  const areAllFieldsFilled = () => {
    const allCompanyFieldsFilled = Object.values(companyDetails).every(
      (value) => value.trim() !== ""
    );
    const allOwnerFieldsFilled = Object.values(ownerDetails).every(
      (value) => value.trim() !== ""
    );

    return allCompanyFieldsFilled && allOwnerFieldsFilled;
  };

  // Handle input change
  const handleCompanyInputChange = (e) => {
    setCompanyDetails({ ...companyDetails, [e.target.name]: e.target.value });
  };

  const handleOwnerInputChange = (e) => {
    setOwnerDetails({ ...ownerDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="manage-account_container">
      <div className="manage-account_heading-div">
        <img
          style={{ cursor: "pointer" }}
          src={back}
          alt="Back"
          height={16}
          width={16}
          // onClick={() => navigate("/")}
        />
        <h1>Manage Account</h1>
      </div>

      <div className="account-details_container">
        <h2>Company Details</h2>

        <form>
          <div className="company-details_form">
            <div className="account-details_upload-div">
              <img src={brand1} height={65} width={65} alt="Brand 1" />

              <button type="button" className="account-details_upload-btn">
                <img src={uploadIcon} height={24} width={24} alt="Upload" />
                <span>Re upload</span>
              </button>
            </div>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  name="companyName"
                  label="Company Name"
                  variant="outlined"
                  required
                  value={companyDetails.companyName}
                  onChange={handleCompanyInputChange}
                  sx={styles}
                  placeholder="Enter Company Name"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  name="address"
                  label="Address"
                  variant="outlined"
                  required
                  value={companyDetails.address}
                  onChange={handleCompanyInputChange}
                  sx={styles}
                  placeholder="Enter Address"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  name="country"
                  label="Country"
                  variant="outlined"
                  required
                  value={companyDetails.country}
                  onChange={handleCompanyInputChange}
                  sx={styles}
                  placeholder="Enter country"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  name="registrationNum"
                  label="Registration Number"
                  variant="outlined"
                  required
                  value={companyDetails.registrationNum}
                  onChange={handleCompanyInputChange}
                  sx={styles}
                  placeholder="Registration number"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  name="sector"
                  label="Sector"
                  variant="outlined"
                  required
                  value={companyDetails.sector}
                  onChange={handleCompanyInputChange}
                  sx={styles}
                  placeholder="Industrial"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  name="industry"
                  label="Industry"
                  variant="outlined"
                  required
                  value={companyDetails.industry}
                  onChange={handleCompanyInputChange}
                  sx={styles}
                  placeholder="Oil and Gas Extraction"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  name="employeeCount"
                  label="Employee Count"
                  variant="outlined"
                  required
                  value={companyDetails.employeeCount}
                  onChange={handleCompanyInputChange}
                  sx={styles}
                  placeholder="100"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  name="avgRevenue"
                  label="Average Revenue"
                  variant="outlined"
                  required
                  value={companyDetails.avgRevenue}
                  onChange={handleCompanyInputChange}
                  sx={styles}
                  placeholder="10M$"
                />
              </Grid>
            </Grid>
          </div>

          <div className="owner-details_form">
            <h2>Owner Details</h2>

            <div className="account-details_upload-div">
              <img src={brand1} height={65} width={65} alt="Brand 1" />

              <button type="button" className="account-details_upload-btn">
                <img src={uploadIcon} height={24} width={24} alt="Upload" />
                <span>Re upload</span>
              </button>
            </div>

            <Grid container spacing={3}>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  name="name"
                  label="Name"
                  variant="outlined"
                  required
                  value={ownerDetails.name}
                  onChange={handleOwnerInputChange}
                  sx={styles}
                  placeholder="Name"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  name="email"
                  label="Email"
                  variant="outlined"
                  required
                  value={ownerDetails.email}
                  onChange={handleOwnerInputChange}
                  sx={styles}
                  placeholder="Email"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  name="mobile"
                  label="Mobile"
                  variant="outlined"
                  required
                  value={ownerDetails.mobile}
                  onChange={handleOwnerInputChange}
                  sx={styles}
                  placeholder="Mobile No."
                />
              </Grid>
            </Grid>
          </div>

          <div style={{ textAlign: "right" }}>
            <button
              type="submit"
              disabled={!areAllFieldsFilled()} // Disable the button if not all fields are filled
              className="account-details_save-btn"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManageAccount;
