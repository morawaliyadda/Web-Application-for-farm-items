import React from 'react';
import './Services.css';
import { FaBox } from 'react-icons/fa';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Services = () => {
  const services = [
    {
      title: 'Sustainable Farming Practices',
      description: 'Harvesting Tomorrow, Preserving Today.Adopt eco-friendly techniques that conserve resources and promote the well-being of your crops and the environment.',
    },
    {
      title: 'Equipment and Technology Integration',
      description:'Farming Meets Innovation.Integrate cutting-edge technology into your farming operations for improved efficiency and precision.',
    
    },
    {
      title: ' Market Access and Distribution',
      description:'Harvest to Market, Seamlessly.Connect your harvest to markets and establish efficient distribution channels for your produce.',
      
    },
  ];

  return (
    <div>
      <Header/>
      <div className="container services-container">
        
        <h2 className="main-title">Our Services</h2>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-4" key={index}>
              <div className="service-card card">
                <FaBox className="icon" style={{ fontSize: '3rem' }} />
                <div className="card-body">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
    
  );
};

export 
default Services;