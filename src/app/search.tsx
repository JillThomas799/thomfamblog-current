// 'use client';

// import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
// import { useSearchParams, usePathname, useRouter } from 'next/navigation';
 
// export default function Search({ placeholder }: { placeholder: string }) {
//   const searchParams = useSearchParams();
//     const pathname = usePathname();
//   const { replace } = useRouter();
//   function handleSearch(term: string) {
//       const params = new URLSearchParams(searchParams);
//   if (term) {
//       params.set('query', term);
//     } else {
//       params.delete('query');
//     }
//      replace(`${pathname}?${params.toString()}`);
//   }
 
//   return (
//     <div className="relative flex flex-1 flex-shrink-0">
//       <label htmlFor="search" className="sr-only">
//         Search
//       </label>
//       <input
//         className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-md outline-2 placeholder:grey-500"
//         placeholder={'Search required monthly blog in format monthyear eg. August2025'}
//         onChange={(e) => {
//           handleSearch(e.target.value);
//         }}
//          defaultValue={searchParams.get('query')?.toString()}
//       />
//       <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[24px] w-[18px] -translate-y-1/2 text-white peer-focus:text-gray-900" />
//     </div>
//   );
// }

// //This file is the api end point for our searchQuery. It is the code in this file which enables us to connect to our database to look for the terms of our searchQuery.

// import { Month } from "@prisma/client";
// import type { NextApiRequest, NextApiResponse } from "next";
// import { PrismaClient, Prisma } from "@prisma/client";  
// import SearchInput from "./dashboard/search/searchinput";



// const prisma =  new PrismaClient()          //Creates an instance of this class. With the prisma variable, you have access to altering and executing commands to your table.  It has full details of how our schema is because we ran the 'generate' function. 


//  async function handler(
//   req: NextApiRequest,   res: NextApiResponse) {
//   if (req.method === "GET") {
//     try {
//       const { q: query } = req.query;

//       if (typeof query !== "string") {
//         throw new Error("Invalid request");
//       }

//       /**
//        * Search months
//        */
//       const months: Array<Month> = await prisma.month.findMany({
//         where: {
//           OR: [
//             {
//               month: {
//                 contains: query,
//                 mode: "insensitive",
//               },
//             },
//             {
//               component: {               
//                   contains: query,                
//               },
//             },
//             {
//               id: {               
//                   contains: query,                
//               },
//             },
//           ],
//         },
//       });

      

//       res.status(200).json({ months });
//     } catch (error: any) {
//       console.log(error);
//       res.status(500).end();
//     }
//   }
// }