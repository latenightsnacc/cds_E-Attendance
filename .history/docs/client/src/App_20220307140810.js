
// import PreLoader from "./components/PreLoader";

// function App() {
//   return <PreLoader />  
// }

// export default App;
import React from 'react';
import routes from './routes/routes';
import ProtectedRoute from './routes/ProtectedRoute';
import {AuthProvider} from './auth/context.context';
import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';

function App() {
  return(
    
      <Router>
        <AuthProvider></AuthProvider>
        <Routes>
          {routes.map((route) =>{
            <ProtectedRoute
            key={route.path}
            path={route.path}
            element={route.element}
            isPrivate={route.isPrivate}
            />
          })}
        </Routes>
        </AuthProvider>
      </Router>
    
    
  )
}

export default App;
