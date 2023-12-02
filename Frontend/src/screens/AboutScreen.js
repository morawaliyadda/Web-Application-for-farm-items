import React from 'react';
import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function AboutScreen() {
  return (
    <div>
      <Header/>
      <div className='about-full-content'>
      <div className="about-container">
        <h2 className='about-topic'>About Us</h2>
        <p className='about-details'>
          Welcome to FarmFresh! We are dedicated to supporting farmers and agricultural enthusiasts by providing the tools and resources they need for successful farming operations.
        </p>
        <p className='about-details'>
          Our mission is to promote sustainable farming practices, share knowledge, and connect farmers with the latest technologies and market trends.
        </p>
        <p className='about-details'>
          Whether you're a seasoned farmer or just getting started, we're here to assist you on your farming journey. Explore our features, access valuable information, and connect with our community of farmers and experts.
        </p>
        <p className='about-details'>
          If you have any questions or feedback, please don't hesitate to <a className='about-contact' href="/contact">contact us</a>.
        </p>
      </div>
      </div>
      
      <Footer/>
    </div>
  );
}

export default AboutScreen;
