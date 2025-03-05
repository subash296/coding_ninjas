import React from 'react'
import locations from '../assets/locations.png'
import { CiSearch } from "react-icons/ci";
import {motion} from 'framer-motion'
 

function Location() {
  return (
    <div className='w-full my-12 bg-cyan-50'>
        
        <div>
            <h2 className='text-3xl font-bold text-center'>LOCATIONS</h2>
            <h3 className='text-[#187abf] text-3xl font-bold text-center'>NEAR YOU</h3>
            <p className='text-[#506690] text-center my-8'>Enter your ZIP to find a location near you!</p>
            <div className="flex  justify-center">
            <input type="text" placeholder='Enter different city/ZIP' className='w-80 shadow-2xl h-auto p-4 border border-gray-200 outline-none ring-none' /> 
            <span className='text-white p-4 bg-green-500 font-bold text-2xl shadow-2xl'><CiSearch  size={30 }/></span>
        </div>
        <div className='mt-10 flex flex-col justify-center gap-4 w-full items-center'>
            <p className='text-center text-gray-700'>OR</p>
            <p className='text-center text-gray-700'>Let us find one for you!</p>
            <button className='text-2xl font-bold  bg-[#0db88f]  cursor-pointer px-4 py-2 text-white rounded-lg w-fit'>Find Location</button>
            <motion.img  whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition= {{type: "spring",stiffness: 100,delay : 0.5 }} src={locations} alt=""  className='h-80 mt-4'/>

        </div>

        </div>
    </div>
  )
}

export default Location