import {
  FormControl,
  MenuItem,
  Select,
  Divider,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import "./teamMembers.css";
import trash from "../../../assets/trash.svg";

const AllMembers = () => {
  const [selectedValues, setSelectedValues] = useState({});

  const rows = [
    {
      id: 1,
      name: "Item 1",
      description: "Description 1",
      price: "$10",
      owner: true,
    },
    {
      id: 2,
      name: "Item 2",
      description: "Description 2",
      price: "$20",
      owner: false,
    },
    {
      id: 3,
      name: "Item 3",
      description: "Description 3",
      price: "$30",
      owner: false,
    },
    {
      id: 4,
      name: "Item 3",
      description: "Description 3",
      price: "$30",
      owner: false,
    },
  ];

  const heading = ["Member Name", "Email", "Last Active On", ""];

  const handleChange = (id, event) => {
    setSelectedValues((prev) => ({
      ...prev,
      [id]: event.target.value,
    }));
  };

  const renderSelectedValue = (value) => {
    switch (value) {
      case "can-view":
        return "Can View";
      case "can-edit":
        return "Can Edit";
      case "remove":
        return "Removed";
      default:
        return "Can View";
    }
  };

  return (
    // <TableContainer
    //   sx={{
    //     height: "100%",
    //     width: "100%",
    //     display: "flex",
    //     flexDirection: "column",
    //   }}
    // >
    //   <Table
    //     stickyHeader
    //     aria-label="custom table"
    //     sx={{
    //       borderCollapse: "separate",
    //       borderSpacing: "0 10px",
    //     }}
    //   >
    //     <TableHead>
    //       <TableRow>
    //         {heading.map((item) => (
    //           <TableCell
    //             key={item}
    //             className="table_header_cell"
    //             sx={{
    //               color: "#8A8686CC",
    //               padding: "18px",
    //               fontWeight: {
    //                 lg: "400",
    //               },
    //               fontSize: {
    //                 lg: "15px",
    //               },
    //             }}
    //           >
    //             {item}
    //           </TableCell>
    //         ))}
    //       </TableRow>
    //     </TableHead>

    //     <TableBody>
    //       {rows.map((row) => (
    //         <TableRow
    //           key={row.id}
    //           sx={{
    //             border: "1px solid #eeeeee",
    //           }}
    //         >
    //           <TableCell
    //             scope="row"
    //             sx={{
    //               padding: "18px", // Custom padding for cells
    //               fontWeight: {
    //                 lg: "400",
    //               },
    //               fontSize: {
    //                 lg: "15px",
    //               },
    //             }}
    //           >
    //             {row.name}
    //           </TableCell>
    //           <TableCell
    //             sx={{
    //               padding: "18px",
    //               fontWeight: {
    //                 lg: "400",
    //               },
    //               fontSize: {
    //                 lg: "15px",
    //               },
    //             }}
    //           >
    //             {row.description}
    //           </TableCell>
    //           <TableCell
    //             sx={{
    //               padding: "18px",
    //               fontWeight: {
    //                 lg: "400",
    //               },
    //               fontSize: {
    //                 lg: "15px",
    //               },
    //             }}
    //           >
    //             {row.price}
    //           </TableCell>
    //           <TableCell
    //             sx={{
    //               padding: "18px",
    //               width: "50px",
    //               textAlign: "center",
    //               fontWeight: {
    //                 lg: "400",
    //               },
    //               fontSize: {
    //                 lg: "15px",
    //               },
    //               verticalAlign: "middle", // Ensure vertical alignment
    //             }}
    //           >
    //             {row.owner ? (
    //               <span>Owner</span>
    //             ) : (
    //               <FormControl
    //                 sx={{
    //                   maxWidth: "120",
    //                   maxHeight: "38px",
    //                 }}
    //                 fullWidth
    //               >
    //                 <Select
    //                   value={selectedValues[row.id] || ""}
    //                   onChange={(event) => handleChange(row.id, event)}
    //                   renderValue={(value) => renderSelectedValue(value)}
    //                   displayEmpty
    //                   sx={{
    //                     backgroundColor: "#E9FFF2",
    //                     borderRadius: "8px",
    //                     border: "1px solid #D4D4D4",
    //                     height: "38px",
    //                     fontSize: {
    //                       lg: "14px",
    //                     },
    //                     "& .MuiSelect-select": {
    //                       padding: "8px 14px",
    //                       display: "flex",
    //                       alignItems: "center",
    //                     },
    //                     "& .MuiSvgIcon-root": {
    //                       right: "8px",
    //                     },
    //                   }}
    //                   MenuProps={{
    //                     PaperProps: {
    //                       sx: {
    //                         borderRadius: "8px", // Set border radius for the dropdown
    //                       },
    //                     },
    //                   }}
    //                 >
    //                   <MenuItem
    //                     value="can-view"
    //                     sx={{
    //                       fontSize: "12px",
    //                     }}
    //                   >
    //                     <ListItemIcon>
    //                       {selectedValues[row.id] === "can-view" && (
    //                         <CheckIcon fontSize="small" />
    //                       )}
    //                     </ListItemIcon>
    //                     <ListItemText primary="Can View" />
    //                   </MenuItem>
    //                   <MenuItem
    //                     value="can-edit"
    //                     sx={{
    //                       fontSize: "12px",
    //                     }}
    //                   >
    //                     <ListItemIcon>
    //                       {selectedValues[row.id] === "can-edit" && (
    //                         <CheckIcon fontSize="small" />
    //                       )}
    //                     </ListItemIcon>
    //                     <ListItemText primary="Can Edit" />
    //                   </MenuItem>
    //                   <Divider />
    //                   <MenuItem
    //                     value="remove"
    //                     sx={{ color: "red", fontSize: "12px" }}
    //                   >
    //                     <ListItemIcon>
    //                       <img
    //                         src={trash}
    //                         alt="Delete"
    //                         height={15}
    //                         width={15}
    //                       />
    //                     </ListItemIcon>
    //                     <ListItemText primary="Remove" />
    //                   </MenuItem>
    //                 </Select>
    //               </FormControl>
    //             )}
    //           </TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>

    <div class="table-container">
      <div class="table">
        <div class="table-row table-header">
          {heading.map((item) => (
            <div key={item} class="table-cell">
              {item}
            </div>
          ))}
        </div>

        {rows.map((item) => (
          <div key={item.id} class="table-row">
            <div class="table-cell">{item.name}</div>
            <div class="table-cell">{item.description}</div>
            <div class="table-cell">{item.price}</div>
            <div class="table-cell">
              {item.owner ? (
                <span>Owner</span>
              ) : (
                <FormControl
                  sx={{
                    maxWidth: "120px",
                    maxHeight: "38px",
                  }}
                  fullWidth
                >
                  <Select
                    value={selectedValues[item.id] || ""}
                    onChange={(event) => handleChange(item.id, event)}
                    renderValue={(value) => renderSelectedValue(value)}
                    displayEmpty
                    sx={{
                      backgroundColor: "#E9FFF2",
                      borderRadius: "8px",
                      border: "1px solid #D4D4D4",
                      height: "38px",
                      fontSize: {
                        lg: "14px",
                      },
                      "& .MuiSelect-select": {
                        padding: "8px 14px",
                        display: "flex",
                        alignItems: "center",
                      },
                      "& .MuiSvgIcon-root": {
                        right: "8px",
                      },
                    }}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          borderRadius: "8px", // Set border radius for the dropdown
                        },
                      },
                    }}
                  >
                    <MenuItem
                      value="can-view"
                      sx={{
                        fontSize: "12px",
                      }}
                    >
                      <ListItemIcon>
                        {selectedValues[item.id] === "can-view" && (
                          <CheckIcon fontSize="small" />
                        )}
                      </ListItemIcon>
                      <ListItemText primary="Can View" />
                    </MenuItem>
                    <MenuItem
                      value="can-edit"
                      sx={{
                        fontSize: "12px",
                      }}
                    >
                      <ListItemIcon>
                        {selectedValues[item.id] === "can-edit" && (
                          <CheckIcon fontSize="small" />
                        )}
                      </ListItemIcon>
                      <ListItemText primary="Can Edit" />
                    </MenuItem>
                    <Divider />
                    <MenuItem
                      value="remove"
                      sx={{ color: "red", fontSize: "12px" }}
                    >
                      <ListItemIcon>
                        <img src={trash} alt="Delete" height={15} width={15} />
                      </ListItemIcon>
                      <ListItemText primary="Remove" />
                    </MenuItem>
                  </Select>
                </FormControl>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMembers;
