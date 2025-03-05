import React from 'react'
import Home1 from '../assets/Home.png'
import bg from "../assets/background.png"
import { IoLocationOutline } from "react-icons/io5";
import {motion} from 'framer-motion'

function Home() {
  return (
    <div className='w-full bg-cover bg-center pb-20'  style={{ backgroundImage: `url(${bg})` }}>
        <div className='w-full py-10'
          >
            <img src={Home1} alt="Home_Page" className='max-w-4xl w-full mx-auto ' />
        </div>
        <p className='text-[#496b84] text-lg text-center font-semibold flex justify-center gap-1'><span className=' mt-1'><IoLocationOutline /></span>  No Location Needed</p>
        <div className='flex justify-center'>     <button className='text-2xl shadow-2xl font-bold  bg-[#0db88f]  cursor-pointer px-4 py-2 text-white rounded-lg my-4'>Find Location</button>
        </div>

    </div>
  )
}

export default Home