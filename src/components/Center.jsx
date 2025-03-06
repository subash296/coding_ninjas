import React from 'react'
import center1 from '../assets/center1.png'
import msnbc from '../assets/msnbc.png'
import abc from "../assets/abc.png"
import entrepreneur from '../assets/entrepreneur.png'
import parents from '../assets/parents.png'
import life from '../assets/life.png'

function Center() {
  return (
    <div style={{backgroundImage:`url(${center1})`}}  className='h-screen relative bg-cover '>
        <div className='flex flex-col items-center justify-center gap-3 h-full'>
            <h2 className='text-5xl font-bold text-white uppercase'>Unleash their</h2>
            <h3 className='text-5xl font-bold text-[#187abf] uppercase'>inner ninja</h3>
            <button className='text-2xl font-bold  bg-[#0db88f]  cursor-pointer px-4 py-2 text-white rounded-lg w-fit'>Find a center</button>

        </div>
                <div className="flex my-8 justify-between  w-full md:px-32 gap-3 absolute -bottom-10 bg-[#0067be] py-4 overflow-x-scroll hide-scrollbar">
                    <div className='shrink-0  '><img src={msnbc} alt="msnbc" className="filter grayscale invert brightness-100 contrast-100 cursor-pointer" /></div>
                    <div className='shrink-0 '><img src={parents} alt="parents" className="filter grayscale invert brightness-100 contrast-100 cursor-pointer" /></div>
                    <div className='shrink-0 '><img src={life} alt="life" className="filter grayscale invert brightness-100 contrast-100 cursor-pointer" /></div>
                    <div className='shrink-0'><img src={entrepreneur} alt="entrepreneur" className="filter grayscale invert brightness-100 contrast-100 cursor-pointer" /></div>
                </div>

    </div>
  )
}

export default Center