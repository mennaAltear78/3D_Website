import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext({
  mode: false,
  setMode: () => {},
});

export const AuthProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('mode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  // تحديث localStorage عند تغيير mode
  useEffect(() => {
    localStorage.setItem('mode', JSON.stringify(mode));
  }, [mode]);

  return (
    <AuthContext.Provider value={{ mode, setMode }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
