import React from 'react';
import data from './datalist.jsx';
import './Product.css';
import { Link } from 'react-router-dom';

function FruitsProducts() {
  return (
    <section id='fruits'>
      <div className="container">
      <h2 className='name'>Fruits</h2>
      <div className="row product-list">
        {data.fruitsproducts.map((product) => (
          <div key={product.slug} className="col-md-3 mb-3">
            <div className="card product">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className='card-body text'>
                  <h3 className="card-title">{product.name}</h3>
                <h5>{product.Quantity}</h5>
                <h4><strong>Rs.{product.price}</strong></h4>
                <div className='viewdetailsbtn'>
                  
                  <Link to={`/product/${product.slug}`} className="btn btn-success btn-block">
                    <h4>View Details</h4>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  
  );
}

export default FruitsProducts;
