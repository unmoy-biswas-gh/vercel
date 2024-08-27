import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SetupOrg from "./components/Registration/SetupOrg";
import SetUp from "./components/Registration/SetUp";
import InviteTeam from "./components/Registration/InviteTeam";
import Login from "./components/owner/Login";
import OwnerSetUp from "./components/owner/SetUp";
import OwnerSetupOrg from "./components/owner/SetupOrg";
import PersonalInfo from "./components/owner/PersonalInfo";
import DashBoard from "./components/Dashboard/DashBoard";
import { TeamMembers } from "./components/owner/teamMembers";
import PrivateRoute from "./components/common/PrivateRoute";
import Monitor from "./components/Dashboard/Monitor";
import SignUp from "./components/Authentication/SignUp";
import { AuthProvider } from "./components/context/AuthContext";
import CreateOrganization from "./components/Authentication/CreateOrganization";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/register" element={<CreateOrganization />} />
          <Route path="/personalinfo" element={<PersonalInfo />} />{" "}
          <Route path="/setupprofile" element={<SetupOrg />} />
          <Route path="/setup" element={<OwnerSetUp />} />
          <Route path="/README.mdsetuporg" element={<OwnerSetupOrg />} />
          <Route path="/setup" element={<SetUp />} />
          <Route path="/invite" element={<InviteTeam />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <DashBoard />
              </PrivateRoute>
            }
          >
            <Route index element={<Monitor />} />{" "}
            <Route path="monitor" element={<Monitor />} />
            <Route path="team-members" element={<TeamMembers />} />
            {/* <Route path="subcriptions" element={<TeamMembers />} />
            <Route path="reports" element={<TeamMembers />} /> */}
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
