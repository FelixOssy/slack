import React from 'react'
import "./HeroSection.css"
import logo1 from "../../assets/Airbnb.png"
import logo2 from "../../assets/Uber.png"
import logo3 from "../../assets/dot.png"
import logo4 from "../../assets/etsy.png"
import logo5 from "../../assets/nasa.png"
import logo6 from "../../assets/the-new-times.png"
import mainimage from "../../assets/main-image.png"

const HeroSection = () => {
  return (
    <div className='HeroSection-Container'>
        <div className='HeroSection-Header'>
            <h1>Where <span>work</span> happens</h1>
          <div>
          <button id='started-button'>GET STARTED</button>
          <button id='find-button'>FIND YOUR SUBSCRIPTION</button>
          </div>
            <p>Slack is free to try <span>for as long as you like</span></p>
        </div>
        <div className='HeroSection-logo'>
            <ul>
                <li>
                    <img id='logo' src={logo1} alt="airbnb" />
                </li>
                <li>
                    <img id='logo' src={logo2} alt="uber" />
                </li>
                <li>
                    <img id='logo' src={logo3} alt="dot" />
                </li>
                <li>
                    <img id='logo' src={logo4} alt="Etsy" />
                </li>
                <li>
                    <img id='logo' src={logo5} alt="nasa" />
                </li>
                <li>
                    <img id='logo' src={logo6} alt="the-new-times" />
                </li>
            </ul>
        </div>
        <div className='HeroSection-image'>
<img src={mainimage} alt="mainimage" />
        </div>
      
    </div>
  )
}

export default HeroSection
