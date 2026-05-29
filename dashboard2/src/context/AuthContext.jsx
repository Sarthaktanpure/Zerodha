import React, { createContext, useContext, useEffect, useState } from "react";

import { api } from "../lib/api";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("authToken") || "");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const bootstrapAuth = async () => {
      try {
        const response = await api.get("/auth/me");
        setUser(response.data.user);
      } catch (_error) {
        if (token) {
          localStorage.removeItem("authToken");
          setToken("");
        }
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    bootstrapAuth();
  }, [token]);

  const persistAuth = (nextToken, nextUser) => {
    localStorage.setItem("authToken", nextToken);
    setToken(nextToken);
    setUser(nextUser);
  };

  const login = async (payload) => {
    const response = await api.post("/auth/login", payload);
    persistAuth(response.data.token, response.data.user);
    return response.data.user;
  };

  const signup = async (payload) => {
    const response = await api.post("/auth/signup", payload);
    persistAuth(response.data.token, response.data.user);
    return response.data.user;
  };

  const logout = async () => {
    try {
      await api.post("/auth/logout");
    } catch (_error) {
      // logout should still clear local state
    } finally {
      localStorage.removeItem("authToken");
      setToken("");
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        isAuthenticated: Boolean(user),
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
