import React, { useState } from 'react';
import { useAuth } from './auth/useAuth';
import { Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './auth/ProtectedRoute';
import PreLoader from "./components/PreLoader";
import Register from './pages/Register';
import Login from './pages/Login';
import AdminRegister from './pages/AdminRegister';
import AdminLogin from './pages/AdminLogin';
import Member from "./dashboard/Member";
import MemberAttendance from './dashboard/member/ViewAttendance';
import MemberDues from './dashboard/member/ViewAttendance';
import MemberProfile from './dashboard/member/ViewAttendance';
function App() {
  const { authed } = useAuth();
  return(
   <>
      <PreLoader />
   </>
  )
}

export default App;
