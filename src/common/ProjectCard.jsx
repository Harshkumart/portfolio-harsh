import React from 'react'
import viberr from '../assets/viberr.png'

function ProjectCrd({src,link,h3,p}) {
  return (
    <a href={link} target='_blank'>
        <img className="hover" src={src} alt={"${h3} logo"} />
        <h3>{h3}</h3>
        <p>{p}</p>
    
    </a>
    
           
  )
}

export default ProjectCrd