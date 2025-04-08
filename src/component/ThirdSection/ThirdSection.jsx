import React from 'react'
import "./ThirdSection.css"
import ThirdImage from "../../assets/3rdImage.png"

const ThirdSection = () => {
  return (
    <div className='ThirdSection-container'>
  
    <section className='ThirdBodySection'>
      <div>
        <p>PROJECT MANAGEMENT</p>
        <h2>Manage projects and move work forwards faster.</h2>
        <p>Prioritise tasks, share ideas and stay aligned. Slack brings every piece of your project together from start to finish.</p>
        <div id='ThirdBodySectionNote'>
        <p id='ThirdBodySectionFigure'>47%</p>
        <p>increase in productivity for teams using Slack2</p>
        </div>
      </div>
      <div> <img src={ThirdImage} alt="ThirdImage" /></div>

    </section>
    </div>
  )
}

export default ThirdSection
