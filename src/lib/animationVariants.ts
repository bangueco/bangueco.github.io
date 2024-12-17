import { Variants } from "framer-motion";

export const title: Variants = {
  hidden: {x: -5, opacity: 0, filter: 'blur(5px)'},
  visible: {
    x: 0, 
    opacity: 1, 
    filter: 'blur(0px)',
    transition: { duration: 0.3 }
  },
}

export const itemContainer: Variants = {
  hidden: { opacity: 0 },
  reveal: { 
    opacity: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 0.2
    }
  }
}

export const itemFlipContainer: Variants = {
  hidden: { opacity: 0 },
  reveal: { 
    opacity: 1,
    transition: {
      duration: 0.1,
      staggerChildren: 0.2
    }
  }
}

export const itemFadeReveal: Variants = {
  hidden: {scale: 0.1, opacity: 0, filter: 'blur(5px)'},
  reveal: {
    scale: 1, 
    opacity: 1, 
    filter: 'blur(0px)',
  }
}

export const itemFlipReveal: Variants = {
  hidden: {x: -5, scaleX: 0.2, opacity: 0, filter: 'blur(5px) brightness(0.7) hue-rotate(90deg)'},
  reveal: {
    x: 0, 
    scaleX: 1,
    rotateY: 0,
    opacity: 1,
    filter: 'blur(0px) brightness(1) hue-rotate(0deg)',
  }
}