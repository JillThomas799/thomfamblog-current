import Image from 'next/image'
import Link from 'next/link'
import "./December2025.css"; 
import SnowmanShakerDisplay from './snowmanshakerdisplay';
import AdventCalendar from '/public/imagesresized/AdventCalendar.jpg';
import LambLennieHat from '/public/imagesresized/LambLennieHat.jpg';
import ChristmasTree2025 from '/public/imagesresized/ChristmasTree2025.jpg';
import KendalMeetingHouse from '/public/imagesresized/KendalMeetingHouse.jpg';
import QuakerTapestryMuseum from '/public/imagesresized/QuakerTapestryMuseum.jpg';
import QuakerLocations1652 from '/public/imagesresized/QuakerLocations1652.jpg';
import WildSwimmingTitled from '/public/imagesresized/WildSwimmingTitled.jpg';


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
                  className="block ml-auto mr-auto h-auto w-[100%] md:w-[75%] lg:w-[60%] border-solid border-black-400 border-4 mt-1 mb-11 rounded-[70%] transform transition hover:scale-150"
                  alt="Photo of Advent Calendar"
                />
                <div className="flex flex-col mr-[10%] ml-[10%] bg-[#165b33] border-solid border-black border-2 text-white items-center mb-8 p-4">The advent calendar is marking the 1st day of Christmas. Time to start preparing the Christmas cake and Christmas puddings. </div>

                <Image
                  src={ LambLennieHat }
                  className="block ml-auto mr-auto h-auto w-[100%] md:w-[75%] lg:w-[60%] border-solid border-black-400 border-4 mt-1 mb-11 rounded-[70%] transform transition hover:scale-150"
                  alt="Photo of toy lamb in Lennie's Christmas hat"
                />
                 <div className="flex flex-col mr-[10%] ml-[10%] bg-[#165b33] border-solid border-black border-2 text-white items-center mb-8 p-4">The sheep has been awarded Lennie's Christmas hat, as there is no way Lennie will wear it. . </div>

                <Image
                  src={ ChristmasTree2025 }
                  className="block ml-auto mr-auto h-auto w-[100%] md:w-[75%] lg:w-[60%] border-solid border-black-400 border-4 mt-1 mb-6 rounded-[70%] transform transition hover:scale-150"
                  alt="Photo of Christmas Tree 2025"
                />
                <div className="flex flex-col mr-[10%] ml-[10%] bg-[#165b33] border-solid border-black border-2 text-white items-center mb-8 p-4">The Christmas tree is up. Not quite as tinselly as it might have been but Bernard got bored of the tinsel part the way through...  </div>
          </div>{" "}
      </div>{/*End of individual dated entry photo album block*/} 
           </div> {/*End of news content block*/}
           </div> {/*End of individual dated entry design and color template block*/}  

           <div className="mb-20"> 
      <div className="flex flex-col max-w-full leading-1.5 sm:p-2 md:p-2 lg:p-2 m-4 border-gray-800 border-solid border-2 bg-[#165b33]">
         <div className="text-md md:text-lg max-w-full font-semibold text-white text-center dark:text-white justify-center items-center">
        <div className="font-semibold py-2 px-12 text-white text-center dark:text-white"> 4th December 2025</div> {/*End of news date block*/} 
        <div className="font-semibold text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-[#bb252b]">Very rainy day in Kendal and a visit to the Quaker Tapestry Museum....much more interesting than it might initially sound.</div> {/*End of news header block*/}
        
        <div className="text-left pr-3 pl-3 md:pr-3 md:pl-3 font-normal text-white dark:text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-[#bb252b]">  
          The <Link href="https://www.quaker-tapestry.co.uk/" target="_blank" className="underline decoration-black text-yellow-400 font-semibold">Kendal Quaker Tapestry Museum</Link> won the Cumbria small visitor attraction of the year prize for 2025 and we would agree that it is a well-deserved winner. Unfortunately, it closes to the public on the 13th December 2025. The future of the tapestries is as yet to be decided...
          <br />
          <br />
          It is a display of 77 embroidered panels telling the history of Quakerism from its formation by George Fox during the late 17th century, following the English Civil War, through to the present day. 4000 Quaker men, women and children from 15 countries contributed to its formation. It was commenced in 1981 and the 77th panel added in 1996. The museum guide  tells how many of the people involved in the making of the Tapestry were completely without previous experience.
          <br />
          <br />
          The following <Link href="https://settlequakers.org.uk/a-bit-about-george-fox/" target="_blank" className="underline decoration-black text-yellow-400 font-semibold" >link from the Settle Quaker Meeting</Link> tells how 
          George Fox came from Fenny Drayton, a small village in Leicestershire and aged 12, became an apprentice to a local tradesman. He left home in 1643 to seek ‘the truth’, through listening to preachers.
          <br />
          <br />
          In contrast to conventional religious teaching of the time, he came to believe that everyone could speak to God and that priests were not needed. He began talking to everyone he met about his ideas. He said that experiencing God need not be in a church and so the tithes that supported them were not necessary. 
          <br />
          <br />
          He was soon in trouble with the authorities and imprisoned for the first time in Nottingham in 1649. On release from prison in October 1652 he made his way North to Pendle Hill, Firbank Fell  and Swarthmoor Hall in Ulverston. 
            <br />
          <br />          
          Others like William Penn and Oliver Cromwell respected him. The movement spread across England and then globally, notably to America, where William Penn established Pennsylvania as a haven for religious freedom, shaping significant social reform movements worldwide. 
          <br />
          <br />
          The series of tapesteries takes us from these early origins and spread of Quakerism both in England and globally, through the industrial revolution, developments in science and medicine, astronomy, the abolition of slavery, social reform and many. many more events.
          
          <Image
                  src={ KendalMeetingHouse }
                  className="block ml-auto mr-auto h-auto w-[100%] md:w-[75%] lg:w-[60%] border-solid border-black-400 border-4 mt-1 mb-11 rounded-[70%] transform transition hover:scale-150"
                  alt="Photo of Kendal Meeting House Information Board."
                />
                <div className="flex flex-col mr-[10%] ml-[10%] bg-[#165b33] border-solid border-black border-2 text-white items-center mb-8 p-4">All about the Kendal Meeting house which was founded in 1688, with a school following in 1698. 
                  <br />
                  <br />
                  The Carr's biscuit factory owner Jonathan Dodgson Carr was a Quaker, born and brought up in Kendal, later moving to Carlisle. Margaret Forster in her carefully-researched book <Link href="https://www.bookscumbria.com/product/cumbrian-books/arts-and-literature/fiction/margaret-forster/rich-desserts-and-captain-s-thin/" target="_blank" className="underline decoration-black text-yellow-400 font-semibold">'Rich Desserts and Captain's Thin: A Family and Their Times 1831-1931'</Link>  describes the rise to fame of the Carr family and as part of this story, the Kendal Quakers, in some depth. It is very interesting and well worth a read.  </div>

                <Image
                  src={ QuakerTapestryMuseum }
                  className="block ml-auto mr-auto h-auto w-[100%] md:w-[75%] lg:w-[60%] border-solid border-black-400 border-4 mt-1 mb-11 rounded-[70%] transform transition hover:scale-150"
                  alt="Photo of entrance to Quaker Tapestry Museum"
                />
                 <div className="flex flex-col mr-[10%] ml-[10%] bg-[#165b33] border-solid border-black border-2 text-white items-center mb-8 p-4">Entrance to the Quaker Tapestry Museum and Meeting House on Stramongate, Kendal </div>

                <Image
                  src={ QuakerLocations1652 }
                  className="block ml-auto mr-auto h-auto w-[100%] md:w-[75%] lg:w-[60%] border-solid border-black-400 border-4 mt-1 mb-6 rounded-[70%] transform transition hover:scale-150"
                  alt="Map of Quaker Places 1652"
                />
                <div className="flex flex-col mr-[10%] ml-[10%] bg-[#165b33] border-solid border-black border-2 text-white items-center mb-8 p-4">This map shows the Quaker places in the North West of England in 1652.  </div>            
                 
  </div>
      </div>
      </div>
      </div>               
      </div> 


 <div className="mb-20"> 
      <div className="flex flex-col max-w-full leading-1.5 sm:p-2 md:p-2 lg:p-2 m-4 border-gray-800 border-solid border-2 bg-[#165b33]">
         <div className="text-md md:text-lg max-w-full font-semibold text-white text-center dark:text-white justify-center items-center">
        <div className="font-semibold py-2 px-12 text-white text-center dark:text-white"> 7th December 2025, Sunday</div> {/*End of news date block*/} 
        <div className="font-semibold text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-[#bb252b]">Sunday lunch with our friends Robin and Cathy and the dogs Wilf and Nell at the Sun Inn, Pooley Bridge, Ullswater.</div> {/*End of news header block*/}
        
         <div className="flex flex-col border-solid border-2 border-[#22311d] bg-[#bb252b] pb-2 pt-2 mr-[2%] ml-[2%] mt-5 mb-4  justify-center text-center">
            <div className="mt-1 mb-1 sm:m-2 text-md font-normal block text-white bg-[#bb252b]">
              It was to have been a lovely Winter's day walking at Pooley Bridge, Ullswater but unfortunately the weather had other ideas.... However there was a plan B in place, in that it had already been agreed that the <Link href="https://www.suninnpooleybridgepub.co.uk/" target="_blank" className="underline decoration-black text-yellow-400 font-semibold">Sun Inn</Link> at Pooley Bridge would be a suitable alternative for a prolonged Sunday lunch should the weather be very unsuitable and so it proved.
              {" "}
              <br />
              <br />
              The Sun Inn does a  <Link href="https://www.suninnpooleybridgepub.co.uk/menus" target="_blank" className="underline decoration-black text-yellow-400 font-semibold">good range menu on a Sunday</Link> including Sunday lunches for a reasonable price and it has a relaxing ambiance. They are dog-friendly throughout all areas of the pub so Wilf and Nell were safe. 
              <br />
              <br />
              As always, it was great to meet up and catch up on news again.
               <br />
              <br />
         <div className="m-1 p-1 font-normal  border-gray-800 border-solid border-2 bg-[#165b33] mb-6">Click on the image below to open the album <br /> of our day with Robin and Cathy together with the dogs Wilf and Nell at Pooley Bridge, Ullswater.</div>
          <Link
                href="https://photos.app.goo.gl/6gLAXybsvHaATh2J8"
                target="_blank"
              >
         <Image
                  src={ WildSwimmingTitled }
                  className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[60%] border-solid border-black-400 border-4 mt-1 mb-11 rounded-[70%]"
                  alt="Photo of Jill about to board one t=of the early Glasgow trams"
                />
                </Link>
           
            </div>{" "}
      </div>{/*End of individual dated entry photo album block*/} 
      </div>           {/*  End of individual dated entry design and color template block */}
           </div> {/*End of individual dated entry block*/}</div>    
    

     </div>
  );
}