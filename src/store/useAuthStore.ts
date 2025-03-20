import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthState {
  user: { id: string; email: string } | null;
  isAuthenticated: boolean;
  login: (user: { id: string; email: string, role: string }) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (user) => set({ user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: "auth-storage", 
      storage: createJSONStorage(() => localStorage), // ✅ Corrección aquí
    }
  )
);
