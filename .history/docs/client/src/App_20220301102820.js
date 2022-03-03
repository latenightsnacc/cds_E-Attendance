import React, { useState } from 'react';
import PreLoader from "./components/PreLoader"
import LoginForm from './Login'
import RegisterForm from './Register'
function App() {
  const [isAuth, setIsAuth] = useState(false);
  return(
   <>
      <PreLoader />
   </div>
  )
}

export default App;
