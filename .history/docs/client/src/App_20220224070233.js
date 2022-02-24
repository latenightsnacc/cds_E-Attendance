import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Member
function App() {
  <BrowserRouter>
    <Switch>
      <Route path={'/dashboard'} element={<PrivateRoutes />} />
      <Route path={'/'} element={<Regis />} />
    </Switch>
  </BrowserRouter>
}

export default App;
