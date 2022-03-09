
// import PreLoader from "./components/PreLoader";

// function App() {
//   return <PreLoader />  
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import routes from './routes/routes';
import {AuthProvider} from './auth/context.context';

function App() {
  return(
    <AuthProvider>

    </AuthProvider>
    
  )
}

export default App;
