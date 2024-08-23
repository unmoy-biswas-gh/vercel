import { Box, Modal, Button } from "@mui/material";
import React from "react";
import sent from "../../../assets/inviteSent.png";
import { useNavigate } from "react-router-dom";

const SuccessModal = ({ isOpen, handleClose }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    handleClose();
    navigate("/owner/dashboard");
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="success-modal-title"
      aria-describedby="success-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          maxWidth: 650,
          bgcolor: "white",
          borderRadius: "8px",
          boxShadow: 24,
          p: 10,
          textAlign: "center",
        }}
      >
        <img src={sent} alt="Success" className="success_image" style={{}} />
        <h2 className="invite_sent">Invite Request Sent</h2>

        <Button
          onClick={handleRedirect}
          sx={{
            width: "100%",
            mt: 4,
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

export default SuccessModal;
