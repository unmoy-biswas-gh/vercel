import React, { useEffect, useState } from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  InputAdornment,
  Dialog,
  DialogContent,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import pic from "../../assets/gesh.png";
import bgPattern from "../../assets/images/login/bg.svg";
import OnboardingCompleteSVG from "../../assets/Onboarding.svg";
import VideoPlayer from "../common/VideoPlayer";
import {
  getCountries,
  getEmpCount,
  getIndustries,
  getSectors,
  saveOrg,
} from "../../api/auth";

const OwnerSetUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const logo = location.state;
  const [countList, setCountList] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [industryList, setIndustryList] = useState([]);
  const [sectorList, setSectorList] = useState([]);
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

  const [employee, setEmployee] = useState("");
  const [country, setCountry] = useState("");
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [sector, setSector] = useState("");
  const [name, setName] = useState("");
  const [industry, setIndustry] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

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

  // getSectors();
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    // navigate("/owner/invite");

    const formData = new FormData();
    formData.append("organization_name", name);
    if (logo) {
      formData.append("organization_logo", logo);
    }
    formData.append("organization_employeeCount", employee);
    formData.append("organization_country", country);
    formData.append("organization_averageRevenue", amount);
    formData.append("organization_sector", sector);
    formData.append("organization_industry", industry);
    let response = await saveOrg(formData);
    console.log("saveOrg", response);
    if (response.status === 201) {
      setOpen(true);
    } else {
      console.log("Could not save org");
    }
  };
  async function getAllCountries() {
    const response = await getCountries();
    if (response?.status === 200) {
      setCountryList(response.data);
    } else {
    }
  }
  async function getAllIndustries() {
    const response = await getIndustries();
    if (response?.status === 200) {
      console.log(response.data);
      setIndustryList(response.data);
    } else {
    }
  }
  async function getAllSectors() {
    const response = await getSectors();
    if (response?.status === 200) {
      console.log(response.data);
      setSectorList(response.data);
    } else {
    }
  }
  async function getAllEmpCount() {
    const response = await getEmpCount();
    if (response?.status === 200) {
      console.log(response.data);
      setCountList(response.data);
    } else {
    }
  }
  useEffect(() => {
    getAllCountries();
    getAllSectors();
    getAllEmpCount();
    getAllIndustries();
  }, []);
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
                size="small"
                fullWidth
                label="Company Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                size="small"
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
                  {countList.map((item, index) => (
                    <MenuItem
                      key={index}
                      value={item?.id}
                      sx={{ fontFamily: "Inter" }}
                    >
                      {item?.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl
                size="small"
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
                  {countryList.map((item, index) => (
                    <MenuItem
                      key={index}
                      value={item?.id}
                      sx={{ fontFamily: "Inter" }}
                    >
                      {item?.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                size="small"
                label="Average Revenue"
                variant="outlined"
                value={amount}
                onChange={handleAmountChange}
                fullWidth
                type="number"
                sx={{
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
                style={{ marginTop: 16, color: "red" }}
              />
              {/* <hr
                style={{
                  border: "none",
                  borderTop: "1px solid #F7F7F7",
                  margin: "0",
                  backgroundColor: "white",
                }}
              /> */}
              <FormControl
                size="small"
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
                  {sectorList.map((item, index) => (
                    <MenuItem
                      key={index}
                      value={item?.id}
                      sx={{ fontFamily: "Inter" }}
                    >
                      {item?.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl
                size="small"
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
                  {industryList.map((item, index) => (
                    <MenuItem
                      key={index}
                      value={item?.id}
                      sx={{ fontFamily: "Inter" }}
                    >
                      {item?.name}
                    </MenuItem>
                  ))}
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
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OwnerSetUp;
