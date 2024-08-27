import api from ".";
export async function getCountries() {
  try {
    const response = await api.get(`/country`);
    if (response) return response;
    else throw new Error("Could not get country");
  } catch (err) {
    console.log(err);
    return err.response;
  }
}
export async function getSectors() {
  try {
    const response = await api.get(`/sector`);
    if (response) return response;
    else throw new Error("Could not get sector");
  } catch (err) {
    console.log(err);
    return err.response;
  }
}
export async function getEmpCount() {
  try {
    const response = await api.get(`/employee_count`);
    if (response) return response;
    else throw new Error("Could not get employee_count");
  } catch (err) {
    console.log(err);
    return err.response;
  }
}
export async function getIndustries() {
  try {
    const response = await api.get(`/industry`);
    if (response) return response;
    else throw new Error("Could not get industry");
  } catch (err) {
    console.log(err);
    return err.response;
  }
}
export async function sendOTPtoEmail(data) {
  try {
    let response;
    await api
      .post("/user/initiate", data)
      .then((data) => {
        response = data;
      })
      .catch((error) => {
        response = error.response;
      });
    // console.log("sendMobileOTP", response);
    if (response.status === 200) {
      return { data: response, error: null };
    } else return { data: null, error: response?.data?.error };
  } catch (err) {
    console.log(err);
  }
}
export async function verifyEmailOTP(data) {
  try {
    const response = await api.post("/user/otp_validation", data);
    if (response.status === 200) {
      return response;
    } else throw new Error("Could not verify OTP");
  } catch (err) {
    console.log(err);
  }
}
export async function verifyEmailPassword(data) {
  try {
    const response = await api.post("/auth/login", data);
    if (response.status === 200) {
      return response;
    } else throw new Error("Could not verify OTP");
  } catch (err) {
    console.log(err);
  }
}
export async function savepassword(data) {
  try {
    const response = await api.post("/user/1", data);
    if (response) {
      return response;
    } else throw new Error("Could not verify OTP");
  } catch (err) {
    console.log(err);
  }
}
export async function saveInfo(data) {
  try {
    const response = await api.post("/user/2", data);
    if (response) {
      return response;
    } else throw new Error("Could not verify OTP");
  } catch (err) {
    console.log(err);
  }
}
export async function saveOrg(data) {
  try {
    const response = await api.post("/user/3", data);
    if (response) {
      return response;
    } else throw new Error("Could not save organization");
  } catch (err) {
    console.log(err);
  }
}
