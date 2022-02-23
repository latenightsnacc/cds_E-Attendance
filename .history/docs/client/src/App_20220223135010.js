import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PublicRoutes from './routes/PublicRoutes';
import PrivateRoutes from './routes/PrivateRoutes';
import history from './util/history';
function App() {
  <BrowserRouter history={history}>
    <Switch>
      <Route path={'/dashboard'} element={<PublicRoutes />} />
      <Route path={'/'} element={<PublicRoutes />} />
    </Switch>
  </BrowserRouter>
}

export default App;
