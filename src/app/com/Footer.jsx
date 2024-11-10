import React from 'react'
import { IoLogoYoutube } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <>
     <footer className='bg-[#087D36] '>
      <div className='container lg:flex py-3 gap-5 '>
        <div className='text-yellow-600 lg:ml-[80px]'>
          <img  className="h-[100px]" src='https://www.acetravels.com/public/images/logo.jpg'/>
          <p>Head office : Durbar Marg, Kathmandu 44600</p>
          <p>Open 24 Hours a Day | 7 Days a Week | 365 Days a Year</p>
          <p>Phone: 01-4411830 / 9851065909 (Viber/ Whatsapp/ WeChat)</p>
          
          <div className='flex gap-3 py-3 text-white text-[32px]'>
          <p className='gap-3 '><FaFacebook /></p>
          <p className='gap-3 '><AiFillTwitterCircle /></p>
          <p className='gap-3 '><IoLogoYoutube /></p>
          </div>
        </div>
        <div className=''>
        <p className='text-bold text-white py-1'>Minbhawan 4620726</p>
        <p className='text-bold  text-white py-1' >Banepa 011-660397</p>
        <p className='text-bold  text-white py-1'>Bhairahawa 071-527559</p>
      </div>
      <div className=''>
        <p className='text-bold text-white py-1'>Kalimati 4030591</p>
        <p className='text-bold text-white py-1'>Biratnagar 021-525534</p>
        <p className='text-bold text-white py-1'>Pokhara 061-537225</p>
      </div>
      </div>
      
      </footer> 
    </>
  )
}

export default Footer
