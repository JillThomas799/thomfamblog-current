import Image from 'next/image'
import Link from 'next/link'
import CathyRobinLowtherTitled from "/public/imagesresized/CathyRobinLowtherTitled.jpg";


export default function July2026() {
  return (
    <div className="">
      <div className="bg-HermitageFerry bg-cover border-solid border-8 border-[#336600] md:p-4 mb-8 h-[80vh] text-gray-800 text-center font-normal text-l p-3">
        <div className="bg-[#336600] mr-[7%] ml-[7%] md:mr-[40%] md:ml-[40%] p-1 border-gray-800 border-2 text-white font-semibold">July 2026</div>
        <br />
        <br />
        
        </div> 

        < div className="mb-20"> 
      < div className="flex flex-col w-auto leading-1.5 p-2 md:p-4 lg:p-4  mb-4 mt-4 border-gray-800 border-solid border-2 md:border-2 bg-[#96AD93]">
         < div className="text-md md:text-lg max-w-full font-normal text-white text-center dark:text-white justify-center items-center">
        <div className="font-normal text-center border-solid border-black border-2 mr-1 ml-1 mt-2 mb-2 px-4 py-4 bg-[#336600]"><div className="font-semibold">Welcome to our July 2026 blog.</div>
          
            </div>{" "}
         </div> 
          </div> 


            < div className="mb-20"> 
                < div className="flex flex-col w-auto leading-1.5 pt-4 mt-4 md:p-4 lg:p-4  border-gray-800 border-solid border-2 md:border-2 bg-[#96AD93]">
                   < div className="text-md md:text-base max-w-full font-normal md:font-semibold text-white text-center  md:text-center dark:text-white justify-center items-center">
                   <div className="font-semibold md:font-semibold p-2 m-2 text-white text-center  border-gray-800 border-2 bg-[#336600]">4th July 2026, Tuesday.</div> {/*End of news date block*/}
                        <div className="font-semibold md:font-semibold p-2 m-2 text-white text-center text-md border-gray border-2  bg-[#336600]">Hadrian's Wall Path West to East (abridged): Day 6, Banks East Turret to Gilsland.</div>
                  <div className="font-normal md:font-normal text-center text-white border-solid border-gray-800 border-2 mr-1 ml-1 mt-2 px-4 py-2 mb-10 bg-[#336600]">
                    

                          <br />
                          <br />
                    <div className="p-4 font-semibold md:font-semibold text-center text-md text-[#336600] border-gray-800 border-solid border-2 bg-[#ea9262] ">Click on the image below to open the album of the 6th day of our Hadrian's Wall Path walk West to East (abridged): Banks East Turret to Gilsland.
                          <br />
                          <br />
                                Please make sure to click on the <em>'i'</em> icon, in the top right-hand corner of each photo, as we have included a lot of additional information about the photo in that space.
                             </div>
                            <Link
                              href="https://photos.app.goo.gl/qt7GXmL5ofti2uc59"
                              target="_blank"
                            >
                              <Image
                                src={CathyRobinLowtherTitled}
                                className="block ml-auto mr-auto h-auto w-[100%] md:w-[70%] lg:w-[50%] border-solid border-[#96AD93] border-4 mt-4 mb-6"
                                alt="Photo of Cathy, Robin and the dogs Wilf and Nell, at Lowther Castle.."
                              />
                            </Link>
                          </div>{" "}
                          </div>
                   </div>


                    < div className="mb-20"> 
                < div className="flex flex-col w-auto leading-1.5 pt-4 mt-4 md:p-4 lg:p-4  border-gray-800 border-solid border-2 md:border-2 bg-[#96AD93]">
                   < div className="text-md md:text-base max-w-full font-normal md:font-semibold text-white text-center  md:text-center dark:text-white justify-center items-center">
                   <div className="font-semibold md:font-semibold p-2 m-2 text-white text-center  border-gray-800 border-2 bg-[#336600]">5th July 2026, Sunday.</div> {/*End of news date block*/}
                        <div className="font-semibold md:font-semibold p-2 m-2 text-white text-center text-md border-gray border-2  bg-[#336600]">Warkworth Castle and Hermitage, Amble fishing village.</div>
                  <div className="font-normal md:font-normal text-center text-white border-solid border-gray-800 border-2 mr-1 ml-1 mt-2 px-4 py-2 mb-10 bg-[#336600]">
                          <br />
                          <br />
                    <div className="p-4 font-semibold md:font-semibold text-center text-md text-[#336600] border-gray-800 border-solid border-2 bg-[#ea9262] ">Click on the image below to open the album of our visit to Warkworth Castle and Hermitage with Currywurst German lunch in Amble.
                          <br />
                          <br />
                                Please make sure to click on the <em>'i'</em> icon, in the top right-hand corner of each photo, as we have included a lot of additional information about the photo in that space.
                             </div>
                            <Link
                              href="https://photos.app.goo.gl/qt7GXmL5ofti2uc59"
                              target="_blank"
                            >
                              <Image
                                src={CathyRobinLowtherTitled}
                                className="block ml-auto mr-auto h-auto w-[100%] md:w-[70%] lg:w-[50%] border-solid border-[#96AD93] border-4 mt-4 mb-6"
                                alt="Photo of Cathy, Robin and the dogs Wilf and Nell, at Lowther Castle.."
                              />
                            </Link>
                          </div>{" "}
                          </div>
                   </div>



                  

     </div>
</div>
</div>
</div>
  )
}