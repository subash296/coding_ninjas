import React from 'react'
import { FaFacebookF,FaInstagram,FaTwitter,FaLinkedinIn } from "react-icons/fa";


function Footer() {
    const footers=[{title:"company",contents:["about","our vision","contact","faq","blog","press","black belt ninjas"]},
{title:"franchise",contents:["us & Canada","united kingdoms"]}
,{title:"center",contents:["find a center","franchise dashboard"]},
{title:"legal",contents:["terms & conditions","privacy policy"]},
{title:"followus",contents:[FaFacebookF,"code ninjas @2024 ","All rights reserved"]}]
  return (
    <div className='w-full bg-[#04325a] p-8 h-auto'>
        <div className="flex flex-wrap">
            {footers.map((footer,index)=>(
                            <div className="w-1/2 md:w-1/3 lg:w-1/5" key={index}>
                            <h6 className='text-[#425b76] uppercase'>{footer.title}</h6>
                            <ul className=''>
                                {footer.contents.map((content,index)=>(
                                    <li key={index} className='text-[#f6f7f8] capitalize hover:underline cursor-pointer my-2'>{content}</li>

                                ))}
                            </ul>
                            </div>
            ))}

     
        </div>
        
    </div>
  )
}

export default Footer