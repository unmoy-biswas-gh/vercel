import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

function CustomSelect({ label, onChange, value, options, sx }) {
  const [selectValue, setValue] = useState("");
  return (
    <FormControl
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
        sx={{ fontSize: "14px" }}
        onChange={onChange ? onChange : (e) => setValue(e.target.value)}
      >
        {options.map((item) => {
          return (
            <MenuItem value={item.value} sx={{ fontFamily: "Inter" }}>
              {item.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default CustomSelect;
