"use client"
import Image from "next/image";
import Link from "next/link";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdOutlineStar } from "react-icons/md";
import { TbDirections } from "react-icons/tb";
import { IoIosTimer } from "react-icons/io";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { catData, data } from "./Data";
import ProductByCat from "./com/ProductByCat";
import ProudctByCat1 from "./com/ProudctByCat1";
import ProductByCat2 from "./com/ProductByCat2";
import ProductByCat3 from "./com/ProductByCat3";
import ProductByCat4 from "./com/ProductByCat4";
import { IoMdMenu } from "react-icons/io";


export default function Home() {
  let slider=[
   "",
    `https://images.alphacoders.com/188/188121.jpg`,
    `https://www.acetravels.com/public/images/upload/package/landmark_wat_thai_sunset_temple_shutterstock_lead.jpg`, 
  
  ]
 
  return (
    <>
    <section className="overflow-x-hidden">
    <div className="top  bg-green-950 ">
      <div className="text-white text-[25px] lg:hidden py-7">
      <IoMdMenu />
      </div>
      <div className="hidden container lg:flex gap-10 py-6 text-[16px]  text-white ml-[120px]">
      <p className="home">Home </p>
     
      <p className=" holi flex gap-2 items-center  relative">Holiday <TiArrowSortedDown />
      <div className="holi1 hidden  bg-white">
<p className="px-3 py-2">Ace Honemoon offer(for counple)</p>
<p  className="px-3 py-2">Ace Honemoon offer<br/>(for counple)</p>
<p  className="px-3 py-2">Ace Honemoon offer(for counple)</p>
<p  className="px-3 py-2">Ace Honemoon offer(for counple)</p>
      </div>
      </p>
      <p className=" comp flex gap-2 items-center relative">COMPANY INFO <TiArrowSortedDown />
      <div className="comp1 bg-white text-black hidden py-2 px-5">
      <p className="hover:bg-slate-400"><Link href="/about">About us</Link></p>
      <p className="hover:bg-slate-400"> <Link href="/legal">legal documents</Link></p>
       <p className="hover:bg-slate-400"><Link href="/awards">Awards</Link></p>
       <p className="hover:bg-slate-400"><Link href="/security">security</Link></p>
      
      </div>
      </p>
      <p className=" res flex gap-2 items-center relative">RESPONSIBLE TRAVEL <TiArrowSortedDown />
      <div className=" res1 hidden bg-white text-black py-3 px-4">
        <Link href="/travel"> <p className="hover:bg-slate-400" > Travel Green</p></Link>
        <Link href="/respons"> <p  className="hover:bg-slate-400"> responsible practice</p></Link>
        <Link href="/sustain"> <p  className="hover:bg-slate-400">Sustainable Tourism</p></Link>
        
      </div>
      </p>
      <p className=" join flex gap-2 items-center relative">JOIN COMMUNITY <TiArrowSortedDown />
      <div className="join1 bg-white text-black hidden py-3 px-4 ">
<Link href="/social"><p className=" hover:bg-slate-500"> Social Network</p></Link>

      </div>
      </p>
      
      <p className=" cust flex gap-2 relative">CUSTOMER SUPPORT <TiArrowSortedDown />
      <div className="cust1  py-3 px-4 hidden bg-white text-black"> 
      <Link href="/carrer"> <p  className="hover:bg-slate-400">carrer</p></Link>
        
      </div>
      </p>
      <p className="items-center"> carrer</p>
      
      </div>
      </div> 
      <section>
        <div className=" relative overflow-y-hidden ">
          <img className="w-[100%] h-[280px] object-cover   " src="https://www.wallpaperbetter.com/wallpaper/796/162/332/sky-clouds-over-mountains-2K-wallpaper.jpg"/>
          <div className="over"> </div>
          <div className="absolute top-[80px] lg:left-[656px] left-5 text-white ">
          <h5 className="py-2 text-3xl">Amazing tours and holidays around the world</h5>
          <h4 className="lg:text-center">Find Domestic and International Holidays</h4>
          <div>
            <input  className=" absolute top-[120px] left-620px w-[500px] py-3 px-5 text-black " type="search" placeholder="package name...."></input>
          </div>
          
        </div>
        </div>
        
      </section>

      <section className="container mx-auto">
        <div className="ml-[90px]">
          <h3  className="text-[38px] text-green-400 py-3">Special Offer</h3>
          <p>Find Your Happy Place With NEPAL'S #1 TRAVEL BRAND. Ace Holiday Offer At Your Door Step. Your Time ! Our Place ! Advance Booking Now !</p>   
           </div>      
        <div>
          <ProductByCat cat="Special Offer"/>
          <div className="ml-[90px]">
          <h3  className=" container mx-auto text-[38px] text-green-400 py-3">Ace Honeymoon Offers (for Couples)</h3>
          </div>
          <ProudctByCat1 cat="Ace Honeymoon Offers (for Couples)"/>         
        </div>
        {/* <section> 
        <div className="flex gap-10 py-4">
<div className="w-50% ml-[90px] relative">
  <img className="w-100%  h-[420px] " src="https://www.acetravels.com/public/images/upload/package/paris-1.jpg"/>
  <div className="shado ">
    <div className="absolute left-28 top-2">
    <h3 className="text-[46px] text-white ">Europe Tour 6 country</h3>
<p className="flex text-yellow-500 ml-[170px] gap-1 text-[24px]"><MdOutlineStar />  <MdOutlineStar/> <MdOutlineStar/> <MdOutlineStar/> <MdOutlineStar/> </p>
<p className="text-white ml-[160px] flex items-center gap-1 text-[24px] text-bold pb-2"><TbDirections /> 16+ tour available</p>
<buttom className="width-30px h-10 rounded-full bg-yellow-500 text-white text-[20px] p-2 ml-[190px] my-3" >view detail </buttom>
    </div>
    
  </div>

</div>
<div className="w-50% relative">
  <img className="w-100% h-[420px]" src="https://www.acetravels.com/public/images/upload/destination/p2.jpg"/>
  <div className="shado ">
  <div className="absolute left-28 top-6">
    <h3 className="text-[46px] text-white ">Asia Tour package</h3>
<p className="flex text-yellow-500 ml-[170px] gap-1 text-[24px]"><MdOutlineStar />  <MdOutlineStar/> <MdOutlineStar/> <MdOutlineStar/> <MdOutlineStar/> </p>
<p className="text-white ml-[160px] flex items-center gap-1 text-[20px] text-bold pb-2"><TbDirections /> 16+ tour available</p>
<buttom className=" h-10 rounded-full bg-yellow-500 text-white text-[20px] p-2 ml-[190px] my-3" >view detail </buttom>
    </div>
  </div>
</div>
</div>
 </section>*/}
      </section>
      <section className="bg-white container mx-auto">
        <div className="ml-[90px]">
      <h3  className=" container mx-auto text-[38px] text-green-400 py-3">Europe Tour Packages </h3>
      </div>
      <ProductByCat2 cat="Europe Tour Packages"/>  
      </section>
      <section className="bg-white container mx-auto">
        <div className="ml-[90px]">
      
      </div>
      <ProductByCat3 cat="Asia Tour Packages"/>  
      </section>
      
      {/* <section className=" bg-slate-300 pb-20"> 
<div className="container ml-[120px] ">
  <h2 className="text-[50px] text-green-500" >Ace Honeymoon Offers (for Couples)</h2>
  <div className="flex gap-[110px]">
  <div className="w-33% relative">
  <img className="w-100% h-[240px] " src="https://www.acetravels.com/public/images/upload/package/maldives-images.jpg"/>
  <div className="bg-yellow-500 w-16 h-8 absolute top-8 left-0 text-white ">7D/6N</div>
  <div className="act">
    <p className="text-[18px] text-white text-center bottom-4 ">SRILANKA & MALDIVES (Honeymoon Offer for a Couple)</p>  
  </div>
  <div className="btnn container">
<h3>NPR</h3>
<span className=" flex justify-between">
  <p className="text-orange-500 text-[20px]">131200/-</p>
  <buttom className="shadow-4 bg-white text-green-500 border-4 mr-3 p-1 text-[20px]" >View Detail</buttom>
</span>
  </div>
 
  </div>
  <div className="w-33% relative">
  <img className="w-100% h-[240px] " src="https://www.acetravels.com/public/images/upload/package/krabi.jpg"/>
  <div className="bg-yellow-500 w-16 h-8 absolute top-8 left-0 text-white ">7D/6N</div>
  <div className="act">
    <p className="text-[18px] text-white text-center bottom-4 ">SRILANKA & MALDIVES (Honeymoon Offer for a Couple)</p>  
  </div>
  <div className="btnn container">
<h3>NPR</h3>
<span className=" flex justify-between">
  <p className="text-orange-500 text-[20px]">131200/-</p>
  <buttom className="shadow-4 bg-white text-green-500 border-4 mr-3 p-1 text-[20px]" >View Detail</buttom>
</span>
  </div>
 
  </div>
  <div className="w-33% relative">
  <img className="w-100% h-[240px] " src="https://www.acetravels.com/public/images/upload/package/china.jpg"/>
  <div className="bg-yellow-500 w-16 h-8 absolute top-8 left-0 text-white ">7D/6N</div>
  <div className="act">
    <p className="text-[18px] text-white text-center bottom-4 ">SRILANKA & MALDIVES (Honeymoon Offer for a Couple)</p>  
  </div>
  <div className="btnn container">
<h3>NPR</h3>
<span className=" flex justify-between">
  <p className="text-orange-500 text-[20px]">131200/-</p>
  <buttom className="shadow-4 bg-white text-green-500 border-4 mr-3 p-1 text-[20px]" >View Detail</buttom>
</span>
  </div>
 
  </div>
  
  </div>
  <div className="flex py-40 gap-[110px]">
  <div className="w-33% relative">
  <img className="w-100% h-[240px] " src="https://www.acetravels.com/public/images/upload/package/dubaii.jpg"/>
  <div className="bg-yellow-500 w-16 h-8 absolute top-8 left-0 text-white ">7D/6N</div>
  <div className="act">
    <p className="text-[18px] text-white text-center bottom-4 ">SRILANKA & MALDIVES (Honeymoon Offer for a Couple)</p>  
  </div>
  <div className="btnn container">
<h3>NPR</h3>
<span className=" flex justify-between">
  <p className="text-orange-500 text-[20px]">131200/-</p>
  <buttom className="shadow-4 bg-white text-green-500 border-4 mr-3 p-1 text-[20px]" >View Detail</buttom>
</span>
  </div>
 
  </div>
  <div className="w-33% relative">
  <img className="w-100% h-[240px] " src="https://www.acetravels.com/public/images/upload/package/singapore-1.jpg"/>
  <div className="bg-yellow-500 w-16 h-8 absolute top-8 left-0 text-white ">7D/6N</div>
  <div className="act">
    <p className="text-[18px] text-white text-center bottom-4 ">SRILANKA & MALDIVES (Honeymoon Offer for a Couple)</p>  
  </div>
  <div className="btnn container">
<h3>NPR</h3>
<span className=" flex justify-between">
  <p className="text-orange-500 text-[20px]">131200/-</p>
  <buttom className="shadow-4 bg-white text-green-500 border-4 mr-3 p-1 text-[20px]" >View Detail</buttom>
</span>
  </div>
 
  </div>
  <div className="w-33% relative">
  <img className="w-100% h-[240px] " src="https://www.acetravels.com/public/images/upload/package/singacrui.jpg"/>
  <div className="bg-yellow-500 w-16 h-8 absolute top-8 left-0 text-white ">7D/6N</div>
  <div className="act">
    <p className="text-[18px] text-white text-center bottom-4 ">SRILANKA & MALDIVES (Honeymoon Offer for a Couple)</p>  
  </div>
  <div className="btnn container">
<h3>NPR</h3>
<span className=" flex justify-between">
  <p className="text-orange-500 text-[20px]">131200/-</p>
  <buttom className="shadow-4 bg-white text-green-500 border-4 mr-3 p-1 text-[20px]" >View Detail</buttom>
</span>
  </div>
 
  </div>
  
  </div>
</div>
      </section>  */}
      {/* <section className=" container pb-20 ml-[92px]">
        <div className=" py-5">
        <h2 className="text-[27px] text-green-900">Europe Tour Packages</h2>
        </div>

        <div className="flex gap-[110px]">
  <div className="w-33% relative">
  <img className="w-100% h-[240px] " src="https://www.acetravels.com/public/images/upload/package/england-city.jpg"/>
  <div className="bg-yellow-500 w-16 h-8 absolute top-8 left-0 text-white ">7D/6N</div>
  <div className="act">
    <p className="text-[18px] text-white text-center bottom-4 ">SRILANKA & MALDIVES (Honeymoon Offer for a Couple)</p>  
  </div>
  <div className="btnn container">
<h3>NPR</h3>
<span className=" flex justify-between">
  <p className="text-orange-500 text-[20px]">131200/-</p>
  <buttom className="shadow-4 bg-white text-green-500 border-4 mr-3 p-1 text-[20px]" >View Detail</buttom>
</span>
  </div>
 
  </div>
  <div className="w-33% relative">
  <img className="w-100% h-[240px] " src="https://www.acetravels.com/public/images/upload/package/maldives-images.jpg"/>
  <div className="bg-yellow-500 w-16 h-8 absolute top-8 left-0 text-white ">7D/6N</div>
  <div className="act">
    <p className="text-[18px] text-white text-center bottom-4 ">SRILANKA & MALDIVES (Honeymoon Offer for a Couple)</p>  
  </div>
  <div className="btnn container">
<h3>NPR</h3>
<span className=" flex justify-between">
  <p className="text-orange-500 text-[20px]">131200/-</p>
  <buttom className="shadow-4 bg-white text-green-500 border-4 mr-3 p-1 text-[20px]" >View Detail</buttom>
</span>
  </div>
 
  </div>
  <div className="w-33% relative">
  <img className="w-100% h-[240px] " src="https://www.acetravels.com/public/images/upload/package/paris-1.jpg"/>
  <div className="bg-yellow-500 w-16 h-8 absolute top-8 left-0 text-white ">7D/6N</div>
  <div className="act">
    <p className="text-[18px] text-white text-center bottom-4 ">SRILANKA & MALDIVES (Honeymoon Offer for a Couple)</p>  
  </div>
  <div className="btnn container">
<h3>NPR</h3>
<span className=" flex justify-between">
  <p className="text-orange-500 text-[20px]">131200/-</p>
  <buttom className="shadow-4 bg-white text-green-500 border-4 mr-3 p-1 text-[20px]" >View Detail</buttom>
</span>
  </div>
 
  </div>
  
  </div>
      </section>
      <section className="bg-slate-400">
        <div className="container ml-[95px]">
<h2 className="text-green-600 text-[30px]">Asia Tour Packages</h2>
<div className="py-3 flex ">
<div className="w-[50%] ">
  <div className="flex py-2">
  <div className="[w-50%]">
    <img className="h-[220px] w-[100%]" src="https://www.acetravels.com/public/images/upload/package/landmark_wat_thai_sunset_temple_shutterstock_lead.jpg"/>
  </div>
  <div className="w-[50%] ">
  <div className=" w-[80%] h-[220px]  bg-white py-3 px-3">
    <h2>AMAZING THAILAND</h2>
    <p>Duration 5D/4N</p>
  <h3 className="py-3 text-green-600">NPR</h3>

  <p className="text-orange-500 text-[20px]">131200/-</p>
  <buttom className="shadow-4 bg-white text-green-500 border-4 mt-2  text-[20px]" >View Detail</buttom>

  </div>
  </div>
  </div>
  <div className="flex py-2 ">
  <div className="[w-50%]">
    <img className="h-[220px] w-[100%]" src="https://www.acetravels.com/public/images/upload/package/landmark_wat_thai_sunset_temple_shutterstock_lead.jpg"/>
  </div>
  <div className="w-[50%] ">
  <div className=" w-[80%] h-[220px]  bg-white py-3 px-3">
    <h2>AMAZING THAILAND</h2>
    <p>Duration 5D/4N</p>
  <h3 className="py-3 text-green-600">NPR</h3>

  <p className="text-orange-500 text-[20px]">131200/-</p>
  <buttom className="shadow-4 bg-white text-green-500 border-4 mt-2  text-[20px]" >View Detail</buttom>

  </div>
  </div>
  </div>
  <div className="flex py-2 ">
  <div className="[w-50%]">
    <img className="h-[220px] w-[100%]" src="https://www.acetravels.com/public/images/upload/package/landmark_wat_thai_sunset_temple_shutterstock_lead.jpg"/>
  </div>
  <div className="w-[50%] ">
  <div className=" w-[80%] h-[220px]  bg-white py-3 px-3">
    <h2>AMAZING THAILAND</h2>
    <p>Duration 5D/4N</p>
  <h3 className="py-3 text-green-600">NPR</h3>

  <p className="text-orange-500 text-[20px]">131200/-</p>
  <buttom className="shadow-4 bg-white text-green-500 border-4 mt-2  text-[20px]" >View Detail</buttom>

  </div>
  </div>
  </div>
  <div className="flex py-2 ">
  <div className="[w-50%]">
    <img className="h-[220px] w-[100%]" src="https://www.acetravels.com/public/images/upload/package/landmark_wat_thai_sunset_temple_shutterstock_lead.jpg"/>
  </div>
  <div className="w-[50%] ">
  <div className=" w-[80%] h-[220px]  bg-white py-3 px-3">
    <h2>AMAZING THAILAND</h2>
    <p>Duration 5D/4N</p>
  <h3 className="py-3 text-green-600">NPR</h3>

  <p className="text-orange-500 text-[20px]">131200/-</p>
  <buttom className="shadow-4 bg-white text-green-500 border-4 mt-2  text-[20px]" >View Detail</buttom>

  </div>
  </div>
  </div>
</div>
<div className="w-[50%] mr-[140px] ">
<div className="flex py-2 ">
  <div className="[w-50%]">
    <img className="h-[220px] w-[100%]" src="https://www.acetravels.com/public/images/upload/package/landmark_wat_thai_sunset_temple_shutterstock_lead.jpg"/>
  </div>
  <div className="w-[50%] ">
  <div className=" w-[80%] h-[220px]  bg-white py-3 px-3">
    <h2>AMAZING THAILAND</h2>
    <p>Duration 5D/4N</p>
  <h3 className="py-3 text-green-600">NPR</h3>

  <p className="text-orange-500 text-[20px]">131200/-</p>
  <buttom className="shadow-4 bg-white text-green-500 border-4 mt-2  text-[20px]" >View Detail</buttom>

  </div>
  </div>
  </div>
  <div className="flex py-2">
  <div className="[w-50%]">
    <img className="h-[220px] w-[100%]" src="https://www.acetravels.com/public/images/upload/package/landmark_wat_thai_sunset_temple_shutterstock_lead.jpg"/>
  </div>
  <div className="w-[50%] ">
  <div className=" w-[80%] h-[220px]  bg-white py-3 px-3">
    {id21.map((a)=>(
      <Link href={`/detail/${a.id}`}>
      <h2>
        {a.details}
      </h2>
      </Link>
    ))}

    <p>Duration 5D/4N</p>
  <h3 className="py-3 text-green-600">NPR</h3>

  <p className="text-orange-500 text-[20px]">131200/-</p>
  {id21.map((a)=>(
      <Link href={`/detail/${a.id}`}>
      <buttom className="shadow-4 bg-white text-green-500 border-4 mt-2  text-[20px]" >View Detail</buttom>
      </Link>
    ))}
  
  

  </div>
  </div>
  </div>
  <div className="flex py-2">
  <div className="[w-50%]">
    <img className="h-[220px] w-[100%]" src="https://www.acetravels.com/public/images/upload/package/landmark_wat_thai_sunset_temple_shutterstock_lead.jpg"/>
  </div>
  <div className="w-[50%] ">
  <div className=" w-[80%] h-[220px]  bg-white py-3 px-3">
    <h2>AMAZING THAILAND</h2>
    <p>Duration 5D/4N</p>
  <h3 className="py-3 text-green-600">NPR</h3>

  <p className="text-orange-500 text-[20px]">131200/-</p>
  <buttom className="shadow-4 bg-white text-green-500 border-4 mt-2  text-[20px]" >View Detail</buttom>

  </div>
  </div>
  </div>
  <div className="flex py-2 ">
  <div className="[w-50%]">
    <img className="h-[220px] w-[100%]" src="https://www.acetravels.com/public/images/upload/package/landmark_wat_thai_sunset_temple_shutterstock_lead.jpg"/>
  </div>
  <div className="w-[50%] ">
  <div className=" w-[80%] h-[220px]  bg-white py-3 px-3">
    <h2>AMAZING THAILAND</h2>
    <p>Duration 5D/4N</p>
  <h3 className="py-3 text-green-600">NPR</h3>

  <p className="text-orange-500 text-[20px]">131200/-</p>
  <buttom className="shadow-4 bg-white text-green-500 border-4 mt-2  text-[20px]" >View Detail</buttom>

  </div>
  </div>
  </div>
</div>


</div>
        </div>
      </section> */}
    <section className="bg-green-700 py-5">
      <div className="container ml-[110px]"> 

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
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

<div class="swiper mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <h2 className="text-[20px] text-center">Nice trip with Ace Travel</h2>
        <p className="text-center">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a</p>
        <p className="text-center">Amrit kandel</p>
      </div>
      <div class="swiper-slide">
        <div className="text-center">
        <h2 className="text-[20px] text-center">Impressed by dilligent by </h2>
        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a</p>
        <p>this is nex page</p>
        </div>
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
  </div>
  </Swiper>
      </div>
      
      </section>
      <section className="bg-white">
        <div className="container mx-auto ml-28 mr-[28px]">
<ProductByCat4 cat="Nepal Tour Packages (for Foreigners)"/> 
        </div>

      </section>
    
      </section>
    </>
  ); 
}
