import React from 'react'
import "./Home.css"
import Navbar from '../../component/Navbar/Navbar'
import HeroSection from "../../component/HeroSection/HeroSection"
import MainSection from "../../component/MainSection/MainSection"
import ThirdSection from '../../component/ThirdSection/ThirdSection'
import ForthSection from '../../component/ForthSection/ForthSection'
import FifthSection from '../../component/FifthSection/FifthSection'
import SixthSection from '../../component/SixthSection/SixthSection'
import SeventhSection from '../../component/SeventhSection/SeventhSection'
import Eightsection from '../../component/Eightsection/Eightsection'

const Home = () => {
  return (
    <div className='HomePage'>
      <Navbar/>
      <HeroSection/>
      <MainSection/>
      <ThirdSection/>
      <ForthSection/>
      <FifthSection/>
      <SixthSection/>
      <SeventhSection/>
      <Eightsection/>
      
    </div>
  )
}

export default Home
