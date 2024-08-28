import { Box, Button, Modal } from "@mui/material";
import sent from "../../assets/inviteSent.png";
import React from "react";
import { useNavigate } from "react-router-dom";

const PasswordChangedModal = ({ isOpen, close }) => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    close();
    navigate("/owner/dashboard");
  };

  return (
    <Modal
      open={isOpen}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          maxWidth: 600,
          bgcolor: "white",
          borderRadius: "8px",
          boxShadow: 24,
          p: 8,
          textAlign: "center",
        }}
      >
        <img src={sent} alt="Success" className="success_image" />
        <h2 className="password_changed">Your Password have beed changed</h2>

        <Button
          onClick={handleRedirect}
          sx={{
            width: "100%",
            mt: 2,
            background: "linear-gradient(102deg, #369d9c 0%, #28814d 100%);",
            color: "#fff",
            padding: 2,
          }}
        >
          Go to Dashboard
        </Button>
      </Box>
    </Modal>
  );
};

export default PasswordChangedModal;
