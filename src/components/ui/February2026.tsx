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
          We are delighted to be able to bring you our February 2026 blog reintroducing the local deer. This year we have taken the header display one step further by animating the deer from first principles. In this month's scene the first of the deer is leaping across the snow and the 2nd deer, in the rear, is turning to look towards the rear of the scene before returning its gaze towards the spectator.
          <br />
          <br />
          February looks to be a fairly quiet month with Harry  working hard, continuing to enjoy his work for the council and driving independently around the county in the new car and Elena settled happily with her partner not too far away. 
          <br />
          <br />
          We do have some important news and that is that the family has acquired an additional member in the form of a young black cat called Gawain from the rescue centre, which Elena and her partner have acquired. Gawain will be living with Elena though so Lennie is safe....
            </div>{" "}
        </div> 
         </div> 
          </div> 
          </div>  
          
            );
            }