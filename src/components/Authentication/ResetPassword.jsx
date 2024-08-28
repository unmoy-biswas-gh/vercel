import React from "react";
import "./reset-password.css";
import VideoPlayer from "../common/VideoPlayer";
import { FormControl, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ email: "" });
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrors({ email: "Email is invalid!" });
    } else {
      // await api call and onsuccess redirect
      navigate("/reset-password/otp");
    }
  };

  return (
    <div className="reset-password_container">
      <div className="video-player">
        <VideoPlayer />
      </div>

      <div className="reset-form_container">
        <div className="reset-form_div">
          <Typography
            variant="h1"
            gutterBottom
            style={{
              fontFamily: "Inter",
              fontSize: "29px",
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            Reset your password
          </Typography>
          <Typography
            variant="body1"
            style={{
              marginTop: "16px",
              marginBottom: "2rem",
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: 15,
              color: "#8692A6",
              textAlign: "center",
            }}
          >
            We will send you OTP on your mail ID
          </Typography>

          <form onSubmit={handleSubmit}>
            <FormControl fullWidth sx={{ mb: 5 }} required>
              <TextField
                label="Email Address"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
              />
            </FormControl>

            <button
              type="submit"
              disabled={!email}
              style={{
                width: "100%",
                padding: "14px 0",
                borderRadius: 6,
                background: !email ? "#E8E8E8" : "",
                backgroundImage: email
                  ? "linear-gradient(102deg, #369D9C 0%, #28814D 100%)"
                  : "",
                fontWeight: 500,
                fontSize: "15px",
                fontFamily: "Inter",
                color: !email ? "#A2A2A2" : "#FFF",
                border: "1px solid #DDD",
                letterSpacing: "0.5px",
                cursor: "pointer",
              }}
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
