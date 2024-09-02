import { Variants } from "framer-motion";

export const title: Variants = {
  hidden: {x: -20, opacity: 0, filter: 'blur(5px)'},
  visible: {x: 0, opacity: 1, filter: 'blur(0px)'},
}

export const itemFadeReveal: Variants = {
  hidden: {x: -20, opacity: 0, filter: 'blur(5px)'},
  reveal: index => ({
    x: 0, 
    opacity: 1, 
    filter: 'blur(0px)',
    transition: { duration: 0.3, delay: index * 0.3 }
  })
}

export const itemFlipReveal: Variants = {
  hidden: {x: -30, scaleX: 0.3, opacity: 0, filter: 'blur(5px)'},
  reveal: index => ({
    x: 0, 
    scaleX: 1, 
    opacity: 1, 
    filter: 'blur(0px)',
    transition: { duration: 0.3, delay: index * 0.09 }
  })
}