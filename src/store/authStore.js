import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      jwtToken: null,
      isAuthenticated: false,
      
      setUser: (newUser) => set((state) => ({ user: newUser })),
      setJwtToken: (token) => set((state) => ({ jwtToken: token })),
      setIsAuthenticated: (value) => set((state) => ({ isAuthenticated: value })),
    }),
    {
      name: 'auth-storage', 
      storage: createJSONStorage(() => localStorage), 
    }
))

export default useAuthStore