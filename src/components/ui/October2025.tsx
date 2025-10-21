"use client"

import * as React from "react"
import Image from 'next/image'
import Link from 'next/link'
import Gaia from '/public/imagesresized/Gaia.jpg';
import GaiaTitled from '/public/imagesresized/GaiaTitled.jpg';

export default function October2025() {

  return (   
 <div className=" bg-[#383f17] border-solid border-2 border-[#22311d] mb-28"> {/*October block background*/}
    <div>
       <div className="text-[#FBE9d0] text-center font-semibold text-2xl p-3 bg-[#2F4D49] border-solid border-2 border-[#22311d] m-2 animate-pulse">October 2025
        </div>

        <div className="mb-20"> 
      <div className="flex flex-col max-w-full leading-1.5 sm:p-2 md:p-2 lg:p-2 m-4 border-gray-800 border-solid border-2 bg-[#b55b4b]">
         <div className="text-md md:text-lg max-w-full font-bold text-[#D99E49] text-center dark:text-[#D99E49] justify-center items-center">
        {/* <div className="font-bold py-2 px-12 text-[#FBE9D0] text-center dark:text-[#FBE9D0]">  October 2025</div> End of news date block  */}
        <div className="font-bold text-left border-solid border-black border-2 mr-1 ml-1 mb-4 px-4 py-4 bg-[#61603c]">Welcome to our October 2025 blog. Some great news as Harry started his new job in data analytics on the 19th September and has been really enjoying it and settling in well, so congratulations Harry. Elena also has some good news as her long-term partner is moving up to Cumbria in the forthcoming months, so we are wishing them all the best with their move and looking forward to welcoming them both as a couple up here in Cumbria. We are also having friends to visit which will be lovely, to catch up on news.
            </div>{" "}
      </div>{/*End of individual dated entry photo album block*/} 
           </div> {/*End of news content block*/}
           </div> {/*End of individual dated entry design and color template block*/}  

           <div className="mb-20"> 
      <div className="flex flex-col max-w-full leading-1.5 sm:p-2 md:p-2 lg:p-2 m-4 border-gray-800 border-solid border-2 bg-[#b55b4b]">
         <div className="text-md md:text-lg max-w-full font-bold text-[#D99E49] text-center dark:text-[#D99E49] justify-center items-center">
        <div className="font-bold py-2 px-12 text-[#22311d] text-center dark:text-[#22311d]"> 17th October 2025</div> {/*End of news date block*/} 
        <div className="font-bold border-solid border-black border-2 mr-1 ml-1 mb-4 px-4 py-4 bg-[#61603c]">Hexham Abbey, the Gaia Exhibition and Exhibition on Climate Change - well worth a visit!</div> {/*End of news header block*/}
        
        <div className="pr-1 pl-1 md:pr-1 md:pl-1 font-bold text-left text-[#22311d] dark:text-[#22311d]">
          On the 17th October 2025, we headed over to Hexham Abbey which is always worth a visit as it is very interesting historically. Our intention was to visit the Abbey but also to see the Gaia exhibition and an exhibition on climate change created by Elena's friend Mike Domingue, a Green Party Councillor for Hexham and Paul Digby, a Leeds-based artist with support from Joe Coroneo-Seaman, an environmental journalist and writer at Edinburgh Castle Change Institute, John Seaman, a retired science teacher and education adviser; and David Dixon, a retired head teacher, the Tynedale bicycle mayor and a sustainability consultant for schools in the North East.  
          <br />
          <br />
          Hexham Abbey was built in 674 AD by St Wilfrid, the Bishop of York, on the site of an earlier church. The Abbey has a fascinating history and has been through many changes over the centuries, including being damaged during the Dissolution of the Monasteries in the 16th century. The Abbey is known for its beautiful architecture, including its Romanesque nave and Gothic choir, as well as its stunning stained glass windows. It also houses a museum 'The Big Story Exhibition' with artefacts from its long history.
          <br />
          <br />
          GAIA is an impressive, large-scale sculpture measuring 6 metres in diameter by the artist Luke Jerram, with the intention to remind us of the beauty, fragility and interconnectedness of the earth. It is based on the idea put forward in the 1970s by Jim Lovelock that the Earth functions as a single organism. He argued that, in contrast to conventional belief that life is passive in the face of threats to its existence, that the Earth's living matter influences air, ocean, and rock to form a complex, self-regulating system that has the capacity to keep the Earth a fit place for life. 
          <br />
          <br />
          We also really enjoyed the climate change exhibition which uses a series of 9 sculptures of the Earth and accompanying clear explanations to help represent the  effects of climate change on the Earth and what needs to be done. It is a very helpful and clear exhibition and encourages us all to take action! 
         <br />
         <br />  
         <Image
                  src={ Gaia }
                  className="block ml-auto mr-auto h-auto w-[70%] md:w-[60%] lg:w-[50%] border-solid border-[#22311d] border-2 mt-1 mb-11 hover:scale-150 "
                  alt="Photo of the Gaia Sculpture, Hexham Abbey"
                />  
                
        
          <br />
         <br /> 

                
        

             
           <div className="flex flex-col border-solid border-2 border-[#22311d] bg-[#61603c] pb-2 pt-2 mr-[12%] ml-[12%] mt-5 mb-4  justify-center text-center">
            <div className="mt-1 mb-1 sm:m-2 text-md font-normal block text-[#22311d] bg-[#61603c]">
              {" "}
                <div className="m-1 p-1 font-bold  border-gray-800 border-solid border-2 bg-[#b55b4b]">Click on the image below to open the album <br /> of our visit to Hexham Abbey, the Gaia Exhibition and to visit the Climate Change Exhibition for yourself</div>
                <br />
              <br />
              <Link
                href="https://photos.app.goo.gl/9Y9ydZbHXfyR27Ty8"
                target="_blank"
              >
                <Image
                  src={ GaiaTitled }
                  className="block ml-auto mr-auto h-auto w-[70%] md:w-[70%] lg:w-[60%] border-solid border-[#22311d] border-2 mt-1 mb-11 rounded-[70%]"
                  alt="Photo of Durham Cathedral"
                />
              </Link>
            </div>{" "}
      </div>{/*End of individual dated entry photo album block*/} 
           </div> {/*End of news content block*/}
           </div> {/*End of individual dated entry design and color template block*/}
           </div> {/*End of individual dated entry block*/}   

          
      </div> {/*End of October block*/}
      </div> 
      </div>
   
);
}