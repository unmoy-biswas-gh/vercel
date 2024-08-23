import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Dialog,
  DialogContent,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import pic from "../../assets/gesh.png";
import gate from "../../assets/gate.jpg";
import OnboardingCompleteSVG from "../../assets/Onboarding.svg";
import del from "../../assets/trash.svg";
import check from "../../assets/check.svg";
import DeleteIcon from "@mui/icons-material/Delete";

const InviteTeam = () => {
  const [teamMembers, setTeamMembers] = useState([
    { name: "", email: "", role: "Can Edit" },
  ]);
  const [open, setOpen] = useState(false);

  const handleInputChange = (index, field, value) => {
    const updatedMembers = [...teamMembers];
    updatedMembers[index][field] = value;
    setTeamMembers(updatedMembers);

    if (field === "email" && value !== "" && index === teamMembers.length - 1) {
      setTeamMembers([
        ...teamMembers,
        { name: "", email: "", role: "Can Edit" },
      ]);
    }
  };

  const handleDropChange = (index, event) => {
    const updatedMembers = [...teamMembers];
    updatedMembers[index].role = event.target.value;
    setTeamMembers(updatedMembers);
    console.log(event.target.value);
    if (event.target.value === "Remove") {
      handleRemoveField(index);
    } else {
      console.error("error");
    }
  };

  const handleRemoveField = (index) => {
    const updatedMembers = teamMembers.filter((_, i) => i !== index);
    setTeamMembers(updatedMembers);
    console.log(index);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    let timer;
    if (open) {
      timer = setTimeout(() => {
        handleClose();
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [open]);

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
            backgroundImage: `linear-gradient(to bottom, rgba(0,26,0,0.5), rgba(0,26,0,0.5)), url(${gate})`,
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
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box style={{ maxWidth: "500px", width: "100%", padding: "20px" }}>
            <Box
              style={{
                position: "absolute",
                top: "40px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "100%",
                maxWidth: "500px",
                textAlign: "left",
              }}
            >
              <img
                src={pic}
                alt="Logo"
                style={{ width: "100px", marginBottom: "20px" }}
              />
              <Typography
                variant="h1"
                style={{
                  fontFamily: "Inter",
                  fontSize: "36px",
                  fontWeight: 700,
                  marginBottom: "2rem",
                }}
              >
                Invite Team Members
              </Typography>
              <Typography
                variant="body1"
                style={{
                  marginTop: "16px",
                  marginBottom: "4rem",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "16px",
                  color: "#8692A6",
                }}
              >
                {`${teamMembers.length}/10`}
              </Typography>
            </Box>

            {teamMembers.map((member, index) => (
              <Box
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <TextField
                  label="Name"
                  variant="outlined"
                  value={member.name}
                  onChange={(e) =>
                    handleInputChange(index, "name", e.target.value)
                  }
                  style={{ width: "32%" }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderRadius: "8px",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#369D9C",
                        borderRadius: "8px",
                      },
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
                  label="Email"
                  variant="outlined"
                  type="email"
                  value={member.email}
                  onChange={(e) =>
                    handleInputChange(index, "email", e.target.value)
                  }
                  style={{
                    width: "32%",
                    marginLeft: "2%",
                    borderRadius: "8px",
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderRadius: "8px",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#369D9C",
                        borderRadius: "8px",
                      },
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
                  style={{ width: "32%", marginLeft: "2%" }}
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
                  <InputLabel id={`select-label-${index}`}>Select</InputLabel>
                  <Select
                    labelId={`select-label-${index}`}
                    id={`select-${index}`}
                    label="Select"
                    value={member.role}
                    onChange={(e) => handleDropChange(index, e)}
                    style={{
                      borderRadius: "8px",
                    }}
                    renderValue={(selected) => selected}
                    MenuProps={{
                      PaperProps: {
                        style: {
                          border: "1px solid #DDD", // Change the border color here
                          borderRadius: "8px",
                          boxShadow: "none",
                          fontWeight: "bold",
                          fontFamily: "Inter",
                        },
                      },
                    }}
                  >
                    <MenuItem sx={{ fontFamily: "Inter" }} value="Can Edit">
                      <ListItemIcon>
                        <img
                          src={check}
                          alt="check"
                          style={{
                            visibility:
                              member.role === "Can Edit" ? "visible" : "hidden",
                            width: "24px",
                            height: "24px",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Can Edit" />
                    </MenuItem>
                    <MenuItem sx={{ fontFamily: "Inter" }} value="Can View">
                      <ListItemIcon>
                        <img
                          src={check}
                          alt="check"
                          style={{
                            visibility:
                              member.role === "Can View" ? "visible" : "hidden",
                            width: "24px",
                            height: "24px",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="Can View" />
                    </MenuItem>
                    <MenuItem sx={{ fontFamily: "Inter" }} disabled>
                      <hr
                        fullwidth
                        style={{ width: "100%", margin: "8px 0" }}
                      />
                    </MenuItem>
                    {index !== 0 && (
                      <MenuItem
                        onClick={(e) => {
                          // e.stopPropagation(); // Prevent the select from opening
                          // handleRemoveField(index);
                        }}
                        value="Remove"
                        style={{
                          color: "#EC4458",
                          fontWeight: 500,
                          fontSize: 11,
                          letterSpacing: "0.026px",
                          lineHeight: "140%",
                          fontFamily: "Inter",
                        }}
                      >
                        <ListItemIcon>
                          <img
                            src={del}
                            alt="delete"
                            style={{ width: "24px", height: "24px" }}
                          />
                        </ListItemIcon>
                        <ListItemText primary="Remove" />
                      </MenuItem>
                    )}
                  </Select>
                </FormControl>
              </Box>
            ))}
            <hr
              style={{
                border: "none",
                borderTop: "1px solid #e0e0e0",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            />
            <button
              onClick={handleClickOpen}
              variant="contained"
              color="primary"
              fullwidth
              style={{
                position: "absolute",
                bottom: "40px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "500px",
                padding: "16px 24px",
                borderRadius: 6,
                backgroundImage:
                  "linear-gradient(102deg, #369D9C 0%, #28814D 100%)",
                fontWeight: 900,
                fontSize: "16px",
                fontFamily: "Inter",
                color: "#FFF",
                border: "1px solid #DDD",
                letterSpacing: "0.5px",
                cursor: "pointer",
                zIndex: 1000,
              }}
            >
              Invite All
            </button>

            <Dialog
              open={open}
              onClose={handleClose}
              sx={{
                ".MuiDialog-container": {
                  background: "rgba(0, 0, 0, 0.80)",
                  backdropFilter: "blur(6px)",
                },
              }}
            >
              <DialogContent style={{ borderRadius: "10px" }}>
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
                      fontWeight: 700,
                      fontFamily: "Inter",
                      marginTop: "1.5rem",
                    }}
                  >
                    Onboarding Complete
                  </Typography>
                </Box>
              </DialogContent>
            </Dialog>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InviteTeam;
