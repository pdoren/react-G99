import { useState, createContext, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null); // null = token invalido por defecto
  const [email, setEmail] = useState(null);

  const login = (data) => {
    setToken(data.token);
    setEmail(data.email);
  };

  const register = (data) => {
    setToken(data.token);
    setEmail(data.email);
  };

  const isLoginOK = () => {
    return token !== null;
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
  };

  return (
    <UserContext.Provider value={{ token, email, login, register, logout, isLoginOK }}>
      {children}
    </UserContext.Provider>
  );
};
  
export const useUser = () => useContext(UserContext);
  
export default UserProvider;