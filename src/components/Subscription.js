import React, { useState } from 'react';
import axios from 'axios';

export default function Subscription() {
  const [email, setEmail] = useState('');
  const [alert, setAlert] = useState('');

  const handleSubscribe = async () => {
    try {
      await axios.post('http://localhost:3000/subscribe', { email });
      setAlert('Subscribed successfully!');
      setEmail(''); 
    } catch (error) {
      setAlert('Subscription failed. Please try again.');
    }
  };

  return (
    <div className="Subscription">
      <span className="title">SIGN UP FOR OUR DAILY INSIDER</span>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubscribe}>SUBSCRIBE</button>
      {alert && <div className="alert">{alert}</div>}
    </div>
  );
}
