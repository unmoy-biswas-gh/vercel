import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterAccount from "./components/Registration/RegisterAccount";
import SetupOrg from "./components/Registration/SetupOrg";
import SetUp from "./components/Registration/SetUp";
import InviteTeam from "./components/Registration/InviteTeam";
import OwnerLogin from "./components/owner/login";
import OwnerSetUp from "./components/owner/SetUp";
import OwnerSetupOrg from "./components/owner/SetupOrg";
import PersonalInfo from "./components/owner/PersonalInfo";
import DashBoard from "./components/owner/DashBoard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OwnerLogin />} />
        <Route path="/register" element={<RegisterAccount />} />
        <Route path="/owner">
          <Route path="login" element={<OwnerLogin />} />
          <Route path="personal-info" element={<PersonalInfo />} />
          <Route path="setup" element={<OwnerSetUp />} />
          <Route path="setuporg" element={<OwnerSetupOrg />} />
          <Route path="dashboard" element={<DashBoard />} />
        </Route>
        <Route path="/setupprofile" element={<SetupOrg />} />
        <Route path="/setup" element={<SetUp />} />
        <Route path="/invite" element={<InviteTeam />} />
      </Routes>
    </Router>
  );
};

export default App;
