import Image from 'next/image'
import Link from 'next/link'
import NovemberBonfire from "./novemberbonfire"; 
import "./November2025.css"; 
import MG4Electric from '/public/imagesresized/MG4Electric.jpg'
import TullieColorTitled from '/public/imagesresized/TullieColorTitled.jpg'
import JillGlasgowTramTitled from '/public/imagesresized/JillGlasgowTramTitled.jpg'
import TheatreRoyalTitled from '/public/imagesresized/TheatreRoyalTitled.jpg'

export default function November2025() {

  return (   
 <div className=" bg-black border-solid border-2 border-black mb-28"> {/*November block background*/}
    <div>
       <div className="text-white text-center font-semibold text-2xl p-3 bg-[#41231c] border-solid border-2 border-[#b55b4b] m-2 animate-pulse">November 2025
        </div>
        <div className="FireworkContainer">
         <div className="pyro">
            {" "}
            <div className="before"></div>
            <div className="after"></div>
          </div>{" "}
         {/*Closing div pyro*/}
        <div className="bg-black h-[75vh] sm:h-[55vh] md:h-[75vh] mx-auto mt-0">
          <NovemberBonfire />
        </div>
        </div>
        <div className="mb-20"> 
      <div className="flex flex-col max-w-full leading-1.5 pr-3 pl-3 sm:p-2 md:p-2 lg:p-2 m-4 border-gray-800 border-solid border-2 bg-[#b55b4b] ">
         <div className="text-md md:text-lg max-w-full font-normal text-white text-center dark:text-white justify-center items-center">
        <div className="text-center text-white font-normal border-black border-solid border-2 mr-1 ml-1 mb-4 mt-4 px-4 py-4 bg-[#773f3f]">
          Welcome to our November 2025 blog. The days are getting colder (although not yet cold enough to need to light the log fire). This month includes bonfire night and so this month's display is topical, being that of a bonfire and fireworks animation. It is also time for Pets' Classics on ClassicFM radio, Lennie's favourite programme.
          <br />
          <br />
          Harry has settled very well into his new job and is really enjoying it, so congratulations to Harry. Elena is keeping well and working hard. She is looking forward to welcoming her partner up to Cumbria later this month, as are we all.
          <br />
          <br />
          Otherwise, following the climate change exhibition at Hexham cathedral, we have taken the plunge and bought ourselves our first electric car. So that has been quite exciting. We have included some photos with this month's blog.
          <br />
          <br />
          Bernard and Jill are off to Glasgow this month for a short break, so we will be adding some photos and information regarding this trip as part of this month's blog. Otherwise, we hope everyone else is also well and enjoying November.
          </div>{" "}
      </div>{/*End of individual dated entry photo album block*/} 
           </div> {/*End of news content block*/}
           </div> {/*End of individual dated entry design and color template block*/}  

                <div className="mb-20"> 
      <div className="flex flex-col max-w-full leading-1.5 sm:p-2 md:p-2 lg:p-2 m-4 border-gray-800 border-solid border-2 bg-[#b55b4b]">
         <div className="text-md md:text-lg max-w-full font-semibold text-white text-center dark:text-white justify-center items-center">
        <div className="font-semibold py-2 px-12 text-white text-center dark:text-white"> 1st November 2025</div> {/*End of news date block*/} 
        <div className="font-semibold text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-[#773f3f]">Sizergh Castle, Kendal in the electric car</div> {/*End of news header block*/}
        
        <div className="text-center pr-3 pl-3 md:pr-1 md:pl-1 font-normal text-white dark:text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-[#773f3f]">
         Today we decided to take the new electric car on a longer drive of 132 miles to test it out, so we headed off as a family to Sizergh Castle, Kendal for the day. 
         <br />
         <br />
         The car is an MG4 Turbo extended range. It has a good range from its 77kwh battery so we easily managed to reach Sizergh and back on one charge with still 45% battery remaining. It drives really well and is easy to manoeuvre making it feel both light and agile. It is an automatic, which seems strange at first, after driving a manual car but you soon get used to it.
         <br />
         <br />
         There were some minor teething problems such as the speed limit detection system, which had been working fine on the first day, not seeming to be working, . We soon discovered however, that this was due to rain water partially obscuring the cameras. A quick wipe with a cloth and all was fine! We are looking forward during the forthcoming months to hopefully reducing our carbon footprint a little by using this vehicle. 
         <br />
         <br />  
         <Image
                  src={ MG4Electric }
                  className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[60%] border-solid border-black-400 border-4 mt-1 mb-11 rounded-[70%]"
                  alt="Photo of MG4 electric"
                />
           </div>           {/*  End of individual dated entry design and color template block */}
           </div> {/*End of individual dated entry block*/}</div>   

           <div className="mb-20"> 
      <div className="flex flex-col max-w-full leading-1.5 sm:p-2 md:p-2 lg:p-2 m-4 border-gray-800 border-solid border-2 bg-[#b55b4b]">
         <div className="text-md md:text-lg max-w-full font-semibold text-white text-center dark:text-white justify-center items-center">
        <div className="font-semibold py-2 px-12 text-white text-center dark:text-white"> 7th November 2025</div> {/*End of news date block*/} 
        <div className="font-semibold text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-[#773f3f]">Visit to the Colour Exhibition at the Tullie Museum, Carlisle</div> {/*End of news header block*/}
        
        <div className="text-left pr-3 pl-3 md:pr-3 md:pl-3 font-normal text-white dark:text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-[#773f3f]">
         Today we went to see the <Link href="https://tullie.org.uk/2025/09/colour-exhibition-opens-this-saturday/" target="_blank" className="underline decoration-black text-black font-semibold">'Colour' exhibition at the Tullie Museum</Link>, Carlisle which is running from the 27th September 2025 to the 25th January 2026. It is a <Link href="https://www.museumsassociation.org/museums-journal/news/2023/05/funding-for-three-touring-exhibitions-as-part-of-network/#" target="_blank" className="underline decoration-black text-black font-semibold" >MAGNET partnership exhibition</Link>, receiving support from the Art Fund and public funding from the National Lottery through Arts Council England.
         <br />
         <br /> 
         The exhibition explores questions of:
         <ul className="list-disc pl-10 text-left">
          <li>What is colour?</li> 
          <li>Why does it mean different things in different cultures and times?</li> 
          <li>How has colour been linked to power, values and even prejudice?</li> 
         </ul>
          <br />
         The exhibition uses objects, paintings, interactive displays, and some interesting and thought-provoking exhibits to answer the above questions. It includes works by Wassily Kandinsky, Andy Warhol and Hokusai. Artists have long known how to use colour to create effect. 
         <br />
         <br />
         It may not be initially apparent but in this blog much thought and research goes into the use of colour to represent concepts,ideas and feelings. For example the colours used for each month are carefully chosen to reflect colours and hues in the sky, sea and countryside at those particular months. Appropriate use of light and dark, primary and secondary colours is important in responsive design for example taking into consideration people with visual impairment and colour blindness. 
         <br />
         <br />
         This exhibition is well worth a visit. To find out more about our visit, click on the photo below.
         <div className="flex flex-col border-solid border-2 border-[#22311d] bg-[#b55b4b] pb-2 pt-2 mr-[12%] ml-[12%] mt-5 mb-4  justify-center text-center">
            <div className="mt-1 mb-1 sm:m-2 text-md font-normal block text-white bg-[#b55b4b]">
              {" "}
         <div className="m-1 p-1 font-normal  border-gray-800 border-solid border-2 bg-[#773f3f] mb-6">Click on the image below to open the album <br /> of our visit to the Colour Exhibition at the Tullie Museum, Carlisle</div>
          <Link
                href="https://photos.app.goo.gl/ZYW5Q8QV2y8KGds68"
                target="_blank"
              >
         <Image
                  src={ TullieColorTitled }
                  className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[60%] border-solid border-black-400 border-4 mt-1 mb-11 rounded-[70%]"
                  alt="Photo of Bernard outside the Tullie Museum"
                />
                </Link>
           
            </div>{" "}
      </div>{/*End of individual dated entry photo album block*/} 
      </div>           {/*  End of individual dated entry design and color template block */}
           </div> {/*End of individual dated entry block*/}</div>    
          
                     <div className="mb-20"> 
      <div className="flex flex-col max-w-full leading-1.5 sm:p-2 md:p-2 lg:p-2 m-4 border-gray-800 border-solid border-2 bg-[#b55b4b]">
         <div className="text-md md:text-lg max-w-full font-semibold text-white text-center dark:text-white justify-center items-center">
        <div className="font-semibold py-2 px-12 text-white text-center dark:text-white"> 12th November 2025, Wednesday.</div> {/*End of news date block*/} 
        <div className="font-semibold text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-[#773f3f]">Glasgow City Break Day 1: The Riverside Museum and the Tall Ship Glenlee</div> {/*End of news header block*/}
        
        <div className="text-left pr-3 pl-3 md:pr-3 md:pl-3 font-normal text-white dark:text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-[#773f3f]">
          The Riverside Museum, Glasgow is an award-winning transport and technology museum which replaced the preceding Glasgow Museum of Transport.  It was opened in June 2011, being the first purpose-built museum created by Glasgow Life in the 21st century.    
          <br />
          <br />
          It fronts on to the River Clyde at Pointhouse Quay in a building designed by  Zaha Hadid Architects and connects via a pedestrian and cycle path over the Govan–Partick Bridge to Govan. It forms part of the Glasgow Harbour regeneration project, winning the 2013 European Museum of the Year Award. It houses many exhibits of national and international importance.
          <br />
          <br />
          The museum houses a collection of transport and technology of over 3,000 objects, acquired over the centuries and which are used to highlight Glasgow's globally important role through its contributions to heavy industries like shipbuilding, train manufacturing and engineering.
          <br />
          <br />
          Taking the Govan Walkway over the bridge brought us to Govan which is a very old district, far older than Glasgow itself, with roots dating right back to the 5th century. The site of Viking grave burials ( the Govan Stones), and the seat of the ancient rulers of Strathclyde, it was a political and spiritual hub right back in early medieval times. 
          We had intended to see the Govan Stones which are Viking hogback gravestones which visiting chieftains used to cover their dead of high status and Govan church has a very good collection. However, unfortunately the stones are not open for viewing between 1st November and 31st March. so that will have to wait until another time.
           <br />
           <br />
           We had a great day at the Riverside museum. It is well worth a visit and, together with our visit to the tall ship Glenlee, which is moored outside the museum, we spent over 4 hours there. There is a large car park right outside the museum which you have to pay for but currently entrance to the museum itself is free. There is a café in the museum. Entrance to the Glenlee tall ship outside is currently £4.50 per adult but there is lots to see in the ship of interest.

         <div className="flex flex-col border-solid border-2 border-[#22311d] bg-[#b55b4b] pb-2 pt-2 mr-[12%] ml-[12%] mt-5 mb-4  justify-center text-center">
            <div className="mt-1 mb-1 sm:m-2 text-md font-normal block text-white bg-[#b55b4b]">
              {" "}
         <div className="m-1 p-1 font-normal  border-gray-800 border-solid border-2 bg-[#773f3f] mb-6">Click on the image below to open the album <br /> of our visit to the Riverside Museum and Tall Ship</div>
          <Link
                href="https://photos.app.goo.gl/otNBGk6Xh4w5LRT16"
                target="_blank"
              >
         <Image
                  src={ JillGlasgowTramTitled }
                  className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[60%] border-solid border-black-400 border-4 mt-1 mb-11 rounded-[70%]"
                  alt="Photo of Jill about to board one t=of the early Glasgow trams"
                />
                </Link>
           
            </div>{" "}
      </div>{/*End of individual dated entry photo album block*/} 
      </div>           {/*  End of individual dated entry design and color template block */}
           </div> {/*End of individual dated entry block*/}</div>    
     
          <div className="mb-20"> 
      <div className="flex flex-col max-w-full leading-1.5 sm:p-2 md:p-2 lg:p-2 m-4 border-gray-800 border-solid border-2 bg-[#b55b4b]">
         <div className="text-md md:text-lg max-w-full font-semibold text-white text-center dark:text-white justify-center items-center">
        <div className="font-semibold py-2 px-12 text-white text-center dark:text-white"> 13th November 2025, Wednesday.</div> {/*End of news date block*/} 
        <div className="font-semibold text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-[#773f3f]">Glasgow City Break Day 2: Exploring Glasgow Centre and the Merchant City Mile, Hamilton at the Theatre Royal.</div> {/*End of news header block*/}
        
        <div className="text-left pr-3 pl-3 md:pr-3 md:pl-3 font-normal text-white dark:text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-[#773f3f]">
         This morning we headed off on foot in the pouring rain into the city centre along Argyle and St Vincent streets. First port of call was a very good Waterstones bookshop near Central Station which...surprise, surprise...had a café where we could grab some coffees.
          <br />
          <br />
          Suitably refreshed, it was time to explore the Merchant City. By the latter 18th Century around half of all tobacco imported into Britain came through Glasgow. It created huge profits that have made a mark on the urban landscape. This wealth continued into the 19th century when shipbuilding and textiles kept the industrialists prosperous. Many of the  buildings created by this wealth are still in use today but have been refashioned to alternative uses. For example, the Royal Exchange has become the Gallery of Modern Art. It is outside this gallery that the statue of the Duke of Wellington on horseback can be seen with a traffic cone on his head.
          <br />
          <br />
          Next was 42, Miller Street, The Tobacco Merchant's House. This house was featured on the historian David Olusoga's series 'Union' for the BBC. The mansions of  Miller Street, Glasgow were the home of the 'Tobacco-Lords' of Glasgow, a very tight-knit community, a small number of families, who often inter-married, and they shared information and dominated the trade in tobacco. Number 42, Miller Street was home to one of them, Robert Findlay, who had grown rich on his connections with tobacco growers in Virginia and Maryland. He bought it in 1782.The Tobacco Mechant's House, is remarkable for several reasons, not least of which is the fact that it survived the enormous industrialisation and commercialisation of Glasgow over the last two centuries.
           <br />
          <br />
          The main square of this district is George Square but unfortunately we were not able to fully see all its 19th century grandiose buildings, including the City Chambers, as the square is currently undergoing a major refurbishment and is all cordoned off. We were able to see however Sir Walter Scott's statue on the Doric column at the centre of the square, with Bernard quoting sections from Ivanhoe, which he has been reading recently.
          <br />
          <br />
          In the afternoon it was the highlight of the day as we went to see Hamilton live at the Theatre Royal, Glasgow. It was a fantastic show and very well-performed, especially the rap. We really enjoyed it, as did all the Glaswegians who were there. 

         <div className="flex flex-col border-solid border-2 border-[#22311d] bg-[#b55b4b] pb-2 pt-2 mr-[12%] ml-[12%] mt-5 mb-4  justify-center text-center">
            <div className="mt-1 mb-1 sm:m-2 text-md font-normal block text-white bg-[#b55b4b]">
              {" "}
         <div className="m-1 p-1 font-normal  border-gray-800 border-solid border-2 bg-[#773f3f] mb-6">Click on the image below to open the album <br /> of our day on the Merchant City Mile and to the theatre to see Hamilton.</div>
          <Link
                href="https://photos.app.goo.gl/Wtu7e8L6UzMPThdX6"
                target="_blank"
              >
         <Image
                  src={ TheatreRoyalTitled }
                  className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[60%] border-solid border-black-400 border-4 mt-1 mb-11 rounded-[70%]"
                  alt="Photo of Jill in the auditorium at the Theatre Royal, Glasgow."
                />
                </Link>
           
            </div>{" "}
      </div>{/*End of individual dated entry photo album block*/} 
      </div>           {/*  End of individual dated entry design and color template block */}
           </div> {/*End of individual dated entry block*/}</div>  
     
     
     
      </div> {/*End of November block*/}
      </div> {/*End of November block background*/}
</div>
      </div>
      </div>
      </div>
);
}