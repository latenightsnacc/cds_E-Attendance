import React, { useState } from 'react';
import { useAuth } from './auth/useAuth';
import { Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './auth/ProtectedRoute';
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
