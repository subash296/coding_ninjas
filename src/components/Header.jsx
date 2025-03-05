import React,{useState} from 'react'
import Logo from "../assets/Logo.png"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLocation } from "react-icons/io5";


function Header() {
    const[hide,setHide]=useState(true)
  return (
    <header className='flex mt-6 mb-2 mx-14  justify-between relative'>
        <div className='lg:hidden'>
            <RxHamburgerMenu size={35} onClick={()=>setHide(!hide)}/>

        </div>
        <div>
            <img src={Logo} alt="logo" />
        </div>
        <div>
        <nav className=" hidden lg:flex text-[#496b84] text-lg font-bold gap-10 cursor-pointer">
            <p className="relative group" >
                Programs
                
                <div className="absolute left-0 top-5 mt-2 w-48 bg-white border  border-gray-300 shadow-lg hidden flex-col p-2 z-10 group-hover:flex">
                    <a href="#" className="text-sm text-[#496b84] hover:text-[#0db88f] py-1 uppercase">Code Ninjas <span>Create</span> </a>
                    <a href="#" className="text-sm text-[#496b84] hover:text-[#0db88f] py-1 uppercase">Code Ninjas <span>JR</span></a>
                    <a href="#" className="text-sm text-[#496b84] hover:text-[#0db88f] py-1 uppercase">Code Ninjas <span>Camps</span></a>
                    <a href="#" className="text-sm text-[#496b84] hover:text-[#0db88f] py-1 uppercase">Additional Programs</a>
                </div>
                
            </p>
            <p className="relative group" >
                About
          
                <div className="absolute left-0 top-5 mt-2 w-48 bg-white border  border-gray-300 shadow-lg hidden flex-col p-2 z-10 group-hover:flex">
                    <a href="#" className="text-sm text-[#496b84] hover:text-[#0db88f] py-1 uppercase">About us</a>
                    <a href="#" className="text-sm text-[#496b84] hover:text-[#0db88f] py-1 uppercase">Our vision</a>
                    <a href="#" className="text-sm text-[#496b84] hover:text-[#0db88f] py-1 uppercase">careers</a>
                    <a href="#" className="text-sm text-[#496b84] hover:text-[#0db88f] py-1 uppercase">faq</a>
                    <a href="#" className="text-sm text-[#496b84] hover:text-[#0db88f] py-1 uppercase">blog</a>
                    <a href="#" className="text-sm text-[#496b84] hover:text-[#0db88f] py-1 uppercase">partnership</a>
                    
                </div>
           
            </p>
            <p  className="relative group">

                Franchising
     
                <div className="absolute left-0 top-5 mt-2 w-48 bg-white border  border-gray-300 shadow-lg hidden flex-col p-2 z-10 group-hover:flex">
                    <a href="#" className="text-sm text-[#496b84] hover:text-[#0db88f] py-1 uppercase">us & canada</a>
                    <a href="#" className="text-sm text-[#496b84] hover:text-[#0db88f] py-1 uppercase">United Kingdom</a>
                </div>
           
            </p>
        </nav>
        </div>
        {!hide && (
                    <nav className='bg-white h-screen w-full fixed z-20 top-0 left-0 right-0 bottom-0'>
                    <p className='uppercase font-bold text-3xl ml-4 text-blue-800 my-5' onClick={()=>setHide(!hide)}>x</p>
                    <div className='flex flex-col justify-between h-[90%]'>
                    <div className=" mt-2 w-full bg-gray-200     shadow-lg  flex-col p-2 gap-2 z-10 flex items-center">
                    <p className='text-[#496b84]'>Programs</p>
        
                            <a href="#" className="  font-bold py-1 uppercase">Code Ninjas <span  >Create</span> </a>
                            <a href="#" className=" font-bold  py-1 uppercase">Code Ninjas <span>JR</span></a>
                            <a href="#" className=" font-bold py-1 uppercase">Code Ninjas <span>Camps</span></a>
                            <a href="#" className=" font-bold  py-1 uppercase">Additional Programs</a>
                    </div>
                    <div className=" mt-2 w-full bg-white    shadow-lg  flex-col p-2 gap-2 z-10 flex items-center my-5">
                    <p className='text-[#496b84]'>About</p>
        
                            <a href="#" className="  font-bold py-1 uppercase">About Us </a>
                            <a href="#" className=" font-bold  py-1 uppercase">our vision</a>
                            <a href="#" className=" font-bold py-1 uppercase">careers</a>
                            <a href="#" className=" font-bold  py-1 uppercase">faq</a>
                            <a href="#" className=" font-bold  py-1 uppercase">blog</a>
                            <a href="#" className=" font-bold  py-1 uppercase">pto</a>
                            <a href="#" className=" font-bold  py-1 uppercase">press</a>
                            <a href="#" className=" font-bold  py-1 uppercase">partnership</a>
                    </div>
                    <div className=" mt-2 w-full bg-white     shadow-lg  flex-col p-2 gap-2 z-10 flex items-center">
                    <p className='text-[#496b84]'>Franchising</p>
        
                       
                            <a href="#" className=" font-bold  py-1 uppercase">Us & canada</a>
                            <a href="#" className=" font-bold  py-1 uppercase">United kingdoms</a>
                    </div>
                    <div className=" mt-2 w-full bg-gray-100   shadow-lg  flex-col gap-3 p-2 z-10 flex items-center">
                        <p>No location selected</p>
                        <p>Let us find one for you!</p>
                        <button className='text-2xl font-bold  bg-[#0db88f] w-fit  cursor-pointer px-4 py-2 text-white rounded-lg'>Find Location</button>

                    </div>
                    </div>
        
                </nav>
        )}

        <div className='hidden lg:block'>
            <button className='text-2xl font-bold  bg-[#0db88f]  cursor-pointer px-4 py-2 text-white rounded-lg'>Find Location</button>
        </div>
        <div className='lg:hidden'>
            <IoLocation  size={35}/>

        </div>



    </header>
  )
}

export default Header