import { createContext, useContext, useState } from "react";
import { verifyEmailOTP, verifyEmailPassword } from "../../api/auth";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}
export const AuthProvider = ({ children }) => {
  const localToken = localStorage.getItem("token");
  const [token, setToken] = useState(localToken || "");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function verifyOtpWithBackend(data) {
    try {
      const authenticatedUser = await verifyEmailOTP(data);
      if (authenticatedUser?.data?.data?.token) {
        setToken(authenticatedUser?.data?.data?.token);
        localStorage.setItem("token", authenticatedUser?.data?.data?.token);
        setIsAuthenticated(true);
        return authenticatedUser;
      } else {
        throw new Error("Could not authenticate");
      }
    } catch (err) {
      console.log(err);
    }
  }
  async function verifyPasswordWithBackend(data) {
    try {
      const authenticatedUser = await verifyEmailPassword(data);
      console.log("authenticatedUser", authenticatedUser);
      if (authenticatedUser?.data?.data?.token) {
        setToken(authenticatedUser?.data?.data?.token);
        localStorage.setItem("token", authenticatedUser?.data?.data?.token);
        setIsAuthenticated(true); // updating state deirectly without checking if token has expired for immidiate effect
        return authenticatedUser;
      } else {
        throw new Error("Could not authenticate");
      }
    } catch (err) {
      console.log(err);
    }
  }

  // async function LogOutUser() {
  //   setToken("");
  //   localStorage.removeItem("token");
  //   // navigate("/login");
  // }

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

  const value = {
    verifyOtpWithBackend,
    verifyPasswordWithBackend,
    isAuthenticated,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
