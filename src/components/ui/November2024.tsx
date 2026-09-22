import Image from 'next/image'
import Link from 'next/link'
import NovemberBonfire from "./novemberbonfire"; 
import "./November2024.css"; 
import SycamoreExhibition1 from '/public/imagesresized/SycamoreExhibition1.jpg'
import "./November2024.css"; 
import SycamoreExhibition2 from '/public/imagesresized/SycamoreExhibition2.jpg'
import "./November2024.css"; 
import SycamoreExhibition3 from '/public/imagesresized/SycamoreExhibition3.jpg'
import "./November2024.css"; 
import SycamoreExhibition4 from '/public/imagesresized/SycamoreExhibition4.jpg'
import Birdoswald1Nov2nd2024 from '/public/imagesresized/Birdoswald1Nov2nd2024.jpg'
import Birdoswald2Nov2nd2024 from '/public/imagesresized/Birdoswald2Nov2nd2024.jpg'
import Birdoswald3Nov2nd2024 from '/public/imagesresized/Birdoswald3Nov2nd2024.jpg'
import Birdoswald4Nov2nd2024 from '/public/imagesresized/Birdoswald4Nov2nd2024.jpg'
import BlacksmithsMeal1Nov4th2024 from '/public/imagesresized/BlacksmithsMeal1Nov4th2024.jpg'
import BlacksmithsMeal2Nov4th2024 from '/public/imagesresized/BlacksmithsMeal2Nov4th2024.jpg'
import BlacksmithsEandH4112024 from '/public/imagesresized/BlacksmithsEandH4112024.jpg'
import BlacksmithsBernard4112024 from '/public/imagesresized/BlacksmithsBernard4112024.jpg'
import CawfieldsNov14th2024Titled from '/public/imagesresized/CawfieldsNov14th2024Titled.jpg'
import RidgewoodHarry16112024Titled from '/public/imagesresized/RidgewoodHarry16112024Titled.jpg'
import EamontWay22112024Title from '/public/imagesresized/EamontWay22112024Title.jpg'
import NaworthRear29112024Titled from '/public/imagesresized/NaworthRear29112024Titled.jpg'


export default function November2024() {

  return (   
 <div className=" bg-black border-solid border-2 border-black mb-28"> {/*November block background*/}
    <div>
       <div className="text-white text-center font-semibold text-2xl p-3 bg-[#41231c] border-solid border-2 border-[#b55b4b] m-2">November 2024
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
           <div className="font-semibold py-2 px-12 text-white text-center dark:text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 bg-[#773f3f]"> 1st - 30th November 2024</div> {/*End of news date block*/} 
           <div className="font-semibold text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-[#773f3f]">WELCOME TO OUR GUY FAWKE'S BONFIRE AND FIREWORKS PARTY!</div> {/*End of news header block*/}
        <div className="text-center text-white font-normal border-black border-solid border-2 mr-1 ml-1 mb-4 mt-4 px-4 py-4 bg-[#773f3f]">
          Welcome to our November blog. This month we have created a virtual,
          animated bonfire and firework display for our Guy Fawke's party. This
          way, Lennie can be included too as he hates the noise of real
          fireworks. He has already organised for us to put on{" "}
          <Link
            href="https://www.classicfm.com/radio/shows-presenters/pet-classics/"
            target="_blank"
            title="Click here to discover more about the annual Pet's Classics programme on Classic FM"
           className="underline decoration-[#D99E49]  text-[#D99E49] font-semibold"
          >
            Pet's Classics on Classic FM{" "}
          </Link>
          at 17.00 on the 2nd and 5th of November 2024, to help keep him
          relaxed. He loves this programme.
          <br />
          <br />
          For the winter months we have also included a colour scheme taken once
          again from an autumnal russet pallet in hex color coding. The display
          is created by amalgamating 3 separate container elements: the burning
          bonfire animation, the animated firework display, and the earth which
          forms the ground. We hope you enjoy it...
          <br />
          <br />
          </div>{" "}
      </div>{/*End of individual dated entry photo album block*/} 
           </div> {/*End of news content block*/}
           </div> {/*End of individual dated entry design and color template block*/}  

      < div className="mb-20"> 
      <div className="flex flex-col max-w-full leading-1.5 sm:p-2 md:p-2 lg:p-2 m-4 border-gray-800 border-solid border-2 bg-[#b55b4b]">
         <div className="text-md md:text-lg max-w-full font-semibold text-white text-center dark:text-white justify-center items-center">
        <div className="font-semibold py-2 px-12 text-white text-center dark:text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 bg-[#773f3f]"> 1st November 2024</div> {/*End of news date block*/} 
        <div className="font-semibold text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-[#773f3f]">VISIT TO THE SYCAMORE GAP EXHIBITION AT THE SILL</div> {/*End of news header block*/}
        
        <div className="text-center pr-3 pl-3 md:pr-1 md:pl-1 font-normal text-white dark:text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-[#773f3f]">
          We took the time today to go to see the temporary exhibition entitled
          'Sycamore Gap: One Year On' by the artist Charlie Whinney which is
          being hosted at 'The Sill' between the 28th September and the 3rd
          November 2024. The Guardian newspaper recently published an article
          regarding this exhibition which can be read here:{" "}
          <Link
            href="https://www.theguardian.com/uk-news/2024/sep/27/sycamore-gap-tree-exhibition-opens-to-mark-a-year-since-its-felling"
            target="_black"
            title="Click here ot open Guardian article re the Sycamore Gap tree exhibition 27th September 2027"
            className="underline decoration-[#D99E49]  text-[#D99E49] font-semibold"
          >
            Sycamore Gap Tree Exhibition opens to mark a year since its felling
          </Link>
          .
          <br />
          <br />
          The felling of the Sycamore Gap Tree in the early hours of the morning
          on the 28th September 2023 gained widespread media coverage with
          people from all over the world adding their contributions as to the
          significance of this particular tree to their lives and experiences.
          As a result of this and in order to try and gain something hopeful and
          positive out of such a destructive event, the artist Charlie Whinney
          and Creative Communities CIC, have created the Sycamore Gap: One Year
          On exhibition.
          <br />
          <br />
          This exhibition encourages contemplation of events and features the
          largest remaining section of the original tree. As part of the
          exhibition, it seeks the participation of the public with visitors
          being invited to make promises to nature, which will be incorporated
          into the second and final phase of the commission, set to open by
          Easter 2025. It is the first part of a 2 part exhibition in which the
          second and final part will see the wood installed permanently into The
          Sill and this will open by Easter 2025.
          <br />
          <br />
          As part of the Trees of Hope initiative, all 15 UK National Parks will
          also receive a sapling that will find new homes in some of the most
          beautiful landscapes in the UK.
          <br />
          <br />
          For all the information about our Hadrian's Wall Path trek this
          Summer, please come and join us at our
          <Link href="./hwp2024" className="underline decoration-[#D99E49]  text-[#D99E49] font-semibold">
            {" "}
            Hadrian's Wall Path Expedition page.{" "}
          </Link>
         <br />
         <br />  
         
         <Image
                  src={ SycamoreExhibition1 }
                  className="block ml-auto mr-auto h-auto w-[100%] md:w-[70%] lg:w-[60%] border-solid border-black-400 border-2 mt-6 mb-1 rounded-[70%]"
                  alt="Photo of of the original tree’s wood forming the exhibition centre piece "
                />
                  <figcaption className="novemberFigCaption">
                <div className="font-normal">
                  The largest section of the original <br /> tree’s wood forms
                  the centre piece <br /> of the exhibition display, as can{" "}
                  <br /> be seen above.
                </div>
              </figcaption>
              <br />
                <Image
                  src={ SycamoreExhibition2 }
                  className="block ml-auto mr-auto h-auto w-[100%] md:w-[70%] lg:w-[60%] border-solid border-black-400 border-2 mt-6 mb-1 rounded-[70%]"
                  alt="Photo of of the original tree’s wood forming the exhibition centre piece "
                />
                  <figcaption className="novemberFigCaption">
                <div className="font-normal">
                   It is framed by the artwork <br /> of the wood behind....
                </div>
              </figcaption>
              <br />
               <Image
                  src={ SycamoreExhibition3 }
                  className="block ml-auto mr-auto h-auto w-[100%] md:w-[70%] lg:w-[60%] border-solid border-black-400 border-2 mt-6 mb-1 rounded-[70%]"
                  alt="Photo of of the original tree’s wood forming the exhibition centre piece "
                />
                  <figcaption className="novemberFigCaption">
                <div className="font-normal">
                   There are additional alcoves to the exhibition <br />{" "}
                  containing galleries where people have sent in <br /> their
                  own pictures of the Sycamore Gap tree.
                </div>
              </figcaption>
              <br />
              <Image
                  src={ SycamoreExhibition4 }
                  className="block ml-auto mr-auto h-auto w-[100%] md:w-[70%] lg:w-[60%] border-solid border-black-400 border-2 mt-6 mb-1 rounded-[70%]"
                  alt="Photo of of the original tree’s wood forming the exhibition centre piece "
                />
                  <figcaption className="novemberFigCaption">
                <div className="font-normal">
                    As well as the pictures shown here, there are also
                  books <br /> of people's descriptions of what they were doing when
                 <br /> they heard about the tree's abrupt and unexpected demise.
                </div>
              </figcaption>
               <br />
 <br />              
           </div>           {/*  End of individual dated entry design and color template block */}
           </div> {/*End of individual dated entry block*/}</div>  
     </div> {/*End of November block*/}
    
    < div className="mb-20"> 
      <div className="flex flex-col max-w-full leading-1.5 sm:p-2 md:p-2 lg:p-2 m-4 border-gray-800 border-solid border-2 bg-[#b55b4b]">
         <div className="text-md md:text-lg max-w-full font-semibold text-white text-center dark:text-white justify-center items-center">
        <div className="font-semibold py-2 px-12 text-white text-center dark:text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 bg-[#773f3f]"> 2nd November 2024, Saturday</div> {/*End of news date block*/} 
        <div className="font-semibold text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-[#773f3f]">ADDITIONAL DAY - CATCH-UP VISIT TO BIRDOSWALD FORT</div> {/*End of news header block*/}
        
        <div className="text-center pr-3 pl-3 md:pr-1 md:pl-1 font-normal text-white dark:text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-[#773f3f]">
          When we walked the Birdowswald Fort section of Hadrian's Wall on the
          28th July 2024, there was not time to call in and explore the fort
          more fully, so we promised that sometime over the quieter Winter
          months we would pay Birdoswald Fort a visit, especially as Harry had
          never had the opportunity to visit.
          <br />
          <br />
          It was lovely and quiet at the fort, so there was plenty of
          opportunity and time to study the information boards and findings
          carefully. It is an interesting fort and well worth a visit if you are
          in the area! It is probably worthwhile obtaining a copy of the English
          Heritage guidebook though as it contains some additional helpful
          information to provide further clarification.
          <br />
          <br />
          For all the information about our Hadrian's Wall Path trek this
          Summer, please come and join us at our
          <Link href="./hwp2024" className="underline decoration-[#D99E49]  text-[#D99E49] font-semibold">
            {" "}
            Hadrian's Wall Path Expedition page.{" "}
          </Link>
         <br />
         <br />  
         
         <Image
                  src={ Birdoswald1Nov2nd2024 }
                  className="block ml-auto mr-auto h-auto w-[100%] md:w-[70%] lg:w-[60%] border-solid border-black-400 border-2 mt-6 mb-1 rounded-[70%]"
                  alt="Photo of Birdoswald Farmhouse. "
                />
                  <figcaption className="novemberFigCaption">
                <div className="font-normal">
                   Birdoswald Farmhouse, which <br /> stands on the site of the
                  old Roman Fort Banna.
                </div>
              </figcaption>
              <br />
                <Image
                  src={ Birdoswald2Nov2nd2024 }
                  className="block ml-auto mr-auto h-auto w-[100%] md:w-[70%] lg:w-[60%] border-solid border-black-400 border-2 mt-6 mb-1 rounded-[70%]"
                  alt="Photo of the Via Principalis at the entry to the West Gate. "
                />
                  <figcaption className="novemberFigCaption">
                <div className="font-normal">
                   We are standing here on the Via Principalis, <br /> about to
                  enter what was the West Gate.
                </div>
              </figcaption>
              <br />
               <Image
                  src={ Birdoswald3Nov2nd2024 }
                  className="block ml-auto mr-auto h-auto w-[100%] md:w-[70%] lg:w-[60%] border-solid border-black-400 border-2 mt-6 mb-1 rounded-[70%]"
                  alt="Photo of one of the information boards. "
                />
                  <figcaption className="novemberFigCaption">
                <div className="font-normal">
                   There are helpful information boards, <br /> this one
                  concerning the West Gate.
                </div>
              </figcaption>
              <br />
              <Image
                  src={ Birdoswald4Nov2nd2024 }
                  className="block ml-auto mr-auto h-auto w-[100%] md:w-[70%] lg:w-[35%] border-solid border-black-400 border-2 mt-6 mb-1 rounded-[50%]"
                  alt="Photo of the English Heritage Birdoswald guidebook. "
                />
                  <figcaption className="novemberFigCaption">
                <div className="font-normal">
                     It is well worth purchasing this <br /> English Heritage
                  guidebook <br /> about the fort as it provides <br /> more
                  detailed information.
                </div>
              </figcaption>
               <br />
 <br />              
           </div>           {/*  End of individual dated entry design and color template block */}
           </div> {/*End of individual dated entry block*/}</div>  
</div> {/*End of November block*/}    


< div className="mb-20"> 
      <div className="flex flex-col max-w-full leading-1.5 sm:p-2 md:p-2 lg:p-2 m-4 border-gray-800 border-solid border-2 bg-[#b55b4b]">
         <div className="text-md md:text-lg max-w-full font-semibold text-white text-center dark:text-white justify-center items-center">
        <div className="font-semibold py-2 px-12 text-white text-center dark:text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 bg-[#773f3f]"> November 4th 2024, Monday</div> {/*End of news date block*/} 
        <div className="font-semibold text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-[#773f3f]"> BLACKSMITH'S ARMS FOR DINNER</div> {/*End of news header block*/}
        
        <div className="text-center pr-3 pl-3 md:pr-1 md:pl-1 font-normal text-white dark:text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-[#773f3f]">
          The whole family met up today to go out for dinner at the Blacksmith's
          Arms. It was lovely, being relatively quiet and there was an open
          fire. The food was great also and reasonably priced. <br /> A great
          time was had by all.
         <br />
         <br />  
         
         <Image
                  src={ BlacksmithsMeal1Nov4th2024 }
                  className="block ml-auto mr-auto h-auto w-[100%] md:w-[70%] lg:w-[60%] border-solid border-black-400 border-2 mt-6 mb-1 rounded-[70%]"
                  alt="Photo of cumbeerland sausage and mash. "
                />
                  <figcaption className="novemberFigCaption">
                <div className="font-normal">
                  Cumberland Sausage and mash.
                </div>
              </figcaption>
              <br />
                <Image
                  src={ BlacksmithsMeal2Nov4th2024 }
                  className="block ml-auto mr-auto h-auto w-[100%] md:w-[70%] lg:w-[60%] border-solid border-black-400 border-2 mt-6 mb-1 rounded-[70%]"
                  alt="Photo of Trout, new potatoes and vegetables. "
                />
                  <figcaption className="novemberFigCaption">
                <div className="font-normal">
                   Trout, new potatoes and vegetables.
                </div>
              </figcaption>
              <br />
               <Image
                  src={ BlacksmithsEandH4112024 }
                  className="block ml-auto mr-auto h-auto w-[100%] md:w-[70%] lg:w-[60%] border-solid border-black-400 border-2 mt-6 mb-1 rounded-[70%]"
                  alt="Photo of the 'A' team - Elena and Harry. "
                />
                  <figcaption className="novemberFigCaption">
                <div className="font-normal">
                   The 'A' team - Elena and Harry.
                </div>
              </figcaption>
              <br />
              <Image
                  src={ BlacksmithsBernard4112024 }
                  className="block ml-auto mr-auto h-auto w-[100%] md:w-[70%] lg:w-[60%] border-solid border-black-400 border-2 mt-6 mb-1 rounded-[70%]"
                  alt="Photo of Bernard drinking beer. "
                />
                  <figcaption className="novemberFigCaption">
                <div className="font-normal">
                     Bernard enjoying the most important <br /> thing .... the
                  beer.
                </div>
              </figcaption>
               <br />
 <br />              
           </div>           {/*  End of individual dated entry design and color template block */}
           </div> {/*End of individual dated entry block*/}</div>  
</div> {/*End of November block*/}    


< div className="mb-20"> 
      <div className="flex flex-col max-w-full leading-1.5 sm:p-2 md:p-2 lg:p-2 m-4 border-gray-800 border-solid border-2 bg-[#b55b4b]">
         <div className="text-md md:text-lg max-w-full font-semibold text-white text-center dark:text-white justify-center items-center">
        <div className="font-semibold py-2 px-12 text-white text-center dark:text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 bg-[#773f3f]"> November 14th 2024, Thursday</div> {/*End of news date block*/} 
        <div className="font-semibold text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-[#773f3f]">HALTWHISTLE MYSTERY TOUR WALK , 5.25 miles: <br /> Haltwhistle,
          Haltwhistle Burn, Cawfields Quarry and return.</div> {/*End of news header block*/}
        
        <div className="text-center pr-3 pl-3 md:pr-1 md:pl-1 font-normal text-white dark:text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-[#773f3f]">
          We went over to Haltwhistle today to undertake a walk which actually
          forms part of the optional 'Haltwhistle Detour' of the Hadrian's Wall
          Path, usually used by people walking Hadrian's Wall who have overnight
          accommodation booked in Haltwhistle. This is one of the additional,
          optional add-ons to our Hadrian's Wall walk in the Summer, which we
          did not have chance to complete at the time, so what better time to do
          it than now? Whilst it was misty, when the sun periodically broke
          through, it turned into a lovely day. It also made it appropriately
          spooky, given it had just been halloween a few days previously....
          <br />
          <br />
          There is free parking available on Fair Hill, behind Sainsbury's
          supermarket. On arrival, as it was still quite misty, we called in at
          <Link
            href="https://www.tripadvisor.com/ShowUserReviews-g616269-d25569987-r955107966-Bonnie_s-Haltwhistle_Northumberland_England.html"
            target="_blank"
            title="Click here to discover more about 'Bonnie's'"
            className="underline decoration-[#D99E49]  text-[#D99E49] font-semibold"
          >
            {" "}
            Bonnie's Café{" "}
          </Link>{" "}
          to have some coffees prior to starting our walk.
          <Link
            href="https://www.tripadvisor.com/ShowUserReviews-g616269-d25569987-r955107966-Bonnie_s-Haltwhistle_Northumberland_England.html"
            target="_blank"
            title="Click here to discover more about 'Bonnie's'"
            className="underline decoration-[#D99E49]  text-[#D99E49] font-semibold"
          >
            {" "}
            Bonnie's
          </Link>{" "}
          is a quirky, friendly, reasonably-priced café on Haltwhistle Main
          Street. It seemed to be popular with local people, which is always a
          good sign. Coffees complete, we set off on our walk up Haltwhistle
          Burn towards Cawfield's Quarry, which sits on the Hadrian's Wall Path.
          <br />
          <br />
          Haltwhistle Burn Gorge was formed millions of years ago. It contains
          large cliffs containing sandstone. It was an important source of coal,
          which was mined, and limestone, which was burnt to form lime, used in
          buildings and had an important role in improving the acid soil of the
          upland farms. The remains of 2 lime kilns are still visible as you
          climb the path. The footpath you walk on was, during the early 20th
          century, the narrow-gauge railway tank which transported road-stone
          from Cawfields Quarry on Hadrian's Wall, where we were walking today,
          to the railway sidings at Town Foot. Earlier, in the 18th century,
          there were 2 mills in the gorge which had been set up by the Quakers
          to created jobs for local people and which were used to produce wool.
          The gorge looks very peaceful today but it was once the industrial
          centre of Haltwhistle producing woollen fabric, coal, stone, lime and
          ceramics.
          </div>
         <br />
         <br />  
         <div className="m-1 p-1 font-normal  bg-[#773f3f] border-solid border-black border-2 mb-6">
          <br />         
          Click on the image below to open the album <br /> of our day on the Haltwhistle Mystery Tour Walk.
         <br />
         <br /> 
          <Link
                href="https://photos.app.goo.gl/yAGdp3P23DrUq6U76"
                target="_blank"
              >
         <Image
                  src={ CawfieldsNov14th2024Titled }
                  className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[60%] border-solid border-black-400 border-4 mt-1 mb-11 rounded-[70%]"
                  alt="Photo of the road entering Cawfield's car park."
                />
                </Link>
                 <br />
         <br />  
        </div>
         </div>
         </div>
         </div>


      < div className="mb-20"> 
      <div className="flex flex-col max-w-full leading-1.5 sm:p-2 md:p-2 lg:p-2 m-4 border-gray-800 border-solid border-2 bg-[#b55b4b]">
         <div className="text-md md:text-lg max-w-full font-semibold text-white text-center dark:text-white justify-center items-center">
        <div className="font-semibold py-2 px-12 text-white text-center dark:text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 bg-[#773f3f]"> November 16th 2024, Saturday</div> {/*End of news date block*/} 
        <div className="font-semibold text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-[#773f3f]"> Miltonrigg Wood, Lanercost, Quarry Beck, Ridgewood and Brampton
          Circular Walk, 15.11km = 9.45 miles, 3hr 24, elevation gained 253
          metres.</div> {/*End of news header block*/}
        
        <div className="text-center pr-3 pl-3 md:pr-1 md:pl-1 font-normal text-white dark:text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-[#773f3f]">
           Today, was the first of a series of longer range walks which we will
          be undertaking over the forthcoming months. The aim is to increase our
          fitness and resilience so that we can comfortably walk 10-15 miles a
          day over successive days. The challenges of this over the winter
          period of course are the shorter daylight hours and risk of inclement
          weather, so a prompt start and flexibility in consideration of the
          best routes will be important. The walk today was just under 10 miles,
          on mixed terrain, along small country roads, and through several
          woods.
          <br />
          <br />
           Some highlights of the walk included:
            <br />
          <br />
          <ul
            style={{ textAlign: "center", marginLeft: "5%", marginRight: "5%"}}
          >
            <li style={{ textDecoration: "underline", fontWeight:"bold"}}>Milton Rigg Wood:</li>{" "}
            <div className="leftAlignli">
              Owned and managed by the Woodland Trust and containing a variety
              of interesting trees including many oak and birch, many of which
              date back over 100 years. Oak from this wood was used in
              rebuilding the roof of York Minster after it was destroyed by fire
              in 1984. The wildlife pond was created in 1990 as a habitat for
              toads, newts and dragonflies. There are birds such as wood warbler
              and willow tit which can be spotted.
            </div>
            <br />
            <li style={{ textDecoration: "underline", fontWeight:"bold" }}>Naworth Castle:</li>
            <div className="leftAlignli">
              Naworth Castle, belonging to the Dacre and Howard families, was
              built in 1335 to defend England’s borderlands against the Scots
              and Border Reivers. It is a private home, which is only available
              for private hire, and so it is not open to the general public.
              Nevertheless, it forms an impressive site as you descend the hill
              and it is easy to see why it was chosen for this location during
              the time of the borderland conflicts.
            </div>
            <br />
            <li style={{ textDecoration: "underline", fontWeight:"bold" }}>Lanercost tea room:</li>
            <div className="leftAlignli">
              Lanercost tea room is adjacent to the fascinating 12th century
              Lanercost Priory and lies only 0.5 mile from the World Heritage
              Site of Hadrian’s Wall. They serve a good range of
              freshly-prepared food. As you may have realised by now, for those
              of you who follow the blog, it is a favourite location of ours....
            </div>
            <br />
            <li style={{ textDecoration: "underline", fontWeight:"bold" }}>Quarrybeck:</li>
            <div className="leftAlignli">
              A stream and falls running through woodland down towards
              Lanercost. This is an extremely pleasant walk, especially in the
              month of May when the bluebells are out. It can be very muddy
              underfoot though, so adequate footwear is necessary. Our May 2024
              header features the bluebells in Quarrybeck wood.....
            </div>
            <br />
            <li style={{ textDecoration: "underline", fontWeight:"bold" }}>Ridgewood:</li>
            <div className="leftAlignli">
              This also is an area of woodland owned and managed by the Woodland
              Trust. It has lots of wildlife including roe deer, red squirrel
              and foxes being seen. There is a large ancient beech with a girth
              of 4.2m can be found to the east together with other species such
              as sycamore and lime. There are some lovely views from up here.
            </div>
          </ul>
          <br />
         
          </div>
         <br />
         <br />  
         <div className="m-1 p-1 font-normal  bg-[#773f3f] border-solid border-black border-2 mb-6">
          <br />         
          Click on the image below to open the album <br /> of some of our highlights of the walk.
         <br />
         <br /> 
          <Link
                href="https://photos.app.goo.gl/qcSyd3XWHYTgzbq58"
                target="_blank"
              >
         <Image
                  src={ RidgewoodHarry16112024Titled}
                  className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[60%] border-solid border-black-400 border-4 mt-1 mb-11 rounded-[70%]"
                  alt="Photo of the road entering Cawfield's car park."
                />
                </Link>
                 <br />
         <br />  
        </div>
         </div>
         </div>
         </div>




         < div className="mb-20"> 
      <div className="flex flex-col max-w-full leading-1.5 sm:p-2 md:p-2 lg:p-2 m-4 border-gray-800 border-solid border-2 bg-[#b55b4b]">
         <div className="text-md md:text-lg max-w-full font-semibold text-white text-center dark:text-white justify-center items-center">
        <div className="font-semibold py-2 px-12 text-white text-center dark:text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 bg-[#773f3f]"> 22nd November 2024, Friday</div> {/*End of news date block*/} 
        <div className="font-semibold text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-[#773f3f]"> Walk Eamont Bridge and Penrith: distance 13.5 miles; ascent 253
          metres, 830 feet.{" "}</div> {/*End of news header block*/}
        
        <div className="text-center pr-3 pl-3 md:pr-1 md:pl-1 font-normal text-white dark:text-white mr-1 ml-1 mb-2 mt-2 px-2 py-4 bg-[#D6C5C5] border-2 border-black">
      <div className=" m-4">
               <div className="bg-[#773f3f] text-white font-semibold">DETAILS OF THE WALK </div>
            <div className="font-semibold text-center  mt-2 mb-2 px-4 py-4 ">            
        <div className="font-normal pt-2 pb-2  text-black text-center">
             <ul className="list-none">
              <li className="text-left text-white bg-[#773f3f] p-4">
                <div className="font-semibold text-white">Parking:</div>
                We parked at Elena's house and walked from there. This added about
              2.5 miles on to the walk in total. If going from Penrith station,
              there is paid parking available at the station.
              </li>
             
              <br />  
        <br /> 
         <li className="text-left text-white bg-[#773f3f] p-4">
                  <div className="text-white font-semibold text-left bg-[#773f3f]">Paths:</div>
              Good, clear, well-signposted paths. A mixture of pavement,
              country bridleway and footpaths and field walking.{" "}          
              </li>
              <br />  
              <br /> 
              <li className="text-left text-white bg-[#773f3f] p-4">
                  <div className="text-white font-semibold text-left bg-[#773f3f]">Distance:</div>
              13.5 miles from Elena's house. 11 miles if starting at
              Penrith station. Ascent: 253 metres, 830 feet.
              </li>
               <br />  
        <br /> 
              <li  className="text-left  text-white bg-[#773f3f] p-4">
                <div className="text-white font-semibold">Refreshments:</div>
                There are plenty of pubs and cafés at Pooley Bridge, so
              take your pick. We chose one of our favourites, which is Granny
              Dowbekin's.{" "}
              </li>
            </ul>
             <br />  
        <br /> 
            <div className="bg-[#773f3f]  text-white font-semibold text-decoration-underline">GOOD</div> 
        <br /> 
        
            <ul className="list-none">
                <li className="text-left  text-white bg-[#773f3f] p-4">
                   <div className="text-white font-semibold">Variety :  </div>
                    This is a walk with lots of variety both in the types of foot path, the
                historical features to see en route and the beautiful
                countryside.
                <br />{" "}               
                </li>
                 <br />  
        <br /> 
    
                <li className="text-left  text-white bg-[#773f3f] p-4">
                  <div className="text-white font-semibold">Walk : </div>
                    This is a great longer distance walk which forms a good
                staging post for training for longer distance treks where this
                kind of distance needs to be walked day after day. It can also
                be added on to walks such as the{" "}
                <Link
                  href="https://www.ullswater.org/the-ullswater-way/"
                  target="_blank"
                  className="underline decoration-[#283618]  text-[#D99E49] font-semibold"
                >
                  Ullswater Way
                </Link>
                , which is a 20 mile walk around Ullswater Lake.
                </li>
                 <br />  
        <br /> 
        <li className="text-left  text-white  bg-[#773f3f] p-4">
                  <div className="text-white font-semibold">Environmentally-friendly: </div>
                  One of the reasons this walk has been developed has been
                a means of connecting Penrith station to Ullswater Lake on foot,
                in order to reduce the need to use the car. We worked out it
                would be quite feasible to catch an early train from Manchester,
                Liverpool or further a field and walk the whole walk, whilst
                still having time to return the same day.
                
                </li>
                 <br />  
        <br /> 
         <li className="text-left  text-white  bg-[#773f3f] p-4">
                  <div className="text-white bg-[#773f3f] font-semibold text-left">Refreshments: </div>
                There was plenty of opportunity for refreshments in
                Pooley Bridge and Penrith.
                </li>
                 <br />  
        <br /> 
        <li className="text-left text-white bg-[#773f3f] p-4">
                  <div className="text-white font-semibold text-left bg-[#773f3f]">Weather:</div>
                  Good weather, icy in parts.
                </li>                
            </ul>
            <br />
            <br />  
       
            <div className="bg-[#773f3f] text-white font-semibold text-decoration-underline">NOT SO GOOD</div>
             <br />  
            <ul className="list-none">
              <li className="text-left text-white bg-[#773f3f] p-4">
                <div className="text-white font-semibold">  Depends what you are looking for :</div>
               This is a longish but fairly straightforward low-level walk with
              plenty of interest and variety along the way. For some people,
              especially with the proximity of the spectacular high level
              walking in the surrounding Lake District hills, this might seem a
              bit too tame. It does have the definite advantage though that it
              can be undertaken at all times of year and in almost all weather
              conditions.
                <br />
              </li>
               <br />  
        <br /> 
            </ul>
             <div className="bg-[#773f3f] text-white font-semibold text-decoration-underline">HIKE RATING</div>
              <br /> 
          <ul className="list-none">
              <li className="text-center text-white bg-[#773f3f] p-4">
                <div className="text-white text-center font-semibold">9.6 (out of 10):</div>  
                  An enjoyable days walking which, despite the length, did not seem too
              challenging.
              </li>
            </ul>
          </div>{" "}
<br />  
        <br /> 
         <div className="bg-[#773f3f] text-white font-normal p-4 text-left ">
          Today's walk was the second of a series of longer range walks which we
          will be undertaking over the forthcoming months. The Eamont Way was
          opened on the 14th April 2023 and is a 5.5 mile walk linking Penrith
          Station to Pooley Bridge, on Ullswater Lake. Volunteers from Friends
          of the Ullswater Way and SITU (Sustainable and Integrated Transport
          for Ullswater) had a role in designing the trail. The logo chosen for
          the sign-posted way is the eel, so it is a case of keeping a lookout
          for the eel signs.
          <br />
          <br />
          The footpaths are good and clear and the walk is fairly low level with
          only some gentle undulations. The route is a really interesting mix of
          town and roadside walking, countryside foot paths, pretty cumbrian
          villages, several crossings of the river Eamont and a number of
          historic landmarks.
          <br />
          <br />
          Some historic highlights of the Eamont Way path from Penrith station
          to Pooley Bridge include:
          <br />
          <br />
          <ul
            style={{ textAlign: "left", marginLeft: "5%", marginRight: "5%" }}
          >
            <li style={{ textDecoration: "underline" }}>Penrith Station:</li>{" "}
            Penrith station was built by the Lancaster and Carlisle railway and
            opened on the 17th December 1846. The station was designed by Sir
            William Tite, designer of a number of early railway stations in
            Britain during the construction of the Lancaster and Carlisle line.
            It is recorded in the National Heritage List for England as a
            designated Grade II listed building. More about its interesting
            history can be found on the{" "}
            <Link
              href="https://www.ullswaterheritage.org/eamont-way/penrith-station"
              target="_blank"
              title="Click here to discover more about the history of Penrith station"
              className="underline decoration-[#D99E49]   text-[#D99E49]  font-semibol"
            >
              Friends of the Ullswater Way website-Penrith station.
            </Link>
            <br />
             <br />
            
            <li style={{ textDecoration: "underline" }}>Penrith Castle:</li>
            <div className="leftAlignli">
              Lying almost opposite Penrith station, although not so much
              remains of Penrith Castle remains today, it has a very interesting
              history. More about this history can be found on the
              <Link
                href="https://www.ullswaterheritage.org/eamont-way/penrith-castle"
                target="_blank"
                title="Click here to discover more about the history of Penrith castle"
                className="underline decoration-[#D99E49]  text-[#D99E49] font-semibol"
              >
                {" "}
                Friends of the Ullswater Way website-Penrith Castle
              </Link>
              .
            </div>
            <br />
            <li style={{ textDecoration: "underline" }}>Yanwath Hall:</li>
            <div className="leftAlignli">
              Yanwath Hall is privately owned but is of note because it has one
              of the best surviving pele towers in Cumbria. More information
              about Yanwath Hall and its pele tower can be found on the
              <Link
                href="https://www.ullswaterheritage.org/eamont-way/yanwath-hall"
                target="_blank"
                title="Click here to discover more about Yanwath Hall"
                className="underline decoration-[#D99E49]  text-[#D99E49] font-semibol"
              >
                {" "}
                Friends of the Ullswater Way website-Yanwath Hall
              </Link>
            </div>
            <br />
            <li style={{ textDecoration: "underline" }}>Kirkbarrow Hall:</li>
            <div className="leftAlignli">
              Today Kirkbarrow Hall is a dairy farm but it has a history dating
              back to the late 16th or early 17th century. It once belonged to
              Leonard Dacre. Information concerning the fascinating history of
              Kirkbarrow Hall can be found on the
              <Link
                href="https://www.ullswaterheritage.org/eamont-way/kirkbarrow-hall"
                target="_blank"
                title="Click here to discover more about the history of Kirkbarrow Hall"
                className="underline decoration-[#D99E49]  text-[#D99E49] font-semibol"
              >
                {" "}
                Friends of the Ullswater Way website-Kirkbarrow Hall
              </Link>
              .
            </div>
            <br />
            <li style={{ textDecoration: "underline" }}>
              St Michael's Church, Barton:
            </li>
            Information about the history and people involved in this church,
            which is adjacent to the route, can be found on the{" "}
            <Link
              href="https://www.ullswaterheritage.org/locations/barton-church"
              target="_blank"
              title="Click here to discover more about the history of St Michael's Church, Barton"
              className="underline decoration-[#D99E49]  text-[#D99E49] font-semibol"
            >
              Friends of the Ullswater Way website-St Michael's Church, Barton.
            </Link>
            <div className="leftAlignli"></div>
            <br />
            <li style={{ textDecoration: "underline" }}>
              Wordsworth House, Sockbridge:
            </li>
            <div className="leftAlignli">
              We passed Wordsworth House in Sockbridge village. Information on
              the{" "}
              <Link
                href="https://www.ullswaterheritage.org/eamont-way/wordsworth-house-sockbridge"
                target="_blank"
                title="Click here to discover more about the history of William Wordsworth's grandfather and Sockbridge"
                className="underline decoration-[#D99E49]  text-[#D99E49] font-semibol"
              >
                Friends of the Ullswater Way website-Wordsworth House,
                Sockbridge
              </Link>{" "}
              tells us that it was built in 1699 and was formerly called
              Sockbridge House. The house was sold to Richard Wordsworth, who
              was both Viscount Lowther's agent and William Wordsworth's
              grandfather. In the Jacobite rebellion of 1745 he fled to
              Patterdale with the "county treasure" to save it from the rebels
              while Mrs Wordsworth entertained Jacobite officers at their home.
              We also passed a barn conversion named Wordsworth Cottage which
              was apparently formerly part of the estate once owned by
              Wordsworth’s grandfather.{" "}
              
            </div>
          </ul>
          </div>
            </div>
            </div>         
          </div>
         <br />
         <br />  
         <div className="m-1 p-1 font-normal  bg-[#773f3f] border-solid border-black border-2 mb-6">
          <br />         
          Click on the image below to open the album <br /> of some of our highlights of the walk.
         <br />
         <br /> 
          <Link
                href="https://photos.app.goo.gl/eZSXChQ1bjUqGC489"
                target="_blank"
              >
         <Image
                  src={ EamontWay22112024Title}
                  className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[60%] border-solid border-black-400 border-4 mt-1 mb-11 rounded-[70%]"
                  alt="Photo of Eleanor and Harry on the Eamont Way walk."
                />
                </Link>
                 <br />
         <br />  
        </div>
         </div>
         </div>
         </div>


 < div className="mb-20"> 
      <div className="flex flex-col max-w-full leading-1.5 sm:p-2 md:p-2 lg:p-2 m-4 border-gray-800 border-solid border-2 bg-[#b55b4b]">
         <div className="text-md md:text-lg max-w-full font-semibold text-white text-center dark:text-white justify-center items-center">
        <div className="font-semibold py-2 px-12 text-white text-center dark:text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 bg-[#773f3f]"> 29th November 2024, Friday</div> {/*End of news date block*/} 
        <div className="font-semibold text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-[#773f3f]">Walk Walton Village via Miltonrigg Wood and Lanercost: distance 14.4
          miles; ascent 333 metres, 1092.52 feet.{" "}</div> {/*End of news header block*/}
        
        <div className="text-center pr-3 pl-3 md:pr-1 md:pl-1 font-normal text-white dark:text-white mr-1 ml-1 mb-2 mt-2 px-2 py-4 bg-[#D6C5C5] border-2 border-black">
      <div className=" m-4">
               <div className="bg-[#773f3f] text-white font-semibold">DETAILS OF THE WALK </div>
            <div className="font-semibold text-center  mt-2 mb-2 px-4 py-4 ">            
        <div className="font-normal pt-2 pb-2  text-black text-center">
             <ul className="list-none">
              <li className="text-left text-white bg-[#773f3f] p-4">
                <div className="font-semibold text-white">Parking:</div>
                We did not need to take the car for this walk.
              </li>
             
              <br />  
        <br /> 
         <li className="text-left text-white bg-[#773f3f] p-4">
                  <div className="text-white font-semibold text-left bg-[#773f3f]">Paths:</div>
                  Good, clear, paths. A mixture of quiet, minor country roads. 
              </li>
              <br />  
              <br /> 
              <li className="text-left text-white bg-[#773f3f] p-4">
                  <div className="text-white font-semibold text-left bg-[#773f3f]">Distance:</div>
             14.4 miles,  Ascent 333 metres, 1092.52.
              </li>
               <br />  
        <br /> 
              <li  className="text-left  text-white bg-[#773f3f] p-4">
                <div className="text-white font-semibold">Refreshments:</div>
               Lanercost Tea room.{" "}
              </li>
            </ul>
             <br />  
        <br /> 
            <div className="bg-[#773f3f]  text-white font-semibold text-decoration-underline">GOOD</div> 
        <br /> 
        
            <ul className="list-none">
                <li className="text-left  text-white bg-[#773f3f] p-4">
                   <div className="text-white font-semibold">All-weather :  </div>
                    This is a walk which can be undertaken in almost all weathers and
                seasons.
                <br />{" "}               
                </li>
                 <br />  
        <br /> 
    
                <li className="text-left  text-white bg-[#773f3f] p-4">
                  <div className="text-white font-semibold">Walk : </div>
                     This is a great longer distance walk which again, forms a
                good staging post for training for longer distance treks where
                this kind of distance needs to be walked day after day.
                </li>
                 <br />  
        <br /> 
         <li className="text-left  text-white  bg-[#773f3f] p-4">
                  <div className="text-white bg-[#773f3f] font-semibold text-left">Refreshments: </div>
              There were refreshments available at Lanercost Tea room.
                </li>
                 <br />  
        <br /> 
        <li className="text-left text-white bg-[#773f3f] p-4">
                  <div className="text-white font-semibold text-left bg-[#773f3f]">Environmentally-friendly:</div>
                 We did not need to use the car at all for the walk today.
                </li>                
            </ul>
            <br />
            <br />  
       
            <div className="bg-[#773f3f] text-white font-semibold text-decoration-underline">NOT SO GOOD</div>
             <br />  
            <ul className="list-none">
              <li className="text-left text-white bg-[#773f3f] p-4">
                <div className="text-white font-semibold">  Walton Tea room was closed for December:</div>
               We had been looking forward to having our lunch at Walton Tea room
              which, according to the website and the sign board on Walton Green
              was open for business. Unfortunately, when we arrived, we learnt
              they were closed until the end of December. Luckily, in case of
              encountering such an eventuality, we had packed some back-up
              sandwiches and snacks, which kept us going until we reached
              Lanercost Tea room, which fortunately was open for lunch.
                <br />
              </li>
               <br />  
        <br /> 
            </ul>
             <div className="bg-[#773f3f] text-white font-semibold text-decoration-underline">HIKE RATING</div>
              <br /> 
          <ul className="list-none">
              <li className="text-center text-white bg-[#773f3f] p-4">
                <div className="text-white text-center font-semibold">9.6 (out of 10):</div>  
                 An enjoyable days walking.
              </li>
            </ul>
          </div>{" "}
<br />  
        <br /> 
         <div className="bg-[#773f3f] text-white font-normal p-4 text-left ">
          Today's walk to Walton Village and back via Miltonrigg wood and
          Lanercost was the third of a series of longer range walks which we we
          are undertaking over the forthcoming months.
          <br />
           <br />
          There are good, clear, paths with a mixture of quiet, minor country
          roads and footpaths. Whilst the country roads were very quiet, it is
          very important to keep a watch out as whilst there is only an
          occasional vehicle they can be traveling very quickly and not be
          expecting to meet anyone en route!
          <br />
          <br />
          
          </div>
            </div>
            </div>         
          </div>
         <br />
         <br />  
         <div className="m-1 p-1 font-normal  bg-[#773f3f] border-solid border-black border-2 mb-6">
          <br />         
          {" "}
                Click on the image below to open the photo album of our walk
                over to Walton Village and back via Miltonrigg wood and
                Lanercost.
                <br /> <br />
                The individual comments on the photos will take you through the
                full story of our walk.
         <br />
         <br /> 
          <Link
                href="https://photos.app.goo.gl/LM9jMHMHjW1Ys6RV9"
                target="_blank"
              >
         <Image
                  src={ NaworthRear29112024Titled}
                  className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[60%] border-solid border-black-400 border-4 mt-1 mb-11 rounded-[70%]"
                  alt="Photo of Eleanor and Harry on the Eamont Way walk."
                />
                </Link>
                 <br />
         <br />  
        </div>
         </div>
         </div>
         </div>



    </div>
      </div>
  );
}