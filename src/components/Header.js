import React from 'react'
import image from '../images/image2.jpg'

export default function Header() {
  return (
    <div className="header">
    <img className= "headerImage" src={image} alt = "HEADER"/>
    <div>
      <h1>Featured Articles</h1>
    </div>
    </div>
    
  );
}




