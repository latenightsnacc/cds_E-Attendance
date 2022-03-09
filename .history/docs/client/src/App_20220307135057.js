
// import PreLoader from "./components/PreLoader";

// function App() {
//   return <PreLoader />  
// }

// export default App;
import React from 'react';
import routes from './routes/routes';
import 
import {AuthProvider} from './auth/context.context';
import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';

function App() {
  return(
    <AuthProvider>
      <Router>
        <Routes>
          {routes.map((route) =>{
            <Route
            key={route.path}
            path={route.path}
            element={route.element}
            />
          })}
        </Routes>
      </Router>
    </AuthProvider>
    
  )
}

export default App;
