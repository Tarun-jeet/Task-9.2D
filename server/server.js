const express = require('express');
const stripe = require('stripe')('sk_test_51QMjdBJ8iQYU3M2k910sDiCitMNp8GK3M2z8z9I7XokAtwIpqsmDVFN9pBjJ6oiCDeDH3k8MN9CvgibCbZcK22yI00rAvkfaPJ'); // Your Stripe Secret Key
const app = express();
const port = 3001;

app.use(express.json());

// Create a Payment Intent
app.post('/create-payment-intent', async (req, res) => {
  try {
    const { plan } = req.body;

    // Example: Determine amount based on plan
    const plans = {
      basic: 2000, // $20.00
      premium: 5000, // $50.00
    };

    const amount = plans[plan] || 2000; // Default to $20.00 if no valid plan is provided

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // Set the correct amount dynamically
      currency: 'usd',
    });

    res.send({
      clientSecret: paymentIntent.client_secret, // Send client secret to the frontend
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
