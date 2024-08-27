import React, { useState, useEffect } from "react";
import { Grid, Box, TextField, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import pic from "../../assets/gesh.png";
import VideoPlayer from "../common/VideoPlayer";
import "./Signup.css";
import { MuiOtpInput } from "mui-one-time-password-input";
import AccountVerifiedModal from "./AccountVerifiedModal";
import { getCountries, sendOTPtoEmail } from "../../api/auth";
import { useAuth } from "../context/AuthContext";
const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [otperror, setOtpError] = useState(false);
  const [status, setStatus] = useState("login");
  const [otp, setOtp] = useState("");
  const [secs, setSecs] = useState(30);
  const [isRunning, setIsRunning] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [open, setOpen] = useState(false);
  const { verifyOtpWithBackend } = useAuth();
  const [helperText, setHelperText] = useState({
    email: "",
  });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  const handleOTP = async () => {
    if (otp.length < 6) {
      alert(`Please Enter a Valid OTP`);
    }

    const payload = {
      user_email: email,
      user_otp: otp,
    };
    console.log("payload", payload);

    let response = await verifyOtpWithBackend(payload);
    // console.log("response", response);
    if (response.status === 200) {
      setOpen(true);
    } else {
      console.log("error");
    }
  };
  const resendOTP = () => {
    startTimer();
    if (otp.length < 6) {
      //   toast.error(`Please Enter a Valid OTP`);
    }
    // try {
    //   const isMobile = !!mobileNumber.includes("@");

    const payload = {
      email: email,
      otp: otp,
    };
    console.log("payload", payload);
    //   api
    //     .post("/auth/verify-admin", PayloadOfOtp)
    //     .then(async (response) => {
    //       cookie.save("token", response.data.token);
    //       await setIsUserAuthenticated(true);
    //       navigate("/doctors");
    //     })
    //     .catch((err) => {
    //       toast.error(`Couldn't verify OTP`);
    //     });
    // } catch (error) {
    //   toast.error(`Error:${error}`);
    // }
  };

  useEffect(() => {
    let timer;
    if (isRunning && secs > 0) {
      timer = setInterval(() => {
        setSecs((prevSecs) => {
          if (prevSecs <= 1) {
            clearInterval(timer);
            setIsRunning(false);
            return 0;
          }
          return prevSecs - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, secs]);

  const startTimer = () => {
    setSecs(30);
    setIsRunning(true);
  };
  useEffect(() => {
    const isEmailValid = email.trim() !== "" && validateEmail(email);
    setIsFormValid(isEmailValid);
  }, [email]);
  useEffect(() => {
    if (status === "otp") startTimer();
  }, [status]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const isEmailValid = email.trim() !== "" && validateEmail(email);
    const payload = {
      user_email: email,
    };
    setError(!isEmailValid);

    setHelperText({
      email: !isEmailValid ? "Please enter a valid email address" : "",
    });

    if (isEmailValid) {
      let response = await sendOTPtoEmail(payload);
      // console.log("response", response);
      if (response.data.status === 200) {
        setStatus("otp");
      } else {
        console.log("wrong email");
      }
    } else {
      alert("not a valid email");
    }
  };

  return (
    <Grid container style={{ height: "100vh" }}>
      <Grid item xs={12} md={6} style={{ height: "100%", width: "100%" }}>
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
          height: "100vh",
        }}
      >
        <Box style={{ maxWidth: "400px" }}>
          <img
            src={pic}
            alt="Logo"
            style={{ width: "100px", marginBottom: "20px" }}
          />
          <h1
            style={{
              fontWeight: 500,
              fontSize: "30px",
            }}
          >
            Register Account!
          </h1>
          <p
            style={{
              marginTop: "16px",
              marginBottom: "3rem",
              fontSize: "16px",
              color: "#8692A6",
            }}
          >
            Join us to access sustainability reports and track your progress
            towards a greener future.
          </p>
          {status === "login" ? (
            <>
              <TextField
                fullWidth
                label="Email Address"
                variant="outlined"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={error.email}
                helperText={helperText.email}
                style={{
                  marginBottom: 20,
                  borderRadius: "10px",
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#369D9C",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#369D9C",
                    fontFamily: "Inter",
                  },
                  "& .MuiInputBase-input": {
                    fontFamily: "Inter",
                  },
                  "& .MuiInputLabel-root": {
                    fontFamily: "Inter",
                  },
                }}
              />
              <button
                className="signup_verify_btn"
                type="submit"
                onClick={handleSubmit}
                //   disabled={!isFormValid}
              >
                Verify
              </button>

              <p className="login_text">
                Already have an account?{" "}
                <span onClick={() => navigate("/login")}>Login</span>
              </p>
            </>
          ) : (
            <>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    pb: 1,
                    fontWeight: "500",
                    fontSize: "1rem",
                  }}
                  color={"black"}
                >
                  unmoy@growhut.in
                </Typography>

                <Typography
                  onClick={() => setStatus("login")}
                  color={"primary"}
                  sx={{
                    fontFamily: "Inter",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Edit Email
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: ".2rem",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  marginBottom: "1.5rem",
                }}
              >
                <svg width={25} height={25} viewBox="0 0 32 32" fill="none">
                  <g clipPath="url(#clip0_4184_16343)">
                    <path
                      d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
                      stroke="#B7B7B7"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 9V16H23"
                      stroke="#B7B7B7"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4184_16343">
                      <rect width={32} height={32} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <Typography
                  color={"#B7B7B7"}
                  sx={{
                    fontSize: "16px",
                    fontWeight: "500",
                    minWidth: "35px",
                    fontFamily: "Inter",
                  }}
                >
                  {secs}s
                </Typography>
                <div>
                  <Typography
                    onClick={(e) => {
                      if (isRunning) {
                        e.preventDefault();
                      } else {
                        resendOTP();
                      }
                    }}
                    color={isRunning ? "#b7b7b7" : "primary"}
                    sx={{
                      cursor: isRunning ? "default" : "pointer",
                      fontSize: "16px",
                      fontWeight: "500",
                      fontFamily: "Inter",
                    }}
                  >
                    Resend OTP
                  </Typography>
                </div>
              </Box>
              <MuiOtpInput
                sx={{
                  marginBottom: "20px",
                  ".MuiOutlinedInput-root fieldset": {
                    borderColor: otperror ? "red" : "#F3F3F3",
                  },
                }}
                value={otp}
                onChange={(value) => setOtp(value)}
                length={6}
                autoFocus
                error={otperror}
              />{" "}
              {otperror && (
                <Typography color="error" variant="body2">
                  Incorrect OTP. Please try again.
                </Typography>
              )}
              <button
                onClick={handleOTP}
                fullWidth
                className="signup_verify_btn"
              >
                VERIFY_OTP
              </button>
            </>
          )}
        </Box>
        <AccountVerifiedModal open={open} email={email} />
      </Grid>
    </Grid>
  );
};

export default SignUp;
