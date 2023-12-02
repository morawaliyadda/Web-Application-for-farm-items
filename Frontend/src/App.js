import React from "react";
import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import HomeScreen from './screens/Homescreen';
import ProductScreen from './screens/ProductScreen';
import AboutScreen from './screens/AboutScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import SignIn from './screens/SignIn';
import  SignUp  from './screens/SignUp';
import Cart from './components/Cart/Cart';
import PaymentForm from './components/Payment/Payment';
import Adminpage from './screens/Adminpage';
import AdminSignIn from "./screens/AdminSignin";
import OrderSuccess from './screens/thankyou';
import SearchBar from './components/SearchBar/Seachbar';
import Carousel from "./components/GetStart/Carousel";
import Services from "./components/Services/Services";




function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <header > 
       
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Carousel />}/>
          <Route path='/signin' element={<SignIn />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/home' element={<HomeScreen />}/>
          <Route path='/product/:slug' element={<ProductScreen/>}/>
          <Route path='/about' element={<AboutScreen/>}/>
          <Route path='/contact' element={<ContactUsScreen/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/pay' element={<PaymentForm/>}/>
          <Route path='/adminsignin' element={<AdminSignIn/>}/>
          <Route path='/admin' element={<Adminpage/>}/>
          <Route path='/thankyou' element={<OrderSuccess/>}/>
          <Route path="/srceens/ProductScreen" element={<SearchBar/>} />
          <Route path='/services' element={<Services/>}/> 
           
        </Routes>
      </main>
     
    </div>
    </BrowserRouter>
    
  );
}

export default App;
