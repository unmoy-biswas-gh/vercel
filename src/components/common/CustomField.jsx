import { TextField } from "@mui/material";
import React from "react";

function CustomField({ sx, fullWidth, label, value, onChange, required }) {
  const styles = {
    fontSize: "14px",
    borderColor: "#EEEEEE",
    "& .MuiOutlinedInput-root": {
      borderRadius: "5px",
      "&.Mui-focused fieldset": {},
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
      borderColor: "#EEEEEE",
      maxHeight: "40px",
      padding: "10px 12px", // Adjust the padding to reduce the size
    },
    "& .MuiInputLabel-root": {
      fontFamily: "Inter",
      fontSize: "14px",
      transform: "translate(12px, 12px) scale(1)", // Adjust the label position
    },
    "& .MuiInputLabel-shrink": {
      transform: "translate(12px, -6px) scale(0.75)", // Adjust the label position when it shrinks
    },
  };

  return (
    <TextField
      fullWidth={fullWidth} // Corrected `fullWidth` prop name
      label={label}
      variant="outlined"
      required={required}
      size="small"
      type="email"
      value={value}
      onChange={onChange}
      style={{
        marginBottom: "24px",
        borderRadius: "10px",
        backgroundColor: "white",
      }}
      // sx={{
      //   maxWidth: "246px",
      //   //  maxHeight: "56px",
      //   "& .MuiOutlinedInput-root": {
      //     "&.Mui-focused fieldset": {
      //       borderColor: "#369D9C",
      //     },
      //   },
      //   "& .MuiInputLabel-root": {
      //     fontFamily: "Inter",
      //     fontSize: "14px", // Default font size for label
      //   },
      //   "& .MuiInputLabel-root.Mui-focused": {
      //     color: "rgba(0, 0, 0, 0.60)",
      //     fontFamily: "Inter",
      //     // fontSize: "12px", // Font size when label is floating
      //   },
      //   "& .MuiInputBase-input": {
      //     fontFamily: "Inter",
      //     fontSize: "14px",
      //   },
      //   ...sx,
      // }}
      sx={{ ...styles, ...sx }}
    />
  );
}

export default CustomField;
