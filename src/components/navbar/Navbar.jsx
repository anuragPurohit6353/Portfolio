import React from 'react'
import './navbar.css'
import Sidebar from '../sidebar/Sidebar'
import { Link } from 'react-router-dom'
import { motion, stagger } from 'framer-motion'
function navbar() {

    const textVarieants = {
        initial : {
            y : -500,
            opacity : 0,
        },
        animate : {
            y : 0,
            opacity : 1,
            transition : {
                duration : 1,
                stagger: 2
            }
        }
    }
  return (
    <motion.div className='navbar' variants = {textVarieants} initial = "initial" animate = "animate">
        <Sidebar></Sidebar>
        <motion.div className="wrapper">
            <motion.span variants = {textVarieants}>Anurag Purohit</motion.span>
            <motion.div className="links">
                {/* home */}
                <motion.button> <a href='https://www.linkedin.com/in/anurag-purohit--/'>
                    <motion.div className="box1">
                        <motion.img src="./li.png" alt=""/>
                        <motion.h3>Linkedin</motion.h3>
                    </motion.div> 
                    </a></motion.button> 
                <motion.button><a href='https://github.com/anuragPurohit6353'><motion.div className="box1">
                        <motion.img src="./github.png" alt="" />
                        <motion.h3>Github</motion.h3>
                    </motion.div> </a> </motion.button>
                <motion.button> <a href='https://drive.google.com/file/d/1MA5v_dC_49qr011fe3daNWNQAViePPjh/view?usp=sharing'>
                    <motion.div className="box2">
                        <motion.img src="./download.png" alt="" />
                        <motion.h3>Resume</motion.h3>
                    </motion.div> 
                    </a></motion.button> 
                 


                    {/* <a href='https://www.linkedin.com/in/anurag-purohit--/'>
                    <div className="box1">
                        <img src="./li.png" alt=""/>
                        <h3>Linkedin</h3>
                    </div> 
                    </a>
                
                <a href=''><div className="box1">
                        <img src="./github.png" alt="" />
                        <h3>Github</h3>
                    </div> </a> 
                <a href=''>
                    <div className="box2">
                        <img src="./download.png" alt="" />
                        <h3>Resume</h3>
                    </div> 
                    </a> */}
            
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default navbar