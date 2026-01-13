import Image from 'next/image'
import Link from 'next/link'
import "./February2026.css"; 
import Deer from "./deer";


export default function February2026() {
  return ( <div>
 <div id="snowScene" className=" bg-black border-solid border-4 border-gray-600 p-2 md:p-4  height-[100vh]"> 
 <div className="text-gray-600 bg-[#edeaea] border-solid border-2 mt-0 border-gray-600  font-bold text-xl md:text-2xl text-center">February 2026</div>  
 <div className="md: md:scale-75 translate-x-[-25%]"><Deer/> </div>          
                  <br />
                  <br />
             </div> 
< div className="mb-20"> 
      < div className="flex flex-col max-w-full leading-1.5 p-4 md:p-4 lg:p-4 mr-4 ml-4 mb-4 mt-4 border-gray-800 border-solid border-1 md:border-2 bg-[#bdbeba]">
         < div className="text-md md:text-lg max-w-full font-semibold text-[#D99E49] text-center dark:text-[#D99E49] justify-center items-center">
        <div className="font-normal text-center border-solid border-black border-2 mr-1 ml-1 mb-4 px-4 py-4 bg-black">Welcome to our February 2026 blog.
          <br />
          <br />
            </div>{" "}
        </div> 
         </div> 
          </div> 
          </div>  
          
            );
            }