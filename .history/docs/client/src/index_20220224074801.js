import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import MemberDashboard from './dashboard/Member'
import LoginForm from './Login'
import RegisterForm from './Register'
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<RegisterForm />} />
        {/* <Route path="/profilecreated" element={<ProfileCreated />} /> */}
        <Route path="/login" element={<LoginForm />} />
        <ProtectedRoute path="/dashboard/member" component={<MemberDashboard />} isAuth={''} />

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
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();