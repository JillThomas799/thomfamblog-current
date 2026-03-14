import Image from 'next/image'
import Link from 'next/link'
import SamuraiArmourTitled from "/public/imagesresized/SamuraiArmourTitled.jpg";

export default function March2026() {
  return (
    <div>
    <div className=" bg-[#f4f498] border-solid border-4 border-[#efca60]  md:p-4 mb-20">
        <div className="bg-[#2b8936] mr-[10%] ml-[10%] md:mr-[20%] md:ml-[20%] p-1 border-[#bbe89e] border-2 text-[#bbe89e] text-center font-bold">March 2026</div>
      <div className="text-[#2b8936] text-center font-semibold text-xl p-3 bg-gray-700 border-[#bbe89e] border-4 m-2 bg-March2026Header min-h-60 ">
        <br />
        <br />
         </div> 
      </div>

      < div className="mb-20"> 
      < div className="flex flex-col w-auto leading-1.5 p-2 md:p-4 lg:p-4  mb-4 mt-4 border-[#efca60] border-solid border-2 md:border-2 bg-[#f4f498]">
         < div className="text-md md:text-base max-w-full font-semibold text-[#2b8936] text-center dark:text-[#2b8936] justify-center items-center">
         <div className="font-semibold pt-2 pb-2 mr-[30%] ml-[30%]  text-[#bbe89e] text-center  border-[#bbe89e] border-2 bg-[#2b8936]"> 1st March 2026</div> {/*End of news date block*/}
              <div className="font-bold m-4 pt-2 pb-4 py-2 md:px-4 text-[#bbe89e] text-center  border-[#bbe89e] border-2  bg-[#2b8936]"> Welcome to the March 2026 blog</div>
        <div className="font-semibold text-center border-solid border-[#efca60] border-2 mr-1 ml-1 mt-2 mb-2 px-4 py-4 bg-[#bbe89e]"> This month sees us venturing down South to see Bernard's dad, Jill's brother and his wife and  friends  together with the Samurai exhibition at the British Museum and hopefully a visit to Colchester, the first major city in Roman Britain and its first capital.  
          <br />
        <br />
        Bernard is doing well with his Duolingo French and has now achieved level 36, A2 level. Jill meanwhile thinks she may have taken on too many languages as in addition to the existing languages she knows, she has also started studying Scottish gaelic, Ukranian and arabic. Of these, interestingly, Scottish gaelic is proving  by far the most difficult despite having to learn the cyrillic script for Ukranian and the arabic script for arabic! 
            </div>{" "}
        </div> 
         </div> 
          </div> 

           < div className="mb-20"> 
      < div className="flex flex-col w-auto leading-1.5 p-2 md:p-4 lg:p-4  mb-4 mt-4 border-[#efca60] border-solid border-2 md:border-2 bg-[#f4f498]">
         < div className="text-md md:text-base max-w-full font-semibold text-[#2b8936] text-center dark:text-[#2b8936] justify-center items-center">
         <div className="font-semibold pt-2 pb-2 mr-[30%] ml-[30%]  text-[#bbe89e] text-center  border-[#bbe89e] border-2 bg-[#2b8936]"> Saturday 7th March 2026</div> {/*End of news date block*/}
              <div className="font-bold m-4 pt-2 pb-4 py-2 md:px-4 text-[#bbe89e] text-center  border-[#bbe89e] border-2  bg-[#2b8936]"> Day in London with Nicholas, including the British Museum Samurai Exhibition and the British Library Highlights</div>
        <div className="font-semibold text-center border-solid border-[#efca60] border-2 mr-1 ml-1 mt-2 mb-2 px-4 py-4 bg-[#bbe89e]"> 


          <br />
                <br />
                <div className="m-1 pr-2 pl-2 pt-4 pb-4 font-semibold text-center text-[#bbe89e] border-[#efca60] border-solid border-2 bg-[#2b8936] mb-6">Click on the image below to open the album <br /> of our day in London including the Samurai exhibition at the British Museum, Treasures of the British Library and Cypriot food.
                <br />
                <br />
                      Please make sure to click on the <em>'i'</em> icon, in the top right-hand corner of each photo, as we have included a lot of additional information about the photo in that space.
                   </div>
                  <Link
                    href="https://photos.app.goo.gl/9nXcGjKWxtJgxZCz9"
                    target="_blank"
                  >
                    <Image
                      src={SamuraiArmourTitled}
                      className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[50%] border-solid border-[#efca60] border-4 mt-4 mb-6"
                      alt="Photo of Gawain day 2."
                    />
                  </Link>
                
               
            </div>{" "}
        </div> 
         </div> 
          </div> 

</div>

  )
}