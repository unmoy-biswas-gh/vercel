import { MenuItem, Select } from "@mui/material";
import React from "react";
import chevronDown from "../../assets/sustainabilityReport/chevronDown.svg";

const ArrowComponent = () => {
  return <img src={chevronDown} alt="Arrow" height={4} width={8} />;
};

const SelectFilter = ({
  options,
  value,
  onChange,
  placeholder,
  fontSize = "11px",
  fontWeight = "500",
}) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      displayEmpty
      inputProps={{ "aria-label": "Without label" }}
      sx={{
        border: "none", // Remove border
        boxShadow: "none", // Remove shadow
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none", // Remove border outline
        },
        "& .MuiSelect-select": {
          padding: 0, // Adjust padding if needed
          fontSize: fontSize,
          fontWeight: fontWeight,
        },
        "& .MuiSelect-select.MuiSelect-outlined": {
          paddingRight: "4px", // Adjust padding if needed
        },
      }}
      MenuProps={{
        PaperProps: {
          sx: {
            "& .MuiMenuItem-root": {
              fontSize: "12px", // Adjust font size of the menu items
            },
          },
        },
      }}
      // IconComponent={ArrowComponent}
    >
      <MenuItem value="" disabled>
        {placeholder}
      </MenuItem>
      {options.map((item) => (
        <MenuItem key={item.name} value={item.value}>
          {item.name}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectFilter;
