import React from 'react'
import "./FifthSection.css"
import Fifthimage from "../../assets/FifthImage.png"

const FifthSection = () => {
  return (
    <div className='FifthSection-container'>
  
    <section className='FifthBodySection'>
      <div>
        <p>SLACK AI</p>
        <h2>Do more with AI that works where you do.</h2>
        <p>Search your entire company history for answers, instantly catch up on conversations and get daily recaps of messages missed.</p>
        <div id='FifthBodySectionNote'>
        <p id='FifthBodySectionFigure'>97 mins</p>
        <p>
        average time that users can<br/> save weekly with Slack AI4</p>
        </div>
      </div>
      <div> <img src={Fifthimage} alt="Fifthimage" /></div>

    </section>
    </div>
  )
}

export default FifthSection
