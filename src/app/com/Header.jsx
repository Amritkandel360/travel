import Link from 'next/link';
import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

function Header() {
  return (
    <>
    <header>
<div className=' bg-[#087D36] text-white '>
    <div className='container mx-auto flex justify-between'>
      <div>
     <Link href={'/'}> <img className='w-[100%] h-[90px] py-4 lg:ml-[90px]' src='https://www.acetravels.com/public/images/acetravels-logo.jpg'/></Link>
      </div>
       
   
        <div className='flex items-center gap-5 lg:text-[24px] text-[10px] ml-12'>
   <FaPhoneVolume /> 
   <p>4411830 / 9851065909"</p>
    </div>
    <div className='items-center flex gap-3 lg:text-[24px] text-[10px] lg:mr-[90px]'>
    <MdOutlineMailOutline />
    <p>sales@acetravels.com</p>
    </div>
    </div>
   

</div>

    </header>
    
    </>
      
    
  )
}

export default Header
