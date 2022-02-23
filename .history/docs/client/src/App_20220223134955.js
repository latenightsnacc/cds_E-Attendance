import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PublicRoutes from './routes/PublicRoutes';
import history from './util/history';
function App() {
  <BrowserRouter history={history}>
    <Switch>
      <Route path={'/dashboard'} element={<PublicRoutes />} />
      <Route path={'/'} element={<P} />
    </Switch>
  </BrowserRouter>
}

export default App;