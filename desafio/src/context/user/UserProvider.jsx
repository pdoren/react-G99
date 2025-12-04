import { useState, createContext, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true); // true = token valido por defecto

  const login = (token) => {
    setToken(token);
  };

  const logout = () => {
    setToken(false);
  };

  return (
    <UserContext.Provider value={{ token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
  
export const useUser = () => useContext(UserContext);
  
export default UserProvider;