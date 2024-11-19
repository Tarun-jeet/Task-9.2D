import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div className="Navbar">
      <Link to="/" className="home-button"> 
        <button>HOME</button>
      </Link>
      <span className="one">{props.title}</span>
      <input type="text" placeholder={props.place} />
      <button>{props.one}</button>
      <Link to="/post">
        <button>{props.two}</button> 
      </Link>
      
      <Link to="/plans">
        <button>PLANS</button> 
      </Link>
    </div>
  );
}
