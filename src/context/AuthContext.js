import React, { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AuthContext = createContext();
const initialUser = {
  signIn: false,
  email: null,
};
const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", initialUser);
  const data = {
    user,
    setUser,
  };
  return <AuthContext.Provider value={data}> {children} </AuthContext.Provider>;
};

export default AuthProvider;
export { AuthContext };
