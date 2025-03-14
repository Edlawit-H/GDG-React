import { createContext, useContext, useState } from "react";

const UserAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <UserAuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuth = () => useContext(UserAuthContext);
