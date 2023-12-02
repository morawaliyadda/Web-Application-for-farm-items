import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../App.css'; 
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function OrderSuccess() {
  return (
    <div>
      <Header/>
    
    <div className="container order-success-page">
      <div className="row">
        <div className="col-md-8 offset-md-2 text-center order-success-content">
          <div className='thankyou-content'>
          <h1 className="display-4">Order Placed Successfully </h1>
          <p className="lead">Thank you for shopping with us. Your order has been confirmed.</p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default OrderSuccess;
