import Image from 'next/image'
import Link from 'next/link'
import Toysheep from "./toysheep";
import toysheep1 from '/public/imagesresized/toysheep1.jpg';





export default function April2026() {
  return (
    <div className=" bg-AprilGrass bg-cover border-solid border-4 border-gray-600  md:p-4 mb-8">
      <div className="height-[100%] text-[#D99E49] text-center font-semibold text-xl p-3 bg-GardenGrass bg-cover">
        <div className="bg-gray-800 mr-[10%] ml-[10%] md:mr-[40%] md:ml-[40%] p-1 border-[#bdbeba] border-2 text-[white] font-semibold">April 2026</div>
        <br />
        <br />
        < Toysheep/ >
         <Image
                  src={ toysheep1 }
                  className="block ml-[1%] mt-2 mr-auto h-auto w-[30%] md:w-[30%] lg:w-[20%]"
                  alt="Photo of toy sheep "
                />
        
      </div>

       < div className="mb-20"> 
      < div className="flex flex-col w-auto leading-1.5 p-2 md:p-4 lg:p-4  mb-4 mt-4 border-[#efca60] border-solid border-2 md:border-2 bg-[#f4f498]">
         < div className="text-md md:text-base max-w-full font-semibold text-[#2b8936] text-center dark:text-[#2b8936] justify-center items-center">
         <div className="font-semibold pt-2 pb-2 mr-[30%] ml-[30%]  text-[#bbe89e] text-center  border-[#bbe89e] border-2 bg-[#2b8936]"> 1st April 2026</div> {/*End of news date block*/}
              <div className="font-bold m-4 pt-2 pb-4 py-2 md:px-4 text-[#bbe89e] text-center  border-[#bbe89e] border-2  bg-[#2b8936]"> Welcome to the April 2026 blog</div>

        <div className="font-semibold text-center border-solid border-[#efca60] border-2 mr-1 ml-1 mt-2 mb-2 px-4 py-4 bg-[#bbe89e]"> Welcome to our April blog. 
          <br />
          <br />
          Last month, for mother's day, Elena kindly bought Jill a very cute toy sheep. This has been used as the starting point for the design of this month's header. The sheep and lambs are all in the fields currently, so using the background base of a Cumbrian field, a graphical representation of the toy sheep has been created within the field and an image of the actual toy sheep inserted as comparison.
          <br />
          <br />
          It is an early Easter this month, although with the rise in fuel prices and risk to supply, we are aiming to restrict driving of the petrol and diesel cars. 
          <br />
          <br />
          A day on the train to Edinburgh is planned and towards the middle of the month Jill and Bernard are off to Norfolk for the week. The week in Norfolk looks to involve lots of history and walking and means that at long last Jill can see the locations described in one of her favourite novelist, Ellie Griffith's, Ruth Galloway series. However, more about that later...
            </div>{" "}
        </div> 
         </div> 
          </div> 


      </div>
  )
}