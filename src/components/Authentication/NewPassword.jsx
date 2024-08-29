import React from "react";
import "./reset-password.css";
import VideoPlayer from "../common/VideoPlayer";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PasswordChangedModal from "./PasswordChangedModal";

const NewPassword = () => {
  const [passwords, setPasswords] = useState({
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({ password: "", confirmPassword: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);
  const navigate = useNavigate();

  const isPasswordMatching = passwords.password === passwords.confirmPassword;

  const isPasswordValid =
    isPasswordMatching &&
    passwords.password !== "" &&
    passwords.confirmPassword !== "";

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if passwords are valid then show api call and show dialog
    setPasswordChanged(true);
  };

  console.log(passwordChanged);

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
            Change your password
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
            Enter a new password below to change your password
          </Typography>

          <form onSubmit={handleSubmit}>
            <FormControl sx={{ mb: 3 }} fullWidth variant="outlined">
              <InputLabel
                sx={{ fontSize: "14px" }}
                htmlFor="outlined-adornment-password"
              >
                Password
              </InputLabel>
              <OutlinedInput
                sx={{
                  fontSize: "14px",
                  input: {
                    fontSize: "14px",
                  },
                  "& .MuiFormLabel-root": {
                    fontSize: "14px",
                  },
                  "& .MuiInputBase-root": {
                    fontSize: "14px",
                    borderRadius: "5px",
                  },
                }}
                name="password"
                onChange={handlePasswordChange}
                value={passwords.password}
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>

            <FormControl sx={{ mb: 5 }} fullWidth variant="outlined">
              <InputLabel
                htmlFor="outlined-adornment--confirm-password"
                sx={{ fontSize: "14px" }}
              >
                Confirm Password
              </InputLabel>
              <OutlinedInput
                sx={{
                  fontSize: "14px",
                  input: {
                    fontSize: "14px",
                  },
                  "& .MuiFormLabel-root": {
                    fontSize: "14px",
                  },
                  "& .MuiInputBase-root": {
                    fontSize: "14px",
                    borderRadius: "5px",
                  },
                }}
                name="confirmPassword"
                onChange={handlePasswordChange}
                value={passwords.confirmPassword}
                id="outlined-adornment--confirm-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirm Password"
              />
            </FormControl>

            <button
              type="submit"
              disabled={!isPasswordValid}
              style={{
                width: "100%",
                padding: "14px 0",
                borderRadius: 6,
                background: !isPasswordValid ? "#E8E8E8" : "",
                backgroundImage: isPasswordValid
                  ? "linear-gradient(102deg, #369D9C 0%, #28814D 100%)"
                  : "",
                fontWeight: 500,
                fontSize: "15px",
                fontFamily: "Inter",
                color: !isPasswordValid ? "#A2A2A2" : "#FFF",
                border: "1px solid #DDD",
                letterSpacing: "0.5px",
                cursor: "pointer",
              }}
            >
              Change password
            </button>
          </form>
        </div>
      </div>
      <PasswordChangedModal
        isOpen={passwordChanged}
        close={() => setPasswordChanged(false)}
      />
    </div>
  );
};

export default NewPassword;
