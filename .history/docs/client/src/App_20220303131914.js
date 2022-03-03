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
<Router>
  <Routes>
    <Route path='/welcome' element={<App />} />
    <Route path='/api/auth/signup' exact element={<Register />} />
    <Route path='/api/auth/signin' element={<Login />} />
    <Route path='/api/auth/admin/signup' element={<AdminRegister />} />
    <Route path='/api/auth/admin/signin' element={<AdminLogin />} />
    <ProtectedRoute path='/api/dashboard/member/:id' component={<Member />} />
    <ProtectedRoute path='/api/dashboard/member/:id/attendance' component={<MemberAttendance />} />
    <ProtectedRoute path='/api/dashboard/member/:id/dues' component={<MemberDues />} />
    <ProtectedRoute path='/api/dashboard/member/:id/profile' component={<MemberProfile />} />
  </Routes>
</Router>
export default App;
