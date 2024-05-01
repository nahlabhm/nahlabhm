import React, { useState } from 'react'
import './Project.css'
import { PROJECT } from '../../utils/projectdata';
import ProjectCard from './ProjectsCard/ProjectCard';
import ProjectInfo from './ProjectInfo/projectInfo';


const Project = () => {
  const [selectedProject , setselectedProject] = useState(PROJECT[0]);
  
  const handleSelectedProject =(data) => {
    setselectedProject(data)
  }
  return (
    <section className='projects-container' id='project'>
    <h5>Projects</h5>

    <div className='projects-content'>
      <div className='projects'>
      {PROJECT.map((item) => (
               <ProjectCard key={item.title} 
               iconUrl={item.icon}
               title={item.title}
               isActive={selectedProject.title === item.title}
               onClick={() => {
                handleSelectedProject(item)
               }}
               />
           ))}
      </div>
      <div className='projects-info'>
      <ProjectInfo
           projects = {selectedProject.projects}
           />
       </div>
    </div>
 </section>
  )
}

export default Project
