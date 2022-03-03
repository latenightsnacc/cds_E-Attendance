import React, { useState } from 'react';
import { useAuth } from './auth/useAuth';
import PreLoader from "./components/PreLoader";

function App() {
  return(
   <>
      <PreLoader />
   </>
  )
}

export default App;
