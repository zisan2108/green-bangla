import React from "react";
import Slider from "../../components/Slider";
import  insidecity from "../../assets/img/Ellipse7.png"
import  outsidecity from "../../assets/img/Ellipse6.png"
import bus from "../../assets/img/bus.png"
import online from "../../assets/img/world.png"
import cashdelivery from "../../assets/img/cashondelivery.png"
import headphone from "../../assets/img/headphones.png"

export default function Home() {
  return (
    <div>
      <Slider></Slider>

      <body className="bg-[#091242] ">
<div className="mx-3">

         {/* ------------------------Track your location-----------------*/}
         <div className="pb-10 ">
             <p className='text-white text-[24px] font-bold container mx-auto mb-6 pt-5'>Track your location</p>
             <div className="container mx-auto  bg-[#114220]  ">
          <div className="flex items-center justify-center p-3 gap-5">
            <input
              type="text"
              name="tracking_code"
              placeholder="Enter your tracking Coad"
              className="w-1/2 p-3  bg-white rounded-lg"
            />
            <button className="btn  bg-[#eeece9] hover:bg-[#86682c] join-item text-black">Search</button>
          </div>

      
        </div>
             </div>
             

{/* --------------------Inside City-------------------- */}

             <div className='container mx-auto w-full flex'>
               <label  className='bg-white w-[500px] text-left rounded'> 
                  <div className='flex'>
                   <div className='w-auto p-3'>
                       <img src={insidecity} alt='image'></img> 
                  </div>
              <div className='m-3'>
                 <p className='text-[#554BC1] font-bold mt-3'>Inside City</p>
                <select className='float-right'>                 
                    <option value="Dhaka"></option>
                    <option value="Chattogram">Chattogram</option>
                    <option value="Rajshahi">Rajshahi</option>
                    <option value="Rangpur">Rangpur</option>
                    <option value="Mymensingh">Mymensingh</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Barisa">Barisa</option>
                </select>
                <p className=''>pickup within Hours,Delivery in Days</p>
                </div>
                </div>
              </label> 
               
               <div className='bg-[#09420F] container mx-auto px-6 mb-8 mt-7 h-auto rounded ml-3 md:text-sm sm:text-sm'>
                <p className='text-white p-3 text-lg'>"Inter-City" refer to activities,services or transportation that occur or operate between 
                  different cities or urban areas within a region or country</p>
               </div>
             </div>

{/* --------------------Outside City-------------------- */}

             <div className='container mx-auto w-full flex mt-8'>
               <label className='bg-white w-[500px] text-left rounded'>
               <div className='flex'>
               <div className='w-24 p-3'>
                       <img src={outsidecity} alt='image'></img> 
                  </div>
               <div className='m-3 '>
                   <p className='text-[#554BC1] font-bold mt-3'>Outside City </p>
               <select className='float-right'>
                   <option value=""></option>
                   <option value="Kurigram">Kurigram</option>
                   <option value="Nilphamari">Nilphamari</option>
                   <option value="Lalmonirhat">Lalmonirhat</option>
                   <option value="Pirojpur">Pirojpur</option>
                </select>
               <p>pickup within Hours,Delivery in Three Days</p>
               </div>
               </div>
               </label> 

               <div className='bg-[#09420F] container mx-auto px-6 mb-8 mt-7 h-auto rounded ml-3 md:text-sm sm:text-sm'>
                <p className='text-white p-3 text-lg'> "Inter-City" refer to activities,services or transportation that occur or operate between 
                  different cities or urban areas within a region or country</p>
               </div>
             </div>

 {/* ---------------------Facilities-------------------------- */}

             <div className=''>

             <p className='text-white container mx-auto mt-10 text-[24px] font-bold'>Facilities</p>

                 <div className='text-white container mx-auto w-full grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-4 mt-6'>                
                  <div className='bg-[#09420F] py-3 flex rounded'> 
                   
                  <div className='p-3 ml-3 bg-[#FFD550] rounded-full'>
                       <img src={bus} alt='image'></img> 
                  </div>
                    <p className='ml-4 mt-2'> Daily Pick up, No limitations</p>
                  </div> 

                  <div className='bg-[#09420F] py-3 flex rounded'> 
                   
                   <div className='p-2 ml-3 bg-[#FFD550] rounded-full'>
                        <img src={online} alt='image'></img> 
                   </div>
                    <p className='ml-4 mt-2'> Online Management</p>
                   </div>

                   <div className='bg-[#09420F] py-3 flex rounded'> 
                   
                   <div className='p-5 ml-3 bg-[#FFD550] rounded-full'>
                        <img src={cashdelivery} alt='image'></img> 
                   </div>
                    <p className='ml-4 mt-2'> Cash On Delivery</p>
                   </div>

                   <div className='bg-[#09420F] py-3 flex rounded'> 
                   
                   <div className='p-5 ml-3 bg-[#FFD550] rounded-full'>
                        <img src={headphone} alt='image'></img> 
                   </div>
                    <p className='ml-4 mt-2'>24/h Customer Service</p>
                   </div>
                    
                 </div> 
                 
              </div>


        <div className=" container mx-auto mt-5" >
      <div className="flex flex-row">
  <div className="basis-1/2  bg-[#BC3B2F] p-4"></div>
  <div className="basis-1/2  bg-[#EF6654] p-4"></div>
  <div className="basis-1/2  bg-[#E2877F] p-4"></div>
  <div className="basis-1/2  bg-[#E3A099] p-4"></div>
  <div className="basis-1/2  bg-[#F4BDB7] p-4"></div>
</div>
      <div className="flex flex-row-reverse ">
  <div className="basis-1/2  bg-[#BC3B2F] p-4"></div>
  <div className="basis-1/2  bg-[#EF6654] p-4"></div>
  <div className="basis-1/2  bg-[#E3A099] p-4"></div>
  <div className="basis-1/2  bg-[#E2877F] p-4"></div>
  <div className="basis-1/2  bg-[#F4BDB7] p-4"></div>
</div>
</div>



{/* -----------------Out Side & Inter City Delivery--------------------- */}
<div>
         <div className='text-center text-white space-x-4 mt-16'> 
             <button className='bg-[#09420F] items-center p-3 border-1 rounded'>Out Side Delivery</button>
             <button className='bg-[#09420F] items-center p-3 border-1 rounded'>Inter City Delivery</button>
         </div>  
          
          <div className='container mx-auto w-full grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-4 mt-10'>
              <div className='bg-[#339331] py-4'></div> 
              <div className='bg-[#114220] py-4'></div> 
          </div>
          
        </div>

        </div>

      </body>



  
    </div>
  );
}
