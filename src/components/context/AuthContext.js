import { createContext, useContext, useEffect, useState } from "react";
// import { authentication } from "../../firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyEmailOTP } from "../../api/auth";
// import {
//   GoogleAuthProvider,
//   getAuth,
//   signInWithPopup,
//   RecaptchaVerifier,
//   signInWithPhoneNumber,
// } from "firebase/auth";
// import axios from "../../axios";
// import {
//   verifyMobileOTP,
//   verifyEmailWithoutAuthOTP,
//   LougOut,
// } from "../../api/auth";
// import { isValidToken } from "../../util";
// import { getDoctor } from "../../api/doctor";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  // const location = useLocation();
  // const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  // const provider = new GoogleAuthProvider();
  // const auth = getAuth();
  const localToken = localStorage.getItem("token");
  const [token, setToken] = useState(localToken || "");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [reloadUser, setReloadUser] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(true);
  const [subScriptionModalOpen, setSubscriptionModalOpen] = useState(false);
  console.log("isAuthenticated", isAuthenticated);
  console.log("token", token);
  async function verifyOtpWithBackend(data) {
    try {
      const authenticatedUser = await verifyEmailOTP(data);
      console.log("authenticatedUser", authenticatedUser);
      console.log(authenticatedUser?.data?.data);
      if (authenticatedUser?.data?.data?.token) {
        console.log(authenticatedUser?.data?.data?.token);
        setToken(authenticatedUser.token);
        setIsAuthenticated(true); // updating state deirectly without checking if token has expired for immidiate effect
        return authenticatedUser;
      } else {
        throw new Error("Could not authenticate");
      }
    } catch (err) {
      console.log(err);
    }
  }

  // async function verifyEmailOtpWithBackend(email, otp) {
  //   try {
  //     const authenticatedUser = await verifyEmailWithoutAuthOTP(email, otp);
  //     if (authenticatedUser?.token) {
  //       setToken(authenticatedUser.token);
  //       setIsAuthenticated(true); // updating state deirectly without checking if token has expired for immidiate effect
  //       return authenticatedUser;
  //     } else {
  //       throw new Error("Could not authenticate");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  async function logout() {
    // await LougOut();
    setToken("");
    localStorage.removeItem("token");
    // navigate("/login");
  }

  // async function handleToken() {
  //   if (await isValidToken(token)) {
  //     localStorage.setItem("token", token);
  //     setIsAuthenticated(true);
  //     setReloadUser(false);
  //     const doctorData = await getDoctor();
  //     console.log("doctor data1", doctorData.data);
  //     if (doctorData) {
  //       console.log("doctor data", doctorData.data);
  //       setUser(doctorData.data);
  //     }
  //   } else {
  //     localStorage.removeItem("token");
  //     setIsAuthenticated(false);
  //     navigate("/");
  //   }
  // }

  // useEffect(() => {
  //   const regex = /^\/view\/prescription\/[a-zA-Z0-9]+$/;
  //   const regex2 = /^\/view\/invoice\/[a-zA-Z0-9]+$/;
  //   if (regex.test(location.pathname)) {
  //     console.log("Viewing Prescripion");
  //   } else if (regex2.test(location.pathname)) {
  //     console.log("Viewing Invoice");
  //   } else {
  //     handleToken();
  //   }
  // }, []);

  // useEffect(() => {
  //   if (reloadUser) handleToken();
  // }, [reloadUser]);

  const checkSubscription = () => {
    const endDate = new Date(user?.subscription?.endDate);
    // const endDate = new Date("2024-08-22T04:43:39.491Z");
    const currentDate = new Date();
    const utcEndDate = Date.UTC(
      endDate.getFullYear(),
      endDate.getMonth(),
      endDate.getDate()
    );
    const utcCurrentDate = Date.UTC(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate()
    );
    const timeDiff = utcEndDate - utcCurrentDate;
    const daysDiff = Math.max(0, Math.floor(timeDiff / (1000 * 3600 * 24)));

    if (daysDiff > 0) {
      setIsSubscribed(true);
    } else {
      setIsSubscribed(false);
    }
  };
  // useEffect(() => {
  //   if (user) {
  //     // Check subscription status immediately
  //     checkSubscription();

  //     // Set up daily check
  //     const dailyCheck = setInterval(checkSubscription, 24 * 60 * 60 * 1000);

  //     // Clean up interval on component unmount
  //     return () => clearInterval(dailyCheck);
  //   }
  // }, [user]);

  //  verify user againt our backend
  // async function AuthenticateWithBackend(idToken, result) {
  //   try {
  //     if (idToken) {
  //       const res = await axios
  //         .post("/auth/docter", {
  //           idToken: idToken,
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //           return null;
  //         });
  //       if (res.data && res.status === 200) {
  //         const sessionToken = res.data.token;
  //         localStorage.setItem("token", sessionToken);
  //         // set user in context
  //         const user = result.user;
  //         setCurrentUser({
  //           user_name: user.displayName,
  //           user_email: user.email,
  //           user_uid: user.uid,
  //         });
  //         // navigate to dashboard
  //         if (localStorage.getItem("token")) {
  //           navigate("/");
  //         } else {
  //           return null;
  //         }
  //       }
  //     } else {
  //       console.log("idToken not found");
  //       logout();
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     logout();
  //   }
  // }

  // google oauth
  // async function signInWithGoogle() {
  //   try {
  //     const result = await signInWithPopup(auth, provider);
  //     const idToken = result._tokenResponse.idToken;
  //     AuthenticateWithBackend(idToken, result);
  //   } catch (error) {
  //     logout();
  //     navigate("/login");
  //     console.log(error);
  //   }
  // }

  // send otp
  // async function signInWithPhone(number) {
  //   const recaptchaVerifier = new RecaptchaVerifier(
  //     "recaptcha-container",
  //     { size: "invisible" },
  //     auth
  //   );
  //   const result = await signInWithPhoneNumber(auth, number, recaptchaVerifier);
  //   if (result) {
  //     return result;
  //   } else {
  //     alert("Something went wrong, please try again later!");
  //   }
  // }

  // verify otp
  // async function signInWithOtp(result, otp) {
  //   try {
  //     const res = await result.confirm(otp);
  //     const idToken = res?._tokenResponse?.idToken;
  //     await AuthenticateWithBackend(idToken, res);

  //     return true;
  //   } catch (err) {
  //     console.log(err);
  //     return false;
  //   }
  // }

  // useEffect(() => {
  //   const unsubscribe = authentication.onAuthStateChanged((user) => {
  //     if (user) {
  //       setCurrentUser({
  //         user_name: user._delegate.displayName,
  //         user_email: user._delegate.email,
  //         user_uid: user._delegate.uid,
  //         user_phone: user._delegate.phoneNumber,
  //       });
  //     }
  //     setLoading(false);
  //   });
  //   return () => {
  //     unsubscribe();
  //     setCurrentUser(null);
  //     setLoading(false);
  //   };
  // }, []);

  const value = {
    // currentUser,
    // signInWithGoogle,
    // signInWithPhone,
    // signInWithOtp,
    // isAuthenticated,
    // verifyMobilOtpWithBackend,
    // verifyEmailOtpWithBackend,
    // logout,
    // user,
    // setReloadUser,
    // reloadUser,
    // isSubscribed,
    // setSubscriptionModalOpen,
    // subScriptionModalOpen,
    verifyOtpWithBackend,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
