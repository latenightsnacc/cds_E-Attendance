import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import AuthProvider from './auth/useAuth';
import ProtectedRoute from './auth/ProtectedRoute';
import App from './App';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    
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
    </AuthProvider>
      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
