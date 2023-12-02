import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MessageList from './MessageSCreen';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

const Adminpage = () => {
  const [payments, setPayments] = useState([]);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([])


  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get('http://localhost:3001/payment/payments');
        setPayments(response.data);
      } catch (error) {
        console.error('Error fetching payments:', error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/user/allUsers'); 
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchPayments();
    fetchUsers(); 
  }, []);

  const handleDeletePayment = async (paymentId) => {
    try {
      await axios.delete(`http://localhost:3001/payment/payments/${paymentId}`);
      setPayments(payments.filter((payment) => payment._id !== paymentId));
    } catch (error) {
      console.error('Error deleting payment:', error);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/user/allusers');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:3001/order/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchUsers();
    fetchOrders();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:3001/user/${userId}`);
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleDeleteOrder = async (orderId) => {
    try {
      await axios.delete(`http://localhost:3001/order/${orderId}`);
      setOrders(orders.filter((order) => order._id !== orderId));
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  
  return (
    <div>
      <Header />
      <div className="adminpage-background">
        <div className="container mt-5">
          <h2 className="mb-4 font-weight-bold text-center">All Users</h2>
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteUser(user._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            
          </table>
          <h2 className="mb-4 font-weight-bold text-center">Orders</h2>
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.product}</td>
                  <td>{order.quantity}</td>
                  <td>{order.price}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteOrder(order._id)}
                    >
                      Completed
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2 className="mb-4 font-weight-bold text-center ">All Payments</h2>
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Customer Name</th>
                <th>Address</th>
                <th>Contact Number</th>
                <th>Cardholder Name</th>
                <th>Bank Name</th>
                <th>Account Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment._id}>
                  <td>{payment.customername}</td>
                  <td>{payment.address}</td>
                  <td>{payment.contactno}</td>
                  <td>{payment.cardholdername}</td>
                  <td>{payment.bankname}</td>
                  <td>{payment.accountno}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeletePayment(payment._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <MessageList />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Adminpage;
