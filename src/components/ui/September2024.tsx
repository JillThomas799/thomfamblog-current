import Image from 'next/image'
import Link from 'next/link'
import SeptemberSheep from "@/components//ui/septembersheep"
import WinchesterCathedralTitled from '/public/imagesresized/WinchesterCathedralTitled.jpg';
import HMSWarriorTitled from '/public/imagesresized/HMSWarriorTitled.jpg';
import HMSAllianceTitled from '/public/imagesresized/HMSAllianceTitled.jpg';
import AlnwickCastleTitled from '/public/imagesresized/AlnwickCastleTitled.jpg';
import Newcastle24092025Titled from '/public/imagesresized/Newcastle24092025Titled.jpg';
import DurhamCathedralTitled from '/public/imagesresized/DurhamCathedralTitled.jpg';




export default function September2024() {

  return (   
 <div> 
        {/*September block background*/}
        <div className="text-[#FBE9D0] w-[100%] text-center font-semibold text-2xl bg-[#743500] border-solid border-2 border-[#22311d]">September 2025
        </div> {/*End of September month block*/}
        <SeptemberSheep />
       <div className=" bg-[#b65c00] border-solid border-2 border-[#22311d] mb-28"> 
      <div className="mb-20">
      <div className="flex flex-col max-w-full leading-1.5 sm:p-2 md:p-2 lg:p-2 m-4 border-gray-800 border-solid border-2  bg-[#585123]">
         <div className="text-md md:text-lg max-w-full font-semibold text-black text-center dark:text-black justify-center items-center">
          <div className="font-semibold border-solid border-black border-2 mr-1 ml-1 md:m-6 md:p-2 mb-4 bg-[#ff9136]">Welcome to our September 2024 blog</div> {/*End of news date block*/} 
          </div>
            </div>
            <div className="bg-[#585123] text-black border-solid border-black border-2 m-4 p-4">
        <div className="font-semibold border-solid border-black border-2 mr-1 ml-1 md:m-4 md:p-2 mb-4 px-4 py-4 bg-[#ff9136]">September 1st-30th September 2024</div>  
          <div className="bg-[#585123] text-black m-4 p-4">
        <div className="font-semibold mr-1 ml-1 md:m-4 md:p-2 mb-4 px-4 py-4 bg-[#ff9136]">Visit to Winchester to see Winchester Cathedral, Wolvesey Palace and other Winchester sites</div> {/*End of news header block*/}
        <div className="pr-1 pl-1 md:pr-1 md:pl-1 font-normal text-left">
           <div className="border-solid border-black border-2 mr-1 ml-1 md:mr-4 md:ml-4 mb-4 md:pr-4 md:pl-4 py-4 bg-[#ff9136]"> 
               The summer is almost over, but despite the poor weather and the cold,
          we have still managed to have a very enjoyable time over the summer.
          As we have previously written, we managed to successfully complete our
          Hadrian's Wall Path trek and now the schools are back and it is a
          little quieter, there is still a long list of walks we would like to
          do and trips we would like to take so hopefully this month we will be
          able to bring a little news about those.
          <br />
          <br />
          As can be seen, the sheep have made a reappearance on this month's
          header as they are all still around in the fields, together with the
          addition of a significant number of cattle grazing, together with
          their calves, which has meant for some cautious manoeuvering through
          fields at times! It will be noted now that all the lambs have grown
          up, and are now adult sheep, as can be seen here in their digital
          recreations, and the grass is now a suitable autumnal shade.
          <br />
          <br />
          To start off with though, here is our blog about the first of these
          trips, a long-awaited visited to Abbotsford, Walter Scott's home in
          the Scottish Borders. This is well worth a visit if you are in the
          area......
          <br />
          <br />
            </div>
           </div>
           <div className="flex flex-col border-solid border-2 border-[#22311d] bg-[#99b19d] pb-2 pt-2 mr-[12%] ml-[12%] mt-5 mb-4  justify-center text-center">
            <div className="mt-1 mb-1 sm:m-2 text-md font-normal block text-[#22311d] bg-[#99b19d]">
              {" "}
                <div className="m-1 p-1 font-bold  border-gray-800 border-solid border-2 bg-[#FBE9D0]">To find out much more and join us on our tour, click on the image below to open the album <br /> of our trip to Winchester.</div>
                <br />
              <br />
              <Link
                href="https://photos.app.goo.gl/5QXV5WMn2SWzc2mz8"
                target="_blank"
              >
                <Image
                  src={ WinchesterCathedralTitled }
                  className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[70%] border-solid border-[#22311d] border-2 mt-1 mb-11 rounded-[70%]"
                  alt="Photo of Winchester Cathedral"
                />
              </Link>
            </div>{" "}
      </div>{/*End of individual dated entry photo album block*/} 
           </div> {/*End of news content block*/}
           </div>
           </div> {/*End of individual dated entry design and color template block*/}
           </div> {/*End of individual dated entry block*/}


     </div>
);
}