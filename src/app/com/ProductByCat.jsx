import { useParams } from 'next/navigation'
import React from 'react'
import { productdata } from '../Data'
import { TiArrowSortedDown } from "react-icons/ti";
import { MdOutlineStar } from "react-icons/md";
import { TbDirections } from "react-icons/tb";
import { IoIosTimer } from "react-icons/io";
import Link from 'next/link';

function ProductByCat({cat}) {
    let aaa=productdata.filter((a)=>a.category==cat)
  return (
   <>
   <div className="lg:flex gap-1 py-4 mr-[90px] w-[100%]">
   {aaa.map((a)=>(
    
    
    <div className="lg:w-50% w-[100%] lg:ml-[90px] relative">
      <img className="w-[100%]  lg:h-[420px] " src={a.pic}/>
      <div className="shado ">
        <div className="absolute lg:left-28 left-3 top-6">
        <h3 className="text-[40px] text-white ">{a.details}</h3>
    <p className="flex text-yellow-500 ml-[170px] gap-1 text-[24px]"><MdOutlineStar />  <MdOutlineStar/> <MdOutlineStar/> <MdOutlineStar/> <MdOutlineStar/> </p>
    <p className="text-white ml-[160px] flex items-center gap-1 text-[24px] text-bold pb-2"><TbDirections /> Ace Europe</p>
   <Link href={`/detail/${a.id}`}> <buttom className="width-30px h-10 rounded-full hover:bg-green-700 hover:text-white bg-yellow-500 text-white text-[20px] p-2 ml-[190px] my-3" >view detail </buttom></Link>
        </div>
        
      </div>
    
    </div>
    
   
    
   ))}
   </div>
   </>
  )
}

export default ProductByCat
