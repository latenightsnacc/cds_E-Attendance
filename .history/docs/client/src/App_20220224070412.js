import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MemberDashboard from './dashboard/Member'
import LoginForm from './Login'
import RegisterForm from './Register'
function App() {
  <BrowserRouter>
    <Switch>
      <Route path={'/dashboard/member'} element={<MemberDashboard />} />
      <Route path={'/login'} element={<Re />} />
    </Switch>
  </BrowserRouter>
}

export default App;
