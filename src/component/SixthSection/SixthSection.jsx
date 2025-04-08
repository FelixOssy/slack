import React from 'react'
import "./SixthSection.css"
import delivero from "../../assets/delivero.png"
import sportify from "../../assets/spotify.png"
import openai from "../../assets/open Ai.png"
import ezcater from "../../assets/ezcater.png"

const SixthSection = () => {
  return (
    <div className='SixthSection-container'>
      <div>
        <h1>The most innovative companies run <br />their business in Slack.</h1>
      </div>
      <div>
        <img src={delivero} alt="delivero" />
        <img src={sportify} alt="sportify" />
        <img src={openai} alt="openai" />
        <img src={ezcater} alt="ezcater" />
      </div>
    </div>
  )
}

export default SixthSection
