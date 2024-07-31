import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import viberr from '../../assets/viberr.png'
import freshburger from '../../assets/fresh-burger.png'
import hipsster from '../../assets/hipsster.png'
import fitlift from '../../assets/fitlift.png'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={viberr} link={''} h3="Viberr" p="Streaming App"/>
            <ProjectCard src={freshburger} link={''} h3="Fresh Burger" p="Hamburger Restraunt"/>
            <ProjectCard src={hipsster} link={''} h3="Hipsster" p="Glasses Shop"/>
            <ProjectCard src={fitlift} link={''} h3="FitLift" p="Fitness App"/>
            
            
        </div>
    
    </section>
  )
}

export default Projects