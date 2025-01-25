import { useState, useEffect } from 'react';
import useDebounce from './useDebounce';

const useProductSearch = (searchTerm = '') => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Debounce the search term
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const url = new URL('https://api.daaif.net/products');
        if (debouncedSearchTerm) {
          url.searchParams.append('search', debouncedSearchTerm);
        }
        url.searchParams.append('delay', '1000');

        const response = await fetch(url);
        if (!response.ok) throw new Error('Erreur réseau');
        
        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [debouncedSearchTerm]); 

  return { products, loading, error };
};

export default useProductSearch;