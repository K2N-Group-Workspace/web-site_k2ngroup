import { create } from 'zustand';
import { getProducts } from '../../api/k2n_service/Products';

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: {
        id: number;
        name: string;
    };
    images: string[];
    // Ajoutez d'autres propriétés selon vos besoins
}

interface ProductStore {
    products: Product[];
    loading: boolean;
    fetchProducts: () => Promise<void>;
}

export const useProductStore = create<ProductStore>((set) => ({
    products: [],
    loading: false,
    fetchProducts: async () => {
        set({ loading: true });
        try {
            const response = await getProducts.get('/');
            set({ products: response.data });
            console.log(response.data);
        } catch (error) {
            console.error("Erreur lors de la récupération des produits:", error);
        } finally {
            set({ loading: false });
        }
    },
}));

