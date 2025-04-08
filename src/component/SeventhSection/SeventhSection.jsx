import React from 'react'
import "./SeventhSection.css"
import seventhsymbol from "../../assets/Slack ai.png"

const SeventhSection = () => {
  return (
    <div className='SeventhSection-container'>
      <div id='SeventhSection-Header'>
        <h1>There’s a subscription for every kind of team.</h1>
        <p>Start with a premium subscription, or try the free version.</p>
      </div>
      <div id='SeventhSection-list'>
        <ul>
            <h4>Free</h4>
            <p>A smarter, simpler way to chat and collaborate.</p>
            <br /><br /><br />
            <li>90 days of message history</li>
            <li>Ten app integrations</li>
            <li>1:1 audio and video meetings</li>
        </ul>
        <ul>
            <h4>Pro</h4>
            <p>More power for small teams who want to accelerate work. <br /><br /><br />Everything in Free, and:</p>
            <li>Unlimited message history, app integrations and automations</li>
            <li>Group audio and video meetings</li>
            <li>Collaborate with people outside your organisation</li>
            <li>Create and manage projects in documents and lists</li>
            <br />
            
            <img src={seventhsymbol} alt="seventhsymbol" />Slack AI add-on available 
            <span>new</span>
            

        </ul>
        <ul>
            <h4>Business+</h4>
            <p>Scale your business, productivity and team connection. <br /><br /><br />Everything in Pro, and:</p>
            <li>User provisioning and deprovisioning</li>
            <li>SAML-based single sign-on</li>
            <li>Data exports for all messages</li>
            <li>Message activity analytics</li>
            <br /><br /><br />
            
            <img src={seventhsymbol} alt="seventhsymbol" />Slack AI add-on available 
            <span>new</span>
            
        </ul>
        <ul>
            <h4>Enterprise Grid</h4>
            <p>Maximise performance and productivity at every level of your enterprise. <br /><br /><br />Everything in Business+, and:</p>
            <li>Unlimited workspaces</li>
            <li>Built-in employee directory</li>
            <li>HIPAA-compliant</li>
            <li>Advanced management tools</li>
            <br /><br /><br />
           
            <img src={seventhsymbol} alt="seventhsymbol" />Slack AI add-on available 
            
            
        </ul>
      </div>
      <div>
      <button id='started-button'>GET STARTED</button>
      <button id='find-button'>FIND YOUR SUBSCRIPTION</button>
      </div>
    </div>
  )
}

export default SeventhSection
