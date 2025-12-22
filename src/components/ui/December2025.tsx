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
import CenterComputingHistoryBTTitled from '/public/imagesresized/CenterComputingHistoryBTTitled.jpg';
import CordonBleuCakesTitled from '/public/imagesresized/CordonBleuCakesTitled.jpg';
import RHSHyde161225_1 from '/public/imagesresized/RHSHyde161225_1.jpg';
import RHSHyde161225_2 from '/public/imagesresized/RHSHyde161225_2.jpg';
import Alan171225Titled from '/public/imagesresized/Alan171225Titled.jpg';


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
        
         <div className="flex flex-col border-solid border-2 border-[#22311d] bg-[#bb252b] pb-2 pt-2 pr-4 pl-4 mr-[2%] ml-[2%] mt-5 mb-4  justify-center text-center">
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
                  alt="Photo of Cathy by the outdoor sauna hut by Ullswater lake."
                />
                </Link>
           
            </div>{" "}
      </div>{/*End of individual dated entry photo album block*/} 
      </div>           {/*  End of individual dated entry design and color template block */}
           </div> {/*End of individual dated entry block*/}</div>    


  <div className="mb-20"> 
      <div className="flex flex-col max-w-full leading-1.5 sm:p-2 md:p-2 lg:p-2 m-4 border-gray-800 border-solid border-2 bg-[#165b33]">
         <div className="text-md md:text-lg max-w-full font-semibold text-white text-center dark:text-white justify-center items-center">
        <div className="font-semibold py-2 px-12 text-white text-center dark:text-white"> 13th December 2025, Saturday</div> {/*End of news date block*/} 
        <div className="font-semibold text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-[#bb252b]">London, Cambridge and the South East Short Break and Christmas Gift Dispatches: Day 1 - Arrival in the South East to see relatives.</div> {/*End of news header block*/}
        
         <div className="flex flex-col border-solid border-2 border-[#22311d] bg-[#bb252b] pb-2 pt-2 pr-4 pl-4 mr-[2%] ml-[2%] mt-5 mb-4  justify-center text-center">
            <div className="mt-1 mb-1 sm:m-2 text-md font-normal block text-white bg-[#bb252b]">  It was that time of year again and so we packed our bags and set off for the South East and South of England for a pre-Christmas visit to our relatives in those distant and far-off lands (both geographically and culturally)...  Harry was back home working and had been put in charge of looking after Lennie.....
</div>
</div>
</div>
</div>
</div>


  <div className="mb-20"> 
      <div className="flex flex-col max-w-full leading-1.5 sm:p-2 md:p-2 lg:p-2 m-4 border-gray-800 border-solid border-2 bg-[#165b33]">
         <div className="text-md md:text-lg max-w-full font-semibold text-white text-center dark:text-white justify-center items-center">
        <div className="font-semibold py-2 px-12 text-white text-center dark:text-white"> 14th December 2025, Sunday</div> {/*End of news date block*/} 
        <div className="font-semibold text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-[#bb252b]">London, Cambridge and the South East Short Break and Christmas Gift Dispatches: Day 2 - Cambridge for the day, exploring the history of computing and a ride on the Park and Ride bus service... </div> {/*End of news header block*/}
        
         <div className="flex flex-col border-solid border-2 border-[#22311d] bg-[#bb252b] pb-2 pt-2 pr-3 pl-3 mr-[2%] ml-[2%] mt-5 mb-4  justify-center text-center"><p>Today, we were off to Cambridge for the day. There are many museums in Cambridge but unfortunately not all are open on a Sunday. The Fitzwilliam Museum was an obvious contender but we decided, in view of a forthcoming British Museum visit planned for Monday, to instead head to the slightly more niche <Link href="https://www.computinghistory.org.uk/" target="_blank" className="underline decoration-black text-yellow-400 font-semibold">Centre for Computing History.</Link> The link contains lots of information about the work of the museum, its activities, projects and future events. It is sited tucked away on a commercial park, so if visiting, we would advise taking careful note of the 'How to find us' instructions. It is a few miles out of the centre.</p>
        <br />
        <br />
        <p className="m-4">It was a veritable trip back in time and it was good to see that the many women pioneers, who usually do not gain much prominence, were highlighted. It was also interesting how the period of computing between 1981 and 1986 seemed to be a veritable 'black-hole' for us in terms of memory, probably due to the fact we were at Medical School during this period busy cramming our heads to the brim with the required medical learning and computers were the last things on our minds!...</p>
            <br />
              <br />
              <p className="m-4">Needless to say Bernard succumbed to the temptation to play on all the arcade video games from our past, but he was eventually dragged away and we headed over to the other side of the city to pick up the Park and Ride into the City Centre. Needless to say it was <em>very</em> busy on the bus. It is clearly very popular and cost us just £4.00 each to park and ride for the day. This is in contrast to parking for over 5 hours in one of the car parks on a Sunday which can set you back anywhere between £29.00 and £37.00 !</p>
<br />
              <br />
              <p className="m-4">We were lucky to be able to find a table for lunch at Café au Chocolat on Green Street, so we appreciated our well-earned crepes before heading off to the Cambridge University and Heffer's book shops. It was a very busy but enjoyable day albeit a reminder just how busy Cambridge is...</p>


         <div className="m-1 p-1 font-normal  border-gray-800 border-solid border-2 bg-[#165b33] mb-6">Click on the image below to open the album <br /> of our day in Cambridge, including the Center for Computing History and the Park and Ride experience.</div>
          <Link
                href="https://photos.app.goo.gl/R3TmzpGZzUah99UDA"
                target="_blank"
              >
         <Image
                  src={ CenterComputingHistoryBTTitled }
                  className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[60%] border-solid border-black-400 border-4 mt-1 mb-11 rounded-[70%]"
                  alt="Photo of Bernard playing the video game 'Pong'"
                />
                </Link>
            <div className="mt-1 mb-1 sm:m-2 text-md font-normal block text-white bg-[#bb252b]">  
              
</div>
</div>
</div>
</div>
</div>



  <div className="mb-20"> 
      <div className="flex flex-col max-w-full leading-1.5 sm:p-2 md:p-2 lg:p-2 m-4 border-gray-800 border-solid border-2 bg-[#165b33]">
         <div className="text-md md:text-lg max-w-full font-semibold text-white text-center dark:text-white justify-center items-center">
        <div className="font-semibold py-2 px-12 text-white text-center dark:text-white"> 15th December 2025, Monday</div> {/*End of news date block*/} 
        <div className="font-semibold text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-[#bb252b]">London, Cambridge and the South East Short Break and Christmas Gift Dispatches: Day 3 - Day in London with Bernard's brother to catch up on news and to see the Rahim Irvani Gallery of Ancient Iran - Room 52 and the Albukhary Gallery of the Islamic World - Rooms 42 and 43, at the British Museum.</div> {/*End of news header block*/}
        
         <div className="flex flex-col border-solid border-2 border-[#22311d] bg-[#bb252b] pb-2 pt-2 mr-[2%] ml-[2%] mt-5 mb-4  justify-center text-center">
          <p className="m-4">Today, we had agreed to meet up with Bernard's brother for the day in London, so the first challenge of the day was to work out Greater Anglia rail's ticketing and fare structure, which seems to require a PhD to decipher! There was no ticket office at the station, so it was as well that a kind and helpful member of staff was on hand to help us as we struggled to purchase our tickets at the ticketing machine. She informed us that there had been a recent change in the conditions for an off-peak return whereby you now had to be leaving London Liverpool Street before 16.00 otherwise it would cost significantly more. This would not have been so bad if not for the fact that the last train out of Liverpool Street to our destination before 16.00 was 15.36, which made the schedule for the day somewhat tighter than anticipated.....! </p>
          <p className="m-4"> Nonetheless, having purchased our tickets, we arrived in London Tottenham Court Road underground station on the ELizabeth Line smoothly and without any delays and, having met Bernard's brother, headed off to the British Museum members café. After refreshing ourselves with coffees, we headed towards the Rahim Irvani Gallery of Ancient Iran - Room 52 and the Albukhary Gallery of the Islamic World - Rooms 42 and 43.</p>      
          <br />
              <br />       
       
          <p className="m-4">The Albukhary Gallery of the Islamic World opened on the 18th October 2018 and consists of 2 rooms, room 42 and room 43, which present an alternative history of the world, displaying the material culture of a region which stretches from West Africa to the Malay World, from the 7th century to the present day. The experience of visiting the gallery is probably best described by this article in <em>The Guardian</em> newspaper around the time of its opening in October 2018: <br /> <Link href="https://www.theguardian.com/artanddesign/2018/oct/16/british-museum-albukhary-foundation-gallery-of-the-islamic-world-review" target="_blank" className="underline decoration-black text-yellow-400 font-semibold">A soaring miracle of art' – Albukhary Gallery of the Islamic World review.</Link> 
          <br />
          The gallery is extremely well-conceived and is well worth a visit. It is the sort of gallery which really requires multiple visits to allow time for reflection. </p>
            <br />
              <br />
              <p className="m-4">It was then time for lunch, so we crossed the road for the convenience of <Link href="https://www.greeneking.co.uk/pubs/greater-london/museum-tavern" target="_blank" className="underline decoration-black text-yellow-400 font-semibold">Museum Tavern,</Link> in Bloomsbury which was busy but suited our purposes fine and the food was good. 
              <br />
              <br />
              Subsequently, we called round the corner to the café of the <Link href="https://www.cordonbleu.edu/london/cafe-le-cordon-bleu/en" target="_blank" className="underline decoration-black text-yellow-400 font-semibold">Le Cordon Bleu,</Link> where we purchased a number of lovely cakes and patisseries to take home.
              Then it was a 2.5 mile brisk walk eastwards across the city including through the Italian Quarter in Clerkenwell and by St John's gate before finally boarding our train at Liverpool Street with just one minute to spare....</p>


         <div className="m-2 p-2 font-normal  border-gray-800 border-solid border-2 bg-[#165b33] mb-6">Click on the image below to open the album <br /> of our day in London visiting the British Museum, lunch at the Museum Tavern and then cake purchase at the Cordon-Bleu school of cookery..</div>
          <Link
                href="https://photos.app.goo.gl/oRRt37ub1Q4NdwXV6"
                target="_blank"
              >
         <Image
                  src={ CordonBleuCakesTitled }
                  className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[60%] border-solid border-black-400 border-4 mt-1 mb-11 rounded-[70%]"
                  alt="Photo of Bernard playing the video game 'Pong'"
                />
                </Link>

            <div className="mt-1 mb-1 sm:m-2 text-md font-normal block text-white bg-[#bb252b]">  
</div>
</div>
</div>
</div>
</div>


  <div className="mb-20"> 
      <div className="flex flex-col max-w-full leading-1.5 sm:p-2 md:p-2 lg:p-2 m-4 border-gray-800 border-solid border-2 bg-[#165b33]">
         <div className="text-md md:text-lg max-w-full font-semibold text-white text-center dark:text-white justify-center items-center">
        <div className="font-semibold py-2 px-12 text-white text-center dark:text-white"> 16th December 2025, Tuesday</div> {/*End of news date block*/} 
        <div className="font-semibold text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-[#bb252b]">London, Cambridge and the South East Short Break and Christmas Gift Dispatches: Day 4 - Christmas lunch at RHS Hyde Hall.</div> {/*End of news header block*/}
        
         <div className="flex flex-col border-solid border-2 border-[#22311d] bg-[#bb252b] pr-4 pl-4 pt-4 pb-8 mr-[2%] ml-[2%] mt-5 mb-4  justify-center text-center">
          Today it was time for our annual Christmas lunch with Jill's brother and sister-in-law. It made for a very pleasant contrast after recent days to have a more relaxed day, with a gentle stroll around the Royal Horticultural Society Gardens at Hyde Hall before having a lovely Christmas lunch at the Hill-top lodge restaurant in the gardens.
          <Image
                  src={ RHSHyde161225_1 }
                  className="block ml-auto mr-auto h-auto w-[100%] md:w-[75%] lg:w-[60%] border-solid border-black-400 border-4 mt-8 mb-11 rounded-[70%] transform transition hover:scale-150"
                  alt="Photo of Christmas lunch at Hyde 1"
                />
                <Image
                  src={ RHSHyde161225_2 }
                  className="block ml-auto mr-auto h-auto w-[100%] md:w-[75%] lg:w-[60%] border-solid border-black-400 border-4 mt-1 mb-11 rounded-[70%] transform transition hover:scale-150"
                  alt="Photo of Christmas lunch at Hyde 2"
                />
            <div className="mt-1 mb-1 sm:m-2 text-md font-normal block text-white bg-[#bb252b]">  
</div>
</div>
</div>
</div>
</div>


  <div className="mb-20"> 
      <div className="flex flex-col max-w-full leading-1.5 sm:p-2 md:p-2 lg:p-2 m-4 border-gray-800 border-solid border-2 bg-[#165b33]">
         <div className="text-md md:text-lg max-w-full font-semibold text-white text-center dark:text-white justify-center items-center">
        <div className="font-semibold py-2 px-12 text-white text-center dark:text-white"> 17th December 2025, Wednesday</div> {/*End of news date block*/} 
        <div className="font-semibold text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-[#bb252b]">London, Cambridge and the South East Short Break and Christmas Gift Dispatches: Day 5 - A detour to see Bernard's dad and then the long journey home to the wet, windy but very beloved (and quiet) North.</div> {/*End of news header block*/}
        
         <div className="flex flex-col border-solid border-2 border-[#22311d] bg-[#bb252b] pb-8 pt-4 pr-4 pl-4 mr-[2%] ml-[2%] mt-5 mb-4  justify-center text-center">
          Before heading off home, we took some photos of Jill's brother and sister-in-law's garden, which they had fully landscaped earlier this year, and which we have added to the album below. It is looking very good. 
          <br />
          <br />
          <p className="m-4">Then we took a slight detour on the way home to call in and see Bernard's dad.</p>

         

          <div className="m-2 p-2 font-normal  border-gray-800 border-solid border-2 bg-[#165b33] mb-6">Click on the image below to open the Winter garden album <br /> featuring Jill's brother's landscaped garden and our visit to Bernard's dad.</div>
          <Link
                href=" https://photos.app.goo.gl/8A3LzEQKDQ1supA96"
                target="_blank"
              >
         <Image
                  src={ Alan171225Titled }
                  className="block ml-auto mr-auto h-auto w-[70%] md:w-[50%] lg:w-[40%] border-solid border-black-400 border-4 mt-1 mb-11 rounded-[70%]"
                  alt="Photo of Alan eating a mince pie."
                />
                </Link>
            <div className="mt-1 mb-1 sm:m-2 text-md font-normal block text-white bg-[#bb252b]">  
</div>
</div>
</div>
</div>
</div>



     </div>
  );
}