import { create } from 'zustand'
import { useAuthStore } from '@/components/store/authentification/Auth';
import { axiosfakeprofile } from '@/components/api/authentification';
import { useLoadingStore } from '@/components/store/loadingStore'; // Importer le store
// Définition du type pour le profil
export type ProfileState = {
  profile: any | null;
  setProfile: (newProfile: any) => void;
  fetchProfile: () => Promise<void>;
}

// Création du store Zustand avec le type
export const useProfileStore = create<ProfileState>((set): ProfileState => ({
  profile: null,
  setProfile: (newProfile) => set({ profile: newProfile }),
  fetchProfile: async () => {
    const { token } = useAuthStore();
    const { setLoading } = useLoadingStore(); // Récupérer la fonction setLoading

    if (!token) {
      console.error('Token d\'autorisation manquant');
      return;
    }
    console.log('Token:', token);
    
    setLoading(true); // Début du chargement

    try {
      const response = await axiosfakeprofile.get('', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      set({ profile: response.data });
      console.log('Profil chargé:', response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération du profil:', error);
    } finally {
      setLoading(false); // Fin du chargement
    }
  }
}));

// Appel de fetchProfile lors de l'initialisation du store
useProfileStore.getState().fetchProfile();

function Profile() {
  const { profile } = useProfileStore();

  return (
    <div>
      Profile: {profile ? JSON.stringify(profile) : 'Aucun profil chargé'}
    </div>
  )
}

export default Profile