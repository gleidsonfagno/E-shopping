import { useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom"
import { productDummyData } from "../assets/assets" 
import { AppContext } from './AppContext';
import type { Product } from '../types/product';



export const AppContextProvider  = ({children}: {children: React.ReactNode}) => {

    const [products, setProducts] = useState<Product[]>([])
    const navigate = useNavigate()

    // fetch dos dados 
    const fetchProducts = () => {
        setProducts(productDummyData)
    }
    useEffect(() => {
        fetchProducts()
    },[])
    
    const value = {
        products,
        navigate,
    }
  return <AppContext.Provider value={value}>{children} </AppContext.Provider>
}

