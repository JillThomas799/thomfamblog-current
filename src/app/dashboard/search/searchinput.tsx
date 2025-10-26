"use client"

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";


const SearchInput = () => {
  const search = useSearchParams();
    const [searchQuery, setSearchQuery] = useState<string | null>(
    search ? search.get("q") : ""
  ); //Note that the state variable [searchQuery, setSearchQuery] uses array destructuring  https://javascript.info/destructuring-assignment.
    const router = useRouter();

    const onSearch = (event: React.FormEvent) => {
        event.preventDefault();
         
        if (typeof searchQuery !== "string") {
      return;
    }
    
        const encodedSearchQuery = encodeURIComponent(searchQuery);
        router.push(`/search?q=${encodedSearchQuery}`);
    };

 return (
    <form onSubmit={onSearch} className="flex w-full">     
      <input className="px-5 py-1 w-2/3 sm:px-5 sm:py-3 flex-1 text-zinc-200 bg-zinc-800 focus:bg-black rounded-30% focus:outline-none focus:ring-[1px] focus:ring-green-700 placeholder:text-zinc-400"     
        placeholder="&#128270; Search for blog you wish to view using format: MonthYear"//Addition of unicode for left-hand magnifying glass "&#128270" ensures the icon is lying within the placeholder.
        value={searchQuery || ""}
       onChange={(event) => setSearchQuery(event.target.value)}
        
      /> 
      {/* <MagnifyingGlassIcon className= "absolute py-2 px-[52%] h-[6%] text-zinc-400 font-bold" /> */}
      
    </form>
  );
};

export default SearchInput;