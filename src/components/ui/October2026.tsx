import Image from 'next/image'
import Link from 'next/link'
import Gaia from "/public/imagesresized/Gaia.jpg";
import HW2D12Titled from "/public/imagesresized/HW2D12Titled.jpg";
import ArchimedesScrewTitled from "/public/imagesresized/ArchimedesScrewTitled.jpg";
import OctoberWitch from "./octoberwitch";  



export default function October2026() {

  return (   
 <div className=" bg-black border-solid border-2 border-[#22311d] mb-28"> {/*October block background*/}
    <div >
      <div className="bg-black border-solid border-8 border-[#E6871A] m-4">
       <div className="text-black text-center font-bold text-2xl p-3 bg-[#E6871A] border-solid border-2 border-[#22311d] m-2">October 2026
        </div>
        
          <OctoberWitch />
          </div>
      
        <div className="mb-20"> 
      <div className="flex flex-col max-w-full leading-1.5 p-4 md:p-4 lg:p-4 m-4 border-gray-800 border-solid border-2 bg-[#E6871A]">
         <div className="text-md md:text-lg max-w-full font-semibold text-white text-center dark:text-white justify-center items-center">
        <div className="font-normal text-left border-solid border-black border-2 mr-1 ml-1 mb-4 px-4 py-4 bg-stone-800">Welcome to our October 2026 blog. We have a new animation for the October header this month, a halloween scene in preparation for the 31st October. Already the shops are full of enough spooky merchandise to create a haunted film set.
        <br />
          <br />
          Additionally this month, we have updates on how Lennie is getting on after his spell of recent ill health, a trip down to London to see the Korea exhibition at the British Museum, and Jill and Bernard start their work as volunteers at the Tullie Museum in Carlisle.

            </div>{" "}
      </div>{/*End of individual dated entry photo album block*/} 
           </div> {/*End of news content block*/}
           </div> {/*End of individual dated entry design and color template block*/}  

                <div className="mb-20"> 
      <div className="flex flex-col max-w-full leading-1.5 p-4 md:p-2 lg:p-4 m-4 border-gray-800 border-solid border-2 bg-[#E6871A]">
         <div className="text-md md:text-lg max-w-full font-semibold text-white text-center dark:text-white justify-center items-center">
        <div className="font-bold py-2 px-12 text-[#22311d] text-center dark:text-[#22311d]"> 3rd October 2026, Saturday</div> {/*End of news date block*/} 
        <div className="font-semibold border-solid border-black border-2 mr-1 ml-1 mb-4 px-4 py-4 bg-stone-800">Hadrian's Wall Path West to East (abridged): Day 12, Housesteads Roman Fort to Sewing Shields.</div> {/*End of news header block*/}
        
        <div className="pr-1 pl-1 md:pr-1 md:pl-1 font-semibold text-left text-[#22311d] dark:text-[#22311d]">
          
         <br />
         <br />  
      
           <div className="flex flex-col border-solid border-2 border-[#22311d] bg-stone-800 pb-2 pt-2 mr-[0%] ml-[0%] mt-5 mb-4  justify-center text-center">
            <div className="mt-1 mb-1 sm:m-2 text-md font-normal block text-black bg-stone-800">
              {" "}
                <div className="m-1 p-2 font-semibold  border-gray-800 border-solid border-2 bg-[#E6871A]">Click on the image below to open the album of our Hadrian's Wall Path West to East (abridged) walk: Day 12, Housesteads Roman Fort to Sewing Shields </div>
                <br />
              <br />
              <Link
                href="https://photos.app.goo.gl/nRHZRkjyiMsrmXHe6"
                target="_blank"
              >
                <Image
                  src={ HW2D12Titled }
                  className="block ml-auto mr-auto h-auto w-[70%] md:w-[70%] lg:w-[60%] border-solid border-[#22311d] border-2 mt-1 mb-11 rounded-[70%]"
                  alt="Photo of Bernard, Jill, and Harry on the Housesteads to Sewing Shields section of the Hadrian's Wall Path."
                />
              </Link>
            </div>{" "}
      </div>{/*End of individual dated entry photo album block*/} 
           </div> {/*End of news content block*/}
           </div> {/*End of individual dated entry design and color template block*/}
           </div> {/*End of individual dated entry block*/}    


      
      </div> {/*End of October block*/}
      </div> {/*End of October block background*/}
</div>
      
);
}