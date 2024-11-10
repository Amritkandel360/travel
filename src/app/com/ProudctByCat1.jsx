import { useParams } from 'next/navigation'
import React from 'react'
import { productdata } from '../Data'
import { TiArrowSortedDown } from "react-icons/ti";
import { MdOutlineStar } from "react-icons/md";
import { TbDirections } from "react-icons/tb";
import { IoIosTimer } from "react-icons/io";
import Link from 'next/link';
function ProudctByCat1({cat}) {
    let aaa=productdata.filter((a)=>a.category==cat)
    let c=productdata.filter((a)=>a.category=="Ace Honeymoon Offers (for Couples)")
  return (
    <>
    {/* <h3 className='text-green-900'>{aaa.category}</h3> */}
    <div className="gap-[110px]  ">
    <div className="flex flex-wrap gap-20 justify-center my-20">
    {aaa.map((a)=>(
        <div className='relative py-5 my-10'>
    
  <img className="w-100% h-[270px] " src={a.pic}/>
  <div className="bg-yellow-500 w-16 h-8 absolute top-20 left-0  ">7D/6N</div>
  <div className="act container">
    <p className="text-[18px] text-white text-center bottom-[10px]  ">{a.details}</p> 
    <buttom className='onclick'></buttom> 
  </div>
  <div className="btnn container">
<h3>NPR</h3>
<span className=" flex justify-between">
  <p className="text-orange-500 text-[20px]">{a.price}</p>
  <Link href={`/detail/${a.id}`}><buttom className="shadow-4 bg-white text-green-500 border-4 mr-3 p-1 text-[20px] hover:bg-green-700 hover:text-white" >View Detail</buttom></Link>
</span>
  </div>
  </div>
))}
</div>
 </div> 


    </>
  )
}

export default ProudctByCat1
