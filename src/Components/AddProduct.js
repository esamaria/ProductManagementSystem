import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { IoIosCloseCircle } from 'react-icons/io';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: '',
    category: ''
  });

  const [inputDiv, setInputDiv] = useState(true); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div>
      {inputDiv && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid #ccc',
            borderRadius: '20px',
            backgroundColor: '#B5BAD0',
            padding: '20px',
            marginBottom: '20px',
            width: '300px',
            marginLeft: '35px',
            marginTop: '20px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IoIosCloseCircle onClick={() => setInputDiv(false)} />
          </div>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Product Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ marginBottom: '10px' }}
              fullWidth
            />
            <TextField
              label="Image URL"
              name="image"
              value={formData.image}
              onChange={handleChange}
              style={{ marginBottom: '10px' }}
              fullWidth
            />
            <TextField
              label="Price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              style={{ marginBottom: '10px' }}
              fullWidth
            />
            <TextField
              label="Category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              style={{ marginBottom: '10px' }}
              fullWidth
            />
            <Button variant="contained" type="submit" style={{ marginTop: '10px' }}>
              Add Product
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
