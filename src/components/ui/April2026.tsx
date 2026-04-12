import Image from 'next/image'
import Link from 'next/link'
import Toysheep from "./toysheep";
import toysheep1 from '/public/imagesresized/toysheep1.jpg';
import EdinburghTitled from "/public/imagesresized/EdinburghTitled.jpg";
import UnchartedGlassonTitled from "/public/imagesresized/UnchartedGlassonTitled.jpg";

export default function April2026() {
  return (
    <div className="">
      <div className="bg-AprilGrass bg-cover border-solid border-4 border-gray-600 md:p-4 mb-8 h-[50vh] text-[#D99E49] text-center font-normal text-l p-3">
        <div className="bg-gray-800 mr-[7%] ml-[7%] md:mr-[40%] md:ml-[40%] p-1 border-[#bdbeba] border-2 text-[white] font-semibold">April 2026</div>
        <br />
        <br />
        < Toysheep/ >
         <Image
                  src={ toysheep1 }
                  className=" ml-[30%] mt-[-75%] mr-auto h-auto w-[25%] md:w-[30%] md:mt-[-80%] lg:w-[20%] lg:ml-[25%] lg:mt-[-30%] 2xl:ml-[5%]"
                  alt="Photo of toy sheep "
                />
      </div>

       < div className="mb-20"> 
      < div className="flex flex-col bg-[#f4f498] h-[80%] md:h-[100%]  w-auto leading-1.5 pt-4 md:p-4 lg:p-4 border-[#efca60] border-solid border-4 md:border-2 ">
         < div className="text-sm md:text-md md:text-base max-w-full font-normal md:fount-semibold text-[#2b8936] text-center dark:text-[#2b8936] justify-center items-center">
         <div className="font-semibold pt-2 pb-2 mr-[30%] ml-[30%]  text-[#bbe89e] text-center  border-[#bbe89e] border-2 bg-[#2b8936]"> 1st April 2026</div> {/*End of news date block*/}
              <div className="font-bold m-4 pt-2 pb-4 py-2 md:px-4 text-[#bbe89e] text-center  border-[#bbe89e] border-2  bg-[#2b8936]"> Welcome to the April 2026 blog</div>

        <div className="font-semibold text-center border-solid border-[#efca60] border-2 mr-1 ml-1 mt-2 mb-2 px-4 py-4 bg-[#bbe89e]"> Welcome to our April blog. 
          <br />
          <br />
          Last month, for mother's day, Elena kindly bought Jill a very cute toy sheep.The sheep and lambs are all in the fields currently so, on a topical theme, this has been used as the starting point for the design of this month's header.  Jill has created a graphical representation of the toy sheep as a comparison to the actual image of the toy sheep as an inset.
          <br />
          <br />
          It is an early Easter this month, although with the rise in fuel prices and risk to supply, we are aiming to restrict driving of the petrol and diesel cars. There is unfortunately no home-made Simnel cake this year as Bernard is on a diet..
          <br />
          <br />
          A day on the train to Edinburgh is planned and towards the middle of the month Jill and Bernard are off to Norfolk for the week. The week in Norfolk looks to involve lots of history and walking and means that at long last Jill can see the locations described in one of her favourite novelist, Ellie Griffith's, Ruth Galloway series. However, more about that later...
            </div>{" "}
        </div> 
         </div> 
          </div> 

           < div className="mb-20"> 
                < div className="flex flex-col w-auto leading-1.5 pt-4 mt-4 md:p-4 lg:p-4  border-[#efca60] border-solid border-2 md:border-2 bg-[#f4f498]">
                   < div className="text-md md:text-base max-w-full font-normal md:font-semibold text-[#416946] text-center  md:text-center dark:text-[#2b8936] justify-center items-center">
                   <div className="font-normal md:font-semibold p-2 m-2 text-[#bbe89e] text-center  border-[#bbe89e] border-2 bg-[#2b8936]">6th April 2026, Easter Monday</div> {/*End of news date block*/}
                        <div className="font-normal md:font-semibold p-2 m-2 text-[#bbe89e] text-center text-md border-[#bbe89e] border-2  bg-[#2b8936]">Hadrian's Wall Path West to East (abridged): Day 1, Bowness-on-Solway to Drumburgh.</div>
                  <div className="font-normal md:font-semibold text-center border-solid border-[#efca60] border-2 mr-1 ml-1 mt-2 px-4 py-2 bg-[#bbe89e]"> We so enjoyed our Hadrian's Wall walk in 2024 that we have decided to walk the Hadrian's Wall path once again this year but going from West to East rather than from East to West. This means this year we will be starting in Bowness-on-Solway and ending in Wallsend.
                    People have their individual preferences as to whether they prefer East to West or West to East. One of the arguments for West to East is  that the Atlantic wind is normally behind you.
                    <br />
                          <br />
                    It was also our family's preference this year, having done the full walk previously, to undertake an abridged version, leaving out sections which were less-interesting, tricky to navigate etc.                        This time, we are also trying to only take one vehicle even if it means walking the segment out and back on each day.
                          <br />
                          <br />
                    Today, it was the first day of the walk, from Bowness-on-Solway to Drumburgh.
                    <br />
                          <br />
                    <div className="p-2 font-normal md:font-semibold text-center text-sm md:text-md text-[#bbe89e] border-[#efca60] border-solid border-2 bg-[#2b8936] ">Click on the image below to open the album of Hadrian's Wall Path West to East (abridged): Day 1, Bowness-on-Solway to Drumburgh.
                          <br />
                          <br />
                                Please make sure to click on the <em>'i'</em> icon, in the top right-hand corner of each photo, as we have included a lot of additional information about the photo in that space.
                             </div>
                            <Link
                              href="https://photos.app.goo.gl/f77USA8BtRSCPz6b7"
                              target="_blank"
                            >
                              <Image
                                src={UnchartedGlassonTitled}
                                className="block ml-auto mr-auto h-auto w-[100%] md:w-[70%] lg:w-[50%] border-solid border-[#efca60] border-4 mt-4 mb-6"
                                alt="Photo of Bernard avoiding puddles ."
                              />
                            </Link>          
                          </div>{" "}          
                          </div> 
                   </div> 

                    </div> 
 
          < div className="mb-20"> 
                < div className="flex flex-col w-auto leading-1.5 p-2 md:p-4 lg:p-4 mt-4 border-[#efca60] border-solid border-2 md:border-2 bg-[#f4f498]">
                   < div className="text-md md:text-base max-w-full font-semibold text-[#416946] text-center  md:text-center dark:text-[#2b8936] justify-center items-center">
                    <div className="font-normal md:font-semibold p-2 m-2 text-[#bbe89e] text-center  border-[#bbe89e] border-2 bg-[#2b8936]">8th April 2026</div> {/*End of news date block*/}
                       <div className="font-normal md:font-semibold p-2 m-2 text-[#bbe89e] text-center text-md border-[#bbe89e] border-2  bg-[#2b8936]">Edinburgh for the day, on the train</div>
                 <div className="font-normal md:font-semibold text-center border-solid border-[#efca60] border-2 mr-1 ml-1 mt-2 px-4 py-2 bg-[#bbe89e]">
                    Harry was on holiday this week, so rather than going away and Lennie having to go in the cattery, it was decided to undertake some day trips instead.
                     <br />
                    <br />
                    Edinburgh is only about 1hr 15 by train on a direct line from Carlisle and we had for some time to be planning to revisit, so a day out to Edinburgh on the train was arranged.
                    <br />
                    <br />
                    The plan was to catch the early train to Carlisle and on from there into Edinburgh, Waverley Station. Then, in the morning, for an hour or so, to spend time at the National Museum of Scotland before heading up to Edinburgh Castle for 12.15 when we had a guided tour around the castle arranged.
                     <br />
                    <br />
                    Cafés visited included: <Link href="https://www.nms.ac.uk/national-museum-of-scotland/plan-your-visit/eating-and-drinking"  target="_blank" className="text-decoration-underline text-[#0000EE] font-normal md:font-semibold underline">Balcony Café, National Museum of Scotland</Link>, <Link href="https://www.edinburghcastle.scot/see-and-do/eat/redcoat-cafe/"  target="_blank" className="text-decoration-underline text-[#0000EE] font-normal md:font-semibold underline">Redcoat Café, Edinburgh Castle</Link> and   
                    <Link href="https://cappuccino.menu-world.com/"  target="_blank" className="text-decoration-underline text-[#0000EE] font-normal md:font-semibold underline"> Cappuccino Café</Link> , Jeffrey Street.
                    <br />
                    <br />   
                    Our day in Edinburgh was very busy, with many tourists (including ourselves, of course ) but we had a very enjoyable day. The weather was better than forecast and the views from the Castle were great.  
                    <br />
                    <br />                 
                    <div className="p-2 font-normal md:font-semibold text-center text-sm md:text-md text-[#bbe89e] border-[#efca60] border-solid border-2 bg-[#2b8936] ">Click on the image below to open the album of our trip to Edinburgh.
                          <br />
                          <br />
                                Please make sure to click on the <em>'i'</em> icon, in the top right-hand corner of each photo, as we have included a lot of additional information about the photo in that space.
                             </div>
                            <Link
                              href="https://photos.app.goo.gl/Giyy9jWrTr3kFpx16"
                              target="_blank"
                            >
                              <Image
                                src={EdinburghTitled}
                                className="block ml-auto mr-auto h-auto w-[100%] md:w-[70%] lg:w-[50%] border-solid border-[#efca60] border-4 mt-4 mb-6"
                                alt="Photo of Jill and Bernard on the Castle Esplanade, Edinburgh ."
                              />
                            </Link>          
                          </div>{" "}          
                          </div> 
                   </div> 
                    </div> 

      </div>
  )
}