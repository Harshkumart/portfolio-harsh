import styles from './Herostyle.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
 const {theme, toggleTheme} = useTheme();

 const themeIcon = theme === 'light' ? sun : moon;
 const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
 const githubIcon = theme === 'light' ? githubLight : githubDark;
 const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
      <img className={styles.hero} src={heroImg} alt="Profile picture of me" />
      <img className={styles.colorMode} src={themeIcon} alt="Color made icon" onClick={toggleTheme}/>
    
    </div>

    <div className={styles.info}>
      <h1>Harsh
        <br/>
         Kumar</h1>
      <h2>Full-Stack Developer</h2>
      <span>
        <a href="https://x.com/harshk1902?t=NQGRc4rNlDgpRTcKur4xow&s=09" target="_blank">
          <img src={twitterIcon} alt="" />
        </a>
        <a href="https://github.com/Harshkumart" target="_blank">
          <img src={githubIcon} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/harsh-kumar-b24076258/" target="_blank">
          <img src={linkedinIcon} alt="" />
        </a>
      </span>
      <p className={styles.description}>A full-stack developer with DevOps expertise based in  specializing in developing modern, reactive, and user-friendly web applications using cutting-edge technologies. My approach integrates UI/UX design with building scalable applications that effortlessly manage multiple users.</p>
      <a href={CV} download>
        <button className="hover" >
          Resume
        </button>
      </a>
    </div>
  </section>
}

export default Hero