import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import PasswordInput from "./PasswordInput";
import { useLocation, useNavigate } from "react-router-dom";
import pic from "../../assets/gesh.png";
import VideoPlayer from "../common/VideoPlayer";
import { savepassword } from "../../api/auth";
const validatePassword = (password) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};
const CreateOrganization = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [helperText, setHelperText] = useState({
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    password: false,
    confirmPassword: false,
  });
  console.log("password", password);
  
  useEffect(() => {
    setEmail(location.state);
  }, [location]);

  useEffect(() => {
    const passwordsMatch = password === confirmPassword;
    const isPasswordValid = validatePassword(password);

    setHelperText({
      password:
        password.trim() !== "" && !isPasswordValid
          ? "Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol."
          : "",
      confirmPassword:
        confirmPassword.trim() !== "" && !passwordsMatch
          ? "Passwords don't match"
          : "",
    });

    setError({
      password: password.trim() !== "" && !isPasswordValid,
      confirmPassword: confirmPassword.trim() !== "" && !passwordsMatch,
    });

    setIsFormValid(isPasswordValid && passwordsMatch && password.trim() !== "");
  }, [password, confirmPassword]);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("user_password", password);
    if (password) {
      let response = await savepassword(formData);
      console.log("pass", response);
      if (response.status === 201) {
        navigate("/personalinfo");
      } else {
        console.log("Could not verify password");
      }
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
        <Box style={{ maxWidth: "400px", padding: "0 20px" }}>
          <img
            src={pic}
            alt="Logo"
            style={{ width: "100px", marginBottom: "20px" }}
          />
          <Typography
            variant="h1"
            gutterBottom
            style={{ fontFamily: "Inter", fontSize: "36px", fontWeight: 500 }}
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
              fullWidth
              size="small"
              label="Email Address"
              variant="outlined"
              disabled
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

            <Box
              style={{
                marginBottom: 20,
              }}
            >
              <PasswordInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={error.password}
                helperText={helperText.password}
                placeholder={"Create Password"}
              />
            </Box>
            <PasswordInput
              placeholder={"Re-enter Password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={error.confirmPassword}
              helperText={helperText.confirmPassword}
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
                marginTop: "1rem",
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
              disabled={!isFormValid}
              className="signup_verify_btn"
            >
              Register Account
            </button>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CreateOrganization;
