import { motion, stagger } from 'framer-motion'
import './hero.css'
function Hero() {

   const textVarieants = {
        initial : {
            x : -500,
            opacity : 0,
        },
        animate : {
            x : 0,
            opacity : 1,
            transition : {
                duration : 1,
                stagger: 0.1
            }
        }
    }

    const slideVarieants = {
        initial : {
            x : 0
        },
        animate : {
            y : "-220%",
            transition : {
                repeat : Infinity, 
                repeatType : "mirror",
                duration : 10,
            }
        }
    }
  return (
    <div className='hero'>
        <div className="wrapper">
            <motion.div className="text-containear" variants = {textVarieants} initial = "initial" animate = "animate">
                <motion.h2 variants = {textVarieants}>Anurag Purohit</motion.h2>
                <motion.h1 variants = {textVarieants}>FullStack Web Developer</motion.h1>
                <motion.div variants = {textVarieants} className="buttons">
                <a href='#project'><motion.button variants = {textVarieants} id="PROJECTS">PROJECTS</motion.button></a>
              <a href='#CONNECT'>  <motion.button variants = {textVarieants} id='CONTACT'>Connect </motion.button></a>
                </motion.div>
            </motion.div>
        </div>

    {/* SLiding Text */}

    {/* <motion.div className="slidingTextContainear" variants="slideVarieants" initial="initial" animate="animate">
        WEB DEVELOPER AND ELECTRONICS ENGINEER 
    </motion.div> */}
        {/* <div variants = {textVarieants} initial = "initial" animate = "animate" className="image-containear">
            <img src="./main-hero.jpg" alt="" srcset="" />
        </div> */}
    </div>
  )
}

export default Hero