import React,{useState,useEffect} from 'react';
import bg from '../assets/impact-bg.png';
import impact from '../assets/impact.png';
import impactvd from '../assets/impact-vid.png';
import impactlogo from '../assets/impactlogo.png'
import { FaPlay } from 'react-icons/fa';
import VideoPlayer from './VideoPlayer';
import impactPartner from '../assets/impact-partner.png'
import {motion} from "framer-motion"

function Impact() {
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
    <div className='w-full '>
        <div className='w-full relative'>

       
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className='w-full h-auto px-5 md:px-20 py-10 md:py-28 bg-cover '
      >
        <div className='w-full relative py-10'>
          <img src={impact} alt='Impact Image' className='w-full h-auto object-contain z-50' />
          <img
            src={impactvd}
            alt='Impact Video'
            className='absolute top-[18%] sm:top-[14%] md:top-[14%] lg:top-[11%] xl:top-[10%]  left-[18%]  w-[63.5%]   rounded-2xl object-contain -z-[1]'
          />
                      <FaPlay onClick={()=>setOpen(true)} className='absolute top-1/3 left-1/2 transform -translate-y-1/3 -translate-x-1/2  text-white text-4xl bg-[#7e8c94] px-8 hover:bg-[#0dcaf0] cursor-pointer  rounded-full h-24 w-24  ' />
          
        </div>
      </div>
      {open &&(
        <VideoPlayer setOpen={setOpen} link={"https://www.youtube.https://youtu.be/-N08PV3Cs6Q/watch?v=-N08PV3Cs6Q"} />
      )}
          <motion.div  whileInView={{opacity:1,y:0}} initial={{opacity:0,y:100}} transition= {{type: "spring",stiffness: 100,delay : 0.5 }} className='absolute -bottom-10 left-1/2 transform -translate-x-1/2'>
            <img src={impactlogo} alt=""/>
          </motion.div>
      </div>
        <motion.div  whileInView={{opacity:1,y:0}} initial={{opacity:0,y:100}} transition= {{type: "spring",stiffness: 100,delay : 0.5 }} className="flex flex-col gap-4 items-center my-8">
          <p className='text-sm text-[#257cc6]'>IN PARTNERSHIP WITH</p>
          <img src={impactPartner} alt="" />
          <p className='text-[#506690] max-w-xl text-lg leading-6'>If the Dojo is the soul of Code Ninjas, then IMPACT is the beating heart. It is our proprietary learning platform designed to give our Ninjas the best learning environment possible. It does so much more than just teach your child to code - it helps develop key skills such as problem-solving, critical thinking, and logical reasoning skills.</p>
          <button className='text-2xl font-bold  bg-[#0db88f]  cursor-pointer px-4 py-2 text-white rounded-lg'>Learn More</button>


        </motion.div>
    </div>
  );
}

export default Impact;