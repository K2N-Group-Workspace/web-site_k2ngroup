import React, { createContext, useState, ReactNode } from 'react';

// Définir le type pour le contexte
interface AuthContextType {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
    isUserAuthenticated: () => boolean;
}

// Créer le contexte
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Créer un fournisseur de contexte
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    // Ajouter une fonction pour vérifier l'authentification
    const isUserAuthenticated = () => {
        return isAuthenticated;
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, isUserAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}; 