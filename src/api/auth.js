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
