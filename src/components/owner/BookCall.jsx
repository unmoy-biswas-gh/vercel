import React, { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import {
  Box,
  Dialog,
  DialogContent,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
import CustomField from "../common/CustomField";
import dayjs from "dayjs";
import Lottie from "react-lottie-player";
import confirmAnimation from "../../assets/animation/confirm.json";

function BookCall({ open, onClose }) {
  const [selectedDate, setSelectedDate] = useState();
  const [displayDate, setDisplayDate] = useState("");
  const [currentState, setCurrentState] = useState("selectDate");
  const [mobileNo, setMobileNo] = useState("");
  const [enableConfirm, setEnableConfirm] = useState(false);

  const handleDateChange = (date) => {
    addDisplayDate(date);
    const formattedDate = dayjs(date).format("DD-MM-YYYY");
    setSelectedDate(formattedDate);
  };
  const addDisplayDate = (date) => {
    const formattedDate = dayjs(date).format("ddd, MMM D");
    setDisplayDate(formattedDate);
  };

  const handleMobileNo = (event) => {
    const value = event.target.value;
    const onlyNumbers = value.replace(/\D/g, ""); // Remove non-numeric characters
    if (onlyNumbers.length <= 10) {
      setMobileNo(onlyNumbers);
    }
  };

  useEffect(() => {
    if (mobileNo.trim() !== "") {
      setEnableConfirm(true);
    } else {
      setEnableConfirm(false);
    }
  }, [mobileNo]);

  useEffect(() => {
    setCurrentState("selectDate");
  }, [open]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
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
      <DialogContent style={{ width: "auto" }}>
        {currentState === "selectDate" && (
          <>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", fontFamily: "Inter" }}
            >
              Schedule a Call
            </Typography>
            <Typography
              sx={{ fontFamily: "Inter", fontSize: "12px", margin: ".5rem 0" }}
            >
              Please select a date for your call
            </Typography>
            <Box
              sx={{
                border: "1px solid  #CAC4D0",
                borderRadius: "8px",
                mt: "1.5rem",
                width: "400px",
              }}
            >
              <Box
                sx={{
                  borderBottom: "1px solid  #CAC4D0",
                  padding: ".5rem 1rem",
                }}
              >
                {!displayDate && (
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontSize: "12px",
                      margin: ".5rem 0",
                    }}
                  >
                    Selecte date
                  </Typography>
                )}
                <Typography variant="h5" sx={{ fontFamily: "Inter" }}>
                  {displayDate}
                </Typography>
              </Box>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                  onChange={handleDateChange}
                  sx={{
                    ".MuiPickersDay-today": {
                      border: "1px solid #2B8860 !important",
                      color: "#2B8860 !important",
                    },
                    ".Mui-selected": {
                      backgroundColor: "#2B8860 !important",
                      color: "whtie !important",
                    },
                    "&.MuiDateCalendar-root": {
                      width: "100% !important",
                    },
                    ".MuiDayCalendar-header": {
                      gap: "1rem !important",
                    },
                    ".MuiDayCalendar-weekContainer": {
                      gap: "1rem !important",
                      marginTop: ".5rem !important",
                      marginBottom: ".5rem !important",
                    },
                    ".MuiPickersDay-root": {
                      fontSize: "15px",
                    },
                    ".MuiDayCalendar-weekDayLabel": {
                      fontSize: "15px",
                    },
                  }}
                />
              </LocalizationProvider>
            </Box>
            <button
              type="submit"
              variant="contained"
              color="primary"
              onClick={() => setCurrentState("callConfirm")}
              disabled={!selectedDate}
              fullwidth
              style={{
                marginTop: "1.5rem",
                width: "100%",
                padding: "14px 24px",

                borderRadius: 6,
                background: !selectedDate ? "#E8E8E8" : "",
                backgroundImage: selectedDate
                  ? "linear-gradient(102deg, #369D9C 0%, #28814D 100%)"
                  : "",
                fontWeight: 500,
                fontSize: "15px",
                fontFamily: "Inter",
                color: !selectedDate ? "#A2A2A2" : "#FFF",
                border: "1px solid #DDD",
                letterSpacing: "0.5px",
                cursor: "pointer",
              }}
            >
              Next
            </button>
          </>
        )}
        {currentState === "callConfirm" && (
          <Box
            sx={{
              width: "500px",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Typography
              variant="h5"
              mb={"2rem"}
              fontWeight={500}
              fontFamily={"Inter"}
              width={"100%"}
            >
              Schedule a call
            </Typography>
            <CustomField
              label="Name"
              value={"Aman upadhyay"}
              fullWidth={true}
              sx={{
                "&.MuiFormControl-root": {
                  mb: "2rem !important",
                  input: {
                    color: "rgba(0, 0, 0, 0.38)",
                  },
                },
              }}
            />
            <CustomField
              label="Email"
              value={"Aman@gmail.com"}
              fullWidth={true}
              sx={{
                "&.MuiFormControl-root": {
                  mb: "2rem !important",
                  input: {
                    color: "rgba(0, 0, 0, 0.38)",
                  },
                },
              }}
            />

            <FormControl sx={{ width: "100%" }} variant="outlined">
              <InputLabel
                sx={{ backgroundColor: "white", padding: "0 .5rem" }}
                htmlFor="filled-adornment-password"
              >
                Date
              </InputLabel>
              <FilledInput
                disabled
                style={{
                  marginBottom: 15,
                  borderRadius: "4px",
                  backgroundColor: "white",
                }}
                value={selectedDate}
                sx={{
                  fontSize: "14px",
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#c5d2cb",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "rgba(0, 0, 0, 0.60)",
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
                    fontSize: "14px",
                  },
                  input: {
                    fontSize: "14px",
                    padding: "16.5px 14px",
                  },
                  "&.MuiInputBase-root": {
                    borderColor: "#c5d2cb",
                    border: "1px solid #c5d2cb",
                    paddingRight: "0",
                    "::before": {
                      //   borderBottom: "none !important",
                      display: "none",
                    },
                    "::after": {
                      //   borderBottom: "none !important",
                      display: "none",
                    },
                  },
                }}
                type={"text"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="go to change date"
                      onClick={() => setCurrentState("selectDate")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_1057_21234)">
                          <path
                            d="M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z"
                            stroke="#369D9C"
                            stroke-width="0.75"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16.5 2.25V5.25"
                            stroke="#369D9C"
                            stroke-width="0.75"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.5 2.25V5.25"
                            stroke="#369D9C"
                            stroke-width="0.75"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.75 8.25H20.25"
                            stroke="#369D9C"
                            stroke-width="0.75"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12 13.125C12.4142 13.125 12.75 12.7892 12.75 12.375C12.75 11.9608 12.4142 11.625 12 11.625C11.5858 11.625 11.25 11.9608 11.25 12.375C11.25 12.7892 11.5858 13.125 12 13.125Z"
                            fill="#369D9C"
                          />
                          <path
                            d="M16.125 13.125C16.5392 13.125 16.875 12.7892 16.875 12.375C16.875 11.9608 16.5392 11.625 16.125 11.625C15.7108 11.625 15.375 11.9608 15.375 12.375C15.375 12.7892 15.7108 13.125 16.125 13.125Z"
                            fill="#369D9C"
                          />
                          <path
                            d="M7.875 16.875C8.28921 16.875 8.625 16.5392 8.625 16.125C8.625 15.7108 8.28921 15.375 7.875 15.375C7.46079 15.375 7.125 15.7108 7.125 16.125C7.125 16.5392 7.46079 16.875 7.875 16.875Z"
                            fill="#369D9C"
                          />
                          <path
                            d="M12 16.875C12.4142 16.875 12.75 16.5392 12.75 16.125C12.75 15.7108 12.4142 15.375 12 15.375C11.5858 15.375 11.25 15.7108 11.25 16.125C11.25 16.5392 11.5858 16.875 12 16.875Z"
                            fill="#369D9C"
                          />
                          <path
                            d="M16.125 16.875C16.5392 16.875 16.875 16.5392 16.875 16.125C16.875 15.7108 16.5392 15.375 16.125 15.375C15.7108 15.375 15.375 15.7108 15.375 16.125C15.375 16.5392 15.7108 16.875 16.125 16.875Z"
                            fill="#369D9C"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1057_21234">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <CustomField
              label="Mobile number"
              value={mobileNo}
              onChange={handleMobileNo}
              fullWidth={true}
              sx={{
                "&.MuiFormControl-root": {
                  mb: "2rem !important",
                },
              }}
            />
            <button
              type="submit"
              variant="contained"
              color="primary"
              onClick={() => setCurrentState("confirmPopup")}
              disabled={!enableConfirm}
              fullwidth
              style={{
                marginTop: "1.5rem",
                width: "max-content",
                padding: "14px 24px",

                borderRadius: 6,
                background: !enableConfirm ? "#E8E8E8" : "",
                backgroundImage: enableConfirm
                  ? "linear-gradient(102deg, #369D9C 0%, #28814D 100%)"
                  : "",
                fontWeight: 500,
                fontSize: "15px",
                fontFamily: "Inter",
                color: !enableConfirm ? "#A2A2A2" : "#FFF",
                border: "1px solid #DDD",
                letterSpacing: "0.5px",
                cursor: "pointer",
              }}
            >
              Confirm
            </button>
          </Box>
        )}
        {currentState === "confirmPopup" && (
          <Box
            sx={{
              width: "500px",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Lottie
              loop
              animationData={confirmAnimation}
              play
              style={{ width: "300px", height: "auto", margin: "auto" }}
            />
            <Typography
              variant="h5"
              mt={".5rem"}
              mb={"1rem"}
              fontFamily={"Inter"}
              width={"100%"}
              align="center"
              fontSize={"20px"}
              sx={{ fontWeight: 600 }}
            >
              Thank You for Booking a Call with Our Expert
            </Typography>
            <Typography
              fontWeight={400}
              fontFamily={"Inter"}
              width={"100%"}
              fontSize={"14px"}
              align="center"
              sx={{ color: "#B1B1B1" }}
              mb={"1rem"}
            >
              Your call with our expert is scheduled. We look forward to
              speaking with you.
            </Typography>
            <button
              type="submit"
              variant="contained"
              color="primary"
              onClick={onClose}
              fullwidth
              style={{
                marginTop: "1.5rem",
                width: "100%",
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
            </button>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default BookCall;
