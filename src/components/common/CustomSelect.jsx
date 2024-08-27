import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

function CustomSelect({ label, onChange, value, options, sx }) {
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
          fontSize: "16px",
        },
        ".MuiSelect-select": {
          // padding: "14px !important",
        },
        "& MuiInputBase-root .MuiOutlinedInput-input": {
          padding: "14px !important",
        },
        ...sx,
      }}
    >
      <InputLabel id="demo-simple-select-label" sx={{ fontSize: "14px" }}>
        {label}
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={label}
        value={selectValue}
        sx={{
          fontSize: "16px",
          fontFamily: "Inter",
          maxHeight: "56px",
          height: "100%",
          // padding: "14px !important",
          "& MuiInputBase-root .MuiOutlinedInput-input": {
            padding: "14px !important",
          },
        }}
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
