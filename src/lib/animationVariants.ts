import { Variants } from "framer-motion";

export const title: Variants = {
  hidden: {x: -20, opacity: 0, filter: 'blur(5px)'},
  visible: {
    x: 0, 
    opacity: 1, 
    filter: 'blur(0px)',
    transition: { duration: 1 }
  },
}

export const itemContainer: Variants = {
  hidden: { opacity: 0 },
  reveal: { 
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.5
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
  hidden: {x: -20, opacity: 0, filter: 'blur(5px)'},
  reveal: {
    x: 0, 
    opacity: 1, 
    filter: 'blur(0px)',
  }
}

export const itemFlipReveal: Variants = {
  hidden: {x: -30, scaleX: 0.3, opacity: 0, filter: 'blur(5px)'},
  reveal: {
    x: 0, 
    scaleX: 1, 
    opacity: 1, 
    filter: 'blur(0px)',
  }
}