import './app.css'
import Navbar from "./components/navbar/Navbar";
import Sidebar from "../src/components/sidebar/Sidebar"
import Hero from "./components/hero/Hero"
import Parralex from './components/parallex/Parralex';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/contact';


import React , {useState,useEffect} from 'react';
import ClipLoader from "react-spinners/ClipLoader";

const App = () => {

  const [loading,setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },3000)
  },[])
  return <div className='app'>
    
    {
      loading ? 
      <div className="loader">
      <ClipLoader
        color={'##0c0c1d'}
        loading={loading}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
      :
      (
<header>    
  <section id='HOME'>
    <Navbar/>
    <Hero/>
    </section>
    <section id='PROJECTS'><Parralex/></section>
    <section id='project'><Portfolio/></section>

    <section id='project1'></section>
    <section id='project2'></section>
    <section id='project3'></section>
    <section id='project3'></section>
    {/* <section id='project3'></section> */}
    {/* <section id='project3'></section> */}

    <section id='CONNECT'> <Contact/> </section>

    </header>
      )}
    

  </div>
};


export default App;