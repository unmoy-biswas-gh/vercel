import { Dialog, DialogContent } from "@mui/material";
import React from "react";
import Lottie from "react-lottie-player";
import processingAnimation from "../../assets/animation/processing.json";

function UploadingPopup({ open, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        ".MuiPaper-root": {
          borderRadius: "20px",
        },
      }}
    >
      <DialogContent style={{ width: "550px", height: "350px" }}>
        {" "}
        <Lottie
          loop
          animationData={processingAnimation}
          play
          style={{ width: "100%", height: "100%" }}
        />
      </DialogContent>
    </Dialog>
  );
}

export default UploadingPopup;
