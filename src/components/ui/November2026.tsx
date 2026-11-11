import Image from 'next/image'
import Link from 'next/link'
import NovemberBonfire from "./novemberbonfire"; 
import "./November2025.css"; 
import LennieRecovered from '/public/imagesresized/LennieRecovered.jpg';
import Keswick10112026 from '/public/imagesresized/Keswick10112026.jpeg';
import Keswick10112026_2 from '/public/imagesresized/Keswick10112026_2.jpg';

export default function November2026() {

  return (   
 <div className=" bg-black border-solid border-2 border-black mb-28"> {/*November block background*/}
    <div>
            <div className="bg-RiverTweedAutumn bg-cover h-[75vh] sm:h-[55vh] md:h-[75vh] mx-auto mt-0 border-solid border-8 border-[#773f3f]">
           <div className="text-white text-center font-semibold text-2xl p-3 bg-[#41231c] border-solid border-2 border-[#b55b4b] m-2">November 2026
        </div>
        </div>
       
        <div className="mb-4"> 
      <div className="flex flex-col max-w-full leading-1.5 pr-3 pl-3 sm:p-2 md:p-2 lg:p-2 m-4 border-gray-800 border-solid border-2 bg-[#b55b4b] ">
         <div className="text-md md:text-lg max-w-full font-normal text-white text-center dark:text-white justify-center items-center">

        <div className="font-semibold text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 p-1 bg-[#773f3f]"> Welcome to our November 2026 blog. </div>
        <div className="text-left text-white font-normal border-black border-solid border-2 mr-1 ml-1 mb-2 mt-4 p-1 bg-[#773f3f]">          
          The weather is becoming colder and we have had to light the log fire, much to Lennie's delight. 
          <br />
          <br />          
          We have a steadily busy month, volunteering at the Tullie Museum each week and at the end of this month we are off to see Dickens by Candlelight, Alderman Fenwick's House, Newcastle, which we are looking forward to. 
          <br />
          <br /> 
          The location in Alderman Fenwick's house where the play is performed was once the grand dining room and bar salon of the former Queen’s Head Hotel in Newcastle—where Charles Dickens himself stayed, dining with guests and regaling them with his stories. 
          <br />
          <br />
                   </div>{" "}
      </div>{/*End of individual dated entry photo album block*/} 
           </div> {/*End of news content block*/}
           </div> {/*End of individual dated entry design and color template block*/}  

                <div className="mb-20"> 
      <div className="flex flex-col max-w-full leading-1.5 sm:p-2 md:p-2 lg:p-2 m-4 border-gray-800 border-solid border-2 bg-[#b55b4b]">
         <div className="text-md md:text-lg max-w-full font-semibold text-white text-center dark:text-white justify-center items-center">
        <div className="font-semibold py-2 px-12 text-white text-center dark:text-white"> 3rd November 2026</div> {/*End of news date block*/} 
        <div className="font-semibold text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 p-1 bg-[#773f3f]">Update regarding Lennie's recent health scare.</div> {/*End of news header block*/}
        
        <div className="text-left pr-3 pl-3 md:pr-4 md:pl-4 font-normal text-white dark:text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-[#773f3f]">
        Lennie was back at the vets this morning for his follow up appointment regarding his recent diagnosis and treatment for his overactive thyroid. 
        <br />
         <br />  
        There was some very good news, as his thyroid hormone levels are now back within the normal range and he has started to regain some weight.
        <br />
         <br />          
        He is to stay on the same dose of medication as currently and he is going to be reviewed in 3 to 6 months, depending on how he gets along.
         <br />
         <br />  
         <Image
          src={LennieRecovered}
           className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[60%] border-solid border-black-400 border-4 mt-1 mb-11"
                  alt="Photo of Lennie looking well and relaxed in his basket."/>
         
           </div>           {/*  End of individual dated entry design and color template block */}
           </div> {/*End of individual dated entry block*/}
           </div>   



                   <div className="mb-20"> 
      <div className="flex flex-col max-w-full leading-1.5 sm:p-2 md:p-2 lg:p-2 m-4 border-gray-800 border-solid border-2 bg-[#b55b4b]">
         <div className="text-md md:text-lg max-w-full font-semibold text-white text-center dark:text-white justify-center items-center">
        <div className="font-semibold py-2 px-12 text-white text-center dark:text-white"> 10th November 2026, Monday.</div> {/*End of news date block*/} 
        <div className="font-semibold text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 p-1 bg-[#773f3f]">Day in Keswick meeting Robin and Cathy and the dogs Nell and Wilf.</div> {/*End of news header block*/}
        
        <div className="text-left pr-3 pl-3 md:pr-4 md:pl-4 font-normal text-white dark:text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-[#773f3f]">
        Beautiful but cold weather welcomed us to Keswick in the Northern Lake District National Park today, where we had arranged to meet up with Robin and Cathy for the day. 
         <br />
          <br />           
        We spent a very pleasant and relaxing day catching up on news and admiring the views and of course visiting several cafés for food and drink. The summer crowds seemed to have disappeared now, so Keswick was quieter than it often is, which was great.

         <br />
         <br />  
         <Image
          src={Keswick10112026}
           className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[60%] border-solid border-black-400 border-4 mt-1 mb-4"
                  alt="Photo of Robin, Cathy, Jill and Bernard in Keswick"/>
                   <figcaption className="novemberFigCaption">
                <div className="italic text-center block ml-auto mr-auto w-[90%] md:w-[70%] lg:w-[60%]">
                   Cathy, Jill, Robin and Bernard enjoying themselves in Keswick.{" "}
                </div>
              </figcaption>
 <br />
                  <Image
          src={Keswick10112026_2}
           className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[60%] border-solid border-black-400 border-4 mt-1 mb-4"
                  alt="Photo looking down Derwentwater towards the Jaws of Borrowdale"/>
                   <figcaption className="novemberFigCaption">
                <div className="italic text-center block ml-auto mr-auto w-[90%] md:w-[70%] lg:w-[60%]">
                   Looking down Derwentwater towards the Jaws of Borrowdale.{" "}
                </div>
              </figcaption>
         
           </div>           {/*  End of individual dated entry design and color template block */}
           </div> {/*End of individual dated entry block*/}
           </div> 
            </div>

          


      </div> {/*End of November block*/}
      </div> {/*End of November block background*/}
     </div>
     
     
      
      
  );
}