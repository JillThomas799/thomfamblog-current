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
import GlasgowTramJT from '/public/imagesresized/GlasgowTramJT.jpg';
import TallShipBT from '/public/imagesresized/TallShipBT.jpg';
import ArmadilloBernard from '/public/imagesresized/ArmadilloBernard.jpg';
import RestisPoliticsStage from '/public/imagesresized/RestisPoliticsStage.jpg';
import KelvingroveExteriorBT from '/public/imagesresized/KelvingroveExteriorBT.jpg';
import KelvingroveOrgan from '/public/imagesresized/KelvingroveOrgan.jpg';
import HamiltonJill from '/public/imagesresized/HamiltonJill.jpg';
import HamiltonPoster from '/public/imagesresized/HamiltonPoster.jpg';
import pilotbPassed from '/public/imagesresized/pilotbPassed.jpg';
import FlightDepartures from '/public/imagesresized/FlightDepartures.jpg';
import CardiffGraduationBJH from '/public/imagesresized/CardiffGraduationBJH.jpg';
import harrybiophoto from '/public/imagesresized/harrybiophoto.jpg';
import harrybiophotoTitled from '/public/imagesresized/harrybiophotoTitled.jpg';
import Archie from '/public/imagesresized/Archie.jpg';
import WildSwimming from '/public/imagesresized/WildSwimming.jpg';
import JillDec2025 from '/public/imagesresized/JillDec2025.jpg';
import HarryCardiff from '/public/imagesresized/HarryCardiff.jpg';
import Lennie20250815Titled from '/public/imagesresized/Lennie20250815Titled.jpg';
import WorstWeatherTitled from '/public/imagesresized/WorstWeatherTitled.jpg';
import BestGardenTitled from '/public/imagesresized/BestGardenTitled.jpg';
import CutestTitled from '/public/imagesresized/CutestTitled.jpg';

export default function Bestof2025() {
  return ( 
    <div className="bg-black h-[100%]">
        <div className="text-lg md:text-2xl  text-center text-[#FDDC5C] font-bold pt-10 pb-8 mb-8 border-[#bb252b] border-4 rounded-md bg-[#165b33] animate-pulse">THE BEST OF 2025</div>
        <div className="text-white text-center font-semibold text-lg md:text-2xl p-3 bg-[#bb252b] border-solid border-2 border-[#165b33] m-2">
            <div className="border-black border-2 md:border-4 rounded-md text-white md:mr-[10%] md:ml-[10%] pb-2 pt-2 bg-[#165b33]">Holidays - Highlights</div>
            <div className="text-wrap">
              <br />
              <div className="bg-[#165b33] width-full h-auto p-2">3 Holidays visiting Family in South East: </div>
             <div className="flex flex-col  text-xl md:text-2xl bg-black mt-8 pb-8 pt-8 pr-4  pl-4 border-solid border-2 md:border-4 border-[#F0F0F0] ">Sutton Hoo  
                <Image
                  src={ SuttonHoo }
                  className=" w-[100%] md:w-[60%] lg:w-[50%]  mt-4 md:mt-8 mb-8 md:mr-auto md:ml-auto transform transition hover:scale-150"
                  alt="Photo of recreation of boat skeleton Sutton Hoo" />
                  <Image
                  src={ SuttonHooTranmereJill }
                  className=" w-[100%] md:w-[60%] lg:w-[50%]  mt-4 md:mt-8 mb-8 md:mr-auto md:ml-auto transform transition hover:scale-150"
                  alt="Photo of Jill in front of Tranmere House, Sutton Hoo." />
                  </div> 
              <br />
                <div className="flex flex-col text-xl bg-black mt-8 pt-8 pb-8 pr-4 pl-4 border-solid border-2 md:border-4 border-[#F0F0F0] ">Glynebourne Opera to see Verdi's Falstaff
                <Image
                  src={ GlynebourneDeparture }
                 className=" w-[100%] md:w-[60%] lg:w-[50%]  mt-4 md:mt-8 mb-8 md:mr-auto md:ml-auto transform transition hover:scale-150"
                  alt="Photo of Bernard and Jill departing to Glynebourne" />
                  <Image
                  src={ GlynebourneAuditorium }
                className=" w-[100%] md:w-[60%] lg:w-[50%]  mt-4 md:mt-8 mb-8 md:mr-auto md:ml-auto transform transition hover:scale-150"
                  alt="Photo of Bernard in the auditorium Glynebourne" />
                  </div> 
              <br />
              <br />
              <div className="bg-[#165b33] width-full h-auto p-2">Northumberland Coast Holiday</div>
             <div className="flex flex-col text-xl bg-black mt-8 pt-8 pb-8 pr-4 pl-4 border-solid border-2 md:border-4 border-[#F0F0F0] ">Bamburgh Castle, Northumbria Coast and Seahouses 
                <Image
                  src={ BamburghCastle }
                  className=" w-[100%] md:w-[60%] lg:w-[50%]  mt-4 md:mt-8 mb-8 md:mr-auto md:ml-auto transform transition hover:scale-150"
                  alt="Photo of Jill with Bamburgh Castle in the background" />
                  <Image
                  src={ BamburghBeach2 }
                  className=" w-[100%] md:w-[60%] lg:w-[50%]  mt-4 md:mt-8 mb-8 md:mr-auto md:ml-auto transform transition hover:scale-150"
                  alt="Photo of the beautiful beach at Bamburgh with Bamburgh Castle in the background." />
                  </div> 
              <br />
              <br />
            <div className="bg-[#165b33] width-full h-auto p-2">Portsmouth Holiday: </div>
              <div className="flex flex-col text-xl bg-black mt-8 pt-8 pb-8 pr-4 pl-4 border-solid border-2 md:border-4 border-[#F0F0F0] ">Portsmouth Historic Dockyard 
                <Image
                  src={ HMSVictory }
                  className=" w-[100%] md:w-[60%] lg:w-[50%]  mt-4 md:mt-8 mb-8 md:mr-auto md:ml-auto transform transition hover:scale-150"
                  alt="Photo of HMS Victory" />
                  <Image
                  src={ HMSWarrior }
                className=" w-[100%] md:w-[60%] lg:w-[50%]  mt-4 md:mt-8 mb-8 md:mr-auto md:ml-auto transform transition hover:scale-150"
                  alt="Photo of HMS Warrior" />
                  </div> 
             <br />
               <div className="flex flex-col text-xl bg-black mt-8 pt-8 pb-8 pr-4 pl-4 border-solid border-2 md:border-4 border-[#F0F0F0] ">Winchester Cathedral 
                <Image
                  src={ WinchesterCathedralExternal }
                  className=" w-[100%] md:w-[60%] lg:w-[50%]  mt-4 md:mt-8 mb-8 md:mr-auto md:ml-auto transform transition hover:scale-150"
                  alt="Photo of exterior of Winchester Cathedral" />
                  <Image
                  src={ WinchesterMortuaryChests }
                  className=" w-[100%] md:w-[60%] lg:w-[50%]  mt-4 md:mt-8 mb-8 md:mr-auto md:ml-auto transform transition hover:scale-150"
                  alt="Photo of Mortuary chests of thought to be certain of the Anglo-Saxon Kings and Queens" />
                  </div> 
             <br />
               <div className="flex flex-col text-xl bg-black mt-8 pt-8 pb-8 pr-4 pl-4 border-solid border-2 md:border-4 border-[#F0F0F0] ">Stonehenge 
                <Image
                  src={ StonehengeArrival }
                  className=" w-[100%] md:w-[60%] lg:w-[50%]  mt-4 md:mt-8 mb-8 md:mr-auto md:ml-auto transform transition hover:scale-150"
                  alt="Photo of Bernard in front of main visitor hub at Stonehenge." />
                  <Image
                  src={ Stonehenge }
                  className=" w-[100%] md:w-[60%] lg:w-[50%]  mt-4 md:mt-8 mb-8 md:mr-auto md:ml-auto transform transition hover:scale-150"
                  alt="Photo of Stonehenge" />
                  </div> 
              <br />
              <br />
            <div className="bg-[#165b33] width-full h-auto p-2">Glasgow Holiday: </div>
            <div className="flex flex-col text-xl bg-black mt-8 pt-8 pb-8 pr-4 pl-4 border-solid border-2 md:border-4 border-[#F0F0F0] ">'Hamilton' live

              <Image
                  src={ HamiltonPoster }
                  className=" w-[100%] md:w-[60%] lg:w-[50%]  mt-4 md:mt-8 mb-8 md:mr-auto md:ml-auto transform transition hover:scale-150"
                  alt="Photo of recreation of poster of Hamilton inside the Theatre Royal, Glasgow." />
                  <Image
                  src={ HamiltonJill }
                 className=" w-[100%] md:w-[60%] lg:w-[50%]  mt-4 md:mt-8 mb-8 md:mr-auto md:ml-auto transform transition hover:scale-150"
                  alt="Photo of Jill inside auditorium of Theatre Royal Glasgow." />
            </div>
            <br />
            <div className="flex flex-col text-xl bg-black mt-8 pt-8 pb-8 pr-4 pl-4 border-solid border-2 md:border-4 border-[#F0F0F0] ">'Rest is Politics' live at SEC arena
              <Image
                  src={ ArmadilloBernard }
                 className=" w-[100%] md:w-[60%] lg:w-[50%]  mt-4 md:mt-8 mb-8 md:mr-auto md:ml-auto transform transition hover:scale-150"
                  alt="Photo of Bernard outside the SEC arena Amradillo" />
                  <Image
                  src={ RestisPoliticsStage }
                 className=" w-[100%] md:w-[60%] lg:w-[50%]  mt-4 md:mt-8 mb-8 md:mr-auto md:ml-auto transform transition hover:scale-150"
                  alt="Photo of stage awaiting start of show." />
            </div>
            <br />
            <div className="flex flex-col text-xl bg-black mt-8 pt-8 pb-8 pr-4 pl-4 border-solid border-2 md:border-4 border-[#F0F0F0] ">Riverside Transport museum  and Tall Ship Glenlee
              <Image
                  src={ GlasgowTramJT }
                  className=" w-[100%] md:w-[60%] lg:w-[50%]  mt-4 md:mt-8 mb-8 md:mr-auto md:ml-auto transform transition hover:scale-150"
                  alt="Photo of Jill boarding tram in Riverside Transport Museum" />
                  <Image
                  src={ TallShipBT }
                  className=" w-[100%] md:w-[60%] lg:w-[50%]  mt-4 md:mt-8 mb-8 md:mr-auto md:ml-auto transform transition hover:scale-150"
                  alt="Photo of Bernard with Tall Ship Glenlee in the background." />
            </div>
            <br />
             <div className="flex flex-col text-xl bg-black mt-8 pt-8 pb-8 pr-4 pl-4 border-solid border-2 md:border-4 border-[#F0F0F0] ">Kelvingrove Art gallery and museum
              <Image
                  src={ KelvingroveExteriorBT }
                 className=" w-[100%] md:w-[60%] lg:w-[50%]  mt-4 md:mt-8 mb-8 md:mr-auto md:ml-auto transform transition hover:scale-150"
                  alt="Photo of outside of Kelvingrove Museum and Art Gallery" />
                  <Image
                  src={ KelvingroveOrgan }
                  className=" w-[100%] md:w-[60%] lg:w-[50%]  mt-4 md:mt-8 mb-8 md:mr-auto md:ml-auto transform transition hover:scale-150"
                  alt="Photo of Kelvingrove Organ" />
            </div>
            <br />
            </div>
        </div>
<br />
<br />
<div className="text-white text-center font-semibold text-lg md:text-2xl pt-3 pb-4 pr-4 pl-4 bg-[#bb252b] border-solid border-2 border-[#165b33] m-2">
            <div className="border-black border-2 md:border-4 rounded-md text-white mr-[5%] ml-[5%]  md:mr-[10%] md:ml-[10%] pb-2 pt-2 bg-[#165b33]">Events</div>
            <div>
             <div className="flex flex-col text-xl md:text-2xl bg-black mt-8 pb-8 pt-8 pr-4  pl-4 border-solid border-2 md:border-4 border-[#F0F0F0] ">Harry's PhD Graduation in Cardiff.
              
              <Image
                  src={ harrybiophoto }
                   className=" w-[100%] md:w-[60%] lg:w-[50%]  mt-4 md:mt-8 mb-8 md:mr-auto md:ml-auto transform transition hover:scale-150"
                  alt="Photo of Harry in his Doctoral regalia" />
                  <Image
                  src={ CardiffGraduationBJH }
                  className=" w-[100%] md:w-[60%] lg:w-[50%]  mt-4 md:mt-8 mb-8 md:mr-auto md:ml-auto transform transition hover:scale-150"
                  alt="Photo of Bernard, Jill and Harry at Cardiff university." />
            </div>
            <br />
              <br />
            <div className="flex flex-col text-xl bg-black mt-8 pt-8 pb-8 pr-4 pl-4 border-solid border-2 md:border-4 border-[#F0F0F0] ">Bernard learns to fly an Airbus 320
              <Image
                  src={ pilotbPassed }
                   className=" w-[100%] md:w-[60%] lg:w-[50%]  mt-4 md:mt-8 mb-8 md:mr-auto md:ml-auto transform transition hover:scale-150"
                  alt="Photo of Nermard in the pilot's seat" />
                  <Image
                  src={ FlightDepartures }
                  className=" w-[100%] md:w-[60%] lg:w-[50%]  mt-4 md:mt-8 mb-8 md:mr-auto md:ml-auto transform transition hover:scale-150"
                  alt="Photo of departures' board with Bernard listed." />
            </div>
            <br />
              <br />
             </div>
        </div>
         <br />
<br />

<div className="text-white text-center font-semibold text-lg md:text-2xl pt-3 pb-4 bg-[#bb252b] border-solid border-2 border-[#165b33] m-2">
            <div className="border-black border-2 md:border-4 rounded-md text-white mr-[5%] ml-[5%]  md:mr-[30%] md:ml-[30%] pb-2 pt-2 bg-[#165b33]">Enjoying time with friends</div>
            <div className=":flex flex-col">
            <div className="bg-[#FDDC5C] border-black border-2 text-black text-base ml-4 mr-4 mt-4 p-2">Moira and Geoff</div>
            <div className="bg-[#FDDC5C] border-black border-2 text-black text-base ml-4 mr-4 mt-4 p-2">Robin and Cathy with their dogs Wilf and Nell
              <br />
              <Image
                  src={ WildSwimming }
                 className=" w-[100%] md:w-[60%] lg:w-[50%]  mt-4 md:mt-8 mb-8 md:mr-auto md:ml-auto transform transition hover:scale-150"
                  alt="Photo of Cathy with Wilf and Nelf" />
            </div>
            <div className="bg-[#FDDC5C] border-black border-2 text-black text-base ml-4 mr-4 mt-4 p-2">Pat and Dermot and their dog Archie
              <br />
              <Image
                  src={ Archie }
                 className=" w-[100%] md:w-[60%] lg:w-[50%]  mt-4 md:mt-8 mb-8 md:mr-auto md:ml-auto transform transition hover:scale-150"
                  alt="Photo of Archie, Pat and Dermot's dog" />
                  </div>   
            <div className="bg-[#FDDC5C] border-black border-2 text-black text-base ml-4 mr-4 mt-4 p-2">Paul and Kamla</div> 
            <div className="bg-[#FDDC5C] border-black border-2 text-black text-base ml-4 mr-4 mt-4 p-2">Tom</div> 
            <br />
           
             </div>
              
             
        </div>
         <br />
<br />
  
        <div className="text-white text-center font-semibold text-lg md:text-xl pt-3 pb-4 m-2 bg-[#bb252b] border-solid border-2 border-[#165b33]">
            <div className="border-black border-2 md:border-4 rounded-md text-white mr-[5%] ml-[5%] md:mr-[30%] md:ml-[30%] pb-2 pt-2 bg-[#165b33]">Achievements
            </div>
            <div  className="mt-8">
              <div className="bg-[#FDDC5C] border-black border-2 text-black text-xl font-semibold ml-4 mr-4 mt-4 pt-6 pr-2 pl-2 pb-2">
           <div className="bg-[#165b33] mr-[10%] ml-[10%] border-2 border-black text-[#F0F0F0]">Bernard </div> 
             <br />
             <Image
                  src={ pilotbPassed }
                 className=" w-[100%] md:w-[60%] lg:w-[50%]  mt-4 md:mt-8 mb-8 md:mr-auto md:ml-auto transform transition hover:scale-150"
                  alt="Photo of Bernard in pilot's seat" />
            Learning Spanish and French. 
             <br />
             Learning how to fly an airbus.
              <br />
               <br />
               </div>
               <div className="bg-[#FDDC5C] border-black border-2 text-black text-xl font-semibold ml-4 mr-4 mt-4 pt-6 pr-2 pl-2 pb-2">
             <div className="bg-[#165b33] mr-[10%] ml-[10%] border-2 border-black text-[#F0F0F0]">Jill </div>
             <br />
              <Image
                  src={ JillDec2025 }
                 className=" w-[100%] md:w-[60%] lg:w-[50%]  mt-4 md:mt-8 mb-8 md:mr-auto md:ml-auto transform transition hover:scale-150"
                  alt="Photo of Jill Dec 2025" />
            Learning how to read early modern Scottish palaeography, 
             <br />
              <br />
             Further developing software skills and creating new blog.
            <br />
             <br />
             </div>
             <div className="bg-[#FDDC5C] border-black border-2 text-black text-xl font-semibold ml-4 mr-4 mt-4 pt-6 pr-2 pl-2 pb-2">
        <div className="bg-[#165b33] mr-[10%] ml-[10%] border-2 border-black text-[#F0F0F0]">Harry </div>
             <br />
             <Image
                  src={ HarryCardiff }
                 className=" w-[100%] md:w-[60%] lg:w-[50%]  mt-4 md:mt-8 mb-8 md:mr-auto md:ml-auto transform transition hover:scale-150"
                  alt="Photo of Harry in smart clothes July 2025" />
            Graduating with his PhD,  
            <br />
             <br />
            Obtaining employment as a Digital and Technology Solutions professional with one of the local councils. 
             <br />
             <br />
            </div>
            </div>
        </div>


         <div className="text-white text-center font-semibold text-lg md:text-xl pt-8 pb-4 pl-4 pr-4 bg-[#bb252b] border-solid border-2 border-[#165b33] m-2">
<div className="bg-[#165b33] p-6 font-normal">So 2025 has been a good year with many happy memories. We have compiled a 'Best of 2025' photo album which you can open to see and read about all the photo highlights by clicking on the photo below.</div>
<br />
<br />
<Link
                href="https://photos.app.goo.gl/TQ4J3kB8gRWcP64m7"
                target="_blank"
              >
         <Image
                  src={ harrybiophotoTitled }
                  className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[60%] border-solid border-black-400 border-4 mt-1 mb-11 rounded-[70%]"
                  alt="Photo of Harry at his PhD graduation"
                />
                </Link>

                <div className="bg-[#165b33] p-6 font-normal">Lennie has also had a good year although, he says he is getting older and as such cannot be as entertaining as he used to be (he is now 13 years old). 
                  <br />
                    <br />
                  We have compiled a 'Best of Lennie 2025' photo album which you can open by clicking on the photo below.</div>
<br />
<br />
<Link
                href="https://photos.app.goo.gl/u2ubkRjwvjAKU7eaA"
                target="_blank"
              >
         <Image
                  src={ Lennie20250815Titled }
                  className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[60%] border-solid border-black-400 border-4 mt-1 mb-11 rounded-[70%]"
                  alt="Photo of Harry at his PhD graduation"
                />
                </Link>

            <div className="bg-[#165b33] p-6 font-normal">As is typical of Northern Cumbria, we had the best and worst of weather in 2025 including a beautiful, fantastic long and warm Spring, Summer and early Autumn whilst still managing to avoid the excessively high temperatures of the south of England. In addition there were some notable storms including Storm Éowyn in January 2025 which caused significant damage to buildings and trees at the local tarn and Storm Bram in December 2025. 
                  <br />
                    <br />
                  We have compiled a 'Best and worst of weather 2025' photo album which you can open by clicking on the photo below.</div>
<br />
<br />
<Link
                href="https://photos.app.goo.gl/1hByfKnR9Rihk1H17"
                target="_blank"
              >
         <Image
                  src={ WorstWeatherTitled }
                  className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[60%] border-solid border-black-400 border-4 mt-1 mb-11 rounded-[70%]"
                  alt="Photo of Harry at his PhD graduation"
                />
                </Link>

                <div className="bg-[#165b33] p-6 font-normal">We have also added an album of the cutest of the animals we met in 2025 (excluding Lennie of course because he has his only separate, special album). 
                  <br />
                    <br />
                  We have compiled a 'Cutest animals and birds 2025' photo album which you can open by clicking on the photo below.</div>
<br />
<br />
<Link
                href="https://photos.app.goo.gl/8ekAM6vfKGCt65n2A"
                target="_blank"
              >
         <Image
                  src={ CutestTitled }
                  className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[60%] border-solid border-black-400 border-4 mt-1 mb-11 rounded-[70%]"
                  alt="Photo of cute lambs surrounding Bernard."
                />
                </Link>

                                   <div className="bg-[#165b33] p-6 font-normal">Last but not least, it has been a great year for enjoying the garden, which has now become a more mature garden. We like to describe it as a garden of colourful, creative chaos. It probably would not suit a person whose taste leans more towards a closely manicured French garden style but the world would be very boring if all garden styles were identical and our cottage-garden effect with the many flowers and plants it contains are a real attraction for many threatened species of wildlife.
                  <br />
                    <br />
                  We have compiled a 'Best of the Garden 2025' photo album which you can open by clicking on the photo below.</div>
<br />
<br />
<Link
                href="https://photos.app.goo.gl/BjTKk74WjV9NrYmf7"
                target="_blank"
              >
         <Image
                  src={ BestGardenTitled }
                  className="block ml-auto mr-auto h-auto w-[90%] md:w-[70%] lg:w-[60%] border-solid border-black-400 border-4 mt-1 mb-11 rounded-[70%]"
                  alt="Photo of colourful garden June 2025."
                />
                </Link>
                </div>
            
            </div>

  );
}