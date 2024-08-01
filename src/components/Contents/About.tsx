import me from '../../assets/images/me.jpg'
import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about">
      <div className="section-container">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{duration: 1.2}}
          viewport={{once: true}}
        >
          <div id="about-details">
            <h1>About Me</h1>
            <p>
              I'm 21 years old, an incoming 4th year college taking Bachelor Of Science in Information Technology, in Eastwoods Professional College of
              Science and Technology. I specialize in web and mobile development. I also have a solid foundation in backend development, in addition, 
              with my frontend skills and knowledge, this makes me a versatile fullstack developer. I began programming in my second year of college, 
              once I had access to a laptop and computer, which allowed me to fully learn how to code.
            </p>
            <p>
              I continue to hone my skills and knowledge, in-order to keep up with the current technology trends and ensure that I'm well-equipped 
              to tackle the challenges of the ever-evolving tech industry. My journey in tech is driven by a passion for creating innovative solutions 
              and a commitment to lifelong learning.
              Looking ahead, I am eager to leverage my knowledge and skills in a dynamic work environment where I can contribute to impactful 
              projects and continue to grow as a developer. My goal is to work with innovative teams that push the boundaries of technology and 
              deliver cutting-edge solutions.
            </p>
          </div>
          <img id='about-image' src={me} alt="" />
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{duration: 1.5}}
          viewport={{once: true}}
        >
          <div id="about-tech-stacks">
            <h1>Current Tech Stack</h1>
            <div id="stacks-container">
              <div className="tech">
                <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/HTML.svg" alt="HTML" />
                <p className='hidden'>HTML</p>
              </div>
              <div className="tech">
                <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/CSS.svg" alt="CSS" />
                <p className='hidden'>CSS</p>
              </div>
              <div className='tech'>
                <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/TailwindCSS-Dark.svg" alt="Tailwind" />
                <p className='hidden'>Tailwind CSS</p>
              </div>
              <div className="tech">
                <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/JavaScript.svg" alt="JS" />
                <p className="hidden">Javascript</p>
              </div>
              <div className="tech">
                <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/TypeScript.svg" alt="TS" />
                <p className="hidden">Typescript</p>
              </div>
              <div className="tech">
                <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/React-Dark.svg" alt="React" />
                <p className="hidden">React</p>
              </div>
              <div className="tech">
                <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/NodeJS-Dark.svg" alt="NodeJS" />
                <p className="hidden">NodeJS</p>
              </div>
              <div className="tech">
                <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/ExpressJS-Dark.svg" alt="Express" />
                <p className="hidden">Express JS</p>
              </div>
              <div className="tech">
                <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Prisma.svg" alt="Prisma" />
                <p className="hidden">Prisma</p>
              </div>
              <div className="tech">
                <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/PostgreSQL-Dark.svg" alt="Postgresql" />
                <p className="hidden">Postgresql</p>
              </div>
              <div className="tech">
                <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/MongoDB.svg" alt="MongoDB" />
                <p className="hidden">MongoDB</p>
              </div>
              <div className="tech">
                <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Vitest-Dark.svg" alt="Vitest" />
                <p className="hidden">Vitest</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}