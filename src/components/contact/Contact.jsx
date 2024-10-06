import React, { useRef, useState } from 'react'
import "./contact.css"
import { animate, motion } from 'framer-motion'
import emailjs from '@emailjs/browser';
import { Toaster,toast } from 'sonner';


const variants = {
    initial : {
        y : 500,
        opacity : 0,
    },
    animate : {
        y : 0,
        opacity : 1,
        transition : {
            duration : 0.5,
            staggerChildren : 0.1,
        }
    }
}


export default function Contact() {

    const formRef = useRef()
    const [error,setError] = useState(false)
    const [success,setSucess] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_dnv3uwr', 'template_cpon5ce', formRef.current, {
            publicKey: 'pPx1qNOU8K6FEp-lt',
          })
          .then(
            () => {
              setSucess(true)
            },
            (error) => {
                setError(false)
            },
          );
      };
  return (
    <motion.div className='contact' variants={variants} initial="initial" whileInView="animate">
        <motion.div variants={variants} className="textContainear">
            <motion.h1 variants={variants}>Let's Work Togather</motion.h1>
            <motion.div variants={variants} className="items">
                <motion.h2 variants={variants}>Mail</motion.h2>
                <motion.span variants={variants}>anuragpu6353@gmail.com</motion.span>
            </motion.div>
            <motion.div variants={variants} className="items">
                <motion.h2 variants={variants}>Address</motion.h2>
                <motion.span variants={variants}>Vgec Boys Hostel-2, Nigam Nagar, Chandkheda, Ahmedabad, Gujarat 382424, India</motion.span>
            </motion.div>
            <motion.div variants={variants} className="items">
                <motion.h2>Phone</motion.h2>
                <motion.span>+916353891922</motion.span>
            </motion.div>
        </motion.div>
        <motion.div variants={variants} className="formContainear">
            <form onSubmit={sendEmail} ref={formRef}>
                <input type='text' required placeholder='Name' name='name'/>
                <input type='email' required placeholder='Email' name='email'/>
                <textarea rows={8} placeholder='Message' name='message'/>
                <button onClick={() => toast.success("Message Will Be Send!").error("Solve The Error")}>Submit
                    <Toaster richColors/>
                </button>
              
                {/* {error && "Message Will Be Shares"}
                {success && "Sucess"} */}
            
            </form>
        </motion.div>
    </motion.div>
  )
}
