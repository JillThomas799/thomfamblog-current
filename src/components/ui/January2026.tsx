import Image from 'next/image'
import Link from 'next/link'
import WinterRobin from "/public/imagesresized/WinterRobin.jpg";
import Robins from "./catlennie.tsx"



export default function January2026() {
  return (   
 <div className=" bg-black h-[100vh] w-full pb-[100%] border-solid border-4 border- border-gray-600  mb-28">     
       <div className="text-white text-center font-semibold text-2xl p-3 bg-gray-500 m-2">January 2026
         <Image 
        src={ WinterRobin } 
         className="block ml-auto mr-auto h-[auto] w-[100%] md:w-[90%] border-solid border-black-400 border-4 mt-6 mb-11"
                  alt="Photo of Winter Robin"
                  />

                  < Robins />
        </div> 
  
</div>

  );
}