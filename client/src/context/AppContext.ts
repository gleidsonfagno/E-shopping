import { createContext } from 'react';
import type { Product } from '../types/product';

interface AppContextType {
    products: Product[]
}

export const AppContext = createContext<AppContextType | undefined>(undefined);
