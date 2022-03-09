
// import PreLoader from "./components/PreLoader";

// function App() {
//   return <PreLoader />  
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import routes from './routes/routes';

function App() {
  return(
    <Router>
      <Routes>
        {routes.map((route) => {
          <Route
           
           />
        })}
      </Routes>
    </Router>
  )
}
