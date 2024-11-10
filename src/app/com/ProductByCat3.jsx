import React from 'react'
import { productdata } from '../Data'
import Link from 'next/link'

function ProductByCat3({cat}) {
    let aaa=productdata.filter((a)=>a.category==cat)
  return (
    <>
    <div className="container lg:ml-[95px]">       
    <div className="py-3 ">
     <h2 className="text-green-600 text-[30px]">Asia Tour Packages</h2>
     <div className="flex flex-wrap gap-4">
     {aaa.map((a)=>(
        
           <div className="py-2 flex lg:w-[45%] w-[100%] flex-wrap">
           <div className="w-[50%]">
             <img className="h-[220px] w-[300px] object-cover" src={a.pic}/>
           </div>
           <div className="w-[50%] ">
           <div className="  bg-white py-3 px">
             <h2>{a.details}</h2>
             <p>Duration 5D/4N</p>
           <h3 className="py-3 text-green-600">NPR</h3>
         
           <p className="text-orange-500 text-[20px]">{a.price}</p>
          <Link href={`/detail/${a.id}`}> <buttom className="shadow-4 bg-white text-green-500 hover:bg-green-700 hover:text-white border-4 mt-2  text-[20px]" >View Detail</buttom> </Link>
         
           </div>
           </div>
           </div> 
          
            
     ))}
     </div>
     </div>
     </div> 
    </>
  )
}

export default ProductByCat3
