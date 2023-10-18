import { useEffect, useState } from 'react'
import {
  faBootstrap,
  faCss3,
  faGithub,
  faHtml5,
  faFigma,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
     setTimeout(() => {
     return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          A front-end developer with over three years of experience in crafting delightful and user-centric web experiences. I'm on a mission to transform the digital world, one pixel at a time, and I'm excited to share my journey with you.
          </p>
          <h1>My Journey</h1>
          <p align="LEFT">
            My passion for front-end development ignited during my career when I dabbled with HTML and CSS to create a internal site for team updates. The thrill of seeing my ideas come to life on the screen captured my heart, and I decided to dive headfirst into the world of web development.</p>
          <p>
            Since then, I've had the privilege of working with diverse teams on various projects. Each experience has been a unique opportunity to learn and grow, refining my skills and expanding my horizons.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, wife of a man with a beautiful soul, a fitness freak,
            photography enthusiast, and tech-obsessed!!!
          </p>
          <h1>My Expertise</h1>
          <p>
            Front-end development isn't just about writing code; it's about crafting seamless user experiences. Here are some areas where I excel:
            <ol>
              <li><strong>HTML/CSS Mastery:</strong> I'm a stickler for clean, semantic HTML and pixel-perfect CSS. I believe that a strong foundation is essential for any web project.</li>
              <br />
              <li><strong>JavaScript Wizardry:</strong> My JavaScript skills are top-notch. I'm proficient in using frameworks like React and Vue.js to create dynamic and interactive web applications.</li>
              <br />
              <li><strong>Responsive Design:</strong> Ensuring that websites look and function flawlessly on all devices is a priority for me. I'm well-versed in responsive design principles and CSS frameworks like Bootstrap.</li>
              <br />
              <li><strong>Performance Optimization:</strong> Slow websites frustrate users. I make it a point to optimize code and assets for lightning-fast loading times, improving SEO and user satisfaction.</li>
              <br />
              <li><strong>Cross-Browser Compatibility:</strong> I'm meticulous about ensuring that websites work smoothly across all major browsers, so users have a consistent experience.</li>
              <br />
              <li><strong>Version Control:</strong> I'm proficient with Git and collaborative tools like GitHub, making teamwork efficient and code management a breeze.</li>
            </ol>
          </p>
          <h1>What Sets Me Apart</h1>
          <p>
            What makes me unique is my dedication to keeping up with industry trends and best practices. I'm not content with merely meeting the current standards; I strive to stay ahead of the curve. My insatiable curiosity drives me to explore emerging technologies and frameworks, and I'm always eager to take on new challenges.</p>
          <h1>Why Hire Me?</h1>
          <p>
          <ol>
            <li><strong>Passion for Excellence:</strong> I approach every project with a commitment to excellence, aiming to exceed expectations in design, functionality, and performance.</li>
            <br />
            <li><strong>Problem Solver:</strong> I thrive on overcoming complex challenges. Troubleshooting and finding innovative solutions are second nature to me.</li>
            <br />
            <li><strong>Collaborative Spirit:</strong> I'm a team player who values open communication and believes that the best results are achieved through collaboration.</li>
            <br />
            <li><strong>Continuous Learner:</strong> The digital landscape evolves rapidly, and I'm dedicated to continuous learning to stay at the forefront of the industry.</li>
          </ol>
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faBootstrap} color="#606D84" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faFigma} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About