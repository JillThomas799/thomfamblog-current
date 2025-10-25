'use client';

import { useState } from "react";
import Link from "next/link";
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
        onClick={()=> setIsCollapsed(!isCollapsed)} className="w-auto h-auto bg-slate-300 md:bg-gray-800 text-gray-800 md:text-gray-200 font-bold text-md items-center gap-x-10 focus:outline-none">BLOG MENU<MenuIcon /> 
    </Button>


{! isCollapsed && (
    <div className="flex flex-col md:flex-row md:flex-wrap md:place-content-evenly">  
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
    </div>
)}
</div>
  );
}
    
export default BlogMenuBar;