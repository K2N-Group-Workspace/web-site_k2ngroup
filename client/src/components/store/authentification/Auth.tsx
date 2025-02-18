import { create } from 'zustand'

type AuthState = {
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  setToken: (token: string | null) => void;
  updateToken: (newToken: string) => void;
  login: (accessToken: string, refreshToken: string) => void;
  logout: () => void;
  clearTokens: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem('token'),
  refreshToken: localStorage.getItem('refreshToken'),
  isAuthenticated: !!localStorage.getItem('token'),
  
  setToken: (token) => set({ token }),
  
  updateToken: (newToken) => {
    localStorage.setItem('token', newToken);
    set({ token: newToken });
  },
  
  login: (accessToken, refreshToken) => {
    localStorage.setItem('token', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    set({ 
      token: accessToken, 
      refreshToken: refreshToken,
      isAuthenticated: true 
    });
  },
  
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    set({ 
      token: null, 
      refreshToken: null,
      isAuthenticated: false 
    });
  },

  clearTokens: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    set({ 
      token: null, 
      refreshToken: null,
      isAuthenticated: false 
    });
  }
})); 