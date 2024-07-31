function SkillsList({src,skill,link}) {
  return (
    <span>
       <a href={link}>
        <img src={src} alt='Checkmark icon'/>
        <p>{skill}</p>
       </a>
    </span>
  )
}

export default SkillsList