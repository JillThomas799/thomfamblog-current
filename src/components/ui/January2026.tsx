import Image from 'next/image'
import Link from 'next/link'


import Robins from "./robins";
import IcyTarn2 from "/public/imagesresized/IcyTarn2.jpg";
import WinterRobin from "/public/imagesresized/WinterRobin.jpg";



export default function January2026() {
  return (   
 <div className=" bg-black border-solid border-4 border-gray-600 p-2 md:p-4 mb-28">     
       <div className="text-[#D99E49] text-center font-semibold text-xl p-3 bg-gray-700 border-[#bdbeba] border-4 m-2 bg-WinterGrass bg-cover ">
        <div className="bg-black mr-[15%] ml-[15%] md:mr-[20%] md:ml-[20%] p-2 border-[#bdbeba] border-2 text-[#D99E49 font-bold">January 2026</div>
                  <br />
                  <br />
                  < Robins />
        </div> 

<div className="mb-20"> 
      <div className="flex flex-col max-w-full leading-1.5 p-4 md:p-4 lg:p-4 m-4 border-gray-800 border-solid border-1 md:border-2 bg-[#bdbeba]">
         <div className="text-md md:text-lg max-w-full font-semibold text-[#D99E49] text-center dark:text-[#D99E49] justify-center items-center">
        <div className="font-normal text-center border-solid border-black border-2 mr-1 ml-1 mb-4 px-4 py-4 bg-black">Welcome to our January 2026 blog and to the new year. We hope everyone has had a Merry Christmas and Happy New Year. Our thoughts are also with those of our friends and family for whom times might be more difficult at the moment.
          <br />
          <br />
          The idea for the header design for this January blog was taken from some friendly robins we saw hopping around the local tarn in the icy weather. 
          The background is actually created by importing and scaling a photo of the grass by the tarn, and the little animated robins have been designed from the coordinates of one of the real robins, as can be seen in the photo below.
          <br />
          <br />
          <Image src={ WinterRobin }
                  className="block ml-auto mr-auto h-auto w-100 h-auto md:w-[100%] lg:w-[60%] border-solid border-gray-500 border-4 mt-8 mb-11 transform transition hover:scale-150"
                  alt="Photo of winter robin"
                />

            </div>{" "}
      </div>{/*End of individual dated entry photo album block*/} 
           </div> {/*End of news content block*/}
           </div> {/*End of individual dated entry design and color template block*/}  


                  <div className="mb-20"> 
      <div className="flex flex-col max-w-full leading-1.5 p-3 md:p-2 lg:p-4 m-4 border-gray-800 border-solid border-2 bg-[#bdbeba]">
         < div className="text-md md:text-lg max-w-full font-normal mt-4 mb-4 p-2 text-white text-center justify-center items-center bg-black">

          <div className="font-semibold pt-8 py-2 px-12 text-[#D99e49] text-center"> 5th January 2026</div> {/*End of news date block*/} 
        
         <Image
                  src={ IcyTarn2 }
                  className="block md:mr-auto md:ml-auto h-auto w-[100%] md:w-[75%] lg:w-[60%] border-solid border-gray-500 border-4 mt-8 mb-11 transform transition hover:scale-150"
                  alt="Photo of tarn iced over"
                />
                <div className="flex flex-col bg-[#bdbeba] border-solid border-gray-500 border-2 text-black  items-center mr-[10%] ml-[10%] md:ml-[30%] md:mr-[30%] p-2 font-bold">Icy Tarn </div>

             <div className="font-normal pt-4 py-2 px-4 text-[#D99e49] text-center pb-8">The first few days of January 2026 have been very icy with temperatures down to -7 degrees c. The ducks, swans and moor hens on the tarn have been looking rather miserable but there have been some very scenic views. </div>
              
          </div>{" "}
  
           </div> 
        </div>

</div>

  );
}