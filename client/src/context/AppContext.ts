import { createContext } from 'react';
import type { Product } from '../types/product';
import type { NavigateFunction } from 'react-router-dom';

interface AppContextType {
    products: Product[];
    navigate: NavigateFunction;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);
