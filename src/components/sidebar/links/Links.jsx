import './links.css'
import { motion } from 'framer-motion'

const varients = {
    open : {
            transition : {
                staggerChildren : 0.1,
            },
    },
    closed : {
        transition : {
            staggerChildren : 0.05,
            staggerDirection : -1
        },
    },
}

const itemVarients = {
    open : {
           y : 0,
           opacity : 1

    },
    closed : {
       y:50,
       opacity:0
    },
}
function Links() {

    const items = ["HOME","PROJECTS","CONNECT"]
  return (
    <motion.div className="links-side" variants={varients}>
       {items.map((item) => (<motion.a href={`#${item}`} key={item} variants={itemVarients} whileHover={{scale : 1.1}} whileTap={{scale : 0.95}} >{item}  </motion.a>))}
       </motion.div>
  )
}

export default Links