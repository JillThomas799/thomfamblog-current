"use client"

import * as React from "react"
import Image from 'next/image'
import blog2025 from '/public/imagesresized/blog2025.png';
import London16082025Titled from '/public/imagesresized/London16082025Titled.jpg';
import dinosaurrEvolutionTitled from '/public/imagesresized/dinosaurrEvolutionTitled.jpg';
// import { Link } from "lucide-react";
import Link from 'next/link'


export default function August2025() {

  return (
   
<div>
    <div className="mb-20">
        <div className="text-[#244845] text-center font-semibold text-2xl p-3 bg-[#AE9091] border-solid border-2 border-[#22311d]">August 2025
        </div>

   <div className="flex items-start gap-2.5">
   <div className="flex flex-col font-normal max-w-full leading-5 p-4 m-8 border-solid  border-gray-800 border-[2px] bg-[#FBE9D0] text-[#244845] rounded-e-xl rounded-es-xl dark:bg-[#FBE9D0">
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
         <span className="font-semibold text-lg text-[#244845] dark:text-[#244845]">What is the Thomas Family up to this month?</span>
      </div>
    </div>
</div>
 <div className="flex flex-row justify-end">
   <div className="flex flex-col max-w-full leading-1.5 p-4 m-8 border-solid  border-gray-800 border-[2px] bg-[#FBE9D0] rounded-tl-3xl rounded-bl-3xl rounded-br-3xl text-xs">
      <div className="flex flex-col justify-center">
         <div className="text-lg font-semibold text-[#244845] text-center dark:text-[#244845] justify-center items-center">
        <div className="font-bold w-full"> There is plenty in the diary:
          <br />
         </div>
         <ul className="list-disc list-inside space-y-2 pl-4 text-align-left text-md text-[#874F41]">
          <li>Trip to London for the day to visit Westminster Abbey and Buckingham Palace.</li>          
          <li>Short break in Southsea near Portsmouth, hopefully to see Portsmouth Historic Dockyards including the Marie Rose and HMS Victory, Stonehenge and Winchester.</li>          
          <li>Harry prepares for his new job-start in September to become a Digital and Technology professional.</li>        
          <li>Elena's partner comes to tea.</li>          
         </ul>
      </div>
      </div>
    </div>
</div>
    
    <div className="flex items-start gap-2.5">
   <div className="flex flex-col max-w-full leading-5 p-4 m-8 border-solid  border-gray-800 border-[2px] bg-[#FBE9D0] text-[#3C4142]] rounded-e-xl rounded-es-xl dark:bg-[#FBE9D0">
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
         <div className="font-semibold text-lg text-[#3C4142] dark:text-[#3C4142]">What's new otherwise this month?</div>
      </div>
    </div>
</div>
 <div className="flex flex-row justify-end">
   <div className="flex flex-col text-sm md:text-md lg:text-lg xl:text-xl max-w-full leading-1.5 p-4 m-8  border-gray-800 border-solid border-[2px] bg-[#FBE9D0] rounded-tl-3xl rounded-bl-3xl rounded-br-3xl">
      <div className="flex flex-col justify-center">
         <div className="text-lg max-w-full font-bold text-[#244845] text-center dark:text-[#244845] justify-center items-center">
         A NEW SECURE INTERACTIVE WEBSITE 
        <div className="font-normal"> which has the following new features
         </div>
         <ul className="list-disc list-inside pl-4 space-y-2 text-align-left font-semibold text-[#874F41]">
          <li>Secure log-in.</li>
          <li>Post comments</li>
          <li>Add photos</li>
         </ul>
         <br />
         <div className="font-normal">So do feel welcome to add comments, post a suitable photo of your own and be reassured that you have privacy and additional security throughout!
         <br />
         <br />
         </div>
      </div>
      <Image src={blog2025} className="scale-100 hover:scale-150 md:mx-auto md:hover:scale-130"  alt="Picture of the new website" />    
    </div>
    </div>
</div>
<div className="flex items-start gap-2.5">
   <div className="flex flex-col max-w-full leading-1.5 p-4 m-8  border-gray-800 border-solid border-[2px] bg-[#FBE9D0] text-[#244845] rounded-e-xl rounded-es-xl dark:bg-[#FBE9D0">
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
         <span className="font-semibold text-lg text-[#244845] dark:text-[#244845]">What has changed in the software?</span>
      </div>
    </div>
</div>
 <div className="flex flex-col justify-end">
   <div className="flex flex-col max-w-full  leading-1.5 p-4 m-8 border-gray-800 border-solid border-[2px] bg-[#FBE9D0] rounded-tl-3xl rounded-bl-3xl rounded-br-3xl">
      <div className="flex flex-col justify-center">
         <div className="text-lg max-w-full font-bold text-[#244845] text-center dark:text-[#244845] justify-center items-center">
        <div className="font-bold"> The new app consists of a stack of the following new features:
         </div>
         <ul className="list-disc list-inside pl-4 space-y-2 font-semibold text-align-left text-[#874F41]">
          <li>Typescript</li>
          <li>Clerk.js  for authorization and user management</li>
          <li>Neon postgres for database security </li>
          <li>Tailwind css</li>
          <li>Vercel to deploy and host the blog.</li>
         </ul>
         <div className="font-normal text-md">So there has been lots to learn and still much more studying to be done... </div>
      </div>
      </div>
      </div>
       <div className="flex justify-center">
   <div className="flex flex-col max-w-full leading-1.5 p-8 m-4 border-gray-800 border-solid border-2 bg-[#FBE9D0]">
      <div className="flex flex-col justify-center">
         <div className="text-lg max-w-full font-bold text-[#244845] text-center dark:text-[#244845] justify-center items-center">
        <div className="font-bold py-2 px-12"> 16.8.2025</div>
        <div className="font-bold"> Day trip to London to visit Westminster Abbey and Buckingham Palace. </div>
        <div className="pr-3 pl-3 md:pr-20 md:pl-20 font-normal text-left">It was a very early 6am departure to head down to London by train today to visit 2 places we had not yet visited: Westminster Abbey and Buckingham Palace, or at least, we thought we had not visited them. However, it turns out Bernard and Jill had previously visited Buckingham Palace in 1998 but neither could remember ever going there ......! Must have been work fatigue at the time. 
          <br />
          <br />
          Jill had spent the previous week trying to cram the whole of the history of Westminster Abbey in terms of its relationship with the surrounding community, the nation and the wider world throughout time with the help of an extremely readable and well-researched book <Link href="https://www.amazon.co.uk/Westminster-Abbey-History-David-Cannadine/dp/1913107477?crid=32WQ8FZCSYRVX&dib=eyJ2IjoiMSJ9.VWfixm0jckHCq2KLAA7_OeQT7wHjFG0EhPoeHr3H7YpFPgiaOxiyd4lXHGSF5kxo54aVXKc7UHF33sc69m9k1gXC1p6BRrBo_yVPRA2q03fyL2sq5_oPqkI2SXLnHIody5YXQ11FMfe68hbBfCTr0lTrEUVxF0_2A8zCrytRxM_L5FAee8GkYELZfn8Qw6UhrNHC_XeEaIFrT2KwdTnd_iXI9sEFqlRWZOy7xGKrs-8.HL2MQKqJBXroVCQ3tXYK28wjNgazkWzA0IXrAYDgW9s&dib_tag=se&keywords=westminster+abbey&qid=1755707556&sprefix=westminster+abbey%2Caps%2C126&sr=8-1" target="_blank" className="underline decoration-blue-700 text-blue-700 font-bold" >"Westminster: A Church in History"</Link>  by David Canadine. This is a far more readable book than might be imagined and made a real difference to our getting the most out of our visit to the abbey on this occasion.
          <br />
          <br />
          After lunch we headed over to Buckingham Palace for the summer opening tours for the public. We saw the State Rooms on this occasion. We were not allowed to take photos at all during our visit, so sorry no photos available. The staff at the Palace were fantastic and made everything run (more or less) smoothly. It is well worth a visit whatever your views are on the monarchy.
           </div>
           </div>
           </div>
          <div className="flex flex-col border-solid border-4 border-[#22311d] bg-[#99b19d] pb-2 pt-2 mr-[12%] ml-[12%] mt-5 justify-center text-center">
            <div className="mt-1 mb-1 sm:m-2 text-md font-normal block text-[#22311d] bg-[#99b19d]">
              {" "}
                <div className="p-1 font-bold  border-gray-800 border-solid border-2 bg-[#FBE9D0]">Click on the image below <br /> to open the album <br /> of our trip to
                London.</div>
                <br />
              <br />
              <Link
                href="https://photos.app.goo.gl/idXTPMWce6LkBwDFA"
                target="_blank"
              >
                <Image
                  src={ London16082025Titled }
                  className="block ml-auto mr-auto h-auto w-[70%] md:w-[50%] lg:w-[40%] border-solid border-[#22311d] border-4 mt-1 mb-11 rounded-[70%]"
                  alt="Photo of Jill in front of Buckingham Palace"
                />
              </Link>
            </div>{" "}
      </div>
      </div>
      </div>

      <div className="flex justify-center">
   <div className="flex flex-col max-w-full leading-1.5 p-8 m-4 border-gray-800 border-solid border-2 bg-[#FBE9D0]">
      <div className="flex flex-col justify-center">
         <div className="text-lg max-w-full font-bold text-[#244845] text-center dark:text-[#244845] justify-center items-center">
        <div className="font-bold py-2 px-12"> 22.8.2025</div>
        <div className="font-bold"> Visit to the Dinosaur rEvolution exhibition at the Tullie Museum, Carlisle</div>
        <div className="pr-3 pl-3 md:pr-20 md:pl-20 font-normal text-left">This exhibition by Godwana studios arrived at the Tullie at the end of June and is due to run until mid-September. We had heard good reports of it and so today we braved the school holidays to go and take a closer look ourselves before we lost out chance!
          <br />
          <br />
          Until recently our knowledge of dinosaurs was based almost completely on the assumptions which were made from their internal body structure, their bones and tendon attachments. Bones, scales and armour sometimes fossilize well but soft tissues are more difficult to preserve.
          <br />
          <br />
          However more recently, exceptionally well-preserved fossils from China have shown dinosaur soft tissue for the first time, including quills and feathers. These fossils were found in the Yixian Province of China where "Yixian" refers to several locations and formations in China, the most notable being Yi County in Liaoning Province, which is known for the Yixian Formation and its rich dinosaur fossils. 
          <br />
          <br />
          The artist Luis Vrey has written in a <Link href="https://luisvrey.blog/2024/02/16/the-deed-is-done-dinosaur-revolution-is-a-resounding-success-at-the-horniman-museum/" target="_blank" className="underline decoration-blue-700 text-blue-700 font-bold" > blog </Link> relating to the exhibition's showing at the Horniman Museum in London (one of the other sites in the UK where it was showing), and which shows some of the fossil reprints, all about how the exhibition almost did not make it over on time to Europe from Australia and New Zealand. In case you are wondering who Luis Vrey is, Luis Vrey is described by his Wikipedia entry as being best known for his innovative work in the field of dinosaur paleoart. In conjunction with Robert T. Bakker, he promoted awareness of the developing evidence for feathered dinosaurs. Rey is apparently an active member of the Society of Vertebrate Paleontology and of the Dinosaur Society (UK).
          <br />
          <br />
          Additionally, in this <Link href="https://gondwanastudios.com/dinosaur-revolution/" target="_blank" className="underline decoration-blue-700 text-blue-700 font-bold" > article </Link>, Godwana studios talks all about the dinosaur revolution exhibition itself.
          <br />
          <br />
          So, is it worth a visit?  Yes, definitely! The Yixian Province fossil reproductions showing feathers and quills are amazing as are the animated feathery dinosaurs. Even Jill, who cannot be described as the greatest dinosaur enthusiast, really enjoyed it and learnt a lot. We were also very fortunate, since we got talking to one of the voluntary assistants at the museum who turned out to be a retired paleontologist who had spent his working life identifying fossil layers for oil companies so they knew where to avoid when drilling, and advising similarly when the Channel Tunnel was being built.
          <br />
          <br />
          The Dinosaur rEvolution exhibition is showing at the Tullie Museum, Carlisle until the 14th September 2025.

           </div>
           </div>
           </div>
           <div className="flex flex-col border-solid border-4 border-[#22311d] bg-[#99b19d] pb-2 pt-2 mr-[12%] ml-[12%] mt-5 justify-center text-center">
            <div className="mt-1 mb-1 sm:m-2 text-md font-normal block text-[#22311d] bg-[#99b19d]">
              {" "}
                <div className="p-1 font-bold  border-gray-800 border-solid border-2 bg-[#FBE9D0]">Click on the image below <br /> to open the album <br /> of our visit to Dinosaur rEvolution.</div>
                <br />
              <br />
              <Link
                href="https://photos.app.goo.gl/V4FwmKFinH8QFXgFA"
                target="_blank"
              >
                <Image
                  src={ dinosaurrEvolutionTitled }
                  className="block ml-auto mr-auto h-auto w-[70%] md:w-[50%] lg:w-[50%] border-solid border-[#22311d] border-4 mt-1 mb-11 rounded-[70%]"
                  alt="Photo of a dinosaur"
                />
              </Link>
            </div>{" "}
      </div>
           </div>
           

     </div>
     </div>
     </div>
     </div>
);
}