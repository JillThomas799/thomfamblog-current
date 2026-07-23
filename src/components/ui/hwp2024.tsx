import Image from 'next/image'
import Link from 'next/link'
// import "./hwp2024.css";
import Romaneagle from "./eagle"
import HWPThermometer from "./hwpthermometer"
import NewcastleQuayside from "/public/imagesresized/NewcastleQuayside.jpg";
import HwpIntro from "/public/imagesresized/HwpIntro.jpg";
import TyneKingGeorgeTitled from "/public/imagesresized/TyneKingGeorgeTitled.jpg";
import Branzinos from "/public/imagesresized/Branzinos.jpg";
import DunstonStaithes from "/public/imagesresized/DunstonStaithes.jpg";
import Lemington from "/public/imagesresized/Lemington.jpg";
import Newburn from "/public/imagesresized/Newburn.jpg";
import DentonHallTurret from "/public/imagesresized/DentonHallTurret.jpg";
import HeddonItalianClosed2Text from "/public/imagesresized/HeddonItalianClosed2Text.jpg";
import WillowfordDay9 from "/public/imagesresized/WillowfordDay9.jpg";
import WhittleChollerford from "/public/imagesresized/WhittleChollerford.jpg";
import ChollerfordBroccolitia from "/public/imagesresized/ChollerfordBroccolitia.jpg";
import ThirlwallElena1 from "/public/imagesresized/ThirlwallElena1.jpg";
import HousesteadsCawfieldQuarry from "/public/imagesresized/HousesteadsCawfieldQuarry.jpg";



export default function HWP2024() {
  return (
    <div>
      < div className="bg-[#850f55] border-solid border-4 border-gray-600 md:p-4 mb-8 h-[100%] text-black text-center font-normal text-l p-3">
        <div className="bg-[#d19b2f] mr-[7%] ml-[7%] md:mr-[20%] md:ml-[20%] p-1 border-[#bdbeba] border-2 text-black font-bold">Hadrian's Wall Path Expedition 2024</div>
        <br />
        <br />
        < Romaneagle />        
        < HWPThermometer />
        <div className="text-sm font-semibold bg-[#d19b2f] border-solid border-1 border-gray-600 mr-[15%] ml-[15%] mb-[10%] p-2 mt-[30%] md:mt-[0%] ">100% Completed by August 24th 2024 !</div>
      </div>   
      

        
       < div className="mb-20"> 
      < div className="flex flex-col bg-[#850f55] border-solid border-4 border-gray-600 h-[80%] md:h-[100%]  w-auto leading-1.5 pt-4 md:p-4 lg:p-4">
         < div className="text-sm md:text-md md:text-base max-w-full font-normal md:fount-semibold text-white text-center dark:text-black justify-center items-center">

         <Image
                  className="block ml-auto mr-auto h-auto w-[100%] md:w-[70%] lg:w-[50%] border-solid border-[#bdbeba] border-4 mt-4 mb-6"
                  src={HwpIntro}
                  alt=""
                />
         <div className="font-semibold pt-2 pb-2 mr-[10%] ml-[10%]  text-white text-center bg-[#66023c]">   1st June, 2024 onwards.... Hadrian's Wall Long Distance Path</div> {/*End of news date block*/}
              <div className="font-semibold m-4 pt-2 pb-4 py-2 md:px-4 text-white text-center  bg-[#66023c]"> How did we come to be here?.....</div>

        <div className="font-semibold text-center border-solid mr-1 ml-1 mt-2 mb-2 px-4 py-4 bg-[#d19b2f]">              
              If this were a novel, it might possibly commence with the
              following....... 
              <br />         
            <em>
              'When they looked back afterwards, no one could quite recall how
              they had arrived at the decision to walk this 84 mile wild and
              windswept path from the East to the West Coast of England,
              encompassing both current-day Northumberland and Cumbria. Or at
              least, if anyone did recall, no one was now admitting to it, in
              case they might have to accept responsibility....'
              <br />
              <br />
            </em>
            On a more serious note though, what is clear are the aims of this
            undertaking, which are to:
            <br />
            <ul className=" list-none">
              <li className="text-left list-disc ml-4">
                Complete the Hadrian's Wall Path on separate days over a number
                of months.
              </li>
              <li className="text-left list-disc ml-4">
                Ensure there is ample opportunity to visit the many museums and
                sites of interest en route and to enjoy the fantastic views.
              </li>
              <li className="text-left list-disc ml-4">Try and keep the trip as 'green' as possible.</li>
              <li className="text-left list-disc ml-4">
                Make a blog record of the journey, which others considering this
                trip might find useful.
              </li>
              <li className="text-left list-disc ml-4">
                Try where possible to support local and regional businesses,
                organisations and charities.
              </li>
            </ul>
            <br />
            Over the coming weeks and months we will section by section be
            adding news of our Hadrian's Wall Path Expedition.
            <br />
            <br />
            To enter into the theme, the background colours for the Hadrian's
            Wall Path blog have been chosen for their significance to the Romans
            and the Roman Empire, with the key colour being Tyrian Purple, the
            colour worn by the Roman Emperor. This{" "}
            <Link
              href="https://www.ncl.ac.uk/press/articles/latest/2024/05/tyrianpurplecarlisle/"
              target="_blank"
              title="Click here to learn more about information produced by Newcastle University about Tyrian purple"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              article{" "}
            </Link>{" "}
            from Newcastle University explains more about the source and
            importance of Tyrian purple, which only the emperor was allowed to
            wear.
          </div>{" "}
        </div>{" "}
      </div>{" "}
</div>


     
      < div className="mb-20"> 
      < div className="flex flex-col bg-[#850f55] border-solid border-8 border-gray-600 h-[80%] md:h-[100%]  w-auto leading-1.5 pt-4 md:p-4 lg:p-4">
         < div className="text-sm md:text-md md:text-base max-w-full font-normal md:fount-semibold text-[#2b8936] text-center dark:text-black justify-center items-center">
         <div className="font-semibold pt-2 pb-2 mr-[20%] ml-[20%]  text-white text-center bg-[#66023c] p-2">1st June 2024, Saturday</div> {/*End of news date block*/}
              <div className="font-bold m-4 pt-2 pb-4 py-2 md:px-4 text-white text-center  bg-[#66023c]">  Day 1 - Wallsend to Newcastle Swing Bridge: 5.1 miles on the
            Hadrian's Wall Path, 7.5 miles total</div>
      
            <div className="bg-[#66023c] text-white font-bold">DETAILS OF THE WALK </div>
            <div className="font-semibold text-center border-solid mr-1 ml-1 mt-2 mb-2 px-4 py-4 ">            
        <div className="font-normal pt-2 pb-2  text-black text-center">
             <ul className="list-none">
              <li className="text-left bg-[#d19b2f] p-4">
                <strong className="text-[#66023c]">Parking:</strong>
                <br />
                Quayside Car Park (owned by Newcastle City Council). £11.00 for
                the day. Payment is via the {" "}
                <Link href="https://www.paybyphone.co.uk/" target="_blank" className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline">
                  Pay by Phone
                </Link>{" "}
                app on your mobile phone.
              </li>
              <br />  
        <br /> 
              <li  className="text-left bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Public Transport: </div>
                Metro yellow line heading to South Shields via Whitley
                Bay between <strong>Manors</strong> and{" "}
                <strong>Wallsend</strong> metro stations. Routes and live
                updates can be viewed on the Nexus{" "}
                <Link
                  href="https://www.nexus.org.uk/ticket-information/pop/pop-app"
                  target="_blank"
                  title="Click here to go to the Pop app Information page of the Nexus site"
                 className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
                >
                  Pop app
                </Link>
                . Cost £5.60 per adult for All Day Rover ticket.
              </li>
              <br />  
        <br /> 
              <li  className="text-left  bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Distance:</div>
                5.1 miles on the Hadrian's Wall Path, 7.5 miles total,{" "}
                <strong> Ascent:</strong> 22 metres, 72 feet,{" "}
                <strong>Descent:</strong> 30 metres, 98 feet.{" "}
              </li>
               <br />  
        <br /> 
              <li  className="text-left bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Refreshments:</div>
                <Link
                  href="https://oswinproject.org.uk/our-work/cafe-16-at-newcastle-cathedral/"
                  target="_blank"
                  title="Click here to discover more about Café 16, St Nicholas' Cathedral "
                 className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
                >
                  Café 16, St Nicholas' Cathedral
                </Link>
                , Newcastle. The café is supplied with fresh produce from the
                charity’s bakery in HMP Northumberland, where the café's trained
                bakers allow prisoners to learn new skills and find a new
                direction on release.
              </li>
            </ul>
             <br />  
        <br /> 
            <div className="bg-[#66023c] text-white font-bold text-decoration-underline">GOOD</div>
             <br />  
        <br /> 
            <ul className="list-none">
              <div className="listItemsAlign">
                <li className="text-left bg-[#d19b2f] p-4">
                  <div className="text-[#66023c] font-semibold">Museums :</div>
                  <Link
                    href="https://segedunumromanfort.org.uk/"
                    target="_blank"
                    title="Click here
            to discover more about Segedunum Fort"
                   className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
                  >
                    {" "}
                    Segedunum Fort{" "}
                  </Link>
                  ,{" "}
                  <Link
                    href="https://www.newcastlecastle.co.uk/"
                    target="_blank"
                    title="Click 
            here to discover more about Newcastle Castle"
                  className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
                  >
                    Newcastle Castle
                  </Link>
                </li>
                 <br />  
        <br /> 
                <li className="text-left  bg-[#d19b2f] p-4">
                  <div className="text-[#66023c] font-semibold">Walk : </div>
                  The section of the walk which runs right beside the River Tyne
                  was our favourite, watching the speed boats, fishing boats and
                  seagulls.
                </li>
                 <br />  
        <br /> 
                <li className="text-left  bg-[#d19b2f] p-4">
                  <div className="text-[#66023c] font-semibold">History : </div>
                  Learnt not just about Roman history but also about the docks
                  and the ships built there and the medieval history of
                  Newcastle Castle.
                </li>
                 <br />  
        <br /> 
                <li className="text-left  bg-[#d19b2f] p-4">
                  <div className="text-[#66023c] font-semibold">Information boards:</div>
                  Really interesting and informative information boards en route
                  during the walks.
                </li>
                 <br />  
        <br /> 
                <li className="text-left  bg-[#d19b2f] p-4">
                  <div className="text-[#66023c] font-semibold">Weather:</div>
                  Beautiful, sunny day.
                </li>
              </div>
            </ul>
            <br />
            <div className="bg-[#66023c] text-white font-bold text-decoration-underline">NOT SO GOOD</div>
             <br />  
            <ul className="list-none">
              <li className="text-left  bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Underfoot</div>
                All of the walk was on firm surfaces.
              </li>
               <br />  
        <br /> 
              <li className="text-left  bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Seating</div>
                There is relatively little opportunity for sitting down between
                the main waymarks, although there is a lovely picnic area at
                Wallsend within the Segendum Fort and some great quayside
                seating and bars and cafés once getting by the millennium and
                Swing Bridges.{" "}
              </li>
               <br />  
        <br /> 
            </ul>
             <div className="bg-[#66023c] text-white font-bold text-decoration-underline] p-2">HIKE RATING</div>
              <br /> 
            <ul className="list-none">
              <li className="text-left bg-[#d19b2f] p-4">
                <div className="text-[#66023c] text-center font-semibold">8 (out of 10):</div> Better walk
                than expected so don't let some people's complaints about its
                urban setting on line put you off. 
                   <br /> 
                     <br /> 
                It is walking on firm
                surfaces all the way though.
                   <br /> 
                     <br /> 
                Many people walk this section
                combining 3 segments known as 1a, 1b and 1c, from Wallsend to
                Heddon-on-the-Wall, but we would advise against this if possible
                as there is so much to do, to see and to learn that undertaking
                so much in one day does not allow for time to be spent in the
                sites and museums. Also we would not advise walking on firm
                surfaces for such a distance.
              </li>
            </ul>
          </div>{" "}
          {/* Closing tag ComponentWalkDetails Class*/}
          <br />
          <div className="font-normal text-center bg-[#d19b2f] p-4">
            We were up early on this, the first day of our Hadrian's Wall walk
            and left promptly in order to be in Newcastle by 9.30am. We chose to
            park on one of the Newcastle City Council car parks. Be forewarned,
            these no longer accept cash payments, so it is worth setting up the
            <Link
              href="https://www.paybyphone.co.uk/"
              target="_blank"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Pay by Phone app
            </Link>{" "}
            on your phone before you go, so that payment can be made quickly and
            easily. We used the{" "}
            <Link
              href="https://www.getintonewcastle.co.uk/venues/quayside-multi-storey-car-park"
              target="_blank"
              title="Click here to discover more about the Quayside Car Park"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Quayside Car Park{" "}
            </Link>
            which is reasonably priced by city standards (£11.00 for the day)
            and parking after 18.00 is free.
            <br />
            <br />
            After a short 10 minute walk (0.3 mile), we arrived at Manors Metro
            Station. The Metro services in Newcastle are run by{" "}
            <Link
              href="https://www.nexus.org.uk/"
              target="_blank"
              title="Click here to go to the Nexus website"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              Nexus
            </Link>
            . Their{" "}
            <Link
              href="https://www.nexus.org.uk/ticket-information/pop/pop-app"
              target="_blank"
              title="Click here to go to the Pop app Information page of the Nexus site"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Pop app{" "}
            </Link>
            can be downloaded to your phone and allows you to plan your journey
            and access live updates. Day tickets need to be purchased at the
            ticket machine located just inside the entrance to the station, but
            are straightforward to acquire.
            <br />
            <br />
            The Hadrian's Wall Path starts at Wallsend, and on disembarking at
            Wallsend metro station, it is a well-signed posted and short (3
            minute) walk to
            <Link
              href="https://segedunumromanfort.org.uk/"
              target="_blank"
              title="Click here to discover more about Segedunum Fort"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Segedunum Roman Fort.{" "}
            </Link>
            Entry was half-price as the 3rd floor of the museum and also the
            reconstructed bath house were currently closed, awaiting repairs to
            flooding damage. These are due to be completed by the end of August
            as this{" "}
            <Link
              href="https://www.bbc.com/news/articles/cndd2wppy3xo"
              target="_blank"
              title="Click here to open the article"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              recent BBC article
            </Link>{" "}
            explains, so in no way let this put you off visiting as this is
            still an excellent, informative museum and site and there are some
            amazing views from the viewing tower. Our intention is to have a
            further visit when the repairs are complete.
            <br />
            <br />
            From there, we went on to join the Hadrian's Wall Path which, for
            the first 12 miles runs not along the original line of Hadrian's
            Wall but along the route 72 cycle and pedestrian way along the
            Northern bank of the River Tyne. This path is much pleasanter than
            might be imagined, despite it being through quite an urban area. It
            is also a cycle path, so you just need to keep a look out for
            cyclists to let them past. Our favourite section was when we dropped
            down to be right beside the River Tyne. The Ropery formed a good
            spot for a packed lunch as there was a bench to sit on.
            <br />
            <br />
            After lunch, it was a leisurely wander into Newcastle city centre
            via the Quayside. It was a beautifully sunny Saturday afternoon so
            people were making full use of the riverside and rooftop bars and
            restaurants. On arrival in Newcastle city centre, it was time for
            some refreshments and we went to{" "}
            <Link
              href="https://oswinproject.org.uk/our-work/cafe-16-at-newcastle-cathedral/"
              target="_blank"
              title="Click here to discover more about Café 16, St Nicholas' Cathedral "
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              Café 16, St Nicholas' Cathedral
            </Link>{" "}
            who have excellent cakes, before heading down the road to{" "}
            <Link
              href="https://www.newcastlecastle.co.uk/"
              target="_blank"
              title="Click
            here to discover more about Newcastle Castle"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              Newcastle Castle
            </Link>{" "}
            to visit the Black Gate and to climb the Keep, from which there are
            some fantastic views of Newcastle's iconic bridges.
            <br />
            <br />
            All in all it had been a great first day of the Hadrian's Wall Path
            with everyone looking forward to the next stage....
            <br />
            <br />
          </div>{" "}
          {/*Closing tag for hwpDailyNarrative div */}
           <br />
           <br />
          <div className="slideshowHostPhotoHwp">            
              <div className="text-white text-semibold">Join us on our 1st day of the Hadrian's Wall Path by clicking on the
            album below and following our narrative by clicking on the added
            comments. </div>
              <Link
                href="https://photos.app.goo.gl/sRhBPqCMEbCajSdf9"
                target="_blank"
              >
                <Image
                   className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[50%] border-solid border-[#bdbeba] border-4 mt-4 mb-6"
                  src={NewcastleQuayside}
                  alt=""
                />
              </Link>
         
          </div>{" "}
          {/* Closing div SlideshowHostPhotoHwp */}
           <br />
           <br />
        </div>{" "}
        {/* Closing tag datenewsDivHwp */}
      </div>
        </div>{" "}
         </div>
       



        <div>
        < div className="mb-20"> 
      < div className="flex flex-col bg-[#850f55] border-solid border-8 border-gray-600 h-[80%] md:h-[100%]  w-auto leading-1.5 pt-4 md:p-4 lg:p-4">
         < div className="text-sm md:text-md md:text-base max-w-full font-normal md:fount-semibold text-[#2b8936] text-center dark:text-black justify-center items-center">
         <div className="font-semibold pt-2 pb-2 mr-[20%] ml-[20%]  text-white text-center bg-[#66023c] p-2">3rd August 2024, Saturday</div> {/*End of news date block*/}
              <div className="font-bold m-4 pt-2 pb-4 py-2 md:px-4 text-white text-center  bg-[#66023c]"> Day 2 - Newcastle Gateshead millennium Bridge to Tyne Riverside
            Country Park: 8.7 miles (including a 1 mile detour to Denton Hall
            turret).</div>
      
        
         
            <div className="bg-[#66023c] text-white font-bold">DETAILS OF THE WALK </div>
            <div className="font-semibold text-center border-solid mr-1 ml-1 mt-2 mb-2 px-4 py-4 ">            
        <div className="font-normal pt-2 pb-2  text-black text-center">
             <ul className="list-none">
              <li className="text-left bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Parking:</div>
                Free parking at Tyne Riverside car park and parking for £4.60 for
              the day on a Saturday at St Ann's Car Park, Sandgate, Newcastle
              Upon Tyne.
              </li>
              <br />  
        <br /> 
              <li  className="text-left  bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Distance:</div>
               <br /> 8.7 miles on the Hadrian's Wall Path, including the Denton
              Hall turret diversion<strong> Ascent:</strong> 56 metres, 184
              feet, <strong>Descent:</strong> 45 metres, 148 feet.{" "}
              </li>
               <br />  
        <br /> 
              <li  className="text-left bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Refreshments:</div>
                  <br />
              Coffees and cakes at{" "}
                 <Link
                href="https://www.getintonewcastle.co.uk/venues/starbucks-malmaison"
                target="_blank"
                title="Click here to discover more about Starbucks at Malmaison, Newcastle"
                className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
              >
                Starbucks at Malmaison
              </Link>
              , Newcastle and soft drinks at{" "}
              <Link
                href="https://www.branzinorestaurant.co.uk/"
                target="_blank"
                title="Click here to discover more about Branzinos"
                className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
              >
                {" "}
                Branzino's Italian restaurant{" "}
              </Link>{" "}
              , the Boat House, Newburn, Newcastle.{" "}
                , Newcastle. The café is supplied with fresh produce from the
                charity’s bakery in HMP Northumberland, where the café's trained
                bakers allow prisoners to learn new skills and find a new
                direction on release.
              </li>
            </ul>
             <br />  
        <br /> 
            <div className="bg-[#66023c] text-white font-bold text-decoration-underline">GOOD</div>
             <br />  
        <br /> 
        
            <ul className="list-none">
                <li className="text-left bg-[#d19b2f] p-4">
                   <div className="text-[#66023c] font-semibold">Points of Interest: </div>
                There are a surprising number of points of interest on this
                segment of the walk, far more than we had anticipated. They
                include the Blacksmith's Needle, the seven key Newcastle
                bridges, the old fish market, Dunston Staith, Elswick and
                Scotwood and the history of William Armstrong and his importance
                in armament production and ship building on the Tyne, the
                Lemington glassworks, the battle of Newburn Ford and Tyne
                Riverside Park.               
                </li>
                 <br />  
        <br /> 
                <li className="text-left  bg-[#d19b2f] p-4">
                  <div className="text-[#66023c] font-semibold">Walk : </div>
                 The initial part of this walk runs alongside the River Tyne,
                with plenty of historical features and points of interest to
                note..
                </li>
                 <br />  
        <br /> 
                <li className="text-left  bg-[#d19b2f] p-4">
                  <div className="text-[#66023c] font-semibold">History : </div>
                  Learnt lots more about the industrial history of the River Tyne,
                especially its very important role in ship building and armament
                production.
                </li>
                 <br />  
        <br /> 
                <li className="text-left  bg-[#d19b2f] p-4">
                  <div className="text-[#66023c] font-semibold">Information boards:</div>
                  There is a plethora of interesting and informative information
                boards en route during the walks.
                </li>
                 <br />  
        <br /> 
                <li className="text-left  bg-[#d19b2f] p-4">
                  <div className="text-[#66023c] font-semibold">Weather:</div>
                  It was a beautiful, sunny day.
                </li>
              
            </ul>
            <br />
            <div className="bg-[#66023c] text-white font-bold text-decoration-underline">NOT SO GOOD</div>
             <br />  
            <ul className="list-none">
              <li className="text-left  bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Traffic Congestion</div>
                <br />
              Due to the Red Bull Tyne Ride Event, a significant number of roads
              in the centre of Newcastle were closed, which added to the fact it
              was Saturday lunchtime, made the short journey between Tyne
              Riverside Country Park and the parking in the city centre quite
              slow and challenging.{" "}
              </li>
               <br />  
        <br /> 
              <li className="text-left  bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Seating</div>
                There is relatively little opportunity for sitting down between
                the main waymarks, although there is a lovely picnic area at
                Wallsend within the Segendum Fort and some great quayside
                seating and bars and cafés once getting by the millennium and
                Swing Bridges.{" "}
              </li>
               <br />  
        <br /> 
            </ul>
             <div className="bg-[#66023c] text-white font-bold text-decoration-underline">HIKE RATING</div>
              <br /> 
            <ul className="list-none">
              <li className="text-left bg-[#d19b2f] p-4">
                <div className="text-[#66023c] text-center font-semibold">8 (out of 10):</div> 
                This was an interesting and enjoyable walk. There was more opportunity to sit
              down than on Stage 1 of the walk and especially on the stretch
              along the Tyne riverside, a significant amount of history to learn
              about. This really gave a feel, not just of history relating to
              Roman times, but also the medieval and 17th - 19th century
              development of Newcastle city and the surrounding areas.
              </li>
            </ul>
          </div>{" "}
          {/* Closing tag ComponentWalkDetails Class*/}
          <br />
          <div className="font-normal text-left bg-[#d19b2f] p-4">
            Today, we were heading back into Newcastle City Centre to undertake
          Stage 2 of the Hadrian's Wall Path, between Newcastle Gateshead
          millennium Bridge and Tyne Riverside Country Park. We were keen to
          finally get this segment completed as it had already had to be
          postponed on several occasions and the annual Great North Run Event is
          due to be on at the beginning of September, making access into the
          city, which is overwhelmingly busy, very restricted at that time.
          <br />
          <br />
          What we had not counted on though was the fact that today there was
          another large event on in Newcastle, the{" "}
            <Link
              href="https://www.redbull.com/gb-en/events/red-bull-tyne-ride"
              target="_blank"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
               Red Bull Tyne Ride Event{" "}
            </Link>{" "}
           . As a result, it took us over 24 minutes to cover just 7 miles in
          heavily congested traffic through the centre of Newcastle both in the
          morning, and also on our return in the evening....
          <br />
          <br />
          There was plenty to see on today's walk though including Blacksmith's
          Needle, the seven famous bridges of Newcastle upon Tyne, the old Fish
          Market, Dunston Staith, Elswick and Scotwood and the history of
          William Armstrong and his importance in armament production and ship
          building on the Tyne, the Lemington glassworks, the battle of Newburn
          Ford and Tyne Riverside Park.
          <br />
          <br />
          <div className="font-semibold text-md" >
            Blacksmith's Needle:
          </div> was made by the British Artist Blacksmiths Association and unveiled in
          May 1997, with it's constituent parts made at different forges around
          the country.
          <br />
          <br />
          <div className="font-semibold text-md">
            The seven famous bridges of Newcastle upon Tyne (from East to West)
            :
          </div>
          <br />
          <br />
           <div className="slideshowHostPhotoHwp">    
            <div className="text-white text-semibold p-2">Click on the photo below to discover all about the 7 iconic  bridges of Newcastle upon Tyne (from East to West). </div>        
              <Link
                href="https://photos.app.goo.gl/7yMkmcspEhY4kKhx7"
                target="_blank"
              >
                <Image
                   className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[50%] border-solid border-[#bdbeba] border-4 mt-4 mb-6"
                  src={TyneKingGeorgeTitled}
                  alt=""
                />
              </Link>         
          </div>{" "}
          <br />

           This additional{" "}
          <Link
            href="https://englandsnortheast.co.uk/newcastle-quayside-history/"
            target="_blank"
            title="Click here to discover more about Newcastle's seven bridges and quayside"
            className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
          >
            article
          </Link>{" "}
          also has some really interesting information about the bridges and the
          history of Newcastle quayside.
          <br />
          <br />
          <div className="font-semibold text-md"> Fish Market : </div>
          There have been fish stalls on Sandhill going back to Medieval times.
          From 1823 the fish market was held in the new covered section of the
          Guildhall designed by John Dobson. In 1880 a new purpose-built indoor
          fish market was built on Sandhill. Later the fish market moved to
          Clayton Street and then eventually relocated as a dedicated section of
          the Green Market. Today, the old Fish Market, is now 'Riverside', a
          popular live music venue.
          <br />
          <br />
          <div className="font-semibold text-md"> Dunston Staiths : </div>
          Dunston Staiths, on the River Tyne, is believed to be the largest
          timber structure in Europe. It is a Scheduled Monument, Grade II
          listed and is owned by registered charity Tyne and Wear Building
          Preservation Trust (TWBPT). Opened in 1893 by the North East Railway
          Company, it was built to allow large quantities of coal arriving by
          rail from the Durham Coalfields to be loaded directly onto waiting
          colliers (coal ships) ready for the onward journey to customers in
          London and abroad. At the coal industry's peak around 5.5 million tons
          of coal was moved this way each year.
          <br />
          <br />          
                <Image
                   className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[50%] border-solid border-[#bdbeba] border-4 mt-4 mb-6"
                  src={DunstonStaithes}
                  alt=""
                />         
         

           <div className="font-semibold text-md">
            {" "}
            Elswick and Scotwood :{" "}
          </div>
          At its zenith, around the turn of the century, William Armstrong's
          Elswick and Scotswood works employed over 20,000 people. This
          workforce together with their families and the many small trades,
          industries, shops and the like which served them, accounted for the
          growth of most of the western suburbs of Newcastle. Scotswood and
          Elswick, along with four other small townships Jesmond, Heaton, Byker
          and Westgate – were taken into the boundaries of Newcastle Upon Tyne
          under the municipal Corporation Act of 1835. This expansion of the
          city brought the spread of housing into the suburbs. Fuelled by the
          growth of industry on the riverbank, the construction of houses in
          Elswick and Scotswood took place at a rapid and constant pace. In 1851
          the population of Elswick was 3,539.
          <br />
          <br />
          <div className="font-semibold text-md">
            {" "}
            Lemington Glassworks :{" "}
          </div>
          The glassworks site was leased from the Duke of Northumberland by a
          group of local businessmen under the name of the Northumberland Glass
          Company in 1787. Initially flat glass was produced from 4 large glass
          cones. This company owned the glassworks until 1837 when three of the
          glass houses were demolished, leaving the huge cone which is still in
          existence.
          <br />
          <br />
           <Image
                   className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[50%] border-solid border-[#bdbeba] border-4 mt-4 mb-6"
                  src={Lemington}
                  alt=""
                />   

            <div className="font-semibold text-md">
            {" "}
            Battle of Newburn Ford :{" "}
          </div>
          The Battle of Newburn Ford took place in Summer 1640 when a Scottish
          Covenanter army of 20,000 under Alexander Leslie defeated an English
          force of 5,000, led by Lord Conway. The only significant military
          action of the Second Bishop's War, victory enabled the Scots to take
          Newcastle, which provided the bulk of London's coal supplies, and
          allowed them to put pressure on the central government. It is
          important because it had far-reaching consequences for King Charles,
          setting the scene for a civil war in which King Charles lost his
          throne and his head and England became a republic for the first and
          last time under Oliver Cromwell. The main cause of the confrontation
          was religion, particularly as Archbishop William Laud has attempted to
          impose a new prayer book on the Scots.
          <br />
          <br />
           <Image
                   className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[50%] border-solid border-[#bdbeba] border-4 mt-4 mb-6"
                  src={Newburn}
                  alt=""
                />   
          <div className="font-semibold text-md"> Denton Hall Turret : </div>
          Denton Hall Turret lies in the western suburbs of Newcastle, part of a
          63-metre section of Hadrian’s Wall in a small public space adjacent to
          the A186. Built of unusually large stones, the turret has a platform
          in one corner, which probably served as the base for a ladder to reach
          the upper floors. Another 60-metre section of the Wall survives 300
          metres west, alongside the south verge of the A69.
          <br />
          <br />
          <Image
                   className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[50%] border-solid border-[#bdbeba] border-4 mt-4 mb-6"
                  src={DentonHallTurret}
                  alt=""
                /> 
             </div>{" "}
          </div>{" "}
          {/*Closing tag for hwpDailyNarrative div */}
           <br />
           <br />
          <div className="slideshowHostPhotoHwp">
           <div className="text-white text-semibold">Join us on our 2nd day of the Hadrian's Wall Path by clicking on the
            album below and following our narrative by clicking on the added
            comments. </div>
              <Link
                href="https://photos.app.goo.gl/DoVrHqfsWP4d2KWb8"
                target="_blank"
              >
                <Image
                   className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[50%] border-solid border-[#bdbeba] border-4 mt-4 mb-6"
                  src={Branzinos}
                  alt=""
                />
              </Link>
         
          </div>{" "}
          {/* Closing div SlideshowHostPhotoHwp */}
           <br />
           <br />
        </div>{" "}
        {/* Closing tag datenewsDivHwp */}
      </div>
        </div>{" "}
        </div>








         
        < div className="mb-20"> 
      < div className="flex flex-col bg-[#850f55] border-solid border-8 border-gray-600 h-[80%] md:h-[100%]  w-auto leading-1.5 pt-4 md:p-4 lg:p-4">
         < div className="text-sm md:text-md md:text-base max-w-full font-normal md:fount-semibold text-[#2b8936] text-center dark:text-black justify-center items-center">
         <div className="font-semibold pt-2 pb-2 mr-[20%] ml-[20%]  text-white text-center bg-[#66023c] p-2">20th July, 2024, Saturday</div> {/*End of news date block*/}
              <div className="font-bold m-4 pt-2 pb-4 py-2 md:px-4 text-white text-center  bg-[#66023c]">Day 3 - Tyne Riverside Country Park to Whittle Dene Reservoirs: 8.6
            miles on the Hadrian's Wall Path, 9.56 miles in total.</div>      
        
         
            <div className="bg-[#66023c] text-white font-bold">DETAILS OF THE WALK </div>
            <div className="font-semibold text-center border-solid mr-1 ml-1 mt-2 mb-2 px-4 py-4 ">            
        <div className="font-normal pt-2 pb-2  text-black text-center">
             <ul className="list-none">
              <li className="text-left bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Parking:</div>
                Free parking at Tyne Riverside Country Park car park and on the
                roadside-parking in the lay-by at Whittle dene reservoirs.
              </li>
              <br />  
        <br /> 
         <li className="text-left bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Paths:</div>
                 Clear, well-defined and sign-posted paths once you reach the
                far-side of Tyne Riverside Country Park.
              </li>
              <br />  
        <br /> 
              <li  className="text-left  bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Distance:</div>
               9.56 miles in total, of which 8.6 miles on the Hadrian's
                Wall Path.<strong> Ascent:</strong>159 metres, 521 feet.{" "}
              </li>
               <br />  
        <br /> 
              <li  className="text-left bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Refreshments:</div>
              Limited on this section, depending on the time when you are
                undertaking the walk. A special mention is therefore necessary
                for{" "}
                <Link
                  href="https://www.spar.co.uk/store-locator/hal22784-spar-heddon"
                  target="_blank"
                className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
                >
                  Spar Petrol Station, Heddon-on-the-Wall
                </Link>{" "}
                who sell take-away coffees and a good range of drinks and snacks
                . There is also a bathroom here which you can use, as long as
                you are purchasing something at the shop.{" "}
              
              </li>
            </ul>
             <br />  
        <br /> 
            <div className="bg-[#66023c] text-white font-bold text-decoration-underline">GOOD</div>
             <br />  
        <br /> 
        
            <ul className="list-none">
                <li className="text-left bg-[#d19b2f] p-4">
                   <div className="text-[#66023c] font-semibold">Heddon on the Wall: </div>
                  is an interesting and pretty village, situated up on the hill.
                  There are some lovely views from here. There is also, with a
                  small detour, the longest existing segment of the original
                  broad section of Hadrian's Wall. There are plenty of
                  information signs. Most of the year, the Italian bistro and
                  deli should be open, we were just unlucky in it being their
                  summer break.
                              
                </li>
                 <br />  
        <br /> 
    
                <li className="text-left  bg-[#d19b2f] p-4">
                  <div className="text-[#66023c] font-semibold">History : </div>
                  The remains of{" "}
                  <Link
                    href="https://rudchester.org/fort.html"
                    target="_blank"
                    title="Click here to discover more 
                about Vindobala/Rudchester Fort"
                    className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
                  >
                    {" "}
                    Vindobala/Rudchester Fort
                  </Link>{" "}
                  and the information board there are very interesting. <br />
                </li>
                 <br />  
        <br /> 
              
            </ul>
            <br />
            <div className="bg-[#66023c] text-white font-bold text-decoration-underline">NOT SO GOOD</div>
             <br />  
            <ul className="list-none">
              <li className="text-left  bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Waymarks initially:</div>
              Google maps will not take you to the correct place on Tyne Riverside
                Country Park, as we were parking on the main car park by
                Hedley's Riverside Coffee Shop. To get there, when you are
                following Google Maps and entering Tyne Riverside Country Park,
                take a left by the Keelman and Big Lamp Brewery; this will take
                you to the desired car park immediately behind Hedley's
                Riverside Coffee Shop. <br />  <br />  On leaving the car, walk directly
                towards the River Tyne, by the side of the playground, and on
                meeting the main path, turn right towards Wylam (ie. away from
                Newcastle). Keep following this path until you see the Acorn
                sign pointing to the right, at which point you will leave the
                main path and follow the Hadrian's Walk Path.{" "}
              </li>
               <br />  
        <br /> 
              <li className="text-left  bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Mud and flood!</div>
                There were
                occasional extremely muddy sections and one section where the
                path was completely submerged in water up to mid-calf depth,
                calling for an{" "}
                <Link
                  href="https://en.wikipedia.org/wiki/Uncharted_4:_A_Thief%27s_End"
                  target="_blank"
                  className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
                >
                  'Uncharted'
                </Link>{" "}
                type manoeuvre (see photo album). <br />{" "}
              </li>
               <br />  
        <br /> 

        <li className="text-left  bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Refreshments - Lack thereof:</div>
              Refreshments are limited on this section, depending on the time
                when you are undertaking the walk. See "Refreshments" in the
                "Details of the Walk" section above. <br />{" "}
              </li>
               <br />  
        <br /> 
            </ul>
             <div className="bg-[#66023c] text-white font-bold text-decoration-underline">HIKE RATING</div>
              <br /> 
            <ul className="list-none">
              <li className="text-left bg-[#d19b2f] p-4">
                 <div className="text-[#66023c] text-center font-semibold">8 (out of 10):</div> 
                What can we
                say....we have to deduct several points for the muddiness
                underfoot in sections, the flood and the limited opportunity for
                refreshments en-route!
              </li>
            </ul>
          </div>{" "}
          {/* Closing tag ComponentWalkDetails Class*/}
          <br />
          <div className="font-normal text-left bg-[#d19b2f] p-4">
            We were walking today from Tyne Riverside Country Park, which is located 7 miles from the centre of Newcastle,
            up via Heddon-on-the-Wall and over to Whittle dene reservoir. On leaving the Tyne Riverside Country Park, we shortly joined the{" "}
            <Link
              href="https://co-curate.ncl.ac.uk/wylam-wagonway/"
              target="_blank"
                  className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Wylam Waggonway
            </Link>{" "}
            , before starting to head up hill towards Heddon-on-the-Wall.
            <br />
            <br />
            This climb up to Heddon-on-the-Wall is the very final stage of Day 1
            for East to West Hadrian's Wall Path walkers who are undertaking the
            trek over a week, and they complain about it a lot. We can see
            why....we would have not liked to climb up here after 16-18 miles
            walking. However, it was at the start of our walk, so all was well
            and good and we were soon in Heddon-on-the-Wall.
            <br />
            <br />
            It had been quite a long drive out to Tyne Riverside Country Park,
            so we felt it was time for coffees and refreshments. However, it was
            only 11.10am and so the{" "}
            <Link
              href="https://www.facebook.com/THREETUNSHEDDON/?_rdr"
              target="_blank"
                  className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              The Three Tuns
            </Link>{" "}
            and{" "}
            <Link
              href="https://www.vintageinn.co.uk/restaurants/north-east/swan-at-heddon?utm_source=google&utm_medium=organic&utm_campaign=gmb-homepage#/"
              target="_blank"
                  className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Swan{" "}
            </Link>{" "}
            inns were not yet open. Elena identified an alternative, the{" "}
            <Link
              href="https://www.tripadvisor.co.uk/Restaurant_Review-g1653233-d25194372-Reviews-Bell_E_Buon-Heddon_on_the_Wall_Northumberland_England.html"
              target="_blank"
                  className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
              >
              {" "}
              Bell e Buon{" "}
            </Link>{" "}
            Italian Bistro and Deli. However, when we arrived it was closed and
            there was a sign on the door; they were closed for their annual
            holiday..... After taking a small detour to see the longest
            remaining segment of the broad (2.9 metre thickness) section of
            Hadrian's Wall, we were rescued by the{" "}
            <Link
              href="https://www.spar.co.uk/store-locator/hal22784-spar-heddon"
              target="_blank"
                  className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Spar Petrol Station{" "}
            </Link>{" "}
            where we could buy drinks and snacks and use the bathroom
            facilities. So five stars to the Spar Petrol Station,
            Heddon-on-the-Wall!
            <br />
            <br />
            After a short rest, we set on our way again towards the remains of{" "}
            <Link
              href="https://rudchester.org/fort.html"
              target="_blank"
              title="Click here to discover more 
            about Vindobala/Rudchester Fort"
                  className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Vindobala/Rudchester Fort
            </Link>{" "}
            . Then it was on towards Ironsign Farm B and B, which we
            circumnavigated and headed onwards towards Harlow Hill, some 2.25
            miles away. There are some very muddy parts on this segment (see
            photos). But these soon sank into insignificance, when we came to{" "}
            <em>the great flood</em>, which was located just before Albermale
            Barracks. This necessitated some very creative thinking, as
            demonstrated in the photo album.
            <br />
            <br />
            Finally, we were back at Whittle dene Reservoirs and it was time for
            a well-earned lunch, sitting on the picnic tables by the reservoir.
            Then it was time to pack our gear back in the car, return to pick up
            the 2nd car from Tyne Riverside Country Park and to return to{" "}
            <Link
              href="https://www.tripadvisor.co.uk/ShowUserReviews-g1051961-d1508482-r953594113-The_Errington_Coffee_House-Corbridge_Northumberland_England.html"
              target="_blank"
              title="Click here to discover more about the Errington Coffee House"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Errington Coffee House{" "}
            </Link>{" "}
            for some coffees and home-baked cakes.
            <br />
            <br />
          </div>{" "}
          {/*Closing tag for hwpDailyNarrative div */}
          <br />
          <br />
           <br />
           <br />
          <div className="slideshowHostPhotoHwp">
           <div className="text-white text-semibold">Join us on our 3rd day of the Hadrian's Wall Path by clicking on the
            album below and following our narrative by clicking on the added
            comments. </div>
              <Link
                href="https://photos.app.goo.gl/eH7jJcK2NZ5Gh1Kh7"
                target="_blank"
              >
                <Image
                   className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[50%] border-solid border-[#bdbeba] border-4 mt-4 mb-6"
                  src={HeddonItalianClosed2Text}
                  alt=""
                />
              </Link>
         
          </div>{" "}
          {/* Closing div SlideshowHostPhotoHwp */}
           <br />
           <br />
        </div>{" "}
        {/* Closing tag datenewsDivHwp */}
      </div>
        </div>{" "}
        </div>


          
        < div className="mb-20"> 
      < div className="flex flex-col bg-[#850f55] border-solid border-8 border-gray-600 h-[80%] md:h-[100%]  w-auto leading-1.5 pt-4 md:p-4 lg:p-4">
         < div className="text-sm md:text-md md:text-base max-w-full font-normal md:fount-semibold text-[#2b8936] text-center dark:text-black justify-center items-center">
         <div className="font-semibold pt-2 pb-2 mr-[20%] ml-[20%]  text-white text-center bg-[#66023c] p-2">13th July, 2024, Saturday</div> {/*End of news date block*/}
              <div className="font-bold m-4 pt-2 pb-4 py-2 md:px-4 text-white text-center  bg-[#66023c]"> Day 4 - Whittle Dene Reservoirs to Chollerford with Brunton
            Turret(26a) and Chesters Bridge Abutment: 12.6 miles</div>      
        
         
            <div className="bg-[#66023c] text-white font-bold">DETAILS OF THE WALK </div>
            <div className="font-semibold text-center border-solid mr-1 ml-1 mt-2 mb-2 px-4 py-4 ">            
        <div className="font-normal pt-2 pb-2  text-black text-center">
             <ul className="list-none">
              <li className="text-left bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Parking:</div>
               We parked for free on roadside-parking at Whittle dene
                reservoirs and the lay-by on the B6320 just north of the
                roundabout at Chollerford.
              </li>
              <br />  
        <br /> 
         <li className="text-left bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Paths:</div>
                 Clear, well-marked
                and sign-posted paths along the entire route. There is a
                requirement to cross the road at several points, where care is
                needed. This section has the most stiles of any section of the
                walk.
              </li>
              <br />  
        <br /> 
              <li  className="text-left  bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Distance:</div>
               12.6 miles in total, of which on the Hadrian's Wall Path.<strong> Ascent: </strong>246 metres, 810 feet.{" "}
              </li>
               <br />  
        <br /> 
              <li  className="text-left bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Refreshments:</div>
              Coffees and drinks at the Robin Hood Inn, lunch at the Errington
                Coffee House.{" "}
              </li>
            </ul>
             <br />  
        <br /> 
            <div className="bg-[#66023c] text-white font-bold text-decoration-underline">GOOD</div>
             <br />  
        <br /> 
        
            <ul className="list-none">
                <li className="text-left bg-[#d19b2f] p-4">
                   <div className="text-[#66023c] font-semibold">Navigation: </div>
                   This section of the Hadrian's Wall Path is very
                  well-signposted and easy to follow on a clear path.                              
                </li>
                 <br />  
        <br /> 
    
                <li className="text-left  bg-[#d19b2f] p-4">
                  <div className="text-[#66023c] font-semibold">Vallum : </div>
                  Whilst there is not much wall to see in this section, there is
                  plenty to see of the vallum, which can be observed quite
                  clearly. 
                </li>
                 <br />  
        <br /> 

        <li className="text-left  bg-[#d19b2f] p-4">
                  <div className="text-[#66023c] font-semibold">Local hospitality : </div>
                  A big plus for the hospitality of the Robin Hood inn and
                  Errington coffee house en-route. especially given the weather.
                  They were a life-saver.
                </li>
                 <br />  
        <br /> 
              
            </ul>
            <br />
            <div className="bg-[#66023c] text-white font-bold text-decoration-underline">NOT SO GOOD</div>
             <br />  
            <ul className="list-none">
              <li className="text-left  bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Weather:</div>
              It was unfortunately raining all morning, which was a shame.
              </li>
               <br />  
        <br /> 
              <li className="text-left  bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Distance:</div>
               This was (together with the detours), at 12.6 miles, at the
                upper end of an acceptable walk length for the day. However, we
                did not regret having pushed on that bit extra to see the
                Brunton Turret and Chesters Wall Abutment detours.
              </li>
               <br />  
        <br />
            </ul>
             <div className="bg-[#66023c] text-white font-bold text-decoration-underline">HIKE RATING</div>
              <br /> 
            <ul className="list-none">
              <li className="text-left bg-[#d19b2f] p-4">
                 <div className="text-[#66023c] text-center font-semibold">8 (out of 10):</div> 
              </li>
            </ul>
          </div>{" "}
          {/* Closing tag ComponentWalkDetails Class*/}
          <br />
          <div className="font-normal text-left bg-[#d19b2f] p-4">
            Todays walk was to start at{" "}
            <Link
              href="https://www.nwt.org.uk/nature-reserves/whittle-dene"
              target="_blank"
              title="Click here to discover more about Whittledene reservoirs and nature reserve"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Whittle dene reservoirs and nature reserve{" "}
            </Link>{" "}
            and end back at the car at Chollerford roundabout taking in{" "}
            <Link
              href="https://www.nwt.org.uk/nature-reserves/whittle-dene"
              target="_blank"
              title="Click here to discover more about Whittledene reservoirs and nature reserve"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Whittle dene reservoirs and nature reserve{" "}
            </Link>
            , the sites of turrets 17a to 26b and milecastles 17 to 26,{" "}
            <Link
              href="https://robinhoodinnnorthumberland.co.uk"
              target="_blank"
              title="Click here to discover more about the Robin Hood Inn"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Robin Hood Inn{" "}
            </Link>{" "}
            at East Wallhouses (also a stamping station), site of{" "}
            <Link
              href="https://www.u3ahadrianswall.co.uk/halton-chesters-roman-fort/"
              target="_blank"
              title="Click here to discover more about Halton Chesters Fort (Onnum)"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Halton Chesters Fort (Onnum){" "}
            </Link>{" "}
            ,
            <Link
              href="https://www.roman-britain.co.uk/places/portgate/"
              target="_blank"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Port Gate{" "}
            </Link>
            ,{" "}
            <Link
              href="https://www.tripadvisor.co.uk/ShowUserReviews-g1051961-d1508482-r953594113-The_Errington_Coffee_House-Corbridge_Northumberland_England.html"
              target="_blank"
              title="Click here to discover more about the Errington Coffee House"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Errington Coffee House{" "}
            </Link>
            ,{" "}
            <Link
              href="https://fabulousnorth.com/heavenfield/"
              target="_blank"
              title="Click here to discover more about Heavenfield Battle Site and St Oswald's Church"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Heavenfield Battle site and Church of St Oswald{" "}
            </Link>{" "}
            ,{" "}
            <Link
              href="https://www.english-heritage.org.uk/visit/places/planetrees-roman-wall-hadrians-wall/"
              target="_blank"
              title="Click here to discover more about"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Planetrees{" "}
            </Link>{" "}
            ,{" "}
            <Link
              href="https://www.english-heritage.org.uk/visit/places/brunton-turret-hadrians-wall/"
              target="_blank"
              title="Click here to discover more about Brunton Turret"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Brunton Turret (26a){" "}
            </Link>{" "}
            , and the{" "}
            <Link
              href="https://www.english-heritage.org.uk/visit/places/chesters-bridge-abutment-hadrians-wall/"
              target="_blank"
              title="Click here to discover more about Chesters Bridge Abutment"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Chesters Bridge Abutment{" "}
            </Link>{" "}
            .
            <br />
            <br />
            After parking the car, we left{" "}
            <Link
              href="https://www.nwt.org.uk/nature-reserves/whittle-dene"
              target="_blank"
              title="Click here to discover more about Whittledene reservoirs and nature reserve"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Whittle dene reservoirs and nature reserve{" "}
            </Link>{" "}
            just before 9.30am in steady rain. Our first stop was intended to be
            the{" "}
            <Link
              href="https://robinhoodinnhadrianswall.co.uk/"
              target="_blank"
              title="Click here to discover more about the Robin Hood Inn"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Robin Hood Inn{" "}
            </Link>{" "}
            at East Wallhouses, which is also a stamping station for our
            Hadrian's Wall passports. The Inn apparently dates back to 1752 and
            is constructed with traditional stone, which is thought to have been
            sourced from Hadrian’s Wall. The Inn is often mentioned by Hadrian's
            Wall walkers and local people and in our opinion, having been there,
            with good reason. In spite of it being 10am in the morning and the
            owners in the middle of cleaning after breakfast, when we appeared
            through the door soaking wet, they were more than happy to get us
            seated, serve us some coffees and chat about their experience doing
            what we are doing ie. walking the Wall in stages at the weekend,
            last year. We understand that there is also the Vallum Farm Tearoom
            on the other side of the road as a possible place for refreshments,
            although we have not personally visited and it is important to
            distinguish this from the restaurant at that location.
            <br />
            <br />
            Fully refreshed and dried out a little, and with our passports
            successfully stamped, we recommenced our journey. The path follows
            parallel to the B6318 but does cross this road a number of times, so
            it is necessary to take care. There are many stiles also along this
            section, which can become a little tiring after a while, but we
            would not advise being tempted to walk on the road, as some people
            were doing as the traffic travels very fast and your chances of
            surviving intact are questionable! The path anyway is well
            demarcated and signposted and whilst there is a reasonable ascent on
            all this stretch today, it is very gradual and therefore you do not
            really notice it. It is also a great stretch for visualising at
            length, and really getting a feel for the{" "}
            <Link
              href="https://en.wikipedia.org/wiki/Vallum_(Hadrian%27s_Wall)"
              target="_blank"
              title="Click here to discover more about the Vallum"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Vallum{" "}
            </Link>{" "}
            , and you cannot achieve this the same from the road.
            <br />
            <br />
            Eventually, we came to the site of{" "}
            <Link
              href="https://www.u3ahadrianswall.co.uk/halton-chesters-roman-fort/"
              target="_blank"
              title="Click here to discover more about Halton Chesters Fort (Onnum)"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Halton Chesters Fort (Onnum){" "}
            </Link>
            , near Halton Castle before finally reaching Errington roundabout,
            the site of{" "}
            <Link
              href="https://www.roman-britain.co.uk/places/portgate/"
              target="_blank"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Port Gate{" "}
            </Link>
            , and our lunch stop <em>(yeah!)</em>{" "}
            <Link
              href="https://www.tripadvisor.co.uk/ShowUserReviews-g1051961-d1508482-r953594113-The_Errington_Coffee_House-Corbridge_Northumberland_England.html"
              target="_blank"
              title="Click here to discover more about the Errington Coffee House"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Errington Coffee House{" "}
            </Link>{" "}
            , which was <em>extremely</em> busy, so we would advise making sure
            you are there promptly if you are intending to eat there. It is very
            reasonably-priced.
            <br />
            <br />
            After lunch, it was time to head towards an important 7th century
            battle site, the{" "}
            <Link
              href="https://fabulousnorth.com/heavenfield/"
              target="_blank"
              title="Click here to discover more about Heavenfield Battle Site and St Oswald's Church"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Heavenfield Battle site and Church of St Oswald{" "}
            </Link>{" "}
            and then{" "}
            <Link
              href="https://www.english-heritage.org.uk/visit/places/planetrees-roman-wall-hadrians-wall/"
              target="_blank"
              title="Click here to discover more about"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Planetrees{" "}
            </Link>{" "}
            which was where can be seen a really good example of a piece of the
            Roman Wall which demonstrates the reduction from the building of the
            Wall initially as broad gauge and subsequently, seemingly for the
            purposes of increased speed and reduction in cost, as narrow gauge.
            We were quite tired by now but it was decided that we could not
            venture out all this way without also adding in the detours to{" "}
            <Link
              href="https://www.english-heritage.org.uk/visit/places/brunton-turret-hadrians-wall/"
              target="_blank"
              title="Click here to discover more about Brunton Turret"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Brunton Turret (26a){" "}
            </Link>{" "}
            , and the{" "}
            <Link
              href="https://www.english-heritage.org.uk/visit/places/chesters-bridge-abutment-hadrians-wall/"
              target="_blank"
              title="Click here to discover more about Chesters Bridge Abutment"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Chesters Bridge Abutment{" "}
            </Link>
            . The Chesters Bridge Abutment detour, alongside the east bank of
            the river North Tyne does, at the end of a long day, seem like a bit
            of a trek, but having undertaken it, it is in our opinion well worth
            the effort.
          </div>{" "}
          {/*Closing tag for hwpDailyNarrative div */}
          <br />
          <br />
           <br />
           <br />
          <div className="slideshowHostPhotoHwp">
           <div className="text-white text-semibold">Join us on our 4th day of the Hadrian's Wall Path by clicking on the
            album below and following our narrative by clicking on the added
            comments. </div>
              <Link
                href="https://photos.app.goo.gl/K7VFmkjym23aazvd8"
                target="_blank"
              >
                <Image
                   className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[50%] border-solid border-[#bdbeba] border-4 mt-4 mb-6"
                  src={WhittleChollerford}
                  alt=""
                />
              </Link>
         
          </div>{" "}
          {/* Closing div SlideshowHostPhotoHwp */}
           <br />
           <br />
        </div>{" "}
        {/* Closing tag datenewsDivHwp */}
      </div>
        </div>{" "}
        </div>

          
        < div className="mb-20"> 
      < div className="flex flex-col bg-[#850f55] border-solid border-8 border-gray-600 h-[80%] md:h-[100%]  w-auto leading-1.5 pt-4 md:p-4 lg:p-4">
         < div className="text-sm md:text-md md:text-base max-w-full font-normal md:fount-semibold text-[#2b8936] text-center dark:text-black justify-center items-center">
         <div className="font-semibold pt-2 pb-2 mr-[20%] ml-[20%]  text-white text-center bg-[#66023c] p-2">29th June, 2024, Saturday</div> {/*End of news date block*/}
              <div className="font-bold m-4 pt-2 pb-4 py-2 md:px-4 text-white text-center  bg-[#66023c]"> Day 5 - Chollerford to Brocolitia/Carrawburgh Roman Fort: 4miles</div>      
        
         
            <div className="bg-[#66023c] text-white font-bold">DETAILS OF THE WALK </div>
            <div className="font-semibold text-center border-solid mr-1 ml-1 mt-2 mb-2 px-4 py-4 ">            
        <div className="font-normal pt-2 pb-2  text-black text-center">
             <ul className="list-none">
              <li className="text-left bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Parking:</div>
               Brocolitia Roman Fort Car Park and lay-by on B6320 just north of
                the roundabout at Chollerford.
              </li>
              <br />  
        <br /> 
         <li className="text-left bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Paths:</div>
                 The Hadrian's Wall path is well-marked, clear and easy to
                following in this segment, just follow the Acorn signs.{" "}
              </li>
              <br />  
        <br /> 
              <li  className="text-left  bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Distance:</div>
              4 miles on the Hadrian's Wall Path<strong> Ascent: </strong> 215 metres, 705 feet.{" "}
              </li>
               <br />  
        <br /> 
              <li  className="text-left bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Refreshments:</div>
              English Heritage Café at Chester's Roman Fort. There is also the
                Corbridge Coffee Company mobile van daily on Broccolitia Fort
                car park.
              </li>
            </ul>
             <br />  
        <br /> 
            <div className="bg-[#66023c] text-white font-bold text-decoration-underline">GOOD</div>
             <br />  
        <br /> 
        
            <ul className="list-none">
                <li className="text-left bg-[#d19b2f] p-4">
                   <div className="text-[#66023c] font-semibold">Views: </div>
                 We gained over 200 metres on this walk, as we climbed out of
                  the valley at Chollerford through which the North Tyne River
                  runs and up onto the ridge. There were therefore some
                  extensive and impressive views looking in all directions as
                  the terrain opened out.                              
                </li>
                 <br />  
        <br /> 
    
                <li className="text-left  bg-[#d19b2f] p-4">
                  <div className="text-[#66023c] font-semibold">Walk : </div>
                   Very enjoyable walk with extensive views. Easy to navigate.
                </li>
                 <br />  
        <br /> 

        <li className="text-left  bg-[#d19b2f] p-4">
                  <div className="text-[#66023c] font-semibold">History : </div>
                   Chester's Roman Fort, which is , together with Vindolanda and
                  Housesteads, one of the most outstanding Roman Forts on the
                  Hadrian's Wall path and we would suggest setting aside 2 hours
                  to visit the fort and museum.
                </li>
                 <br />  
        <br /> 

          <li className="text-left  bg-[#d19b2f] p-4">
                  <div className="text-[#66023c] font-semibold">Paths : </div>
                   The rangers keep a wide path of grass cut shorter and request
                  that you walk 2 abreast to reduce the risk of erosion, which
                  we attempted as much as possible to do. This made walking on
                  the paths very straightforward.
                </li>
                 <br />  
        <br /> 

        <li className="text-left  bg-[#d19b2f] p-4">
                  <div className="text-[#66023c] font-semibold">Weather : </div>
                    Whilst a rather cloudy day, the wind had dropped from
                  the previous day and the rainy showers which had been forecast
                  did not materialise until later in the day.{" "}
                </li>
                 <br />  
        <br /> 

              
            </ul>
            <br />
            <div className="bg-[#66023c] text-white font-bold text-decoration-underline">NOT SO GOOD</div>
             <br />  
            <ul className="list-none">
              <li className="text-left  bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Public Transport:</div>
               The AD122 bus, which we had planned on taking from Broccolitia
                Fort back to Chollerford only runs every 2 hours, which meant
                that, in order to have plenty time to see Chester's Fort, on
                this occasion we had to take 2 cars, which was not so good.
              </li>
               <br />  
        <br /> 
             
            </ul>
             <div className="bg-[#66023c] text-white font-bold text-decoration-underline">HIKE RATING</div>
              <br /> 
            <ul className="list-none">
              <li className="text-left bg-[#d19b2f] p-4">
                 <div className="text-[#66023c] text-center font-semibold">9 (out of 10):</div> 
              </li>
            </ul>
          </div>{" "}
          {/* Closing tag ComponentWalkDetails Class*/}
          <br />
          <div className="font-normal text-left bg-[#d19b2f] p-4">
             This was a reasonably short walk today, being only 4 miles, but we
            had chosen this option deliberately to allow us plenty of time to
            see
            <Link
              href="https://www.english-heritage.org.uk/visit/places/chesters-roman-fort-and-museum-hadrians-wall/"
              target="_blank"
              title="Click here to discover more about Chester's Roman Fort"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Chester's Roman Fort and Museum{" "}
            </Link>{" "}
            .
            <br />
            <br />
            This segment is the first of 4 segments which form what is widely
            considered to be the finest section of the Hadrian's Wall Path
            (HWP). These 4 sections are also the best-preserved segments of the
            wall and it becomes obvious as you walk along the path of the wall
            why this should be, as the landscape becomes increasingly wild and
            rugged.
            <br />
            <br />
            First of all though, it was time to get our passports stamped at
            Chester's Fort. The only problem being it was not very clear which
            section of the passport was for which stamp, so we ended up
            mistakenly stamping Chester's in the Housesteads slot! Not to worry
            though, we are sure Northumberland National Parks are used to this
            and Elena said it was all part and parcel of the Hadrian's Wall
            experience!...
            <br />
            <br />
            Key points and way-marks on the walk from Chollerford to
            Brocolitia/Carrawburgh Roman Fort include Chester's Roman Fort,
            Black Carts wall and Turret (29A), Limestone Corner, the trig point
            at 250 metres and Limestone corner.
            <br />
            <br />
            <strong>Turret 29A (Black Carts):</strong> Black Carts is a 200 metre section of
            narrow wall. However, the accompanying Black Carts Turret was built
            in 122AD for the originally planned 3 metre width broad wall, before
            the decision was made to build with a reduced width of 1.8 metres.
            The turrets and small section of wall were built first and then the
            rest of the wall afterwards. Just to the north of Black Carts Turret
            the ditch can clearly be seen where, when John Clayton first
            excavated the site in 1873, he found 3 'centurial' stones showing
            the names of soldiers who built the section of wall.
            <br />
            <br />
           <strong> Trig point at 250 metres: </strong>Following a climb of about 200 metres from
            Chollerford, the views now started to open up here. The Cheviot
            Hills came into view in the north and{" "}
            <Link
              href="https://www.chipchasecastle.com/"
              target="_blank"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              Chipchase Castle
            </Link>{" "}
            which has a 14th century Pele tower and a 17th century Jacobean
            house attached. It is a scheduled ancient monument and Grade 1
            listed building.
            <br />
            <br />
            <strong>Limestone Corner: </strong>At Limestone Corner, there is an unfinished
            section of ditch filled with abandoned stone blocks: one slab still
            show the holes chiselled by the Romans to split the rock. The stone
            here is hard basalt and it appears that the Romans found this too
            hard to work with and gave up trying to complete this part of the
            ditch. Unfortunately, we did not take any photos of Limestone
            Corner, but this{" "}
            <Link
              href="https://perlineamvalli.wordpress.com/tag/limestone-corner/"
              target="_blank"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Per Lineam Valli{" "}
            </Link>{" "}
            website has some interesting information and photographs
            <br />
            <br />
            Once we had successfully reached Brocolitia/Carrawburgh Military
            Fort we returned to the car in order to travel back to Chester's
            Roman Fort and spent the remainder of the afternoon there exploring
            fully the fort and museum, leaving the exploration of Brocolitia
            Fort for the following morning.
            <br />
            <br />
            <Link
              href="https://www.english-heritage.org.uk/visit/places/chesters-roman-fort-and-museum-hadrians-wall/"
              target="_blank"
              title="Click here to discover more about Chester's Roman Fort"
              className="text-decoration-underline text-black font-bold md:font-bold underline"
            >
              {" "}
              Chester's Roman Fort and Museum{" "}
            </Link>{" "}
            are managed by English Heritage so members can obtain free entry
            using their membership cards. Chester's Roman Fort is one of the
            best preserved Roman Ruins in Britain and is certainly, together
            with{" "}
            <Link
              href="https://www.english-heritage.org.uk/visit/places/chesters-roman-fort-and-museum-hadrians-wall/history/collection/"
              target="_blank"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              John Clayton's museum{" "}
            </Link>{" "}
            , one of our favourites. In 1843, John Clayton inherited the site
            from his father, who had previously turfed over the ruins. John
            Clayton excavated many parts of the fort and created the museum to
            house and maintain the many exhibits both from the fort and other
            segments of the wall. He also developed such a fascination for
            Hadrian's Wall that he bought up many other large areas of the wall.
            By the time John died in 1890 he owned five forts – Chesters,
            Carrawburgh, Housesteads, Vindolanda and Carvoran – as well as most
            of the Wall within this 20 mile stretch.
            <br />
            <br />
            If you are visiting the Chesters site, we would strongly advise
            making sure that you leave enough time and that you also have time
            to see the John Clayton Museum and the Chester's Bridge abutment
            detour right down to the river (see our previous, Day 4 entry
            regarding the Chesters Bridge abutment detour), where a narrow
            footbridge originally carried the Wall across the River North Tyne,
            but the Romans later replaced this with an impressive stone road
            bridge. The remains of the stone abutment that joined the bridge to
            the riverbank survive, along with the foundations of the tower and a
            section of the wall.
            <br />
            <br />
            The fort was situated astride Hadrian's Wall, guarding the bridge
            over the river North Tyne and was occupied by a 500 strong cavalry
            regiment, the ala II Asturum (Second Asturian Cavalry Unit) from
            Asturia in Northern Western Spain. There are plenty of information
            boards to provide further explanation for the various areas as you
            go around the fort.
          </div>{" "}
          {/*Closing tag for hwpDailyNarrative div */}
          <br />
          <br />
           <br />
           <br />
          <div className="slideshowHostPhotoHwp">
           <div className="text-white text-semibold">Join us on our 5th day of the Hadrian's Wall Path by clicking on the
            album below and following our narrative by clicking on the added
            comments. </div>
              <Link
                href="https://photos.app.goo.gl/DzGAUH9XyUbsxUft6"
                target="_blank"
              >
                <Image
                   className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[50%] border-solid border-[#bdbeba] border-4 mt-4 mb-6"
                  src={ChollerfordBroccolitia}
                  alt=""
                />
              </Link>
         
          </div>{" "}
          {/* Closing div SlideshowHostPhotoHwp */}
           <br />
           <br />
        </div>{" "}
        {/* Closing tag datenewsDivHwp */}
      </div>
        </div>{" "}
        </div>








         <div>
        < div className="mb-20"> 
      < div className="flex flex-col bg-[#850f55] border-solid border-8 border-gray-600 h-[80%] md:h-[100%]  w-auto leading-1.5 pt-4 md:p-4 lg:p-4">
         < div className="text-sm md:text-md md:text-base max-w-full font-normal md:fount-semibold text-[#2b8936] text-center dark:text-black justify-center items-center">
         <div className="font-semibold pt-2 pb-2 mr-[20%] ml-[20%]  text-white text-center bg-[#66023c] p-2">7th July 2024, Sunday</div> {/*End of news date block*/}
              <div className="font-bold m-4 pt-2 pb-4 py-2 md:px-4 text-white text-center  bg-[#66023c]"> Day 8 - Cawfields Quarry to Gilsland: 6 miles.</div>               
            <div className="bg-[#66023c] text-white font-bold">DETAILS OF THE WALK </div>
            <div className="font-semibold text-center border-solid mr-1 ml-1 mt-2 mb-2 px-4 py-4 ">            
        <div className="font-normal pt-2 pb-2  text-black text-center">
             <ul className="list-none">
              <li className="text-left bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Parking:</div>
                We parked at{" "}
                <Link
                  href="https://www.northumberlandnationalpark.org.uk/places-to-visit/hadrians-wall/cawfields/"
                  target="_blank"
                  title="Click here to discover more about Cawfield Quarry Car Park"
                  className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
                >
                  {" "}
                  Cawfield Quarry Car Park{" "}
                </Link>{" "}
                and on Railway Terrace in Gilsland, where there is free on-road
                parking. Cawfields Car Park is run by Northumberland National
                Park and we had bought an annual Hadrian's Wall parking pass for
                one of the cars, so we left the car with the pass at Cawfield
                Quarry.{" "}
                <Link
                  href="https://www.northumberlandnationalpark.org.uk/visitor-info/car-parks/"
                  target="_blank"
                 className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
                >
                  {" "}
                  Annual passes{" "}
                </Link>{" "}
                are available from{" "}
                <Link
                  href="https://www.thesill.org.uk/"
                  target="_blank"
                  title="Click here to discover more about The Sill Visitor's Centre"
                  className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
                >
                  {" "}
                  The Sill{" "}
                </Link>{" "}
                .
              </li>
             
              <br />  
        <br /> 
         <li className="text-left bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Paths:</div>
                A clear, well-defined path firstly through the ruins of
                Aesica (Great Chesters) Roman Fort and then a gradual climb up
                onto Walltown Crags, with some ascents and descents similar to
                yesterday before dropping down to the visitor's centre at
                Walltown Quarry. On leaving the Quarry, the terrain evens out
                considerably and becomes more undulating as it heads out towards
                Gilsland.                
              </li>
              <br />  
              <br /> 
              <li  className="text-left  bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Distance:</div>
              6 miles on the Hadrian's Wall Path.<strong> Ascent:</strong>325 metres, 1066 feet.{" "}
              </li>
               <br />  
        <br /> 
              <li  className="text-left bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Refreshments:</div>
                Lanercost Priory tearooms.                .
              </li>
            </ul>
             <br />  
        <br /> 
            <div className="bg-[#66023c] text-white font-bold text-decoration-underline">GOOD</div>
             <br />  
        <br /> 
        
            <ul className="list-none">
                <li className="text-left bg-[#d19b2f] p-4">
                   <div className="text-[#66023c] font-semibold">Views: </div>
                 Spectacularly good views from the top of Walltown Crags,
                  stretching for miles. It is really easy to get a feeling of
                  lived-experience of being a legionnary up on the wall
                  patrolling and keeping guard from the milecastles and turrets.
                  The views were better today than expected and come a close
                  second to those of yesterday's walk.wn Roman signal tower
                  together with Lanercost Priory.{" "}                              
                </li>
                 <br />  
        <br /> 
    
                <li className="text-left  bg-[#d19b2f] p-4">
                  <div className="text-[#66023c] font-semibold">History : </div>
                  The ruins of Aesica (Great Chesters) Fort are less well
                  organised and therefore have more of a romantic feel than some
                  of the other forts. The opportunity to go and look at the 14th
                  century Thirlwall Castle en route to Gilsland was also very
                  interesting.{" "}.
                </li>
                 <br />  
        <br /> 
        <li className="text-left  bg-[#d19b2f] p-4">
                  <div className="text-[#66023c] font-semibold">Walk : </div>
                  Another high level walk and interestingly, a greater overall
                  ascent than yesterday. The wall is pretty well-preserved in
                  the section running down to Walltown Quarry Car Park and
                  Visitor's Centre and the Roman Army Museum/Magnis (Carvoran)
                  Fort.{" "}
                </li>
                 <br />  
        <br />               
            </ul>
            <br />
            <div className="bg-[#66023c] text-white font-bold text-decoration-underline">NOT SO GOOD</div>
             <br />  
            <ul className="list-none">
              <li className="text-left  bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">  Path on the descents Walltown Crags:{" "}:</div>
                Whilst the path was at all times clearly marked and signposted,
                the paths were not maintained on the descents as well as on the
                previous days section of walking between Housesteads and
                Cawfields Quarry, presumably in part because this section of the
                path is not under the care of the National Trust.
              </li>
               <br />  
        <br /> 

        <li className="text-left  bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold"> Aesica fort:{" "}:</div>
                Whilst in one respect, the lack of any information boards at
                Aesica Fort led to a more romantic feel, it would have been
                helpful to have some additional information on site. We have a
                feeling we may have missed some things here and so intend to
                return for a shorter walk and more detailed visit one day in the
                coming months.
              </li>
               <br />  
        <br /> 
            </ul>
             <div className="bg-[#66023c] text-white font-bold text-decoration-underline">HIKE RATING</div>
              <br /> 
          <ul className="list-none">
              <li className="text-left bg-[#d19b2f] p-4">
                <div className="text-[#66023c] text-center font-semibold">10 (out of 10):</div> 
              </li>
            </ul>
          </div>{" "}
          {/* Closing tag ComponentWalkDetails Class*/}
          <br />
          <div className="font-normal text-left bg-[#d19b2f] p-4">
            Todays walk was to start in Cawfields car park and end in Gilsland
            village taking in Aesica (Great Chesters) Roman Fort, past the sites
            of Turrets 43a and 43b where no visible remains exist, Walltown
            Crags including Turrets 44b(Mucklebank) and 45a and the site of the
            previous Milecastle 45, Walltown Quarry, Thirlwall Castle , Holmhead
            Guesthouse, Gap Farm and Gilsland, 2 nesting kestrels and a Texel
            Mule cross bred sheep.
            <br />
            <br />
            Aesica Fort, whose modern name is Great Chesters (not to be confused
            with Chesters Fort at Chollerford) was the ninth fort on Hadrian's
            Wall. It lies 6.0 miles to the east of Housesteads (Roman name
            Vercovicium) and 6.5 miles to the west of Birdoswald Fort (Roman
            name Banna). Its main purpose was to guard the Caw Gap where the
            Haltwhistle Burn crosses the Wall. It was built relatively late
            (AD128), over the site of the existing Milecastle 43. There are no
            visible remains of Milecastle 43's two accompanying turrets: turret
            43A and turret 43B either. At 3 acres Aesica Fort was smaller than
            some of the other forts. More information about Aesica fort can be
            found{" "}
            <Link
              href="https://perlineamvalli.wordpress.com/2015/10/17/the-best-bits-of-hadrians-wall-the-forts-great-chesters/"
              target="_blank"
               className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              here{" "}
            </Link>{" "}
            and{" "}
            <Link
              href="https://www.u3ahadrianswall.co.uk/great-chester-roman-fortaesica/"
              target="_blank"
               className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              here{" "}
            </Link>{" "}
            .
            <br />
            <br />
            Walltown Crags: There are a number of routes over Walltown Crags and
            any can be used, but the top route offers the most spectacular views
            and is well worth the climb, so this was the route we used. It is
            also the route we suggest to others to use if walking this route (as
            long as you are up for the climb). We passed the previous site of
            Milecastle 45 which is located on the top of Walltown Crags. The
            walls have been robbed, so little remains. We understand however
            that the site is still{" "}
            <Link
              href="https://en.wikipedia.org/wiki/Milecastle_45"
              target="_blank"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              visible as earthworks on aerial photographs{" "}
            </Link>{" "}
            . As we walked along the crags, we saw 2 Kestrels circling overhead
            which appeared to be nesting in the walls of the crag.
            <br />
            <br />
            Turret 44b (Mucklebank) has magnificent views over the surrounding
            landscape. It is unusual in that it is built into a corner of
            Hadrian's Wall. Dropping down below Turret 44b(Mucklebank) is the
            alleged site of King Arthur's Well , although there is no sign of it
            today. Turret 45a is built high on Walltown Crags. It is thought
            that the wall and turret were built separately as, whilst the Wall's
            foundations run through the turret, above ground the wall and turret
            are separate structures and there are no wing walls and the wall
            meets the turret at an angle.This suggests they were probably built
            separately.
            <br />
            <br />
            Finally we dropped down to the Walltown Quarry car park where there
            is a very pleasant small Visitors Centre, where you can buy some hot
            drinks from a machine and there are picnic tables to sit on by the
            quarry. We took the opportunity to have some lunch here. There are
            also a number of walks you can do from this site, for which there
            are information boards. It is one of the pick up points for the
            <Link
              href="https://www.gonortheast.co.uk/ad122"
              target="_blank"
              title="Click here to discover more 
            about the AD 122 bus service"
             className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline">
              {" "}
              AD122 bus{" "}
            </Link>{" "}
            run by Go North East and in fact the bus arrived whilst we were
            there. The{" "}
            <Link
              href="https://romanarmymuseum.com/"
              target="_blank"
              title="Click here to discover more about the Roman Army Museum"
               className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Roman Army Museum{" "}
            </Link>{" "}
            on the site of the old Roman Fort Magnis (Carvoran) is near here,
            although this requires a full half-day visit, so we will return to
            this on a separate occasion on a poor-weather day over the
            forthcoming months.
            <br />
            <br />
            We then headed over to{" "}
            <Link
              href="https://www.northumberlandnationalpark.org.uk/places-to-visit/hadrians-wall/thirlwall-castle/"
              target="_blank"
              title="Click here to discover more about Thirlwall Castle"
               className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Thirlwall Castle{" "}
            </Link>{" "}
            , which is a 12th century castle which was later strengthened using
            stones from nearby Hadrian’s Wall. This link also includes a
            hyperlink to an interesting leaflet about Thirlwall castle produced
            by Northumberland National Park. It was then time to cross the
            railway line carefully and head on for the final couple of miles
            towards Gilsland where we would end the walk.
            <br />
            <br />
            We invite you to join us on our 8th day of the Hadrian's Wall Path
            by clicking on the album below and following our narrative by
            clicking on the added comments.
          </div>{" "}
          {/*Closing tag for hwpDailyNarrative div */}
          <div className="slideshowHostPhotoHwp">
            <figure>
              <Link
                href="https://photos.app.goo.gl/9oqpf1quTChrLdXY6"
                target="_blank"
              >
                <Image
                   className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[50%] border-solid border-[#bdbeba] border-4 mt-4 mb-6"
                  src={ThirlwallElena1}
                  alt=""
                />
              </Link>
            </figure>
          </div>{" "}
          {/* Closing div SlideshowHostPhotoHwp */}
        </div>{" "}
        {/* Closing tag datenewsDivHwp */}
      </div>
         
          </div>{" "}
          {/* Closing div SlideshowHostPhotoHwp */}
           <br />
           <br />
        </div>{" "}
        {/* Closing tag datenewsDivHwp */}
     
         


           <div>
        < div className="mb-20"> 
      < div className="flex flex-col bg-[#850f55] border-solid border-8 border-gray-600 h-[80%] md:h-[100%]  w-auto leading-1.5 pt-4 md:p-4 lg:p-4">
         < div className="text-sm md:text-md md:text-base max-w-full font-normal md:fount-semibold text-[#2b8936] text-center dark:text-black justify-center items-center">
         <div className="font-semibold pt-2 pb-2 mr-[20%] ml-[20%]  text-white text-center bg-[#66023c] p-2">28th July 2024, Sunday</div> {/*End of news date block*/}
              <div className="font-bold m-4 pt-2 pb-4 py-2 md:px-4 text-white text-center  bg-[#66023c]"> Day 9 - Gilsland to Lanercost: 6.5 miles on the Hadrian's Wall Path,
            7.5 miles in total.</div>               
            <div className="bg-[#66023c] text-white font-bold">DETAILS OF THE WALK </div>
            <div className="font-semibold text-center border-solid mr-1 ml-1 mt-2 mb-2 px-4 py-4 ">            
        <div className="font-normal pt-2 pb-2  text-black text-center">
             <ul className="list-none">
              <li className="text-left bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Parking:</div>
                The free car park by the River Irthing at Lanercost and the free
                on-street parking at Railway Terrace, Gilsland.
              </li>
              <br />  
        <br /> 
         <li className="text-left bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Paths:</div>
                The paths are clear and well-signposted. There is a diversion in
                place (hopefully only temporary) between Poltross Burn
                Milecastle and the Willowford segment of the wall, but in actual
                fact this takes you through Gilsland village which is an
                interesting little village with the possibility of refreshments
                (within opening hours) at the{" "}
                <Link
                  href="https://www.facebook.com/houseofmegtearooms/?locale=en_GB"
                  target="_blank"
                  className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
                >
                  House of Meg
                </Link>{" "}
                , or the{" "}
                <Link
                  href="https://www.facebook.com/bridgeinngilsland/?locale=en_GB"
                  target="_blank"
                  className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
                >
                  {" "}
                  Bridge Inn{" "}
                </Link>{" "}
                . Normally, there is also the{" "}
                <Link
                  href="https://www.thesamson.co.uk/"
                  target="_blank"
                  className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
                >
                  {" "}
                  Samson Inn{" "}
                </Link>{" "}
                which is a community pub owned by three local farmers. However
                it is currently closed for refurbishment.{" "}
              </li>
              <br />  
        <br /> 
              <li  className="text-left  bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Distance:</div>
              6.5 miles on the Hadrian's Wall Path, 7.5 miles in total<strong> Ascent:</strong>191 metres, 623 feet.{" "}
              </li>
               <br />  
        <br /> 
              <li  className="text-left bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Refreshments:</div>
              The{" "}
                <Link
                  href="https://www.facebook.com/houseofmegtearooms/?locale=en_GB"
                  target="_blank"
                  className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
                >
                  House of Meg
                </Link>{" "}
                and the{" "}
                <Link
                  href="https://www.facebook.com/bridgeinngilsland/?locale=en_GB"
                  target="_blank"
                  className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
                >
                  {" "}
                  Bridge Inn{" "}
                </Link>{" "}
                .
              </li>
            </ul>
             <br />  
        <br /> 
            <div className="bg-[#66023c] text-white font-bold text-decoration-underline">GOOD</div>
             <br />  
        <br /> 
        
            <ul className="list-none">
                <li className="text-left bg-[#d19b2f] p-4">
                   <div className="text-[#66023c] font-semibold">History: </div>
                 There was a surprising amount of things of historical interest
                  on this stretch; certainly more than we had anticipated,
                  including some really well-preserved segments of wall, the
                  Willowford Bridge abutment showing evidence that even the
                  Roman's experienced damage due to flooding, a centurial stone,
                  Birdoswald Roman Fort and the only known Roman signal tower
                  together with Lanercost Priory.{" "}                              
                </li>
                 <br />  
        <br /> 
    
                <li className="text-left  bg-[#d19b2f] p-4">
                  <div className="text-[#66023c] font-semibold">Countryside : </div>
                   Picturesque, lush, rolling countryside.
                </li>
                 <br />  
        <br /> 
        <li className="text-left  bg-[#d19b2f] p-4">
                  <div className="text-[#66023c] font-semibold">Refreshments : </div>
                   There was ample opportunity for refreshments both in Gilsland,
                  at Birdoswald café and at Lanercost tearooms.{" "}
                </li>
                 <br />  
        <br /> 
        <li className="text-left  bg-[#d19b2f] p-4">
                  <div className="text-[#66023c] font-semibold">Weather : </div>
                   It was a pleasantly warm, sunny day; great walking weather.{" "}
                </li>
                 <br />  
        <br /> 
              
            </ul>
            <br />
            <div className="bg-[#66023c] text-white font-bold text-decoration-underline">NOT SO GOOD</div>
             <br />  
            <ul className="list-none">
              <li className="text-left  bg-[#d19b2f] p-4">
                <div className="text-[#66023c] font-semibold">Summer holiday season:</div>
            It is now the peak Summer holiday season and the number of
                visitors reflected that.
              </li>
               <br />  
        <br /> 
            </ul>
             <div className="bg-[#66023c] text-white font-bold text-decoration-underline">HIKE RATING</div>
              <br /> 
          <ul className="list-none">
              <li className="text-left bg-[#d19b2f] p-4">
                <div className="text-[#66023c] text-center font-semibold">10 (out of 10):</div> 
              This was a far more enjoyable and interesting section of the wall than we
                had anticipated. There are still some significant sections of
                Roman Wall remaining and the line of the ditch can be followed
                easily. It helped for the first time to cement an understanding
                of how Lanercost Priory fits into the history and landscape of
                Hadrian's Wall. It also enabled us to discover Gilsland, a small
                village we had previously only driven through to reach
                elsewhere...
              </li>
            </ul>
          </div>{" "}
          {/* Closing tag ComponentWalkDetails Class*/}
          <br />
          <div className="font-normal text-left bg-[#d19b2f] p-4">
            Today we walked the 9th stage of the Hadrian's Wall path, taking us
            from{" "}
            <Link
              href="https://www.visitcumbria.com/car/gilsland/"
              target="_blank"
              title="Click here to discover more about Gilsland"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Gilsland{" "}
            </Link>{" "}
            , via{" "}
            <Link
              href="https://www.english-heritage.org.uk/visit/places/birdoswald-roman-fort-hadrians-wall/"
              target="_blank"
              title="Click here to discover more about Birdoswald Fort"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Birdoswald Fort{" "}
            </Link>{" "}
            , over to{" "}
            <Link
              href="https://www.english-heritage.org.uk/visit/places/lanercost-priory/"
              target="_blank"
              title="Click here to discover more about Lanercost Priory"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Lanercost Priory{" "}
            </Link>
            .
            <br />
            <br />
            Key points and way-marks on the walk from Gilsland to Lanercost
            Priory include Poltross Burns Milecastle (number 48), Gilsland
            village, the Willowford section of Hadrian's Wall with turrets 48a
            and 48b, Willowford Farm B and B and self-catering accommodation
            where there is a Roman centurial stone built into the barn wall,
            Willowford Bridge abutment and the new millennium bridge over the
            River Irthing, Harrows Scar (site of Milecastle 49), Birdoswald
            Roman Fort, Turret 49a, Piper Sike Turret (number 51a), Pike Hill
            Signal Tower, Banks East Turret (number 52a), Hare Hill with a 3m
            high section of Hadrian's Wall and Lanercost Priory.
            <br />
            <br />
            <Link
              href="https://www.english-heritage.org.uk/visit/places/poltross-burn-milecastle-hadrians-wall/history/"
              target="_blank"
              title="Click here to discover more about 
            Poltross Burn Milecastle"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Poltross Burn Milecastle, Gilsland{" "}
            </Link>{" "}
            : This is one of the best preserved milecastles on Hadrian's Wall.
            It is bigger than usual, and inside are the remains of 2 barrack
            blocks. Broad Wall foundations on the East wing indicate that it was
            built, at least in part , before the decision was taken to narrow
            the width of Hadrian's Wall. In the North West corner there are
            remains of ovens and in the North East corner the only surviving set
            of steps, probably leading up to the ramparts.
            <br />
            <br />
            <Link
              href="https://www.visitcumbria.com/car/gilsland/"
              target="_blank"
              title="Click here to discover more about Gilsland"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Gilsland village{" "}
            </Link>{" "}
            : A small village which today has a good community spirit and
            focuses a large part of its trade on providing accommodation and
            refreshments for walkers on the Hadrian's Wall path and cyclists.
            <br />
            <br />
            <Link
              href="https://www.english-heritage.org.uk/visit/places/willowford-wall-turrets-and-bridge-hadrians-wall/history/"
              target="_blank"
              title="Click here to discover more about the Willowford section of Hadrian's Wall"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Willowford section of the wall with Turrets 48a and 48b{" "}
            </Link>{" "}
            : Here well-preserved sections of the wall and ditch and several
            turrets (48a and 48b) can be seen.
            <br />
            <br />
            <Link
              href="https://willowford.co.uk/"
              target="_blank"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Willowford Farm B and B and self-catering accommodation{" "}
            </Link>{" "}
            : This is a popular and very pleasant stop-over location for
            Hadrian's Wall walkers where there is a Roman centurial stone built
            into the barn wall.
            <br />
            <br />
            <Link
              href="https://www.english-heritage.org.uk/visit/places/willowford-wall-turrets-and-bridge-hadrians-wall/history/"
              target="_blank"
              title="Click here to discover more about the Willowford Bridge abutment"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Willowford Bridge abutment{" "}
            </Link>{" "}
            : The East abutment is all that is left of the Romans' Bridge over
            the River Irthing. It is now on dry land because the course of the
            Irthing has moved West over time. There were a number of bridges
            built at this site but the earliest one was probably built under
            Hadrian at the same time as Hadrians Wall. On the North side of the
            abutment, there are two sluices with an open channel beside them:
            the channel was possibly a mill race with the sluices helping to
            control the flow of water through it. In 1999 a new millennium
            bridge over the River Irthing was designed by the architectural firm
            Napper and constructed and lowered into place using a RAF
            helicopter.
            <br />
            <br />
            <Link
              href="https://www.english-heritage.org.uk/visit/places/harrows-scar-milecastle-and-wall-hadrians-wall/history/"
              target="_blank"
              title="Click here to discover more about Harrow's Scar"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Harrows Scar (site of Milecastle 49){" "}
            </Link>{" "}
            : Little remains of this milecastle, but there are still some points
            of interest. In the 17th century, a cottage was built inside the
            ruins and you can still see its foundations in the South West
            corner. More about the milecastle and its exact location cane be
            found{" "}
            <Link
              href="https://en.wikipedia.org/wiki/Milecastle_49"
              target="_blank"
              title="Click here to discover more about Milecastle 49 and turrets 49a and 49b"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              here{" "}
            </Link>{" "}
            . Milecastle 49 is immediately west of the gorge of the River
            Irthing where the Wall was carried over the river by the bridge at
            Willowford. The scar or cliff and hence the milecastle are named
            after an ancient tenement called The Harrows which stood nearby.
            <br />
            <br />
            <Link
              href="https://www.english-heritage.org.uk/visit/places/birdoswald-roman-fort-hadrians-wall/history-and-stories/history/"
              target="_blank"
              title="Click here to discover more about Birdoswald Roman Fort"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Birdoswald Roman Fort{" "}
            </Link>{" "}
            : The Romans occupied Birdoswald Fort for 300 years from the 2nd to
            the 5th centuries and Birdoswald's defences are the best preserved
            of any of the forts on the line of the wall. Birdoswald is
            interesting also because it was occupied after the Romans had left;
            in the Dark Ages and then again in medieval times going on to be a
            fortified farm subject to raids by the Border Reivers. It also
            contains the only drill and exercise hall ever to have been found in
            a Roman auxiliary fort.
            <br />
            <br />
            <Link
              href="https://en.wikipedia.org/wiki/Milecastle_49"
              target="_blank"
              title="Click here to discover more about Milecastle 49 and turrets 49a and 49b"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Turret 49b, Birdoswald West{" "}
            </Link>
            : There is no turret 49a, as it was positioned right in the centre
            of Birdoswald Fort. Turret 49b is situated to the west of the River
            Irthing. Hadrian's Wall was originally built as a turf wall, but
            later it was replaced by a stone wall which followed a different
            course for 2 Roman miles between milecastle 49 and 51. Turret 49b
            was built on the line of, and around the same time as, the stone
            wall and was fully bonded with it.
            <br />
            <br />
            <Link
              href="https://hadrianswallcountry.co.uk/attraction/leahill-turret-and-piper-sike-turret/"
              target="_blank"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Piper Sike Turret, number 51a{" "}
            </Link>{" "}
            : Unlike Turret 49b, this turret was not bonded fully with Hadrian's
            Wall. It was originally constructed for the turf wall. When the turf
            wall was replaced by the stone wall, the turret then had to be
            integrated into it.
            <br />
            <br />
            <Link
              href="https://en.wikipedia.org/wiki/Pike_Hill_Signal_Tower"
              target="_blank"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Pike Hill Signal Tower{" "}
            </Link>
            : Unfortunately, there is little left of the only known signal tower
            on Hadrian's Wall. It overlooked the Stanegate, a key Roman Road
            which ran E-W from Corbridge to Carlisle. Soldiers would have been
            able to signal to the nearby forts at Nether Denton and Castle Hill.
            The tower was built under Trajan, long before Hadrian's Wall. The
            wall was built with a deliberate kink to incorporate the tower.
            <br />
            <br />
            <Link
              href="https://en.wikipedia.org/wiki/Milecastle_52"
              target="_blank"
              title="Click here to discover more about Turret 52a and also Milecastle 52 and turret 52b"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Turret 52a, Banks East Turret{" "}
            </Link>{" "}
            : Turret 52a is one of the 2 turrets associated with milecastle 52,
            which today is unfortunately no longer visible, but is occupied by
            Bankshead House and Garden. Turret 52B (grid reference NY57006457)
            has never been located. Its position has been estimated in relation
            to Turret 52A and Milecastle 53. It may lie beneath the modern road.
            Unlike Turret 49b, this turret was not bonded fully with Hadrian's
            Wall. It was originally constructed for the turf wall. When the turf
            wall was replaced by the stone wall, the turret then had to be
            integrated into it.
            <br />
            <br />
            <Link
              href="https://www.english-heritage.org.uk/visit/places/hare-hill-hadrians-wall/"
              target="_blank"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Hare Hill section of Hadrian's Wall{" "}
            </Link>{" "}
            : This contains a 3m high piece of Hadrian's Wall. Although it is
            often claimed to be the highest remaining section of Hadrian's Wall
            and the central core is original, the north side of it was actually
            rebuilt in the 19th century using Roman stones. There is a centurial
            stone built into the north side of the wall at about head height,
            but it is very difficult to spot. The stone was taken from a
            different part of Hadrian's Wall.
            <br />
            <br />
            <Link
              href="https://www.english-heritage.org.uk/visit/places/lanercost-priory/"
              target="_blank"
              title="Click here to discover more about Lanercost Priory"
              className="text-decoration-underline text-[#0000EE] font-semibold md:font-semibold underline"
            >
              {" "}
              Lanercost Priory{" "}
            </Link>{" "}
            : Standing close to Hadrian’s Wall, and built in large part from
            stone sourced from the nearby sections of Hadrian's Wall, it
            suffered frequent attacks during the long Anglo-Scottish wars, once
            by Robert Bruce in person. The mortally sick King Edward I rested
            here for five months in 1306-7, shortly before his death on his
            final campaign. Today it is looked after by English Heritage. We
            have visited Lanercost Priory severl times in the past, so
            concentrated today on the walk itself. However, we will be returning
            here when we return to Birdoswald Fort in the forthcoming months.
            <br />
            <br />
           <br />
           <br />
          <div className="slideshowHostPhotoHwp">
           <div className="text-white text-semibold">Join us on our 9th day of the Hadrian's Wall Path by clicking on the
            album below and following our narrative by clicking on the added
            comments. </div>
              <Link
                href="https://photos.app.goo.gl/dHXXFUtCaz1QUdzt5"
                target="_blank"
              >
                <Image
                   className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[50%] border-solid border-[#bdbeba] border-4 mt-4 mb-6"
                  src={WillowfordDay9}
                  alt=""
                />
              </Link>
         
          </div>{" "}
          {/* Closing div SlideshowHostPhotoHwp */}
           <br />
           <br />
        </div>{" "}
        {/* Closing tag datenewsDivHwp */}
      </div>
        </div>{" "}
        </div>
        

    </div>  
    </div>   
       
  </div>
  </div>
  )
}
