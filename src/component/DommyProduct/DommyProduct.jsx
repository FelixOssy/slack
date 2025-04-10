import { useState, useEffect } from 'react';
import './DommyProduct.css';

const DommyProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="product-list-container">
      <h1>Product Catalog</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.thumbnail} alt={product.title} />
            </div>
            <div className="product-info">
              <h2>{product.title}</h2>
              <p className="brand">Brand: {product.brand}</p>
              <p className="description">{product.description}</p>
              <div className="price-section">
                <span className="price">${product.price}</span>
                <span className="discount">
                  {product.discountPercentage}% off
                </span>
              </div>
              <p className="rating">Rating: {product.rating}/5</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DommyProduct;