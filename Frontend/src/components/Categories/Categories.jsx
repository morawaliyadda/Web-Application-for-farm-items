import React from 'react';
import './Categories.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Category = ({ onCategorySelect }) => {
  return (
    <div className="category-container">
      <div className="category-topic">
        <h2>Category</h2>
      </div>
      <div className="category-buttons">
        <a href='#vegetables' className="btn btn-primary">Vegetables</a>
        <a href='#fruits' className="btn btn-primary">Fruits</a>
        <a href='#farm-products' className="btn btn-primary">Farm Products</a>
      </div>
    </div>
  );
};

export default Category;
