import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './CheckoutForm.css';

function CheckoutForm({ plan, onSuccess, onError }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);

    try {
      
      const response = await fetch('http://localhost:3001/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan }),
      });
      const { clientSecret } = await response.json();

      // Confirm payment on the frontend
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (error) {
        console.error("Payment failed:", error);
        onError();
      } else if (paymentIntent.status === 'succeeded') {
        console.log("Payment succeeded!");
        onSuccess();
      }
    } catch (err) {
      console.error("Error processing payment:", err);
      onError();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-form-container">
      <h2>Checkout - Pay for {plan}</h2>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe || loading}>
          {loading ? 'Processing...' : `Pay for ${plan}`}
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;
