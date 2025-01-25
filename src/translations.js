export const translations = {
    fr: {
      productCatalog: 'Catalogue de Produits',
      searchPlaceholder: 'Rechercher un produit...',
      loading: 'Chargement des produits...',
      error: 'Erreur',
    },
    en: {
      productCatalog: 'Product Catalog',
      searchPlaceholder: 'Search for a product...',
      loading: 'Loading products...',
      error: 'Error',
    }
  };
  
  export const translate = (lang, key) => {
    return translations[lang][key] || key;
  };