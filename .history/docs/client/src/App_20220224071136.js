import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import PreLoader from './components/PreLoader'
function App() {
  <BrowserRouter>
    <Switch>
      <Route path={'/dashboard/member'} element={<MemberDashboard />} />
      <Route path={'/login'} element={<LoginForm />} />
      <Route path={'/register'} element={<RegisterForm />} />
      <Route path={'/'} element={<PreLoader />} />
    </Switch>
  </BrowserRouter>
}

export default App;
