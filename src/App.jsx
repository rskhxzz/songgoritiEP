import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RtlLayout from "layouts/rtl";
import UserLayout from "layouts/user";
import AdminLayout from "layouts/admin";
import SignIn from "views/auth/SignIn";

const App = () => {
  return (
    <Routes>
      <Route path="sign-in" element={<SignIn />} />
      <Route path="user/*" element={<UserLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />
      <Route path="/" element={<Navigate to="/user" replace />} />
    </Routes>
  );
};

export default App;
