import { createContext } from 'react';
import type { Product, User } from '../types/product';
import type { NavigateFunction } from 'react-router-dom';

interface AppContextType {
    products: Product[];
    navigate: NavigateFunction;
    user: User | null;
    setUser: (user: User | null) => void;
    showUserLogin: boolean;
    setShowUserLogin: (value: boolean) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);
