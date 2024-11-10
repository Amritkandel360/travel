"use client"
import { productdata } from '@/app/Data'
import { useParams } from 'next/navigation'
import React from 'react'
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { GoStopwatch } from "react-icons/go";

function page() {
  let {id}=useParams()
  let det=productdata.find((a)=>a.id==id)
  
  return (
    
    <>
     <section className='bg-slate-300 overflow-x-hidden p-3 lg:flex'>
<div className=' container lg:ml-[170px] lg:w-[65%] w-[100%] my-5'>
<div className='w-[90%]'>
  <img className=' ' src={det.pic}/>
</div>
<div className='bg-white w-[90%]'>
<h1 className='py-4 text-bold text-4xl text-center'>{det.details}</h1>
<p className='text-center px-4 '>{det.contant}</p>
</div>
<div className='bg-white w-[90%] p-3'>
  <h2 className='p-2 text-4xl'>Itinerary</h2>
<button class="accordion">Day 1</button>
<div class="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<button class="accordion">Day 2</button>
<div class="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
<button class="accordion">Day 3</button>
<div class="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
<button class="accordion">Day 4</button>
<div class="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
<button class="accordion">Day 8</button>
<div class="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

</div>
<div className='bg-white w-[90%] p-3 '>
<h2 className='text-3xl py-3'>Offer Includes</h2>
<hr/>
<ul>
  <li>Airport Pick up  and drop</li>
  <li>Round Trip Economy Class Airfare.</li>
  <li>Accommodation for 2 nights in Singapore .</li>
  <li>02 nights in cruise  Singapore to Bintan</li>
  <li>Daily Buffet breakfast at the hotel.</li>
</ul>
<h1 className='text-3xl py-3'>Offer Excludes</h1>
<hr/>
<p>Meals other than those specified (if any).<br/>
Tips, Laundry, telephone, optional excursions and other items of a personal nature<br/>
There is no refund for unused services or hotel nights offered within a motor coach tour itinerary.<br/>
Cost of foreign exchange for personal use.</p>
</div >

</div>
<div className='lg:w-[35%] w-[100%] lg:mr-[90px]'>
  <div className='w-[100%] bg-white'>
  <div className='container p-3'>
    <p className='py-6'>From</p>
    <hr/>
    <h4 className='py-6'> NPR {det.price}</h4>
    <hr/>
   <p className='py-6 flex items-center gap-4'> <GoStopwatch />5Days</p>
    <hr/>
    <p className='py-6'><LiaPeopleCarrySolid /></p> 
  </div> 
  </div>
  <div className='container p-3 bg-white' >
<h2 className='text-green-700'>Booking Contact</h2>
<hr/>
<p>Hunting Line: 01-4411830 (60 Lines)</p>
<hr/>
<p>Toll Free: 16600-100600</p>
<hr/>
<p>Email: sales@acetravels.com</p>
  </div>
</div>
     </section>
     

    </>
  )
}

export default page

