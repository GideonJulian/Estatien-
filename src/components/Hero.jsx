import React from 'react'
import '../css/Home.css'
import { Link } from 'react-router-dom'
import heroImg from '../assets/heroImg.png'
const Hero = () => {
  return (
    <div id='hero-section'>
        <div className="hero-container">
            <div className="textBox">
              <h1>Discover Your Dream Properties with Estatien</h1>
              <p>Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
              <div className="heroBtn">
                <Link>Learn More</Link>
                <Link>Browse Properties</Link>
              </div>
              <div className="heroBox">
              <div className="box">
                <h3>200+</h3>
                <p>Happy customers</p>
              </div>
              <div className="box">
                <h3>10k+</h3>
                <p>Properties For Clients</p>
              </div>
              <div className="box">
                <h3>16+</h3>
                <p>Years in Business</p>
              </div>
            </div>
            </div>
            <img src={heroImg} alt="" />
            
        </div>
    </div>
  )
}

export default Hero