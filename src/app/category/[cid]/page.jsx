"use client"
import { productdata } from '@/app/Data'
import { useParams } from 'next/navigation'
import React from 'react'


function page({cid}) {
  let aa=productdata.filter((a)=>a.category==cid)
  return (
    <>
    <div className='flex container justify-between py-20 '>
    {aa.slice(0,1).map((a)=>(
     <div className="w-33%  relative key={a.id}" >
  <img className="w-100% h-[240px] " src={a.pic}/>
  <div className="bg-yellow-500 w-16 h-8 absolute top-8 left-0 text-white ">7D/6N</div>
  <div className="act">
    <p className="text-[18px] text-white text-center bottom-4 ">{a.category}</p>  
  </div>
  <div className="btnn container">
<h3>NPR</h3>
<span className=" flex justify-between">
  <p className="text-orange-500 text-[20px]">{a.price}</p>
  <buttom className="shadow-4 bg-white text-green-500 border-4 mr-3 p-1 text-[20px]" >View Detail</buttom>
</span>
  </div>
 
  </div> 
  
  ))}
  </div>
    </>
  )
}

export default page
