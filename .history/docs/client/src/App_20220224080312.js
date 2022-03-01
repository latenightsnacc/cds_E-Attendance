import React from 'react';
import PreLoader from './components/PreLoader';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import MemberDashboard from './dashboard/Member'
import LoginForm from './Login'
import RegisterForm from './Register'
function App() {
  const [isAuth, setIsAuth] = use
  return(
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<RegisterForm />} />
        {/* <Route path="/profilecreated" element={<ProfileCreated />} /> */}
        <Route path="/login" element={<LoginForm />} />
        <ProtectedRoute path="/dashboard/member" component={<MemberDashboard />} isAuth={''} />
      </Routes>
    </Router>
  )
}

export default App;
