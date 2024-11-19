import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ArticleArray from './components/ArticleArray';
import TutorialArray from './components/TutorialArray';
import Subscription from './components/Subscription';
import Bottom from './components/Bottom';
import Post from './PComponents/Post';
import FindQuestion from './PComponents/FindQuestion';
import PostNav from './routes/PostNav';
import Plans from './components/Plan'; // Import Plans component
import Payment from './components/Payment'; // Import Payment component
import PaymentSuccess from './components/PaymentSuccess'; // Import PaymentSuccess component
import PaymentFailed from './components/PaymentFailed'; // Import PaymentFailed component

function App() {
  return (
    <Router>
      <Navbar title="DEV@Deakin" two="POST" one="LOG IN" place="Search..." />

      <Routes>
        {/* Home route rendering all the necessary components */}
        <Route 
          path="/" 
          element={
            <>
              <Header />
              <ArticleArray />
              <TutorialArray />
              <Subscription />
              <Bottom />
            </>
          } 
        />

        <Route 
          path="/post" 
          element={
            <>
              <PostNav />
              <Post />
            </>
          } 
        />

        <Route 
          path="/find-question" 
          element={
            <>
              <PostNav />
              <FindQuestion />
            </>
          } 
        />

        {/* Plans Page */}
        <Route path="/plans" element={<Plans />} />

        {/* Payment Routes */}
        <Route path="/payment/:plan" element={<Payment />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-failed" element={<PaymentFailed />} />
      </Routes>
    </Router>
  );
}

export default App;
