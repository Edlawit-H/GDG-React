import { createContext, useContext, useState } from "react";

const UserAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleAuth = () => setIsLoggedIn((prev) => !prev);

  return (
    <UserAuthContext.Provider value={{ isLoggedIn, toggleAuth }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export const useAuth = () => useContext(UserAuthContext);
