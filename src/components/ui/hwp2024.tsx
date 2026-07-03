import Image from 'next/image'
import Link from 'next/link'
import "./hwp2024.css";
import Romaneagle from "./eagle"
import HWPThermometer from "./hwpthermometer"
import NewcastleQuayside from "/public/imagesresized/NewcastleQuayside.jpg";
import HWPIntro from "/public/imagesresized/HWPIntro.jpg";
import TyneKingGeorgeTitled from "/public/imagesresized/TyneKingGeorgeTitled.jpg";



export default function HWP2024() {
  return (
    <div >
      < div className="bg-[#850f55] border-solid border-4 border-gray-600 md:p-4 mb-8 h-[100%] text-black text-center font-normal text-l p-3">
        <div className="bg-[#d19b2f] mr-[7%] ml-[7%] md:mr-[20%] md:ml-[20%] p-1 border-[#bdbeba] border-2 text-black font-bold">Hadrian's Wall Path Expedition 2024</div>
        <br />
        <br />
        < Romaneagle />        
        < HWPThermometer />
        <div className="text-sm font-semibold bg-[#d19b2f] border-solid border-1 border-gray-600 mr-[15%] ml-[15%] mb-[10%] p-2 mt-[30%] md:mt-[0%] ">100% Completed by August 24th 2024 !</div>
       
      </div>

       < div className="mb-20"> 
      < div className="flex flex-col bg-[#850f55] h-[80%] md:h-[100%]  w-auto leading-1.5 pt-4 md:p-4 lg:p-4">
         < div className="text-sm md:text-md md:text-base max-w-full font-normal md:fount-semibold text-white text-center dark:text-black justify-center items-center">

         <Image
                  className="block ml-auto mr-auto h-auto w-[100%] md:w-[70%] lg:w-[50%] border-solid border-[#bdbeba] border-4 mt-4 mb-6"
                  src={HWPIntro}
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
            <ul id="hwpIntroList" className="pl-[10%] list-none">
              <li className="text-left list-disc">
                Complete the Hadrian's Wall Path on separate days over a number
                of months.
              </li>
              <li className="text-left list-disc">
                Ensure there is ample opportunity to visit the many museums and
                sites of interest en route and to enjoy the fantastic views.
              </li>
              <li className="text-left list-disc">Try and keep the trip as 'green' as possible.</li>
              <li className="text-left list-disc">
                Make a blog record of the journey, which others considering this
                trip might find useful.
              </li>
              <li className="text-left list-disc">
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




      < div className="mb-20"> 
      < div className="flex flex-col bg-[#850f55] h-[80%] md:h-[100%]  w-auto leading-1.5 pt-4 md:p-4 lg:p-4">
         < div className="text-sm md:text-md md:text-base max-w-full font-normal md:fount-semibold text-[#2b8936] text-center dark:text-black justify-center items-center">
         <div className="font-semibold pt-2 pb-2 mr-[20%] ml-[20%]  text-white text-center bg-[#66023c] p-2">1st June 2024, Saturday</div> {/*End of news date block*/}
              <div className="font-bold m-4 pt-2 pb-4 py-2 md:px-4 text-white text-center  bg-[#66023c]">  Day 1 - Wallsend to Newcastle Swing Bridge: 5.1 miles on the
            Hadrian's Wall Path, 7.5 miles total</div>
      
        
         
            <div className="bg-[#66023c] text-white font-semibold">Details of the Walk </div>
            <div className="font-semibold text-center border-solid mr-1 ml-1 mt-2 mb-2 px-4 py-4 ">            
        <div className="font-normal pt-2 pb-2  text-black text-center">
             <ul className="pl-[10%] list-none">
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
            <ul className="pl-[10%] list-none">
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
            <ul className="hwpIntroList">
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
             <div className="font-semibold pt-2 pb-2 mr-[20%] ml-[20%]  text-white text-center bg-[#66023c] p-2">HIKE RATING</div>
              <br /> 
            <ul className="hwpIntroList">
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
            Join us on our 1st day of the Hadrian's Wall Path by clicking on the
            album below and following our narrative by clicking on the added
            comments.
          </div>{" "}
          {/*Closing tag for hwpDailyNarrative div */}
           <br />
           <br />
          <div className="slideshowHostPhotoHwp">            
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




        < div className="mb-20"> 
      < div className="flex flex-col bg-[#850f55] h-[80%] md:h-[100%]  w-auto leading-1.5 pt-4 md:p-4 lg:p-4">
         < div className="text-sm md:text-md md:text-base max-w-full font-normal md:fount-semibold text-[#2b8936] text-center dark:text-black justify-center items-center">
         <div className="font-semibold pt-2 pb-2 mr-[20%] ml-[20%]  text-white text-center bg-[#66023c] p-2">3rd August 2024, Saturday</div> {/*End of news date block*/}
              <div className="font-bold m-4 pt-2 pb-4 py-2 md:px-4 text-white text-center  bg-[#66023c]"> Day 2 - Newcastle Gateshead millennium Bridge to Tyne Riverside
            Country Park: 8.7 miles (including a 1 mile detour to Denton Hall
            turret).</div>
      
        
         
            <div className="bg-[#66023c] text-white font-semibold">Details of the Walk </div>
            <div className="font-semibold text-center border-solid mr-1 ml-1 mt-2 mb-2 px-4 py-4 ">            
        <div className="font-normal pt-2 pb-2  text-black text-center">
             <ul className="pl-[10%] list-none">
              <li className="text-left bg-[#d19b2f] p-4">
                <strong className="text-[#66023c]">Parking:</strong>
                <br />
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
        
            <ul className="pl-[10%] list-none">
                <li className="text-left bg-[#d19b2f] p-4">
                   <div className="text-[#66023c] font-semibold">Points of Interest: </div>
                   <br />
                   <br />
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
            <ul className="hwpIntroList">
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
             <div className="font-semibold pt-2 pb-2 mr-[20%] ml-[20%]  text-white text-center bg-[#66023c] p-2">HIKE RATING</div>
              <br /> 
            <ul className="hwpIntroList">
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
            <br />
            Join us on our 1st day of the Hadrian's Wall Path by clicking on the
            album below and following our narrative by clicking on the added
            comments.
          </div>{" "}
          {/*Closing tag for hwpDailyNarrative div */}
           <br />
           <br />
          <div className="slideshowHostPhotoHwp">
            
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
      
      
      </div>{" "}
            </div>{" "}
     
         </div> 
          </div> 

  )
}