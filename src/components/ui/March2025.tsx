import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import "./March2025.css";
import Pheasant from "./pheasant";
import pheasantGarden from "/public/imagesresized/pheasantGarden.jpg";



export default function March2025() {
  return (
     <div>
      <div className="bg-Garden3March2025 bg-cover border-solid border-8 border-[#36454f] md:p-4 mb-8 h-[40vh] md:h-[50vh] w-auto lg:h-[100vh] text-gray-800 text-center font-normal text-l p-3">
        <div className="bg-[#f6f0a3] mr-[7%] ml-[7%] md:mr-[40%] md:ml-[40%] p-1 text-lg border-gray-800 border-2 text-[#36454f] font-bold">March 2025</div>
        <br />
        <br />
       <Pheasant />
 </div>    

 < div className="mb-20">
          < div className="flex flex-col w-auto leading-1.5 pt-4 mt-4 md:p-4 lg:p-4  border-gray-800 border-solid border-2 md:border-2 bg-[#36454f]">
            < div className="text-md md:text-base max-w-full font-normal md:font-semibold text-[#000080] text-left md:text-center dark:text-white justify-center items-center">
              <div className="font-semibold md:font-semibold p-2 m-2 text-[#36454f] text-center  border-gray-800 border-2 bg-[#f6f0a3]">Welcome to our March blog 2025</div> {/*End of news date block*/}
              
              <div className="font-normal md:font-normal text-left text-[#36454f] border-solid border-gray-800 border-2 mr-1 ml-1 mt-2 px-4 py-2 mb-10 bg-[#f6f0a3]">
           Apologies for the delay in posting this month's blog but we have been
          very busy. Not with anything very interesting I am afraid, just a
          number of more difficult routine matters which have taken a period of
          time to sort out.....
          <br />
          <br />
          Anyhow, here we are at last and would like to introduce our new 'pet',
          a pheasant which has decided it really likes our garden. I think this
          may be because we hang bird feeders out for the smaller birds, who eat
          the seeds and nuts and in the process drop the seed on to the floor.
          The pheasant then comes along several times a day to eat all the
          dropped seed. Every morning now we look out of the kitchen window to
          see the pheasant slowly making its way up our drive to have its
          breakfast.
          <br />
          <br />
          Our header picture for this month is therefore our pet garden
          pheasant. This has taken a while to construct as it is a little
          complicated and there is still more work to be done but I thought I
          would get this update posted and I can continue to work on improving
          the design as the month continues....
          <Image 
          src={pheasantGarden}
          className="block ml-auto mr-auto h-auto w-[100%] md:w-[70%] lg:w-[50%] border-solid border-[#bbe89e] border-4 mt-4 mb-6"
          alt="Photo of Pheasant." />
          <br />
          <br />
          <div style={{ textAlign: "center" }}>
            Over the coming few weeks we will be working to update the March
            blog with our news .....
          </div>
          <br />
          <br />
       
          </div>
          </div>
          </div>
          </div>






</div> 
 
  );
}