'use client';

import { useState } from "react";
import Link from "next/link";
import  LoadingSpinner  from "@/components/ui/spinner"
import {
  BellIcon,
  HomeIcon,
  LogOutIcon,
  MenuIcon,
  MoonIcon,
  SunIcon,
  UserIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const BlogMenuBar=()    => {
    const [isCollapsed , setIsCollapsed] = useState(true);
  return (
  <div className={` h-10 bg-gray-800 text-gray-100 mb-4 flex flex-col ${isCollapsed ? 'h-10':'h-full w-full'} transition-all duration-300`}>
    <Button 
      variant="outline"
      onClick={() => setIsCollapsed(!isCollapsed)}
      className="w-auto h-auto bg-gray-300 md:dark:bg-gray-800 text-gray-800 md:text-gray-800 md:dark:text-gray-200 font-bold text-md items-center gap-x-10 focus:outline-none"
    >
      BLOG MENU <MenuIcon />
    </Button>


{! isCollapsed && (
    <div className="flex flex-col md:flex-row md:flex-wrap md:place-content-evenly"> 
    {/* <div className="text-center h-15 bg-gray-800 border-b border-gray-700 font-semibold p-4 hover:text-blue-300">
      <Link href="/" >Home</Link></div>  */}
      <div className="text-center h-15 bg-gray-800 border-b border-gray-700 font-semibold p-4 hover:text-blue-300">
      <Link href="/dashboard/months/hwp2024" >Hadrian's Wall Path 2024</Link></div>
       <div className="text-center h-15 bg-gray-800 border-b border-gray-700 font-semibold p-4 hover:text-blue-300">
      <Link href="/dashboard/months/june2025" >June 2025</Link></div>
       <div className="text-center h-15 bg-gray-800 border-b border-gray-700 font-semibold p-4 hover:text-blue-300">
      <Link href="/dashboard/months/july2025" >July 2025</Link></div>
    <div className="text-center h-15 bg-gray-800 border-b border-gray-700 font-semibold p-4 hover:text-blue-300">
      <Link href="/dashboard/months/august2025" >August 2025</Link></div>
       <div className="text-center h-15 bg-gray-800 border-b border-gray-700 font-semibold  p-4 hover:text-blue-300">
      <Link href="/dashboard/months/september2025" >September 2025</Link>
    </div>
    <div className="text-center h-15 bg-gray-800 border-b border-gray-700 font-semibold p-4 hover:text-blue-300">
      <Link href="/dashboard/months/october2025" >October 2025</Link>
    </div>
    <div className="text-center h-15 bg-gray-800 border-b border-gray-700 font-semibold p-4 hover:text-blue-300">
      <Link href="/dashboard/months/november2025" >November 2025</Link>
    </div>
    <div className="text-center h-15 bg-gray-800 border-b border-gray-700 font-semibold p-4 hover:text-blue-300">
      <Link href="/dashboard/months/december2025" >December 2025</Link>
    </div>
    <div className="text-center h-15 bg-gray-800 border-b border-gray-700 font-semibold p-4 hover:text-blue-300">
      <Link href="/dashboard/months/bestof2025" >Best of 2025</Link>
    </div>
    <div className="text-center h-15 bg-gray-800 border-b border-gray-700 font-semibold p-4 hover:text-blue-300">
      <Link href="/dashboard/months/january2026" >January 2026</Link>
    </div>
    <div className="text-center h-15 bg-gray-800 border-b border-gray-700 font-semibold p-4 hover:text-blue-300">
      <Link href="/dashboard/months/february2026" >February 2026</Link>
    </div> 
    <div className="text-center h-15 bg-gray-800 border-b border-gray-700 font-semibold p-4 hover:text-blue-300">
      <Link href="/dashboard/months/march2026" >March 2026</Link>
    </div> 
    <div className="text-center h-15 bg-gray-800 border-b border-gray-700 font-semibold p-4 hover:text-blue-300">
      <Link href="/dashboard/months/april2026" >April 2026</Link>
    </div> 
     <div className="text-center h-15 bg-gray-800 border-b border-gray-700 font-semibold p-4 hover:text-blue-300">
      <Link href="/dashboard/months/may2026" >May 2026</Link>
    </div> 
     <div className="text-center h-15 bg-gray-800 border-b border-gray-700 font-semibold p-4 hover:text-blue-300">
      <Link href="/dashboard/months/june2026" >June 2026</Link>
    </div> 
    <div className="text-center h-15 bg-gray-800 border-b border-gray-700 font-semibold p-4 hover:text-blue-300">
      <Link href="/dashboard/months/july2026" >July 2026</Link>
    </div> 
    
    </div>
)}
</div>
  );
}
    
export default BlogMenuBar;