import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  DialogContent,
  Button,
  Dialog,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import pic from "../../assets/gesh.png";
import VideoPlayer from "../common/VideoPlayer";
import { savepassword } from "../../api/auth";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import OnboardingCompleteSVG from "../../assets/Onboarding.svg";

const TeamMembersRegister = () => {
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState({
    email: false,
    password: false,
    password2: false,
  });
  const [helperText, setHelperText] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  useEffect(() => {
    setEmail(location.state);
  }, [location]);

  useEffect(() => {
    const isEmailValid = email?.trim() !== "" && validateEmail(email);
    const isPasswordValid = password?.trim() !== "";
    const isPasswordsMatch = password === password2;
    const isAgreedValid = agreed;

    // setIsFormValid(
    //   isEmailValid && isPasswordValid && isPasswordsMatch && isAgreedValid
    // );
    setIsFormValid(isEmailValid && isPasswordValid && isAgreedValid);
  }, [email, password, agreed, password2]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isEmailValid = email.trim() !== "" && validateEmail(email);
    const isPasswordValid = password.trim() !== "";
    const isPasswordsMatch = password === password2;
    const isAgreedValid = agreed;

    setError({
      email: !isEmailValid,
      password: !isPasswordValid,
      password2: !isPasswordsMatch,
    });
    setHelperText({
      email: !isEmailValid ? "Please enter a valid email address" : "",
      password: !isPasswordValid ? "Password is required" : "",
      password2: !isPasswordsMatch ? "Passwords do not match" : "",
    });

    // const formData = new FormData();
    // formData.append("user_password", password);
    // if (isEmailValid && isPasswordValid && isPasswordsMatch && isAgreedValid) {
    //   let response = await savepassword(formData);
    //   console.log("pass", response);
    //   if (response.status === 201) {
    //     navigate("/personalinfo");
    //   } else {
    //     console.log("Could not verify password");
    //   }
    // }

    try {
      setShowSuccess(true);
    } catch (error) {
      console.log(error);
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

          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <FormControl
              sx={{
                width: "100%",
                mb: "20px",
              }}
            >
              <TextField
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
                id="email"
                label="Email"
                variant="outlined"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={error.email}
                helperText={helperText.email}
              />
            </FormControl>

            <FormControl
              sx={{ width: "100%", mb: "20px" }}
              variant="outlined"
              error={error.password}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              <Typography variant="caption" color="error">
                {helperText.password}
              </Typography>
            </FormControl>

            {/* <FormControl
              sx={{ width: "100%", mb: "20px" }}
              variant="outlined"
              error={error.password2}
            >
              <InputLabel htmlFor="outlined-adornment-password2">
                Re-enter Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password2"
                type={showPassword ? "text" : "password"}
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
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
                label="Re-enter Password"
              />
              <Typography variant="caption" color="error">
                {helperText.password2}
              </Typography>
            </FormControl> */}

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

      <Dialog
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
        sx={{
          ".MuiBackdrop-root": {
            background: "rgba(0, 0, 0, 0.80)",
            backdropFilter: "blur(6px)",
          },
          ".MuiPaper-root": {
            borderRadius: "10px",
          },
        }}
      >
        <DialogContent style={{ width: "550px" }}>
          <Box
            style={{
              textAlign: "center",
              padding: "2rem 4rem 3rem 4rem",
              borderRadius: "10px",
              backgroundColor: "#FFF",
            }}
          >
            <img
              src={OnboardingCompleteSVG}
              alt="Onboarding Complete"
              width="234"
              height="179"
            />
            <Typography
              variant="h6"
              style={{
                fontWeight: 600,
                fontFamily: "Inter",
                marginTop: "1.5rem",
              }}
            >
              Onboarding Complete
            </Typography>
            <Button
              onClick={() => {
                navigate("/");
              }}
              variant="outlined"
              style={{
                marginTop: "1.5rem",
                width: "max-content",
                padding: "8px 24px",
                textTransform: "none",

                borderRadius: 6,
                backgroundImage:
                  "linear-gradient(102deg, #369D9C 0%, #28814D 100%)",
                fontWeight: 500,
                fontSize: "15px",

                fontFamily: "Inter",
                color: "#FFF",
                border: "1px solid #DDD",
                letterSpacing: "0.5px",
                cursor: "pointer",
              }}
            >
              Go to Dashboard
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

export default TeamMembersRegister;
