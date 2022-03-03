import React, { useState } from 'react';
import { useAuth } from './auth/useAuth';
import PreLoader from "./components/PreLoader";

function App() {
  const { authed } = useAuth();
  return(
   <>
      <PreLoader />
   </>
  )
}

export default App;
