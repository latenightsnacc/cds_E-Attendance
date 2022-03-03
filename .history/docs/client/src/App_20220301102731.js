import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import MemberDashboard from './dashboard/Member'
import LoginForm from './Login'
import RegisterForm from './Register'
function App() {
  const [isAuth, setIsAuth] = useState(false);
  return(
   <div>
      
   </div>
  )
}

export default App;
