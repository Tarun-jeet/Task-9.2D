import React from 'react';
import './CheckoutForm.css';

function CheckoutForm({ plan }) {
  const handleRedirect = () => {
    
    const paymentLinks = {
      basic: 'https://buy.stripe.com/test_basicPlanLink', 
      premium: 'https://buy.stripe.com/test_7sI14WaZi52j7PabII', 
    };

    const paymentLink = paymentLinks[plan];

    if (paymentLink) {
     
      window.location.href = paymentLink;
    } else {
      alert('Invalid plan selected!');
    }
  };

  return (
    <div className="checkout-form-container">
      <h2>Checkout - Pay for {plan} Plan</h2>
      <button onClick={handleRedirect}>
        Pay for {plan}
      </button>
    </div>
  );
}

export default CheckoutForm;
