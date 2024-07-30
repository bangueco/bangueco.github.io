import hi from '../../assets/images/hi.png'
import { motion } from 'framer-motion'
import TypingAnimation from '../Animation/TypingAnimation'

export default function Welcome() {

  return (
    <section id="welcome-section">
      <div className="section-container">
        <motion.img 
          id='welcome-avatar' 
          src={hi} 
          alt="hi hello"
          initial={{x: -200, zIndex: -1}}
          animate={{x: 0, zIndex: -1}}
          transition={{type: 'spring', duration: 2}}
        />
        <motion.div
          id='waving-hand'
          initial={{x: 200}}
          animate={{x: 0}}
          transition={{type: 'spring', duration: 2}}
        >
          <div>
            <motion.p
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ repeat: Infinity, duration: 1.3, repeatDelay: 2.5 }}
            >
              👋🏼
            </motion.p>
            <p>Hey there! I am..</p>
          </div>
          <TypingAnimation text="Justine Ivan Gueco" />
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 3}}
          >
            <button>Download CV</button>
            <button>Scroll Down</button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}