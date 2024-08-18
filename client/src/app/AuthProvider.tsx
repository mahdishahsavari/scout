"use client";

import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import Cookies from "js-cookie";

type AuthContextType = {
  isAuthenticated: boolean;
  user: any;
  checkAuth: () => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);

  const checkAuth = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/auth/profile",
        { withCredentials: true }
      );
      setUser(response.data.user);
      setIsAuthenticated(true);
    } catch (error) {
      setUser(null);
      setIsAuthenticated(false);
      console.error(error);
    }
  };

  const logout = () => {
    Cookies.remove("accessToken");
    setUser(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, checkAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
