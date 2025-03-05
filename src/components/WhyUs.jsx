import React, { useState,useEffect } from 'react'
import bg from "../assets/BG-Gradient-1.png"
import ninja1 from '../assets/ninjal.png'
import ninja2 from '../assets/ninjar.png'
import msnbc from '../assets/msnbc.png'
import abc from "../assets/abc.png"
import entrepreneur from '../assets/entrepreneur.png'
import parents from '../assets/parents.png'
import life from '../assets/life.png'
import vidimg from '../assets/vidimg.png'
import { FaPlay } from "react-icons/fa";
import VideoPlayer from './VideoPlayer'
import {motion} from 'framer-motion'

function WhyUs() {
  const [open,setOpen]=useState(false)
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);
  return (
    <div className='min-w-full py-10 relative ' style={{ backgroundImage: `url(${bg})` }}>
        <div className="flex min-w-full">
            <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition= {{type: "spring",stiffness: 100,delay : 0.5 }} className='w-1/5 hidden md:block'><img src={ninja1} alt="ninja" /></motion.div>
            <div className='w-full mx-auto md:w-3/5 md:mx-0'>
            <div className='w-full'>
            <motion.h2  whileInView={{opacity:1,y:0}} initial={{opacity:0,y:100}} transition= {{type: "spring",stiffness: 100,delay : 0.5 }} className='text-6xl font-bold text-center'>WHY <br /> <span className='text-[#187abf] text-6xl font-bold'>CODE NINJAS ?</span></motion.h2>
            <motion.p  whileInView={{opacity:1,y:0}} initial={{opacity:0,y:100}} transition= {{type: "spring",stiffness: 100,delay : 0.7 }} className='text-[#506690] text-center p-4 font-semibold '>We believe that Code Ninjas is unlike anything your child has experienced before. Every day thousands of our Ninjas enter our Dojos to learn to code on our proprietary learning platform – and in the process UNLEASH THEIR INNER NINJA! Your child will join like-minded students and together they will tackle fun and engaging problems - and have a great time!</motion.p>
            </div>
            </div>
            <motion.div  whileInView={{opacity:1,x:0}} initial={{opacity:0,x:200}} transition= {{type: "spring",stiffness: 100,delay : 0.5 }} className='w-1/5 hidden md:block'><img src={ninja2} alt="ninja2" /></motion.div>
        </div>
        <motion.div  whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition= {{type: "spring",stiffness: 100,delay : 0.5 }} className="flex my-8 justify-between  w-full md:px-32 gap-3 overflow-auto hide-scrollbar">
            <div className='shrink-0 '><img src={msnbc} alt="msnbc" /></div>
            <div className='shrink-0 '><img src={parents} alt="parents" /></div>
            <div className='shrink-0 '><img src={abc} alt="abc" /></div>
            <div className='shrink-0 '><img src={life} alt="life" /></div>
            <div className='shrink-0'><img src={entrepreneur} alt="entrepreneur" /></div>
        </motion.div>
        <div className='w-full my-8'>
          <div className="w-full flex justify-center">          
            <motion.h3  whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition= {{type: "spring",stiffness: 100,delay : 0.7 }} className='text-lg text-[#506690] text-center font-bold max-w-xs'>
          Don't just take our word for it, hear from some of our parents now!
          </motion.h3></div>

          <motion.div  whileInView={{opacity:1,scale:1}} initial={{opacity:0,scale:0}} transition= {{type: "spring",stiffness: 100,delay : 0.5 }} className='w-full flex justify-center my-5 relative'>
            <img src={vidimg} className='w-full px-3 md:w-auto rounded-3xl ' />
            <FaPlay onClick={()=>setOpen(true)} className='absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  text-white text-4xl bg-[#7e8c94] px-8 hover:bg-[#0dcaf0] cursor-pointer  rounded-full h-24 w-24  ' />

          </motion.div>

          <div>

          </div>
        </div>
        {open &&(
          <VideoPlayer setOpen={setOpen} link={"https://www.youtube.com/embed/L3bgHOuykQs?autoplay=1"}/>
        )}

    </div>
  )
}

export default WhyUs