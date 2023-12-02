import React, { useState } from "react";
import "./Payment.css";
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';




function PaymentForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    customerName: "",
    address: "",
    contactNo: "",
    cardHolderName: "",
    cardNumber: "",
    bankName: "",
    accountNo: "",
  });

  const [orderDetails] = useState({
    totalQuantity: 5, 
    totalPrice: 100.0, 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const paymentData = {
      customername: formData.customerName,
      address: formData.address,
      contactno: formData.contactNo,
      cardholdername: formData.cardHolderName,
      bankname: formData.bankName,
      accountno: formData.accountNo,
    };
  
    Axios.post('http://localhost:3001/payment/', paymentData)
      .then((result) => {
        console.log(result.data);
        if (result.data.message === "Payment saved successfully") {
          navigate("../thankyou");
        }
      })
      .catch((err) => console.error("Error during login:", err));
  };
  

  return (
    <div className="payment-form">
      
      <h1 className="topic">Payment Details</h1>
      <form onSubmit={handleSubmit}>
        <h3 className="subtopic">Customer Details</h3>
        <div className="form-group">
          <label>Customer Name</label>
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Contact Number</label>
          <input
            type="text"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
          />
        
        </div>

       
        <h3>Card Details</h3>

        <div className="form-group">
          <label>Card Holder Name</label>
          <input
            type="text"
            name="cardHolderName"
            value={formData.cardHolderName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Bank Name</label>
          <input
            type="text"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Account Number</label>
          <input
            type="text"
            name="accountNo"
            value={formData.accountNo}
            onChange={handleChange}
          />
        </div>
      
        <button type="submit" className="confirm-button">
          Confirm Order
        </button>
   
        
      </form>
    </div>
  );
}

export default PaymentForm;
