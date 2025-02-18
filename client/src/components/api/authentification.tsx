import axios from "axios";

// Configuration de base
export const BASE_URL = "http://localhost:8000/api";

// Création d'une instance axios pour l'enregistrement
export const axiosRegister = axios.create({
    baseURL: `${BASE_URL}/register/`
});
export const axiosFakeRegister = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1/users/'
});
// Création d'une instance axios pour la connexion
export const axioslogin = axios.create({
    baseURL: `${BASE_URL}/login/`
});

export const axiosLoginfake = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1/auth/login"
});

// Création d'une instance axios pour la déconnexion
export const axiosLogout = axios.create({
    baseURL: `${BASE_URL}/logout/`
});

// Création d'une instance axios pour obtenir les informations de l'utilisateur
export const axiosUser = axios.create({
    baseURL: `${BASE_URL}/profile/`
});

export const axiosfakeprofile = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1/auth/profile"
});

// Création d'une instance axios pour le rafraîchissement du token
export const axiosRefresh = axios.create({
    baseURL: `${BASE_URL}/refresh/`
});

// Création d'une instance axios pour la vérification de l'utilisateur
export const axiosUserfake = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1/"
});

// Création d'une instance axios pour la réinitialisation du mot de passe
export const axiosResetPassword = axios.create({
    baseURL: `${BASE_URL}/reset-password/`
});

// Création d'une instance axios pour le mot de passe oublié
export const axiosForgotPassword = axios.create({
    baseURL: `${BASE_URL}/forgot-password/`
});

// Création d'une instance axios pour la mise à jour du mot de passe
export const axiosUpdatePassword = axios.create({
    baseURL: `${BASE_URL}/update-password/`
});

// Création d'une instance axios pour la mise à jour des informations de l'utilisateur
export const axiosUpdateUser = axios.create({
    baseURL: `${BASE_URL}/update-user/`
});

// Création d'une instance axios pour la suppression de l'utilisateur
export const axiosDeleteUser = axios.create({
    baseURL: `${BASE_URL}/delete-user/`
});

// Création d'une instance axios pour changer le mot de passe
export const axiosChangePassword = axios.create({
    baseURL: `${BASE_URL}/change-password/`
});

// Création d'une instance axios pour la mise à jour du profil
export const axiosUpdateProfile = axios.create({
    baseURL: `${BASE_URL}/profile/`
});

// Création d'une instance axios pour obtenir le profil
export const axiosGetProfile = axios.create({
    baseURL: `${BASE_URL}/get-profile/`
});
