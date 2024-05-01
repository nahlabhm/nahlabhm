import React from 'react'
import linkedinLogo from '../../assets/icons8-linkedin.svg';
import githubLogo from '../../assets/icons8-github.svg';
import gmailLogo from '../../assets/icons8-gmail .svg';
import localLogo from '../../assets/icons8-location-64.png';
import phoneLogo from '../../assets/icons8-phone-64.png';
import profileLogo from '../../assets/a87527e3-ed38-47b5-9d31-1073f6d164e5-removebg-preview.png';
import "./Hero.css"
const Hero = () => {
  return (
    <section className='hero-container' id='home'>
      <div className='hero-content'>
      <span className='subtitle'>full stack developer</span>
        <h1 className='title'><span>Hello i'm</span> Nahla ben haj mabrouk</h1>
        <p>Enthusiastic aspiring Full Stack Developer eager to build innovative web applications. Proficient in front-end and back-end development, with a strong focus on designing and implementing reliable, scalable solutions</p>
        <a href="https://github.com/nahlabhm" className='tech-icon'>
        <img src={githubLogo} alt="GitHub Logo" />
        </a>
        <a href="https://www.linkedin.com/in/nahla-ben-haj-mabrouk-898080286/" className='tech-icon'>
         <img src={linkedinLogo} alt="LinkedIn Logo" />
         </a>
          <a href="mailto:nahlabenhajmabrou@gmail.com" className='tech-icon'>
       <img src={gmailLogo} alt="Gmail Logo" />
          </a>
          <a href="https://maps.google.com/?q=Sidi+Ameur,+Monastir,+Tunisia" className='tech-icon'>
           <img src={localLogo} alt="Gmail Logo" />
           </a>
           <a href="tel:+21650932315" className='tech-icon'>
             <img src={phoneLogo} alt="Phone Logo" />
           </a>

         </div>

      <div className="hero-img">
        <div>
        <img src={profileLogo} alt="LinkedIn Logo" />
        </div>
       </div>
    </section>
  )
}

export default Hero
