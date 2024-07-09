import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'


const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
       <p className="font-medium sm:text-xl text-center">{text}</p> 
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)

const renderContent ={
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center 
        neo-brutalism-blue py-4 px-8 text-white mx-5 
        ">Hi, I am <span className='font-semibold'> Jonathan Emmanuel</span>👋
        <br />
        A Software Developer from Nigeria
        </h1>
    ),
    2: (
        <InfoBox 
        text="Worked with companies both small and big and picked up many important experience along the way "
        link="/about"
        btnText="Learn more"
         />
    ),
    3: (
        <InfoBox 
        text="Built many projects for companies, clients over the years. Curious about it? "
        link="/projects"
        btnText="Visit my Portfolio"
         />
    ),
    4: (
        <InfoBox 
        text=" Want to build a Project or  SAAS or looking for a dev? am a keystroke away "
        link="/contact"
        btnText="Let's Talk"
         />
    ),
}



const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo

