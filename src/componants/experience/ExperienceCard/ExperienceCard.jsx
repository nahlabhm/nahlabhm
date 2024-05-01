import './ExperienceCard.css'

const ExperienceCard = ({details}) => {
  return (
    <div className='experience-card'>
    <h6>{details.title}</h6>

    <div className='duration'> {details.date}</div>
    <ul>
        {details.responsibilities.map((item)=> (
            <li key={item}>{item}</li>
        ))}
    </ul>
    <div className='skills-icon'>
        {details.skills && details.skills.map((item) => (
          <img key={item} src={item} alt='Skill Icon' className='skill-icon' />
        ))}
      </div>
    </div>
  )
}

export default ExperienceCard
