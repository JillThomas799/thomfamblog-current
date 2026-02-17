import Image from 'next/image'
import Link from 'next/link'


import Robins from "./robins";
import IcyTarn2 from "/public/imagesresized/IcyTarn2.jpg";
import WinterRobin from "/public/imagesresized/WinterRobin.jpg";
import DurhamArrivalJT1 from "/public/imagesresized/DurhamArrivalJT2.jpg";
import GraduationDurham08012026V2 from '/public/imagesresized/GraduationDurham08012026V2.jpg';
import CathedralCafeBT from '/public/imagesresized/CathedralCafeBT.jpg';
import CathedralShop from '/public/imagesresized/CathedralShop.jpg';
import CathedralBooks from '/public/imagesresized/CathedralBooks.jpg';
import ArabianSands from '/public/imagesresized/ArabianSands.jpg';
import ArthurBooks from '/public/imagesresized/ArthurBooks.jpg';
import DarkSkyMathiasMHTitled from '/public/imagesresized/DarkSkyMathiasMHTitled.jpg';
import RoyalExchangeTitled from '/public/imagesresized/RoyalExchangeTitled.jpg';
import OrionTitled from '/public/imagesresized/OrionTitled.jpg';



export default function January2026() {
  return (
    <div className=" bg-black border-solid border-4 border-gray-600  md:p-4 mb-28">
      <div className="text-[#D99E49] text-center font-semibold text-xl p-3 bg-gray-700 border-[#bdbeba] border-4 m-2 bg-WinterGrass bg-cover ">
        <div className="bg-black mr-[10%] ml-[10%] md:mr-[20%] md:ml-[20%] p-1 border-[#bdbeba] border-2 text-[#D99E49 font-bold">January 2026</div>
        <br />
        <br />
        < Robins />
      </div>

      <div className="mb-20">
        <div className="flex flex-col max-w-full leading-1.5 p-1 md:p-2 lg:p-4 m-4 border-gray-800 border-solid border-1 md:border-2 bg-[#bdbeba]">
          <div className="text-md md:text-lg max-w-full font-semibold text-[#D99E49] text-left dark:text-[#D99E49] justify-center items-center">
            <div className="font-normal text-left border-solid border-black border-2 mr-1 ml-1 mb-4 px-4 py-4 bg-black">Welcome to our January 2026 blog and to the new year. We hope everyone has had a Merry Christmas and Happy New Year. Our thoughts are also with those of our friends and family for whom times might be more difficult at the moment.
              <br />
              <br />
              The idea for the header design for this January blog was taken from some friendly robins we saw hopping around the local tarn in the icy weather.
              The background is actually created by importing and scaling a photo of the grass by the tarn, and the little animated robins have been designed from the coordinates of one of the real robins, as can be seen in the photo below.
              <br />
              <br />
              <Image src={WinterRobin}
                className="block md:mr-auto md:ml-auto h-auto w-[100%] md:w-[75%] lg:w-[60%] border-solid border-gray-500 border-2 mt-4 mb-4 transform transition hover:scale-150"
                alt="Photo of winter robin"
              />

            </div>{" "}
          </div>{/*End of individual dated entry photo album block*/}
        </div> {/*End of news content block*/}
      </div> {/*End of individual dated entry design and color template block*/}


      <div className="mb-20">
        <div className="flex flex-col max-w-full leading-1.5 p-1 md:p-2 lg:p-4 m-2 border-gray-800 border-solid border-2 bg-[#bdbeba]">
          < div className="text-md md:text-lg max-w-full font-normal mt-4 mb-4 p-1 text-white text-center justify-center items-center bg-black">

            <div className="font-semibold pt-8 py-2 px-12 text-[#D99e49] text-center"> 5th January 2026</div> {/*End of news date block*/}

            <Image
              src={IcyTarn2}
              className="block md:mr-auto md:ml-auto h-auto w-[100%] md:w-[75%] lg:w-[60%] border-solid border-gray-500 border-2 mt-4 mb-4 transform transition hover:scale-150"
              alt="Photo of tarn iced over"
            />
            {/* <div className="flex flex-col bg-[#D99e49] border-solid border-gray-500 border-2 text-black text-normal  items-center mr-[20%] ml-[20%] p-1 font-semibold">Icy tarn </div> */}

            <div className="font-normal pt-4 py-2 px-4 text-[#D99e49] text-left pb-8">The first few days of January 2026 have been very icy with temperatures down to -7 degrees c. The ducks, swans and moor hens on the tarn have been looking rather miserable but there have been some very scenic views, as shown in this picture of the tarn here. </div>

          </div>{" "}

        </div>
      </div>

      <div className="mb-20">
        <div className="flex flex-col max-w-full leading-1.5 p-1 md:p-2 lg:p-4 m-4 border-gray-800 border-solid border-2 bg-[#bdbeba]">
          < div className="text-md md:text-lg max-w-full font-normal mt-4 mb-4 p-2 text-white text-center md:text-left justify-center items-center bg-black">

            <div className="font-normal pt-8 py-2  text-[#D99e49] text-center"> 8th January 2026</div> {/*End of news date block*/}
            <div className="font-bold m-4 pt-2 pb-4 py-2 md:px-4 text-black text-center  border-gray-800 border-solid border-2 bg-[#D99e49]"> Visit to Durham to see the Cathedral. </div>
            <div className="text-[#D99e49] text-left md:text-left mb-4 pr-4 pl-4">Today we made a last-minute decision to visit Durham for the day. It was a beautiful drive along the A69 and A68 across Blanchland and the Upper Derwent with some spectacular views.
              <br />
              <br />
              On arrival at Durham, we walked carefully over the very icy pavements towards the cathedral. Here is Jill on the bridge over the River Wear:
              <Image
                src={DurhamArrivalJT1}
                className="block md:mr-auto md:ml-auto h-auto w-[100%] md:w-[75%] lg:w-[60%] border-solid border-gray-500 border-2 mt-4 mb-4 transform transition hover:scale-150"
                alt="Photo of Jill on the bridge over the Wear, Durham"
              />
              The plan had been to go and visit the inside of Durham Cathedral, which we could not do last time because of graduation ceremonies, and to go the book shops in the city. However, on arrival at the cathedral, the scene below greeted us:
              <Image
                src={GraduationDurham08012026V2}
                className="block md:mr-auto md:ml-auto h-auto w-[100%] md:w-[75%] lg:w-[60%] border-solid border-gray-500 border-2 mt-4 mb-4 transform transition hover:scale-150"
                alt="Photo of graduands and relatives waiting outside the cathedral for their graduations"
              />

              Once again some graduation ceremonies were taking place and the main interior of Durham Cathedral was inaccessible.
              Not to be deterred, we headed off to the Durham Cathedral café for some lunch....
              <Image
                src={CathedralCafeBT}
                className="block md:mr-auto md:ml-auto h-auto w-[100%] md:w-[75%] lg:w-[60%] border-solid border-gray-500 border-2 mt-4 mb-4 transform transition hover:scale-150"
                alt="Photo of Bernard enjoying lunch in the cathedral café"
              />
              {/* <div className="flex flex-col bg-[#D99e49] border-solid border-gray-500 border-2 text-black text-normal  items-center mr-[20%] ml-[20%] p-1 font-semibold">Bernard enjoying lunch at the cathedral café </div> */}
              Following lunch we wandered over to the interesting Durham Cathedral bookshop..
              <Image
                src={CathedralShop}
                className="block md:mr-auto md:ml-auto h-auto w-[100%] md:w-[75%] lg:w-[60%] border-solid border-gray-500 border-2 mt-4 mb-4 transform transition hover:scale-150"
                alt="Photo of Durham Cathedral shop"
              />
              Durham Cathedral has a very good bookshop, so Jill bought some books. Then we wandered down North Bailey to the excellent academic/university branch of Waterstones, where Jill bought more books. Finally we ended up at the 'normal' branch of Waterstones a little further along the street,  where Jill found even more books.....
              <br />
              <br />
              Bernard, not to be outdone, purchased the autobiography of Werner Herzog <Link href="https://www.waterstones.com/book/every-man-for-himself-and-god-against-all/werner-herzog/michael-hofmann/9781529923865" target="_blank" className="text-decoration-underline text-[#bdbeba] font-semibold underline">'Every Man for Himself and God Against All'</Link> about which the Guardian newspaper wrote <Link href="https://www.theguardian.com/books/2023/oct/19/every-man-for-himself-and-god-against-all-by-werner-herzog-review-magical-thinking" target="_blank" className="text-[#bdbeba] font-semibold underline">this article </Link> in October 2023.

              <div className="flex flex-col md:gap-2">
                <Image
                  src={CathedralBooks}
                  className="block md:mr-auto md:ml-auto h-auto w-[100%] md:w-[75%] lg:w-[60%] border-solid border-gray-500 border-2 mt-4 mb-4 transform transition hover:scale-150"
                  alt="Photo of Durham Cathedral shop"
                />

                <Image
                  src={ArthurBooks}
                  className="block md:mr-auto md:ml-auto h-auto w-[100%] md:w-[75%] lg:w-[60%] border-solid border-gray-500 border-2 mt-4 mb-4 transform transition hover:scale-150"
                  alt="Photo of Durham Cathedral shop"
                />

                <Image
                  src={ArabianSands}
                  className="block md:mr-auto md:ml-auto h-auto w-[100%] md:w-[75%] lg:w-[60%] border-solid border-gray-500 border-2 mt-4 mb-4 transform transition hover:scale-150"
                  alt="Photo of Durham Cathedral shop"
                />
                We had a lovely day as Durham is always a very pretty city to visit and now, all we have to worry about is finding the time to do all that reading.....
              </div>
            </div>
          </div>
        </div>{" "}

        <div className="mb-20">
          <div className="flex flex-col max-w-full leading-1.5 p-1 md:p-2 lg:p-4 m-4 border-gray-800 border-solid border-2 bg-[#bdbeba]">
            <div className="text-md md:text-lg max-w-full font-normal mt-4 mb-4 p-2 text-white text-center md:text-left justify-center items-center bg-black">

              <div className="font-semibold pt-8 py-2  text-[#D99e49] text-center"> 18th January 2026</div> {/*End of news date block*/}
              <div className="font-bold m-4 pt-2 pb-4 py-2 md:px-4 text-black text-center  border-gray-800 border-solid border-2 bg-[#D99e49]"> Stargazing at the Dark Skies ....or rather, indoor stargazing <br /> at the night sky via the planetarium, <br /> as it was too cloudy outside. </div>
              <div className="text-black text-center md:text-center mb-4 md:*:pr-6 md:*:pl-6 ">
                <div className="text-[#D99e49] text-left md:text-left mb-4 pr-4 pl-4">One of the items on our 'To Do' list for this year has been to go up to the Kielder Observatory situated in the wilds of the Kielder Water and Forest Park, close to the Scottish Border. <Link href=" https://kielderobservatory.org/" target="_blank" className="text-[#bdbeba] font-semibold underline"></Link>
                  <br />
                  <br />
                  The Kielder Observatory is a public astronomical observatory and educational charity located in Europe’s largest Gold-Tier International Dark Sky Park. Getting to Kielder itself however, is rather an interesting drive, even for experienced remote countryside drivers like ourselves and certainly more challenging in the dark and in poor weather conditions.
                  <br />
                  <br />
                  So we were delighted to discover that since September 2025, the team at <Link href=" https://twicebrewedinn.co.uk/" target="_blank" className="text-[#bdbeba] font-semibold underline">Twice Brewed Inn</Link>, located on the Hadrian's Wall route, near Bardon Mill in rural Northumberland,  have joined up with the astronomers at <Link href=" https://kielderobservatory.org/" target="_blank" className="text-[#bdbeba] font-semibold underline">Kielder Observatory</Link>  and their team to run <Link href=" https://twicebrewedinn.co.uk/stargazing-at-twice-brewed-inn/" target="_blank" className="text-[#bdbeba] font-semibold underline">Star Gazing Events</Link> at the <Link href=" https://twicebrewedinn.co.uk/" target="_blank" className="text-[#bdbeba] font-semibold underline">Twice Brewed Inn</Link>. <Link href=" https://twicebrewedinn.co.uk/" target="_blank" className="text-[#bdbeba] font-semibold underline">Twice Brewed Inn</Link> is located within the protected Dark Sky park, thus benefitting from minimal light pollution. It is also more easily than Kielder water, not just for visitors but also for the observatory staff themselves.
                  <br />
                  <br />
                  To be able to do this, and accommodate the often inclement weather in this area, the owners of Twice Brewed Inn have constructed an area called 'The Space', where the astronomers can host talks, and also a <Link href="https://twicebrewedinn.co.uk/planetarium/" target="_blank" className="text-[#bdbeba] font-semibold underline">Planetarium</Link>, which is a purpose-built 360 degree immersive dome which brings to life the universe.
                  <br />
                  <br />
                  Despite the fact we were indoors for the whole evening due to adverse weather-conditions (no surprises there...), we had a great time. The meal was good and the food hot, the service attentive and the ambience very relaxing and informal. It was a popular event, which is no surprise as the astronomers were enthusiastic and entertaining. They have different levels of talks according to your degree of knowledge. We would recommend ....
                </div>
                <div className="m-1 pr-2 pl-2 pt-4 pb-4 font-bold  border-gray-800 border-solid border-2 bg-[#D99e49] mb-6">Click on the image below to open the album <br /> of our Stargazing evening meal and event.
                  <br />
                  <br />
                  Please make sure to click on the <em>'i'</em> icon, in the top right-hand corner of each photo, as we have included a lot of additional information about the photo and event in that space.
                  <Link
                    href="https://photos.app.goo.gl/Ps8ySrfrgSGXGTTL8"
                    target="_blank"
                  >
                    <Image
                      src={OrionTitled}
                      className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[60%] border-solid border-black-400 border-4 mt-4 mb-6 rounded-[70%]"
                      alt="Photo of starry sky."
                    />
                  </Link>
                  {/* <div className="relative text-xs -mt-16 text-black pt-12 ml-4"><em>By <Link href="https://www.flickr.com/people/125204407@N08">MATHIAS, M H</Link> from Guaratinguetá, Brasil,  <Link href="https://creativecommons.org/licenses/by/2.0" title="Creative Commons Attribution 2.0">CC BY 2.0</Link>, <Link href="https://commons.wikimedia.org/w/index.php?curid=101329205">Link</Link></em></div> */}
                </div>

              </div>
            </div>
          </div>


        </div>{" "}

        <div className="mb-20">
          <div className="flex flex-col max-w-full leading-1.5 p-1 md:p-2 lg:p-4 m-4 border-gray-800 border-solid border-2 bg-[#bdbeba]">
            < div className="text-md md:text-lg max-w-full font-normal mt-4 mb-4 p-2 text-white text-center md:text-left justify-center items-center bg-black">

              <div className="font-semibold pt-8 py-2  text-[#D99e49] text-center"> 24th January 2026</div> {/*End of news date block*/}
              <div className="font-bold m-4 pt-2 pb-4 py-2 md:px-4 text-black text-center  border-gray-800 border-solid border-2 bg-[#D99e49]"> Visit to Manchester and to see 'Singin' In the Rain' at the Royal Exchange Theatre.</div>
              <div className="text-black text-center md:text-center mb-4 md:*:pr-6 md:*:pl-6 ">
                <div className="text-[#D99e49] text-left md:text-left mb-4 pr-4 pl-4"> Following our successful, albeit lengthy, journey by car to Manchester last year to see the Rest is Politics Live show at the Apollo Theatre, we decided this year to reinstate our routine of attending the Christmas show at the Royal Exchange Theatre, Manchester. 
                   <br />
                  <br />
                  For many years we used to go to the Christmas shows at the Royal Exchange Theatre, including in the later years with Jill's mum. Following the death of Jill's mum, Covid lock downs and our change of location, we have not been for many years so we were interested to see what, if anything, had changed...
                  <br />
                  <br />
                  Bernard, Jill and Harry all went and because of the logistics, it worked out cheapest and most practical to take the car. Parking on Deansgate North Q Park is not cheap but it is very central and secure and like all Q Parks, is fairly easy to negotiate. It also still works out cheaper than taking the train. Immediately on exit from the car park one's vision is taken up with multiple modern skyscrapers and the sight of the bright yellow  <Link href="https://tfgm.com/" target="_blank" className="text-[#bdbeba] font-semibold underline">Bee network </Link> transport system with buses, trains, cycle lanes and increased pedestrianised areas. 
                   <br />
                  <br />
                  It is an impressive transformation and an absolute demonstration of what can be achieved with the right vision and guidance.  As Mayor of Greater Manchester, Burnham has been a leader in implementing reforms to public transport, taking buses back into local control and bringing them, along with trams, into an integrated London-style transport system – in the form of this Bee Network. Find out more about the Transport for Greater Manchester (TFGM) Bee Network in this <Link href="https://en.wikipedia.org/wiki/Bee_Network#Vehicles" target="_blank" className="text-[#bdbeba] font-semibold underline">Bee network Wikipedia entry</Link>. 
                    <br />
                  <br />
                  In fact, the airline Cathay Pacific, in its literature about Manchester, states <em>'The gentrified streets of once-industrial north Manchester look so similar to Brooklyn that New York-set movies, TV series and adverts are regularly filmed here.'</em>. For anyone who has not visited for sometime, it is well worth a re-visit.                 

                </div>
                <div className="m-1 pr-2 pl-2 pt-4 pb-4 font-bold  border-gray-800 border-solid border-2 bg-[#D99e49] mb-6">Click on the image below to open the album <br /> of our day in Manchester and return to the Royal Exchange Theatre, Manchester.
                  <br />
                  <br />
                  Please make sure to click on the <em>'i'</em> icon, in the top right-hand corner of each photo, as we have included a lot of additional information about the photo and event in that space.
                  <Link
                    href="https://photos.app.goo.gl/oLNUBNKmcGtKrZHi8"
                    target="_blank"
                  >
                    <Image
                      src={RoyalExchangeTitled}
                      className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[60%] border-solid border-black-400 border-4 mt-4 mb-6 rounded-[70%]"
                      alt="Photo of starry sky."
                    />
                  </Link>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}