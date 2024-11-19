import React from 'react';
import { Link } from 'react-router-dom';
import image from '../images/free.jpg'
import image1 from '../images/30.jpg'
import image2 from '../images/100.jpg'

import './Plan.css';

function Plans() {
  return (
    <div className="plans-page">
      <h2>Choose Your Plan</h2>
      <div className="plan-options">
        <div className="plan-card">
          <img src={image} alt="Free Plan" className="plan-image" /> 
          <h3>Free Plan</h3>
          <p>Access to basic features with no cost.</p>
          <button>Choose Free Plan</button>
        </div>

        <div className="plan-card">
          <img src={image1} alt="$30 Plan" className="plan-image" /> 
          <h3>$30 Plan</h3>
          <p>Access to more advanced features for $30 per month.</p>
          <Link to="/payment/$30">
            <button>Choose Premium Plan</button>
          </Link>
        </div>

        <div className="plan-card">
          <img src={image2} alt="$100 Plan" className="plan-image" /> 
          <h3>$100 Plan</h3>
          <p>Access to all features with premium support for $100 per month.</p>
          <Link to="/payment/$100">
            <button>Choose $100 Plan</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Plans;
