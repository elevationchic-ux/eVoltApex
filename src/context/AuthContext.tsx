"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import {
  User,
  getUserSession,
  signIn as authSignIn,
  signUp as authSignUp,
  signOut as authSignOut,
} from "@/lib/auth";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => { success: boolean; error?: string };
  signUp: (data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone?: string;
  }) => { success: boolean; error?: string };
  signOut: () => void;
  refreshUser: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const session = getUserSession();
    setUser(session);
    setIsLoading(false);
  }, []);

  const signIn = useCallback((email: string, password: string) => {
    const result = authSignIn(email, password);
    if (result.success && result.user) {
      setUser(result.user);
    }
    return { success: result.success, error: result.error };
  }, []);

  const signUp = useCallback(
    (data: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      phone?: string;
    }) => {
      const result = authSignUp(data);
      if (result.success && result.user) {
        setUser(result.user);
      }
      return { success: result.success, error: result.error };
    },
    []
  );

  const signOut = useCallback(() => {
    authSignOut();
    setUser(null);
  }, []);

  const refreshUser = useCallback(() => {
    setUser(getUserSession());
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signUp, signOut, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
