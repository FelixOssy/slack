import React from 'react'
import "./MainSection.css"
import symbol1 from "../../assets/Colobration.png"
import symbol2 from "../../assets/project-management.png"
import symbol3 from "../../assets/integration.png"
import symbol4 from "../../assets/Slack ai.png"
import bodyimage from "../../assets/bodyImage.png"
const MainSection = () => {
  return (
    <div className='MainSection-container'>
    <section className='MainSection-header'>
      <div id='MainSection-Text'>
        <h1>Your people, projects, apps and AI, all on the <br /> world’s most beloved work operating system.</h1>
      </div>
      <div id='MainSection-Symbols'>
        <ul>
          <li>
            <img src={symbol1} alt="symbol1" />COLLABORATION</li>
          <li>
            <img src={symbol2} alt="symbol2" />PROJECT MANAGEMENT</li>
          <li>
            <img src={symbol3} alt="symbol3" />INTEGRATION</li>
          <li>
            <img src={symbol4} alt="symbol4" />SLACK AI</li>
        </ul>
      </div>

    </section>
    <section className='BodySection'>
      <div>
        <p>Collaboration</p>
        <h2>Communicate in countless ways from one place.</h2>
        <p>Slack is built for bringing people and information together. Type things out. Talk things through. Invite external organisations into the conversation.</p>
        <div id='BodySectionNote'>
        <p id='BodySectionFigure'>80%</p>
        <p>
        of the Fortune 100 use Slack Connect to work with partners and customers</p>

        </div>
             </div>
      <div> <img src={bodyimage} alt="bodyimage" /></div>
    </section>
    </div>
  )
}

export default MainSection
