import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import MemberDashboard from './dashboard/Member'
import LoginForm from './Login'
import RegisterForm from './Register'
function App() {
  const [isAuth, setIsAuth] = useState(false);
  return(
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/api/auth/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <ProtectedRoute path="/dashboard/member" component={<MemberDashboard />} isAuth={isAuth} />
      </Routes>
    </Router>
  )
}

export default App;
