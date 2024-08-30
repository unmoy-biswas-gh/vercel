import React, { useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import UploadLogo from "./UploadLogo";
import pic from "../../assets/gesh.png";
import jungle from "../../assets/jungle.jpg";
import bgPattern from "../../assets/images/login/bg.svg";
import VideoPlayer from "../common/VideoPlayer";

const SetupOrg = () => {
  const navigate = useNavigate();
  const [LogoSet, setLogoSet] = useState(false);
  const [logo, setLogo] = useState(null);

  // console.log(logo);
  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate("/setup", { state: logo });
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
                fontSize: "25px",
                fontWeight: 500,
                marginBottom: "1.5rem",
              }}
            >
              Setup your Organization Profile!
            </Typography>
            <Typography
              variant="body1"
              style={{
                marginTop: "16px",
                marginBottom: "2rem",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: 17,
                color: "#8692A6",
              }}
            >
              Join us to access sustainability reports and track your progress
              towards a greener future.
            </Typography>
            <UploadLogo
              imageSelected={setLogoSet}
              setLogo={setLogo}
              logo={logo}
            />
            <button
              onClick={handleSubmit}
              type="submit"
              // disabled={!LogoSet}
              variant="contained"
              color="primary"
              fullwidth
              style={{
                marginTop: "3rem",
                width: 500,
                padding: "12px 24px",
                borderRadius: 6,
                background: !LogoSet ? "#E8E8E8" : "",
                backgroundImage: LogoSet
                  ? "linear-gradient(102deg, #369D9C 0%, #28814D 100%)"
                  : "",
                fontWeight: 500,
                fontSize: "16px",
                fontFamily: "Inter",
                color: !LogoSet ? "#A2A2A2" : "#FFF",
                border: "1px solid #DDD",
                letterSpacing: "0.5px",
                cursor: "pointer",
              }}
            >
              Next
            </button>
            <button
              onClick={handleSubmit}
              type="submit"
              style={{
                marginTop: ".5rem",
                width: 500,
                padding: "12px 24px",
                border: "none",
                background: "none",
                fontWeight: 500,
                fontSize: "16px",
                fontFamily: "Inter",
                color: "#369D9C",
                cursor: "pointer",
              }}
            >
              Skip
            </button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SetupOrg;
