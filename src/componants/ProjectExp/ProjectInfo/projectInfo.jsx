import React from 'react'
import'./projectInfo.css'

const ProjectInfo = ({ projects}) => {
  return (
    <div className='projects-info-card'>
      <div className='projects-info-content'>
        {projects.map((item, index) => (
          <React.Fragment key={`project_${index}`}>
          <div className='project-info'>
      <img key={item.project} src={item.project} alt='project Icon' className='project-icon' />
        <p> {item.description}</p>
        <a href={item.lien} target="_blank" rel="noopener noreferrer" className='project-lien'>Visit project</a>
            <div className='skills-icon'>
              {Array.isArray(item.projectskills) && item.projectskills.map((skill, skillIndex) => (
                <img key={skillIndex} src={skill} alt='Skills Icon' className='skills-icons' />
              ))}
            </div>
    </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default ProjectInfo
