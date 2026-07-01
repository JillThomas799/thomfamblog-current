import Image from 'next/image'
import Link from 'next/link'
import "./hwp2024.css";
import Romaneagle from "./eagle"
import HWPThermometer from "./hwpthermometer"
import NewcastleQuayside from "/public/imagesresized/NewcastleQuayside.jpg";



export default function HWP2024() {
  return (
    <div className="" >
      <div className="bg-white border-solid border-4 border-gray-600 md:p-4 mb-8 h-[100%] text-black text-center font-normal text-l p-3">
        <div className="bg-gray-800 mr-[7%] ml-[7%] md:mr-[40%] md:ml-[40%] p-1 border-[#bdbeba] border-2 text-[white] font-semibold">Hadrian's Wall Path Expedition 2024</div>
        <br />
        <br />
        <div className="mr-[30%] ml-[30%]">< Romaneagle /></div>
        
        < HWPThermometer />
       
      </div>

       < div className="mb-20"> 
      < div className="flex flex-col bg-[#850f55] h-[80%] md:h-[100%]  w-auto leading-1.5 pt-4 md:p-4 lg:p-4">
         < div className="text-sm md:text-md md:text-base max-w-full font-normal md:fount-semibold text-[#2b8936] text-center dark:text-black justify-center items-center">
         <div className="font-semibold pt-2 pb-2 mr-[30%] ml-[30%]  text-white text-center bg-[#66023c]">   1st June, 2024 onwards.... Hadrian's Wall Long Distance Path</div> {/*End of news date block*/}
              <div className="font-bold m-4 pt-2 pb-4 py-2 md:px-4 text-white text-center  bg-[#66023c]"> How did we come to be here?.....</div>

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
         <div className="font-semibold pt-2 pb-2 mr-[20%] ml-[20%]  text-white text-center bg-[#66023c]">1st June 2024, Saturday</div> {/*End of news date block*/}
              <div className="font-bold m-4 pt-2 pb-4 py-2 md:px-4 text-white text-center  bg-[#66023c]">  Day 1 - Wallsend to Newcastle Swing Bridge: 5.1 miles on the
            Hadrian's Wall Path, 7.5 miles total</div>
      
        <div className="font-semibold text-center border-solid mr-1 ml-1 mt-2 mb-2 px-4 py-4 bg-[#d19b2f]">            
        <div className="font-normal pt-2 pb-2  text-black text-center bg-[#d19b2f]">
         
            <strong className="text-[#66023c]">Details of the Walk </strong>
             <ul className="pl-[10%] list-none">
              <li className="text-left">
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
              <li  className="text-left">
                <strong className="text-[#66023c]">Public Transport: </strong>
                <br /> Metro yellow line heading to South Shields via Whitley
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
              <li  className="text-left">
                <strong className="text-[#66023c]">Distance:</strong>
                <br /> 5.1 miles on the Hadrian's Wall Path, 7.5 miles total,{" "}
                <strong> Ascent:</strong> 22 metres, 72 feet,{" "}
                <strong>Descent:</strong> 30 metres, 98 feet.{" "}
              </li>
               <br />  
        <br /> 
              <li  className="text-left">
                <strong className="text-[#66023c]">Refreshments:</strong>
                <br />
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
            <strong className="text-[#66023c] text-decoration-underline">Good</strong>
             <br />  
        <br /> 
            <ul className="pl-[10%] list-none">
              <div className="listItemsAlign">
                <li>
                  <strong className="text-[#66023c]">Museums :</strong>
                  <br />
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
                <li className="text-left">
                  <strong className="text-[#66023c]">Walk : </strong>
                  <br />
                  The section of the walk which runs right beside the River Tyne
                  was our favourite, watching the speed boats, fishing boats and
                  seagulls.
                </li>
                 <br />  
        <br /> 
                <li className="text-left">
                  <strong className="text-[#66023c]">History : </strong>
                  <br />
                  Learnt not just about Roman history but also about the docks
                  and the ships built there and the medieval history of
                  Newcastle Castle.
                </li>
                 <br />  
        <br /> 
                <li className="text-left">
                  <strong className="text-[#66023c]">Information boards:</strong>
                  <br />
                  Really interesting and informative information boards en route
                  during the walks.
                </li>
                 <br />  
        <br /> 
                <li className="text-left">
                  <strong className="text-[#66023c]">Weather:</strong>
                  <br /> Beautiful, sunny day.
                </li>
              </div>
            </ul>
            <br />
            <strong className="text-[#66023c] text-decoration-underline">Not so good</strong>
             <br />  
        <br /> 
            <ul className="hwpIntroList">
              <li>
                <strong className="text-[#66023c]">Underfoot</strong>
                <br />
                All of the walk was on firm surfaces.
              </li>
               <br />  
        <br /> 
              <li>
                <strong className="text-[#66023c]">Seating</strong>
                <br />
                There is relatively little opportunity for sitting down between
                the main waymarks, although there is a lovely picnic area at
                Wallsend within the Segendum Fort and some great quayside
                seating and bars and cafés once getting by the millennium and
                Swing Bridges.{" "}
              </li>
               <br />  
        <br /> 
            </ul>
            <strong className="text-[#66023c] text-decoration-underline">Hike Rating</strong>
            <ul className="hwpIntroList">
              <li>
                <strong className="text-[#66023c]">8 (out of 10):</strong> Better walk
                than expected so don't let some people's complaints about its
                urban setting on line put you off. It is walking on firm
                surfaces all the way though. Many people walk this section
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
          <div className="font-normal">
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
                  className="block ml-auto mr-auto h-auto w-[100%] md:w-[70%] lg:w-[50%] border-solid border-[#bbe89e] border-4 mt-4 mb-6"
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
     
         </div> 
          </div> 

  )
}