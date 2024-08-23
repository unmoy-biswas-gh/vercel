import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import PasswordInput from "./PasswordInput";
import { useNavigate } from "react-router-dom";
import pic from "../../assets/gesh.png";
import nursery from "../../assets/nursery.jpg";

const RegisterAccount = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    fullName: false,
    email: false,
    password: false,
  });
  const [helperText, setHelperText] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  useEffect(() => {
    const isFullNameValid = fullName.trim() !== "";
    const isEmailValid = email.trim() !== "" && validateEmail(email);
    const isPasswordValid = password.trim() !== "";
    const isAgreedValid = agreed;

    setIsFormValid(
      isFullNameValid && isEmailValid && isPasswordValid && isAgreedValid
    );
  }, [fullName, email, password, agreed]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const isFullNameValid = fullName.trim() !== "";
    const isEmailValid = email.trim() !== "" && validateEmail(email);
    const isPasswordValid = password.trim() !== "";
    const isAgreedValid = agreed;

    setError({
      fullName: !isFullNameValid,
      email: !isEmailValid,
      password: !isPasswordValid,
    });

    setHelperText({
      fullName: !isFullNameValid ? "Full Name is required" : "",
      email: !isEmailValid ? "Please enter a valid email address" : "",
      password: !isPasswordValid ? "Password is required" : "",
    });

    if (isFullNameValid && isEmailValid && isPasswordValid && isAgreedValid) {
      navigate("/owner/setupprofile");
    }
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
            backgroundImage: `linear-gradient(to bottom, rgba(0,26,0,0.5), rgba(0,26,0,0.5)), url(${nursery})`,
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
              <span style={{ fontWeight: 700 }}>Empowering</span> Your Business
              with Comprehensive{" "}
              <span style={{ fontWeight: 700 }}>Sustainability Insights</span>
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
          <Box style={{ maxWidth: "400px", width: "100%", padding: "20px" }}>
            <img
              src={pic}
              alt="Logo"
              style={{ width: "100px", marginBottom: "20px" }}
            />
            <Typography
              variant="h1"
              gutterBottom
              style={{ fontFamily: "Inter", fontSize: "36px", fontWeight: 700 }}
            >
              Register Account!
            </Typography>
            <Typography
              variant="body1"
              style={{
                marginTop: "16px",
                marginBottom: "3rem",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "36",
                color: "#8692A6",
              }}
            >
              For the purpose of industry regulation, your details are required.
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullwidth
                label="Your Full name"
                variant="outlined"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                error={error.fullName}
                helperText={helperText.fullName}
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
                  "& .MuiFormHelperText-root": {
                    color: "red", // Custom helper text color
                  },
                  "& .MuiInputBase-input": {
                    fontFamily: "Inter",
                  },
                  "& .MuiInputLabel-root": {
                    fontFamily: "Inter",
                  },
                }}
              />
              <TextField
                fullwidth
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
              <PasswordInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={error.password}
                helperText={helperText.password}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    sx={{
                      color: "primary",
                      "&.Mui-checked": {
                        color: "#43BAB9",
                      },
                    }}
                  />
                }
                label="I agree to terms & conditions"
                sx={{
                  marginTop: "2.5rem",
                  fontFamily: "Inter",
                  fontWeight: 500,
                  color: "#696F79",
                  "& .MuiFormControlLabel-label": {
                    fontFamily: "Inter, Arial, sans-serif",
                  },
                }}
              />
              <button
                type="submit"
                variant="contained"
                color="primary"
                fullwidth
                disabled={!isFormValid}
                style={{
                  marginTop: "16px",
                  width: "100%",
                  padding: "16px 24px",
                  borderRadius: 6,
                  backgroundImage: isFormValid
                    ? "linear-gradient(102deg, #369D9C 0%, #28814D 100%)"
                    : "linear-gradient(102deg, #EBEBEB 0%, #EBEBEB 100%)",
                  fontWeight: 900,
                  fontSize: "16px",
                  fontFamily: "Inter",
                  color: isFormValid ? "#FFF" : "#9E9E9E",
                  border: "1px solid #DDD",
                  letterSpacing: "0.5px",
                  cursor: "pointer",
                }}
              >
                Register Account
              </button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegisterAccount;
