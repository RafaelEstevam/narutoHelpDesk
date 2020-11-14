import React, { useEffect, useState } from 'react';
import Routes from './routes';
import {getStorageLogin, setStorageLogin, removeStorageLogin} from './services/auth.service';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useContext from './services/useContext.service';

function App() {

  const [contextValue, setContextValue] = useState({});
  const [userData, setUserData] = useState({});

  const handleSetUserData = (user) => {
    setUserData(user);
    setStorageLogin(user);
  }

  const handleGetUserData = () => {
    return 'teste';
  }

  useEffect(() => {
    setContextValue({
      user: userData,
      handleSetUserData,
      handleGetUserData
    });
  }, [userData]);

  return (
      <useContext.Provider value={contextValue}>
        <Routes/>
        <ToastContainer />
      </useContext.Provider>
  );
}

export default App;
