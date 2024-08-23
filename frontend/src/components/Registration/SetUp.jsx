import React, { useEffect } from "react";
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
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import pic from "../../assets/gesh.png";
import windmill from "../../assets/windmill.jpg";
import bgPattern from "../../assets/images/login/bg.svg";

const SetUp = () => {
  const navigate = useNavigate();

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
  const [country, setCountry] = React.useState("India");
  const [currency, setCurrency] = React.useState("AED");
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
    navigate("/invite");
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
            backgroundImage: `linear-gradient(to bottom, rgba(0,26,0,0.5), rgba(0,26,0,0.5)), url(${windmill})`,
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
              backgroundColor: "rgba(18, 78, 57, 0.4)",
              padding: "45px 40px 61px",
              borderRadius: "18px",
              maxWidth: "80%",
              textAlign: "center",
              color: "white",
              width: "50%",
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
              Make sustainability your competitive advantage—begin today
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
                marginBottom: "1rem",
              }}
            >
              Setup Your Organization!
            </Typography>
            <Typography
              variant="body1"
              style={{
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
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Company Name"
                variant="outlined"
                sx={{
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
              />
              <FormControl
                style={{ width: "49%", marginTop: "1rem" }}
                sx={{
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
                <InputLabel id="demo-simple-select-label">
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
                  marginLeft: "1%",
                  marginTop: "1rem",
                }}
                sx={{
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
                          svg: {
                            display: "none",
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
              <hr style={{ border: "none", borderTop: "1px solid #e0e0e0" }} />
              <FormControl
                fullWidth
                style={{ marginTop: "1rem" }}
                sx={{
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
                <InputLabel id="demo-simple-select-label">Sector</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Sector"
                  value={sector}
                  onChange={handleSectorChange}
                >
                  <MenuItem value={1} sx={{ fontFamily: "Inter" }}>
                    Oil and gas Extraction
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl
                fullWidth
                style={{ marginTop: "1rem" }}
                sx={{
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
                <InputLabel id="demo-simple-select-label">Industry</InputLabel>
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
                </Select>
              </FormControl>
              <button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{
                  marginTop: "4rem",
                  width: 500,
                  padding: "16px 24px",
                  borderRadius: 6,
                  background: !isFormValid ? "#E8E8E8" : "",
                  backgroundImage: isFormValid
                    ? "linear-gradient(102deg, #369D9C 0%, #28814D 100%)"
                    : "",
                  fontWeight: 500,
                  fontSize: "18px",
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
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SetUp;
