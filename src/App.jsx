import React from 'react';
import { UserAuthContextProvider } from './components/hooks/useAuthContext';
import Routes from './Routes';


function App() {

  
  return (
    <UserAuthContextProvider>
      <Routes />
    </UserAuthContextProvider>
   
  )
}

export default App
