import React, {useState} from "react";
import { useParams  } from "react-router-dom";
import data from '../components/Product/datalist';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'
import axios from 'axios';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function ProductScreen(){
    const params =useParams();
    const {slug} = params;
    
    const product = data.vegeproducts.concat(data.fruitsproducts, data.farmproducts).find(product => product.slug === slug);
    
    const [quantity, setQuantity] = useState(1);
    
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
      };
  
      const decreaseQuantity = () => {
        if (quantity > 1) {
          setQuantity(quantity - 1);
        }
    };

    

    const addToCart = () => {
        const cartItem = {
          product: product.name, 
          price: product.price,
          quantity: quantity
        };
    
        axios
        .post('http://localhost:3001/order/', cartItem)
        .then(result => {
          console.log('Item added to cart:', result);
          alert("Item added to cart")
        })
        .catch(error => {
          console.error('Error adding item to cart:', error);
          alert("Error adding item to cart")
        });
        };

    if (!product) {
        return <div>Product not found</div>;
    }
    
    return (
        <div>
            <Header/>
            <div className="row">
              <div className="col-md-4">

              <div className="detail-image rounded-full">
             <img
                src={product.image}
                alt={product.name}
                style={{ borderRadius: '50%', transition: 'border-radius 0.3s, transform 0.3s' }}
                className="image-hover"
                />
              </div>

              </div>
              <div className="col-md-4">
                <h1 >{product.name}</h1>
                <h4>Price      : Rs.{product.price}</h4>
                <p className ="text-left">{product.description}</p>
                <h6>In Stock   :{product.Instock }</h6>
                <div className="cartbtn">
                    <button onClick={addToCart}>Add to cart</button>
                </div>    
              </div>
              <div className="col-md-4">
                <h5 className="quantitytopic">Quantity</h5>
                <div className="quantity-controls">
                   <button onClick={decreaseQuantity}>-</button>
                   <span>{quantity}</span>
                   <button onClick={increaseQuantity}>+</button>
                </div>
              </div>
            </div>
            <Footer/>
        </div>
    );
}
export default ProductScreen;