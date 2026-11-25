import Image from 'next/image'
import Link from 'next/link'
import NovemberBonfire from "./novemberbonfire";
import "./November2025.css";
import LennieRecovered from '/public/imagesresized/LennieRecovered.jpg';
import Keswick10112026 from '/public/imagesresized/Keswick10112026.jpeg';
import Keswick10112026_2 from '/public/imagesresized/Keswick10112026_2.jpg';
import Keswick10112026_4 from '/public/images/DoNotDelete/Keswick10112026_4.jpg';
import LangdaleNeolithicAxeTitled from '/public/imagesresized/LangdaleNeolithicAxeTitled.jpg';
import Durham21112026Titled from '/public/imagesresized/Durham21112026Titled.jpg';


export default function November2026() {

  return (
    <div className=" bg-black border-solid border-2 border-black mb-28"> {/*November block background*/}
      <div>
        <div className="bg-RiverTweedAutumn bg-cover h-[75vh] sm:h-[55vh] md:h-[75vh] mx-auto mt-0 border-solid border-8 border-[#773f3f]">
          <div className="text-white text-center font-semibold text-2xl p-3 bg-[#41231c] border-solid border-2 border-[#b55b4b] m-2">November 2026
          </div>
        </div>

        <div className="mb-4">
          <div className="flex flex-col max-w-full leading-1.5 pr-3 pl-3 sm:p-2 md:p-2 lg:p-2 m-4 border-gray-800 border-solid border-2 bg-[#b55b4b] ">
            <div className="text-md md:text-lg max-w-full font-normal text-white text-center dark:text-white justify-center items-center">

              <div className="font-semibold text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 p-1 bg-[#773f3f]"> Welcome to our November 2026 blog. </div>
              <div className="text-left text-white font-normal border-black border-solid border-2 mr-1 ml-1 mb-2 mt-4 p-1 bg-[#773f3f]">
                The weather is becoming colder and we have had to light the log fire, much to Lennie's delight.
                <br />
                <br />
                We have a steadily busy month, volunteering at the Tullie Museum each week and at the end of this month we are off to see Dickens by Candlelight, Alderman Fenwick's House, Newcastle, which we are looking forward to.
                <br />
                <br />
                The location in Alderman Fenwick's house where the play is performed was once the grand dining room and bar salon of the former Queen’s Head Hotel in Newcastle—where Charles Dickens himself stayed, dining with guests and regaling them with his stories.
                <br />
                <br />
              </div>{" "}
            </div>{/*End of individual dated entry photo album block*/}
          </div> {/*End of news content block*/}
        </div> {/*End of individual dated entry design and color template block*/}

        <div className="mb-20">
          <div className="flex flex-col max-w-full leading-1.5 sm:p-2 md:p-2 lg:p-2 m-4 border-gray-800 border-solid border-2 bg-[#b55b4b]">
            <div className="text-md md:text-lg max-w-full font-semibold text-white text-center dark:text-white justify-center items-center">
              <div className="font-semibold py-2 px-12 text-white text-center dark:text-white"> 3rd November 2026</div> {/*End of news date block*/}
              <div className="font-semibold text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 p-1 bg-[#773f3f]">Update regarding Lennie's recent health scare.</div> {/*End of news header block*/}

              <div className="text-left pr-3 pl-3 md:pr-4 md:pl-4 font-normal text-white dark:text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-[#773f3f]">
                Lennie was back at the vets this morning for his follow up appointment regarding his recent diagnosis and treatment for his overactive thyroid.
                <br />
                <br />
                There was some very good news, as his thyroid hormone levels are now back within the normal range and he has started to regain some weight.
                <br />
                <br />
                He is to stay on the same dose of medication as currently and he is going to be reviewed in 3 to 6 months, depending on how he gets along.
                <br />
                <br />
                <Image
                  src={LennieRecovered}
                  className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[60%] border-solid border-black-400 border-4 mt-1 mb-11"
                  alt="Photo of Lennie looking well and relaxed in his basket." />

              </div>           {/*  End of individual dated entry design and color template block */}
            </div> {/*End of individual dated entry block*/}
          </div>



          <div className="mb-20">
            <div className="flex flex-col max-w-full leading-1.5 sm:p-2 md:p-2 lg:p-2 m-4 border-gray-800 border-solid border-2 bg-[#b55b4b]">
              <div className="text-md md:text-lg max-w-full font-semibold text-white text-center dark:text-white justify-center items-center">
                <div className="font-semibold py-2 px-12 text-white text-center dark:text-white"> 10th November 2026, Monday.</div> {/*End of news date block*/}
                <div className="font-semibold text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 p-1 bg-[#773f3f]">Day in Keswick meeting Robin and Cathy and the dogs Nell and Wilf.</div> {/*End of news header block*/}

                <div className="text-left pr-3 pl-3 md:pr-4 md:pl-4 font-normal text-white dark:text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 px-4 py-4 bg-[#773f3f]">
                  Beautiful but cold weather welcomed us to Keswick in the Northern Lake District National Park today, where we had arranged to meet up with Robin and Cathy for the day.
                  <br />
                  <br />
                  We spent a very pleasant and relaxing day catching up on news and admiring the views and of course visiting several cafés for food and drink. The summer crowds seemed to have disappeared now, so Keswick was quieter than it often is, which was great.

                  <br />
                  <br />
                  <Image
                    src={Keswick10112026}
                    className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[60%] border-solid border-black-400 border-4 mt-1 mb-4"
                    alt="Photo of Robin, Cathy, Jill and Bernard in Keswick" />
                  <figcaption className="novemberFigCaption">
                    <div className="italic text-center block ml-auto mr-auto w-[90%] md:w-[70%] lg:w-[60%]">
                      Cathy, Jill, Robin and Bernard enjoying themselves in Keswick.{" "}
                    </div>
                  </figcaption>
                  <br />

                  <Image
                    src={Keswick10112026_4}
                    className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[60%] border-solid border-black-400 border-4 mt-1 mb-4"
                    alt="Photo of Jill, Cathy and Robin with the dogs Wilf and Nell by Derwentwater" />
                  <figcaption className="novemberFigCaption">
                    <div className="italic text-center block ml-auto mr-auto w-[90%] md:w-[70%] lg:w-[60%]">
                      Jill, Cathy and Robin with the dogs Wilf and Nell by Derwentwater.{" "}
                    </div>
                  </figcaption>
                  <br />
                  <Image
                    src={Keswick10112026_2}
                    className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[60%] border-solid border-black-400 border-4 mt-1 mb-4"
                    alt="Photo looking down Derwentwater towards the Jaws of Borrowdale" />
                  <figcaption className="novemberFigCaption">
                    <div className="italic text-center block ml-auto mr-auto w-[90%] md:w-[70%] lg:w-[60%]">
                      Looking down Derwentwater towards the Jaws of Borrowdale.{" "}
                    </div>
                  </figcaption>



                </div>           {/*  End of individual dated entry design and color template block */}
              </div> {/*End of individual dated entry block*/}
            </div>
          </div>

          <div className="mb-20">
            <div className="flex flex-col max-w-full leading-1.5 p-4 md:p-2 lg:p-4 m-4 border-gray-800 border-solid border-2 bg-[#b55b4b]">
              <div className="text-md md:text-lg max-w-full font-semibold text-white text-center dark:text-white justify-center items-center">
                <div className="font-semibold py-2 px-2 bg-b[#773f3f] m-4 text-white text-center dark: white "> 14th November 2026, Saturday</div> {/*End of news date block*/}
                <div className="font-semibold text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 p-1 bg-[#773f3f] ">Visit to Tullie House Museum to see the pop-up A66 finds exhibition and the Picturing Place Exhibition.</div> {/*End of news header block*/}

                <div className="pr-1 pl-1 md:p-4 font-normal text- center lg:text-left text-white dark-white border-solid border-black border-2 bg-[#773f3f]">
                  The A66 Pop Up exhibition at the Tullie has been one of a series of events organised by Oxford Cotswold Archeology along the Northern Trans-Pennine route, bringing the story of the A66 excavations directly to local venues. Other locations for the event have included sites in Warcop, Appleby, Kirkby Thore and Penrith, with Carlisle's Tullie House being the final event, as once the project is complete, the archaeological archive and finds will be deposited here, ensuring they remain accessible for future research, learning, and enjoyment.
                  To find out more about the A66 Northern Trans-Pennine Project by Oxford Cotswold Archaeology, click  <Link href="https://oxfordcotswoldarchaeology.org.uk/project/a66/" target="_blank" className="underline decoration-[#E6871A] text-[#E6871A] font-semibold" >here</Link>.
                  <br />
                  <br />
                  The exhibition showcased remarkable discoveries uncovered during archaeological investigations carried out as part of the A66 Northern Trans-Pennine upgrade with findings which date from paleolithic to medieval times.
                  <br />
                  <br />
                  At each event, there was the opportunity to:
                  <ul>
                    <li className="list-disc ml-4"> View and handle archaeological artefacts discovered during the A66 excavations;</li>
                    <li className="list-disc ml-4">Learn about the excavation process and how archaeologists investigate the past;</li>
                    <li className="list-disc ml-4">Explore displays and interpretation panels explaining key discoveries;</li>
                    <li className="list-disc ml-4">Meet members of the archaeological team and ask questions about the findings from the project;</li>
                    <li className="list-disc ml-4">Discover how local communities have shaped and been shaped by this landscape through time;</li>
                    <li className="list-disc ml-4">Get involved in a range of activities.</li>
                  </ul>
                  <br />
                  <br />
                  In addition to visiting A66 Pop Up exhibition, we also visited the <Link href="https://guides.bloombergconnects.org/en-US/guide/tullieHouseMuseumArtGallery/exhibition/2c557f6a-aeea-472d-bb6e-cebd282b5d70" target="_blank" className="underline decoration-[#E6871A] text-[#E6871A] font-semibold" >Picturing Places</Link> exhibition which is currently running as a special exhibition at the Tullie Museum and Art Gallery until the 10th January 2027.
                  <br />
                  <br />
                  The Picturing Places exhibition focuses on the work of three significant artists in terms of artwork involving Carlisle and its rural surrounds, namely Thomas Bushby, Sam Bough and William Blacklock. Central to the work of all 3 artists is the notion of place and the unique landscapes of Carlisle and Cumberland that inspired them.
                  <br />
                  <br />
                  Although they were working within a similar timeframe, their approaches to capturing what they saw were quite different. Although different in temperament, all three artists produced paintings and drawings that are both beautifully observed and brilliantly executed. The exhibition is set up in a way to take the visitor on a journey, starting in the centre of Carlisle before rippling out to the neighbouring villages and beyond to the Lakes, Fells and wild places further afield.
                  <br />
                  <br />
                  Thomas Bushby (1861-1918) was  born in Eccleshill, near Bradford, West Yorkshire, a prominent local artist who was an illustrator at Hudson Scott & Sons (Metal Box) and painted watercolours of local scenes around Upperby, Brisco and Wreay. His work captures country life just before the 1st World War brought about so much change. His work typically featured: Carlisle City Landmarks eg. the Abbey Gateway, Glover's Row, Heads Lane, and Carlisle Cathedral; local Parks and Views eg. Scenic outlooks such as Rickerby Park, Stanwix Bank, and harvest fields overlooking the city; neighboring Villages eg. Pastoral, idyllic scenes of local villages like Wreay, Brisco, Thursby, Upperby, and Wetheral. More about Thomas Bushby's life and work can be found <Link href="https://www.notjusthockney.info/bushby-thomas/" target="_blank" className="underline decoration-[#E6871A] text-[#E6871A] font-semibold" >here</Link>.
                  <br />
                  <br />
                  Sam Bough (1822-1878) was born in Abbey Street, Carlisle. He was largely self taught and was influenced by the work of J.M.W Turner. After an unsuccessful attempt to live as an artist in Carlisle he obtained a job as a theatre scenery painter in Manchester in 1845, later also working in Glasgow in the same role. Before Bough moved to Manchester, he painted one of his most popular views of Carlisle in 1844, <em>Cricket Match at Edenside</em>, in oil on canvas. It shows Edenside cricket ground to the north of the city and was possibly painted for Mr Howe, one of the umpires, who is shown in the painting. It is an important historical record of a cricket match as it shows the players' outfits, which included a top hat! He moved to Edinburgh in 1855 and spent the remainder of his life there. He was admired by and a friend of Robert Louis Stevenson and became one of the most influential figures in the development of 19th-century Scottish landscape painting.  Bough enjoyed tremendous popularity as an artist.
                  <br />
                  <br />
                  William James Blacklock (1816-1858) was born in Shoreditch, London, but the Blacklock family had roots in Cumberland dating back to the 1730s, and in 1818 they moved from London to the small village of Cumwhitton, about eight miles east of Carlisle, where the family owned property and farmed. As a boy, Blacklock was apprenticed to Charles Thurnam, a publisher and bookseller in Carlisle and a friend of his father. He was, however, keen on drawing and decided to pursue a career as an artist. Carlisle had become an important artistic centre since the Academy of Art had opened in 1823, and Blacklock was taught there by the Carlisle artist Matthew Ellis Nutter. William James Blacklock exhibited works of Cumberland, Durham and Scotland. He first exhibited at the Academy of Art, Carlisle in 1833. Blacklock moved to London in 1836, aged 20, and lived there until 1850, enjoying increasing success and renown. His picturesque style was likened to that of William Mulready and he was praised by such artists as J. M. W. Turner, David Roberts and Thomas Creswick. He exhibited four pictures at the Royal Academy of Arts in 1836, and went on to show a total of eleven pictures at the Society of British Artists, four at the British Institution and thirty six at the Royal Academy of Arts during the period 1835–1855. In 1850 he moved back to Cumberland but due to failing health he was sent to the Crichton Institution, where he died in 1858. 
                  <br />
                  <br />
                  The exhibition is very well laid out and interesting and is running until the 10th January 2027. For anyone interested in art, it is well worth a visit. Some of the paintings can be seen by clicking on the link <Link href="https://guides.bloombergconnects.org/en-US/guide/tullieHouseMuseumArtGallery/exhibition/2c557f6a-aeea-472d-bb6e-cebd282b5d70" target="_blank" className="underline decoration-[#E6871A] text-[#E6871A] font-semibold" >here</Link>.
                </div> {/*End of news content block*/}
              </div> {/*End of individual dated entry design and color template block*/}

              <div className="flex flex-col bg-[#773f3f] border-solid border-2 border-black pb-2 pt-2 mr-[0%] ml-[0%] mt-5 mb-4  justify-center text-center">

                <div className="m-4 p-2 md:p-4 font-semibold  border-solid border-black border-2 bg-[#b55b4b]">Click on the image below to open the album of our visit to the A66 pop-up exhibition at the Tullie Museum, Carlisle.
                  <br /> <br />
                  The individual comments on the photos will take you through
                  the full story of our experience.
                </div>
                <br />
                <br />
                <Link
                  href="https://photos.app.goo.gl/ummHWdULRKEJmNMp6"
                  target="_blank"
                >
                  <Image
                    src={LangdaleNeolithicAxeTitled}
                    className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[60%] border-solid border-[#E6871A] border-2 mt-1 mb-11 rounded-[70%]"
                    alt="Photo of Neolithic Langdale Axe "
                  />
                </Link>

              </div>{/*End of individual dated entry photo album block*/}


            </div> {/*End of individual dated entry block*/}

 <div className="mb-20">
            <div className="flex flex-col max-w-full leading-1.5 p-4 md:p-2 lg:p-4 m-4 border-gray-800 border-solid border-2 bg-[#b55b4b]">
              <div className="text-md md:text-lg max-w-full font-semibold text-white text-center dark:text-white justify-center items-center">
                <div className="font-semibold py-2 px-2 bg-b[#773f3f] m-4 text-white text-center dark: white "> 21st November 2026, Saturday</div> {/*End of news date block*/}
                <div className="font-semibold text-white border-solid border-black border-2 mr-1 ml-1 mb-2 mt-2 p-1 bg-[#773f3f] ">Visit to Durham and Durham Cathedral.</div> {/*End of news header block*/}

              </div> {/*End of individual dated entry design and color template block*/}
 <div className="pr-1 pl-1 md:p-4 font-semibold text- center lg:text-left text-white dark-white border-solid border-black border-2 bg-[#773f3f]">
              For those who regularly read the blog, yes we have written about Durham previously but today was important as whilst we have been to the cathedral museum previously, we have on 2 occasions been unable to enter the main body of the cathedral due to it being used for university graduation ceremonies.
              <br />
                <br />
                However, today we were in luck, as the main Cathedral was accessible and with Harry to accompany us, who had seen neither the cathedral nor the museum before, we were happy to be able to have a detailed look around.
                <br />
                <br />
                </div>
                
 <div className="flex flex-col bg-[#773f3f] border-solid border-2 border-black pb-2 pt-2 mr-[0%] ml-[0%] mt-5 mb-4  justify-center text-center">
                <div className="m-4 p-2 md:p-4 font-semibold  border-solid border-black border-2 bg-[#b55b4b]">Click on the image below to open the album of our visit to Durham and Durham Cathedral.
                  <br /> <br />
                  The individual comments on the photos will take you through
                  the full story of our experience.
                </div>
                <br />
                <br />
                <Link
                  href="https://photos.app.goo.gl/FJSqRzzWcPjvEdur5"
                  target="_blank"
                >
                  <Image
                    src={Durham21112026Titled}
                    className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[60%] border-solid border-[#E6871A] border-2 mt-1 mb-11 rounded-[70%]"
                    alt="Photo of Neolithic Langdale Axe "
                  />
                </Link>
                </div>
</div>
              </div>{/*End of individual dated entry photo album block*/}
           


          
          </div> {/*End of November block*/}
        </div> {/*End of November block background*/}
      </div>
    </div>




  );
}