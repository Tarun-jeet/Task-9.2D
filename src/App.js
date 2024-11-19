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
import Plans from './components/Plan'; 
import Payment from './components/Payment'; 
import PaymentSuccess from './components/PaymentSuccess'; 
import PaymentFailed from './components/PaymentFailed'; 

function App() {
  return (
    <Router>
      <Navbar title="DEV@Deakin" two="POST" one="LOG IN" place="Search..." />

      <Routes>
        
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

        <Route path="/plans" element={<Plans />} />

        <Route path="/payment/:plan" element={<Payment />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-failed" element={<PaymentFailed />} />
      </Routes>
    </Router>
  );
}

export default App;
