import React, { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import work from "../../assets/Work.png";
import upload2 from "../../assets/up.jpg";
import ImageModal from "../common/ImageModal";

const CircularIcon = styled(Box)(({ theme }) => ({
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  border: "2px solid #43BAB9",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#F0F8F8",
  marginBottom: "20px",
}));

const UploadLogo = ({ imageSelected }) => {
  // const [logo, setLogo] = useState(null);
  const profileAvatar = useRef();
  const [imageApi, setImageApi] = useState(null);
  const [userProfile, setUserProfile] = useState(null);

  const [openImageResizer, SetOpenImageResizer] = useState(false);
  const [key, setKey] = useState(0);

  const onFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setUserProfile(reader.result?.toString() || "");
        SetOpenImageResizer(true);
      });
      reader.readAsDataURL(e.target.files[0]);

      // Reset the file input
      e.target.value = "";
      setKey((prevKey) => prevKey + 1);
    }
  };

  useEffect(() => {
    imageApi && imageSelected(true);
  }, [imageApi]);

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <ImageModal
        open={openImageResizer}
        setOpen={SetOpenImageResizer}
        imageUrl={userProfile}
        setImageUrl={setUserProfile}
        setImageApi={setImageApi}
      />
      <CircularIcon sx={{ width: "100px", height: "100px" }}>
        {imageApi ? (
          <img
            src={imageApi}
            alt="Logo"
            onClick={() =>
              profileAvatar.current && profileAvatar.current.click()
            }
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          />
        ) : (
          <img
            src={work}
            alt="Logo"
            onClick={() =>
              profileAvatar.current && profileAvatar.current.click()
            }
            style={{ width: "40px", height: "40px", cursor: "pointer" }}
          />
        )}
      </CircularIcon>
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="upload-button"
        type="file"
        ref={profileAvatar}
        onChange={onFileChange}
      />
      <label htmlFor="upload-button" style={{ cursor: "pointer" }}>
        <Box
          style={{
            padding: "0 0px",
            width: 209,
            height: 42,
            border: "1px solid rgba(70, 95, 241, 0.40)",
            borderRadius: "8px",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1rem",
            display: "flex",
            cursor: "pointer",
          }}
        >
          <img
            src={upload2}
            alt=""
            style={{ marginRight: "10px", width: "20px" }}
          />
          <Typography
            variant="body1"
            style={{
              fontSize: "15px",
              fontFamily: "Inter",
              fontWeight: 500,
            }}
          >
            {imageApi ? "Re upload" : "Upload Logo"}
          </Typography>
        </Box>
      </label>
    </Box>
  );
};

export default UploadLogo;
