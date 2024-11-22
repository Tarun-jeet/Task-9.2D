import React from 'react';
import { useParams } from 'react-router-dom';
import './Payment.css'
function Payment() {
  const { plan } = useParams(); 

  const handleRedirect = () => {
    const paymentLinks = {
      '$30': 'https://buy.stripe.com/test_7sI14WaZi52j7PabII', 
      '$100': 'https://buy.stripe.com/test_4gw00S4AUdyP6L6289', 
    };

    const paymentLink = paymentLinks[plan];

    if (paymentLink) {
      window.location.href = paymentLink; 
    } else {
      alert('Invalid plan selected!');
    }
  };

  return (
    <div className="payment-container">
      <h2>Payment for {plan} Plan</h2>
      <button onClick={handleRedirect}>Pay for {plan}</button>
    </div>
  );
}

export default Payment;
