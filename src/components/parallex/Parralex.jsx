import { useRef } from 'react';
import "./parallex.css"
import { motion , useScroll , useTransform  } from "framer-motion"




 



function Parralex() {
  const ref = useRef();  
  
  const { scrollYProgress } = useScroll({
    target : ref,
    offset : ["start start","end start"]
  })


const yBg = useTransform(scrollYProgress,[0,1],["0%","100%"])
const yText = useTransform(scrollYProgress,[0,1],["0%","100%"])

  

  return (
    <motion.div className="parallex" ref = {ref}>
      
        <motion.h1 style={{y:yText}}>What I Did ?</motion.h1>
        <motion.div className="mountains" ></motion.div>
        <motion.div className="planents" style={{y:yBg}}></motion.div>
        <motion.div className="star" style={{x:yBg}}></motion.div>
    </motion.div>
  )
}

export default Parralex