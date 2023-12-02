import React from 'react';
import { Link } from 'react-router-dom'; 
import './Carousel.css'; 

function FrontPage() {
  return (
    <div>
      
    <header >
      <div className="container">
        <p className='main_topic'>Fresh Organic Produce & Artisan Farm Products</p>
        <p className='main_topic'>-----------------------------------------------------</p>
        <p className='intro'>Experience the bounty of nature at FarmFresh <br/> your gateway to farm-to-table excellence. Indulge in the finest locally sourced delights<br/> where freshness meets flavor in every bite.
        </p>
      </div>
    </header>
 


      <div className="front-page">
        <div className="background-image">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-content">
                <h1 className="custom-font">Farm Fresh</h1>
                <h2 className="custom-font topic">
                  Farm Box Home Delivery
                </h2>
                <p className="custom-font description">
                  From Our Farm to Your Doorstep
                </p>
                <Link to="/signin">
                  <button className="btn btn-primary">START</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
