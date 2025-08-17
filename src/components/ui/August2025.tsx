"use client"
import * as React from "react"
import Image from 'next/image'
import blog2025 from '/public/imagesresized/blog2025.png'

export default function August2025() {

  return (
   
<div>
    <div className="mb-20">
        <div className="text-[#244845] text-center font-bold text-4xl p-8  bg-[#E64833]">August 2025
        </div>

   <div className="flex items-start gap-2.5">
   <div className="flex flex-col w-1/2 max-w-[320px] leading-5 p-8 m-8 border-solid border-gray-700 bg-[#FBE9D0] text-[#244845] rounded-e-xl rounded-es-xl dark:bg-[#FBE9D0">
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
         <span className="font-bold text-2xl text-[#244845] dark:text-[#244845]">What is the Thomas Family up to this month?</span>
      </div>
    </div>
</div>
 <div className="flex flex-row justify-end">
   <div className="flex flex-col w-1/2 max-w-full leading-1.5 p-4 m-8 border-gray-800 bg-[#FBE9D0] rounded-tl-3xl rounded-bl-3xl rounded-br-3xl">
      <div className="flex flex-col justify-center">
         <div className="text-lg font-bold text-[#244845] text-center dark:text-[#244845] justify-center items-center">
        <div className="font-normal"> There is plenty in the diary
         <br />
         <br />
         </div>
         <ul className="list-disc list-inside pl-4 text-align-left">
          <li className="text-[#874F41]">Visit to London for the day to visit Westminster Abbey and Buckingham Palace.</li>
          <li className="text-[#874F41]">Short break in Southsea near Portsmouth, hopefully to see the Marie Rose and HMS Victory, Stonehenge, Winchester and the Isle of Wight.</li>
          <li className="text-[#874F41]">Harry prepares for his new job-start in September to become a Digital and Technology professional</li>
          <li className="text-[#874F41]">Elena's partner comes to tea</li>
          <br />
         <br />
         </ul>
         <div className="font-normal">So there has been lots to learn and much still to learn... </div>
      </div>
      </div>
    </div>
</div>
    
    <div className="flex items-start gap-2.5">
   <div className="flex flex-col w-1/2 max-w-[320px] leading-5 p-8 m-8 border-solid border-gray-700 bg-[#FBE9D0] text-[#244845] rounded-e-xl rounded-es-xl dark:bg-[#FBE9D0">
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
         <span className="font-bold text-2xl text-[#244845] dark:text-[#244845]">What's new otherwise this month?</span>
      </div>
    </div>
</div>
 <div className="flex flex-row justify-end">
   <div className="flex flex-col w-1/2 max-w-full leading-1.5 p-4 m-8 border-gray-800 bg-[#FBE9D0] rounded-tl-3xl rounded-bl-3xl rounded-br-3xl">
      <div className="flex flex-col justify-center">
         <div className="text-lg font-bold text-[#244845] text-center dark:text-[#244845] justify-center items-center">
         A NEW SECURE INTERACTIVE WEBSITE 
        <div className="font-normal"> which has the following new features
         </div>
         <br />
         <br />
         <ul className="list-disc list-inside pl-4 text-align-left">
          <li className="text-[#874F41]">Secure log-in.</li>
          <li className="text-[#874F41]">Post comments</li>
          <li className="text-[#874F41]">Add photos</li>
          <br />
         <br />
         </ul>
         <div className="font-normal">So do feel welcome to add comments, post a suitable photo of your own and be reassured that you have privacy and additional security throughout!
         <br />
         <br />
         </div>
      </div>
      <Image src={blog2025} w-full height={300} alt="Picture of the new website" />     
    </div>
    </div>
</div>
<div className="flex items-start gap-2.5">
   <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-8 m-8 border-gray-500 bg-[#FBE9D0] text-[#244845] rounded-e-xl rounded-es-xl dark:bg-[#FBE9D0">
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
         <span className="font-bold text-2xl text-[#244845] dark:text-[#244845]">What has changed in the software?</span>
      </div>
    </div>
</div>
 <div className="flex flex-row justify-end">
   <div className="flex flex-col w-1/2 max-w-full leading-1.5 p-4 m-8 border-gray-800 bg-[#FBE9D0] rounded-tl-3xl rounded-bl-3xl rounded-br-3xl">
      <div className="flex flex-col justify-center">
         <div className="text-lg font-bold text-[#244845] text-center dark:text-[#244845] justify-center items-center">
        <div className="font-normal"> The new app consists of a stack of
         a stack of the following new features
         </div>
         <ul className="list-disc list-inside pl-4 text-align-left">
          <li className="text-[#874F41]">Typescript</li>
          <li className="text-[#874F41]">Clerk.js  for security</li>
          <li className="text-[#874F41]">Neon postgres for database </li>
          <li className="text-[#874F41]">Tailwind css</li>
         </ul>
         <div className="font-normal">So there has been lots to learn and much still to learn... </div>
      </div>
      </div>
    </div>
</div>

    </div>
     </div>
     
);
}