import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (user) => {
    setUser(user);
  };
  const logeout = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, login, logeout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
