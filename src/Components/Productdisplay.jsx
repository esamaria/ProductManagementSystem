import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Productdisplay = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#B5BAD0', marginBottom: '20px' }}>
        Product Dashboard
      </h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '2px solid #ccc',
              borderRadius: '15px',
              backgroundColor: '#f9fce1',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              padding: '20px',
              textAlign: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            }}
          >
           
            <img
              src={product.image}
              alt={product.title}
              style={{ width: '120px', height: '120px', marginBottom: '10px' }}
            />
            
            <h3 style={{ color: '#2B4B67', marginBottom: '10px' }}>{product.title}</h3>
            <p style={{ fontWeight: 'bold', color: '#333' }}>Price: ${product.price}</p>
            <p style={{ color: '#555', marginBottom: '15px' }}>Category: {product.category}</p>
            {/* Buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <button
                style={{
                  borderRadius: '15px',
                  backgroundColor: '#2B4B67',
                  color: 'white',
                  padding: '10px 20px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Buy
              </button>
              <button
                style={{
                  borderRadius: '15px',
                  backgroundColor: '#2B4B67',
                  color: 'white',
                  padding: '10px 20px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productdisplay;
