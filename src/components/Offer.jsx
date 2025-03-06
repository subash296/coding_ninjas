import React from 'react'
import bg1 from '../assets/offer-bg-1.png'
import bg2 from '../assets/offer-bg-2.png'
import bg3 from '../assets/offer-bg-3.png'
import offer1 from '../assets/offer1.png'
import offer2 from '../assets/offer2.png'
import offer3 from '../assets/offer3.png'
import gradient1 from '../assets/offer-gradient1.png'
import gradient2 from '../assets/offer-gradient2.png'
import gradient3 from '../assets/offer-gradient3.png'
import {motion} from 'framer-motion'
function Offer() {
  return (
    <div className='mt-10'>
        <p className='text-center text-lg uppercase text-[#0d6efd]'>what we offer</p>
        <h3 className='text-4xl font-bold text-center uppercase mb-10 '>Year round <span className=' font-bold text-[#6610f2] text-4xl mb-8 '>programs</span></h3>
      
        <div style={{backgroundImage:`url(${bg1})`}} className=' w-full bg-cover   h-auto'>
          <div style={{backgroundImage:`url(${gradient1})`}} className=' w-full bg-cover bg-[#1a69b892] bg-opacity-50 bg-center pt-14 h-full  md:flex  px-20 py-3' >
            <motion.div  whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition= {{type: "spring",stiffness: 100,delay : 0.5 }} className='w-full md:w-1/2'>
              <img src={offer1} alt="offer1" className='max-h-96' />
            </motion.div>
            <motion.div  whileInView={{opacity:1,x:0}} initial={{opacity:0,x:200}} transition= {{type: "spring",stiffness: 100,delay : 0.5 }} className='w-full md:w-1/2 flex flex-col gap-3'>
            <p className='text-[#8eecff] text-sm'>AGES 8 TO 14</p>
            <h2 className='text-lg font-bold text-white '>CODE NINJAS</h2>
            <h3 className='text-5xl text-[#0dcaf0] font-bold ml-2'>CREATE</h3>
            <p className='text-white font-semibold'>Our best-selling program, CREATE, was built to keep our Ninjas engaged, challenged, and learning! Whether building their own video games or debugging code - your child will be begging you to come back!</p>
            <button
            className='text-2xl font-bold bg-[#0db88f] cursor-pointer px-4 py-2 text-white rounded-lg w-fit'>
            Learn More
          </button>
            </motion.div>

          </div>

        </div>
        <div style={{backgroundImage:`url(${bg2})`}} className=' w-full bg-cover   h-auto'>
          <div style={{backgroundImage:`url(${gradient2})`}} className=' w-full bg-cover bg-center bg-[#7b196f5e]  pt-14 h-full md:flex py-3 px-20' >
           
            <motion.div  whileInView={{opacity:1,x:0}} initial={{opacity:0,x:50}} transition= {{type: "spring",stiffness: 100,delay : 0.5 }} className='w-full md:w-1/2 md:order-4'>
              <img src={offer2} alt="offer1" className='max-h-96' />
            </motion.div>
            <motion.div  whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-50}} transition= {{type: "spring",stiffness: 100,delay : 0.5 }} className='w-full md:w-1/2 flex flex-col gap-3'>
            <p className='text-[#8eecff] text-sm'>AGES 5 TO 7</p>
            <h2 className='text-lg font-bold text-white '>CODE NINJAS</h2>
            <h3 className='text-5xl text-[#deabf7] font-bold ml-2'>JR</h3>
            <p className='text-white font-semibold'>Is your young Ninja already crazy about technology? Our JR program is designed to help support and nurture a foundation of learning through engaging activities, creativity, and problem-solving – no reading required!</p>
            <button
            className='text-2xl font-bold bg-[#0db88f] cursor-pointer px-4 py-2 text-white rounded-lg w-fit'>
            Learn More
          </button>
            </motion.div>
        

          </div>

        </div>
        <div style={{backgroundImage:`url(${bg3})`}} className=' w-full bg-cover   h-auto'>
          <div style={{backgroundImage:`url(${gradient3})`}} className=' w-full bg-cover bg-center pt-14 h-full md:flex py-3 px-20' >
            <motion.div  whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition= {{type: "spring",stiffness: 100,delay : 0.5 }} className='w-full md:w-1/2'>
              <img src={offer3} alt="offer1" className='max-h-96' />
            </motion.div>
            <motion.div  whileInView={{opacity:1,x:0}} initial={{opacity:0,x:200}} transition= {{type: "spring",stiffness: 100,delay : 0.5 }} className='w-full md:w-1/2 flex flex-col gap-3'>
            <p className='text-[#8eecff] text-sm'>AGES 5 TO 14</p>
            <h2 className='text-lg font-bold text-white '>CODE NINJAS</h2>
            <h3 className='text-5xl text-[#0dcaf0] font-bold ml-2'>CAMPS</h3>
            <p className='text-white font-semibold'>Transform your child's love for technology into an exciting learning adventure. Guided by our team of Code Senseis, Code Ninjas Camps empower kids to gain valuable tech skills and make new friends. It's an unforgettably fun learning experience!</p>
            <button
            className='text-2xl font-bold bg-[#0db88f] cursor-pointer px-4 py-2 text-white rounded-lg w-fit'>
            Learn More
          </button>
            </motion.div>

          </div>

        </div>

    </div>
  )
}

export default Offer