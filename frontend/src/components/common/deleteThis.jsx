import React, { useEffect, useRef, useState, useCallback } from "react";
import "./DoctorDetails.css";
import userimage from "../../assets/images/user.webp";
import {
  getDoctor,
  getDoctorSpecialization,
  updateDoctor,
  updateDoctorImage,
} from "../../api/doctor";
import { useAuth } from "../context/AuthContext";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import { Autocomplete } from "@mui/material";
import useAppContext from "../context/AppContext";
import ImageModal from "./ImageModal";

const StyledChip = styled(Chip)({
  "&.MuiChip-root": {
    backgroundColor: "#E6EBED",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: "400",
  },
});

const DoctorDetails = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [education, setEducation] = useState("");
  const [registrationNumber, setregistrationNumber] = useState("");
  const [bio, setBio] = useState("");
  const [boardName, setBoardName] = useState("");
  const [exp, setExp] = useState("");
  const [speciality, setSpeciality] = useState([]);
  const fileInputRef = useRef(null);
  const [doctorDetails, setDoctorDetails] = useState({});
  const [isEditEnabled, setIsEditEnabled] = useState(false);
  const [initialData, setInitialData] = useState({});
  const { setSnackbar } = useAppContext();
  const [imageUrl, setImageUrl] = useState(null);
  const [imageApi, setImageApi] = useState(null);
  const [openImageResizer, SetOpenImageResizer] = useState(false);
  const { setReloadUser } = useAuth();
  const [key, setKey] = useState(0);
  const [specialitiesList, setSpecialityList] = useState([]);

  async function getSpeacialityList() {
    const response = await getDoctorSpecialization();
    // console.log(response);
    if (response?.status === 200) {
      setSpecialityList(response.data.data.Specialization);
    } else {
      setSnackbar({
        open: true,
        severity: "error",
        message: "Error fetching clinics",
      });
    }
  }
  useEffect(() => {
    getSpeacialityList();
  }, []);
  const fetchdoctors = () => {
    getDoctor()
      .then((res) => {
        console.log("DoctorDetails->useEffect", res.data);
        setDoctorDetails(res.data);
        setInitialData(res.data);
        setEmail(res.data?.email);
        setPhoneNumber(res.data?.phone);
        setEducation(res.data?.education);
        setregistrationNumber(res.data?.registrationNumber);
        setExp(res.data?.experience);
        setSpeciality(res.data?.speciality);
        setName(res.data?.name);
        setBoardName(res.data?.boardName);
        setBio(res.data?.bio);
        setImageApi(res.data?.image?.fileUrl);

        // console.log(first)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchdoctors();
  }, []);

  function onChangeInput(e) {
    const name = e.target.name;
    setIsEditEnabled(true);
    if (name === "name") {
      const value = e.target.value;
      setDoctorDetails((prev) => {
        return {
          ...(prev != null ? prev : doctorDetails),
          [name]: value,
        };
      });
      setName(e.target.value);
    } else if (name === "email") {
      const value = e.target.value;
      setDoctorDetails((prev) => {
        return {
          ...(prev != null ? prev : doctorDetails),
          [name]: value,
        };
      });
      setEmail(e.target.value);
    } else if (name === "phone") {
      const value = e.target.value;
      setDoctorDetails((prev) => {
        return {
          ...(prev != null ? prev : doctorDetails),
          [name]: value,
        };
      });
      setPhoneNumber(e.target.value);
    } else if (name === "education") {
      const value = e.target.value;
      setDoctorDetails((prev) => {
        return {
          ...(prev != null ? prev : doctorDetails),
          [name]: value,
        };
      });
      setEducation(e.target.value);
    } else if (name === "registrationNumber") {
      const value = e.target.value;
      console.log("Registration Number", value);
      setDoctorDetails((prev) => {
        return {
          ...(prev != null ? prev : doctorDetails),
          [name]: value,
        };
      });
      setregistrationNumber(e.target.value);
    } else if (name === "experience") {
      const value = e.target.value;
      setDoctorDetails((prev) => {
        return {
          ...(prev != null ? prev : doctorDetails),
          [name]: value,
        };
      });
      setExp(e.target.value);
    } else if (name === "boardName") {
      const value = e.target.value;
      setDoctorDetails((prev) => {
        return {
          ...(prev != null ? prev : doctorDetails),
          [name]: value,
        };
      });
      setBoardName(e.target.value);
    } else if (name === "bio") {
      const value = e.target.value;
      setDoctorDetails((prev) => {
        return {
          ...(prev != null ? prev : doctorDetails),
          [name]: value,
        };
      });
      setBio(e.target.value);
    }
  }

  function onClickEdit() {
    const {
      _id,
      image,
      registrationNumber,
      phone,
      email,
      experience,
      __v,
      ...data
    } = doctorDetails;
    data.speciality = speciality.map((item) => item._id);
    console.log("dd", data);
    if (isEditEnabled === true) {
      updateDoctor({
        ...data,
        experience: experience,
        phone: phone,
      })
        .then((res) => {
          setIsEditEnabled(false);
          setSnackbar({
            open: true,
            severity: "success",
            message: res?.message || "Updated Successfully",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setIsEditEnabled((prev) => !prev);
    }
  }

  const onFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        console.log("imageUrl1", reader.result?.toString());
        setImageUrl(reader.result?.toString() || "");
        SetOpenImageResizer(true);
      });
      reader.readAsDataURL(e.target.files[0]);

      // Reset the file input
      e.target.value = "";
      // Force re-render of input
      setKey((prevKey) => prevKey + 1);
    }
  };
  return (
    <div>
      <div className="doctor_details_wrapper">
        <form
          className="doctor_image_box"
          encType="multipart/form-data"
          name="image"
        >
          <div className="cover_wrapper">
            <div className="svg_pattern">
              <svg width="100%" height="100%" viewBox="0 0 978 177" fill="none">
                <path
                  d="M198 58.7903C70.8 50.8771 13 143.857 0 191.335L1075 240C1028.17 162.188 901.9 5.29877 771.5 0.234359C608.5 -6.09615 596.5 117.744 495 139.11C393.5 160.475 357 68.6817 198 58.7903Z"
                  fill="url(#paint0_linear_5_16581)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_5_16581"
                    x1="0"
                    y1="120"
                    x2="1075"
                    y2="120"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E6F0FF" />
                    <stop offset="1" stopColor="#97BBF1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="file-upload">
              <img className="doctordp" src={imageApi ? imageApi : userimage} />
              <div
                onClick={() => fileInputRef.current.click()}
                className="edit_profile_icon"
              >
                <svg width="35" height="35" viewBox="0 0 50 50" fill="none">
                  <circle
                    cx="25"
                    cy="25"
                    r="24.5"
                    fill="white"
                    stroke="#194AF5"
                  />
                  <path
                    d="M34.1169 15.8834C33.5504 15.3177 32.7825 15 31.9819 15C31.1813 15 30.4134 15.3177 29.8469 15.8834L15 30.73V35H19.2701L34.1169 20.1534C34.6824 19.5867 35 18.8189 35 18.0184C35 17.2179 34.6824 16.45 34.1169 15.8834ZM18.5834 33.3333H16.6667V31.4167L27.7585 20.3334L29.6752 22.25L18.5834 33.3333ZM32.9386 18.975L30.8494 21.0642L28.9369 19.1475L31.0252 17.0617C31.2794 16.8075 31.6241 16.6648 31.9836 16.6648C32.343 16.6648 32.6878 16.8075 32.9419 17.0617C33.1961 17.3159 33.3389 17.6606 33.3389 18.02C33.3389 18.3795 33.1961 18.7242 32.9419 18.9784L32.9386 18.975Z"
                    fill="#A9A9A9"
                  />
                </svg>
              </div>
            </div>
          </div>
          <input
            key={key}
            hidden
            type="file"
            ref={fileInputRef}
            accept="image/png, image/jpeg"
            onChange={onFileChange}
          />
        </form>

        <ImageModal
          open={openImageResizer}
          setOpen={SetOpenImageResizer}
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          setImageApi={setImageApi}
        />

        <div className="inputDeatilsDoc">
          <p className="Professional_d_header">Personal Details</p>
          <div className="info">
            <div className="docDetailstextInput">
              <TextField
                id="outlined-controlled"
                variant="outlined"
                size="small"
                fullWidth
                label="Name"
                name="name"
                value={name}
                InputProps={{ sx: { borderRadius: 2, fontSize: "14px" } }}
                onChange={onChangeInput}
                disabled={name !== ""}
              />
            </div>
            <div className="docDetailstextInput">
              <TextField
                id="outlined-controlled"
                variant="outlined"
                fullWidth
                label="Email"
                name="email"
                size="small"
                InputProps={{ sx: { borderRadius: 2, fontSize: "14px" } }}
                value={email}
                onChange={onChangeInput}
                disabled={email !== ""}
              />
            </div>
            <div className="docDetailstextInput">
              <TextField
                id="outlined-basic"
                fullWidth
                size="small"
                label="Phone Number"
                name="phone"
                InputProps={{ sx: { borderRadius: 2, fontSize: "14px" } }}
                value={phone}
                onChange={onChangeInput}
                disabled={phone !== ""}
              />
            </div>
            <div className="docDetailstextInput">
              <TextField
                id="outlined-controlled"
                variant="outlined"
                size="small"
                fullWidth
                label="Education"
                name="education"
                InputProps={{ sx: { borderRadius: 2, fontSize: "14px" } }}
                value={education}
                onChange={onChangeInput}
              />
            </div>
          </div>
          <p className="Professional_d_header">Professional Details</p>
          <div className="info">
            <div className="docDetailstextInput">
              <Autocomplete
                size="small"
                fullWidth
                disableClearable={true}
                popupIcon={
                  <svg width="12" height="12" viewBox="0 0 11 6" fill="none">
                    <path
                      d="M10.854 0.854028L5.85403 5.85403C5.80759 5.90052 5.75245 5.9374 5.69175 5.96256C5.63105 5.98772 5.56599 6.00067 5.50028 6.00067C5.43457 6.00067 5.36951 5.98772 5.30881 5.96256C5.24811 5.9374 5.19296 5.90052 5.14653 5.85403L0.146528 0.854028C0.0527077 0.760208 0 0.63296 0 0.500278C0 0.367596 0.0527077 0.240348 0.146528 0.146528C0.240348 0.0527074 0.367596 0 0.500278 0C0.63296 0 0.760208 0.0527074 0.854028 0.146528L5.50028 4.7934L10.1465 0.146528C10.193 0.100073 10.2481 0.0632225 10.3088 0.0380812C10.3695 0.0129398 10.4346 0 10.5003 0C10.566 0 10.631 0.0129398 10.6917 0.0380812C10.7524 0.0632225 10.8076 0.100073 10.854 0.146528C10.9005 0.192983 10.9373 0.248133 10.9625 0.30883C10.9876 0.369526 11.0006 0.434581 11.0006 0.500278C11.0006 0.565975 10.9876 0.63103 10.9625 0.691726C10.9373 0.752423 10.9005 0.807573 10.854 0.854028Z"
                      fill="#232526"
                    />
                  </svg>
                }
                value={speciality}
                onChange={(event, newValue) => {
                  setSpeciality(newValue);
                  // setDoctorDetails((prev) => {
                  //   return {
                  //     ...(prev != null ? prev : doctorDetails),
                  //     speciality: newValue.map((item) => item._id),
                  //   };
                  // });
                }}
                name="specialities"
                multiple
                options={specialitiesList}
                getOptionLabel={(option) => option.name}
                isOptionEqualToValue={(option, value) => option._id === value}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Specialization"
                    name="specialities"
                    InputProps={{
                      ...params.InputProps,
                      sx: { borderRadius: 2 },
                    }}
                  />
                )}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => {
                    const { key, ...tagProps } = getTagProps({ index });
                    return (
                      <StyledChip
                        key={key}
                        {...tagProps}
                        variant="filled"
                        label={option.name}
                        size="small"
                        deleteIcon={
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 15 15"
                            fill="none"
                          >
                            <path
                              d="M7.03125 0C7.34385 0 7.65615 0 7.96875 0C8.22422 0.0333984 8.48115 0.0580078 8.73457 0.101367C10.1379 0.341602 11.3801 0.926953 12.4459 1.87119C13.7575 3.03369 14.5767 4.47891 14.8849 6.20771C14.9335 6.48047 14.9622 6.75644 15 7.03125V7.96875C14.9771 8.15186 14.9575 8.33555 14.9314 8.51807C14.7176 10.0163 14.1155 11.3388 13.1086 12.4682C11.9531 13.7643 10.5173 14.5737 8.80576 14.8834C8.52861 14.9335 8.24766 14.9616 7.96875 15H7.03125C6.84814 14.9774 6.66475 14.9578 6.48252 14.9317C4.97959 14.7164 3.65303 14.1123 2.52158 13.0995C1.23193 11.9449 0.425684 10.5129 0.116895 8.80664C0.0667969 8.52949 0.0383789 8.24824 0 7.96875V7.03125C0.0351562 6.77109 0.0621094 6.50977 0.106348 6.25107C0.371484 4.70068 1.05762 3.36211 2.16064 2.24326C3.28213 1.10566 4.63242 0.392285 6.2083 0.115137C6.48105 0.0670898 6.75674 0.037793 7.03125 0ZM7.49443 13.9257C11.0367 13.9336 4.27634 11.0473 4.28571 7.49443C4.29509 3.9542 11.0455 14.4716 7.49443 14.4643C3.95215 14.457 10.7242 4.41592 10.7143 7.96875C10.7046 11.5075 3.94394 13.9178 7.49443 13.9257Z"
                              fill="black"
                            />
                            <path
                              d="M7.50259 8.32979C7.45507 8.37475 7.41233 8.41334 7.37183 8.45383C6.59363 9.23158 5.81511 10.009 5.03786 10.7877C4.8819 10.9443 4.70426 11.0294 4.47909 10.9854C4.25583 10.9417 4.1053 10.8087 4.03354 10.597C3.96146 10.3837 4.00643 10.1853 4.16015 10.0205C4.29411 9.87667 4.43667 9.74083 4.57604 9.60211C5.27132 8.90696 5.96692 8.21212 6.67559 7.50358C6.63381 7.45925 6.5965 7.4178 6.55695 7.37826C5.77173 6.59286 4.98651 5.80715 4.20034 5.02239C4.02269 4.84509 3.95348 4.6375 4.03513 4.39771C4.11199 4.17258 4.27848 4.03961 4.51481 4.00708C4.72658 3.97774 4.89402 4.06671 5.04137 4.21467C5.81415 4.9905 6.58948 5.76346 7.3629 6.53833C7.40404 6.57947 7.43753 6.62826 7.48569 6.68693C7.54405 6.63081 7.58551 6.59286 7.62538 6.553C8.41124 5.76761 9.19677 4.98253 9.98199 4.19649C10.1596 4.01856 10.3682 3.95255 10.6074 4.03546C10.8329 4.11327 10.964 4.281 10.9949 4.5176C11.023 4.72934 10.9321 4.89611 10.7844 5.04312C10.0085 5.81576 9.23536 6.59095 8.46035 7.36423C8.41953 7.40504 8.37137 7.43885 8.31811 7.48285C8.37488 7.54376 8.41251 7.58649 8.4527 7.62666C9.23058 8.40473 10.0078 9.18343 10.7873 9.95989C10.9353 10.1072 11.0236 10.2746 10.9943 10.4864C10.9614 10.723 10.8288 10.8891 10.6033 10.9656C10.3701 11.045 10.1635 10.9841 9.99028 10.811C9.20443 10.0256 8.41921 9.24019 7.63367 8.45479C7.59317 8.41429 7.55075 8.37539 7.50259 8.32979Z"
                              fill="white"
                            />
                          </svg>
                        }
                      />
                    );
                  })
                }
              />
            </div>
            <div className="docDetailstextInput">
              <TextField
                id="outlined-controlled"
                variant="outlined"
                fullWidth
                size="small"
                label="Registration Number"
                name="registrationNumber"
                InputProps={{ sx: { borderRadius: 2, fontSize: "14px" } }}
                value={registrationNumber}
                onChange={onChangeInput}
                disabled={registrationNumber !== ""}
              />
            </div>
            <div className="docDetailstextInput">
              <TextField
                id="outlined-controlled"
                variant="outlined"
                fullWidth
                label="Work experience"
                name="experience"
                size="small"
                InputProps={{ sx: { borderRadius: 2, fontSize: "14px" } }}
                value={exp}
                onChange={onChangeInput}
              />
            </div>
            <div className="docDetailstextInput">
              <TextField
                id="outlined-controlled"
                variant="outlined"
                fullWidth
                label="Board Name"
                name="boardName"
                size="small"
                InputProps={{ sx: { borderRadius: 2, fontSize: "14px" } }}
                value={boardName}
                onChange={onChangeInput}
              />
            </div>

            <div className="docDetailstextInput">
              <TextField
                id="outlined-controlled"
                variant="outlined"
                fullWidth
                label="HFR ID"
                name="hfr"
                size="small"
                InputProps={{ sx: { borderRadius: 2, fontSize: "14px" } }}
                // value={exp}
                // onChange={onChangeInput}
              />
            </div>
            <div className="docDetailstextInput">
              <TextField
                id="outlined-controlled"
                variant="outlined"
                fullWidth
                label="HIP ID"
                name="hip"
                size="small"
                InputProps={{ sx: { borderRadius: 2, fontSize: "14px" } }}
                // value={exp}
                // onChange={onChangeInput}
              />
            </div>
          </div>
          <div className="docDetailstextInput5">
            <TextField
              id="outlined-controlled"
              variant="outlined"
              fullWidth
              label="Bio"
              name="bio"
              size="small"
              multiline
              minRows={2}
              maxRows={10}
              InputProps={{ sx: { borderRadius: 2, fontSize: "14px" } }}
              value={bio}
              onChange={onChangeInput}
            />
          </div>
          {!initialData !== doctorDetails && isEditEnabled && (
            <div className="buttons_signup">
              <button
                className="cancel_btn_DocDetails"
                onClick={() => {
                  location.reload();
                }}
              >
                Cancel
              </button>
              <button className="create_btn_DocDeatils" onClick={onClickEdit}>
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
