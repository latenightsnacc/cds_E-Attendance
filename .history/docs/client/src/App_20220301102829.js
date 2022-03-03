import React, { useState } from 'react';
import PreLoader from "./components/PreLoader"
function App() {
  const [isAuth, setIsAuth] = useState(false);
  return(
   <>
      <PreLoader />
   </>
  )
}

export default App;
