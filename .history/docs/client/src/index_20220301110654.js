import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import App from './App';
import Register from './pages/Register';
import Login from './pages/Login';
import AdminRegister from './pages/AdminRegister';
import AdminLogin from './pages/AdminLogin';
import Member from "./dashboard/Member";
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/welcome' element={<App />} />
        <Route path='/api/auth/signup' element={<Register />} />
        <Route path='/api/auth/signin' element={<Login />} />
        <Route path='/api/auth/admin/signup' element={<AdminRegister />} />
        <Route path='/api/auth/admin/signin' element={<AdminLogin />} />
        <Route path='/api/dashboard/member' element={<Member />} />
      </Routes>
    </Router>
    

        {/* <Route path="/dashboard/member/attendance" element={<ViewAttendance />} />
        <Route path="/dashboard/member/dues" element={<ViewDues />} />
        <Route path="/dashboard/member/profile" element={<Profile />} />
        <Route path="/dashboard/secretarygeneral" element={<SecretaryGeneral />} />
        <Route path="/dashboard/secretarygeneral/members" element={<Members />} />
        <Route path="/dashboard/secretarygeneral/new" element={<New />} />
        <Route path="/dashboard/secretarygeneral/notes" element={<Notes />} />
        <Route path="/dashboard/secretarygeneral/notes/:minuteId" element={<Minutes />} />
        <Route path="/dashboard/secretarygeneral/attendance" element={<Attendance />} />
        <Route path="/dashboard/secretarygeneral/attendance/:year/:month" element={<MonthlyAttendance />} />
        <Route path="/dashboard/secretarygeneral/attendance/:date" element={<WeeklyAttendance />} />
        <Route path="/dashboard/secretarygeneral/events" element={<Sevents />} />
        <Route path="/dashboard/secretarygeneral/recordattendance" element={<RecordAttendance />} />
        <Route path="/dashboard/secretarygeneral/reports" element={<Reports />} />
        <Route path="/dashboard/treasurer" element={<Treasurer />} />
        <Route path="/dashboard/treasurer/monthlydueslist" element={<MonthlyDuesList />} />
        <Route path="/dashboard/treasurer/newmonthlydues" element={<NewMonthlyDues />} />
        <Route path="/dashboard/treasurer/newprojectdues" element={<NewProjectDues />} />
        <Route path="/dashboard/treasurer/neweventdues" element={<NewEventDues />} />
        <Route path="/dashboard/treasurer/dues/:collectionMonth/:collectionYear/:collectionFor" element ={<Dues />} />
        <Route path="/dashboard/treasurer/project" element={<Project />} />
        <Route path="/dashboard/treasurer/events" element={<Events />} />
        <Route path="/dashboard/treasurer/account" element={<Account />} />
        <Route path="/dashboard/treasurer/newcollection" element={<NewCollection />} />
        <Route path="/dashboard/president" element={<President />} />
        <Route path="/dashboard/coordinator" element={<Coordinator />} /> */}
     
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
