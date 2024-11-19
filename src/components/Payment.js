import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51QMjdBJ8iQYU3M2k0lssnWx1GETFdsPTi9BcEqds9dII2ezCk28lang6i8brbdqBwfHabkTMOpVpcNj8rSxSTM8800sQthhYq0'); 

function Payment() {
  const { plan } = useParams(); 
  const navigate = useNavigate();

  const handlePaymentSuccess = () => {
    navigate('/payment-success');
  };

  const handlePaymentError = () => {
    navigate('/payment-failed');
  };

  return (
    <div>
      <h2>Payment for {plan} Plan</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm 
          plan={plan}
          onSuccess={handlePaymentSuccess}
          onError={handlePaymentError}
        />
      </Elements>
    </div>
  );
}

export default Payment;
