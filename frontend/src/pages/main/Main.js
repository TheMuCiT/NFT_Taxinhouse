import React from 'react'
import Header from '../../components/header/Header'
import Animation from '../../components/animation/Animation'

import './main.css'
import Timer from '../../components/timer/Timer'
import InfoBar from '../../components/infoBar/InfoBar'
import Roadmap from '../../components/roadmap/Roadmap'
import Contact from '../../components/contact/Contact'
import LearnMore from '../../components/learnMore/LearnMore'

const Main = () => {
     return (
          <div className='main'>
               <Header />
               <Timer />
               <InfoBar />
               <Roadmap />
               <Contact />
               <LearnMore />
               <Animation />
          </div>
     )
}

export default Main
