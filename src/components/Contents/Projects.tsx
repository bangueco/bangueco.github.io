import portfolio from '../../../public/projects/portfolio.png'
import plus_ultra from '../../../public/projects/plus-ultra.jpg'
import sketcher from '../../../public/projects/8bit-sketcher.png'
import { LuEye, LuGithub } from "react-icons/lu";

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-container container">
        <h1>Projects</h1>
        <div id="my-projects">
          <div className="project-card">
            <img src={sketcher} alt="sketcher" />
            <h1 className="project-title">
              8-Bit Sketcher
            </h1>
            <p className="project-description">
              A simple web application that lets you draw with your mouse.
            </p>
            <div className="project-technologies">
              <p>HTML</p>
              <p>CSS</p>
              <p>Javascript</p>
            </div>
            <div className="project-link">
              <a href='https://github.com/bangueco/8bit-sketcher' target='_blank'>
                <LuGithub color='white' />
                View
              </a>
              <p>|</p>
              <a href="https://bangueco.github.io/8bit-sketcher/" target='_blank'>
                <LuEye />
                View
              </a>
            </div>
          </div>
          <div className="project-card">
            <img src={portfolio} alt="portfolio" />
            <h1 className="project-title">
              My Portfolio Website
            </h1>
            <p className="project-description">
              My personal portfolio website showcases my skills, projects, and experiences as a developer.
            </p>
            <div className="project-technologies">
              <p>Typescript</p>
              <p>React JS</p>
              <p>CSS</p>
            </div>
            <div className="project-link">
              <a href='https://github.com/bangueco/bangueco.github.io' target='_blank'>
                <LuGithub color='white' />
                View
              </a>
              <p>|</p>
              <a href="https://bangueco.vercel.app" target='_blank'>
                <LuEye />
                View
              </a>
            </div>
          </div>
          <div className="project-card">
            <img src={plus_ultra} alt="plus-ultra" />
            <h1 className="project-title">
              Plus Ultra
            </h1>
            <p className="project-description">
              A mobile application that tracks workout and identify gym equipments.
            </p>
            <div className="project-technologies">
              <p>Typescript</p>
              <p>React Native</p>
              <p>Express JS</p>
              <p>Prisma</p>
              <p>Postgresql</p>
            </div>
            <div className="project-link">
              <a href='https://github.com/bangueco/plus-ultra' target='_blank'>
                <LuGithub color='white' />
                View
              </a>
              <p>|</p>
              <a href="https://bangueco.vercel.app" target='_blank'>
                <LuEye />
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects