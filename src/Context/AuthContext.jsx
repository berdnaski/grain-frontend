import React, { createContext, useContext, useState } from "react";
import { login as signIn } from "../services/AuthServices.js"
import { toast } from "react-toastify"

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  async function login(email, password) {
    try {
      await signIn(email, password);
      toast.success("Login bem-sucedido!");
      setIsLogged(true);
    } catch (error) {
      toast.error("Email ou senha incorretos!");
    }
  }

  return (
    <AuthContext.Provider value={{ login, isLogged }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
