import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import AuthProvider from './auth/useAuth';
import ProtectedRoute from './auth/ProtectedRoute';
import App from './App';
import Register from './pages/Register';
import Login from './pages/Login';
import AdminRegister from './pages/AdminRegister';
import AdminLogin from './pages/AdminLogin';
import Member from "./dashboard/Member";
import MemberAttendance from './dashboard/member/ViewAttendance';
import MemberDues from './dashboard/member/ViewAttendance';
import MemberProfile from './dashboard/member/ViewAttendance';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path='/welcome' element={<App />} />
          <Route path='/api/auth/signup' element={<Register />} />
          <Route path='/api/auth/signin' element={<Login />} />
          <Route path='/api/auth/admin/signup' element={<AdminRegister />} />
          <Route path='/api/auth/admin/signin' element={<AdminLogin />} />
          <ProtectedRoute path='/api/dashboard/member/:id' component={<Member />} />
          <ProtectedRoute path='/api/dashboard/member/:id/attendance' component={<MemberAttendance />} />
          <ProtectedRoute path='/api/dashboard/member/:id/dues' component={<MemberDues />} />
          <ProtectedRoute path='/api/dashboard/member/:id/profile' component={<MemberProfile />} />
        </Switch>
        
      </AuthProvider>
    </BRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
