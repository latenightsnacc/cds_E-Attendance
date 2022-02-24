import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PublicRoutes from './routes/PublicRoutes';
import PrivateRoutes from './routes/PrivateRoutes';
import history from './util/history';
function App() {
  <BrowserRouter>
    <Switch>
      <Route path={'/dashboard'} element={<PrivateRoutes />} />
      <Route path={'/'} element={<Regist />} />
    </Switch>
  </BrowserRouter>
}

export default App;
