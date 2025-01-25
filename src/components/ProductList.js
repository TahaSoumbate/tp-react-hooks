import React, { useState } from 'react';
import useProductSearch from '../hooks/useProductSearch';
import ProductSearch from './ProductSearch';

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { 
    products, 
    loading, 
    error, 
    page, 
    totalPages, 
    reloadProducts, 
    nextPage, 
    prevPage 
  } = useProductSearch(searchTerm);

  return (
    <div className="container mt-4">
      <ProductSearch onSearchChange={setSearchTerm} />

      {loading && <p>Chargement des produits...</p>}
      {error && <p className="text-danger">Erreur : {error}</p>}

      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text font-weight-bold">{product.price} €</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between align-items-center mt-3">
        <button 
          onClick={reloadProducts} 
          className="btn btn-secondary"
          disabled={loading}
        >
          {loading ? 'Chargement...' : 'Recharger'}
        </button>

        <div className="pagination">
          <button 
            onClick={prevPage} 
            className="btn btn-outline-primary mr-2"
            disabled={page === 1}
          >
            Précédent
          </button>
          <span className="mx-2">Page {page} of {totalPages}</span>
          <button 
            onClick={nextPage} 
            className="btn btn-outline-primary"
            disabled={page === totalPages}
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;