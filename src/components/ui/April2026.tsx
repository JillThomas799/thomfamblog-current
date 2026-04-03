import Image from 'next/image'
import Link from 'next/link'
import Toysheep from "./toysheep";
import toysheep1 from '/public/imagesresized/toysheep1.jpg';





export default function April2026() {
  return (
    <div className="">
      <div className="bg-AprilGrass bg-cover border-solid border-4 border-gray-600 md:p-4 mb-8 h-[50vh] text-[#D99E49] text-center font-normal text-l p-3">
        <div className="bg-gray-800 mr-[7%] ml-[7%] md:mr-[40%] md:ml-[40%] p-1 border-[#bdbeba] border-2 text-[white] font-semibold">April 2026</div>
        <br />
        <br />
        < Toysheep/ >
         <Image
                  src={ toysheep1 }
                  className=" ml-[30%] mt-[-75%] mr-auto h-auto w-[25%] md:w-[30%] md:mt-[-80%] lg:w-[20%] lg:ml-[25%] lg:mt-[-30%] 2xl:ml-[5%]"
                  alt="Photo of toy sheep "
                />
        
      </div>

       < div className="mb-20"> 
      < div className="flex flex-col bg-[#f4f498] h-[80%] md:h-[100vh]  w-auto leading-1.5 md:p-4 lg:p-4 border-[#efca60] border-solid border-4 md:border-2 ">
         < div className="text-sm md:text-md md:text-base max-w-full font-normal md:fount-semibold text-[#2b8936] text-center dark:text-[#2b8936] justify-center items-center">
         <div className="font-semibold pt-2 pb-2 mr-[30%] ml-[30%]  text-[#bbe89e] text-center  border-[#bbe89e] border-2 bg-[#2b8936]"> 1st April 2026</div> {/*End of news date block*/}
              <div className="font-bold m-4 pt-2 pb-4 py-2 md:px-4 text-[#bbe89e] text-center  border-[#bbe89e] border-2  bg-[#2b8936]"> Welcome to the April 2026 blog</div>

        <div className="font-semibold text-center border-solid border-[#efca60] border-2 mr-1 ml-1 mt-2 mb-2 px-4 py-4 bg-[#bbe89e]"> Welcome to our April blog. 
          <br />
          <br />
          Last month, for mother's day, Elena kindly bought Jill a very cute toy sheep.The sheep and lambs are all in the fields currently so, on a topical theme, this has been used as the starting point for the design of this month's header.  Jill has created a graphical representation of the toy sheep as a comparison to the actual image of the toy sheep as an inset.
          <br />
          <br />
          It is an early Easter this month, although with the rise in fuel prices and risk to supply, we are aiming to restrict driving of the petrol and diesel cars. There is unfortunately no home-made Simnel cake this year as Bernard is on a diet..
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