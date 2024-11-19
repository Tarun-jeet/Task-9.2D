import React from 'react'
import face from '../images/face.png'
import twitter from '../images/twitter.png'
import insta from '../images/insta.png'

export default function Bottom() {
  return (
    <div className="footer">
        <div className="footer-column1">
        <h3 className="fhead">Explore</h3>
            <a href="#home">Home</a>
            <a href="#questions">Questions</a>
            <a href="#article">Articles</a>
            <a href="#tutorials">Tutorials</a>
        </div>
        <div className="footer-column2">
        <h3 className="fhead">Support</h3>
            <a href="#faq">FAQs</a>
            <a href="#help">Help</a>
            <a href="#contact">Contact Us</a>
        </div>
        <div className="footer-column3">
        <h3 className="fhead">Stay Connected</h3>
            <a href="#insta"><img className="photo"src={insta} alt="instagram"/></a>
            <a href="#twitter"><img className="photo"src={face} alt="facebook"/></a>
            <a href="#facebook"><img className="photo"src={twitter} alt="twitter"/></a>
        </div>
        <div className="bottom">
            <h2>DEV@Deakin 2024</h2>
            <a href="#policy">Privacy Policy</a>
            <a href="#terms">Terms</a>
            <a href="#codeofconduct">Code of Conduct</a>
        </div>
    </div>
  )
}
