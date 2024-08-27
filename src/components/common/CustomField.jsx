import { TextField } from "@mui/material";
import React from "react";

function CustomField({ sx, fullWidth, label, value, onChange, required }) {
  return (
    <TextField
      fullWidth={fullWidth} // Corrected `fullWidth` prop name
      label={label}
      variant="outlined"
      required={required}
      size="medium"
      type="email"
      value={value}
      onChange={onChange}
      style={{
        marginBottom: "24px",
        borderRadius: "10px",
        backgroundColor: "white",
      }}
      sx={{
        maxWidth: "246px",
        //  maxHeight: "56px",
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            borderColor: "#369D9C",
          },
          height: "56px", // Ensures consistent height
        },
        "& .MuiInputLabel-root": {
          fontFamily: "Inter",
          // fontSize: "14px", // Default font size for label
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "rgba(0, 0, 0, 0.60)",
          fontFamily: "Inter",
          // fontSize: "12px", // Font size when label is floating
        },
        "& .MuiInputBase-input": {
          fontFamily: "Inter",
          fontSize: "16px",
          padding: "16px 14px", // Padding inside text field
          height: "56px", // Ensures consistent height
          boxSizing: "border-box",
        },
        ...sx,
      }}
    />
  );
}

export default CustomField;
