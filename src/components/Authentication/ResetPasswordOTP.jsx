import React from "react";
import "./reset-password.css";
import VideoPlayer from "../common/VideoPlayer";
import { Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MuiOtpInput } from "mui-one-time-password-input";
import clock from "../../assets/clock.svg";

const ResetPasswordOTP = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ email: "", otp: "" });
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const isOtpFilled = otp.length === 6;

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    // if (!validateEmail(email)) {
    //   setErrors({ email: "Email is invalid!" });
    // } else {
    //   // await api call and onsuccess redirect
    //   navigate("/reset-password/otp");
    // }
    e.preventDefault();
    // if otp is valid then
    navigate("/reset-password/new-password");
    // else show error
    // setErrors({ ...errors, otp: "OTP is invalid!" });
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
            sx={{
              fontFamily: "Inter",
              fontSize: "24px",
              fontWeight: 500,
              textAlign: "left",
              mb: 2,
            }}
          >
            Enter the OTP sent to your Email ID
          </Typography>

          <div className="edit-email_div_container">
            <div className="edit-email_div">
              {/* <span>{email}</span> */}
              {/* manage email  */}
              <span className="edit-email_div_email">aman@gmail.com</span>
              <button>Edit email ID</button>
            </div>

            <div className="resend-otp-div">
              <img src={clock} height={24} width={24} alt="Timer" />
              <span className="green_text_gradient">13s</span>
              <span className="green_text_gradient resend">Resend OTP</span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <MuiOtpInput
              sx={{
                marginBottom: "20px",
                ".MuiOutlinedInput-root fieldset": {
                  borderColor: errors.otp ? "red" : "#F3F3F3",
                },
              }}
              value={otp}
              onChange={(value) => setOtp(value)}
              length={6}
              autoFocus
              error={errors.otp}
            />

            <button
              type="submit"
              disabled={!isOtpFilled}
              style={{
                width: "100%",
                padding: "14px 0",
                borderRadius: 6,
                background: !isOtpFilled ? "#E8E8E8" : "",
                backgroundImage: isOtpFilled
                  ? "linear-gradient(102deg, #369D9C 0%, #28814D 100%)"
                  : "",
                fontWeight: 500,
                fontSize: "15px",
                fontFamily: "Inter",
                color: !isOtpFilled ? "#A2A2A2" : "#FFF",
                border: "1px solid #DDD",
                letterSpacing: "0.5px",
                cursor: "pointer",
              }}
            >
              Verify OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordOTP;
