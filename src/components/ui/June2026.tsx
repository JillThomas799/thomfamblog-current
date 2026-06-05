import Image from 'next/image'
import Link from 'next/link'
import CathyRobinLowtherTitled from "/public/imagesresized/CathyRobinLowtherTitled.jpg";

export default function June2026() {
  return (
    <div className="">
      <div className="bg-Garden3 bg-cover border-solid border-4 border-gray-600 md:p-4 mb-8 h-[80vh] text-[#D99E49] text-center font-normal text-l p-3">
        <div className="bg-[#a1a09c] mr-[7%] ml-[7%] md:mr-[40%] md:ml-[40%] p-1 border-gray-800 border-2 text-gray-800 font-semibold">June 2026</div>
        <br />
        <br />
        
        </div> 

        < div className="mb-20"> 
      < div className="flex flex-col w-auto leading-1.5 p-2 md:p-4 lg:p-4  mb-4 mt-4 border-gray-800 border-solid border-2 md:border-2 bg-[#bdbeba]">
         < div className="text-md md:text-lg max-w-full font-normal text-white text-center dark:text-white justify-center items-center">
        <div className="font-normal text-center border-solid border-black border-2 mr-1 ml-1 mt-2 mb-2 px-4 py-4 bg-[#A47DAB]"><div className="font-semibold">Welcome to our June 2026 blog.</div>
          We are delighted to be able to bring you our June 2026 blog. June is a busy month as we are off to Sussex to see Rossini's opera 'La Turca in Italia' at the Glynebourne Festival. Much planning has been underway. Jill has bought her dress and Bernard has made sure his suit still fits, so we are all set to go.... 
            </div>{" "}
         </div> 
          </div> 


            < div className="mb-20"> 
                < div className="flex flex-col w-auto leading-1.5 pt-4 mt-4 md:p-4 lg:p-4  border-gray-800 border-solid border-2 md:border-2 bg-[#bdbeba]">
                   < div className="text-md md:text-base max-w-full font-normal md:font-semibold text-white text-center  md:text-center dark:text-white justify-center items-center">
                   <div className="font-semibold md:font-semibold p-2 m-2 text-white text-center  border-gray-800 border-2 bg-[#A47DAB]">2nd June 2026, Monday.</div> {/*End of news date block*/}
                        <div className="font-semibold md:font-semibold p-2 m-2 text-white text-center text-md border-gray border-2  bg-[#A47DAB]">Lowther Castle for the day with Robin, Cathy, Nell and Wilf.</div>
                  <div className="font-normal md:font-normal text-center text-white border-solid border-gray-800 border-2 mr-1 ml-1 mt-2 px-4 py-2 mb-10 bg-[#A47DAB]">
                    We had not had the opportunity to catch up with our friends Robin and Cathy since before Christmas, so it was lovely to be able to meet them at Lowther Castle for the day. With the birth of their first grandchild in the interim, they have become grandparents for the first time, which is very exciting and we wish them all the best with this new adventure.
                    <br />
                          <br />
                    <div className="p-4 font-semibold md:font-semibold text-center text-md text-white border-gray-800 border-solid border-2 bg-[#a1a09c] ">Click on the image below to open the album of our visit to Lowther Castle with Robin, Cathy, Nell and Wilf.
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
                                className="block ml-auto mr-auto h-auto w-[100%] md:w-[70%] lg:w-[50%] border-solid border-[#bbe89e] border-4 mt-4 mb-6"
                                alt="Photo of Cathy, Robin and the dogs Wilf and Nell, at Lowther Castle.."
                              />
                            </Link>
                          </div>{" "}
                          </div>
                   </div>



</div>
          </div>
           </div>
  )
}