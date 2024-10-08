import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ children }) {
  //   const { isAuthenticated } = useAuth();
  // const isAuthenticated = true;
  const location = useLocation();
  const isAuthenticated = true;

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}
