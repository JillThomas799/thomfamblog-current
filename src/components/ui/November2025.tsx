"use client"

import Image from 'next/image'
import Link from 'next/link'
import NovemberBonfire from "./novemberbonfire"; 
import "./November2025.css"; 
import MG4Electric from '/public/imagesresized/MG4Electric.jpg'

export default function November2025() {

  return (   
 <div className=" bg-black border-solid border-2 border-black mb-28"> {/*November block background*/}
    <div>
       <div className="text-white text-center font-semibold text-2xl p-3 bg-[#41231c] border-solid border-2 border-[#b55b4b] m-2 animate-pulse">November 2025
        </div>
        <div className="FireworkContainer">
         <div className="pyro">
            {" "}
            <div className="before"></div>
            <div className="after"></div>
          </div>{" "}
         {/*Closing div pyro*/}
        <div className="bg-black h-[75vh] sm:h-[55vh] md:h-[75vh] mx-auto mt-0">
          <NovemberBonfire />
        </div>
        </div>
        <div className="mb-20"> 
      <div className="flex flex-col max-w-full leading-1.5 pr-3 pl-3 sm:p-2 md:p-2 lg:p-2 m-4 border-gray-800 border-solid border-2 bg-[#b55b4b] ">
         <div className="text-md md:text-lg max-w-full font-bold text-white text-center dark:text-white justify-center items-center">

        <div className="text-center text-white font-semibold border-black border-solid border-2 mr-1 ml-1 mb-4 mt-4 px-4 py-4 bg-[#773f3f]">
          Welcome to our November 2025 blog. The days are getting colder (although not yet cold enough to need to light the log fire). This month includes bonfire night and so this month's display is topical, being that of a bonfire and fireworks animation. It is also time for Pets' Classics on ClassicFM radio, Lennie's favourite programme.
          <br />
          <br />
          Harry has settled very well into his new job and is really enjoying it, so congratulations to Harry. Elena is keeping well and working hard. She is looking forward to welcoming her partner up to Cumbria later this month, as are we all.
          <br />
          <br />
          Otherwise, following the climate change exhibition at Hexham cathedral, we have taken the plunge and bought ourselves our first electric car. So that has been quite exciting. We have included some photos with this month's blog.
          <br />
          <br />
          Bernard and Jill are off to Glasgow this month for a short break, so we will be adding some photos and information regarding this trip as part of this month's blog. Otherwise, we hope everyone else is also well and enjoying November.
          </div>{" "}
      </div>{/*End of individual dated entry photo album block*/} 
           </div> {/*End of news content block*/}
           </div> {/*End of individual dated entry design and color template block*/}  

                <div className="mb-20"> 
      <div className="flex flex-col max-w-full leading-1.5 sm:p-2 md:p-2 lg:p-2 m-4 border-gray-800 border-solid border-2 bg-[#b55b4b]">
         <div className="text-md md:text-lg max-w-full font-semibold text-white text-center dark:text-white justify-center items-center">
        <div className="font-semibold py-2 px-12 text-white text-center dark:text-white"> 1st November 2025</div> {/*End of news date block*/} 
        <div className="font-semibold text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-[#773f3f]">Sizergh Castle, Kendal in the electric car</div> {/*End of news header block*/}
        
        <div className="text-center pr-3 pl-3 md:pr-1 md:pl-1 font-semibold text-white dark:text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-[#773f3f]">
         Today we decided to take the new electric car on a longer drive of 132 miles to test it out, so we headed off as a family to Sizergh Castle, Kendal for the day. 
         <br />
         <br />
         The car is an MG4 Turbo extended range. It has a good range from its 77kwh battery so we easily managed to reach Sizergh and back on one charge with still 45% battery remaining. It drives really well and is easy to manoeuvre making it feel both light and agile. It is an automatic, which seems strange at first, after driving a manual car but you soon get used to it.
         <br />
         <br />
         There were some minor teething problems such as the speed limit detection system, which had been working fine on the first day, not seeming to be working, . We soon discovered however, that this was due to rain water partially obscuring the cameras. A quick wipe with a cloth and all was fine! We are looking forward during the forthcoming months to hopefully reducing our carbon footprint a little by using this vehicle. 
         <br />
         <br />  
         <Image
                  src={ MG4Electric }
                  className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[60%] border-solid border-black-800 border-4 mt-1 mb-11 rounded-[70%]"
                  alt="Photo of MG4 electric"
                />
           </div>           {/*  End of individual dated entry design and color template block */}
           </div> {/*End of individual dated entry block*/}</div>     
          
      </div> {/*End of November block*/}
      </div> {/*End of November block background*/}

      </div>
      
     
   
);
}