import Image from 'next/image'
import Link from 'next/link'
import "./December2025.css"; 
import SnowmanShakerDisplay from './snowmanshakerdisplay';
import AdventCalendar from '/public/imagesresized/AdventCalendar.jpg';
import LambLennieHat from '/public/imagesresized/LambLennieHat.jpg';
import ChristmasTree2025 from '/public/imagesresized/ChristmasTree2025.jpg';

export default function December2025() {
  return (   
 <div className=" bg-black border-solid border-4 border- border-[#165b33]  mb-28"> {/*December block background*/}
    <div>
       <div className="text-white text-center font-semibold text-2xl p-3 bg-[#bb252b] border-solid border-2 border-[#165b33] m-2 animate-pulse">December 2025 </div> 
        <div className="block relative mt-[70%] mb-[135%] md:mt-[50%] md:scale-[65%]  md:mb-[100%] lg:scale-80 text-center 
        text-[1.75em] font-bold width-full height-full ">
            <SnowmanShakerDisplay /></div>   
              
        <div className="mb-20"> 
      <div className="flex flex-col max-w-full leading-1.5 pr-3 pl-3 sm:p-2 md:p-2 lg:p-2 m-4 border-gray-800 border-solid border-2 bg-[#165b33] ">
         <div className="text-md md:text-lg max-w-full font-normal text-white text-center dark:text-white justify-center items-center">
        <div className="text-center text-white font-normal border-black border-solid border-2 mr-1 ml-1 mb-4 mt-4 px-4 py-4 bg-[#bb252b]">
         It is December 2025 and therefore will soon be Christmas. Click on the snowman shaker display above to create a beautiful animated snow storm.
         <br />
         <br />
          All is well here in North Cumbria. The pheasant is back in the garden, looking relatively benign compared to the pheasant we encountered on a country lane last month which refused to move out of the way and then started physically attacking the car! Apparently though pheasants can be very unpredictably aggressive, even if they at first appear friendly, so it is important to take care.
         <br />
         <br />
         It is a busy month this month as we are meeting friends in the National Park and heading down South to London and the South East to see relatives and go out for Christmas lunch and seasonal cheer before returning back for Christmas with the family back home.
          <br />
         <br />
         <Image
                  src={ AdventCalendar }
                  className="block ml-auto mr-auto h-auto w-[100%] md:w-[75%] lg:w-[60%] border-solid border-black-400 border-4 mt-1 mb-11 rounded-[70%]"
                  alt="Photo of Advent Calendar"
                />
                <div className="flex flex-col mr-[10%] ml-[10%] bg-[#165b33] border-solid border-black border-2 text-white items-center mb-8 p-4">The advent calendar is marking the 1st day of Christmas. Time to start preparing the Christmas cake and Christmas puddings. </div>

                <Image
                  src={ LambLennieHat }
                  className="block ml-auto mr-auto h-auto w-[100%] md:w-[75%] lg:w-[60%] border-solid border-black-400 border-4 mt-1 mb-11 rounded-[70%]"
                  alt="Photo of toy lamb in Lennie's Christmas hat"
                />
                 <div className="flex flex-col mr-[10%] ml-[10%] bg-[#165b33] border-solid border-black border-2 text-white items-center mb-8 p-4">The sheep has been awarded Lennie's Christmas hat, as there is no way Lennie will wear it. . </div>

                <Image
                  src={ ChristmasTree2025 }
                  className="block ml-auto mr-auto h-auto w-[100%] md:w-[75%] lg:w-[60%] border-solid border-black-400 border-4 mt-1 mb-6 rounded-[70%]"
                  alt="Photo of Christmas Tree 2025"
                />
                <div className="flex flex-col mr-[10%] ml-[10%] bg-[#165b33] border-solid border-black border-2 text-white items-center mb-8 p-4">The Christmas tree is up. Not quite as tinselly as it might have been but Bernard got bored of the tinsel part the way through...  </div>
          </div>{" "}
      </div>{/*End of individual dated entry photo album block*/} 
           </div> {/*End of news content block*/}
           </div> {/*End of individual dated entry design and color template block*/}  

               
           </div> 

     </div>
  );
}