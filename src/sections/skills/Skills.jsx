import styles from './SkillsStyle.module.css'
import vscodeIcon from '../../assets/vs-code.svg'
import javascriptIcon from '../../assets/javascript.svg'
import typescriptIcon from '../../assets/typescript.svg'
import nextjsIcon from '../../assets/nextjs.svg'
import reactIcon from '../../assets/react.svg'
import tailwindIcon from '../../assets/tailwind.svg'
import materialuiIcon from '../../assets/materialui.svg'
import SassIcon from '../../assets/sass.svg'
import githubIcon from '../../assets/github.svg'
import dockerIcon from '../../assets/docker.svg'
import kubernetesIcon from '../../assets/kubernetes.svg'
import golangIcon from '../../assets/golang.svg'
import SkillsList from '../../common/SkillsList'

function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
            <SkillsList src={vscodeIcon} skill="VS Code" link="https://code.visualstudio.com/"/>
            <SkillsList src={javascriptIcon} skill="Javascript" link={'https://www.javascript.com/'}/>
            <SkillsList src={typescriptIcon} skill="Typescript" link={'https://www.typescriptlang.org/'}/>
        </div>
        <div className={styles.skillList}>
            <SkillsList src={reactIcon} skill="React JS" link={'https://react.dev/'}/>
            <SkillsList src={nextjsIcon} skill="Next JS" link={'https://nextjs.org/'}/>
            <SkillsList src={tailwindIcon} skill="Tailwind CSS" link={'https://tailwindcss.com/'}/>
        </div>
        <div className={styles.skillList}>
            <SkillsList src={materialuiIcon} skill="Material UI" link={'https://mui.com/material-ui/'}/>
            <SkillsList src={SassIcon} skill="SASS" link={'https://sass-lang.com/'}/>
            <SkillsList src={githubIcon} skill="Github" link={'https://github.com/'}/>
        </div>
        <div className={styles.skillList}>
            <SkillsList src={dockerIcon} skill="Docker" link={'https://www.docker.com/'}/>
            <SkillsList src={kubernetesIcon} skill="Kubernetes" link={'https://kubernetes.io/'}/>
            <SkillsList src={golangIcon} skill="Golang" link={'https://go.dev/'}/>
        </div>
    </section>
  )
}

export default Skills