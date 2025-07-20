"use client";
import { create } from "zustand";
import { useEffect, useState } from "react";

interface AuthState {
  token: string | null;
  setToken: (t: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  setToken: (token) => {
    localStorage.setItem("token", token);
    set({ token });
  },
  logout: () => {
    localStorage.removeItem("token");
    set({ token: null });
  },
}));

export function useHydrateToken() {
  const setToken = useAuthStore((s) => s.setToken);
  useEffect(() => {
    const t = localStorage.getItem("token");
    if (t) setToken(t);
  }, [setToken]);
}
