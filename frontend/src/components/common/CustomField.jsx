import { TextField } from "@mui/material";
import React from "react";

function CustomField({ sx, fullWidth, label, value, onChange, required }) {
  return (
    <TextField
      fullWidth={fullWidth}
      label={label}
      variant="outlined"
      required={required}
      size="medium"
      type="email"
      value={value}
      onChange={onChange}
      // error={error.email}
      // helperText={helperText.email}
      style={{
        marginBottom: 15,
        borderRadius: "10px",
        backgroundColor: "white",
      }}
      sx={{
        fontSize: "14px",
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
          padding: "14px",
        },
        "& .MuiInputLabel-root": {
          fontFamily: "Inter",
          fontSize: "14px",
        },
        input: {
          fontSize: "14px",
        },
        ...sx,
      }}
    />
  );
}

export default CustomField;
