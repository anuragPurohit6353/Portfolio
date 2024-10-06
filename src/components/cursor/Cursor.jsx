import { useState,useEffect } from "react"
import './cursor.jsx'
import { motion } from 'framer-motion'

function Cursor() {
    const [position,setPostion] = useState({x:0,y:0})


    useEffect(()=> {
        const mousemove = (e) => {
            setPostion({x:e.clientX,y:e.clientY})
        }

        window.addEventListener("mousemove",mousemove)

        return () => {
            window.removeEventListener("mousemove",mousemove)
        }
    },[]);
    
  return (
    <motion.div className="cursor" animate={{x : position.x , y : position.x}} ></motion.div>
  )
}

export default Cursor