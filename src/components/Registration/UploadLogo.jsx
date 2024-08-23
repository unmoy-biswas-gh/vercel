import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import work from "../../assets/Work.png";
import upload2 from "../../assets/up.jpg";

const CircularIcon = styled(Box)(({ theme }) => ({
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  border: "2px solid #43BAB9",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#F0F8F8",
  marginBottom: "20px",
}));

const UploadLogo = ({ imageSelected }) => {
  const [logo, setLogo] = useState(null);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogo(e.target.result);
        imageSelected(true);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <CircularIcon>
        {logo ? (
          <img
            src={logo}
            alt="Logo"
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
          />
        ) : (
          <img
            src={work}
            alt="Logo"
            style={{ width: "50px", height: "50px" }}
          />
        )}
      </CircularIcon>
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="upload-button"
        type="file"
        onChange={handleUpload}
      />
      <label htmlFor="upload-button" style={{ cursor: "pointer" }}>
        <Box
          style={{
            padding: "10x 20px",
            width: 209,
            height: 48,
            border: "1px solid rgba(70, 95, 241, 0.40)",
            borderRadius: "8px",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1rem",
            display: "flex",
            cursor: "pointer",
          }}
        >
          <img src={upload2} alt="" style={{ marginRight: "10px" }} />
          <Typography
            variant="body1"
            style={{ fontFamily: "Inter", fontWeight: 500 }}
          >
            {logo ? "Re upload" : "Upload Logo"}
          </Typography>
        </Box>
      </label>
    </Box>
  );
};

export default UploadLogo;
