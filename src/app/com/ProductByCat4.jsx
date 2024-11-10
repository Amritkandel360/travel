
import { productdata } from '../Data'
import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';

function ProductByCat4({cat}) {
    let aaa=productdata.filter((a)=>(a.category==cat))
  return (
    <>
     {/* <h3 className='text-green-900'>{aaa.category}</h3>
    <div className="gap-[110px]  ">
    <div className="flex flex-wrap gap-20 justify-center my-20"> */}
   <h2 className="text-green-600 text-[30px]">Asia Tour Packages</h2>
        <div className='relative py-2 my-10 lg:block hidden'>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        startSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className='gap-2'>
        <h2 className="text-green-600 text-[30px]">Asia Tour Packages</h2>
    {aaa.map((a)=>(
      <SwiperSlide>
      <>
   
  <div className="gap-1 ">
  <h3 className='text-green-900'>{aaa.category}</h3>
  <div className="flex flex-wrap gap-1 mb-20">
        <div className='relative py-3 '>
        
  <img className="w-100% h-[250px]  " src={a.pic}/>
  <div className="bg-yellow-500 w-16 h-8 absolute top-20 left-0 text-[16px] text-center ">7D/6N</div>
  <div className="act container">
    <p className="text-[18px] text-white text-center bottom-[10px]  ">{a.details}</p>  
  </div>
  <div className="btnn container">
<h3>NPR</h3>
<span className=" flex justify-between">
  <p className="text-orange-500 text-[20px]">{a.price}</p>
 <Link href={`/detail/${a.id}`}> <buttom className="shadow-4 bg-white text-green-500 border-4 mr-3 p-1 text-[20px] hover:bg-green-700 hover:text-white" >View Detail</buttom></Link>
</span>
  </div>
  </div>
  </div>
 </div>  
    </>
        </SwiperSlide>
))}
</div>
      </Swiper>
  
  </div> <div className='relative py-2 my-10 lg:hidden block w-[100%] place-content-center container'>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        startSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className='gap-2 w-[100%]'>
        <h2 className="text-green-600 text-[30px]">Asia Tour Packages</h2>
    {aaa.map((a)=>(
      <SwiperSlide>
      <>
   
  <div className="gap-1 ">
  <h3 className='text-green-900'>{aaa.category}</h3>
  <div className="flex flex-wrap gap-1 py-9 px-10 w-[100%]">
        <div className='relative py-3 '>
        
  <img className="w-100% h-[250px]  " src={a.pic}/>
  <div className="bg-yellow-500 w-16 h-8 absolute top-20 left-0 text-[16px] text-center ">7D/6N</div>
  <div className="act container">
    <p className="text-[18px] text-white text-center bottom-[10px]  ">{a.details}</p>  
  </div>
  <div className="btnn container">
<h3>NPR</h3>
<span className=" flex justify-between">
  <p className="text-orange-500 text-[20px]">{a.price}</p>
 <Link href={`/detail/${a.id}`}> <buttom className="shadow-4 bg-white text-green-500 border-4 mr-3 p-1 text-[20px] hover:bg-green-700 hover:text-white" >View Detail</buttom></Link>
</span>
  </div>
  </div>
  </div>
 </div>  
    </>
        </SwiperSlide>
))}
</div>
      </Swiper>
  
  </div>

{/* </div>
 </div>   */}
    </>
  )
}

export default ProductByCat4
