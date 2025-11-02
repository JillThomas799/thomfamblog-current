"use client"

import Image from 'next/image'
import Link from 'next/link'
import NovemberBonfire from "./novemberbonfire"; 
import "./November2025.css"; 


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
        <div className="bg-black h-[65vh] ml-2 mr-2 mt-0 mb-[10%]"><NovemberBonfire /></div>
        </div>
        <div className="mb-20"> 
      <div className="flex flex-col max-w-full leading-1.5 pr-3 pl-3 sm:p-2 md:p-2 lg:p-2 m-4 border-gray-800 border-solid border-2 bg-[#b55b4b] ">
         <div className="text-md md:text-lg max-w-full font-bold text-white text-center dark:text-white justify-center items-center">

        <div className="text-left text-white border-solid  font-semibold border-black border-2 mr-1 ml-1 mb-4 mt-4 px-4 py-4 bg-[#773f3f]">
          Welcome to our November blog. The days are getting colder (a little), Harry has settled really well into his new job and is very much enjoying it.   </div>{" "}
      </div>{/*End of individual dated entry photo album block*/} 
           </div> {/*End of news content block*/}
           </div> {/*End of individual dated entry design and color template block*/}  

                <div className="mb-20"> 
      <div className="flex flex-col max-w-full leading-1.5 sm:p-2 md:p-2 lg:p-2 m-4 border-gray-800 border-solid border-2 bg-[#b55b4b]">
         <div className="text-md md:text-lg max-w-full font-bold text-white text-center dark:text-white justify-center items-center">
        <div className="font-bold py-2 px-12 text-white text-center dark:text-white"> 1st November 2025</div> {/*End of news date block*/} 
        <div className="font-bold text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-[#773f3f]">Sizergh Castle in the electric car</div> {/*End of news header block*/}
        
        <div className="pr-3 pl-3 md:pr-1 md:pl-1 font-semibold text-left text-[#22311d] dark:text-[#22311d]">
         Today we decided to take the new electric car on a test longer drive of 132 miles. So we headed off as a family to Sizergh Castle, Kendal.
         <br />
         <br />  

           {/* <div className="flex flex-col border-solid border-2 border-[#22311d] bg-[#61603c] pb-2 pt-2 mr-[12%] ml-[12%] mt-5 mb-4  justify-center text-center">
            <div className="mt-1 mb-1 sm:m-2 text-md font-normal block text-[#22311d] bg-[#61603c]">
              {" "}
                <div className="m-1 p-1 font-bold  border-gray-800 border-solid border-2 bg-[#b55b4b]">Click on the image below to open the album <br /> of our visit to Hexham Abbey, the Gaia Exhibition and to visit the Climate Change Exhibition for yourself</div>
                <br />
              <br />
              <Link
                href="https://photos.app.goo.gl/9Y9ydZbHXfyR27Ty8"
                target="_blank"
              >
                <Image
                  src={ GaiaTitled }
                  className="block ml-auto mr-auto h-auto w-[70%] md:w-[70%] lg:w-[60%] border-solid border-[#22311d] border-2 mt-1 mb-11 rounded-[70%]"
                  alt="Photo of Durham Cathedral"
                />
              </Link>
            </div>{" "} */}
      {/* </div>                 End of individual dated entry photo album block  */}
           {/* </div>            End of news content block */}
           </div>           {/*  End of individual dated entry design and color template block */}
           </div> {/*End of individual dated entry block*/}</div>     
          
      </div> {/*End of November block*/}
      </div> {/*End of November block background*/}

      </div>
      
     
   
);
}