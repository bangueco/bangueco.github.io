import { motion } from 'framer-motion';
import { CSSProperties } from 'react';

interface TypingAnimationProps {
  text: string;
  style?: CSSProperties
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({text, style}) => {
  const textSplit = text.split('')

  return (
    <div>
      {textSplit.map((word, index) => (
        <motion.span
          style={style}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            delay: index / 10,
          }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}

export default TypingAnimation