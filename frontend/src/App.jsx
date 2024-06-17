import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import RegisterAccount from "./components/Registration/RegisterAccount"
import SetupOrg from "./components/Registration/SetupOrg";
import SetUp from "./components/Registration/SetUp";
import InviteTeam from "./components/Registration/InviteTeam";

const App = () => {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<RegisterAccount />} />
                <Route path="/setupprofile" element={<SetupOrg />} />
                <Route path="/setup" element={<SetUp />} />
                <Route path="/invite" element={<InviteTeam />} />
            </Routes>
        </Router>
  )
}

export default App;
