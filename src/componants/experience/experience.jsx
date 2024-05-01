import { EXPERIENCE } from '../../utils/data'
import './Experience.css'
import React, { useRef } from 'react'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import Slider from "react-slick";


const Experience = () => {
  const sliderRef = useRef();
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows:false,
      responsive:[
          {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,  
          }
      }
      ],
    };
  return (
    <section className='experience-container' id='experience'>
    <h5>Experience</h5>
    <div className='experience-content'>
   <Slider 
     ref={sliderRef} {...settings}>
    {EXPERIENCE.map((item) => (
        <ExperienceCard key= {item.title} details={item} />
    ))}
    </Slider>
    </div>
    <style>
        {`.slick-dots li button:before {
          color: #6751b9;
        }`}
        {`.slick-dots li.slick-active button:before {
          color: #6751b9;
        }`}
      </style>
  </section>
  
  )
}

export default Experience

