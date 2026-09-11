"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  isLoading: true,
  user: null,
  login: () => false,
  logout: () => { },
});

// Static credentials configuration read from .env.local
export const STATIC_CREDENTIALS = {
  username: process.env.NEXT_PUBLIC_LOGIN_USERNAME || "admin",
  email: process.env.NEXT_PUBLIC_LOGIN_EMAIL || "admin@gripcrm.com",
  password: process.env.NEXT_PUBLIC_LOGIN_PASSWORD || "0123",
  name: "GripCRM Admin",
};


export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check localStorage on initial client mount
    try {
      const storedAuth = localStorage.getItem("gripcrm_auth_logged_in");
      const storedUser = localStorage.getItem("gripcrm_auth_user");

      if (storedAuth === "true" && storedUser) {
        setIsAuthenticated(true);
        setUser(JSON.parse(storedUser));
      }
    } catch (e) {
      console.error("Failed to read auth state from storage:", e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = (usernameInput, passwordInput) => {
    const trimmedInput = usernameInput.trim().toLowerCase();

    const isValidUser =
      trimmedInput === STATIC_CREDENTIALS.username.toLowerCase() ||
      trimmedInput === STATIC_CREDENTIALS.email.toLowerCase();

    const isValidPassword = passwordInput === STATIC_CREDENTIALS.password;

    if (isValidUser && isValidPassword) {
      const userData = {
        name: STATIC_CREDENTIALS.name,
        username: STATIC_CREDENTIALS.username,
        email: STATIC_CREDENTIALS.email,
        loggedInAt: new Date().toISOString(),
      };

      try {
        localStorage.setItem("gripcrm_auth_logged_in", "true");
        localStorage.setItem("gripcrm_auth_user", JSON.stringify(userData));
      } catch (e) {
        console.error("Failed to save auth state:", e);
      }

      setUser(userData);
      setIsAuthenticated(true);
      return { success: true };
    }

    return {
      success: false,
      error: "Invalid username or password. Please check your credentials.",
    };
  };

  const logout = () => {
    try {
      localStorage.removeItem("gripcrm_auth_logged_in");
      localStorage.removeItem("gripcrm_auth_user");
    } catch (e) {
      console.error("Failed to clear auth state:", e);
    }
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
