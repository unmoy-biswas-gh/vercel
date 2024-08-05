import React, { useEffect, useState } from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  InputAdornment,
  Dialog,
  DialogContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import pic from "../../assets/gesh.png";
import windmill from "../../assets/windmill.jpg";
import bgPattern from "../../assets/images/login/bg.svg";
import OnboardingCompleteSVG from "../../assets/Onboarding.svg";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const OwnerSetUp = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const currencies = [
    {
      value: "AED",
      label: "AED",
    },
    {
      value: "USD",
      label: "USD",
    },
    {
      value: "EUR",
      label: "EUR",
    },
    {
      value: "INR",
      label: "INR",
    },
    {
      value: "CHF",
      label: "CHF",
    },
    {
      value: "CAD",
      label: "CAD",
    },
  ];
  const countriesCurrency = {
    UAE: "AED",
    USA: "USD",
    India: "INR",
    Switzerland: "CHF",
    Canada: "CAD",
  };

  const [employee, setEmployee] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [currency, setCurrency] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [sector, setSector] = React.useState("");
  const [industry, setIndustry] = React.useState("");
  const [isFormValid, setIsFormValid] = React.useState(false);

  useEffect(() => {
    if (employee && country && currency && amount && sector && industry)
      setIsFormValid(true);
  }, [employee, country, currency, amount, sector, industry]);
  useEffect(() => {
    setCurrency(countriesCurrency[country]);
  }, [country]);

  const handleEmployeeChange = (event) => {
    setEmployee(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSectorChange = (event) => {
    setSector(event.target.value);
  };

  const handleIndustryChange = (event) => {
    setIndustry(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // navigate("/owner/invite");
    setOpen(true);
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
            justifyContent: "center",
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
              maxWidth: "450px",
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
                fontSize: "28px",
                fontWeight: 500,
                marginBottom: ".75rem",
              }}
            >
              Setup your Organization!
            </Typography>
            <Typography
              variant="body1"
              style={{
                marginBottom: "2rem",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: 15,
                color: "#8692A6",
              }}
            >
              Join us to access sustainability reports and track your progress
              towards a greener future.
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Company Name"
                variant="outlined"
                sx={{
                  backgroundColor: "white",

                  fontSize: "14px",
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#369D9C",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#369D9C", // Focused label color
                  },
                  "& .MuiFormHelperText-root": {
                    color: "red", // Custom helper text color
                  },
                  "& .MuiInputBase-input": {
                    fontFamily: "Inter",
                  },
                  "& .MuiInputLabel-root": {
                    fontFamily: "Inter",
                    fontSize: "14px",
                  },
                  input: {
                    fontSize: "14px",
                  },
                }}
              />
              <FormControl
                style={{ width: "49%", marginTop: "1rem" }}
                sx={{
                  backgroundColor: "white",

                  fontSize: "14px",
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#369D9C",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#369D9C", // Focused label color
                  },
                  "& .MuiFormHelperText-root": {
                    color: "red", // Custom helper text color
                  },
                  "& .MuiInputBase-input": {
                    fontFamily: "Inter",
                  },
                  "& .MuiInputLabel-root": {
                    fontFamily: "Inter",
                    fontSize: "14px",
                  },
                  input: {
                    fontSize: "14px",
                  },
                  ".MuiSelect-select": {
                    fontSize: "14px",
                  },
                }}
              >
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ fontSize: "14px" }}
                >
                  Company Size
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Company Size"
                  value={employee}
                  onChange={handleEmployeeChange}
                >
                  <MenuItem value={2 - 10} sx={{ fontFamily: "Inter" }}>
                    2-10
                  </MenuItem>
                  <MenuItem value={10 - 20} sx={{ fontFamily: "Inter" }}>
                    10-20
                  </MenuItem>
                  <MenuItem value={20 - 30} sx={{ fontFamily: "Inter" }}>
                    20-30
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl
                style={{
                  width: "49%",
                  marginTo: "1rem",
                  marginLeft: "2%",
                  marginTop: "1rem",
                }}
                sx={{
                  backgroundColor: "white",
                  ".MuiSelect-select": {
                    fontSize: "14px",
                  },
                  fontSize: "14px",
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#369D9C",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#369D9C", // Focused label color
                  },
                  "& .MuiFormHelperText-root": {
                    color: "red", // Custom helper text color
                  },
                  "& .MuiInputBase-input": {
                    fontFamily: "Inter",
                  },
                  "& .MuiInputLabel-root": {
                    fontFamily: "Inter",
                    fontSize: "14px",
                  },
                  input: {
                    fontSize: "14px",
                  },
                }}
              >
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Country"
                  value={country}
                  onChange={handleCountryChange}
                >
                  {Object.keys(countriesCurrency).map((key) => {
                    return (
                      <MenuItem value={key} sx={{ fontFamily: "Inter" }}>
                        {key}
                      </MenuItem>
                    );
                  })}
                  {/* <MenuItem value={1} sx={{ fontFamily: "Inter" }}>
                    IND
                  </MenuItem>
                  <MenuItem value={2} sx={{ fontFamily: "Inter" }}>
                    USA
                  </MenuItem>
                  <MenuItem value={3} sx={{ fontFamily: "Inter" }}>
                    UK
                  </MenuItem> */}
                </Select>
              </FormControl>
              <TextField
                label="Average Revenue"
                variant="outlined"
                value={amount}
                onChange={handleAmountChange}
                fullWidth
                type="number"
                sx={{
                  fontSize: "14px",
                  backgroundColor: "white",

                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#369D9C",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#369D9C", // Focused label color
                  },
                  "& .MuiFormHelperText-root": {
                    color: "red", // Custom helper text color
                  },
                  "& .MuiInputBase-input": {
                    fontFamily: "Inter",
                  },
                  "& .MuiInputLabel-root": {
                    fontFamily: "Inter",
                    fontSize: "14px",
                  },
                  input: {
                    fontSize: "14px",
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <TextField
                        disabled
                        select
                        value={currency}
                        onChange={handleCurrencyChange}
                        variant="standard"
                        style={{ width: 80, fontWeight: "bold" }}
                        InputProps={{ disableUnderline: true }}
                        sx={{
                          backgroundColor: "white",

                          svg: {
                            display: "none",
                          },
                          ".MuiSelect-select": {
                            paddingRight: "0 !important",
                          },
                          ".MuiInputBase-root": {
                            width: "max-content",
                          },
                        }}
                        SelectProps={{
                          MenuProps: {
                            PaperProps: {
                              sx: {
                                "& .MuiMenuItem-root": {
                                  fontWeight: "bold",
                                  fontFamily: "Inter",
                                },
                              },
                            },
                          },
                        }}
                      >
                        {currencies.map((option) => (
                          <MenuItem
                            key={option.value}
                            value={option.value}
                            sx={{ fontWeight: "bold", fontFamily: "Inter" }}
                          >
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </InputAdornment>
                  ),
                }}
                style={{ marginTop: 16, marginBottom: 20, color: "red" }}
              />
              <hr
                style={{
                  border: "none",
                  borderTop: "1px solid #F7F7F7",
                  margin: "0",
                  backgroundColor: "white",
                }}
              />
              <FormControl
                fullWidth
                style={{ marginTop: "1rem" }}
                sx={{
                  backgroundColor: "white",

                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#369D9C",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#369D9C", // Focused label color
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
              >
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ fontSize: "14px" }}
                >
                  Sector
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Sector"
                  value={sector}
                  onChange={handleSectorChange}
                >
                  <MenuItem value={1} sx={{ fontFamily: "Inter" }}>
                    Renewable energy
                  </MenuItem>
                  <MenuItem value={1} sx={{ fontFamily: "Inter" }}>
                    Food industry
                  </MenuItem>
                  <MenuItem value={1} sx={{ fontFamily: "Inter" }}>
                    Infrastructure
                  </MenuItem>
                  <MenuItem value={1} sx={{ fontFamily: "Inter" }}>
                    Telecommunications
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl
                fullWidth
                style={{ marginTop: "1rem" }}
                sx={{
                  fontSize: "14px",
                  backgroundColor: "white",

                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#369D9C",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#369D9C", // Focused label color
                  },
                  "& .MuiFormHelperText-root": {
                    color: "red", // Custom helper text color
                  },
                  "& .MuiInputBase-input": {
                    fontFamily: "Inter",
                  },
                  "& .MuiInputLabel-root": {
                    fontFamily: "Inter",
                    fontSize: "14px",
                  },
                  input: {
                    fontSize: "14px",
                  },
                }}
              >
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ fontSize: "14px" }}
                >
                  Industry
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Industry"
                  value={industry}
                  onChange={handleIndustryChange}
                >
                  <MenuItem value={1} sx={{ fontFamily: "Inter" }}>
                    Oil and gas Extraction
                  </MenuItem>
                  <MenuItem value={1} sx={{ fontFamily: "Inter" }}>
                    Optic Fiber
                  </MenuItem>
                  <MenuItem value={1} sx={{ fontFamily: "Inter" }}>
                    Solar Energy
                  </MenuItem>
                  <MenuItem value={1} sx={{ fontFamily: "Inter" }}>
                    Food Delivery
                  </MenuItem>
                  <MenuItem value={1} sx={{ fontFamily: "Inter" }}>
                    Steel Industry
                  </MenuItem>
                </Select>
              </FormControl>
              <button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{
                  marginTop: "2rem",
                  width: "100%",
                  padding: "14px 24px",

                  borderRadius: 6,
                  background: !isFormValid ? "#E8E8E8" : "",
                  backgroundImage: isFormValid
                    ? "linear-gradient(102deg, #369D9C 0%, #28814D 100%)"
                    : "",
                  fontWeight: 500,
                  fontSize: "15px",
                  fontFamily: "Inter",
                  color: !isFormValid ? "#A2A2A2" : "#FFF",
                  border: "1px solid #DDD",
                  letterSpacing: "0.5px",
                  cursor: "pointer",
                }}
              >
                Next
              </button>
            </form>
            <Dialog
              open={open}
              onClose={handleClose}
              sx={{
                ".MuiBackdrop-root": {
                  background: "rgba(0, 0, 0, 0.80)",
                  backdropFilter: "blur(6px)",
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
                      navigate("/owner/dashboard");
                    }}
                    variant="outlined"
                    style={{
                      marginTop: "2rem",
                      width: "max-content",
                      padding: "14px 24px",

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
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OwnerSetUp;
