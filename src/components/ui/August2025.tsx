"use client"

import * as React from "react"
import Image from 'next/image'
import blog2025 from '/public/imagesresized/blog2025.png';
import London16082025Titled from '/public/imagesresized/London16082025Titled.jpg';
import dinosaurrEvolutionTitled from '/public/imagesresized/dinosaurrEvolutionTitled.jpg';
import Muncaster23082025Titled from '/public/imagesresized/Muncaster23082025Titled.jpg';
import HMSVictoryTitled from '/public/imagesresized/HMSVictoryTitled.jpg';
import Link from 'next/link'


export default function August2025() {

  return (
   
<div>
    <div className="mb-20">
        <div className="text-[#244845] text-center font-semibold text-2xl p-3 bg-[#AE9091] border-solid border-2 border-[#22311d]">August 2025
        </div> {/*End of August month block*/}

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
      </div> {/*End of what has changed in the software*/}

      
     <div className="flex flex-col max-w-full leading-1.5 p-8 m-4 border-gray-800 border-solid border-2  bg-[#FBE9D0]">
         <div className="text-lg max-w-full font-bold text-[#244845] text-center dark:text-[#244845] justify-center items-center">
        <div className="font-bold py-2 px-12"> 30th August 2025</div>
        <div className="font-bold mb-4"> Portsmouth Historic Dockyard day 1: Guided Tour of the Mary Rose and all aboard HMS Victory  with Lord Horatio Nelson to head out to the Battle of Trafalgar against the French and Spanish.</div>
        <div className="pr-3 pl-3 md:pr-20 md:pl-20 font-normal text-left"> Well today, we were well-settled into our accommodation for the duration of our stay and it was time to head off to Portsmouth Historic Dockyard for the first of our 3 visits over the coming days. 
          <br />
          <br />
          Firstly, we were off to see the Mary Rose, the ship which Bernard had long wished to visit and which had been recommended to us by others as well-worth seeing. So here we were, booked on to a guided tour and clasping our guide book in hand.
          <br />
          <br />
          For a little background history, the Mary Rose was one of King Henry VIII's flagships in Tudor times, the other being the Peter Pomegranate. Mary Rose was built for him in 1510 - 1511 and serving for 34 years before sinking in battle against the French (armed with 225 ships and 30,000 men to Henry's 80 ships) in the Battle of the Solent on the 19th July,1545. It remains unclear as to exactly why it capsized, although there are a number of credible theories and a primary source report from one of the subsequent survivors. There were 500 men on board when it sank of whom only 35 survived. 
          <br />
          <br />
          The boat was unable to be raised by King Henry VIII despite his best efforts, and over the years silted over and its location became indiscernible until in 1971, 4 timbers were discovered in a line and these were subsequently discovered to be those of the port side of the Mary Rose. On the 11th October 1982 she was finally successfully raised from the sea bed.
          <br />
          <br />
          The anaerobic environment created by the silt meant that the ship contained thousands of preserved items from an active fighting warship in tudor times and careful preservation and study with up to date techniques has enable the teams involved to extract a wealth of knowledge about life at that time. The Mary Rose exhibition displays some of the key items.
          <br />
          <br />
          This <Link href="https://open.spotify.com/episode/0duZBdwzqWbzvh9me0Y4EA?si=luOZrDYQRzWH-U101WhWug" target="_blank" className="underline decoration-blue-700 text-blue-700 font-bold">Not Just the Tudors</Link> podcast talks about the sinking of the Mary Rose. There is far too much that can be related about the Mary Rose, its discovery and subsequent salvage and restoration to discuss here but it is well worth the visit and finding out more.

                     <div className="flex flex-col border-solid border-4 border-[#22311d] bg-[#99b19d] pb-2 pt-2 mr-[12%] ml-[12%] mt-5 justify-center text-center">
            <div className="mt-1 mb-1 sm:m-2 text-md font-normal block text-[#22311d] bg-[#99b19d]">
              {" "}
                <div className="p-1 font-bold  border-gray-800 border-solid border-2 bg-[#FBE9D0]">Click on the image below to open the album of our Day 1 visit to Portsmouth Historic: - Mary Rose Exhibition and HMS Victory.</div>
                <br />
              <br />
              <Link
                href="https://photos.app.goo.gl/S2AUNic8V9jDNx3w8"
                target="_blank"
              >
                <Image
                  src={ HMSVictoryTitled }
                  className="block ml-auto mr-auto h-auto w-[70%] md:w-[50%] lg:w-[50%] border-solid border-[#22311d] border-4 mt-1 mb-11 rounded-[70%]"
                  alt="Photo of HMS Victory"
                />
              </Link>
            </div>{" "}           
      </div>
          <br />
       In the afternoon it was on to HMS Victory, the flagship of the Battle of Trafalgar in 1805 under Admiral Nelson. HMS Victory is the world's oldest naval vessel still in commission. By the time of the Battle of Trafalgar however, it already had been in many conflicts including the: Anglo-French War (1778 - 1783),  American Revolutionary War / American War of Independence (1775-1783) and the French Revolutionary Wars 1792 - 1797.
       <br />
       <br />
        HMS Victory was commissioned in the middle of the Seven Years War/French and Indian War (1756-1763). This war was fought principally at sea and HMS Victory was commissioned to be a 'First-Rate ship' ie. one that had at least 100 guns. By the time she was launched for the first time in 1765, the Seven Years War had ended and there was no immediate use for her for the next 12 years.She then went on to serve in numerous conflicts and had after 1797 been considered 'Battle Weary' and unfit for service. At which point she was fitted out as a hospital ship. However in 1799, HMS Impregnable wass lost and the fleet needed a replacement first-rate ship. A 3 year year refit of HMS Victory known as 'The Great Repair' was undertaken. 
       <br />
       <br />
       On the 21st October 1805, she sailed into battle to face the French and Spanish ships which were under the command of Vice_admiral Pierre-Charles-Jean-Baptiste-Silvestre de Villeneuve in the Battle of Trafalgar. Admiral Horatio Nelson died during this battle but the French and Spanish fleet was defeated by the British Royal Navy. 
       <br />
       <br />
       The tour of HMS Victory is accompanied by an audio-tour explaining about the various areas of the ship and taking you through the events of the 21st October 2025. The ship today has been refitted to largely look like it did at the time of the Battle of Trafalgar. HMS Victory has throughout her active service often had her timbers and fittings replaced and this is no different today where, due to death-watch beetle, weather, rot, and wear and tear from the hundreds of visitors each year, she is in the process of having her outer hull planking replaced and repairs made to her internal structure.
       <br />
       <br />
       Finally, to see us out of this blog entry, HMS Victory will take us out with <Link href="https://youtu.be/f_FpYLnNhVw?si=Pua9zvxv9O4d_HZC" target="_blank" className="underline decoration-blue-700 text-blue-700 font-bold">HMS Victory in action, firing rolling broadside</Link>.

           </div> {/*End of news content block*/}            
           </div> {/*End of individual dated entry design and color template block*/}
           </div>  {/*End of individual dated entry block*/}

       <div className="flex flex-col max-w-full leading-1.5 p-8 m-4 border-gray-800 border-solid border-2  bg-[#FBE9D0]">     
         <div className="text-lg max-w-full font-bold text-[#244845] text-center dark:text-[#244845] justify-center items-center">
        <div className="font-bold py-2 px-12"> 23rd August 2025</div>
        <div className="font-bold mb-4"> Visit to Muncaster Castle, Cumbria</div>
        <div className="pr-3 pl-3 md:pr-20 md:pl-20 font-normal text-left">
          Today we went to visit Muncaster Castle, which is situated just inland from the west coast of Cumbria. This castle is a must-see site if you are over this way as it has been in the hands of the same family, the Penningtons, for at least the last 800 years , with documented evidence of their presence at Muncaster since 1208, when lands were granted to Alan de Penitone. 
          <br />
          <br />
          There is lots of history associated with the Castle, as amongst other things, tales tell of a Sir John Pennington offering sanctuary to Henry VI in the 1460s as he fled from defeat at the hands of his Yorkist enemies. Henry VI is said to have been so grateful for the refuge offered that he gifted his Venetian glass drinking vessel to Sir John along with a prophecy: ‘as long as this bowl remains unriven, Penningtons from Muncaster never shall be driven.’ Known since as ‘The Luck of Muncaster’. This is kept hidden from view, but a photo of the bowl can be seen in one of the upstairs bedrooms. The castle also played an important role in defending the borders against the Scots over the centuries. 
           <br />
          <br />
          The 1st Lord Muncaster, on inheriting the castle in the 1780s, transformed the castle under the direction of the architect Anthony Salvin, from a crumbling fortress into a home in which the owners could entertain in the style of that time, complete with an amazing octagonal library, an orangery, sash windows and a folly. Further improvements were made in the nineteenth century.
           <br />
          <br />
          This <Link href="https://open.spotify.com/episode/0WTlyTnvPmgvL4wMaMoTdk?si=4BTz0VdeTAGUzX14b_1s1w" target="_blank" className="underline decoration-blue-700 text-blue-700 font-bold" >podcast on Muncaster Castle</Link>, where an American Countess speaks to the owners of the castle, is fascinating and very entertaining but also very enlightening about what life in a castle is really like, <em>(Quick spoiler - it is not like in Downton Abbey)</em>. It also tells of the castle's evolution during the 20th and 21st centuries, including the bears and bear pit in the 1960s and the installation of a ground source heating system for the castle more recently which means the castle is no longer freezing cold. 
          <br />
          <br />
          After a visit around the interior of the castle, in the afternoon we went to the falcon, owl and vulture display, <em>(Ps you have to be ready to duck if necessary)</em>. This was really good fun. We were fortunate in that we did not see any ghosts as apparently the castle is haunted, but if you come back at Halloween, there are lots of spooky events on at the castle including the Muncaster Express, the spooky ghost train, so it might be possible to see one then. 
          <br />
          <br />
          In fact, talking of events, Muncaster Castle is a popular place for events including the Krankenhaus microfestival which was running whilst we were there. Krankenhaus is a small music and arts festival founded by the band Sea Power (formerly called British Sea Power). It is popular for its unique atmosphere, blending music, art, and literature with the natural beauty of its rural location at the castle. It features idiosyncratic modern rock and alternative music, showcasing both established and emerging artists, including Sea Power themselves. We had not hear of Sea Power until now, but apparently they are an Indie band and Elena (who was not with us that day) often listens to them and likes their music. Other festivals throughout the year include a Medieval Muncaster Festival and a sausage festival, amongst others.
           </div>
         
         
           <div className="flex flex-col border-solid border-4 border-[#22311d] bg-[#99b19d] pb-2 pt-2 mr-[12%] ml-[12%] mt-5 justify-center text-center">
            <div className="mt-1 mb-1 sm:m-2 text-md font-normal block text-[#22311d] bg-[#99b19d]">
              {" "}
                <div className="p-1 font-bold  border-gray-800 border-solid border-2 bg-[#FBE9D0]">Click on the image below to open the album of our visit to Muncaster Castle.</div>
                <br />
              <br />
              <Link
                href="https://photos.app.goo.gl/FR3yamUJ5JP7wwyC7"
                target="_blank"
              >
                <Image
                  src={ Muncaster23082025Titled }
                  className="block ml-auto mr-auto h-auto w-[70%] md:w-[50%] lg:w-[50%] border-solid border-[#22311d] border-4 mt-1 mb-11 rounded-[70%]"
                  alt="Photo of a dinosaur"
                />
              </Link>
            </div>{" "}
      </div>
           </div> {/*End of individual dated entry photo album block*/}     
     </div>  {/*End of individual dated entry design and color template block*/}
     </div>  {/*End of individual dated entry block*/}

    
     <div className="flex flex-col max-w-full leading-1.5 p-8 m-4 border-gray-800 border-solid border-2  bg-[#FBE9D0]">
         <div className="text-lg max-w-full font-bold text-[#244845] text-center dark:text-[#244845] justify-center items-center">
        <div className="font-bold py-2 px-12"> 22nd August 2025</div>
        <div className="font-bold mb-4"> Visit to the Dinosaur rEvolution exhibition at the Tullie Museum, Carlisle</div>
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
           </div>{/*End of individual dated entry photo album block*/} 
           </div>{/*End of individual dated entry design and color template block*/}
           </div>{/*End of individual dated entry block*/}
           
      <div className="mb-20">
      <div className="flex flex-col max-w-full leading-1.5 p-8 m-4 border-gray-800 border-solid border-2 bg-[#FBE9D0]">
         <div className="text-lg max-w-full font-bold text-[#244845] text-center dark:text-[#244845] justify-center items-center">
        <div className="font-bold py-2 px-12"> 16th August 2025</div>
        <div className="font-bold mb-4 "> Day trip to London to visit Westminster Abbey and Buckingham Palace. </div>
        <div className="pr-3 pl-3 md:pr-20 md:pl-20 font-normal text-left">It was a very early 6am departure to head down to London by train today to visit 2 places we had not yet visited: Westminster Abbey and Buckingham Palace, or at least, we thought we had not visited them. However, it turns out Bernard and Jill had previously visited Buckingham Palace in 1998 but neither could remember ever going there ......! Must have been work fatigue at the time......
          <br />
          <br />
          Jill had spent the previous week trying to cram the whole of the history of Westminster Abbey in terms of its relationship with the surrounding community, the nation and the wider world throughout time with the help of an extremely readable and well-researched book <Link href="https://www.amazon.co.uk/Westminster-Abbey-History-David-Cannadine/dp/1913107477?crid=32WQ8FZCSYRVX&dib=eyJ2IjoiMSJ9.VWfixm0jckHCq2KLAA7_OeQT7wHjFG0EhPoeHr3H7YpFPgiaOxiyd4lXHGSF5kxo54aVXKc7UHF33sc69m9k1gXC1p6BRrBo_yVPRA2q03fyL2sq5_oPqkI2SXLnHIody5YXQ11FMfe68hbBfCTr0lTrEUVxF0_2A8zCrytRxM_L5FAee8GkYELZfn8Qw6UhrNHC_XeEaIFrT2KwdTnd_iXI9sEFqlRWZOy7xGKrs-8.HL2MQKqJBXroVCQ3tXYK28wjNgazkWzA0IXrAYDgW9s&dib_tag=se&keywords=westminster+abbey&qid=1755707556&sprefix=westminster+abbey%2Caps%2C126&sr=8-1" target="_blank" className="underline decoration-blue-700 text-blue-700 font-bold" >"Westminster: A Church in History"</Link>  by David Canadine. This is a far more readable book than might be imagined and made a real difference to our getting the most out of our visit to the abbey on this occasion.
          <br />
          <br />
          After lunch we headed over to Buckingham Palace for the summer opening tours for the public. We saw the State Rooms on this occasion. We were not allowed to take photos at all during our visit, so sorry no photos available. The staff at the Palace were fantastic and made everything run (more or less) smoothly. It is well worth a visit whatever your views are on the monarchy.
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
      </div>{/*End of individual dated entry photo album block*/} 
      </div>{/*End of individual dated entry design and color template block*/}
      </div>{/*End of individual dated entry block*/}
  
     </div> {/*End of August block*/}
     </div>
);
}