import "./sidebar.css"
import Links from "./links/Links"
import Togglebtn from "./toggelbtn/Togglebtn"
import { useState } from "react"
import { delay, motion } from "framer-motion"

function Sidebar() {

    const [open,setOpen] = useState(false) 

    const vareiants = {
        open : {
            clipPath : "circle(1200px at 100px 100px)",
            transition : {
                type:"spring",
                stiffness : 30,
            }
        },
        closed : {
            clipPath : "circle(30px at 50px 50px)",
            transition : {
                delay : 0.5,
                type : "spring",
                stiffness : 500,
                damping : 40,
            },
        },
    }
  return (
    <motion.div className='sidebar' animate = { open ? "open" : "closed"}>
        <motion.div className="bg" variants={vareiants} >
            <Links/>
        </motion.div>
        <Togglebtn setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar