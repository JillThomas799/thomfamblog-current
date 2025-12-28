import Image from 'next/image'
import Link from 'next/link'
import GlynebourneDeparture from '/public/imagesresized/GlynebourneDeparture.jpg';
import GlynebourneAuditorium from '/public/imagesresized/GlynebourneAuditorium.jpg';
import SuttonHoo from '/public/imagesresized/SuttonHoo.jpg';
import SuttonHooTranmereJill from '/public/imagesresized/SuttonHooTranmereJill.jpg';
import BamburghCastle from '/public/imagesresized/BamburghCastle.jpg';
import BamburghBeach2 from '/public/imagesresized/BamburghBeach2.jpg';
import WinchesterCathedralExternal from '/public/imagesresized/WinchesterCathedralExternal.jpg';
import WinchesterMortuaryChests from '/public/imagesresized/WinchesterMortuaryChests.jpg';
import HMSVictory from '/public/imagesresized/HMSVictory.jpg';
import HMSWarrior from '/public/imagesresized/HMSWarrior.jpg';
import Stonehenge from '/public/imagesresized/Stonehenge.jpg';
import StonehengeArrival from '/public/imagesresized/StonehengeArrival.jpg';

export default function Bestof2025() {
  return ( 
    <div className="bg-black h-[100%]">
        <div className="text-2xl  text-center text-[#FDDC5C] font-bold pt-10 pb-8 mb-8 border-[#bb252b] border-4 rounded-md bg-[#165b33] animate-pulse">THE BEST OF 2025</div>
        <div className="text-white text-center font-semibold text-2xl p-3 bg-[#bb252b] border-solid border-2 border-[#165b33] m-2">
            <div className="border-black border-4 rounded-md text-white mr-[30%] ml-[30%] pb-2 pt-2 bg-[#165b33]">Holidays - Highlights</div>
            <div className="text-wrap">
              <br />
              <div className="bg-[#165b33] width-full h-auto p-2">Holidays visiting Family in South East: </div>
             <div className="grid grid-cols-3 gap-4 bg-black mt-8 pt-8 pr-8 border-solid border-4 border-[#F0F0F0] ">Sutton Hoo  
                <Image
                  src={ SuttonHoo }
                  className=" w-[50%] md:w-[100%] lg:w-[100%] border-solid border-black-400 border-2 mt-1 mb-11 rounded-[30%] transform transition hover:scale-150"
                  alt="Photo of recreation of boat skeleton Sutton Hoo" />
                  <Image
                  src={ SuttonHooTranmereJill }
                  className="h-auto w-[100%] md:w-[100%] lg:w-[100%] border-solid border-black-400 border-2 mt-1 mb-11 rounded-[30%] transform transition hover:scale-150"
                  alt="Photo of recreation of boat skeleton Sutton Hoo" />
                  </div> 
              <br />
                <div className="grid grid-cols-3 gap-4 bg-black mt-8 pt-8 pl-4 pr-8 border-solid border-4 border-[#F0F0F0]">Glynebourne Opera to see Verdi's Falstaff
                <Image
                  src={ GlynebourneDeparture }
                  className=" w-[50%] md:w-[100%] lg:w-[100%] border-solid border-black-400 border-2 mt-1 mb-11 rounded-[30%] transform transition hover:scale-150"
                  alt="Photo of recreation of boat skeleton Sutton Hoo" />
                  <Image
                  src={ GlynebourneAuditorium }
                  className="h-auto w-[100%] md:w-[100%] lg:w-[100%] border-solid border-black-400 border-2 mt-1 mb-11 rounded-[30%] transform transition hover:scale-150"
                  alt="Photo of recreation of boat skeleton Sutton Hoo" />
                  </div> 
              <br />
              <br />
              <div className="bg-[#165b33] width-full h-auto p-2">Northumberland Coast Holiday</div>
             <div className="grid grid-cols-3 gap-4 bg-black mt-8 pt-8 pl-4 pr-8 border-solid border-4 border-[#F0F0F0]">Bamburgh Castle, Northumbria Coast and Seahouses 
                <Image
                  src={ BamburghCastle }
                  className=" w-[50%] md:w-[100%] lg:w-[100%] border-solid border-black-400 border-2 mt-1 mb-11 rounded-[30%] transform transition hover:scale-150"
                  alt="Photo of recreation of boat skeleton Sutton Hoo" />
                  <Image
                  src={ BamburghBeach2 }
                  className="h-auto w-[100%] md:w-[100%] lg:w-[100%] border-solid border-black-400 border-2 mt-1 mb-11 rounded-[30%] transform transition hover:scale-150"
                  alt="Photo of recreation of boat skeleton Sutton Hoo" />
                  </div> 
              <br />
              <br />
            <div className="bg-[#165b33] width-full h-auto p-2">Portsmouth Holiday: </div>
             <br />
              <div className="grid grid-cols-3 gap-4 bg-black mt-8 pt-8 pr-8 border-solid border-4 border-[#F0F0F0]">Portsmouth Historic Dockyard 
                <Image
                  src={ HMSVictory }
                  className=" w-[50%] md:w-[100%] lg:w-[100%] border-solid border-black-400 border-2 mt-1 mb-11 rounded-[30%] transform transition hover:scale-150"
                  alt="Photo of recreation of boat skeleton Sutton Hoo" />
                  <Image
                  src={ HMSWarrior }
                  className="h-auto w-[100%] md:w-[100%] lg:w-[100%] border-solid border-black-400 border-2 mt-1 mb-11 rounded-[30%] transform transition hover:scale-150"
                  alt="Photo of recreation of boat skeleton Sutton Hoo" />
                  </div> 
             <br />
               <div className="grid grid-cols-3 gap-4 bg-black mt-8 pt-8 pr-8 border-solid border-4 border-[#F0F0F0]">Winchester Cathedral 
                <Image
                  src={ WinchesterCathedralExternal }
                  className=" w-[50%] md:w-[100%] lg:w-[100%] border-solid border-black-400 border-2 mt-1 mb-11 rounded-[30%] transform transition hover:scale-150"
                  alt="Photo of recreation of boat skeleton Sutton Hoo" />
                  <Image
                  src={ WinchesterMortuaryChests }
                  className="h-auto w-[100%] md:w-[100%] lg:w-[100%] border-solid border-black-400 border-2 mt-1 mb-11 rounded-[30%] transform transition hover:scale-150"
                  alt="Photo of recreation of boat skeleton Sutton Hoo" />
                  </div> 
             <br />
               <div className="grid grid-cols-3 gap-4 bg-black mt-8 pt-8 pr-8 border-solid border-4 border-[#F0F0F0]">Stonehenge 
                <Image
                  src={ StonehengeArrival }
                  className=" w-[50%] md:w-[100%] lg:w-[100%] border-solid border-black-400 border-2 mt-1 mb-11 rounded-[30%] transform transition hover:scale-150"
                  alt="Photo of recreation of boat skeleton Sutton Hoo" />
                  <Image
                  src={ Stonehenge }
                  className="h-auto w-[100%] md:w-[100%] lg:w-[100%] border-solid border-black-400 border-2 mt-1 mb-11 rounded-[30%] transform transition hover:scale-150"
                  alt="Photo of recreation of boat skeleton Sutton Hoo" />
                  </div> 
              <br />
              <br />
            <div className="bg-[#165b33] width-full h-auto p-2">Glasgow Holiday: </div>
            <br />
            'Hamilton' live, 
            <br />
            'Rest is Politics' live at SEC arena, 
            <br />
            Riverside Transport museum.
            <br />
            <br />
            </div>
        </div>
<br />
<br />
        <div className="text-white text-center font-semibold text-2xl pt-3 pb-4 bg-[#bb252b] border-solid border-2 border-[#165b33] m-2">
            <div className="border-black border-4 rounded-md text-white mr-[30%] ml-[30%] pb-4 pt-2 bg-[#165b33]">History</div>
            <div>
            Winchester Abbey and Westminster Abbey.
              <br />
            Stonehenge.
              <br />
            Lindisfarne/Holy Island
            </div>
        </div>

        <br />
<br />
        <div className="text-white text-center font-semibold text-2xl pt-3 pb-4 bg-[#bb252b] border-solid border-2 border-[#165b33] m-2">
            <div className="border-black border-4 rounded-md text-white mr-[30%] ml-[30%] pb-4 pt-2 bg-[#165b33]">Achievements</div>
            <div>
            Bernard: 
             <br />
            Learning Spanish and French. 
             <br />
             Learning how to fly an airbus.
              <br />
               <br />
            Jill: Learning how to read early modern Scottish palaeography, 
             <br />
             software and new blog.
            <br />
             <br />
            Harry: Graduating with his PhD,  <br />
            Obtaining employment as a Digital and Technology Solutions professional with one of the local councils. 
            </div>
        </div>

        <br />
<br />
        <div className="text-white text-center font-semibold text-2xl pt-3 pb-4 bg-[#bb252b] border-solid border-2 border-[#165b33] m-2">
            <div className="border-black border-4 rounded-md text-white mr-[30%] ml-[30%] pb-4 pt-2 bg-[#165b33]">Events</div>
            <div>
            Harry's PhD Graduation in Cardiff.
              <br />
            Elena's partner comes to live in Cumbria.
            <br />
            Glynebourne to see Verdi's Falstaff
              <br />
           Theatre Royal Glasgow 'Hamilton'.
           <br />
           Rest is Politics Live show at the SEC arena Glasgow.
             <br />
             Bernard's magical mystery tour Father's day trip to Flight Experience, Newcastle
             </div>
        </div>
    </div>
  );
}