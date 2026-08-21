import Image from 'next/image'
import Link from 'next/link'
import "./February2026.css";
import DeerStatic from "./deerstatic";
import HolyIsland22022025Title from "/public/imagesresized/HolyIsland22022025Title.jpg";
import Lamb2 from "/public/imagesresized/Lamb2.jpg";
import HarryBarrowDocksTitled from "/public/imagesresized/HarryBarrowDocksTitled.jpg";
import ZedelTitled from "/public/imagesresized/ZedelTitled.jpg";



export default function February2025() {
  return (
    <div>
      <div id="snowScene" className=" bg-black border-solid border-4 border-gray-600  p-2 md:p-4  height-[100vh]">
        <div className="text-black bg-[#c2b280] border-solid border-2 mr-auto ml-auto mt-0 p-2 border-[#f5f5f5]  font-bold text-xl text-center">February 2025</div>
        <div className="scale-[70%] translate-x-[-10%] translate-y-[-30%] md:scale-[82%] md:translate-x-[-30%] md:translate-y-0 lg:scale-[85%] lg:translate-x-[-20%]"><DeerStatic /> </div>
        <br />
        <br />
      </div>

      < div className="mb-20">
        < div className="flex flex-col w-auto leading-1.5 p-2 md:p-4 lg:p-4  mb-4 mt-4 border-[#f5f5f5] border-solid border-2 md:border-2 bg-[#786d68]">
          < div className="text-md md:text-lg max-w-full font-semibold text-[ #687875] text-center dark:text-[ #687875] justify-center items-center">
            <div className="font-semibold text-center text-black border-solid border-[#f5f5f5] border-2 mr-1 ml-1 mt-2 mb-2 px-4 py-4 bg-[#c2b280]">Welcome to our February 2025 blog.</div>
            <div className="font-semibold text-center md:text-left text-black border-solid border-[#f5f5f5] border-2 mr-1 ml-1 mt-2 mb-2 px-4 py-4 bg-[#c2b280]"> This month we are introducing as part of our header design some new
              animal friends who live near to us. These are the 3 deer who we see most
              days as we walk down to the lake. The design for the deer has been
              undertaken from first principles; analyzing photographic images and then
              using SVG to create a set of images which represent as closely as
              possible the deer whom we meet.
              <br />
              <br /></div>

            <br />
            <br />
          </div>
        </div>
      </div>


      <div className="mb-20">
        <div className="flex flex-col max-w-full leading-1.5 p-1 md:p-2 lg:p-4 m-4 border-[#f5f5f5] border-solid border-2 bg-[#786d68]">
          <div className="font-semibold pt-2 pb-2 mr-[30%] ml-[30%]  text-center text-black border-[#f5f5f5] border-solid border-2 bg-[#c2b280]"> February 4th and 17th 2025</div> {/*End of news date block*/}
          <div className="font-semibold m-4 pt-2 pb-4 py-2 md:px-4 text-black text-center  border-[#f5f5f5] border-solid border-2 bg-[#c2b280]">Harry explores some opportunities for employment.</div>
          <div className="text-black text-center font-semibold md:text-left mb-4 p-6 bg-[#c2b280] border-[#f5f5f5] border-solid border-2  ">
            Harry has been working very hard to explore further job opportunities
            now he has successfully completed his PhD. This has involved some
            reconnaissance activity, so on the 4th of February 2025 he was out near
            Whitehaven in Cumbria and then on the 17th February at the naval
            dockyard in Barrow-in-Furness, Cumbria. Applying for a graduate job
            seems to be a full time job in itself!
          </div>


          <div className="m-1 pr-2 pl-2 pt-4 pb-4 font-semibold text-center text-black border-[#f5f5f5] border-solid border-2 bg-[#c2b280] mb-6">Click on the image below to open the album containing some photos of Harry's experience exploring job opportunities.
            <br />
            <br />
            Please make sure to click on the <em>'i'</em> icon, in the top right-hand corner of each photo, as we have included a lot of additional information about the photo in that space.
          </div>
          <Link
            href="https://photos.app.goo.gl/hdjpfSq6fvLfxyQh9"
            target="_blank"
          >
            <Image
              src={HarryBarrowDocksTitled}
              className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[50%] border-solid border-[#f5f5f5] border-4 mt-4 mb-6"
              alt="Photo of Harry, with Barrow Docks behind."
            />
          </Link>
        </div>
      </div>




      <div className="mb-20">
        <div className="flex flex-col max-w-full leading-1.5 p-1 md:p-2 lg:p-4 m-4 border-[#f5f5f5] border-solid border-2 bg-[#786d68]">
          <div className="font-semibold pt-2 pb-2 mr-[30%] ml-[30%]  text-center text-black border-[#f5f5f5] border-solid border-2 bg-[#c2b280]"> February 15th 2025, Saturday</div> {/*End of news date block*/}
          <div className="font-semibold m-4 pt-2 pb-4 py-2 md:px-4 text-black text-center  border-[#f5f5f5] border-solid border-2 bg-[#c2b280]">  Visit to London, Houses of Parliament Tour and lunch at Brasserie Zédel,
            London..... Well OK, with one woman down.</div>
          <div className="text-black text-center font-semibold md:text-left mb-4 p-6 bg-[#c2b280] border-[#f5f5f5] border-solid border-2  ">
            This weekend, we had booked a
            <Link
              href="https://www.parliament.uk/visiting/visiting-and-tours/"
              target="_blank"
              title="Click here to discover more about the Houses of Parliament Tours"
              className="text-decoration-underline text-white font-semibold underline"
            > tour </Link>
            of the Houses of Parliament together and invited Bernard's brother
            Nicholas along. Despite having worked close-by for many years, he had
            never been to visit inside the building. It seems to so often be the
            case that when you work in an area you never have the time to see the
            tourist sites on your doorstep!
            <br />
            <br />
            We had never been to see inside the Houses of Parliament, although of course we have seen the debating
            chamber many times on TV, and so had been awaiting this trip with
            anticipation.
            <br />
            <br />
            There were 2 options for the tour: (1) <Link
              href="https://tickets.parliament.uk/timeslot/uk-parliament-english-guided-tour"
              target="_blank"
              title="Click here to discover more about the guided tours of the Houses of Parliament."
              className="text-decoration-underline text-white font-semibold underline"
            >A guided tour
            </Link>
            {" "}
            and (2) <Link
              href="https://tickets.parliament.uk/timeslot/uk-parliament-multimedia-tour"
              target="_blank"
              title="Click here to discover more about the guided tours of the Houses of Parliament."
              className="text-decoration-underline text-white font-semibold underline"
            > A self-guided audio tour
            </Link>
            . As things stand currently the tours run on Saturdays throughout the
            year and during the recess from Mondays to Saturdays. The current prices
            of the tours can be found
            <Link
              href="https://www.parliament.uk/visiting/visiting-and-tours/tour-prices-from-1-april-2024/"
              target="_blank"
              title="Click here to discover more about pricing for the the Houses of Parliament Tours"
              className="text-decoration-underline text-white font-semibold underline"
            > here</Link>.
            <br />
            <br />
            Following this, a meal had been booked at {" "}
            <Link
              href="https://www.brasseriezedel.com/"
              target="_blank"
              title="Click here to discover more about Brasserie Zédel and some sample menus"
              className="text-decoration-underline text-white font-semibold underline"
            >

              Brasserie Zédel
            </Link>    {" "}
            , a Parisian Brasserie in 1930s style, which had been personally
            recommended to us.
            <br />
            <br />
            Unfortunately, due to an unforeseen family emergency this weekend, Jill
            was unable to undertake the trip after all as she needed to stay back
            home to take care of things, but thankfully Bernard and Nicholas were
            still able to go. As can be seen, the weather was typical for the UK in
            February with dark and gloomy skies. Nonetheless Bernard and Nicholas
            really enjoyed it and Jill is going to rearrange a visit for herself and
            Bernard later in the year.
          </div>


          <div className="m-1 pr-2 pl-2 pt-4 pb-4 font-semibold text-center text-black border-[#f5f5f5] border-solid border-2 bg-[#c2b280] mb-6">Click on the image below to open the album of Bernard and Nicholas's visit to  to London, the Houses of Parliament Tour and lunch at Brasserie Zédel,
            London.
            <br />
            <br />
            Please make sure to click on the <em>'i'</em> icon, in the top right-hand corner of each photo, as we have included a lot of additional information about the photo in that space.
          </div>
          <Link
            href="https://photos.app.goo.gl/Kc8MjQb24vMJswfc7"
            target="_blank"
          >
            <Image
              src={ZedelTitled}
              className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[40%] border-solid border-[#f5f5f5] border-4 mt-4 mb-6"
              alt="Photo of Nicholas having lunch at Brasserie Zedel."
            />
          </Link>
        </div>
      </div>



      <div className="mb-20">
        <div className="flex flex-col max-w-full leading-1.5 p-1 md:p-2 lg:p-4 m-4 border-[#f5f5f5] border-solid border-2 bg-[#786d68]">
          <div className="font-semibold pt-2 pb-2 mr-[30%] ml-[30%]  text-black text-center [#f5f5f5] border-solid border-[#f5f5f5] border-2 bg-[#c2b280]"> 22nd February 2025, Saturday</div> {/*End of news date block*/}
          <div className="font-semibold m-4 pt-2 pb-4 py-2 md:px-4 text-black text-center  border-[#f5f5f5] border-solid border-2 bg-[#c2b280]">  Visit to the Holy Island of Lindisfarne in the sunshine with Elena and Harry.</div>
          <div className="font-semibold text-left text-black border-solid border-[#f5f5f5] border-2 mr-1 ml-1 mt-2 mb-2 px-4 py-4 bg-[#c2b280]">
            We related in early May 2024 how we had driven out to visit the Holy Island
            of Lindisfarne on the Northumbrian coast. At the time we said that when
            the tide times were right at a weekend, we would return with Elena and
            Harry so they could visit also, as it is a site which is well worth
            visiting.
            <br />
            <br />
            The decision to visit on this occasion was made at very short notice,
            but having visited before recently not much planning was required, just:
            <ol>
              <li className="tickList">
                ✓ Check safe{" "}
                <Link
                  href="https://holyislandcrossingtimes.northumberland.gov.uk/"
                  target="_blank"
                  title="Click here to check the Holy Island tide timetable"
                  className="text-decoration-underline text-white font-semibold underline"
                >
                  {" "}
                  tide crossings{" "}
                </Link>{" "}
                - 10.50 until 20.40.
              </li>
              <li className="tickList">✓ Check best day - Saturday. </li>
              <li className="tickList">
                ✓ Check weather - 11 degrees, brilliant sunshine.
              </li>
            </ol>
            <br />
            We had a light lunch at{" "}
            <Link
              href="https://1stclassfoodholyisland.co.uk/"
              target="_blank"
              title="Click here to discover more about First Class Food"
              className="text-decoration-underline text-white font-semibold underline"
            >
              First Class Food 
            </Link>
             , before going on to visit the Priory and adjacent museum which are both
            owned and managed by English Heritage.
            <br />
            <br />
            The Holy Island of Lindisfarne is one of the most important centres of early
            English Christianity.
            <br />
            <br />
            Christianity first came to Britain in Roman times in the 1st century
            AD/CE, sitting alongside the existing religious cults of worshiping the
            Pagan or Roman gods but it had few followers. In AD 306 the Roman Emperor Constantine 
            ( <Link
              href="https://www.yorkshiremuseum.org.uk/exhibition/constantius-yorks-forgotten-emperor/"
              target="_blank"
              className="text-decoration-underline text-white font-semibold underline"
            >Constantius Chlorus</Link> , father of Constantine the Great) converted on his deathbed to Christianity 
            (his most important legacy). 
            Christianity spread rapidly and by 314 AD, Britain had its own bishops and from 313 AD onwards, due to the Roman Emperor 
            Constantine Christian worship was tolerated within the Roman Empire in Britannia. 
            <br />
            <br />
            Between AD 407-443 Britain ceased to be part of the Roman Empire. Very quickly once the Romans left 
            and Britain was an independent island again, no real aspects of Roman culture were surviving, 
            apart from some small pockets of Christianity and Latin being the language of the church but beyond that, in relation to Roman religion, settlement types, language and legal system, that all went.
             <br />
            <br />
            From AD 410 or thereabouts, the Anglo-Saxons from Northern Germany and Southern Scandinavia (Denmark and the Netherlands) gradually settled, particularly in the West and Wales. 
            They were not at the time Christians and followed their own religion although Christianity
            continued in some areas where the Anglo-Saxons had not settled.
            <br />
            <br /> 
            As a result of this loss in Christianity, in AD595 Pope Gregory sent a mission to 
            Britain led by St Augustine to convert the Anglo-Saxons to Christianity. 
            Augustine arrived in Kent and firstly converted the king there who was King Ethelbert. 
            Overtime more Anglo-Saxon kings and the population also became Christians as it was
            seen as one way in which they could unite people. For more basic summary
            information on the Anglo-Saxons and the rise of Christianity in Britain
            click{" "}
            <Link
              href="https://www.bbc.co.uk/bitesize/articles/zs3gcdm#zyk77yc"
              target="_blank"
              className="text-decoration-underline text-white font-semibold underline"
            >
              here
            </Link>

            <br />
            <br />
            By the 7th century the Northumbrian kingdom of{" "}
            <Link
              href="https://englandsnortheast.co.uk/king-oswald-aidan/"
              target="_blank"
              className="text-decoration-underline text-white font-semibold underline"
            >
              King Oswald of Northumbria
            </Link>{" "}
            (born around 603, ruled 633-642), who was the son of King Æthelfrith,
            ruler of the kingdoms of Bernicia and Deira, dominated Britain. He had been expelled from Northumbria in AD 616 by his uncle Edwin. He and his brother had taken refuge on the Scottish island of Iona, where they converted to
            Christianity. 
             <br />
            <br />            
            Northumbria consisted of two parts: <em>Deira</em>, centred on the old Roman city
            of York, and <em>Bernicia</em> further north.             
            On acceeding to become King Oswald of Northumbria in AD 634, he focused Northumbrian power in Bernicia, around the royal palaces at Yeavering, Mælmin (Milfield) and Bamburgh. 
             <br />
            <br /> 
            
            King Oswald was determined to reintroduce Christianity to
            the North-East and so employed    <Link href="https://www.lindisfarne.org.uk/general/aidan.htm"
              target="_blank"
              className="text-decoration-underline text-white font-semibold underline"
            >St Aidan</Link>, an Irish monk from Iona, to
            convert Northumbria to Celtic Christianity. In AD 633 King Oswald granted Aidan and his
            companions the small tidal island of Lindisfarne on which to establish a
            monastery. and he became the first Bishop of Lindisfarne. Aidan died on the 
            31 August AD 651.
            <br />
            <br />
            It is important to note that Celtic Christianity was slightly different
            in terms of customs, organisation and values to the Roman style of
            Christianity introduced by Paulinus under King Edwin. These differences
            were largely subtle and presentational but they were resolved at the
            Synod of Whitby in  AD 664. The Roman Catholic Church was strictly
            hierarchical, legalistic, and elitist, whereas the Celtic Church was
            provincial and local based, monastic, mystical, and celebrated the
            sacredness of nature, thus reflecting the patterns of life in the
            communities in which the church flourished.
            <br />
            <br />
            <Link href="https://www.lindisfarne.org.uk/general/aidan.htm"
              target="_blank"
              className="text-decoration-underline text-white font-semibold underline"
            >Cuthbert</Link> (later to become Saint Cuthbert), was born in North Northumbria in about the year 635 - the same year in which Aidan founded the monastery on Lindisfarne. He came from a well-to-do English family and like most boys of that class, he was placed with foster-parents for part of his childhood and taught the arts of war. It seems that he was brought up as a Christian. He was credited, for instance, with having saved by his prayers, some monks who were being swept out to sea on a raft. There is some evidence that, in his mid-teens, he was involved in at least one battle, which would have been quite normal for a boy of his social background.
             <br />
            <br />
            His life changed when he was about 17 years old. He was looking after some neighbour's sheep on the hills. Gazing into the night sky he saw a light descend to Earth and then return, escorting, he believed, a human soul to Heaven. The date was August 31st AD 651 - the night that Aidan died. Perhaps Cuthbert had already been considering a possible monastic calling but that was his moment of decision.
              <br />
            <br />
            He went to the monastery at Melrose, also founded by Aidan, and asked to be admitted as a Novice. 
            For the next 13 years he was with the Melrose monks. When Melrose was given land to found a new monastery at Ripon, Cuthbert went with the founding party and was made guestmaster. In his late 20s he returned to Melrose and found that his former teacher and friend, the prior Boisil, was dying of the plague. Cuthbert became prior (second to the Abbot) at Melrose.
            <br />
            <br />
            In 664AD the Synod of Whitby decided that Northumbria should cease to look to Ireland for its spiritual leadership and turn instead to the continent. The Irish monks of Lindisfarne, with others, went back to Iona. The abbot of Melrose subsequently became also abbot of Lindisfarne and Cuthbert its prior.
              <br />
            <br />
            Cuthbert seems to have moved to Lindisfarne at about the age of 30 and lived there for the next 10 years. He ran the monastery; he was an active missionary; he was much in demand as a spiritual guide and he developed the gift of spiritual healing. He was an outgoing, cheerful, compassionate person and no doubt became popular. But when he was 40 years old he believed that he was being called to be a hermit and to do the hermit's job of fighting the spiritual forces of evil in a life of solitude.
                 <br />
            <br />

            The information provided by{" "}
            <Link
              href="https://www.english-heritage.org.uk/visit/places/lindisfarne-priory/History/"
              target="_blank"
              className="text-decoration-underline text-white font-semibold underline"
            >
              English Heritage
            </Link>{" "}joined the
            monastery at Lindisfarne. He eventually became Lindisfarne’s greatest
            monk-bishop, and the most important saint in northern England in Medieval times. 
            <br />
            <br />            
            As Prior of Lindisfarne, <Link href="https://www.lindisfarne.org.uk/general/aidan.htm"
              target="_blank"
              className="text-decoration-underline text-white font-semibold underline"
            >Cuthbert</Link> reformed the monks’ way
            of life to conform to the religious practices of Rome rather than those of
            Ireland. This caused bitterness, and he decided to retire and live as a
            hermit. He lived at first on an island (now called St Cuthbert’s Isle)
            just offshore, but later moved across the sea to the more remote island
            of Inner Farne. On the insistence of the king, however, Cuthbert was
            made a bishop in AD 685. His new duties brought him back into the world of
            kings and nobles, but he acquired a considerable reputation as a pastor,
            seer and healer.
            <br />
            <br />
            Cuthbert died on 20 March AD 687 and was buried in a stone coffin inside
            the main church on Lindisfarne. Eleven years later, on opening his tomb,
            the monks discovered that Cuthbert’s body had not decayed, a sign
            according to the monks of his purity and saintliness. His remains were
            elevated to a coffin-shrine at ground level, and this marked the
            beginnings of the cult of St Cuthbert, which was to alter the course of
            Lindisfarne’s history. Miracles were soon reported at St Cuthbert’s
            shrine and Lindisfarne was quickly established as the major pilgrimage
            centre in Northumbria. As a result, the monastery grew in power and
            wealth, attracting grants of land from kings and nobles as well as gifts
            of money and precious objects. The cult of St Cuthbert also consolidated
            the monastery’s reputation as a centre of Christian learning. One of the
            results was the production in about 710–25 of the masterpiece of early
            medieval art known today as the{" "}
            <Link
              href="https://www.lindisfarne.org.uk/gospels/"
              target="_blank"
              className="text-decoration-underline text-white font-semibold underline"
            >
              Lindisfarne Gospels
            </Link>{" "}
            .
            <br />
            <br />
            On the 8th June AD/ACE 793, the Vikings attacked. It was their first
            significant raid in Europe and was physically and psychologically
            devastating: one of England’s holiest shrines had been attacked by
            pagans, and St Cuthbert had not intervened to stop them. As a result of
            these attacks the monks moved inland to Norham and later settled in
            Chester-le-Street. In 875 the decision was made to leave Lindisfarne for
            good. In 995 St Cuthbert’s relics were moved again and eventually
            enshrined at Durham, where they remain. The prosperity of the Durham
            monastic community was based on its ability to attract pilgrims to the
            shrine.
            <br />
            <br />
            In the 11th to 13th century the Durham monks returned to Lindisfarne and
            built the{" "}
            <Link
              href="https://www.english-heritage.org.uk/visit/places/lindisfarne-priory/"
              target="_blank"
              className="text-decoration-underline text-white font-semibold underline"
            >
              priory{" "}
            </Link>
            with a cenotaph marking Cuthbert's original grave.
            <br />
            <br />

          </div>
          <div className="m-1 pr-2 pl-2 pt-4 pb-4 font-semibold text-center text-black border-[#f5f5f5] border-solid border-2 bg-[#c2b280] mb-6">Click on the image below to open the album of our visit to Holy
            Island in the sun with Elena and Harry.
            <br />
            <br />
            Please make sure to click on the <em>'i'</em> icon, in the top right-hand corner of each photo, as we have included a lot of additional information about the photo in that space.
          </div>
          <Link
            href="https://photos.app.goo.gl/yPoaNMU6KcRfJycJA"
            target="_blank"
          >
            <Image
              src={HolyIsland22022025Title}
              className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[50%] border-solid border-[#f5f5f5] border-4 mt-4 mb-6"
              alt="Photo of Holy Island Castle."
            />
          </Link>

        </div>




      </div>
    </div>
  );
}