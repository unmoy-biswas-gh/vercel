import {
  IconButton,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import threeDots from "../../../assets/threeDots.svg";
import edit from "../../../assets/edit.svg";
import trash from "../../../assets/trash.svg";

const PendingMembers = () => {
  const rows = [
    {
      id: 1,
      name: "Item 1",
      description: "Pending 1",
      price: "$10",
      owner: true,
    },
    {
      id: 2,
      name: "Item 2",
      description: "Pending 2",
      price: "$20",
    },
    {
      id: 3,
      name: "Item 3",
      description: "Pending 3",
      price: "$30",
    },
    {
      id: 4,
      name: "Item 3",
      description: "Pending 3",
      price: "$30",
    },
  ];

  const heading = ["Member Name", "Email", "Invite Date", ""];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
    //             "&:last-child": {
    //               whiteSpace: "nowrap",
    //               width: "1%",
    //             },
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
    //             }}
    //           >
    //             <div>
    //               <IconButton
    //                 aria-label="more"
    //                 id="long-button"
    //                 aria-controls={open ? "long-menu" : undefined}
    //                 aria-expanded={open ? "true" : undefined}
    //                 aria-haspopup="true"
    //                 onClick={handleClick}
    //               >
    //                 <img src={threeDots} alt="Options" height={30} width={30} />
    //               </IconButton>
    //               <Menu
    //                 id="long-menu"
    //                 MenuListProps={{
    //                   "aria-labelledby": "long-button",
    //                 }}
    //                 anchorEl={anchorEl}
    //                 open={open}
    //                 onClose={handleClose}
    //                 anchorOrigin={{
    //                   vertical: "bottom",
    //                   horizontal: "right",
    //                 }}
    //                 transformOrigin={{
    //                   vertical: "top",
    //                   horizontal: "right",
    //                 }}
    //                 slotProps={{
    //                   paper: {
    //                     sx: {
    //                       borderRadius: "12px", // Set border radius to 12px
    //                       border: "1px solid #8A8686CC",
    //                       boxShadow: "none", // Ensure all shadows are removed
    //                     },
    //                   },
    //                 }}
    //               >
    //                 <MenuItem
    //                   onClick={handleClose}
    //                   sx={{
    //                     fontSize: {
    //                       lg: "12px",
    //                     },
    //                   }}
    //                 >
    //                   <ListItemIcon>
    //                     <img src={edit} alt="Edit" height={18} width={18} />
    //                   </ListItemIcon>
    //                   <ListItemText primary="Edit" />
    //                 </MenuItem>
    //                 <Divider />
    //                 <MenuItem
    //                   onClick={handleClose}
    //                   sx={{
    //                     color: "red",
    //                     fontSize: {
    //                       lg: "12px",
    //                     },
    //                   }}
    //                 >
    //                   <ListItemIcon>
    //                     <img src={trash} alt="Remove" height={18} width={18} />
    //                   </ListItemIcon>
    //                   <ListItemText primary="Remove" />
    //                 </MenuItem>
    //               </Menu>
    //             </div>
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
            <div className="table-cell">
              <div>
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? "long-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <img src={threeDots} alt="Options" height={30} width={30} />
                </IconButton>
                <Menu
                  id="long-menu"
                  MenuListProps={{
                    "aria-labelledby": "long-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  slotProps={{
                    paper: {
                      sx: {
                        borderRadius: "12px", // Set border radius to 12px
                        border: "1px solid #8A8686CC",
                        boxShadow: "none", // Ensure all shadows are removed
                      },
                    },
                  }}
                >
                  <MenuItem
                    onClick={handleClose}
                    sx={{
                      fontSize: {
                        lg: "12px",
                      },
                    }}
                  >
                    <ListItemIcon>
                      <img src={edit} alt="Edit" height={18} width={18} />
                    </ListItemIcon>
                    <ListItemText primary="Edit" />
                  </MenuItem>
                  <Divider />
                  <MenuItem
                    onClick={handleClose}
                    sx={{
                      color: "red",
                      fontSize: {
                        lg: "12px",
                      },
                    }}
                  >
                    <ListItemIcon>
                      <img src={trash} alt="Remove" height={18} width={18} />
                    </ListItemIcon>
                    <ListItemText primary="Remove" />
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingMembers;
