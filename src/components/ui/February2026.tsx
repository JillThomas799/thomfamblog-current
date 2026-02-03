import Image from 'next/image'
import Link from 'next/link'
import "./February2026.css"; 
import Deer from "./deer";
import GawainArrivalTitled from "/public/imagesresized/GawainArrivalTitled.jpg";


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

           <div className="mb-20">
          <div className="flex flex-col max-w-full leading-1.5 p-1 md:p-2 lg:p-4 m-4 border-gray-800 border-solid border-2 bg-[#bdbeba]">
            <div className="text-md md:text-lg max-w-full font-normal mt-4 mb-4 p-2 text-white text-center md:text-left justify-center items-center bg-[#786d68]">

              <div className="font-semibold pt-2 pb-2 mr-[30%] ml-[30%]  text-[#f3e2d6] text-center  border-gray-800 border-solid border-2 bg-[#5d5450]"> 2nd February 2026</div> {/*End of news date block*/}
              <div className="font-bold m-4 pt-2 pb-4 py-2 md:px-4 text-[#f3e2d6] text-center  border-gray-800 border-solid border-2 bg-[#5d5450]"> The Arrival of Gawain, Elena and Willow's new cat</div>
              <div className="text-[#f3e2d6] text-center md:text-left mb-4 md:*:pr-6 md:*:pl-6 ">
                2 days ago, on Friday 31st January 2026, Elena and Willow went to collect their new addition to the family, a 2 year old black cat whom they are calling Gawain from the local animal rescue centre. He has been in the rescue centre for 2 years and has been very well looked after by the staff there, but it is lovely that he has a cosy permanent home to go to now.
                <br /> 
                <br />
                Gawain, has been named after one of King Arthur's knights. In the early Welsh texts of King Arthur, Gawain is portrayed as a formidable but courteous and compassionate warrior, fiercely loyal to his king and his family. 
                Lets hope Gawain is going to live up to his reputation....
                <br />
                <br />
                <div className="m-1 pr-2 pl-2 pt-4 pb-4 font-semibold border-gray-800 border-solid border-2 bg-[#5d5450] mb-6">Click on the image below to open the album <br /> of Gawain's arrival.
                <br />
                <br />
                      Please make sure to click on the <em>'i'</em> icon, in the top right-hand corner of each photo, as we have included a lot of additional information about the photo in that space.
                   </div>
                  <Link
                    href="https://photos.app.goo.gl/UpRdFwK2CPeuKhHn6"
                    target="_blank"
                  >
                    <Image
                      src={GawainArrivalTitled}
                      className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[50%] border-solid border-black-400 border-4 mt-4 mb-6"
                      alt="Photo of Gawain day 2."
                    />
                  </Link>
                
               

              </div>
            </div>
          </div>


        </div>{" "}

          </div>  
          
            );
            }