import React, { createContext, useEffect, useState } from 'react';
import api from '../getway/api';
import { ProductTypes } from '../types/ProductsTypes';

interface ProductsContextType {
    products: ProductTypes[];
    loading: boolean;
    error: string | null;
}

const ProductsContext = createContext<ProductsContextType>({} as ProductsContextType);

interface ProductsProviderProps {
    children: React.ReactNode;
}

const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<ProductTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .get("/getProducts")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <ProductsContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider, ProductsContext };