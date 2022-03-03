import React, { useState } from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import 
import PreLoader from "./components/PreLoader"
function App() {
  return(
   <>
      <PreLoader />
   </>
  )
}
<Router>
        <Routes>
          <Route path='/welcome' element={<App />} />
          <Route path='/api/auth/signup' element={<Register />} />
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
