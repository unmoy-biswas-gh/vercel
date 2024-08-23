import React, { useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import UploadLogo from "./UploadLogo";
import pic from "../../assets/gesh.png";
import bgPattern from "../../assets/images/login/bg.svg";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const OwnerSetupOrg = () => {
  const navigate = useNavigate();
  const [LogoSet, setLogoSet] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/owner/setup");
  };

  return (
    <Box
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container style={{ height: "100%", width: "100%" }}>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            // backgroundImage: `linear-gradient(to bottom, rgba(0,26,0,0.5), rgba(0,26,0,0.5)), url(${nursery})`,
            // backgroundSize: "cover",
            // backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            position: "relative",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <VideoPlayer />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <img
            src={bgPattern}
            alt=""
            style={{
              position: "absolute",
              bottom: "0",
              right: "0",
              zIndex: "1",
              width: "400px",
              height: "400px",
            }}
          />
          <Box
            style={{
              maxWidth: "420px",
              width: "100%",
              padding: "20px",
              position: "relative",
              zIndex: "2",
            }}
          >
            <img
              src={pic}
              alt="Logo"
              style={{ width: "90px", marginBottom: "15px" }}
            />
            <Typography
              variant="h4"
              gutterBottom
              style={{
                fontFamily: "Inter",
                fontSize: "29px",
                fontWeight: 500,
                marginBottom: "1rem",
              }}
            >
              Setup your Organization Profile!
            </Typography>
            <Typography
              variant="body1"
              style={{
                marginTop: "16px",
                marginBottom: "3rem",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: 15,
                color: "#8692A6",
              }}
            >
              Join us to access sustainability reports and track your progress
              towards a greener future.
            </Typography>
            <UploadLogo imageSelected={setLogoSet} />
            <button
              onClick={handleSubmit}
              type="submit"
              disabled={!LogoSet}
              variant="contained"
              color="primary"
              fullWidth
              style={{
                marginTop: "3rem",
                width: "100%",
                padding: "14px 24px",
                borderRadius: 6,
                background: !LogoSet ? "#E8E8E8" : "",
                backgroundImage: LogoSet
                  ? "linear-gradient(102deg, #369D9C 0%, #28814D 100%)"
                  : "",
                fontWeight: 500,
                fontSize: "15px",

                fontFamily: "Inter",
                color: !LogoSet ? "#A2A2A2" : "#FFF",
                border: "1px solid #DDD",
                letterSpacing: "0.5px",
                cursor: "pointer",
              }}
            >
              Next
            </button>
            <Typography
              onClick={handleSubmit}
              sx={{
                width: "max-content",
                margin: "auto",
                marginTop: "1rem",
                cursor: "pointer",
                fontFamily: "Inter",
                fontWeight: 500,
                background: "linear-gradient(102deg, #369D9C 0%, #28814D 100%)",
                backgroundClip: "text",
                "-webkitBackgroundClip": "text",
                "-webkitTextFillColor": "transparent",
                fontSize: "15px",
              }}
            >
              Skip
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OwnerSetupOrg;
