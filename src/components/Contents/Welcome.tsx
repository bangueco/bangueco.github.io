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
          initial={{x: -80, opacity: 0, zIndex: -1}}
          animate={{x: 0, opacity: 1, zIndex: -1}}
          transition={{duration: 1.2}}
        />
        <motion.div
          id='waving-hand'
          initial={{x: 80, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration: 1.3}}
        >
          <div>
            <motion.p
              style={{scale: 1.2, zIndex: -1}}
              initial={{ rotate: 0}}
              animate={{ rotate: [0, 25, -35, 0]}}
              transition={{ repeat: Infinity, duration: 1.4, repeatDelay: 3.5, delay: 1.3 }}
            >
              👋🏼
            </motion.p>
            <motion.p initial={{x: 10}}>Hey there! I am..</motion.p>
          </div>
          <TypingAnimation text="Justine Ivan Gueco" />
          <motion.div
            initial={{y: -20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 1.2, delay: 1.2}}
          >
            <button>Download CV</button>
            <button>Scroll Down</button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}