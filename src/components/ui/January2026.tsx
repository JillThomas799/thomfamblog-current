import Image from 'next/image'
import Link from 'next/link'
import WinterRobin from "/public/imagesresized/WinterRobin.jpg";
import Robins from "./robins";



export default function January2026() {
  return (   
 <div className=" bg-black h-[100vh] w-full pb-[100%] border-solid border-4 border- border-gray-600  mb-28">     
       <div className="text-white text-center font-semibold text-2xl p-3 bg-gray-700 border-[#bdbeba] border-8 m-2">January 2026
                  <br />
                  <br />
                  < Robins />
        </div> 
  
</div>

  );
}