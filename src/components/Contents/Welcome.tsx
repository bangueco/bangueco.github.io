import hi from '../../assets/images/hi.png'
import { motion } from 'framer-motion'

export default function Welcome() {
  return (
    <section id="welcome-section">
      <div className="section-container">
        <motion.img 
          id='welcome-avatar' 
          src={hi} 
          alt="hi hello"
          initial={{opacity: 0, zIndex: -1}}
          animate={{opacity: 1, zIndex: -1}}
          transition={{type: 'spring', duration: 3}}
        />
        <motion.div 
          id='welcome-introduction'
          initial={{opacity: 0, scale: 0.3}}
          animate={{opacity: 1, scale: 1, zIndex: -1}}
          transition={{duration: 0.8}}
        >
          <p>Hello, I'm Justine Ivan Gueco</p>
          <div>
            <p>I'm a fullstack developer, with an expertise in web and mobile development. I am fully commited to delivering high quality projects from scratch.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}