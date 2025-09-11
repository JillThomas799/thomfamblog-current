"use client"

import * as React from "react"
import Image from 'next/image'
import Link from 'next/link'
import WinchesterCathedralTitled from '/public/imagesresized/WinchesterCathedralTitled.jpg';


export default function September2025() {

  return (
   
<div>
    <div  className="mb-20">
        <div className="text-[#244845] text-center font-semibold text-2xl p-3 bg-[#AE9091] border-solid border-2 border-[#22311d]">September 2025
        </div> {/*End of September month block*/}

      <div className="mb-20">
      <div className="flex flex-col max-w-full leading-1.5 sm:p-2 md:p-2 lg:p-2 m-4 border-gray-800 border-solid border-2 bg-[#836A58]">
         <div className="text-md md:text-lg max-w-full font-bold text-[#244845] text-center dark:text-[#244845] justify-center items-center">
        <div className="font-bold py-2 px-12 text-[#FBE9D0] text-center dark:text-[#FBE9D0]"> 1st September 2025</div> {/*End of news date block*/} 
        <div className="font-bold border-solid border-black border-2 mr-1 ml-1 mb-4 px-4 py-4 bg-[#99b19d]">Visit to Winchester to see Winchester Cathedral, <br/> Wolvesey Palace and other Winchester sites</div> {/*End of news header block*/}
        <div className="pr-1 pl-1 md:pr-1 md:pl-1 font-normal text-left">
           <div className="pr-1 pl-1 md:pr-1 md:pl-1 font-normal text-left text-[#FBE9D0] dark:text-[#FBE9D0]">On reading about the history of Westminster Abbey, London prior to our recent visit, the importance of the city of Winchester and its cathedrals had been mentioned on a number of occasions. Winchester is a city which we knew little about and had never visited, so it was time for us to find out more....
            <br />
            <br /> 
            Winchester is a fascinating city. For those disbelievers who are looking at me quizzically with raised eyebrows at this point, just bear with me and let me explain. London has not always been the capital of England. Before a unified England came into being in the year CE 927 under the reign of the Anglo-Saxon King Aethelstan, King of Wessex, England was divided into 4 main kingdoms: Wessex, Mercia, Northumbria (<em>Yeah!</em>) and East Anglia. The city of Winchester was the capital of Wessex which comprises the modern day counties of Hampshire, Dorset, Wiltshire, and Somerset, with historical extensions into Devon, Cornwall, and Berkshire and was, in the Anglo-Saxon period, one of the most important cities in England. 
            <br />
            <br /> 
            There are records of there having been a  church in Winchester since the 7th century CE when the Old Minster was founded. This was followed by the new minister and then in 1079, during William of Normandy's reign, the current cathedral was commenced. Winchester cathedral is the burial site of 12 English kings and ancient monarchs. The Saxon Kings of Wessex were buried in the 'Old' or 'New' Minsters (which don't exist anymore). Some of their remains are now stored in caskets in Winchester Cathedral. Winchester was also the burial place for two of the four Danish Kings of England, King Cnut and his son Harthacnut. The last monarch to be buried in the city was the Norman king William II, killed by an arrow whilst hunting in the nearby New Forest. Winchester cathedral is also the burial place of the author Jane Austin and there is a plaque to mark her grave and in the North Aisle and a memorial window and plaque to commemorate her.
            <br />
            <br /> 
            We were fortunate to be able to first go to visit the ruins of Wolvesey Palace/Castle, the residence of the bishops of Winchester in the late 10th century. It was originally the chief residence of the Bishops of Winchester, who were amongst the richest and most powerful figures in medieval England. As a result, it is one of the greatest medieval buildings in England.   
            <br />
            <br /> 
            We were subsequently able to take a guided tour around Winchester cathedral, which is interesting even if you are not a particularly religious person, as the religious elements and features intertwine with historical events so closely, particularly the Anglo-Saxon kings and kingdoms, the Anglo-Danes, the House of Normandy, King Henry VIII and the Civil War when parliamentarian forces broke into the cathedral and caused major destruction and damage to the caskets containing the bones held there. There is a very interesting article in the New Statesman  <Link href="https://www.newstatesman.com/culture/books/2023/10/bones-that-built-britain-cat-jarman" target="_blank" className="underline decoration-blue-700 text-blue-700 font-bold">'The Bones that built Britain'</Link> which is well worth a read together with this excellent book by Cat Jarman <Link href="https://www.waterstones.com/book/the-bone-chests/cat-jarman/9780008447311" target="_blank" className="underline decoration-blue-700 text-blue-700 font-bold">The Bone Chests"</Link> telling all about the time of the bones from when they were seized by Cromwell's forces through to an ongoing archeological analysis and restoration of the skeletons present using modern day techniques.
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
                  className="block ml-auto mr-auto h-auto w-[70%] md:w-[70%] lg:w-[70%] border-solid border-[#22311d] border-2 mt-1 mb-11 rounded-[70%]"
                  alt="Photo of Jill in front of Buckingham Palace"
                />
              </Link>
            </div>{" "}
      </div>{/*End of individual dated entry photo album block*/} 
           </div> {/*End of news content block*/}
           </div> {/*End of individual dated entry design and color template block*/}
           </div> {/*End of individual dated entry block*/}

          
          
      </div> {/*End of September block*/}

     </div>
     </div>
);
}