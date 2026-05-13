import Image from 'next/image'
import Link from 'next/link'
import DogsLifeTitled from "/public/imagesresized/DogsLifeTitled.jpg";





export default function May2026() {
  return (
    <div className="">
      <div className="bg-RavenglassEskdaleRailway bg-cover border-solid border-4 border-gray-600 md:p-4 mb-8 h-[50vh] text-[#D99E49] text-center font-normal text-l p-3">
        <div className="bg-[#93c572] mr-[7%] ml-[7%] md:mr-[40%] md:ml-[40%] p-1 border-gray-800 border-2 text-gray-800 font-semibold">May 2026</div>
        <br />
        <br />

          </div>

         < div className="mb-20"> 
                < div className="flex flex-col w-auto leading-1.5 pt-4 mt-4 md:p-4 lg:p-4  border-[#bbe89e] border-solid border-2 md:border-2 bg-[#F38e7e]">
                   < div className="text-md md:text-base max-w-full font-normal md:font-semibold text-[#white] text-center  md:text-center dark:text-[#2b8936] justify-center items-center">
                   <div className="font-semibold md:font-semibold p-2 m-2 text-gray-800 text-center  border-[#bbe89e] border-2 bg-[#93c572]">2nd May 2026, Saturday.</div> {/*End of news date block*/}
                        <div className="font-semibold md:font-semibold p-2 m-2 text-gray-800 text-center text-md border-[#bbe89e] border-2  bg-[#93c572]">'A Dog's Life' Exhibition at the Rheged Centre, Penrith and 'The Sheep Detectives' film at Rheged Cinema.</div>
                  <div className="font-normal md:font-semibold text-center text-gray-800 border-solid border-[#bbe89e] border-2 mr-1 ml-1 mt-2 px-4 py-2 mb-10 bg-[#93c572]">
                    Elena and Willow had really enjoyed going to see <Link href="https://rheged.com/event/a-dogs-life/"  target="_blank" className="text-decoration-underline text-gray-800 font-normal md:font-semibold underline">A Dog's Life</Link> recently at the Rheged Centre near Penrith and had recommended it to us. So this morning, we headed off there with Harry to see the exhibition and also a preview of the film <Link href="https://www.rottentomatoes.com/m/the_sheep_detectives"  target="_blank" className="text-decoration-underline text-gray-800 font-normal md:font-semibold underline">The Sheep Detectives</Link> , starring Hugh Jackman, Brett Goldstein and Patrick Stewart.
                          <br />
                          <br />
                    'A Dog's Life Exhibition' shows the work of international artists, designers, illustrators and photographers who use dogs as their subject matter and inspiration. It looks at the influence and impact that dogs have had on these artists’ practise and also gives a brief insight into how dogs have become such an integral part of our lives.  The exhibition includes a range of dog themed interactives and competitions. You can draw and display your ‘pooch pawtraits’, share what your dog means to you, display your favourite dog photos, and find out what you'd look like as a dog, using the specially commissioned digital interactive. There is also a spotlight on Cumbria's own Canine Heroes.
                    <br />
                          <br />
                    Whilst not dog owners ourselves, (we are more cat people really), we do not dislike dogs and there are a large number of dogs, both working and pets, in Cumbria. As a result, we could still enjoy the exhibition which was very well done.
                          <br />
                          <br />
                    We then went on to see 'The Sheep Detectives'. The film tells how every night a shepherd (played by Hugh Jackman) reads aloud a murder mystery, pretending his sheep can understand. When he is found dead, the sheep realize at once that it was a murder and think they know everything about how to go about solving it. Its a great film suitable for all ages and we really enjoyed it.
                    <br />
                          <br />
                    <div className="p-4 font-semibold md:font-semibold text-center text-md text-gray-800 border-[#bbe89e] border-solid border-2 bg-[#F38e7e] ">Click on the image below to open the album of our visit to 'A Dog's Life Exhibition' at the Rheged centre, Cumbria.
                          <br />
                          <br />
                                Please make sure to click on the <em>'i'</em> icon, in the top right-hand corner of each photo, as we have included a lot of additional information about the photo in that space.
                             </div>
                            <Link
                              href="https://photos.app.goo.gl/fJX5beKKKuS8K7jK9"
                              target="_blank"
                            >
                              <Image
                                src={DogsLifeTitled}
                                className="block ml-auto mr-auto h-auto w-[100%] md:w-[70%] lg:w-[50%] border-solid border-[#bbe89e] border-4 mt-4 mb-6"
                                alt="Photo of Bernard as a dog."
                              />
                            </Link>
                          </div>{" "}
                          </div>
                   </div>

                  
      
        
      </div>
    </div>
  )
}