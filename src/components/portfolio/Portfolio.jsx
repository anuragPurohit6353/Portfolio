import React, { useRef } from 'react'
import './portfolio.css'
import { motion,useScroll,useSpring, useTransform } from 'framer-motion'

const items = [ 
    {
        id : 1,
        Title : "SIKKHOO - Learning App",
        img : "./th.jpeg",
        description : "The E-learning Platform is a comprehensive Learning Management System (LMS) designed to facilitate seamless online education for students and instructors. It offers an interactive, user-friendly interface that provides educational institutions and learners with a robust and flexible platform to create, manage, and deliver courses.",
        link : "https://img.freepik.com/free-vector/coming-soon-construction-yellow-design_1017-26685.jpg?w=740&t=st=1728145587~exp=1728146187~hmac=5d0a18785260713f88365700fb320fdb751cf8f2bc6215fa2c7207a7b23d91f5",
    },
    {
        id : 2,
        Title : "BlogSpot - Own Blog App",
        img : "./blogspot.png",
        description : "with a platform to read, write, and delete blog posts.The website is designed with a seamless user experience and is highly customizable. It includes both front-end and back-end features, offering robust functionality for both visitors and administrators.",
        link : "https://github.com/anuragPurohit6353/BlogSpot",
    },
    {
        id : 3,
        Title : "URL-Shortner",
        img : "./url-shortner.png",
        description : "The URL Shortener is a web application that allows users to convert long URLs into shorter, more manageable links. These short links can be used to redirect to the original long URLs. The project is built using Node.js, Express, MongoDB, and EJS templating engine.",
        link : "https://github.com/anuragPurohit6353/URL-Shortener.git",
    },
    {
        id : 4,
        Title : "LAZAREV-Animated Website",
        img : "./lazarev.png",
        description : "This project is a personal take on the award-winning LAZAREV website, showcasing modern web design and development techniques. My goal was to replicate the original design's essence while adding my unique twist with creative animations.",
        link : "https://github.com/anuragPurohit6353/LAZAREV-Clone.git"
    },
    {
        id : 5,
        Title : "Apna College Website Clone",
        img : "./apnacollegeclone.png",
        description : "The Apna College Website Clone is a frontend web development project that recreates the user interface of the popular educational website. The aim is to practice and showcase skills in HTML, CSS, and JavaScript by cloning the essential sections and features of the original website.",
        link : "https://github.com/anuragPurohit6353/apnaCollegeClone.git"
    },
]

    const Single = ({ item }) => {
        const ref = useRef()

        const { scrollYProgress } = useScroll({
            target:ref,
            offset : ["start start","end start"] 
         });
        const y = useTransform(scrollYProgress , [0,1] , ["0%","100%"]);
 
        return (
            <section>
                <div className="containear " ref={ref}>
                    <div className="wrapper" >
                    <img src={item.img} alt=''/>
                    <motion.div className="textContainear"  style={{y}}>
                        <h2>{item.Title}</h2>
                        <p>{item.description}</p>
                        <button> <a href={item.link}>View Project</a></button>
                    </motion.div>
                    </div>
                </div>
            </section>
        )
     
    }



   



function Portfolio() {



    const ref = useRef()
    const { scrollYProgress } = useScroll({target:ref});
    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30
    })

    
  return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
            <h1>Featured Work</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {/* <section>
            <h1> "SIKKHOO - Learning App"</h1>
        </section>
        <section>
        {items.map(item => {
            <Single item={ item } key={item.id}/>
        })}
        </section>
        <section></section>
        <section></section>
        <section></section> */}
   
       {items.map((item) => (
        <Single item={item} key={item.id} />
       ))}
  
    </div>
  )
}



export default Portfolio