import React,{useState,useEffect} from 'react'
import axios from 'axios';
import PaymentForm from '../Payment/Payment';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Cart.css';
import 'bootstrap/dist/css/bootstrap.css';

const Cart = (props) => {
  const [itemsList, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);


  useEffect(() => {
    const fetchItems= async () => {
      try {
        const response = await axios.get('http://localhost:3001/order/orders');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching payments:', error);
      }
    };

    fetchItems();
  }, []);

  function deleteItem(id) {
    axios.delete('http://localhost:3001/order/'+id)
      .then(response => {
        setItems(prevItems => prevItems.filter(item => item._id !== id));
      })
      .catch(error => {
        console.error('Error deleting message:', error);
        alert("error")
      });
  }

  const calculateTotalPrice = () => {
    const total = itemsList.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.quantity * currentItem.price;
    }, 0);
    setTotalPrice(total);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [itemsList]);

  const TabSpace = ({ count }) => {
    const spaces = '\u00A0'.repeat(count); 
    return <span>{spaces}</span>;
  };

  return (
    <div >
      <Header/>
      <div className="container">
      <div className="row">
        <div className='content-full'>
        <div className="col-md-6">
          <div id="cart">
            <div className="list">
                <h1 className='topic'>Products</h1>
              <div className="cart-container">
                {itemsList.map((productItem) => (
                  <div className="col-12 product-item" key={productItem._id}>
                    <div className="product-details">
                      <h3 className='productname'>{productItem.product}</h3>
                      <h4 className='price'>Price: {productItem.price}</h4>
                      <p className='quantity'>Quantity: {productItem.quantity}</p>
                    </div>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteItem(productItem._id)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
              <div className="totalprice">
                <p>Total Price <TabSpace count={2} />:<TabSpace count={1} /> Rs. {totalPrice}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="paymentform">
            <PaymentForm/>
          </div>
        </div>
        </div>
      </div>
    </div>

    <Footer/>

  </div>
  )
};

export default Cart;



