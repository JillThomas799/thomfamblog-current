import Image from 'next/image'
import Link from 'next/link'
import BernardWheelchairTitled from '/public/imagesresized/BernardWheelchairTitled.jpg';



export default function September2026() {

  return (   
 <div> 
       <div className=" bg-HolyIslandCastle01092026 bg-cover h-[80vh] w-auto border-solid border-[#436A6b] border-8 pb-28"> {/*September block background*/}
        <div className="text-[#E7E1F0] text-center font-semibold text-xl p-3 bg-[#8d6fb0] border-solid border-4 border-[#436A6b] m-2">September 2026</div>
          </div>
       
      <div className="flex flex-col max-w-full leading-1.5 sm:p-2 md:p-2 lg:p-2 m-4 border-[#436A6b] border-solid border-4 bg-[#c3b7bb]">
         <div className="text-md md:text-lg max-w-full font-bold text-[#E7E1F0]  text-center dark:text-[#244845] justify-center items-center">
        <div className="font-bold border-solid border-[#436A6b] border-4 mr-1 ml-1 mb-4 px-2 py-2 text-[#E7E1F0]  bg-[#8d6fb0]">1st - 30th September 2026.</div> 
          <div className="font-bold border-solid border-[#436A6b] border-4 mr-1 ml-1 mb-2 px-4 py-2 text-[#E7E1F0] bg-[#8d6fb0]">Welcome to our September 2026 blog.</div> 
        
           <div className="pr-1 pl-1 pb-2 md:pr-1 md:pl-1 font-semibold text-left text-white dark:text-white">
            We start the month with Bernard's dad still being with us, so join us for our adventures with him to the Holy Island of Lindesfarne and Carlisle Cathedral.
           </div>       
           </div>          
           </div>
         


            <div className="flex flex-col max-w-full leading-1.5 sm:p-2 md:p-2 lg:p-2 m-4 border-[#436A6b] border-solid border-4 bg-[#c3b7bb]">
         <div className="text-md md:text-lg max-w-full font-semibold text-[#244845] text-center dark:text-[#244845] justify-center items-center">
        <div className="font-bold border-solid border-[#436A6b] border-4 mr-1 ml-1 mb-4 px-2 py-2 text-[#E7E1F0]  bg-[#8d6fb0]">1st September 2026.</div> 
        <div className="font-bold border-solid border-[#436A6b] border-4 mr-1 ml-1 mb-4 px-2 py-2 text-[#E7E1F0] bg-[#8d6fb0]">Whistle-stop tour of Northumberland and visit to the Holy Island of Lindisfarne.</div> 
        
           <div className="pr-1 pl-1 pb-2 md:pr-1 md:pl-1 font-semibold text-left text-[#E7E1F0] dark:text-[#E7E1F0]">
            <div className="text-center"></div>
            <br />
            <div className="flex flex-col border-solid border-4 border-[#436A6b] bg-[#8d6fb0] pb-2 pt-2 mr-[12%] ml-[12%] mt-5 mb-4  justify-center text-center">
            <div className="mt-1 mb-1 sm:m-2 text-md font-normal block text-white  bg-[#8d6fb0]">
              {" "}
                <div className="m-1 p-1 font-semibold  border-[#436A6b] border-solid border-4 bg-[#c4b5d8]">To open the album of our visit to Holy Island with Bernard's dad, click on the image below.</div>
                <br />
              <br />
              <Link
                href="https://photos.app.goo.gl/QjoHb41z5zf14q2X9"
                target="_blank"
              >
                <Image
                  src={ BernardWheelchairTitled }
                  className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[70%] border-solid border-[#436A6b] border-4 mt-1 mb-11 "
                  alt="Photo of Bernard in the mobile chair, Harry pushing and Bernard's dad at Holy Island."
                />
              </Link>
            </div>
            </div>
           </div>       
           </div>          
           </div>
          
            </div> 
           
);
}
