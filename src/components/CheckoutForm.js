import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './CheckoutForm.css'; // Import the CSS file

function CheckoutForm({ plan, onSuccess, onError }) {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const { error, paymentIntent } = await stripe.confirmCardPayment('sk_test_51QMjdBJ8iQYU3M2k910sDiCitMNp8GK3M2z8z9I7XokAtwIpqsmDVFN9pBjJ6oiCDeDH3k8MN9CvgibCbZcK22yI00rAvkfaPJ', {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (error) {
      onError();
    } else if (paymentIntent.status === 'succeeded') {
      onSuccess();
    }
  };

  return (
    <div className="checkout-form-container">
      <h2>Checkout - Pay for {plan}</h2>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>Pay for {plan}</button>
      </form>
    </div>
  );
}

export default CheckoutForm;
