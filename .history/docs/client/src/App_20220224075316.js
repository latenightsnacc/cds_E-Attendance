import React from 'react';
import PreLoader from './components/PreLoader';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import MemberDashboard from './dashboard/Member'
import LoginForm from './Login'
import RegisterForm from './Register'
function App() {
  return(
    <div>
      <PreLoader />
    </div>
  )
}

export default App;
