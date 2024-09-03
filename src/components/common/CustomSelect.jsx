import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

function CustomSelect({ label, onChange, value, options, sx }) {
  const selectStyles = {
    fontSize: "14px",
    borderColor: "#EEEEEE",
    "& .MuiSelect-select": {
      fontFamily: "Inter",
      borderColor: "#EEEEEE",
      maxHeight: "40px",
      padding: "11px 12px", // Adjust the padding to reduce the size
    },
    "& .MuiInputLabel-root": {
      fontFamily: "Inter",
      fontSize: "14px",
      transform: "translate(12px, 12px) scale(1)", // Adjust the label position
    },
    "& .MuiInputLabel-shrink": {
      transform: "translate(12px, -6px) scale(0.75)", // Adjust the label position when it shrinks
    },
    "& .MuiSelect-icon": {
      fontSize: "24px", // Adjust the size of the select icon
    },
  };

  const [selectValue, setValue] = useState("");

  return (
    <FormControl
      size="small"
      sx={{
        backgroundColor: "white",
        fontSize: "16px",
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            borderColor: "#369D9C",
          },
          maxHeight: "56px",
        },
        "& .MuiInputLabel-root": {
          fontSize: "12px",
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "#369D9C", // Focused label color
          // fontSize: "14px",
        },
        "& .MuiFormHelperText-root": {
          color: "red", // Custom helper text color
        },
        "& .MuiInputLabel-root": {
          fontFamily: "Inter",
          fontSize: "14px",
        },
        ".MuiSelect-select": {
          // padding: "14px !important",
          fontSize: "14px",
        },
        "& MuiInputBase-root .MuiOutlinedInput-input": {
          padding: "14px !important",
        },
        ...sx,
      }}
    >
      <InputLabel id={label} sx={{ fontSize: "14px" }}>
        {label}
      </InputLabel>
      <Select
        labelId={label}
        id="demo-simple-select"
        label={label}
        value={selectValue}
        sx={selectStyles}
        onChange={onChange ? onChange : (e) => setValue(e.target.value)}
      >
        {options.map((item) => (
          <MenuItem value={item.value} sx={{ fontFamily: "Inter" }}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CustomSelect;
