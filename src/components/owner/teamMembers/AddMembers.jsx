import {
  Box,
  Modal,
  TextField,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import React, { useState } from "react";
import SuccessModal from "./SuccessModal"; // Import the SuccessModal component

const AddMembers = ({ isOpen, handleClose }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: 700, // Ensure modal max width
    bgcolor: "white",
    borderRadius: "8px",
    boxShadow: 24,
    p: 7,
    display: "flex",
    flexDirection: "column",
  };

  const teamMembers = [
    { id: 1, email: "member1@example.com", role: "can-view" },
    { id: 2, email: "member2@example.com", role: "can-edit" },
    { id: 3, email: "member3@example.com", role: "can-view" },
    { id: 4, email: "member4@example.com", role: "can-edit" },
    { id: 5, email: "member5@example.com", role: "can-edit" },
    { id: 6, email: "member6@example.com", role: "can-edit" },
  ];

  const [emailInputs, setEmailInputs] = useState(teamMembers);
  const [newEmail, setNewEmail] = useState("");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleRoleChange = (id, event) => {
    setEmailInputs((prev) =>
      prev.map((member) =>
        member.id === id ? { ...member, role: event.target.value } : member
      )
    );
  };

  const handleNewEmailChange = (event) => {
    setNewEmail(event.target.value);
  };

  const handleSubmit = () => {
    // Logic to handle form submission, like calling an API with newEmail

    // After submission, close the current modal and open the success modal
    handleClose();
    setIsSuccessModalOpen(true);
  };

  return (
    <>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="team-members_modal-header">
            <h2>Send Invite</h2>

            <div className="team-members_modal-seats">
              <p>Seats</p>
              <p>4/10</p>
            </div>
          </div>

          <div
            className="email-container"
            style={{
              maxHeight: "300px", // Set max height for the scrollable area
              overflowY: "auto", // Enable vertical scrolling
            }}
          >
            {emailInputs.map((member) => (
              <div
                key={member.id}
                style={{
                  marginBottom: "16px",
                  display: "flex",
                  gap: "16px",
                  alignItems: "end",
                }}
              >
                <div style={{ flexGrow: 1 }}>
                  <label
                    htmlFor={`email-${member.id}`}
                    style={{
                      marginBottom: "6px",
                      display: "block",
                      fontSize: "12px",
                      fontWeight: 400,
                      color: "#777777",
                    }}
                  >
                    Email
                  </label>
                  <TextField
                    id={`email-${member.id}`}
                    value={member.email}
                    variant="outlined"
                    sx={{
                      maxWidth: "392px", // Ensure input max width
                      width: "100%", // Input should adapt to available space
                      "& .MuiInputBase-input": {
                        paddingTop: "10px", // Add padding top
                        paddingBottom: "10px", // Add padding bottom
                        fontSize: "14px", // Set font size for large screens
                      },
                    }}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </div>
                <FormControl sx={{ minWidth: 150 }}>
                  <Select
                    value={member.role}
                    onChange={(event) => handleRoleChange(member.id, event)}
                    sx={{
                      borderRadius: "8px",
                      height: "40px",
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
                  >
                    <MenuItem value="can-view" sx={{ fontSize: "14px" }}>
                      Can View
                    </MenuItem>
                    <MenuItem value="can-edit" sx={{ fontSize: "14px" }}>
                      Can Edit
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
            ))}

            <div
              style={{
                marginBottom: "16px",
                display: "flex",
                gap: "16px",
                alignItems: "end",
              }}
            >
              <div style={{ flexGrow: 1 }}>
                <label
                  htmlFor="new-email"
                  style={{
                    marginBottom: "6px",
                    display: "block",
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "#777777",
                  }}
                >
                  Email
                </label>
                <TextField
                  id="new-email"
                  value={newEmail}
                  onChange={handleNewEmailChange}
                  variant="outlined"
                  placeholder="Enter new team member email"
                  sx={{
                    maxWidth: "392px", // Ensure input max width
                    width: "100%", // Input should adapt to available space
                    "& .MuiInputBase-input": {
                      paddingTop: "10px", // Add padding top
                      paddingBottom: "10px", // Add padding bottom
                      fontSize: "14px", // Set font size for large screens
                    },
                  }}
                />
              </div>
              <FormControl sx={{ minWidth: 150 }}>
                <Select
                  value="can-view"
                  sx={{
                    borderRadius: "8px",
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
                >
                  <MenuItem value="can-view" sx={{ fontSize: "12px" }}>
                    Can View
                  </MenuItem>
                  <MenuItem value="can-edit" sx={{ fontSize: "12px" }}>
                    Can Edit
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <div
            style={{
              marginTop: "32px",
              textAlign: "right",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <button onClick={handleSubmit} className="team-members-add_member">
              Send Invite
            </button>
          </div>
        </Box>
      </Modal>

      <SuccessModal
        isOpen={isSuccessModalOpen}
        handleClose={() => setIsSuccessModalOpen(false)}
      />
    </>
  );
};

export default AddMembers;
