import React, { useState } from 'react'
import SkillsCard from './SkillsCard/SkillsCard'
import { SKILLS } from '../../utils/skillsdata'
import './Skills.css'
import SkillsInfo from './skillsInfo/SkillsInfo'


const Skills = () => {
  const [selectedSkill , setselectedSkill] = useState(SKILLS[0]);
  
  const handleSelectedSkill =(data) => {
    setselectedSkill(data)
  }
  return (
    <section className='skills-container' id='skills'>
       <h5>Technical proficiency</h5>

       <div className='skills-content'>
         <div className='skills'>
           {SKILLS.map((item) => (
               <SkillsCard key={item.title} 
               iconUrl={item.icon}
               title={item.title}
               isActive={selectedSkill.title === item.title}
               onClick={() => {
                handleSelectedSkill(item)
               }}
               />
           ))}
         </div>
         <div className='skills-info'>
           <SkillsInfo 
           heading={selectedSkill.title}
           skills={selectedSkill.skills}
           />
          </div>
       </div>
    </section>
  )
}

export default Skills
