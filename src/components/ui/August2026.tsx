import Image from 'next/image'
import Link from 'next/link'

import BanksEastGilslandTitled from "/public/imagesresized/BanksEastGilslandTitled.jpg";
import MoroccanFiguresTitled from "/public/imagesresized/MoroccanFiguresTitled.jpg";


export default function August2026() {
  return (
    <div>
      <div className="bg-MoroccanFigures bg-contain border-solid border-8 border-[#477ca5] md:p-4 mb-8 h-auto text-gray-800 text-center font-normal text-lg p-3">
        <div className="bg-[#477ca5] mr-[3%] ml-[3%] md:mr-[30%] md:ml-[30%] p-1 mb-10 border-gray-800 border-2 text-white font-semibold">August 2026</div>
        <br />
        <br />

      </div>

      < div className="mb-20">
        < div className="flex flex-col w-auto leading-1.5 p-2 md:p-4 lg:p-4  mb-4 mt-4 border-gray-800 border-solid border-2 md:border-2 bg-[#ff9933]">
          < div className="text-md md:text-lg max-w-full font-normal text-white text-center dark:text-white justify-center items-center">
            <div className="font-bold text-center border-solid  border-black border-2 mr-1 ml-1 mt-2 mb-2 px-4 py-4 bg-[#477ca5] "><div className="font-bold">Welcome to our August 2026 blog.</div>

            </div>{" "}
          </div>
        </div>


        < div className="mb-20">
          < div className="flex flex-col w-auto leading-1.5 pt-4 mt-4 md:p-4 lg:p-4  border-gray-800 border-solid border-2 md:border-2 bg-[#ff9900]">
            < div className="text-md md:text-base max-w-full font-normal md:font-semibold text-white text-center  md:text-center dark:text-white justify-center items-center">
              <div className="font-bold md:font-semibold p-2 m-2 text-white text-center  border-gray-800 border-2 bg-[#477ca5]">1st August 2026, Saturday.</div> {/*End of news date block*/}
              <div className="font-bold md:font-bold p-2 m-2 text-white white text-center text-md border-gray border-2  bg-[#477ca5]"> Genghis Khan: How the Mongols Changed the World Exhibition at the Leeds Armouries and the Carlisle-Settle-Leeds Railway.</div>
              <div className="font-semibold md:font-semibold text-center text-white  border-solid border-gray-800 border-2 mr-1 ml-1 mt-2 px-4 py-4 mb-10 bg-[#477ca5]">
                Many, many years ago, when Jill was still a young girl at Junior school, she found a book on the school book shelves which fascinated her, all about Genghis Khan and the Mongolian Empire.
                <br />
                <br />

                <div className="p-4 font-semibold md:font-semibold text-center text-md text-[#477ca5] border-gray-800 border-solid border-2 bg-white ">Click on the image below to open the album of our  visit to the Genghis Khan: How the Mongols Changed the World Exhibition at the Leeds Armouries and journey the Carlisle-Settle-Leeds Railway.
                  <br />
                  <br />
                  Please make sure to click on the <em>'i'</em> icon, in the top right-hand corner of each photo, as we have included a lot of additional information about the photo in that space.
                </div>
                <Link
                  href="https://photos.app.goo.gl/k8TCZUd4k1XyJW9N6"
                  target="_blank"
                >
                  <Image
                    src={MoroccanFiguresTitled}
                    className="block ml-auto mr-auto h-auto w-[100%] md:w-[70%] lg:w-[50%] border-solid border-[#ff9900] border-4 mt-4 mb-6"
                    alt="Photo of Moroccan Ger and horse made by e-Mongol."
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