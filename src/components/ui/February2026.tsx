import Image from 'next/image'
import Link from 'next/link'
import "./February2026.css"; 
import Deer from "./deer";


export default function February2026() {
  return ( <div>
 <div id="snowScene" className=" bg-black border-solid border-4 border-gray-600  p-2 md:p-4  height-[100vh]"> 
 <div className="text-gray-600 bg-[#edeaea] border-solid border-2 mr-auto ml-auto mt-0 p-2 border-gray-600  font-bold text-xl text-center">February 2026</div>  
 <div className="scale-[70%] translate-x-[-10%] md:scale-[82%] md:translate-x-[-30%] lg:scale-[85%] lg:translate-x-[-20%]"><Deer/> </div>          
                  <br />
                  <br />
             </div> 
< div className="mb-20"> 
      < div className="flex flex-col w-auto leading-1.5 p-2 md:p-4 lg:p-4  mb-4 mt-4 border-gray-800 border-solid border-2 md:border-2 bg-[#bdbeba]">
         < div className="text-md md:text-lg max-w-full font-semibold text-[#f3e2d6] text-center dark:text-[#f3e2d6] justify-center items-center">
        <div className="font-semibold text-center border-solid border-black border-2 mr-1 ml-1 mt-2 mb-2 px-4 py-4 bg-[#786d68]">Welcome to our February 2026 blog.
          <br />
          <br />
            </div>{" "}
        </div> 
         </div> 
          </div> 
          </div>  
          
            );
            }