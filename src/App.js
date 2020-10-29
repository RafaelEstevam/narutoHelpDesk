import React, { useEffect, useState } from 'react';
import Routes from './routes';

import useContext from './services/useContext.service';

function App() {

  const [contextValue, setContextValue] = useState({});

  useEffect(() => {
    setContextValue({
      user: 1,
      type: 'manager'
    });
  }, []);

  return (
      <useContext.Provider value={contextValue}>
        <Routes/>
      </useContext.Provider>
  );
}

export default App;
