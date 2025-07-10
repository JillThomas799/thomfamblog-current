
import Link from 'next/link'
import React from 'react'
import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'


function Navbar() {
  return (
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="w-screen mx-auto px-4 py-10 border-b-4 border-solid border-neutral-100">
            <div className="flex items-center justify-between h-16">
                <div className="flex-items-centre">
                    <div className=" text-5xl text-slate-500 font-bold text-primary font-mono tracking-wider">Thomas Family Blog</div>
                </div>
                <DesktopNavbar />
                <MobileNavbar />
            </div>
        </div>
    </nav>
  )
}

export default Navbar