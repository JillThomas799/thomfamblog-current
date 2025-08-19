"use client"

import * as React from "react"
import Image from 'next/image'
import blog2025 from '/public/imagesresized/blog2025.png';
import London16082025Titled from '/public/imagesresized/London16082025Titled.jpg';
// import { Link } from "lucide-react";
import Link from 'next/link'


export default function August2025() {

  return (
   
<div>
    <div className="mb-20">
        <div className="text-[#244845] text-center font-semibold text-2xl p-3 bg-[#AE9091]">August 2025
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
        <div className="font-normal w-full"> There is plenty in the diary:
          <br />
         </div>
         <ul className="list-disc list-inside space-y-6 pl-4 text-align-left text-md text-[#874F41]">
          <li>Trip to London for the day to visit Westminster Abbey and Buckingham Palace.</li>          
          <li>Short break in Southsea near Portsmouth, hopefully to see the Marie Rose and HMS Victory, Stonehenge, Winchester and the Isle of Wight.</li>          
          <li>Harry prepares for his new job-start in September to become a Digital and Technology professional</li>        
          <li>Elena's partner comes to tea</li>          
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
         <div className="text-lg max-w-full font-semibold text-[#244845] text-center dark:text-[#244845] justify-center items-center">
         A NEW SECURE INTERACTIVE WEBSITE 
        <div className="font-normal"> which has the following new features
         </div>
         <br />
         <ul className="list-disc list-inside pl-4 space-y-4 text-align-left font-semibold text-[#874F41]">
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
        <div className="font-normal"> The new app consists of a stack of
         a stack of the following new features
         </div>
         <br />
         <ul className="list-disc list-inside pl-4 space-y-4 font-semibold text-align-left text-[#874F41]">
          <li>Typescript</li>
          <li>Clerk.js  for security</li>
          <li>Neon postgres for database </li>
          <li>Tailwind css</li>
          <li>Vercel to deploy and host the blog.</li>
         </ul>
         <br />
         <div className="font-normal text-md">So there has been lots to learn and still much more studying to be done... </div>
      </div>
      </div>
      </div>
       <div className="flex justify-center">
   <div className="flex flex-col max-w-full leading-1.5 p-8 m-4 border-gray-800 border-solid border-[2px] bg-[#AE9091]">
      <div className="flex flex-col justify-center">
         <div className="text-lg max-w-full font-bold text-[#244845] text-center dark:text-[#244845] justify-center items-center">
        <div className="font-bold py-2 px-12"> 16.8.2025
        <div className="font-bold"> Day trip to London to visit Westminster Abbey and Buckingham Palace.
          <div className="flex flex-col border-solid border-[2px] border-[#22311d] bg-[#99b19d] pb-[2%] pt-[2%] mr-auto ml-auto mt-3 justify-center text-center">
            <div className="mt-[1%] mb-[1%] text-[1.1rem] font-normal block text-[#22311d] bg-[#99b19d]">
              {" "}
                Click on the image below to open the album <br /> of our trip to
                London.
                <br />
              <br />
              <Link
                href="https://photos.app.goo.gl/idXTPMWce6LkBwDFA"
                target="_blank"
                className="underline text-[#d00067] font-bold"
              >
                <Image
                  src={ London16082025Titled }
                  className="block ml-auto mr-auto pointer-events-none h-auto w-[40%] border-solid border-[#22311d] border-[2px] mt-[1%] mb-[1%] rounded-[70%]"
                  alt="Photo of Jill in front of Buckingham Palace"
                />
              </Link>
            </div>{" "}
            
          </div>
        
      </div>
      </div>
</div>

    </div>
     </div>
     </div>
     </div>
     </div>
     </div>
);
}