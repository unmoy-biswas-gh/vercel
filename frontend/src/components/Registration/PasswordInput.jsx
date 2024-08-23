import React, { useState } from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const PasswordInput = ({ value, onChange, error, helperText }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <TextField
      type={showPassword ? "text" : "password"}
      label="Create Password"
      variant="outlined"
      fullWidth
      required
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      sx={{
        fontSize: "14px",
        backgroundColor: "white",

        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            borderColor: "#369D9C",
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
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordInput;
