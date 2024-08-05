import React, { useState } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import UploadLogo from "./UploadLogo";
import pic from "../../assets/gesh.png";
import jungle from "../../assets/jungle.jpg";
import bgPattern from "../../assets/images/login/bg.svg";

const SetupOrg = () => {
  const navigate = useNavigate();
  const [LogoSet, setLogoSet] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/setup");
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
            backgroundImage: `linear-gradient(to bottom, rgba(0,26,0,0.5), rgba(0,26,0,0.5)), url(${jungle})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box
            style={{
              background:
                "linear-gradient(145deg, rgba(255, 255, 255, 0.36) 3.9%, rgba(255, 255, 255, 0.00) 100.68%)",
              padding: "45px 40px 61px",
              borderRadius: "18px",
              maxWidth: "80%",
              textAlign: "center",
              color: "white",
              width: "50%",
              backgroundFilter: "blur(2px)",
            }}
          >
            <Typography
              variant="h4"
              style={{
                fontWeight: 400,
                fontSize: 28,
                fontFamily: "Inter",
                textAlign: "left",
              }}
            >
              Step into the future of business—where sustainability meets
              success
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
            }}
          />
          <Box
            style={{
              maxWidth: "500px",
              width: "100%",
              padding: "20px",
              position: "relative",
              zIndex: "2",
            }}
          >
            <img
              src={pic}
              alt="Logo"
              style={{ width: "100px", marginBottom: "20px" }}
            />
            <Typography
              variant="h4"
              gutterBottom
              style={{
                fontFamily: "Inter",
                fontSize: "34px",
                fontWeight: 500,
                marginBottom: "2rem",
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
                fontSize: 17,
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
                marginTop: "4rem",
                width: 500,
                padding: "16px 24px",
                borderRadius: 6,
                background: !LogoSet ? "#E8E8E8" : "",
                backgroundImage: LogoSet
                  ? "linear-gradient(102deg, #369D9C 0%, #28814D 100%)"
                  : "",
                fontWeight: 500,
                fontSize: "18px",
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
                fontSize: "14px",
                fontFamily: "Inter",
                fontWeight: 500,
                background: "linear-gradient(102deg, #369D9C 0%, #28814D 100%)",
                backgroundClip: "text",
                "-webkitBackgroundClip": "text",
                "-webkitTextFillColor": "transparent",
                fontSize: 18,
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

export default SetupOrg;
