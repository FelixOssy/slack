import React from 'react'
import "./ForthSection.css"
import Forthimage from "../../assets/Forthimage.png"

const ForthSection = () => {
  return (
    <div className='ForthSection-container'>
  
    <section className='ForthBodySection'>
      <div>
        <p>INTEGRATION</p>
        <h2>Tap into the tools that you already use.</h2>
        <p>Over 2,600 apps are ready to connect in Slack, so you can automate everyday tasks in the flow of work and save your team precious time.</p>
        <div id='ForthBodySectionNote'>
        <p id='ForthBodySectionFigure'>35%</p>
        <p>
        increase in time saved due to automation for Slack users3</p>
        </div>
      </div>
      <div> <img src={Forthimage} alt="Forthimage" /></div>

    </section>
    </div>
  )
}

export default ForthSection
